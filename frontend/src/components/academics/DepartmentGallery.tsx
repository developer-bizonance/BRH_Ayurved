"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function DepartmentGallery({ images }: { images: string[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox(p => p !== null ? (p - 1 + images.length) % images.length : null);
  const next = () => setLightbox(p => p !== null ? (p + 1) % images.length : null);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((src, idx) => (
          <div 
            key={idx} 
            onClick={() => setLightbox(idx)}
            className="break-inside-avoid relative rounded-2xl overflow-hidden shadow-sm group cursor-pointer mb-4"
          >
            {/* The image sizes naturally in masonry if we use img tag or next/image with layout responsive/intrinsic.
                For next/image without explicit height, we can use the 'intrinsic' layout trick or just standard img for masonry.
                Since these are varied sizes, standard img or next/image with width/height is needed. 
                Using next/image with a wrapper that doesn't force a strict aspect ratio: */}
            <img
              src={src}
              alt={`Gallery Image ${idx + 1}`}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-transform duration-300 delay-100">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center backdrop-blur-sm" onClick={() => setLightbox(null)}>
          <button onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            <ChevronLeft size={28} />
          </button>
          
          <div className="relative max-w-5xl max-h-[90vh] w-full mx-16 p-4 flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <img 
              src={images[lightbox]} 
              alt={`Gallery Image ${lightbox + 1}`} 
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl" 
            />
          </div>

          <button onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            <ChevronRight size={28} />
          </button>
          
          <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/30 transition-colors">
            <X size={24} />
          </button>
        </div>
      )}
    </>
  );
}
