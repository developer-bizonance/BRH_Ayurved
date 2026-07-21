import PageBanner from "@/components/ui/PageBanner";
import { Stethoscope, Activity, HeartPulse } from "lucide-react";

export const metadata = { title: "Operation Theater Block" };

export default function OperationTheaterBlockPage() {
  return (
    <div>
      <PageBanner title="Operation Theater Block" breadcrumbs={[{ label: "Hospital" }, { label: "Operation Theater Block" }]} />
      
      <div className="max-w-5xl mx-auto px-6 pt-4 pb-14">

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:-translate-y-1 transition-transform relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#57B745]/5 rounded-bl-full"></div>
            <div className="w-12 h-12 rounded-full bg-[#57B745]/10 flex items-center justify-center text-[#57B745] mx-auto mb-4">
              <Stethoscope size={24} />
            </div>
            <h3 className="font-bold text-gray-800 mb-1">Major OT</h3>
            <div className="text-3xl font-black text-[#57B745] mb-2">01</div>
            <p className="text-sm text-gray-500">Fully Equipped Facility</p>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:-translate-y-1 transition-transform relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#57B745]/5 rounded-bl-full"></div>
            <div className="w-12 h-12 rounded-full bg-[#57B745]/10 flex items-center justify-center text-[#57B745] mx-auto mb-4">
              <Activity size={24} />
            </div>
            <h3 className="font-bold text-gray-800 mb-1">Minor OT</h3>
            <div className="text-3xl font-black text-[#57B745] mb-2">01</div>
            <p className="text-sm text-gray-500">Fully Equipped Facility</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:-translate-y-1 transition-transform relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#57B745]/5 rounded-bl-full"></div>
            <div className="w-12 h-12 rounded-full bg-[#57B745]/10 flex items-center justify-center text-[#57B745] mx-auto mb-4">
              <HeartPulse size={24} />
            </div>
            <h3 className="font-bold text-gray-800 mb-1">Ophthalm OT</h3>
            <div className="text-3xl font-black text-[#57B745] mb-2">01</div>
            <p className="text-sm text-gray-500">Fully Equipped Facility</p>
          </div>
        </div>
      </div>
    </div>
  );
}
