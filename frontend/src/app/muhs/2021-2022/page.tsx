import PageBanner from "@/components/ui/PageBanner";
import MUHSDocumentsAccordion from "@/components/muhs/MUHSDocumentsAccordion";

export const metadata = { title: "MUHS Mandate 2021-2022" };

const documentsData = [
  {
    "category": "Annexure I",
    "files": [
      {
        "name": "Affilation-2021-22",
        "url": "/uploads/muhs_mandate/Affilation-2021-2220250524_033536.pdf"
      },
      {
        "name": "Permission-2021-22",
        "url": "/uploads/muhs_mandate/Permission-2021-2220250524_033714.pdf"
      },
      {
        "name": "Seat-Matrix",
        "url": "/uploads/muhs_mandate/Seat-Matrix20250524_033813.pdf"
      }
    ]
  },
  {
    "category": "Annexure II",
    "files": [
      {
        "name": "State Govt NOC",
        "url": "/uploads/muhs_mandate/State Govt NOC20250524_034639.pdf"
      },
      {
        "name": "Land Documents",
        "url": "/uploads/muhs_mandate/Land Documents20251002_094221.pdf"
      }
    ]
  },
  {
    "category": "Annexure III",
    "files": [
      {
        "name": "Foundation Registration",
        "url": "/uploads/muhs_mandate/Foundation Registration20250524_034756.pdf"
      },
      {
        "name": "Trust Information",
        "url": "/uploads/muhs_mandate/Trust Information20250626_193650.pdf"
      },
      {
        "name": "Trust Deed",
        "url": "/uploads/muhs_mandate/Trust Deed20251002_094531.pdf"
      }
    ]
  },
  {
    "category": "Annexure IV",
    "files": [
      {
        "name": "Library",
        "url": "/uploads/muhs_mandate/Library20250626_194323.pdf"
      }
    ]
  },
  {
    "category": "Annexure V",
    "files": [
      {
        "name": "Details of equipment and requirements",
        "url": "/uploads/muhs_mandate/Details of equipment and requirements20251002_094912.pdf"
      },
      {
        "name": "DISSECTION HALL",
        "url": "/uploads/muhs_mandate/DISSECTION HALL20251002_095005.pdf"
      },
      {
        "name": "Equ Dravyagun",
        "url": "/uploads/muhs_mandate/Equ Dravyagun20251002_095103.pdf"
      },
      {
        "name": "Equ Kriya Sharir",
        "url": "/uploads/muhs_mandate/Equ Kriya Sharir20251002_095154.pdf"
      },
      {
        "name": "Equ Rasashastras And Bhaishajya Kalpana",
        "url": "/uploads/muhs_mandate/Equ Rasashastras And Bhaishajya Kalpana20251002_095312.pdf"
      },
      {
        "name": "Equ Rog Nidan and Vikriti Vigyan",
        "url": "/uploads/muhs_mandate/Equ Rog Nidan and Vikriti Vigyan20251002_095401.pdf"
      },
      {
        "name": "REQUIREMENT LABOUR ROOM",
        "url": "/uploads/muhs_mandate/REQUIREMENT LABOUR ROOM20251002_095448.pdf"
      },
      {
        "name": "REQUIREMENT OPD",
        "url": "/uploads/muhs_mandate/REQUIREMENT OPD20251002_095544.pdf"
      },
      {
        "name": "REQUIREMENT OT",
        "url": "/uploads/muhs_mandate/REQUIREMENT OT20251002_095629.pdf"
      }
    ]
  },
  {
    "category": "Annexure VI",
    "files": [
      {
        "name": "OPD IPD Details",
        "url": "/uploads/muhs_mandate/OPD IPD Details20251002_095743.pdf"
      },
      {
        "name": "Panchakarma details",
        "url": "/uploads/muhs_mandate/Panchakarma details20251002_095824.pdf"
      }
    ]
  },
  {
    "category": "Annexure VII",
    "files": [
      {
        "name": "Teaching Staff",
        "url": "/uploads/muhs_mandate/Teaching Staff20251002_102245.pdf"
      }
    ]
  },
  {
    "category": "Annexure VIII",
    "files": [
      {
        "name": "TEACHING STAFF LIST",
        "url": "/uploads/muhs_mandate/TEACHING STAFF LIST20251002_102407.pdf"
      }
    ]
  },
  {
    "category": "Annexure IX",
    "files": [
      {
        "name": "Hospital Staff List",
        "url": "/uploads/muhs_mandate/Hospital Staff List20251002_102635.pdf"
      }
    ]
  },
  {
    "category": "Annexure X",
    "files": [
      {
        "name": "Nonteaching Staff List Rotated",
        "url": "/uploads/muhs_mandate/Nonteaching Staff List Rotated20251002_102909.pdf"
      }
    ]
  },
  {
    "category": "Annexure XI",
    "files": [
      {
        "name": "March 2022",
        "url": "/uploads/muhs_mandate/March 202220251002_103739.pdf"
      },
      {
        "name": "April 2022",
        "url": "/uploads/muhs_mandate/April 202220251002_104341.pdf"
      },
      {
        "name": "May 2022",
        "url": "/uploads/muhs_mandate/May 202220251002_104456.pdf"
      },
      {
        "name": "June 2022",
        "url": "/uploads/muhs_mandate/June 202220251002_104615.pdf"
      },
      {
        "name": "July 2022",
        "url": "/uploads/muhs_mandate/July 202220251002_104734.pdf"
      }
    ]
  },
  {
    "category": "Annexure XII",
    "files": [
      {
        "name": "AISHE CERTIFICATE",
        "url": "/uploads/muhs_mandate/AISHE CERTIFICATE20251002_104940.pdf"
      }
    ]
  },
  {
    "category": "Annexure XIII",
    "files": [
      {
        "name": "LIC Affidavit",
        "url": "/uploads/muhs_mandate/LIC Affidavit20251002_105102.pdf"
      }
    ]
  },
  {
    "category": "Annexure XIV",
    "files": []
  },
  {
    "category": "Annexure XV",
    "files": []
  },
  {
    "category": "Annexure XVI",
    "files": []
  },
  {
    "category": "Faculty Development Program",
    "files": [
      {
        "name": "Research Development Programme",
        "url": "/uploads/muhs_mandate/Research Development Programme20251002_105302.pdf"
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
