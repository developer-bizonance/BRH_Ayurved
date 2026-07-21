import PageBanner from "@/components/ui/PageBanner";

export const metadata = { title: "President Desk" };

export default function PresidentDeskPage() {
  return (
    <div>
      <PageBanner title="President Desk" breadcrumbs={[{ label: "About" }, { label: "President Desk" }]} />
      
      <div className="max-w-[1400px] mx-auto px-6 py-16 bg-white">
        <div 
          className="prose prose-lg max-w-none prose-headings:text-[#57B745] prose-headings:font-[var(--font-playfair)] prose-a:text-[#57B745] prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: "\n        \n    " }}
        />
      </div>
    </div>
  );
}
