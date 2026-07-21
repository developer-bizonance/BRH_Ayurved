import PageBanner from "@/components/ui/PageBanner";
import Link from "next/link";

export const metadata = { title: "Student Attendance List" };

const documents = [
  {
    "name": "March 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/March_2025_20250912_073148.pdf"
  },
  {
    "name": "April 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/April_2025_20250912_073244.pdf"
  },
  {
    "name": "May 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/May_2025_20250912_073341.pdf"
  },
  {
    "name": "June 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/June_2025_20250912_073418.pdf"
  },
  {
    "name": "July 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/July_2025_20250916_070303.pdf"
  },
  {
    "name": "August 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/August_2025_20260224_100811.pdf"
  },
  {
    "name": "September 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/September_2025_20260311_084412.pdf"
  },
  {
    "name": "September 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/September_2025_20260311_084801.pdf"
  },
  {
    "name": "October 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/October_2025_20260311_084910.pdf"
  },
  {
    "name": "November 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/November_2025_20260311_085134.pdf"
  },
  {
    "name": "December 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/December_2025__20260311_085331.pdf"
  },
  {
    "name": "January 2026 AY 24-25",
    "url": "https://www.brharneayurved.in/uploads/student_zone/January_2026_AY_24-25_20260317_103618.pdf"
  },
  {
    "name": "February 2026 AY 24-25",
    "url": "https://www.brharneayurved.in/uploads/student_zone/February_2026_AY_24-25_20260317_103931.pdf"
  },
  {
    "name": "January 2026 AY 25- 26",
    "url": "https://www.brharneayurved.in/uploads/student_zone/January_2026_AY_25-_26_20260317_104034.pdf"
  },
  {
    "name": "February 2026 AY 25- 26",
    "url": "https://www.brharneayurved.in/uploads/student_zone/February_2026_AY_25-_26_20260317_104123.pdf"
  },
  {
    "name": "March 2026 AY 25-26",
    "url": "https://www.brharneayurved.in/uploads/student_zone/March_2026_AY_25-26_20260418_072127.pdf"
  },
  {
    "name": "April 2026 AY 25-26",
    "url": "https://www.brharneayurved.in/uploads/student_zone/April_2026_AY_25-26_20260514_054434.pdf"
  },
  {
    "name": "May 2026",
    "url": "https://www.brharneayurved.in/uploads/student_zone/May_2026_20260619_100912.pdf"
  },
  {
    "name": "March 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/March_2025_20250912_073502.pdf"
  },
  {
    "name": "April 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/April_2025_20250912_073531.pdf"
  },
  {
    "name": "May 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/May_2025_20250912_073625.pdf"
  },
  {
    "name": "June 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/June_2025_20250912_073651.pdf"
  },
  {
    "name": "August 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/August_2025_20251122_073603.pdf"
  },
  {
    "name": "September 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/September_2025_20251122_073938.pdf"
  },
  {
    "name": "October 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/October_2025_20251122_074030.pdf"
  },
  {
    "name": "July 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/July_2025_20251230_050421.pdf"
  },
  {
    "name": "Sy batch 22-23 November 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/Sy_batch_22-23_November_2025_20260120_034600.pdf"
  },
  {
    "name": "Sy batch 22-23 December 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/Sy_batch_22-23_December_2025_20260120_034705.pdf"
  },
  {
    "name": "Sy batch 23-24 November 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/Sy_batch_23-24_November_2025_20260120_034805.pdf"
  },
  {
    "name": "Sy batch 23-24 December 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/Sy_batch_23-24_December_2025_20260120_034953.pdf"
  },
  {
    "name": "Feb 2026",
    "url": "https://www.brharneayurved.in/uploads/student_zone/Feb_2026_20260312_131235.pdf"
  },
  {
    "name": "Sy batch 23-24 January 2026",
    "url": "https://www.brharneayurved.in/uploads/student_zone/Sy_batch_23-24_January_2026_20260320_052114.pdf"
  },
  {
    "name": "March 2026",
    "url": "https://www.brharneayurved.in/uploads/student_zone/March_2026_20260410_111751.pdf"
  },
  {
    "name": "September 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/September_2025_20251122_074432.pdf"
  },
  {
    "name": "August 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/August_2025_20251122_074646.pdf"
  },
  {
    "name": "October 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/October_2025_20251122_074736.pdf"
  },
  {
    "name": "April 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/April_2025_20260202_080433.pdf"
  },
  {
    "name": "May 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/May_2025_20260202_081214.pdf"
  },
  {
    "name": "June 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/June_2025_20260202_081251.pdf"
  },
  {
    "name": "July 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/July_2025_20260202_081343.pdf"
  },
  {
    "name": "August 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/August_2025_20260202_081453.pdf"
  },
  {
    "name": "September 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/September_2025_20260202_082211.pdf"
  },
  {
    "name": "October 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/October_2025_20260202_082303.pdf"
  },
  {
    "name": "November 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/November_2025_20260202_082348.pdf"
  },
  {
    "name": "December 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/December_2025__20260202_082449.pdf"
  }
];

export default function StudentAttendanceListPage() {
  return (
    <div>
      <PageBanner title="Student Attendance List" breadcrumbs={[{ label: "Student Zone" }, { label: "Student Attendance List" }]} />
      
      <div className="max-w-[1400px] mx-auto px-6 py-16 bg-gray-50/50">
        <h2 className="text-2xl font-bold text-[#57B745] font-[var(--font-playfair)] mb-10 border-l-4 border-[#57B745] pl-4">
          Student Attendance List
        </h2>

        {documents.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center shadow-sm border border-gray-100">
            <p className="text-gray-500">No documents found for this section.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {documents.map((doc, idx) => (
              <Link 
                href={doc.url} 
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Top Banner Area */}
                <div className="h-32 bg-gradient-to-br from-[#57B745] to-[#57B745] relative flex items-center justify-center overflow-hidden shrink-0">
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all"></div>
                  <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>
                  
                  {/* PDF Icon */}
                  <div className="relative z-10 bg-white/20 backdrop-blur-sm p-4 rounded-full text-white group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <path d="M9 15v-4"></path>
                      <path d="M12 15v-4"></path>
                      <path d="M12 11h2"></path>
                      <path d="M15 11h2v4"></path>
                      <path d="M15 13h2"></path>
                    </svg>
                  </div>
                </div>

                {/* Text Area */}
                <div className="p-6 text-center flex flex-col flex-grow">
                  <div className="inline-block px-3 py-1 bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 self-center">
                    PDF Document
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm md:text-base group-hover:text-[#57B745] transition-colors leading-relaxed mb-2 flex-grow">
                    {doc.name}
                  </h3>
                  <div className="mt-auto pt-4 flex items-center justify-center gap-2 text-sm text-[#e8821a] font-semibold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    <span>View File</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
