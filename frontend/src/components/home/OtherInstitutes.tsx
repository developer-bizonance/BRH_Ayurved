"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";

const institutes = [
  {
    name: "Jai Shree Siddhivinayak Foundation",
    logo: "/assets/images/logos/foundation.jpeg",
    href: "#",
  },
  {
    name: "B. R. Harne College of Engineering and Technology",
    logo: "/images/new_logo3.png",
    href: "http://brharnetc.edu.in/br/",
  },
  {
    name: "B. R. Harne College of Pharmacy",
    logo: "/assets/images/logos/pharmacy.png",
    href: "http://brharnepharmacy.in/",
  },
  {
    name: "B. R. Harne School of Nursing (GNM)",
    logo: "/assets/images/logos/nursing.jpg",
    href: "https://brharnenursing.in/",
  },
  {
    name: "B. R. Harne College of Physiotherapy",
    logo: "/assets/images/logos/Physiotherapy.png",
    href: "https://brharnephysiotherapy.com/",
  },
];

export default function OtherInstitutes() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#f0faf5] to-[#fefdf8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-1 w-12 bg-[#e8821a] rounded-full" />
              <span className="text-[#e8821a] text-sm font-semibold uppercase tracking-wider">B.R. Harne Group</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#57B745] font-[var(--font-playfair)]">
              Our Other Institutes
            </h2>
          </div>
        </div>

        <div className="relative w-full py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {institutes.map((inst, idx) => {
              const isDummyLink = inst.href === "#";
              const CardWrapper = isDummyLink ? "div" : "a";
              const wrapperProps = isDummyLink
                ? { className: "group card-hover bg-white rounded-xl p-6 flex flex-col items-center border border-gray-100 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 min-h-[220px]" }
                : {
                    href: inst.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "group card-hover bg-white rounded-xl p-6 flex flex-col items-center border border-gray-100 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 min-h-[220px]",
                  };

              return (
                <CardWrapper key={`${inst.name}-${idx}`} {...wrapperProps}>
                  <div className="w-full h-24 relative flex-shrink-0 mb-4">
                    <Image
                      src={inst.logo}
                      alt={inst.name}
                      fill
                      className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-center text-sm text-gray-700 font-medium leading-snug group-hover:text-[#57B745] transition-colors mb-4 flex-grow flex items-center">
                    {inst.name}
                  </p>
                  {!isDummyLink && (
                    <div className="flex items-center gap-1 text-xs text-[#57B745] font-semibold mt-auto">
                      Read More <ExternalLink size={12} />
                    </div>
                  )}
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
