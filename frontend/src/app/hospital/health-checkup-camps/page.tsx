import PageBanner from "@/components/ui/PageBanner";

export const metadata = { title: "Medical Health Check-up Camps - B. R. Harne Ayurvedic Medical College" };

export default function HealthCheckupCampsPage() {
  return (
    <div>
      <PageBanner title="Medical Health Check-up Camps" breadcrumbs={[{ label: "Hospital" }, { label: "Medical Health Check-up Camps" }]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-8">
        <div className="w-full">
          <div className="text-center text-gray-500 py-12">
            <p className="text-lg font-medium">Coming Soon</p>
            <p className="text-sm mt-2">Medical health check-up camps information will be updated shortly.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
