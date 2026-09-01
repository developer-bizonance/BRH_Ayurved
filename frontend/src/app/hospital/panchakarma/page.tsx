import PageBanner from "@/components/ui/PageBanner";
import { Sparkles, Droplet, Wind } from "lucide-react";

export const metadata = { title: "Panchakarma Facilities" };

export default function PanchakarmaFacilitiesPage() {
  return (
    <div>
      <PageBanner title="Panchakarma Facilities" breadcrumbs={[{ label: "Hospital" }, { label: "Panchakarma" }]} />
      
      <div className="max-w-6xl mx-auto px-6 pt-4 pb-14">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-10 space-y-6">
          <p className="text-gray-600 text-lg leading-relaxed">
            ‘Panchakarma’ is the field to which the whole world looks with interest. Special Panchakarma unit is developed in hospital where students get direct experience of Panchakarma Procedures. Panchakarma means five standard therapeutic procedures like Vaman,Virechan, Basti,Nasya and Raktamokshana. It is a special kind of treatment mentioned in Ayurvedic classics for prevention as well as cure. Patients suffering from various diseases are treated here by scientific administration of Panchakarma. Promising results are obtained in Sandhigata Vata (Osteoarthritis), Aamavata (Rheumatoid Arthritis) and skin disorders especially in Psoriasis.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Separate 06 Male and 06 Female sections are availbale to do various panchakarmas as snehan, sweden, Vaman, Virechan, Shirodhara, Shirobasti, Raktamokshan, Vaouka, Agnikarma, Etc.
          </p>

          <div className="grid md:grid-cols-2 gap-6 pt-6">
            <img 
              src="/assets/images/Hospital/Panchakarma 1.jpg" 
              alt="Panchakarma Facility 1" 
              className="w-full h-auto rounded-xl shadow-sm border border-gray-100"
            />
            <img 
              src="/assets/images/Hospital/Panchakarma 2.jpg" 
              alt="Panchakarma Facility 2" 
              className="w-full h-auto rounded-xl shadow-sm border border-gray-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
