const fs = require('fs');
const pagePath = 'src/app/student-zone/attendance-list/page.tsx';
const newData = fs.readFileSync('attendance_parsed_cheerio.json', 'utf8');

const updatedPage = `import PageBanner from "@/components/ui/PageBanner";
import DocumentAccordion from "@/components/ui/DocumentAccordion";

export const metadata = { title: "Student Attendance List" };

const sections = ${newData};

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

fs.writeFileSync(pagePath, updatedPage);
console.log('Successfully reverted to DocumentAccordion layout');
