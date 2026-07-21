import PageBanner from "@/components/ui/PageBanner";
import CollegeDocumentsAccordion from "@/components/about/CollegeDocumentsAccordion";

export const metadata = { title: "About College" };

export default function AboutCollegePage() {
  return (
    <div>
      <PageBanner title="About College" breadcrumbs={[{ label: "About" }, { label: "About College" }]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-2">
        {/* Documents Accordion */}
        <CollegeDocumentsAccordion />
      </div>
    </div>
  );
}
