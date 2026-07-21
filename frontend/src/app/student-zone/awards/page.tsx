import PageBanner from "@/components/ui/PageBanner";
import Link from "next/link";

export const metadata = { title: "Student Award List" };

const documents = [
  {
    "name": "Student Award List",
    "url": "https://www.brharneayurved.in/uploads/student_zone/Student_Award_List_20251002_091121.pdf"
  },
  {
    "name": "Students Award list 2025",
    "url": "https://www.brharneayurved.in/uploads/student_zone/Students_Award_list_2025_20251219_113839.pdf"
  }
];

export default function StudentAwardListPage() {
  return (
    <div>
      <PageBanner title="Student Award List" breadcrumbs={[{ label: "Student Zone" }, { label: "Student Award List" }]} />
      
      <div className="max-w-[1400px] mx-auto px-6 py-16 bg-gray-50/50">
        <h2 className="text-2xl font-bold text-[#57B745] font-[var(--font-playfair)] mb-10 border-l-4 border-[#57B745] pl-4">
          Student Award List
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
