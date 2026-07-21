"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
export default function VideoSection() {
  // Using generic YouTube video IDs for demonstration
  // These can be replaced with actual video IDs from the B. R. Harne YouTube channel
  const videos = [
    {
      id: "LXb3EKWsInQ", // Generic placeholder nature/calm video
      title: "Campus Tour - B. R. Harne Ayurvedic Medical College"
    },
    {
      id: "ScMzIvxBSi4", // Generic placeholder
      title: "Annual Gathering & Events Highlights"
    },
    {
      id: "tO01J-M3g0U", // Generic placeholder
      title: "Medical Camp & Community Service"
    },
    {
      id: "ysz5S6PUM-U", 
      title: "Ayurveda Seminar & Workshop"
    }
  ];

  return (
    <section className="relative z-20 w-full py-16 bg-gradient-to-br from-[#f0faf5] to-[#fefdf8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-1 w-12 bg-[#e8821a] rounded-full" />
              <span className="text-[#e8821a] text-sm font-semibold uppercase tracking-wider">Gallery</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#57B745] font-[var(--font-playfair)]">
              Our Videos
            </h2>
          </div>
          <Link href="/videos" className="text-[#57B745] hover:text-[#4a9d3a] font-semibold flex items-center gap-1 transition-colors">
            See more <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              nextEl: '.swiper-button-next-video',
              prevEl: '.swiper-button-prev-video',
            }}
            className="pb-8"
          >
            {videos.map((video, idx) => (
              <SwiperSlide key={idx} className="h-auto pb-4 pt-4">
                <div className="bg-white h-full rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] group">
                  <div className="relative w-full pt-[56.25%]"> {/* 16:9 Aspect Ratio container */}
                    <iframe 
                      className="absolute top-0 left-0 w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      src={`https://www.youtube.com/embed/${video.id}?rel=0`} 
                      title={video.title}
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-5 bg-white border-t border-gray-50 flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800 line-clamp-1 group-hover:text-[#57B745] transition-colors">{video.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-video absolute left-0 top-1/2 -translate-y-1/2 -ml-4 lg:-ml-6 z-10 w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center justify-center text-[#57B745] hover:bg-[#57B745] hover:text-white transition-all disabled:opacity-0 disabled:cursor-auto">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button className="swiper-button-next-video absolute right-0 top-1/2 -translate-y-1/2 -mr-4 lg:-mr-6 z-10 w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center justify-center text-[#57B745] hover:bg-[#57B745] hover:text-white transition-all disabled:opacity-0 disabled:cursor-auto">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
