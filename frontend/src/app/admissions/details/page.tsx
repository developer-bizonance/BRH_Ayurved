import PageBanner from "@/components/ui/PageBanner";
import Link from "next/link";
import { Clock, CheckCircle, FileText, Settings } from "lucide-react";

export const metadata = { title: "Admissions Details" };

const admissionDetails = [
  {
    icon: <Clock size={24} className="text-[#57B745]" />,
    label: "Duration",
    value: "5½ year (including 1 year compulsory internship)"
  },
  {
    icon: <CheckCircle size={24} className="text-[#57B745]" />,
    label: "Eligibility",
    value: "Students must have passed the Twelfth (10 + 2) standard with science (Physics, Chemistry and Biology) or any other examination recognized as equivalent to same & with English as one of the languages. He/she must have achieved minimum of 50% marks in the aggregate of the relevant science subject (Physics, Chemistry and Biology) of the 12th standard examination. Minimum age for admission is 17 years as on 31st December in the year of admission for the First BAMS course."
  },
  {
    icon: <Settings size={24} className="text-[#57B745]" />,
    label: "Mode of admission",
    value: "Students are admitted to BAMS course on the merit basis obtained in the National Eligibility cum Entrance Test (NEET) conducted by Central Board of Secondary Education (CBSE)."
  },
  {
    icon: <FileText size={24} className="text-[#57B745]" />,
    label: "Criteria",
    value: "Admission Criteria",
    link: "https://www.brharneayurved.in/assets/pdf/Admissions/Admission Details/Admission_Criteria.pdf"
  }
];

export default function AdmissionsDetailsPage() {
  return (
    <div>
      <PageBanner title="Admissions Details" breadcrumbs={[{ label: "Admissions" }, { label: "Details" }]} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-0">
        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-6">
          B.A.M.S. (Ayurvedacharya)
        </h2>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm md:text-base">
            <tbody className="divide-y divide-gray-100">
              {admissionDetails.map((detail, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 align-top w-1/4 bg-gray-50/30 border-r border-gray-100">
                    <div className="flex items-center gap-3 font-semibold text-gray-800">
                      {detail.label}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600 leading-relaxed">
                    {detail.link ? (
                      <div className="flex items-center gap-2">
                        {detail.value}{" "}
                        <Link 
                          href={detail.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#e8821a] hover:text-[#c46c12] font-semibold underline underline-offset-4 decoration-2 transition-colors"
                        >
                          (Click Here)
                        </Link>
                      </div>
                    ) : (
                      detail.value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
