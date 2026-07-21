import PageBanner from "@/components/ui/PageBanner";
import { departments } from "@/lib/content";
import { BookOpen } from "lucide-react";

export const metadata = { title: "Academic Departments" };

const deptInfo: Record<string, string> = {
  "Kriya Sharir": "Ayurvedic Physiology — studies the principles of body function in health and disease",
  "Rachna Sharir": "Ayurvedic Anatomy — structural study of the human body from Ayurvedic perspective",
  "Samhita Sidhhanta": "Classical Ayurvedic texts and fundamental principles of Ayurveda",
  "Dravyaguna Vidnyana": "Pharmacology — properties, actions, and therapeutic uses of medicinal plants",
  "Rasashastra & Bhaishajya Kalpana": "Pharmaceutics — preparation of Ayurvedic formulations and metal-mineral preparations",
  "Rog Nidan": "Pathology & Diagnostics — Ayurvedic approach to disease diagnosis",
  "Swasthavritta & Yoga": "Preventive Medicine, Social Medicine, and Yoga therapy",
  "Agad Tantra Avum Vidhi Vaidyaka": "Toxicology and Medical Jurisprudence",
  "Prasuti & Stri Roga": "Obstetrics & Gynecology — Ayurvedic care for women and childbirth",
  "Kaumarbhritya (Bal Roga)": "Pediatrics — Ayurvedic child healthcare",
  "Kayachikitsa": "Internal Medicine — the largest and primary clinical department",
  "Shalakya Tantra": "ENT, Eye, Dental care from Ayurvedic perspective",
  "Shalya Tantra": "Ayurvedic Surgery — classical and modern surgical approaches",
  "Panchakarma": "Biomedical Purification Therapies — the flagship clinical specialty",
};

export default function AcademicsPage() {
  return (
    <div>
      <PageBanner title="Academic Departments" breadcrumbs={[{ label: "Academics" }]} />
      <div className="max-w-6xl mx-auto px-6 py-14">
        <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
          B. R. Harne Ayurvedic Medical College offers comprehensive education across all 14 mandatory departments
          prescribed by NCISM for BAMS programs, each led by qualified faculty with specialist expertise.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {departments.map((dept, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#57B745]/10 flex items-center justify-center text-[#57B745] flex-shrink-0">
                  <BookOpen size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm mb-2 leading-snug">{dept}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{deptInfo[dept]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
