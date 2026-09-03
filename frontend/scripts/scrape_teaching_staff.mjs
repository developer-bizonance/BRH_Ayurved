import * as cheerio from 'cheerio';
import fs from 'fs/promises';
import path from 'path';
import https from 'https';

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
  console.log("Fetching teaching-staff.php...");
  const res = await fetch("https://brharneayurved.in/teaching-staff.php");
  const html = await res.text();
  const $ = cheerio.load(html);

  const publications = [];
  
  $('a').each((i, el) => {
    let href = $(el).attr('href');
    if (href && href.toLowerCase().endsWith('.pdf') && href.includes('uploads/faculty/')) {
      let text = $(el).text().trim() || $(el).parent().text().trim();
      text = text.replace(/PDF|Download/ig, '').trim();
      if (!text) text = `Teaching Staff ${i}`;
      
      let fullUrl = href;
      if (!fullUrl.startsWith('http')) {
        fullUrl = 'https://brharneayurved.in/' + fullUrl.replace(/^\/?/, '');
      }
      
      publications.push({ name: text, originalUrl: fullUrl });
    }
  });

  console.log(`Found ${publications.length} PDFs.`);

  const rootDir = process.cwd();
  
  for (const item of publications) {
    try {
      // Decode URI component so it saves to disk with actual spaces
      const urlPath = decodeURIComponent(new URL(item.originalUrl).pathname);
      const localDest = path.join(rootDir, 'public', urlPath);
      
      item.localUrl = urlPath;
      
      try {
        await fs.access(localDest);
      } catch {
        console.log(`Downloading ${item.originalUrl}...`);
        await downloadFile(item.originalUrl, localDest);
      }
    } catch (e) {
      console.error(`Error for ${item.originalUrl}:`, e.message);
    }
  }

  // Update page.tsx with the new list
  const pagePath = path.join(rootDir, 'src', 'app', 'faculty', 'teaching-staff', 'page.tsx');
  let pageContent = await fs.readFile(pagePath, 'utf8');
  
  const publicationsStr = publications.map(p => `  { name: ${JSON.stringify(p.name)}, url: ${JSON.stringify(encodeURI(p.localUrl))} }`).join(',\n');
  
  pageContent = pageContent.replace(/const publications = \[\s*\{[\s\S]*?\}\s*\];/, `const publications = [\n${publicationsStr}\n];`);
  
  await fs.writeFile(pagePath, pageContent);
  console.log("Updated teaching-staff page.tsx");
}

main().catch(console.error);
