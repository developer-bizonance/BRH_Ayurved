import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://www.brharneayurved.in/';

const textPages = [
  { url: 'BRH_VisionMission.php', title: 'Vision Mission', path: 'src/app/about/vision/page.tsx', breadcrumb: 'About' },
  { url: 'BRH_PresidentDesk.php', title: 'President Desk', path: 'src/app/about/president/page.tsx', breadcrumb: 'About' },
  { url: 'BRH_BoardOfTrustee.php', title: 'Board Of Trustee', path: 'src/app/about/trustees/page.tsx', breadcrumb: 'About' },
  { url: 'BRH_UnderGraduateCourses.php', title: 'Under Graduate Courses', path: 'src/app/courses/ug/page.tsx', breadcrumb: 'Courses' },
  { url: 'BRH_PostGraduateCourses.php', title: 'Post Graduate Courses', path: 'src/app/courses/pg/page.tsx', breadcrumb: 'Courses' },
  { url: 'BRH_FellowshipCourses.php', title: 'Fellowship Courses', path: 'src/app/courses/fellowship/page.tsx', breadcrumb: 'Courses' },
  { url: 'BRH_AyurvedaPhdCourses.php', title: 'Ayurveda PhD Courses', path: 'src/app/courses/phd/page.tsx', breadcrumb: 'Courses' },
  { url: 'BRH_AboutHospital.php', title: 'About Hospital', path: 'src/app/hospital/about/page.tsx', breadcrumb: 'Hospital' },
  { url: 'details_clinical_materials.php', title: 'Details Of Clinical Materials', path: 'src/app/hospital/clinical-materials/page.tsx', breadcrumb: 'Hospital' },
  { url: 'BRH_OperationTheaterBlock.php', title: 'Operation Theater Block', path: 'src/app/hospital/operation-theater/page.tsx', breadcrumb: 'Hospital' },
  { url: 'BRH_Physiotherapy.php', title: 'Physiotherapy', path: 'src/app/hospital/physiotherapy/page.tsx', breadcrumb: 'Hospital' },
  { url: 'BRH_PanchakarmaFacilities.php', title: 'Panchakarma Facilities', path: 'src/app/hospital/panchakarma/page.tsx', breadcrumb: 'Hospital' },
  { url: 'BRH_ClinicalLaboratory.php', title: 'Clinical Laboratory', path: 'src/app/hospital/laboratory/page.tsx', breadcrumb: 'Hospital' },
];

const generateTextComponent = (title, breadcrumb, htmlContent) => {
  return 'import PageBanner from "@/components/ui/PageBanner";\n\n' +
'export const metadata = { title: "' + title + '" };\n\n' +
'export default function ' + title.replace(/[^a-zA-Z0-9]/g, '') + 'Page() {\n' +
'  return (\n' +
'    <div>\n' +
'      <PageBanner title="' + title + '" breadcrumbs={[{ label: "' + breadcrumb + '" }, { label: "' + title + '" }]} />\n' +
'      \n' +
'      <div className="max-w-[1400px] mx-auto px-6 py-16 bg-white">\n' +
'        <div \n' +
'          className="prose prose-lg max-w-none prose-headings:text-[#1a3c2e] prose-headings:font-[var(--font-playfair)] prose-a:text-[#1a6b3c] prose-img:rounded-xl"\n' +
'          dangerouslySetInnerHTML={{ __html: ' + JSON.stringify(htmlContent) + ' }}\n' +
'        />\n' +
'      </div>\n' +
'    </div>\n' +
'  );\n' +
'}\n';
};

async function scrapeTextPages() {
  for (const page of textPages) {
    console.log("Fetching Text Data for " + page.url + "...");
    try {
      const response = await fetch(baseUrl + page.url);
      const html = await response.text();
      const $ = cheerio.load(html);
      
      // Target the main section, remove title-head since we have PageBanner
      let contentDiv = $('.mainSection .container').first();
      
      // Remove heading row
      contentDiv.find('.title-head').closest('.row').remove();
      
      // Fix image URLs to be absolute or from public folder
      contentDiv.find('img').each((i, el) => {
         let src = $(el).attr('src');
         if (src && !src.startsWith('http')) {
            $(el).attr('src', baseUrl + src);
         }
      });
      
      // Fix link URLs
      contentDiv.find('a').each((i, el) => {
         let href = $(el).attr('href');
         if (href && !href.startsWith('http') && !href.startsWith('#')) {
            $(el).attr('href', baseUrl + href);
         }
      });
      
      // Fix table classes for Tailwind typography (remove explicit bootstrap classes that clash)
      contentDiv.find('table').removeClass('table table-bordered table-hover bg-light');
      contentDiv.find('thead').removeClass('bg-primary');
      contentDiv.find('th').removeClass('text-white');
      
      let htmlContent = contentDiv.html();
      
      if (!htmlContent) {
          console.log("No content found for " + page.title);
          continue;
      }
      
      const code = generateTextComponent(page.title, page.breadcrumb, htmlContent);
      const fullPath = path.resolve(__dirname, '..', page.path);
      
      fs.mkdirSync(path.dirname(fullPath), { recursive: true });
      fs.writeFileSync(fullPath, code);
      console.log("Generated " + page.path);
      
    } catch (e) {
      console.error("Failed on " + page.url + ": ", e);
    }
  }
}

scrapeTextPages();
