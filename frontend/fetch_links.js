const cheerio = require('cheerio');
fetch('https://brharneayurved.in/')
  .then(res => res.text())
  .then(html => {
    const $ = cheerio.load(html);
    $('a').each((i, el) => {
      const text = $(el).text().trim();
      const href = $(el).attr('href');
      if (text.includes('Harne') || text.includes('Siddhivinayak') || text.includes('Engineering') || text.includes('Pharmacy') || text.includes('Nursing') || text.includes('Physiotherapy')) {
        console.log(text, '=>', href);
      }
    });
  });
