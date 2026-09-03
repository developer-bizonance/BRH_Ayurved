import fs from 'fs/promises';
import path from 'path';
import https from 'https';
import http from 'http';

async function walk(dir, fileList = []) {
  const files = await fs.readdir(dir, { withFileTypes: true });
  for (const file of files) {
    if (file.isDirectory()) {
      if (['node_modules', '.next', '.git'].includes(file.name)) continue;
      await walk(path.join(dir, file.name), fileList);
    } else {
      if (file.name.match(/\.(tsx?|jsx?|json|css)$/)) {
        fileList.push(path.join(dir, file.name));
      }
    }
  }
  return fileList;
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      if (res.statusCode === 200) {
        let data = [];
        res.on('data', chunk => data.push(chunk));
        res.on('end', async () => {
          const buffer = Buffer.concat(data);
          await fs.mkdir(path.dirname(dest), { recursive: true });
          await fs.writeFile(dest, buffer);
          resolve();
        });
      } else if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // Handle redirects
        downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      } else {
        reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function main() {
  const rootDir = process.cwd();
  console.log('Searching for files in', rootDir);
  const files = await walk(rootDir);
  console.log(`Found ${files.length} files to scan.`);

  const urlRegex = /https?:\/\/(?:www\.)?brharneayurved\.in\/([^"'\s\)]+)/g;
  const assetMap = new Map(); // originalUrl -> { relativePath, newUrl }

  for (const file of files) {
    const content = await fs.readFile(file, 'utf8');
    let match;
    while ((match = urlRegex.exec(content)) !== null) {
      const fullUrl = match[0];
      const assetPath = match[1]; // e.g. uploads/gallery/s5.jpg
      
      // Skip if it's just a regular webpage link and not an asset
      if (!assetPath.match(/\.(jpg|jpeg|png|gif|webp|svg|pdf|doc|docx|pdf)$/i) && !assetPath.includes('uploads/')) {
        continue;
      }

      if (!assetMap.has(fullUrl)) {
        const decodedPath = decodeURIComponent(assetPath);
        assetMap.set(fullUrl, {
          originalUrl: fullUrl,
          localDest: path.join(rootDir, 'public', decodedPath),
          newUrl: `/${decodedPath}`
        });
      }
    }
  }

  console.log(`Found ${assetMap.size} unique assets to migrate.`);

  let downloadedCount = 0;
  for (const asset of assetMap.values()) {
    try {
      try {
        await fs.access(asset.localDest);
      } catch {
        console.log(`Downloading ${asset.originalUrl} to ${asset.localDest}...`);
        await downloadFile(asset.originalUrl, asset.localDest);
        downloadedCount++;
        await new Promise(r => setTimeout(r, 100)); // Be nice to the server
      }
    } catch (err) {
      console.error(`Error downloading ${asset.originalUrl}:`, err.message);
    }
  }

  console.log(`Downloaded ${downloadedCount} new assets.`);
  console.log('Replacing URLs in files...');

  let replacedFiles = 0;
  for (const file of files) {
    let content = await fs.readFile(file, 'utf8');
    let modified = false;

    for (const [originalUrl, asset] of assetMap.entries()) {
      if (content.includes(originalUrl)) {
        content = content.split(originalUrl).join(asset.newUrl);
        modified = true;
      }
    }

    if (modified) {
      await fs.writeFile(file, content, 'utf8');
      replacedFiles++;
    }
  }

  console.log(`Replaced URLs in ${replacedFiles} files.`);
  console.log('Migration complete!');
}

main().catch(console.error);
