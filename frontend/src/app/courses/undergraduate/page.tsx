import PageBanner from "@/components/ui/PageBanner";
import { BookOpen, Clock, Users, CheckCircle } from "lucide-react";

export const metadata = { title: "Under Graduate Courses" };

export default function UndergraduatePage() {
  return (
    <div>
      <PageBanner title="Under Graduate Courses" breadcrumbs={[{ label: "Courses" }, { label: "Under Graduate" }]} />
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-10">
        
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#57B745] to-[#57B745] p-6 text-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <BookOpen size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold font-[var(--font-playfair)]">Bachelor of Ayurvedic Medicine and Surgery (BAMS)</h2>
                <div className="flex flex-wrap gap-4 mt-3">
                  <div className="flex items-center gap-1.5 text-white/80 text-sm">
                    <Clock size={14} /> 5.5 Years
                  </div>
                  <div className="flex items-center gap-1.5 text-white/80 text-sm">
                    <Users size={14} /> 100 Seats
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Body */}
          <div className="p-6 space-y-8">
            <div>
              <p className="text-gray-600 leading-relaxed text-sm text-justify">
                B. A. M. S. (Bachelor of Ayurvedic Medicine & Surgery) is a degree level course designed and controlled by Central Council of Indian Medicine, New Delhi [CCIM] and approved by AYUSH Department of Ministry of Health and Family Welfare. Our college is affiliated to Maharashtra University of Health Sciences and is recognized by State Govt. of Maharashtra. This course is designed to produce graduates with a profound knowledge of Ayurved and relevant study of Modern sciences. They would be competent practitioners in all branches of Ayurved as well as efficient Teachers and Research workers in various fields. This will enable them to contribute to the health needs of India in effective way.
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-gray-200">
              <table className="w-full text-left text-sm text-gray-700">
                <thead className="bg-[#57B745] text-white">
                  <tr>
                    <th colSpan={2} className="px-5 py-3 font-semibold">Courses Specifications :-</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4 font-semibold w-1/3">Duration of Course</td>
                    <td className="px-5 py-4">Main course – 4 and 1/2 years + Internship training programme – 01 year (6 months Urban & 6 months Rural).</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4 font-semibold">Degree to be awarded</td>
                    <td className="px-5 py-4">The successful candidate is awarded degree of Ayurvedacharya (BAMS – Bachelor of Ayurvedic Medicine and Surgery) by Maharashtra University of Health Sciences after passing out the 4 & 1/2 yr course and completion of 01 yr. Internship Training Programme.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4 font-semibold">Medium of Instructions</td>
                    <td className="px-5 py-4">Sanskrit, Hindi, Marathi and English.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4 font-semibold">Intake capacity</td>
                    <td className="px-5 py-4">100 seats per year</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4 font-semibold">Seat Distribution</td>
                    <td className="px-5 py-4 leading-relaxed">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>State Quota = 70</li>
                        <li>All India Quota = 15</li>
                        <li>NRI Quota = 15</li>
                      </ul>
                      <div className="mt-2 text-xs font-semibold text-[#e8821a]">
                        * 25% Reservation for Reserve Category Under State Quota
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4 font-semibold">Admission criteria</td>
                    <td className="px-5 py-4">As per Guidelines of AYUSH Mantralay – Govt. of India, Vaidkiya Shikshan Mantralay Govt. of Maharashtra, AYUSH Admission Central Counseling Committee (AACCC)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4 font-semibold">College Infrastructure</td>
                    <td className="px-5 py-4">
                      <a href="https://www.brharneayurved.in/assets/pdf/College%20Infrastructure/College-Infrastructure.pdf" target="_blank" rel="noopener noreferrer" className="text-[#57B745] hover:underline font-medium flex items-center gap-2">
                        View College Infrastructure PDF
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
          </div>
        </div>

        {/* Admission Note */}
        <div className="bg-[#fff8f0] border border-[#e8821a]/20 rounded-2xl p-6 flex gap-4">
          <div className="w-10 h-10 rounded-full bg-[#e8821a]/10 flex items-center justify-center text-[#e8821a] flex-shrink-0">
            <CheckCircle size={20} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">How to Apply</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Admissions to BAMS are conducted through the NEET (National Eligibility cum Entrance Test) and
              state counseling by DMER Maharashtra. Visit the <a href="/admissions/details" className="text-[#57B745] font-medium hover:underline">Admissions Details</a> page
              for the full process and documents required.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
