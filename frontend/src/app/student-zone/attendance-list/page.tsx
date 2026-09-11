import PageBanner from "@/components/ui/PageBanner";
import DocumentAccordion from "@/components/ui/DocumentAccordion";

export const metadata = { title: "Student Attendance List" };

const sections = [
  {
    "category": "First Year",
    "files": [
      {
        "name": "March 2025",
        "url": "/uploads/student_zone/March_2025_20250912_073148.pdf"
      },
      {
        "name": "April 2025",
        "url": "/uploads/student_zone/April_2025_20250912_073244.pdf"
      },
      {
        "name": "May 2025",
        "url": "/uploads/student_zone/May_2025_20250912_073341.pdf"
      },
      {
        "name": "June 2025",
        "url": "/uploads/student_zone/June_2025_20250912_073418.pdf"
      },
      {
        "name": "July 2025",
        "url": "/uploads/student_zone/July_2025_20250916_070303.pdf"
      },
      {
        "name": "August 2025",
        "url": "/uploads/student_zone/August_2025_20260224_100811.pdf"
      },
      {
        "name": "September 2025",
        "url": "/uploads/student_zone/September_2025_20260311_084412.pdf"
      },
      {
        "name": "September 2025",
        "url": "/uploads/student_zone/September_2025_20260311_084801.pdf"
      },
      {
        "name": "October 2025",
        "url": "/uploads/student_zone/October_2025_20260311_084910.pdf"
      },
      {
        "name": "November 2025",
        "url": "/uploads/student_zone/November_2025_20260311_085134.pdf"
      },
      {
        "name": "December 2025",
        "url": "/uploads/student_zone/December_2025__20260311_085331.pdf"
      },
      {
        "name": "January 2026 AY 24-25",
        "url": "/uploads/student_zone/January_2026_AY_24-25_20260317_103618.pdf"
      },
      {
        "name": "February 2026 AY 24-25",
        "url": "/uploads/student_zone/February_2026_AY_24-25_20260317_103931.pdf"
      },
      {
        "name": "January 2026 AY 25- 26",
        "url": "/uploads/student_zone/January_2026_AY_25-_26_20260317_104034.pdf"
      },
      {
        "name": "February 2026 AY 25- 26",
        "url": "/uploads/student_zone/February_2026_AY_25-_26_20260317_104123.pdf"
      },
      {
        "name": "March 2026 AY 25-26",
        "url": "/uploads/student_zone/March_2026_AY_25-26_20260418_072127.pdf"
      },
      {
        "name": "April 2026 AY 25-26",
        "url": "/uploads/student_zone/April_2026_AY_25-26_20260514_054434.pdf"
      },
      {
        "name": "May 2026",
        "url": "/uploads/student_zone/May_2026_20260619_100912.pdf"
      },
      {
        "name": "June 2026",
        "url": "/uploads/student_zone/June_2026_20260709_081836.pdf"
      },
      {
        "name": "July 2026",
        "url": "/uploads/student_zone/July_2026_20260818_051411.pdf"
      },
      {
        "name": "August 2026",
        "url": "/uploads/student_zone/August_2026.pdf"
      }
    ]
  },
  {
    "category": "Second Year",
    "files": [
      {
        "name": "March 2025",
        "url": "/uploads/student_zone/March_2025_20250912_073502.pdf"
      },
      {
        "name": "April 2025",
        "url": "/uploads/student_zone/April_2025_20250912_073531.pdf"
      },
      {
        "name": "May 2025",
        "url": "/uploads/student_zone/May_2025_20250912_073625.pdf"
      },
      {
        "name": "June 2025",
        "url": "/uploads/student_zone/June_2025_20250912_073651.pdf"
      },
      {
        "name": "August 2025",
        "url": "/uploads/student_zone/August_2025_20251122_073603.pdf"
      },
      {
        "name": "September 2025",
        "url": "/uploads/student_zone/September_2025_20251122_073938.pdf"
      },
      {
        "name": "October 2025",
        "url": "/uploads/student_zone/October_2025_20251122_074030.pdf"
      },
      {
        "name": "July 2025",
        "url": "/uploads/student_zone/July_2025_20251230_050421.pdf"
      },
      {
        "name": "Sy batch 22-23 November 2025",
        "url": "/uploads/student_zone/Sy_batch_22-23_November_2025_20260120_034600.pdf"
      },
      {
        "name": "Sy batch 22-23 December 2025",
        "url": "/uploads/student_zone/Sy_batch_22-23_December_2025_20260120_034705.pdf"
      },
      {
        "name": "Sy batch 23-24 November 2025",
        "url": "/uploads/student_zone/Sy_batch_23-24_November_2025_20260120_034805.pdf"
      },
      {
        "name": "Sy batch 23-24 December 2025",
        "url": "/uploads/student_zone/Sy_batch_23-24_December_2025_20260120_034953.pdf"
      },
      {
        "name": "Feb 2026",
        "url": "/uploads/student_zone/Feb_2026_20260312_131235.pdf"
      },
      {
        "name": "Sy batch 23-24 January 2026",
        "url": "/uploads/student_zone/Sy_batch_23-24_January_2026_20260320_052114.pdf"
      },
      {
        "name": "March 2026",
        "url": "/uploads/student_zone/March_2026_20260410_111751.pdf"
      },
      {
        "name": "Sybams 23-24 batch  May 2026",
        "url": "/uploads/student_zone/Sybams_23-24_batch__May_2026_20260630_072322.pdf"
      },
      {
        "name": "Sybams 23-24 batch June 2026",
        "url": "/uploads/student_zone/Sybams_23-24_batch_June_2026_20260724_061120.pdf"
      },
      {
        "name": "Sybams 24-25 batch June 2026",
        "url": "/uploads/student_zone/Sybams_24-25_batch_June_2026_20260724_061214.pdf"
      },
      {
        "name": "Sy batch 23-24 July 2026",
        "url": "/uploads/student_zone/Sy_batch_23-24_July_2026_20260821_091255.pdf"
      },
      {
        "name": "Sy batch 24-25 July 2026",
        "url": "/uploads/student_zone/Sy_batch_24-25_July_2026_20260821_091425.pdf"
      },
      {
        "name": "SYBAMS (2024-25) MONTHLY ATTENDANCE- AUG 2026",
        "url": "/uploads/student_zone/SYBAMS%20(2024-25)%20MONTHLY%20ATTENDANCE%20%20AUGUST-2026.pdf"
      },
      {
        "name": "SYBAMS (2023-24) MONTHLY ATTENDANCE- AUG 2026",
        "url": "/uploads/student_zone/SYBAMS%20(2023-24)%20MONTHLY%20ATTENDANCE%20AUGUST-2026.pdf"
      }
    ]
  },
  {
    "category": "Third Year",
    "files": [
      {
        "name": "April 2025",
        "url": "/uploads/student_zone/April_2025_20260202_080433.pdf"
      },
      {
        "name": "May 2025",
        "url": "/uploads/student_zone/May_2025_20260202_081214.pdf"
      },
      {
        "name": "June 2025",
        "url": "/uploads/student_zone/June_2025_20260202_081251.pdf"
      },
      {
        "name": "July 2025",
        "url": "/uploads/student_zone/July_2025_20260202_081343.pdf"
      },
      {
        "name": "August 2025",
        "url": "/uploads/student_zone/August_2025_20260202_081453.pdf"
      },
      {
        "name": "September 2025",
        "url": "/uploads/student_zone/September_2025_20260202_082211.pdf"
      },
      {
        "name": "October 2025",
        "url": "/uploads/student_zone/October_2025_20260202_082303.pdf"
      },
      {
        "name": "November 2025",
        "url": "/uploads/student_zone/November_2025_20260202_082348.pdf"
      },
      {
        "name": "December 2025",
        "url": "/uploads/student_zone/December_2025__20260202_082449.pdf"
      },
      {
        "name": "January 2026",
        "url": "/uploads/student_zone/January_2026_20260804_061350.pdf"
      },
      {
        "name": "February 2026",
        "url": "/uploads/student_zone/February_2026_20260804_063947.pdf"
      },
      {
        "name": "March 2026",
        "url": "/uploads/student_zone/March_2026_20260804_064047.pdf"
      },
      {
        "name": "April 2026",
        "url": "/uploads/student_zone/April_2026_20260804_064129.pdf"
      },
      {
        "name": "June 2026",
        "url": "/uploads/student_zone/June_2026_20260804_071641.pdf"
      },
      {
        "name": "May 2026",
        "url": "/uploads/student_zone/May_2026_20260804_075916.pdf"
      },
      {
        "name": "Tybams 22-23 march",
        "url": "/uploads/student_zone/Tybams_22-23_march__20260821_101008.pdf"
      },
      {
        "name": "Tybams 22-23 April",
        "url": "/uploads/student_zone/Tybams_22-23_April_20260821_101337.pdf"
      },
      {
        "name": "Tybams 22-23 May",
        "url": "/uploads/student_zone/Tybams_22-23_May_20260821_110001.pdf"
      },
      {
        "name": "Tybams 22-23 June",
        "url": "/uploads/student_zone/Tybams_22-23_June_20260821_110051.pdf"
      },
      {
        "name": "Tybams 22-23 july",
        "url": "/uploads/student_zone/Tybams_22-23_july_20260821_110141.pdf"
      }
    ]
  }
];

export default function StudentAttendanceListPage() {
  return (
    <div>
      <PageBanner title="Student Attendance List" breadcrumbs={[{ label: "Student Zone" }, { label: "Student Attendance List" }]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-0">
        <div className="w-full">
          <DocumentAccordion sections={sections} defaultOpenIdx={0} />
        </div>
      </div>
    </div>
  );
}
