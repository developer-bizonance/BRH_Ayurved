import PageBanner from "@/components/ui/PageBanner";
import Link from "next/link";

export const metadata = { title: "NCISM Mandate" };

const documents = [
  {
    "name": "Details of Director/Dean/Principal & Medical Superintendent",
    "url": "https://brharneayurved.in/BRH_PrincipalDesk.php"
  },
  {
    "name": "Details of Teaching Staff",
    "url": "https://brharneayurved.in/teaching_staff.php"
  },
  {
    "name": "Details of Non-Teaching Staff & Hospital Staff",
    "url": "https://brharneayurved.in/non_teaching_staff.php"
  },
  {
    "name": "Sanctioned Intake Capacity of Various Courses",
    "url": "https://brharneayurved.in/BRH_UnderGraduateCourses.php"
  },
  {
    "name": "List of Students Admitted (Merit-wise & Category-wise)",
    "url": "https://brharneayurved.in/student_admission_list.php"
  },
  {
    "name": "Research Publications",
    "url": "https://brharneayurved.in/research_publication.php"
  },
  {
    "name": "CME Programmes / Conferences / Academic Activities",
    "url": "https://brharneayurved.in/CME_conferences_workshop.php"
  },
  {
    "name": "Teacher Awards & Achievements",
    "url": "https://brharneayurved.in/teacher_awards.php"
  },
  {
    "name": "Student Awards & Achievements",
    "url": "https://brharneayurved.in/student_award_list.php"
  },
  {
    "name": "Affiliated University (MUHS)",
    "url": "https://www.muhs.ac.in/"
  },
  {
    "name": "Exam Result",
    "url": "https://brharneayurved.in/university_result.php"
  },
  {
    "name": "Detailed status of recognition of all the courses",
    "url": "https://brharneayurved.in/recognition.php"
  },
  {
    "name": "Clinical Material in Hospital",
    "url": "https://brharneayurved.in/details_clinical_materials.php"
  },
  {
    "name": "Student Attendance",
    "url": "https://brharneayurved.in/student_attendance_list.php"
  },
  {
    "name": "Patients Admission Data (OPD/IPD)",
    "url": "https://brharneayurved.in/monthly_hospital_data.php"
  }
];

export default function NCISMMandatePage() {
  return (
    <div>
      <PageBanner title="NCISM Mandate" breadcrumbs={[{ label: "NCISM" }, { label: "NCISM Mandate" }]} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-8">
        <div className="w-full">
          {documents.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 text-center shadow-sm border border-gray-100">
              <p className="text-gray-500">No documents found for this section.</p>
            </div>
          ) : (
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#57B745] text-white">
                      <th className="py-4 px-6 font-semibold text-center w-24 whitespace-nowrap">Sr. No.</th>
                      <th className="py-4 px-6 font-semibold">Link Details</th>
                      <th className="py-4 px-6 font-semibold text-center w-40 whitespace-nowrap">Website Links</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {documents.map((doc, idx) => (
                      <tr key={idx} className="hover:bg-green-50/50 transition-colors duration-200 group">
                        <td className="py-4 px-6 text-center text-gray-500 font-medium">{idx + 1}</td>
                        <td className="py-4 px-6 text-gray-700 font-medium group-hover:text-[#57B745] transition-colors">{doc.name}</td>
                        <td className="py-4 px-6 text-center">
                          <Link 
                            href={doc.url} 
                            target="_blank"
                            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#57B745] hover:bg-[#4a9f3a] rounded-lg transition-all shadow-sm hover:shadow active:scale-95 whitespace-nowrap"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                            Visit
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
