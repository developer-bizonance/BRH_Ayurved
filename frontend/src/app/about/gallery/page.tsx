"use client";
import { useState } from "react";
import PageBanner from "@/components/ui/PageBanner";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import mainGalleryData from "@/data/main_gallery.json";

// Filter out invalid image paths (like .php files)
const validImages = mainGalleryData.filter(img => 
  img.localSrc && img.localSrc.match(/\.(jpg|jpeg|png|gif)$/i)
);

// Format keys to human readable labels
const formatLabel = (key: string) => key.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');

const allImages = validImages.map((img: any) => ({
  id: img.id,
  src: img.localSrc,
  alt: img.alt || "Gallery Image",
  category: img.category
}));

// Unique categories
const uniqueCats = Array.from(new Set(validImages.map((img: any) => img.category)));
const cats = ["all", ...uniqueCats];

export default function GalleryPage() {
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "all" ? allImages : allImages.filter(i => i.category === active);

  const prev = () => setLightbox(p => p !== null ? (p - 1 + filtered.length) % filtered.length : null);
  const next = () => setLightbox(p => p !== null ? (p + 1) % filtered.length : null);

  return (
    <div>
      <PageBanner title="Gallery" breadcrumbs={[{ label: "About" }, { label: "Gallery" }]} />
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {cats.map(c => (
            <button key={c} onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold capitalize transition-colors ${active === c ? "bg-[#57B745] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
              {c === "all" ? "All" : formatLabel(c)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <div key={img.id} onClick={() => setLightbox(i)}
              className="break-inside-avoid overflow-hidden rounded-2xl cursor-pointer group shadow-sm hover:shadow-xl transition-shadow relative">
              <div className="relative w-full aspect-video md:aspect-[4/3] bg-gray-100">
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  unoptimized 
                />
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full py-10 text-center text-gray-500">
              No images available in this category.
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={() => setLightbox(null)}>
          <button onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 z-10 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors">
            <ChevronLeft size={20} />
          </button>
          <div className="relative max-w-4xl max-h-[80vh] w-full mx-16 flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <div className="relative w-full h-[60vh] md:h-[70vh]">
              <Image 
                src={filtered[lightbox].src} 
                alt={filtered[lightbox].alt} 
                fill
                className="object-contain rounded-xl" 
                unoptimized 
              />
            </div>
            <p className="text-white text-center mt-4 text-sm font-medium bg-black/50 px-4 py-1.5 rounded-full">
              {formatLabel(filtered[lightbox].category)} - {filtered[lightbox].alt}
            </p>
          </div>
          <button onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 z-10 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors">
            <ChevronRight size={20} />
          </button>
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors">
            <X size={32} />
          </button>
        </div>
      )}
    </div>
  );
}
