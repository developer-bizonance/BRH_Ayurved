import PageBanner from "@/components/ui/PageBanner";
import { FileText, ExternalLink } from "lucide-react";

// Generic MUHS page factory
interface MuhsPageProps {
  year: string;
  documents: { title: string; url: string }[];
}

export function MuhsMandatePage({ year, documents }: MuhsPageProps) {
  return (
    <div>
      <PageBanner
        title={`MUHS Mandate ${year}`}
        breadcrumbs={[{ label: "MUHS" }, { label: `Mandate ${year}` }]}
      />
      <div className="max-w-4xl mx-auto px-6 py-14 space-y-8">
        <div className="bg-[#57B745] text-white rounded-2xl p-6">
          <h2 className="text-xl font-bold font-[var(--font-playfair)] mb-2">
            Maharashtra University of Health Sciences
          </h2>
          <p className="text-white/70 text-sm">Mandate Compliance — Academic Year {year}</p>
        </div>

        <p className="text-gray-600 leading-relaxed">
          The following documents represent the MUHS mandate compliance data for the academic year {year},
          submitted by B. R. Harne Ayurvedic Medical College, Karav-Vangani as per MUHS norms and regulations.
        </p>

        <div className="space-y-3">
          {documents.map((doc, i) => (
            <a
              key={i}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-[#57B745]/20 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#57B745]/10 flex items-center justify-center text-[#57B745] flex-shrink-0 group-hover:bg-[#57B745] group-hover:text-white transition-colors">
                <FileText size={18} />
              </div>
              <span className="font-medium text-sm text-gray-700 group-hover:text-[#57B745] flex-1 transition-colors">{doc.title}</span>
              <ExternalLink size={14} className="text-gray-300 group-hover:text-[#57B745] transition-colors flex-shrink-0" />
            </a>
          ))}
        </div>

        <div className="bg-[#f0faf5] rounded-2xl p-5">
          <p className="text-xs text-gray-500">
            All mandate documents are submitted as per the official MUHS guidelines. For discrepancies or queries,
            contact the college administration at{" "}
            <a href="mailto:brharneayurved3183@gmail.com" className="text-[#57B745] hover:underline">
              brharneayurved3183@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
