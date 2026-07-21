"use client";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="back-to-top w-11 h-11 rounded-full bg-[#57B745] text-white flex items-center justify-center shadow-lg hover:bg-[#e8821a] transition-colors"
      aria-label="Back to top"
    >
      <ChevronUp size={20} />
    </button>
  );
}
