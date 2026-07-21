import PageBanner from "@/components/ui/PageBanner";
import DocumentAccordion from "@/components/ui/DocumentAccordion";

export const metadata = { title: "Recognition" };

const recognitionData = [
  {
    category: "NCISM Permission",
    files: [
      { name: "NCISM Permission for AY 2024-25", url: "https://brharneayurved.in/uploads/about/NCISM%20Permission%20for%20AY%202024-2520260410_072044.pdf" }
    ]
  },
  {
    category: "MUHS Affiliation",
    files: [
      { name: "MUHS Affiliation 24-25", url: "https://brharneayurved.in/uploads/about/MUHS%20Affiliation%2024-2520260410_072237.pdf" }
    ]
  }
];

export default function RecognitionPage() {
  return (
    <div>
      <PageBanner title="Recognition" breadcrumbs={[{ label: "About" }, { label: "Recognition" }]} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-2">
        <DocumentAccordion sections={recognitionData} />
      </div>
    </div>
  );
}
