import PageBanner from "@/components/ui/PageBanner";
import DocumentAccordion from "@/components/ui/DocumentAccordion";

export const metadata = { title: "Hospital Staff" };

const documents = [
  {
    category: "Hospital Staff Details",
    files: [
      {
        "name": "Hospital Staff Details",
        "url": "https://www.brharneayurved.in/uploads/hospital/Hospital Staff Details20250327_091839.pdf"
      }
    ]
  },
  {
    category: "Attendance",
    files: [
      {
        "name": "Attendance - April 2025",
        "url": "https://www.brharneayurved.in/uploads/hospital/Attendance - April 202520250628_104411.pdf"
      },
      {
        "name": "Attendance - May 2025",
        "url": "https://www.brharneayurved.in/uploads/hospital/Attendance - May 202520250628_104455.pdf"
      }
    ]
  }
];

export default function HospitalStaffPage() {
  return (
    <div>
      <PageBanner title="Hospital Staff" breadcrumbs={[{ label: "Hospital" }, { label: "Hospital Staff" }]} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-2">
        <DocumentAccordion sections={documents} />
      </div>
    </div>
  );
}
