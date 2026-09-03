const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('muhs_2026_2027.html', 'utf8');
const $ = cheerio.load(html);

const result = [];

$('.accordion .card').each((i, el) => {
  const category = $(el).find('.card-header button').text().trim();
  
  if (!category) return; // skip if not an accordion card
  
  const files = [];
  $(el).find('a').each((j, link) => {
    let url = $(link).attr('href');
    if (!url) return;
    url = url.trim();
    if (!url.startsWith('/')) url = '/' + url;
    url = decodeURIComponent(url);
    
    const name = $(link).find('h6').text().trim();
    if (name) {
      files.push({ name, url });
    }
  });

  result.push({ category, files });
});

fs.writeFileSync('muhs_parsed_cheerio_2026_2027.json', JSON.stringify(result, null, 2));
console.log('Cheerio parsed successfully, found ' + result.length + ' categories.');
