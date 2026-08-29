import HeroCarousel from "@/components/home/HeroCarousel";
import InstitutionCard from "@/components/home/InstitutionCard";
import WhatsNewMarquee from "@/components/home/WhatsNewMarquee";
import AboutSection from "@/components/home/AboutSection";
import OtherInstitutes from "@/components/home/OtherInstitutes";
import BackToTop from "@/components/ui/BackToTop";
import { api } from "@/lib/api";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default async function HomePage() {
  let notices: { id: number; title: string; url: string; isNew: boolean; date: string; }[] = [];
  try {
    const res = await api.getNotices();
    notices = res.data ?? [];
  } catch {
    // backend not yet running — use fallback
    notices = [
      { id: 1, title: "Prakriti Parikshan Report of CISF Unit JWC Mumbai", url: "https://brharneayurved.in/uploads/whats_new/Prakriti%20Parikshan%20Report%20of%20CISF%20Unit%20JWC%20Mumbai%20and%20RCP%20Mumbai%20with%2008%20volunteers%20on%2016-01-202520250325_090733.pdf", isNew: true, date: "2025-03-25" },
      { id: 2, title: "Community Health Check up Camp", url: "https://brharneayurved.in/uploads/whats_new/Community%20Health%20Check%20up%20Camp20250331_103621.pdf", isNew: true, date: "2025-03-31" },
      { id: 3, title: "Run For Ayurveda Students Prize Achievement", url: "https://brharneayurved.in/uploads/whats_new/whats_new_20260214_070800.pdf", isNew: true, date: "2026-02-14" },
      { id: 4, title: "Spandan 2026", url: "https://brharneayurved.in/uploads/whats_new/Spandan%20202620260516_085155.pdf", isNew: true, date: "2026-05-16" },
      { id: 5, title: "Summer Vacation 2026", url: "https://brharneayurved.in/uploads/whats_new/Summer%20Vacation%20202620260518_020754.pdf", isNew: true, date: "2026-05-18" },
      { id: 6, title: "International Yoga Day 2026", url: "https://brharneayurved.in/uploads/whats_new/International%20Yoga%20Day%20202620260702_070135.pdf", isNew: true, date: "2026-07-02" },
      { id: 7, title: "Community health check up Camp 2025", url: "https://brharneayurved.in/uploads/whats_new/Community%20health%20check%20up%20Camp%20202520260824_075638.pdf", isNew: true, date: "2026-08-24" },
      { id: 8, title: "Community health check up Camp 2026", url: "https://brharneayurved.in/uploads/whats_new/Community%20health%20check%20up%20Camp%20202620260824_075716.pdf", isNew: true, date: "2026-08-24" },
    ];
  }

  return (
    <div className="fade-in bg-slate-50">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[450px] lg:min-h-[550px] flex items-center overflow-hidden">
        <HeroCarousel />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6">
          <div className="max-w-2xl mt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[var(--font-playfair)] text-white leading-tight mb-3 drop-shadow-lg">
              The Ancient Science <br/>
              of <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500">True Healing</span>
            </h1>
            
            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6 max-w-xl font-light drop-shadow">
              B. R. Harne Ayurvedic Medical College is dedicated to imparting quality education and compassionate healthcare, blending traditional wisdom with modern medical science.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/admissions/details" className="w-full sm:w-auto bg-[#57B745] hover:bg-[#57B745] text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-green-900/50 hover:-translate-y-1 flex justify-center items-center gap-2 group">
                Apply Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about/college" className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-1 text-center">
                Explore Campus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 w-full py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 transform transition-all duration-300 hover:-translate-y-1">
            <InstitutionCard />
          </div>
          <div className="lg:col-span-2 transform transition-all duration-300 hover:-translate-y-1">
            <WhatsNewMarquee notices={notices} />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <AboutSection />

      {/* Other Institutes Section */}
      <OtherInstitutes />

      {/* Back to Top */}
      <BackToTop />
    </div>
  );
}
