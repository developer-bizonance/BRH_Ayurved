import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://www.brharneayurved.in/';

const pages = [
  // MUHS
  { url: 'MUHS_mandate_2021_2022.php', title: 'MUHS Mandate 2021-2022', path: 'src/app/muhs/2021-2022/page.tsx', breadcrumb: 'MUHS' },
  { url: 'MUHS_mandate_2022_2023.php', title: 'MUHS Mandate 2022-2023', path: 'src/app/muhs/2022-2023/page.tsx', breadcrumb: 'MUHS' },
  { url: 'MUHS_mandate_2023_2024.php', title: 'MUHS Mandate 2023-2024', path: 'src/app/muhs/2023-2024/page.tsx', breadcrumb: 'MUHS' },
  { url: 'MUHS_mandate_2024_2025.php', title: 'MUHS Mandate 2024-2025', path: 'src/app/muhs/2024-2025/page.tsx', breadcrumb: 'MUHS' },
  { url: 'MUHS_mandate_2025_2026.php', title: 'MUHS Mandate 2025-2026', path: 'src/app/muhs/2025-2026/page.tsx', breadcrumb: 'MUHS' },
  { url: 'MUHS_mandate_2026_2027.php', title: 'MUHS Mandate 2026-2027', path: 'src/app/muhs/2026-2027/page.tsx', breadcrumb: 'MUHS' },
  
  // Important Links
  { url: 'BRH_ImportantLinks.php', title: 'Important Links', path: 'src/app/important-links/page.tsx', breadcrumb: 'Important Links' },
  
  // Student Zone
  { url: 'student_attendance_list.php', title: 'Student Attendance List', path: 'src/app/student-zone/attendance/page.tsx', breadcrumb: 'Student Zone' },
  { url: 'student_award_list.php', title: 'Student Award List', path: 'src/app/student-zone/awards/page.tsx', breadcrumb: 'Student Zone' },
  { url: 'student_social_welfare.php', title: 'Student Social Welfare', path: 'src/app/student-zone/welfare/page.tsx', breadcrumb: 'Student Zone' },
  
  // Admissions
  { url: 'list_documents.php', title: 'List of Documents', path: 'src/app/admissions/documents/page.tsx', breadcrumb: 'Admissions' },
  { url: 'fees_structure.php', title: 'Fees Structure', path: 'src/app/admissions/fees/page.tsx', breadcrumb: 'Admissions' },
  { url: 'student_admission_list.php', title: 'Student Admission List', path: 'src/app/admissions/student-list/page.tsx', breadcrumb: 'Admissions' },
  
  // NCISM
  { url: 'NCISM_mandate.php', title: 'NCISM Mandate', path: 'src/app/ncism/page.tsx', breadcrumb: 'NCISM' },
  
  // Hospital
  { url: 'monthly_hospital_data.php', title: 'Monthly Hospital Data', path: 'src/app/hospital/monthly-data/page.tsx', breadcrumb: 'Hospital' },
  { url: 'BRH_YearlyOPDIPDRecord.php', title: 'Yearly OPD - IPD Record', path: 'src/app/hospital/yearly-record/page.tsx', breadcrumb: 'Hospital' },
  
  // Biometric Attendance
  { url: 'teaching_staff_biometric_attendance.php', title: 'Teaching Staff Attendance', path: 'src/app/biometric/teaching/page.tsx', breadcrumb: 'Biometric' },
  { url: 'non_teaching_staff_biometric_attendance.php', title: 'Non Teaching Staff Attendance', path: 'src/app/biometric/non-teaching/page.tsx', breadcrumb: 'Biometric' },
  // Faculty
  { url: 'faculty_development_programme.php', title: 'Faculty Development Programme', path: 'src/app/about/faculty-development/page.tsx', breadcrumb: 'About' },
  { url: 'teaching_staff.php', title: 'Teaching Staff', path: 'src/app/faculty/teaching/page.tsx', breadcrumb: 'Faculty' },
  { url: 'non_teaching_staff.php', title: 'Non Teaching Staff', path: 'src/app/faculty/non-teaching/page.tsx', breadcrumb: 'Faculty' },
  { url: 'teacher_awards.php', title: 'Teacher Awards', path: 'src/app/faculty/awards/page.tsx', breadcrumb: 'Faculty' },
  
  // Hospital Staff
  { url: 'hospital_staff.php', title: 'Hospital Staff', path: 'src/app/hospital/staff/page.tsx', breadcrumb: 'Hospital' },
  
  // Student Committee
  { url: 'student_committee.php', title: 'Details of Student Committee', path: 'src/app/student-zone/committee/page.tsx', breadcrumb: 'Student Zone' },
  
  // Academics Time Table
  { url: 'year_wise_time_table.php', title: 'Year Wise Time Table', path: 'src/app/academics/timetable/page.tsx', breadcrumb: 'Academics' },
];

