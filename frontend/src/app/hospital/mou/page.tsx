import PageBanner from "@/components/ui/PageBanner";
import { Handshake } from "lucide-react";

export const metadata = { title: "MOU" };

export default function MOUPag() {
  return (
    <div>
      <PageBanner title="Memorandum of Understanding (MOU)" breadcrumbs={[{ label: "Hospital" }, { label: "MOU" }]} />
    </div>
  );
}
