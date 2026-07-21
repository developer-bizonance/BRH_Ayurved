import PageBanner from "@/components/ui/PageBanner";
import { Dumbbell, PersonStanding, Users } from "lucide-react";

export const metadata = { title: "Physiotherapy" };

export default function PhysiotherapyPage() {
  return (
    <div>
      <PageBanner title="Physiotherapy Unit" breadcrumbs={[{ label: "Hospital" }, { label: "Physiotherapy" }]} />
      
      <div className="max-w-6xl mx-auto px-6 pt-4 pb-14">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-10">
          <p className="text-gray-600 text-lg leading-relaxed">
            Physiotherapy means physiotherapeutic system of medicine which includes examination, treatment, advice and instructions to any person preparatory to or for the purpose of or in connection with movement dysfunction, bodily malfunction, physical disorder, disability, healing and pain from trauma and disease, physical and mental conditions using physical agents including exercise, mobilization, manipulation, mechanical and electrotherapy, activity and devices or diagnosis, treatment and prevention.
          </p>
        </div>
      </div>
    </div>
  );
}
