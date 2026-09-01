import PageBanner from "@/components/ui/PageBanner";
import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Student Social Welfare" };

const files = [
  { "name": "MUHS Scheme 2024", "url": "/uploads/student_zone/MUHS_Scheme_2024_20251002_091956.pdf" },
  { "name": "Sports & Cultural Achievements 2024", "url": "/uploads/student_zone/Sports___Cultural_Achievements_2024_20251002_092050.pdf" },
  { "name": "Vidyanjali Registration", "url": "/uploads/student_zone/Vidyanjali_Registration_20251002_092140.pdf" },
  { "name": "MUHS Scheme 2025", "url": "/uploads/student_zone/MUHS_Scheme_2025_20260105_111222.pdf" },
  { "name": "Sports and Cultural Achievement 2025", "url": "/uploads/student_zone/Sports_and_Cultural_Achievement_2025_20260105_111403.pdf" }
];

const galleryImages = [
  "/uploads/gallery/Sports and Cultural Achievements_685fe1dbb1fa5.jpeg",
  "/uploads/gallery/Sports and Cultural Achievements_685fe1dbb3ce5.jpeg",
  "/uploads/gallery/Sports and Cultural Achievements_685fe1dbb55f9.jpeg",
  "/uploads/gallery/Sports and Cultural Achievements_685fe1dbb6c52.jpeg",
  "/uploads/gallery/Sports and Cultural Achievements_685fe1dbb7bbd.jpeg",
  "/uploads/gallery/Sports and Cultural Achievements_685fe1dbb8b2f.jpeg",
  "/uploads/gallery/Sports and Cultural Achievements_685fe1dbb9b6d.jpeg",
  "/uploads/gallery/Sports and Cultural Achievements_685fe1dbbab94.jpeg",
  "/uploads/gallery/Sports and Cultural Achievements_685fe1dbbbd27.jpeg",
  "/uploads/gallery/Sports and Cultural Achievements_685fe1dbbcc7b.jpeg",
  "/uploads/gallery/Sports and Cultural Achievements_685fe1dbbe452.jpeg",
  "/uploads/gallery/Sports and Cultural Achievements_685fe1dbbefba.jpeg"
];

export default function StudentSocialWelfarePage() {
  return (
    <div>
      <PageBanner title="Student Social Welfare" breadcrumbs={[{ label: "Student Zone" }, { label: "Student Social Welfare" }]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-0">
        
        {/* PDF Documents */}
        <div className="w-full mb-12 mt-12">
          <div className="flex flex-col gap-2">
            {files.map((file, idx) => (
              <Link 
                href={file.url} 
                target="_blank"
                key={idx}
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

        {/* Image Gallery */}
        <div className="w-full">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 border-l-4 border-[#57B745] pl-4 mb-8 font-[var(--font-playfair)]">
            Photo Gallery Sports and Cultural Achievements
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((src, idx) => (
              <div key={idx} className="relative aspect-video rounded-xl overflow-hidden shadow-md group cursor-pointer border border-gray-100">
                <Image
                  src={src}
                  alt={`Sports and Cultural Achievement ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
