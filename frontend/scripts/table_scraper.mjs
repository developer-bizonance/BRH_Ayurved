import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://www.brharneayurved.in/';

const tablePages = [
  { url: 'teaching_staff.php', title: 'Teaching Staff', path: 'src/app/faculty/teaching/page.tsx', breadcrumb: 'Faculty' },
  { url: 'non_teaching_staff.php', title: 'Non Teaching Staff', path: 'src/app/faculty/non-teaching/page.tsx', breadcrumb: 'Faculty' },
  { url: 'teacher_awards.php', title: 'Teacher Awards', path: 'src/app/faculty/awards/page.tsx', breadcrumb: 'Faculty' },
  { url: 'hospital_staff.php', title: 'Hospital Staff', path: 'src/app/hospital/staff/page.tsx', breadcrumb: 'Hospital' },
  { url: 'student_committee.php', title: 'Details of Student Committee', path: 'src/app/student-zone/committee/page.tsx', breadcrumb: 'Student Zone' },
  { url: 'year_wise_time_table.php', title: 'Year Wise Time Table', path: 'src/app/academics/timetable/page.tsx', breadcrumb: 'Academics' },
];

const generateTableComponent = (title, breadcrumb, tablesData) => {
  // We'll just render the first meaningful table we find, or all of them.
  let tablesJsx = '';
  
  if (tablesData.length === 0) {
    tablesJsx = `
        <div className="bg-white rounded-2xl p-10 text-center shadow-sm border border-gray-100">
          <p className="text-gray-500">No data available for this section.</p>
        </div>
    `;
  } else {
    tablesData.forEach((table, index) => {
      const headersJsx = table.headers.map(h => `<th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider bg-[#1a6b3c] border-r border-[#14532d] last:border-0">${h}</th>`).join('\\n                ');
      const rowsJsx = table.rows.map((row, rIdx) => {
        const rowClass = rIdx % 2 === 0 ? 'bg-white' : 'bg-[#f0faf5]';
        const cellsJsx = row.map((cell, cIdx) => `<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200 last:border-0 font-medium">${cell}</td>`).join('\\n                  ');
        return `              <tr className="${rowClass} hover:bg-[#e6f7ef] transition-colors border-b border-gray-100 last:border-0">
                  ${cellsJsx}
              </tr>`;
      }).join('\\n');
      
      tablesJsx += `
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-10">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr>
                  ${headersJsx}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
  ${rowsJsx}
              </tbody>
            </table>
          </div>
        </div>
      `;
    });
  }

  return 'import PageBanner from "@/components/ui/PageBanner";\n' +
'export const metadata = { title: "' + title + '" };\n\n' +
'export default function ' + title.replace(/[^a-zA-Z0-9]/g, '') + 'Page() {\n' +
'  return (\n' +
'    <div>\n' +
'      <PageBanner title="' + title + '" breadcrumbs={[{ label: "' + breadcrumb + '" }, { label: "' + title + '" }]} />\n' +
'      \n' +
'      <div className="max-w-[1400px] mx-auto px-6 py-16 bg-gray-50/50">\n' +
'        <h2 className="text-2xl font-bold text-[#1a3c2e] font-[var(--font-playfair)] mb-10 border-l-4 border-[#1a6b3c] pl-4">\n' +
'          ' + title + '\n' +
'        </h2>\n\n' +
tablesJsx +
'      </div>\n' +
'    </div>\n' +
'  );\n' +
'}\n';
};

async function scrapeTables() {
  for (const page of tablePages) {
    console.log("Fetching Table Data for " + page.url + "...");
    try {
      const response = await fetch(baseUrl + page.url);
      const html = await response.text();
      const $ = cheerio.load(html);
      
      const tablesData = [];
      
      $('table').each((i, tableEl) => {
        const headers = [];
        $(tableEl).find('th, thead td').each((j, thEl) => {
          let text = $(thEl).text().replace(/\\s+/g, ' ').trim();
          headers.push(text || 'Col ' + (j + 1));
        });
        
        // Sometimes tables don't use <th>, just the first row is headers
        const rows = [];
        $(tableEl).find('tr').each((j, trEl) => {
          // If we didn't find headers yet and it's row 0, treat it as headers
          if (headers.length === 0 && j === 0) {
            $(trEl).find('td').each((k, tdEl) => {
              headers.push($(tdEl).text().replace(/\\s+/g, ' ').trim() || 'Col ' + (k + 1));
            });
            return; // Skip adding to rows
          }
          
          // Skip if it contains THs (already processed)
          if ($(trEl).find('th').length > 0 && $(trEl).find('td').length === 0) return;
          
          const rowData = [];
          $(trEl).find('td').each((k, tdEl) => {
             // Handle links inside cells
             const link = $(tdEl).find('a');
             if (link.length > 0 && link.attr('href')) {
                // Return JSX string instead of plain text for links
                let href = link.attr('href');
                if (!href.startsWith('http')) href = baseUrl + href;
                const linkText = link.text().trim() || 'View';
                rowData.push(`<a href="${href}" target="_blank" className="text-blue-600 hover:underline flex items-center gap-1">${linkText} <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>`);
             } else {
                // escape some chars for JSX
                let text = $(tdEl).text().replace(/\\s+/g, ' ').replace(/"/g, '&quot;').replace(/{/g, '&#123;').replace(/}/g, '&#125;').replace(/</g, '&lt;').replace(/>/g, '&gt;').trim();
                rowData.push(text);
             }
          });
          
          // Only add if row has data
          if (rowData.length > 0 && rowData.some(c => c !== '')) {
            // pad row data to match header length
            while (rowData.length < headers.length) rowData.push('');
            rows.push(rowData);
          }
        });
        
        if (headers.length > 0 && rows.length > 0) {
          tablesData.push({ headers, rows });
        }
      });
      
      console.log("Found " + tablesData.length + " tables for " + page.title);
      
      const code = generateTableComponent(page.title, page.breadcrumb, tablesData);
      const fullPath = path.resolve(__dirname, '..', page.path);
      
      fs.mkdirSync(path.dirname(fullPath), { recursive: true });
      fs.writeFileSync(fullPath, code);
      console.log("Generated " + page.path);
      
    } catch (e) {
      console.error("Failed on " + page.url + ": ", e);
    }
  }
}

scrapeTables();