const generateComponent = (title, breadcrumb, documents) => {
  return 'import PageBanner from "@/components/ui/PageBanner";\n' +
'import Link from "next/link";\n\n' +
'export const metadata = { title: "' + title + '" };\n\n' +
'const documents = ' + JSON.stringify(documents, null, 2) + ';\n\n' +
'export default function ' + title.replace(/[^a-zA-Z0-9]/g, '') + 'Page() {\n' +
'  return (\n' +
'    <div>\n' +
'      <PageBanner title="' + title + '" breadcrumbs={[{ label: "' + breadcrumb + '" }, { label: "' + title + '" }]} />\n' +
'      \n' +
'      <div className="max-w-[1400px] mx-auto px-6 py-16 bg-gray-50/50">\n' +
'        <h2 className="text-2xl font-bold text-[#1a3c2e] font-[var(--font-playfair)] mb-10 border-l-4 border-[#1a6b3c] pl-4">\n' +
'          ' + title + '\n' +
'        </h2>\n\n' +
'        {documents.length === 0 ? (\n' +
'          <div className="bg-white rounded-2xl p-10 text-center shadow-sm border border-gray-100">\n' +
'            <p className="text-gray-500">No documents found for this section.</p>\n' +
'          </div>\n' +
'        ) : (\n' +
'          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">\n' +
'            {documents.map((doc, idx) => (\n' +
'              <Link \n' +
'                href={doc.url} \n' +
'                key={idx}\n' +
'                target="_blank"\n' +
'                rel="noopener noreferrer"\n' +
'                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"\n' +
'              >\n' +
'                {/* Top Banner Area */}\n' +
'                <div className="h-32 bg-gradient-to-br from-[#1a6b3c] to-[#047857] relative flex items-center justify-center overflow-hidden shrink-0">\n' +
'                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all"></div>\n' +
'                  <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>\n' +
'                  \n' +
'                  {/* PDF Icon */}\n' +
'                  <div className="relative z-10 bg-white/20 backdrop-blur-sm p-4 rounded-full text-white group-hover:scale-110 transition-transform duration-300 shadow-inner">\n' +
'                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">\n' +
'                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>\n' +
'                      <polyline points="14 2 14 8 20 8"></polyline>\n' +
'                      <path d="M9 15v-4"></path>\n' +
'                      <path d="M12 15v-4"></path>\n' +
'                      <path d="M12 11h2"></path>\n' +
'                      <path d="M15 11h2v4"></path>\n' +
'                      <path d="M15 13h2"></path>\n' +
'                    </svg>\n' +
'                  </div>\n' +
'                </div>\n\n' +
'                {/* Text Area */}\n' +
'                <div className="p-6 text-center flex flex-col flex-grow">\n' +
'                  <div className="inline-block px-3 py-1 bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 self-center">\n' +
'                    PDF Document\n' +
'                  </div>\n' +
'                  <h3 className="font-bold text-gray-800 text-sm md:text-base group-hover:text-[#1a6b3c] transition-colors leading-relaxed mb-2 flex-grow">\n' +
'                    {doc.name}\n' +
'                  </h3>\n' +
'                  <div className="mt-auto pt-4 flex items-center justify-center gap-2 text-sm text-[#e8821a] font-semibold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">\n' +
'                    <span>View File</span>\n' +
'                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\n' +
'                      <path d="M5 12h14"></path>\n' +
'                      <path d="M12 5l7 7-7 7"></path>\n' +
'                    </svg>\n' +
'                  </div>\n' +
'                </div>\n' +
'              </Link>\n' +
'            ))}\n' +
'          </div>\n' +
'        )}\n' +
'      </div>\n' +
'    </div>\n' +
'  );\n' +
'}\n';
};

async function scrapeAndGenerate() {
  for (const page of pages) {
    console.log("Fetching " + page.url + "...");
    try {
      const response = await fetch(baseUrl + page.url);
      const html = await response.text();
      const $ = cheerio.load(html);
      
      const documents = [];
      
      $('a').each((i, el) => {
        const href = $(el).attr('href');
        let text = $(el).text().trim();
        text = text.replace(/\\s+New!*$/i, '').trim();
        
        if (href && (href.toLowerCase().includes('.pdf') || href.toLowerCase().includes('uploads/') || $(el).find('img[src*="pdf"]').length > 0)) {
           let fullUrl = href;
           if (!fullUrl.startsWith('http')) {
              fullUrl = baseUrl + fullUrl;
           }
           
           if (text) {
               if (!documents.find(d => d.url === fullUrl)) {
                 documents.push({ name: text, url: fullUrl });
               }
           }
        }
      });
      
      if (documents.length === 0) {
        $('table a').each((i, el) => {
            const href = $(el).attr('href');
            let text = $(el).text().trim();
            if (href && text) {
               let fullUrl = href;
               if (!fullUrl.startsWith('http')) {
                  fullUrl = baseUrl + fullUrl;
               }
               if (!documents.find(d => d.url === fullUrl)) {
                 documents.push({ name: text, url: fullUrl });
               }
            }
        });
      }

      console.log("Found " + documents.length + " documents for " + page.title);
      
      const code = generateComponent(page.title, page.breadcrumb, documents);
      const fullPath = path.resolve(__dirname, '..', page.path);
      
      fs.mkdirSync(path.dirname(fullPath), { recursive: true });
      fs.writeFileSync(fullPath, code);
      console.log("Generated " + page.path);
      
    } catch (e) {
      console.error("Failed on " + page.url + ": ", e);
    }
  }
}

scrapeAndGenerate();
