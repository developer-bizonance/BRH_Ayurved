"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { src: "/uploads/gallery/s5_6887522893bda.jpg", alt: "College Campus" },
  { src: "/uploads/gallery/s4_6887521a21f4b.jpg", alt: "College Activity" },
  { src: "/uploads/gallery/s3_6887520d7c678.jpg", alt: "College Event" },
  { src: "/uploads/gallery/s2_688751fea85d4.png", alt: "Campus View" },
  { src: "/uploads/gallery/s1_688751f0272d4.png", alt: "College Banner" },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden group">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[10s]"
            unoptimized
            priority={idx === 0}
          />
          {/* Subtle gradient for caption readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>
      ))}

      {/* Cinematic Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent pointer-events-none" />

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/40 backdrop-blur-md text-white border border-white/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-[#57B745] hover:scale-110 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/40 backdrop-blur-md text-white border border-white/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-[#57B745] hover:scale-110 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${
              idx === current ? "bg-white w-6" : "bg-white/60 w-1.5 hover:bg-white/90"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
