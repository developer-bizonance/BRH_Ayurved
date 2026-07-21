import PageBanner from "@/components/ui/PageBanner";
import MUHSDocumentsAccordion from "@/components/muhs/MUHSDocumentsAccordion";

export const metadata = { title: "MUHS Mandate 2021-2022" };

const documentsData = [
  {
    category: "Mandate Documents",
    files: [
      {
        "name": "Affilation-2021-22",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/Affilation-2021-2220250524_033536.pdf"
      },
      {
        "name": "Permission-2021-22",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/Permission-2021-2220250524_033714.pdf"
      },
      {
        "name": "Seat-Matrix",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/Seat-Matrix20250524_033813.pdf"
      },
      {
        "name": "State Govt NOC",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/State Govt NOC20250524_034639.pdf"
      },
      {
        "name": "Land Documents",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/Land Documents20251002_094221.pdf"
      },
      {
        "name": "Foundation Registration",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/Foundation Registration20250524_034756.pdf"
      },
      {
        "name": "Trust Information",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/Trust Information20250626_193650.pdf"
      },
      {
        "name": "Trust Deed",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/Trust Deed20251002_094531.pdf"
      },
      {
        "name": "Library",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/Library20250626_194323.pdf"
      },
      {
        "name": "Details of equipment and requirements",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/Details of equipment and requirements20251002_094912.pdf"
      },
      {
        "name": "DISSECTION HALL",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/DISSECTION HALL20251002_095005.pdf"
      },
      {
        "name": "Equ Dravyagun",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/Equ Dravyagun20251002_095103.pdf"
      },
      {
        "name": "Equ Kriya Sharir",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/Equ Kriya Sharir20251002_095154.pdf"
      },
      {
        "name": "Equ Rasashastras And Bhaishajya Kalpana",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/Equ Rasashastras And Bhaishajya Kalpana20251002_095312.pdf"
      },
      {
        "name": "Equ Rog Nidan and Vikriti Vigyan",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/Equ Rog Nidan and Vikriti Vigyan20251002_095401.pdf"
      },
      {
        "name": "REQUIREMENT LABOUR ROOM",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/REQUIREMENT LABOUR ROOM20251002_095448.pdf"
      },
      {
        "name": "REQUIREMENT OPD",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/REQUIREMENT OPD20251002_095544.pdf"
      },
      {
        "name": "REQUIREMENT OT",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/REQUIREMENT OT20251002_095629.pdf"
      },
      {
        "name": "OPD IPD Details",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/OPD IPD Details20251002_095743.pdf"
      },
      {
        "name": "Panchakarma details",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/Panchakarma details20251002_095824.pdf"
      },
      {
        "name": "Teaching Staff",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/Teaching Staff20251002_102245.pdf"
      },
      {
        "name": "TEACHING STAFF LIST",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/TEACHING STAFF LIST20251002_102407.pdf"
      },
      {
        "name": "Hospital Staff List",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/Hospital Staff List20251002_102635.pdf"
      },
      {
        "name": "Nonteaching Staff List Rotated",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/Nonteaching Staff List Rotated20251002_102909.pdf"
      },
      {
        "name": "March 2022",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/March 202220251002_103739.pdf"
      },
      {
        "name": "April 2022",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/April 202220251002_104341.pdf"
      },
      {
        "name": "May 2022",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/May 202220251002_104456.pdf"
      },
      {
        "name": "June 2022",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/June 202220251002_104615.pdf"
      },
      {
        "name": "July 2022",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/July 202220251002_104734.pdf"
      },
      {
        "name": "AISHE CERTIFICATE",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/AISHE CERTIFICATE20251002_104940.pdf"
      },
      {
        "name": "LIC Affidavit",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/LIC Affidavit20251002_105102.pdf"
      },
      {
        "name": "Research Development Programme",
        "url": "https://www.brharneayurved.in/uploads/muhs_mandate/Research Development Programme20251002_105302.pdf"
      }
    ]
  }
];

export default function MUHSMandate20212022Page() {
  return (
    <div>
      <PageBanner title="MUHS Mandate 2021-2022" breadcrumbs={[{ label: "MUHS" }, { label: "MUHS Mandate 2021-2022" }]} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-2">
        <MUHSDocumentsAccordion documentsData={documentsData} />
      </div>
    </div>
  );
}
