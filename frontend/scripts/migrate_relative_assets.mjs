import fs from 'fs/promises';
import path from 'path';
import https from 'https';

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
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        let data = [];
        res.on('data', chunk => data.push(chunk));
        res.on('end', async () => {
          const buffer = Buffer.concat(data);
          await fs.mkdir(path.dirname(dest), { recursive: true });
          await fs.writeFile(dest, buffer);
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function main() {
  const rootDir = process.cwd();
  console.log('Searching for relative /uploads/ paths...');
  const files = await walk(rootDir);

  // Match /uploads/ followed by anything except quotes or brackets
  const urlRegex = /(?:"|'|`|href=|src=)(\/uploads\/[^"'\s>]+)/g;
  const assetSet = new Set();

  for (const file of files) {
    const content = await fs.readFile(file, 'utf8');
    let match;
    // For things with spaces, the regex above will stop at spaces.
    // Let's use a regex that captures everything inside quotes if it starts with /uploads/
    const quoteRegex = /"(\/uploads\/[^"]+)"|'(\/uploads\/[^']+)'/g;
    
    while ((match = quoteRegex.exec(content)) !== null) {
      const assetPath = match[1] || match[2];
      if (assetPath) {
        assetSet.add(assetPath);
      }
    }
  }

  console.log(`Found ${assetSet.size} unique /uploads/ paths in codebase.`);

  let downloaded = 0;
  let failed = 0;

  for (const assetPath of assetSet) {
    try {
      // assetPath might be encoded or unencoded. Let's decode it for local filesystem.
      // But some might have %20 explicitly in the code.
      let decodedPath = decodeURIComponent(assetPath);
      const localDest = path.join(rootDir, 'public', decodedPath);
      
      try {
        await fs.access(localDest);
      } catch {
        // Encode properly for the network request
        // Encode URI component for each path segment separately
        const urlEncodedPath = assetPath.split('/').map(segment => encodeURIComponent(decodeURIComponent(segment))).join('/');
        
        const originalUrl = `https://brharneayurved.in${urlEncodedPath}`;
        console.log(`Downloading ${originalUrl} ...`);
        await downloadFile(originalUrl, localDest);
        downloaded++;
      }
    } catch (err) {
      console.error(`Error for ${assetPath}: ${err.message}`);
      failed++;
    }
  }

  console.log(`Downloaded ${downloaded} files, failed ${failed}.`);
}

main().catch(console.error);
