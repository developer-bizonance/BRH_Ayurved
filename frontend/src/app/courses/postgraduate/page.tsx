import PageBanner from "@/components/ui/PageBanner";
import { Clock } from "lucide-react";

export const metadata = { title: "Post Graduate Courses" };

export default function PostgraduatePage() {
  return (
    <div>
      <PageBanner title="Post Graduate Courses" breadcrumbs={[{ label: "Courses" }, { label: "Post Graduate" }]} />
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#57B745]/10 mb-6">
          <Clock size={40} className="text-[#57B745]" />
        </div>
        <h2 className="text-3xl font-bold font-[var(--font-playfair)] text-[#57B745] mb-4">Coming Soon</h2>
        <p className="text-gray-600 leading-relaxed">
          Information about our Post Graduate Courses is currently being updated. Please check back later for full details on admissions, curriculum, and eligibility criteria.
        </p>
      </div>
    </div>
  );
}
