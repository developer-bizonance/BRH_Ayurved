const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');

const data = require('./muhs_parsed_cheerio_2026_2027.json');

const downloadFile = (url, dest) => {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      if (res.statusCode === 200) {
        let chunks = [];
        res.on('data', chunk => chunks.push(chunk));
        res.on('end', () => {
          const buffer = Buffer.concat(chunks);
          fs.mkdirSync(path.dirname(dest), { recursive: true });
          fs.writeFileSync(dest, buffer);
          resolve();
        });
      } else {
        reject(new Error('Failed to download ' + url + ': ' + res.statusCode));
      }
    }).on('error', reject);
  });
};

(async () => {
  let downloadedCount = 0;
  for (const category of data) {
    for (const file of category.files) {
      const localPath = path.join(process.cwd(), 'public', decodeURIComponent(file.url));
      if (!fs.existsSync(localPath)) {
        console.log('Missing ' + file.url + ', downloading...');
        const remoteUrl = 'https://brharneayurved.in' + file.url.replace(/ /g, '%20');
        try {
          await downloadFile(remoteUrl, localPath);
          downloadedCount++;
        } catch(e) {
          console.error(e.message);
        }
      }
    }
  }
  console.log('Downloaded ' + downloadedCount + ' new PDFs.');
})();
