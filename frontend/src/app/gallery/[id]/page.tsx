"use client";
import { useState, use, useEffect } from "react";
import PageBanner from "@/components/ui/PageBanner";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import galleriesData from "@/data/galleries.json";

// In Next.js 15, dynamic route params must be awaited or unwrapped via `React.use()` in client components.
export default function DynamicGalleryPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;
  
  const [lightbox, setLightbox] = useState<number | null>(null);

  const images = (galleriesData as Record<string, any[]>)[id] || [];
  const galleryName = id
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const prev = () => setLightbox(p => p !== null ? (p - 1 + images.length) % images.length : null);
  const next = () => setLightbox(p => p !== null ? (p + 1) % images.length : null);

  if (!images.length) {
    return (
      <div>
        <PageBanner title="Gallery Not Found" breadcrumbs={[{ label: "Gallery" }]} />
        <div className="max-w-7xl mx-auto px-6 py-20 text-center text-gray-500">
          No images found for this gallery.
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageBanner title={`${galleryName} Gallery`} breadcrumbs={[{ label: galleryName }, { label: "Images" }]} />
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, i) => (
            <div key={img.id} onClick={() => setLightbox(i)}
              className="break-inside-avoid overflow-hidden rounded-2xl cursor-pointer group shadow-sm hover:shadow-xl transition-shadow bg-gray-100">
              <div className="relative w-full aspect-video flex items-center justify-center">
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
            <Image src={images[lightbox].src} alt={images[lightbox].alt} width={1200} height={700} className="object-contain rounded-xl w-full h-[70vh]" unoptimized />
            <p className="text-white text-center mt-3 text-sm">{images[lightbox].alt}</p>
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
