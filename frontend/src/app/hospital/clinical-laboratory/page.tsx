import PageBanner from "@/components/ui/PageBanner";
import { FlaskConical, Microscope, TestTube, Activity } from "lucide-react";

export const metadata = { title: "Clinical Laboratory" };

const services = [
  { icon: <Microscope size={20} />, name: "Haematology", tests: ["CBC (Complete Blood Count)", "ESR", "Peripheral Smear", "Haemoglobin estimation"] },
  { icon: <FlaskConical size={20} />, name: "Biochemistry", tests: ["Blood Sugar (FBS, PPBS)", "Lipid Profile", "Liver Function Tests", "Kidney Function Tests"] },
  { icon: <TestTube size={20} />, name: "Urine Analysis", tests: ["Routine Urine Exam", "Urine Culture & Sensitivity", "Urine Pregnancy Test", "Urine Sugar & Albumin"] },
  { icon: <Activity size={20} />, name: "Microbiology", tests: ["Sputum AFB", "Blood Culture", "Stool Routine Exam", "Throat Swab Culture"] },
];

export default function ClinicalLabPage() {
  return (
    <div>
      <PageBanner title="Clinical Laboratory" breadcrumbs={[{ label: "Hospital" }, { label: "Clinical Laboratory" }]} />
      <div className="max-w-6xl mx-auto px-6 pt-4 pb-14">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-10">
          <h6 className="text-gray-800 text-lg font-medium leading-relaxed mb-6">
            The Rog Nidan and Vikruti Vigyan Dept. have an 800 sq. ft. well equipped laboratory and conducts the following investigations
          </h6>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-3">
              <p className="flex items-center text-gray-600 text-md">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#57B745]/10 text-[#57B745] mr-3">✓</span>
                Clinical pathology
              </p>
              <p className="flex items-center text-gray-600 text-md">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#57B745]/10 text-[#57B745] mr-3">✓</span>
                Biochemistry
              </p>
              <p className="flex items-center text-gray-600 text-md">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#57B745]/10 text-[#57B745] mr-3">✓</span>
                Serology
              </p>
            </div>
            <div className="space-y-3">
              <p className="flex items-center text-gray-600 text-md">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#57B745]/10 text-[#57B745] mr-3">✓</span>
                Microbiology
              </p>
              <p className="flex items-center text-gray-600 text-md">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#57B745]/10 text-[#57B745] mr-3">✓</span>
                Ultrasound
              </p>
              <p className="flex items-center text-gray-600 text-md">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#57B745]/10 text-[#57B745] mr-3">✓</span>
                X-ray
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
