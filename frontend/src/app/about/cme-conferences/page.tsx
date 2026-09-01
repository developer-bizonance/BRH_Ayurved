import PageBanner from "@/components/ui/PageBanner";
import Link from "next/link";
export const metadata = { title: "CME Conferences and Workshop" };

const documents = [
  { name: "CME Rog Nidan Avum Vikriti Vigyana Department Dated 03.04.2021", url: "/uploads/about/CME Rog Nidan Avum Vikriti Vigyana Department Dated 03.04.202120250325_120646.pdf" },
  { name: "International-Yoga-Day", url: "/uploads/about/International-Yoga-Day20250325_121158.pdf" },
  { name: "Report of National webinar on PANCHAKARMA AND STHANIK CHIKITSA IN STRIROGA", url: "/uploads/about/Report-of-National-webinar-on-PANCHAKARMA-AND-STHANIK-CHIKITSA-IN-STRIROGA-Dept.-of-Streerog-Prasuti-Tantra20250325_121838.pdf" },
  { name: "Report of ONLINE Webinar RASAANUSANDHAN 2022", url: "/uploads/about/Report of ONLINE Webinar RASAANUSANDHAN 202220250331_114535.pdf" },
  { name: "Report of Nadi Parikshana Workshop Dated 28.02.2022", url: "/uploads/about/Report of Nadi Parikshana Workshop Dated 28.02.202220250331_114630.pdf" },
  { name: "National Webinar on Recent Advances in Eye E.N.T Disorders Importance of Research Methodology Statistics Date 08.08.2022", url: "/uploads/about/National Webinar on Recent Advances in Eye E.N.T Disorders Importance of Research Methodology Statistics Date 08.08.202220250331_114924.pdf" },
  { name: "Workshop on Herbal Pharmaceutical Preparations 2023", url: "/uploads/about/Workshop on Herbal Pharmaceutical Preparations 202320250331_115304.pdf" },
  { name: "Department of Kriya Sharir & Rachna Sharir C.M.E. Writeup", url: "/uploads/about/Department of Kriya Sharir & Rachna Sharir C.M.E. Writeup20250331_115520.pdf" },
  { name: "Report of awareness program on pharmacovigilance and ASU & H drugs", url: "/uploads/about/Report of awareness program on pharmacovigilance and ASU & H drugs20250331_115752.pdf" },
  { name: "Report of Quiz Competition Aug 2024", url: "/uploads/about/Report of Quiz Competition Aug 202420250331_115929.pdf" },
  { name: "Electrocardiography Workshop Report", url: "/uploads/about/Electrocardiography Workshop Report20250331_120149.pdf" },
  { name: "CME Kriya Sharir Dept 05-11-2020", url: "/uploads/about/CME Kriya Sharir Dept 05-11-202020250626_175955.png" },
  { name: "Ayurveda Day 2025", url: "/uploads/about/Ayurveda Day 202520251219_063859.pdf" },
  { name: "International Yoga Day 2025", url: "/uploads/about/International Yoga Day 202520251219_063941.pdf" },
  { name: "International Yoga Day 2026", url: "/uploads/about/International Yoga Day 202620260702_065953.pdf" },
];

export default function CMEConferencesPage() {
  return (
    <div>
      <PageBanner title="CME Conferences and Workshop" breadcrumbs={[{ label: "About" }, { label: "CME Conferences" }]} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-2">
        <div className="w-full">
          <div className="flex flex-col gap-2">
            {documents.map((file, fileIdx) => (
              <Link 
                href={file.url} 
                target="_blank"
                key={fileIdx}
                className="group flex items-center py-3 border-b border-gray-100 last:border-0 transition-all duration-300 hover:translate-x-1"
              >
                <div className="flex-shrink-0 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 72" width="28" height="28">
                    <path fill="none" stroke="#ff2a2a" strokeWidth="4" strokeLinejoin="round" d="M8,2 h26 l16,16 v48 a4,4 0 0,1 -4,4 H8 a4,4 0 0,1 -4,-4 V6 a4,4 0 0,1 4,-4 z" />
                    <path fill="#ff2a2a" d="M38.6,40.9c-2.4-0.4-5.3-0.8-8.6-1.1c-2.3-4.9-4.3-9.5-5.9-13.6c1.1-3.3,1.9-6.6,2.2-8.8
                      c0.4-2.8-0.1-4.7-1.4-5.2c-1.3-0.5-3.1,0.5-3.7,3.3c-0.6,2.7-0.1,6.8,1.4,11.3c-1.6,4.6-3.6,9.5-5.9,14.2
                      c-3.8,4.1-7.4,7.4-10.2,9.3c-2.3,1.5-4.1,2-5,1.1c-0.7-0.7-0.6-2,0.4-3.7c1.4-2.5,4.5-4.4,9.2-5.7c3.2-0.8,6.8-1,10.6-0.6
                      c4.1-2,8.6-4.2,13.2-6.5c3.2-1.6,6.3-2.6,8.8-2.6c1.9,0,3,0.7,3.1,1.9c0.1,1.4-1.2,2.7-3.6,3.6C41.5,41,40.1,41,38.6,40.9z
                      M24.4,13.6c0-0.4-0.1-0.9-0.3-1.2c-0.3-0.5-0.7-0.6-0.9-0.4c-0.3,0.2-0.5,0.7-0.5,1.5c0,1.2,0.1,2.8,0.5,4.6
                      C23.5,16.7,23.9,15,24.4,13.6z M12.1,48.2c-1.2,1-2.1,2.1-2.5,3.2c-0.3,0.9-0.2,1.5,0,1.7c0.2,0.2,0.7,0.1,1.4-0.4
                      C12.7,51.8,14.2,50.3,16.1,48C14.8,48,13.4,48.1,12.1,48.2z M23.6,36.3c1.5-3.1,2.9-6.3,4.1-9.4c-1.2,2.8-2.2,5.7-3,8.7
                      C24.3,35.8,23.9,36.1,23.6,36.3z M41.4,37.6c1.3-0.4,2-1,2-1.6c0-0.3-0.2-0.5-0.6-0.5c-1,0-2.4,0.6-4.2,1.5
                      C39.7,37.3,40.6,37.5,41.4,37.6z" />
                    <text x="26" y="64" fill="#333333" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="17" textAnchor="middle">PDF</text>
                  </svg>
                </div>
                <h4 className="font-medium text-gray-700 text-[15px] leading-snug group-hover:text-[#57B745] transition-colors duration-300">
                  {file.name}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
