"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    "label": "Home",
    "href": "/"
  },
  {
    "label": "About",
    "children": [
      {
        "label": "Vision & Mission",
        "href": "/about/vision-mission"
      },
      {
        "label": "President Desk",
        "href": "/about/president-desk"
      },
      {
        "label": "Board Of Trustee",
        "href": "/about/board-of-trustee"
      },
      {
        "label": "Principal Desk",
        "href": "/about/principal-desk"
      },
      {
        "label": "About College",
        "href": "/about/college"
      },
      {
        "label": "Research Publication",
        "href": "/about/research-publication"
      },
      {
        "label": "CME Conferences & Workshop",
        "href": "/about/cme-conferences"
      },
      {
        "label": "Faculty Development Program",
        "href": "/about/faculty-development"
      },
      {
        "label": "Recognition",
        "href": "/about/recognition"
      }
    ]
  },
  {
    "label": "Academics",
    "children": [
      {
        "label": "Year Wise Time Table",
        "href": "/academics/timetable"
      }
    ]
  },
  {
    "label": "Departments",
    "children": [
      {
        "label": "Kriya Sharir",
        "href": "/academics/kriya-sharir"
      },
      {
        "label": "Rachna Sharir",
        "href": "/academics/rachna-sharir"
      },
      {
        "label": "Samhita Sidhhanta",
        "href": "/academics/samhita-sidhhanta"
      },
      {
        "label": "Dravyaguna Vidnyana",
        "href": "/academics/dravyaguna-vidnyana"
      },
      {
        "label": "Rasashastra & Bhaishajya Kalpana",
        "href": "/academics/rasashastra-bhaishajya-kalpana"
      },
      {
        "label": "Rog Nidan",
        "href": "/academics/rog-nidan"
      },
      {
        "label": "Swasthavritta & Yoga",
        "href": "/academics/swasthavritta-yoga"
      },
      {
        "label": "Agad Tantra Avum Vidhi Vaidyaka",
        "href": "/academics/agad-tantra-avum-vidhi-vaidyaka"
      },
      {
        "label": "Prasuti & Stri Roga",
        "href": "/academics/prasuti-stri-roga"
      },
      {
        "label": "Kaumarbhritya (Bal Roga)",
        "href": "/academics/kaumarbhritya"
      },
      {
        "label": "Kayachikitsa",
        "href": "/academics/kayachikitsa"
      },
      {
        "label": "Shalakya Tantra",
        "href": "/academics/shalakya-tantra"
      },
      {
        "label": "Shalya Tantra",
        "href": "/academics/shalya-tantra"
      },
      {
        "label": "Panchakarma",
        "href": "/academics/panchakarma"
      }
    ]
  },
  {
    "label": "Results",
    "children": [
      {
        "label": "Internal Assessment Result",
        "href": "/results/internal"
      },
      {
        "label": "University Result",
        "href": "/results/university"
      }
    ]
  },
  {
    "label": "Hospital",
    "children": [
      {
        "label": "About Hospital",
        "href": "/hospital/about"
      },
      {
        "label": "Operation Theater Block",
        "href": "/hospital/operation-theater"
      },
      {
        "label": "Physiotherapy",
        "href": "/hospital/physiotherapy"
      },
      {
        "label": "Panchakarma Facilities",
        "href": "/hospital/panchakarma"
      },
      {
        "label": "Clinical Laboratory",
        "href": "/hospital/clinical-laboratory"
      },
      {
        "label": "Hospital Infrastructure",
        "href": "/hospital/infrastructure"
      },
      {
        "label": "Details Of Clinical Materials",
        "href": "/hospital/clinical-materials"
      },
      {
        "label": "Hospital Staff",
        "href": "/hospital/staff"
      },
      {
        "label": "MOU",
        "href": "/hospital/mou"
      },
      {
        "label": "Online Hospital Management",
        "href": "/hospital/management"
      },
      {
        "label": "Monthly Hospital Data",
        "href": "/hospital/monthly-data"
      },
      {
        "label": "Yearly OPD – IPD Record",
        "href": "/hospital/yearly-record"
      }
    ]
  },
  {
    "label": "NCISM",
    "href": "/ncism"
  },
  {
    "label": "MUHS",
    "children": [
      {
        "label": "MUHS Mandate 2021-2022",
        "href": "/muhs/2021-2022"
      },
      {
        "label": "MUHS Mandate 2022-2023",
        "href": "/muhs/2022-2023"
      },
      {
        "label": "MUHS Mandate 2023-2024",
        "href": "/muhs/2023-2024"
      },
      {
        "label": "MUHS Mandate 2024-2025",
        "href": "/muhs/2024-2025"
      },
      {
        "label": "MUHS Mandate 2025-2026",
        "href": "/muhs/2025-2026"
      },
      {
        "label": "MUHS Mandate 2026-2027",
        "href": "/muhs/2026-2027"
      }
    ]
  },
  {
    "label": "Courses",
    "children": [
      {
        "label": "Under Graduate Courses",
        "href": "/courses/under-graduate"
      },
      {
        "label": "Post Graduate Courses",
        "href": "/courses/postgraduate"
      },
      {
        "label": "Fellowship Courses",
        "href": "/courses/fellowship"
      },
      {
        "label": "Ayurveda PhD Courses",
        "href": "/courses/phd"
      }
    ]
  },
  {
    "label": "Faculty",
    "children": [
      {
        "label": "Teaching Staff",
        "href": "/faculty/teaching-staff"
      },
      {
        "label": "Non Teaching Staff",
        "href": "/faculty/non-teaching-staff"
      },
      {
        "label": "Teacher Awards",
        "href": "/faculty/teacher-awards"
      }
    ]
  },
  {
    "label": "Committee/Councils",
    "href": "/committee"
  },
  {
    "label": "Admissions",
    "href": "/admissions"
  },
  {
    "label": "Student Zone",
    "children": [
      {
        "label": "Details of Student Committee",
        "href": "/student-zone/student-committee"
      },
      {
        "label": "Student Social Welfare",
        "href": "/student-zone/social-welfare"
      },
      {
        "label": "Student Award List",
        "href": "/student-zone/award-list"
      },
      {
        "label": "Student Attendance List",
        "href": "/student-zone/attendance-list"
      }
    ]
  },
  {
    "label": "Biometric Attendance",
    "children": [
      {
        "label": "Teaching Staff Attendance",
        "href": "/biometric-attendance/teaching-staff"
      },
      {
        "label": "Non Teaching Staff Attendance",
        "href": "/biometric-attendance/non-teaching-staff"
      },
      {
        "label": "Hospital Staff Attendance",
        "href": "/biometric-attendance/hospital-staff"
      },
      {
        "label": "MUHS Holidays",
        "href": "/biometric-attendance/muhs-holidays"
      }
    ]
  },
  {
    "label": "Imp. Links",
    "href": "/important-links"
  },
  {
    "label": "Contact",
    "href": "/contact"
  }
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner Section */}
      <div className="bg-[#f8f9fa] py-4 w-full border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Left Section: Logo + Divider + Text */}
            <div className="flex items-center gap-6 md:ml-6 lg:ml-40 xl:ml-40">
              {/* Left Logo */}
              <Link href="/" className="shrink-0 hidden md:block">
                <div className="w-[160px] h-[160px] rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="B.R. Harne Logo"
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
              </Link>

              {/* Vertical Orange Divider */}
              <div className="hidden md:block w-1.5 h-40 bg-[#e8821a]"></div>

              {/* Text */}
              <div className="text-center md:text-left flex-1 flex flex-col justify-center">
                <p className="text-base md:text-xl text-[#e8821a] font-bold mb-1 tracking-wider uppercase">
                  "Jai Shree Siddhivinayak Foundation"
                </p>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#57B745] font-[var(--font-playfair)] leading-tight mb-2 whitespace-nowrap">
                  B. R. Harne Ayurvedic Medical College Karav-Vangani
                </h1>
                <div className="flex flex-col items-center md:items-start gap-1 text-[11px] md:text-[13px] text-gray-800 font-medium">
                  <p>Recognised by - Central Council of Indian Medicine & Ministry of AYUSH, Delhi</p>
                  <p>Affiliated to - Maharashtra University of Health Science, Nashik</p>
                  <p>Permitted By - Government of Maharashtra</p>
                </div>
              </div>
            </div>

            {/* Right Logo (Foundation) */}
            <div className="shrink-0 hidden md:block md:mr-6 lg:mr-20 xl:mr-20">
              <div className="w-[160px] h-[160px] flex items-center justify-center">
                <Image
                  src="/images/new_logo2.jpg"
                  alt="Foundation Logo"
                  width={140}
                  height={140}
                  className="object-contain w-[140px] h-[140px] mix-blend-multiply scale-100"
                  unoptimized
                />
              </div>
            </div>

            {/* Mobile Menu Toggle (Only visible on small screens) */}
            <button
              className="xl:hidden p-2 text-gray-700 bg-gray-200 rounded-md absolute top-4 right-4"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Dark Grey) */}
      <nav className="bg-[#374151] w-full sticky top-0 z-50 shadow-md">
        <div className="max-w-[1600px] mx-auto px-1 lg:px-2">
          {/* Use flex-wrap on smaller screens, but heavily reduce padding so it fits on one line on desktop */}
          <div className="hidden xl:flex items-center justify-center w-full py-1.5">
            {navItems.map((item, idx) => (
              <div key={item.label} className="relative group">
                {item.href && !item.children ? (
                  <Link
                    href={item.href}
                    className={`flex items-center px-1.5 lg:px-2 py-2 text-[9px] lg:text-[10px] xl:text-[11px] font-medium transition-all capitalize tracking-wide whitespace-nowrap
                      ${item.label === 'Home' ? 'text-[#57B745]' : 'text-white hover:text-[#57B745]'}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button className="flex items-center px-1.5 lg:px-2 py-2 text-[9px] lg:text-[10px] xl:text-[11px] font-medium text-white hover:text-[#57B745] transition-all capitalize tracking-wide cursor-pointer whitespace-nowrap">
                    {item.label}
                    {item.children && <ChevronDown size={14} className="ml-0.5 opacity-70 group-hover:opacity-100 transition-transform group-hover:rotate-180" />}
                  </button>
                )}

                {/* Dropdown */}
                {item.children && (
                  <div className={`absolute top-full z-50 bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] rounded-md border-t-2 border-[#57B745] min-w-[260px] ${item.label === 'Committee/Councils' ? 'max-h-[75vh] overflow-y-auto' : ''} invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 transform origin-top translate-y-3 group-hover:translate-y-0 mt-0 ${idx >= navItems.length - 6 ? 'right-0' : 'left-0'}`}>
                    <div className="py-2">
                      {item.children.map((child, childIdx) => (
                        <div key={`${child.label}-${childIdx}`} className="relative group/sub">
                          {child.href ? (
                            <Link
                              href={child.href}
                              target={child.href.toLowerCase().endsWith('.pdf') ? "_blank" : undefined}
                              rel={child.href.toLowerCase().endsWith('.pdf') ? "noopener noreferrer" : undefined}
                              className="flex items-center justify-between px-4 py-2 text-[11px] font-medium text-gray-700 hover:text-[#57B745] hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors whitespace-nowrap"
                            >
                              {child.label}
                              {child.children && <ChevronDown size={14} className="ml-1 -rotate-90 opacity-70 group-hover/sub:opacity-100" />}
                            </Link>
                          ) : (
                            <button
                              className="flex items-center justify-between w-full text-left px-4 py-2 text-[11px] font-medium text-gray-700 hover:text-[#57B745] hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors whitespace-nowrap"
                            >
                              {child.label}
                              {child.children && <ChevronDown size={14} className="ml-1 -rotate-90 opacity-70 group-hover/sub:opacity-100" />}
                            </button>
                          )}

                          {/* Nested Dropdown */}
                          {child.children && (
                            <div className={`absolute top-0 ${idx >= navItems.length - 6 ? 'right-full mr-0' : 'left-full ml-0'} z-50 bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] rounded-md border-t-2 border-[#57B745] min-w-[260px] w-max ${child.children.length > 8 ? 'max-h-[65vh] overflow-y-auto' : ''} invisible opacity-0 group-hover/sub:visible group-hover/sub:opacity-100 transition-all duration-300`}>
                              <div className="py-1.5">
                                {child.children.map((subChild, subIdx) => (
                                  <div key={`${subChild.label}-${subIdx}`} className="relative group/sub2">
                                    {subChild.href ? (
                                      <Link
                                        href={subChild.href}
                                        target={(subChild.href && (subChild.href.toLowerCase().endsWith('.pdf') || subChild.href.toLowerCase().endsWith('.jpg') || subChild.href.toLowerCase().endsWith('.png') || subChild.href.toLowerCase().endsWith('.jpeg') || subChild.href.toLowerCase().endsWith('.gif'))) ? "_blank" : undefined}
                                        rel={(subChild.href && (subChild.href.toLowerCase().endsWith('.pdf') || subChild.href.toLowerCase().endsWith('.jpg') || subChild.href.toLowerCase().endsWith('.png') || subChild.href.toLowerCase().endsWith('.jpeg') || subChild.href.toLowerCase().endsWith('.gif'))) ? "noopener noreferrer" : undefined}
                                        className="flex items-center justify-between px-4 py-2 text-[11px] font-medium text-gray-700 hover:text-[#57B745] hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors whitespace-nowrap"
                                      >
                                        {subChild.label}
                                        {subChild.children && <ChevronDown size={14} className="ml-1 -rotate-90 opacity-70 group-hover/sub2:opacity-100" />}
                                      </Link>
                                    ) : (
                                      <button
                                        className="flex items-center justify-between w-full text-left px-4 py-2 text-[11px] font-medium text-gray-700 hover:text-[#57B745] hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors whitespace-nowrap"
                                      >
                                        {subChild.label}
                                        {subChild.children && <ChevronDown size={14} className="ml-1 -rotate-90 opacity-70 group-hover/sub2:opacity-100" />}
                                      </button>
                                    )}

                                    {/* 4th Level Nested Dropdown */}
                                    {subChild.children && (
                                      <div className={`absolute top-0 ${idx >= navItems.length - 6 ? 'right-full mr-0' : 'left-full ml-0'} z-50 bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] rounded-md border-t-2 border-[#57B745] min-w-[260px] w-max ${subChild.children.length > 8 ? 'max-h-[65vh] overflow-y-auto' : ''} invisible opacity-0 group-hover/sub2:visible group-hover/sub2:opacity-100 transition-all duration-300`}>
                                        <div className="py-1.5">
                                          {subChild.children.map((deepChild, deepIdx) => (
                                            <Link
                                              key={`${deepChild.label}-${deepIdx}`}
                                              href={deepChild.href || "#"}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="block px-4 py-2 text-[11px] font-medium text-gray-700 hover:text-[#57B745] hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors whitespace-nowrap"
                                            >
                                              {deepChild.label}
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto shadow-inner absolute w-full left-0 top-full">
            {navItems.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                onClose={() => setMobileOpen(false)}
              />
            ))}
          </div>
        )}
      </nav>
    </>
  );
}

function MobileNavItem({ item, onClose, depth = 0 }: { item: NavItem; onClose: () => void; depth?: number }) {
  const [open, setOpen] = useState(false);

  const paddingLeft = depth === 0 ? "px-6" : depth === 1 ? "pl-10 pr-6" : depth === 2 ? "pl-14 pr-6" : "pl-18 pr-6";
  const bgColor = depth === 0 ? "" : depth === 1 ? "bg-gray-50" : "bg-gray-100";
  const textColor = depth === 0 ? "text-gray-700" : "text-gray-600";
  const textSize = depth === 0 ? "text-[13px]" : "text-[11px]";

  if (!item.children) {
    return (
      <Link
        href={item.href || "#"}
        target={(item.href && (item.href.toLowerCase().endsWith('.pdf') || item.href.toLowerCase().endsWith('.jpg') || item.href.toLowerCase().endsWith('.jpeg') || item.href.toLowerCase().endsWith('.png') || item.href.toLowerCase().endsWith('.gif'))) ? "_blank" : undefined}
        rel={(item.href && (item.href.toLowerCase().endsWith('.pdf') || item.href.toLowerCase().endsWith('.jpg') || item.href.toLowerCase().endsWith('.jpeg') || item.href.toLowerCase().endsWith('.png') || item.href.toLowerCase().endsWith('.gif'))) ? "noopener noreferrer" : undefined}
        className={`block ${paddingLeft} py-4 ${textSize} font-medium ${textColor} ${bgColor} border-b border-gray-100 hover:bg-green-50 hover:text-[#57B745]`}
        onClick={onClose}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className={bgColor}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-between w-full ${paddingLeft} py-4 ${textSize} font-medium ${textColor} border-b border-gray-100 hover:bg-gray-50`}
      >
        {item.label}
        <ChevronDown
          size={16}
          className={`transition-transform text-gray-400 ${open ? "rotate-180 text-[#57B745]" : ""}`}
        />
      </button>
      {open && (
        <div className="border-b border-gray-100">
          {item.children.map((child, idx) => (
            <MobileNavItem
              key={`${child.label}-${idx}`}
              item={child}
              onClose={onClose}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
