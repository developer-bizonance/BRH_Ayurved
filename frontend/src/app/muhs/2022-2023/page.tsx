import PageBanner from "@/components/ui/PageBanner";
import MUHSDocumentsAccordion from "@/components/muhs/MUHSDocumentsAccordion";

export const metadata = { title: "MUHS Mandate 2022-2023" };

const documentsData = [
  { category: "Annexure I", files: [] },
  { category: "Annexure II", files: [] },
  { category: "Annexure III", files: [] },
  { category: "Annexure IV", files: [] },
  { category: "Annexure V", files: [] },
  { category: "Annexure VI", files: [] },
  { category: "Annexure VII", files: [] },
  { category: "Annexure VIII", files: [] },
  { category: "Annexure IX", files: [] },
  { category: "Annexure X", files: [] },
  { category: "Annexure XI", files: [] },
  { category: "Annexure XII", files: [] },
  { category: "Annexure XIII", files: [] },
  { category: "Annexure XIV", files: [] },
  { category: "Annexure XV", files: [] },
  { category: "Annexure XVI", files: [] },
  { category: "Faculty Development Program", files: [] }
];

export default function MUHSMandate20222023Page() {
  return (
    <div>
      <PageBanner title="MUHS Mandate 2022-2023" breadcrumbs={[{ label: "MUHS" }, { label: "MUHS Mandate 2022-2023" }]} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-2">
        <MUHSDocumentsAccordion documentsData={documentsData} />
      </div>
    </div>
  );
}
