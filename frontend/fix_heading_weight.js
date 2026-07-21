const fs = require('fs');
const path = require('path');

const files = [
  'src/components/about/CollegeDocumentsAccordion.tsx',
  'src/app/about/research-publication/page.tsx',
  'src/app/about/cme-conferences/page.tsx',
  'src/app/about/faculty-development/page.tsx',
  'src/app/about/recognition/page.tsx'
];

files.forEach(file => {
  const filePath = path.join('d:\\\\B.R Harne\\\\frontend', file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove font-semibold from the PDF name h4 tag, replace with font-normal
  content = content.replace(/className="font-semibold text-gray-800 text-\[15px\]/g, 'className="font-normal text-gray-800 text-[15px]');
  
  fs.writeFileSync(filePath, content);
});

console.log("Done updating PDF name font weight.");
