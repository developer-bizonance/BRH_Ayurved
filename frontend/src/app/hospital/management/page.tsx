import PageBanner from "@/components/ui/PageBanner";
import { Laptop, Database, Users } from "lucide-react";

export const metadata = { title: "Online Hospital Management" };

export default function OnlineHospitalManagementPage() {
  return (
    <div>
      <PageBanner title="Online Hospital Management" breadcrumbs={[{ label: "Hospital" }, { label: "Online Hospital Management" }]} />
    </div>
  );
}
