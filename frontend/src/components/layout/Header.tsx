"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Home, Info, BookOpen, Stethoscope, FileText, Building2, Users, GraduationCap, Link2, Phone, Fingerprint, Award, Calendar, FolderOpen, FlaskConical, TestTube, FileBadge } from "lucide-react";

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
        "label": "Gallery",
        "href": "/about/gallery"
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
        "label": "Medical Health Check-up Camps",
        "href": "/hospital/health-checkup-camps"
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
    "children": [
      {
        "label": "Admissions Details",
        "href": "/admissions/details"
      },
      {
        "label": "Fees Structure",
        "href": "/admissions/fees"
      },
      {
        "label": "List of Documents",
        "href": "/admissions/documents"
      },
      {
        "label": "Student Admission List",
        "href": "/admissions/student-list"
      }
    ]
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
      },
      {
        "label": "Educational Visits",
        "href": "/student-zone/educational-visits"
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
        "label": "MUHS Holiday 2025",
        "href": "/biometric-attendance/muhs-holiday-2025"
      },
      {
        "label": "MUHS Holiday 2026",
        "href": "/biometric-attendance/muhs-holiday-2026"
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
      <div className="bg-[#f8f9fa] py-2 sm:py-4 w-full border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto px-2 lg:px-6">
          <div className="flex flex-row items-center justify-between gap-2 sm:gap-4">
            {/* Left Section: Logo + Divider + Text */}
            <div className="flex flex-row items-center gap-2 sm:gap-4 md:gap-6 md:ml-6 lg:ml-20 xl:ml-32 w-full lg:w-auto text-left">
              {/* Left Logo */}
              <Link href="/" className="shrink-0">
                <div className="w-[75px] h-[75px] sm:w-[90px] sm:h-[90px] md:w-[140px] md:h-[140px] rounded-full overflow-hidden flex items-center justify-center">
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
              <div className="w-[3px] sm:w-1 md:w-1.5 h-[70px] sm:h-20 md:h-32 bg-[#e8821a] shrink-0"></div>

              {/* Text */}
              <div className="flex-1 flex flex-col justify-center px-0.5 sm:px-2 min-w-0">
                <p className="text-[10px] sm:text-[11px] md:text-sm lg:text-lg text-[#e8821a] font-bold mb-0.5 sm:mb-1 tracking-wider uppercase leading-tight sm:leading-snug">
                  "Jai Shree Siddhivinayak Foundation"
                </p>
                <h1 className="text-[11px] sm:text-[14px] md:text-[1.35rem] lg:text-[1.7rem] font-bold text-[#57B745] font-[var(--font-playfair)] leading-tight mb-0.5 sm:mb-1 md:mb-2 whitespace-nowrap tracking-tight">
                  B. R. Harne Ayurvedic Medical College Karav-Vangani
                </h1>
                <div className="flex flex-col items-start gap-0.5 text-[8px] sm:text-[9px] md:text-[11px] text-gray-800 font-medium">
                  <p className="leading-[1.1]">Recognised by - Central Council of Indian Medicine & Ministry of AYUSH, Delhi</p>
                  <p className="leading-[1.1]">Affiliated to - Maharashtra University of Health Science, Nashik</p>
                  <p className="leading-[1.1]">Permitted By - Government of Maharashtra</p>
                </div>
              </div>
            </div>

            {/* Right Logo (Foundation) */}
            <div className="shrink-0 hidden lg:block lg:mr-10 xl:mr-20">
              <div className="w-[120px] h-[120px] flex items-center justify-center">
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
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Dark Grey) */}
      <nav className="bg-[#374151] w-full sticky top-0 z-50 shadow-md relative">
        <div className="max-w-[1600px] mx-auto px-2 lg:px-2 flex xl:block items-center justify-between xl:justify-center min-h-[44px]">
          {/* Mobile Menu Toggle (Only visible on small screens, inside nav) */}
          <button
            className="xl:hidden p-1.5 my-1.5 text-white bg-[#4b5563] hover:bg-[#57B745] rounded-md transition-colors z-50 relative ml-auto"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

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

        {/* Mobile Nav Drawer Overlay */}
        <div 
          className={`xl:hidden fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setMobileOpen(false)}
        />
        
        {/* Mobile Nav Drawer */}
        <div 
          className={`xl:hidden fixed top-0 left-0 h-full w-[85%] max-w-[320px] bg-white z-[101] shadow-2xl overflow-y-auto transition-transform duration-300 transform ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          {/* Drawer Header */}
          <div className="p-3 sm:p-4 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10 overflow-hidden">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <div className="w-[48px] h-[48px] sm:w-[55px] sm:h-[55px] rounded-full overflow-hidden flex items-center justify-center shrink-0">
                <Image
                  src="/logo.png"
                  alt="B.R. Harne Logo"
                  width={70}
                  height={70}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>
              <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                <span className="text-[#e8821a] font-bold text-[10px] sm:text-[11px] uppercase leading-tight whitespace-nowrap tracking-tight truncate">Jai Shree Siddhivinayak Foundation</span>
                <span className="text-[#57B745] font-bold text-[13px] sm:text-[14px] leading-tight tracking-tighter">B. R. Harne Ayurvedic Medical College Karav-Vangani</span>
              </div>
            </div>
            <button onClick={() => setMobileOpen(false)} className="p-1 ml-1 text-gray-500 hover:bg-gray-100 rounded-full transition-colors shrink-0">
              <X size={20} />
            </button>
          </div>
          
          {/* Drawer Links */}
          <div className="py-2">
            {navItems.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                onClose={() => setMobileOpen(false)}
              />
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

const getIconForLabel = (label: string) => {
  switch (label.toLowerCase()) {
    case 'home': return <Home size={18} />;
    case 'about': return <Info size={18} />;
    case 'academics': return <BookOpen size={18} />;
    case 'departments': return <FlaskConical size={18} />;
    case 'results': return <Award size={18} />;
    case 'hospital': return <Stethoscope size={18} />;
    case 'ncism': return <FileBadge size={18} />;
    case 'muhs': return <FileText size={18} />;
    case 'courses': return <GraduationCap size={18} />;
    case 'faculty': return <Users size={18} />;
    case 'committee/councils': return <Users size={18} />;
    case 'admissions': return <FileText size={18} />;
    case 'student zone': return <Award size={18} />;
    case 'biometric attendance': return <Fingerprint size={18} />;
    case 'imp. links': return <Link2 size={18} />;
    case 'contact': return <Phone size={18} />;
    default: return <FolderOpen size={18} />;
  }
};

function MobileNavItem({ item, onClose, depth = 0 }: { item: NavItem; onClose: () => void; depth?: number }) {
  const [open, setOpen] = useState(false);

  const paddingLeft = depth === 0 ? "px-6" : depth === 1 ? "pl-10 pr-6" : depth === 2 ? "pl-14 pr-6" : "pl-18 pr-6";
  const bgColor = depth === 0 ? "" : depth === 1 ? "bg-gray-50" : "bg-gray-100";
  const textColor = depth === 0 ? "text-gray-700" : "text-gray-600";
  const textSize = depth === 0 ? "text-[13px]" : "text-[11px]";

  const Icon = depth === 0 ? getIconForLabel(item.label) : null;

  if (!item.children) {
    return (
      <Link
        href={item.href || "#"}
        target={(item.href && (item.href.toLowerCase().endsWith('.pdf') || item.href.toLowerCase().endsWith('.jpg') || item.href.toLowerCase().endsWith('.jpeg') || item.href.toLowerCase().endsWith('.png') || item.href.toLowerCase().endsWith('.gif'))) ? "_blank" : undefined}
        rel={(item.href && (item.href.toLowerCase().endsWith('.pdf') || item.href.toLowerCase().endsWith('.jpg') || item.href.toLowerCase().endsWith('.jpeg') || item.href.toLowerCase().endsWith('.png') || item.href.toLowerCase().endsWith('.gif'))) ? "noopener noreferrer" : undefined}
        className={`flex items-center gap-3 ${paddingLeft} py-3.5 ${textSize} font-medium ${textColor} ${bgColor} border-b border-gray-100 hover:bg-green-50 hover:text-[#57B745]`}
        onClick={onClose}
      >
        {Icon && <span className="text-[#e8821a] opacity-80">{Icon}</span>}
        {item.label}
      </Link>
    );
  }

  return (
    <div className={bgColor}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-between w-full ${paddingLeft} py-3.5 ${textSize} font-medium ${textColor} border-b border-gray-100 hover:bg-gray-50`}
      >
        <div className="flex items-center gap-3">
          {Icon && <span className="text-[#e8821a] opacity-80">{Icon}</span>}
          <span>{item.label}</span>
        </div>
        <ChevronDown
          size={16}
          className={`transition-transform text-gray-400 ${open ? "rotate-180 text-[#57B745]" : ""}`}
        />
      </button>
      {open && (
        <div className="border-b border-gray-100 bg-gray-50">
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
