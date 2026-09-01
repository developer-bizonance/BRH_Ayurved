import PageBanner from "@/components/ui/PageBanner";
import DocumentAccordion from "@/components/ui/DocumentAccordion";

export const metadata = { title: "Recognition" };

const recognitionData = [
  {
    category: "NCISM Permission",
    files: [
      { name: "NCISM Permission for AY 2025-26", url: "/uploads/recognition/NCISM%20Permission%20for%20AY%202025-2620260307_081556.pdf" }
    ]
  },
  {
    category: "MUHS Affiliation",
    files: [
      { name: "MUHS Affiliation 25-26", url: "/uploads/recognition/MUHS%20Affiliation%2025-2620260307_081641.pdf" }
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
