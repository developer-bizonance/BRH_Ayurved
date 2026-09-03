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
  console.log("Fetching gallery.php...");
  const res = await fetch("https://brharneayurved.in/gallery.php");
  const html = await res.text();
  const $ = cheerio.load(html);

  const galleryData = [];
  let currentCategory = "General";

  // The gallery items might be inside a grid or list, preceded by headers like <h2> or <h3>
  // Let's iterate through main container's children
  // I will just look for h2, h3, h4 and img tags across the body to keep it robust
  
  $('*').each((i, el) => {
    const tagName = el.tagName.toLowerCase();
    
    if (tagName === 'h2' || tagName === 'h3' || tagName === 'h4') {
      const text = $(el).text().trim();
      if (text && text.length > 3 && text.length < 50) {
        // Looks like a category heading
        currentCategory = text.toUpperCase();
      }
    } else if (tagName === 'img') {
      let src = $(el).attr('src');
      let parentHref = $(el).closest('a').attr('href');
      // sometimes the anchor has the high-res image
      if (parentHref && parentHref.match(/\.(jpg|jpeg|png|gif)$/i)) {
        src = parentHref;
      }
      
      if (src && src.includes('uploads/gallery/')) {
        let fullUrl = src;
        if (!fullUrl.startsWith('http')) {
          fullUrl = 'https://brharneayurved.in/' + fullUrl.replace(/^\/?/, '');
        }
        
        // Exclude logo images or non-gallery
        if (!galleryData.find(item => item.src === fullUrl)) {
          galleryData.push({
            id: galleryData.length + 1,
            originalSrc: fullUrl,
            category: currentCategory,
            alt: $(el).attr('alt') || currentCategory
          });
        }
      }
    }
  });

  console.log(`Found ${galleryData.length} images across categories.`);

  // Download them
  const rootDir = process.cwd();
  
  for (const item of galleryData) {
    try {
      const urlPath = new URL(item.originalSrc).pathname; // e.g. /uploads/gallery/image.jpg
      const localDest = path.join(rootDir, 'public', urlPath);
      
      item.localSrc = urlPath; // e.g. /uploads/gallery/image.jpg
      
      try {
        await fs.access(localDest);
      } catch {
        console.log(`Downloading ${item.originalSrc}...`);
        await downloadFile(item.originalSrc, localDest);
      }
    } catch (e) {
      console.error(e.message);
    }
  }

  // Save JSON
  await fs.writeFile(
    path.join(rootDir, 'src', 'data', 'main_gallery.json'),
    JSON.stringify(galleryData, null, 2)
  );
  console.log("Saved main_gallery.json");
}

main().catch(console.error);
