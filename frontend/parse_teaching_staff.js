const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('teaching_staff_biometric.html', 'utf8');
const $ = cheerio.load(html);

const files = [];

$('a').each((i, link) => {
  let url = $(link).attr('href');
  if (!url || !url.includes('.pdf')) return;
  url = url.trim();
  if (!url.startsWith('/')) url = '/' + url;
  url = decodeURIComponent(url);
  
  const name = $(link).find('h6').text().trim();
  if (name) {
    files.push({ name, url });
  }
});

fs.writeFileSync('teaching_staff_biometric_parsed.json', JSON.stringify(files, null, 2));
console.log('Parsed ' + files.length + ' PDFs.');
