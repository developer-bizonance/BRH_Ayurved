const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('student_social_welfare.html', 'utf8');
const $ = cheerio.load(html);

const images = [];

// The images are in the gallery section, let's look for img tags with src containing 'uploads/gallery'
$('img').each((i, el) => {
  let src = $(el).attr('src');
  if (src && src.includes('uploads/gallery/')) {
    if (!src.startsWith('/')) src = '/' + src;
    images.push(decodeURIComponent(src));
  }
});

// Since the screenshot shows the user hovering over a link `https://brharneayurved.in/uploads/gallery/...` maybe they are inside <a> tags too.
// Let's check <a> tags as well.
$('a').each((i, el) => {
  let href = $(el).attr('href');
  if (href && href.includes('uploads/gallery/')) {
    if (!href.startsWith('/')) href = '/' + href;
    href = decodeURIComponent(href);
    if (!images.includes(href)) {
        images.push(href);
    }
  }
});

fs.writeFileSync('social_welfare_images.json', JSON.stringify(images, null, 2));
console.log('Extracted ' + images.length + ' images.');
