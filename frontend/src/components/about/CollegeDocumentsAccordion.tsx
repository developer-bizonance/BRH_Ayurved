"use client";

import Link from "next/link";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const documentsData = [
  {
    category: "Infrastructure",
    files: [
      { name: "College Infrastructure", url: "/uploads/about/college infrastructure20250331_104427.pdf" }
    ]
  },
  {
    category: "Recognition and Affiliation",
    files: [
      { name: "NCISM Permission for AY 2025-26", url: "/uploads/about/NCISM Permission for AY 2025-2620260227_093710.pdf" },
      { name: "MUHS Affiliation 25-26", url: "/uploads/about/MUHS Affiliation 20260227_093845.pdf" }
    ]
  },
  {
    category: "State Government Permission",
    files: [
      { name: "State government recognition", url: "/uploads/about/State government recognition 20260227_094125.pdf" }
    ]
  },
  {
    category: "College Activities",
    files: [
      { name: "Mudra 2024-2025", url: "/uploads/about/Mudra 24 2520250626_174048.pdf" },
      { name: "REPORT OF SURYANAMSKAR DAY", url: "/uploads/about/REPORT OF SURYANAMSKAR DAY20260123_115827.pdf" },
      { name: "Ayush Expo 2025", url: "/uploads/about/Ayush Expo 202520260124_094952.pdf" },
      { name: "Charak Jayanti 2025", url: "/uploads/about/Charak Jayanti 202520260227_095632.pdf" },
      { name: "Blood Donation Camp 2025-26", url: "/uploads/about/Blood Donation Camp 2025-2620260306_114717.pdf" },
      { name: "sanskrit day Report 3-9-26.pdf", url: "/uploads/whats_new/sanskrit%20day%20Report%203-9-26.pdf" }
    ]
  }
];

function AccordionSection({ section, defaultOpen = false }: { section: typeof documentsData[0], defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full border-b border-gray-200 overflow-hidden">
      {/* Section Heading */}
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 cursor-pointer transition-colors group text-left"
      >
        <h3 className="text-xl font-medium text-[#57B745] font-[var(--font-playfair)]">{section.category}</h3>
        <div className={`w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-300 ${isOpen ? 'bg-[#e8821a] text-white rotate-180' : 'bg-[#57B745]/10 text-[#57B745] group-hover:bg-[#57B745] group-hover:text-white'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      
      {/* Document List */}
      <div 
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div>
          <div className="flex flex-col gap-2 pb-4 pt-1">
            {section.files.map((file, fileIdx) => (
              <Link 
                href={file.url} 
                target="_blank"
                key={fileIdx}
                className="group flex items-center py-3 rounded-md transition-all duration-300 hover:translate-x-1"
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

export default function CollegeDocumentsAccordion() {
  return (
    <div className="w-full space-y-4">
      {documentsData.map((section, idx) => (
        <AccordionSection 
          key={idx} 
          section={section} 
          defaultOpen={false} 
        />
      ))}
    </div>
  );
}
