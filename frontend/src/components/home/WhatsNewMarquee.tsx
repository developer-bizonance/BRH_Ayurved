"use client";

import { useEffect, useState } from "react";
import { Notice } from "@/lib/api";
import { ChevronRight, BellRing, Megaphone } from "lucide-react";

interface WhatsNewMarqueeProps {
  notices: Notice[];
}

export default function WhatsNewMarquee({ notices }: WhatsNewMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden flex flex-col h-full relative border border-gray-100">
      {/* Header */}
      <div className="bg-[#57B745] px-6 py-4 flex items-center justify-start gap-3 relative z-10">
        <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
          <Megaphone size={20} className="text-white animate-pulse" fill="currentColor" />
        </div>
        <h2 className="text-white font-bold text-base tracking-wide capitalize font-sans">
          News & Notices
        </h2>
      </div>

      <div
        className="flex-1 overflow-hidden relative min-h-[350px] bg-gradient-to-b from-gray-50/50 to-white"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="marquee-inner absolute w-full"
          style={{
            animationPlayState: isPaused ? "paused" : "running",
            animationDuration: "15s", // Faster scrolling
          }}
        >
          {notices.map((notice, idx) => (
            <a
              key={`${notice.id}-${idx}`}
              href={notice.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-6 py-4 border-b border-gray-100/80 hover:bg-[#f8fafc] transition-all duration-300 relative overflow-hidden"
            >
              {/* Animated highlight bar on left */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#e8821a] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              
              <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-full bg-[#57B745]/10 flex items-center justify-center group-hover:bg-[#e8821a]/20 transition-colors duration-300">
                <BellRing size={14} className="text-[#57B745] group-hover:text-[#e8821a] group-hover:scale-110 transition-all duration-300" />
              </div>
              
              <div className="flex-1 transform group-hover:translate-x-1 transition-transform duration-300">
                <span className="text-sm font-semibold text-gray-700 group-hover:text-[#57B745] uppercase leading-snug transition-colors duration-300">
                  {notice.title}
                </span>
                {notice.isNew && (
                  <span className="inline-flex items-center ml-3 bg-gradient-to-r from-red-500 to-rose-600 text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-[0_0_8px_rgba(225,29,72,0.4)] uppercase tracking-wider animate-pulse">
                    New
                  </span>
                )}
              </div>
              
              <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <ChevronRight size={18} className="text-[#e8821a]" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
