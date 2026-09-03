const fs = require('fs');
const pagePath = 'src/app/student-zone/attendance-list/page.tsx';
const newData = fs.readFileSync('attendance_parsed_cheerio.json', 'utf8');

const updatedPage = `import PageBanner from "@/components/ui/PageBanner";
import Link from "next/link";

export const metadata = { title: "Student Attendance List" };

const sections = ${newData};

export default function StudentAttendanceListPage() {
  return (
    <div>
      <PageBanner title="Student Attendance List" breadcrumbs={[{ label: "Student Zone" }, { label: "Student Attendance List" }]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-8">
        <div className="w-full flex flex-col gap-12">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-[var(--font-playfair)]">{section.category}</h2>
              {section.files && section.files.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.files.map((file, fileIdx) => (
                    <Link 
                      href={file.url} 
                      target="_blank"
                      key={fileIdx}
                      className="bg-white rounded-lg shadow-sm border-b-[5px] border-[#20b2aa] p-5 flex flex-row items-center gap-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-10 h-10 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 72" width="100%" height="100%">
                          <path fill="none" stroke="#ff2a2a" strokeWidth="4" strokeLinejoin="round" d="M8,2 h26 l16,16 v48 a4,4 0 0,1 -4,4 H8 a4,4 0 0,1 -4,-4 V6 a4,4 0 0,1 4,-4 z" />
                          <path fill="#ff2a2a" d="M38.6,40.9c-2.4-0.4-5.3-0.8-8.6-1.1c-2.3-4.9-4.3-9.5-5.9-13.6c1.1-3.3,1.9-6.6,2.2-8.8
                            c0.4-2.8-0.1-4.7-1.4-5.2c-1.3-0.5-3.1,0.5-3.7,3.3c-0.6,2.7-0.1,6.8,1.4,11.3c-1.6,4.6-3.6,9.5-5.9,14.2
                            c-3.8,4.1-7.4,7.4-10.2,9.3c-2.3,1.5-4.1,2-5,1.1c-0.7-0.7-0.6-2,0.4-3.7c1.4-2.5,4.5-4.4,9.2-5.7c3.2-0.8,6.8-1,10.6-0.6
                            c4.1-2,8.6-4.2,13.2-6.5c3.2-1.6,6.3-2.6,8.8-2.6c1.9,0,3,0.7,3.1,1.9c0.1,1.4-1.2,2.7-3.6,3.6C41.5,41,40.1,41,38.6,40.9z
                            M24.4,13.6c0-0.4-0.1-0.9-0.3-1.2c-0.3-0.5-0.7-0.6-0.9-0.4c-0.3,0.2-0.5,0.7-0.5,1.5c0,1.2,0.1,2.8,0.5,4.6
                            C23.5,16.7,23.9,15,24.4,13.6z M12.1,48.2c-1.2,1-2.1,2.1-2.5,3.2c-0.3,0.9-0.2,1.5,0,1.7c0.2,0.2,0.7,0.1,1.4-0.4
                            C12.7,51.8,14.2,50.3,16.1,48C14.8,48,13.4,48.1,12.1,48.2z M23.6,36.3c1.5-3.1,2.9-6.3,4.1-9.4c-1.2,2.8-2.2,5.7-3,8.7
                            C24.3,35.8,23.9,36.1,23.6,36.3z M41.4,37.6c1.3-0.4,2-1,2-1.6c0-0.3-0.2-0.5-0.6-0.5c-1,0-2.4,0.6-4.2,1.5
                            C39.7,37.3,40.6,37.5,41.4,37.6z" />
                          <text x="26" y="64" fill="#333333" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="17" textAnchor="middle">PDF</text>
                        </svg>
                      </div>
                      <h6 className="font-medium text-gray-800 text-[15px]">{file.name}</h6>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(pagePath, updatedPage);
console.log('Successfully updated page.tsx with flat grid layout');
