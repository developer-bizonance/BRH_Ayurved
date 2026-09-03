import PageBanner from "@/components/ui/PageBanner";

export const metadata = { title: "Educational Visits - B. R. Harne Ayurvedic Medical College" };

export default function EducationalVisitsPage() {
  return (
    <div>
      <PageBanner title="Educational Visits" breadcrumbs={[{ label: "Student Zone" }, { label: "Educational Visits" }]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-8">
        <div className="w-full">
          <div className="text-center text-gray-500 py-12">
            <p className="text-lg font-medium">Coming Soon</p>
            <p className="text-sm mt-2">Educational visits information will be updated shortly.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
