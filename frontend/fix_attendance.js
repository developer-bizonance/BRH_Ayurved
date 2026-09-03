const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('student_attendance.html', 'utf8');
const $ = cheerio.load(html);

const result = [];

$('h4.font-weight-bold').each((i, el) => {
  const category = $(el).text().trim();
  const files = [];
  
  // Traverse DOM manually to find the next .row that contains links, 
  // before the next h4.
  let curr = $(el).closest('.row').next();
  while(curr.length > 0 && curr.find('h4.font-weight-bold').length === 0) {
    if (curr.hasClass('row')) {
      curr.find('a').each((j, link) => {
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
    curr = curr.next();
  }
  
  result.push({ category, files });
});

console.log('Categories found:', result.map(r => r.category).join(', '));
console.log('Total files:', result.reduce((acc, curr) => acc + curr.files.length, 0));

const updatedPage = `import PageBanner from "@/components/ui/PageBanner";
import DocumentAccordion from "@/components/ui/DocumentAccordion";

export const metadata = { title: "Student Attendance List" };

const sections = ${JSON.stringify(result, null, 2)};

export default function StudentAttendanceListPage() {
  return (
    <div>
      <PageBanner title="Student Attendance List" breadcrumbs={[{ label: "Student Zone" }, { label: "Student Attendance List" }]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-0">
        <div className="w-full">
          <DocumentAccordion sections={sections} defaultOpenIdx={0} />
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync('src/app/student-zone/attendance-list/page.tsx', updatedPage);
console.log('Updated page.tsx with correct sections');
