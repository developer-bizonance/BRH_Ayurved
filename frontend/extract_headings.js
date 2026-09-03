const fs = require('fs');
const cheerio = require('cheerio');
const $ = cheerio.load(fs.readFileSync('student_attendance.html'));
$('h4').each((i, el) => console.log($(el).text().trim(), $(el).attr('class')));
