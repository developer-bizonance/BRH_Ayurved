"use client";
import { useState } from "react";
import PageBanner from "@/components/ui/PageBanner";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { id: 1, src: "https://www.brharneayurved.in/uploads/gallery/s5_6887522893bda.jpg", alt: "College Campus", category: "campus" },
  { id: 2, src: "https://www.brharneayurved.in/uploads/gallery/s4_6887521a21f4b.jpg", alt: "College Activity", category: "events" },
  { id: 3, src: "https://www.brharneayurved.in/uploads/gallery/s3_6887520d7c678.jpg", alt: "College Event", category: "events" },
  { id: 4, src: "https://www.brharneayurved.in/uploads/gallery/s2_688751fea85d4.png", alt: "Campus View", category: "campus" },
  { id: 5, src: "https://www.brharneayurved.in/uploads/gallery/s1_688751f0272d4.png", alt: "College Banner", category: "events" },
];

const cats = ["all", "campus", "events"];

export default function GalleryPage() {
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "all" ? images : images.filter(i => i.category === active);

  const prev = () => setLightbox(p => p !== null ? (p - 1 + filtered.length) % filtered.length : null);
  const next = () => setLightbox(p => p !== null ? (p + 1) % filtered.length : null);

  return (
    <div>
      <PageBanner title="Gallery" breadcrumbs={[{ label: "About" }, { label: "Gallery" }]} />
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Category Filters */}
        <div className="flex gap-3 mb-8">
          {cats.map(c => (
            <button key={c} onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm font-semibold capitalize transition-colors ${active === c ? "bg-[#57B745] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <div key={img.id} onClick={() => setLightbox(i)}
              className="break-inside-avoid overflow-hidden rounded-2xl cursor-pointer group shadow-sm hover:shadow-xl transition-shadow">
              <div className="relative w-full aspect-video">
                <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={() => setLightbox(null)}>
          <button onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 z-10 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40">
            <ChevronLeft size={20} />
          </button>
          <div className="relative max-w-4xl max-h-[80vh] w-full mx-16" onClick={e => e.stopPropagation()}>
            <Image src={filtered[lightbox].src} alt={filtered[lightbox].alt} width={1200} height={700} className="object-contain rounded-xl" unoptimized />
            <p className="text-white text-center mt-3 text-sm">{filtered[lightbox].alt}</p>
          </div>
          <button onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 z-10 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40">
            <ChevronRight size={20} />
          </button>
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-white/60 hover:text-white">
            <X size={24} />
          </button>
        </div>
      )}
    </div>
  );
}
