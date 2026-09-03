const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('student_attendance.html', 'utf8');
const $ = cheerio.load(html);

const result = [];

// Since there is a row containing the h4, and the next row contains the links,
// let's iterate over the rows that contain an h4
$('h4.font-weight-bold').each((i, el) => {
  const category = $(el).text().trim();
  
  // The row containing the links is the next sibling row of the row containing the h4
  // Let's traverse up to the parent row, then get the next .row
  const headerRow = $(el).closest('.row');
  const linksRow = headerRow.next('.row');
  
  const files = [];
  if (linksRow.length) {
    linksRow.find('a').each((j, link) => {
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
  }
  
  result.push({ category, files });
});

fs.writeFileSync('attendance_parsed_cheerio.json', JSON.stringify(result, null, 2));
console.log('Cheerio parsed successfully, found ' + result.length + ' categories.');
