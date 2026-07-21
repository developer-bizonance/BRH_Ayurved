import PageBanner from "@/components/ui/PageBanner";
import TimetableAccordion from "@/components/academics/TimetableAccordion";

export const metadata = { title: "Year Wise Time Table" };

export default function YearWiseTimeTablePage() {
  return (
    <div>
      <PageBanner title="Year Wise Time Table" breadcrumbs={[{ label: "Academics" }, { label: "Year Wise Time Table" }]} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-2">
        <TimetableAccordion />
      </div>
    </div>
  );
}
