import PageBanner from "@/components/ui/PageBanner";
import { Clock } from "lucide-react";

export const metadata = { title: "Fellowship Courses" };

export default function FellowshipCoursesPage() {
  return (
    <div>
      <PageBanner title="Fellowship Courses" breadcrumbs={[{ label: "Courses" }, { label: "Fellowship Courses" }]} />
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#57B745]/10 mb-6">
          <Clock size={40} className="text-[#57B745]" />
        </div>
        <h2 className="text-3xl font-bold font-[var(--font-playfair)] text-[#57B745] mb-4">Coming Soon</h2>
        <p className="text-gray-600 leading-relaxed">
          Information about our Fellowship Courses is currently being updated. Please check back later for full details.
        </p>
      </div>
    </div>
  );
}
