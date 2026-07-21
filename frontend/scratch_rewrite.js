const fs = require('fs');
const file = fs.readFileSync('src/app/hospital/monthly-data/page.tsx', 'utf8');
const match = file.match(/const documents = (\[[\s\S]*?\]);/);
if (!match) process.exit(1);
const docs = eval(match[1]);

// Determine category based on naming or index since the original was flat
const opd = docs.filter(d => d.name.toLowerCase().includes('opd') || (!d.name.toLowerCase().includes('ipd') && !d.name.toLowerCase().includes('bed') && docs.indexOf(d) < 17));
const ipd = docs.filter(d => d.name.toLowerCase().includes('ipd') || (!d.name.toLowerCase().includes('opd') && !d.name.toLowerCase().includes('bed') && docs.indexOf(d) >= 17 && docs.indexOf(d) < 34));
const bed = docs.filter(d => d.name.toLowerCase().includes('bed') || docs.indexOf(d) >= 34);

const sections = [
  { category: 'OPD Data', files: opd },
  { category: 'IPD Data', files: ipd },
  { category: 'Bed Occupancy Data', files: bed }
];

const newContent = `import PageBanner from "@/components/ui/PageBanner";
import DocumentAccordion from "@/components/ui/DocumentAccordion";

export const metadata = { title: "Monthly Hospital Data" };

const monthlyData = ${JSON.stringify(sections, null, 2)};

export default function MonthlyHospitalDataPage() {
  return (
    <div>
      <PageBanner title="Monthly Hospital Data" breadcrumbs={[{ label: "Hospital" }, { label: "Monthly Hospital Data" }]} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-2">
        <DocumentAccordion sections={monthlyData} />
      </div>
    </div>
  );
}
`;
fs.writeFileSync('src/app/hospital/monthly-data/page.tsx', newContent);
