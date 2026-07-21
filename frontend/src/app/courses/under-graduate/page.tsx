import Link from "next/link";

export const metadata = {
  title: "Under Graduate Courses | B. R. Harne Ayurvedic Medical College",
  description: "Information about the B.A.M.S. Under Graduate course at B. R. Harne Ayurvedic Medical College.",
};

export default function UnderGraduateCoursesPage() {
  return (
    <div className="bg-slate-50 h-full flex flex-col pt-12 pb-16">
      <div className="pb-6 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
            Under Graduate Courses
          </h2>
          <div className="w-12 h-1 bg-[#57B745] rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full">

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-10">
          <p className="text-gray-700 leading-relaxed text-justify mb-8">
            <strong className="text-gray-900 font-semibold">B. A. M. S. (Bachelor of Ayurvedic Medicine & Surgery)</strong> Bachelor of Ayurvedic Medicine and Surgery is a degree level course designed and controlled by Central Council of Indian Medicine, New Delhi [CCIM] and approved by AYUSH Department of Ministry of Health and Family Welfare. Our college is affiliated to Maharashtra University of Health Sciences. is recognized by State Govt. of Maharashtra. This course is designed to produce graduates with a profound knowledge of Ayurved and relevant study of Modern sciences. They would be competent practitioners in all branches of Ayurved as well as efficient Teachers and Research workers in various fields. This will enable them to contribute to the health needs of India in effective way.
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-[#57B745]">
                <tr>
                  <th colSpan={2} className="px-6 py-4 text-left text-base font-semibold text-white tracking-wider">
                    Courses Specifications :-
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900 w-1/3">
                    Duration of Course
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    Main course – 4 and 1/2 years + Internship training programme – 01 year (6 months Urban & 6 months Rural).
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap">
                    Degree to be awarded
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    The successful candidate is awarded degree of Ayurvedacharya (BAMS – Bachelor of Ayurvedic Medicine and Surgery) by Maharashtra University of Health Sciences after passing out the 4 & 1/2 yr course and completion of 01 yr. Internship Training Programme.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap">
                    Medium of Instructions
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    Sanskrit, Hindi, Marathi and English.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap">
                    Intake capacity
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    100 seats per year
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap">
                    Seat Distribution
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    State Quota = 70<br />
                    All India Quota = 15<br />
                    NRI Quota = 15<br />
                    25% Reservation for Reserve Category Under State Quota
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap">
                    Admission criteria
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    As per Guidelines of AYUSH Mantralay – Govt. of India, Vaidkiya Shikshan Mantralay Govt. of Maharashtra, AYUSH Admission Central Counselling Committee (AACCC)
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap">
                    College Infrastructure
                  </td>
                  <td className="px-6 py-4 text-[#e8821a] hover:text-[#c46c12] hover:underline font-medium">
                    <Link href="https://brharneayurved.in/assets/pdf/College%20Infrastructure/College-Infrastructure.pdf" target="_blank" rel="noopener noreferrer">
                      College Infrastructure
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
