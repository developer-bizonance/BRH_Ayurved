const fs = require('fs');
const html = fs.readFileSync('muhs_2021_2022.html', 'utf8');

const result = [];
const regex = /<div class="card-header[^>]*>[\s\S]*?<button[^>]*>([^<]+)<\/button>[\s\S]*?<\/div>\s*<div id="collapse[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi;

let match;
while ((match = regex.exec(html)) !== null) {
  const category = match[1].trim();
  const body = match[2];
  
  const files = [];
  const linkRegex = /<a href="([^"]+)"[^>]*>[\s\S]*?<h6[^>]*>([^<]+)<\/h6>/gi;
  let linkMatch;
  while ((linkMatch = linkRegex.exec(body)) !== null) {
    let url = linkMatch[1].trim();
    if (!url.startsWith('/')) url = '/' + url;
    url = decodeURIComponent(url);

    files.push({
      name: linkMatch[2].trim(),
      url: url
    });
  }
  
  // push even if empty
  result.push({ category, files });
}

fs.writeFileSync('muhs_parsed_full.json', JSON.stringify(result, null, 2));
console.log('Parsed successfully, found ' + result.length + ' categories.');
