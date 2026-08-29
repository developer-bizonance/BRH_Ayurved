import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

// Inline SVG social icons
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);


const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About College", href: "/about/college" },
  { label: "Committee/Councils", href: "/committee" },
  { label: "Gallery", href: "/about/gallery" },
  { label: "Conducted Events", href: "/events" },
  { label: "Upcoming Events", href: "/upcoming-events" },
];

const muhsLinks = [
  { label: "MUHS Mandate 2021-2022", href: "/muhs/2021-2022" },
  { label: "MUHS Mandate 2022-2023", href: "/muhs/2022-2023" },
  { label: "MUHS Mandate 2023-2024", href: "/muhs/2023-2024" },
  { label: "MUHS Mandate 2024-2025", href: "/muhs/2024-2025" },
  { label: "MUHS Mandate 2025-2026", href: "/muhs/2025-2026" },
];

const sisterInstitutes = [
  { label: "Jai Shree Siddhivinayak Foundation", href: "#" },
  { label: "B. R. Harne College of Engineering & Technology", href: "http://brharnetc.edu.in/br/" },
  { label: "B. R. Harne College of Pharmacy", href: "http://brharnepharmacy.in/" },
  { label: "B. R. Harne College of Physiotherapy", href: "https://brharnephysiotherapy.com/" },
  { label: "B. R. Harne School of Nursing (GNM)", href: "https://brharnenursing.in/" },
];

export default function Footer() {
  return (
    <footer className="bg-[#fcfdfd] text-gray-900 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand & Social Column */}
          <div className="flex flex-col items-start space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="B.R. Harne Ayurvedic Medical College"
                width={80}
                height={80}
                className="object-contain"
                unoptimized
              />
            </Link>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/brharneayurvedicmedicalcollege" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all shadow-sm">
                <InstagramIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                <FacebookIcon />
              </a>
              <a href="https://youtube.com/@brhamc" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all shadow-sm">
                <YoutubeIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all shadow-sm">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-bold text-base mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#e8821a] hover:translate-x-1 inline-flex items-center gap-2 transition-all"
                  >
                    <span className="text-[#57B745] font-bold text-lg leading-none">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* MUHS Mandate */}
          <div>
            <h4 className="text-gray-900 font-bold text-base mb-6 uppercase tracking-wider">MUHS Mandate</h4>
            <ul className="space-y-3">
              {muhsLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#e8821a] hover:translate-x-1 inline-flex items-center gap-2 transition-all"
                  >
                    <span className="text-[#57B745] font-bold text-lg leading-none">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-gray-900 font-bold text-base mb-6 uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-5 text-sm text-gray-600">
              <div className="flex items-start gap-3 group">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-[#57B745] group-hover:text-[#e8821a] transition-colors" />
                <span className="leading-relaxed">202, Sunrise Galaxy, Gupte Road, Vishnunagar, Dombivli (W)</span>
              </div>
              <div className="flex items-start gap-3 group">
                <Phone size={18} className="mt-0.5 flex-shrink-0 text-[#57B745] group-hover:text-[#e8821a] transition-colors" />
                <div className="flex flex-col gap-1">
                  <a href="tel:9168694965" className="hover:text-[#e8821a] transition-colors">9168694965</a>
                  <a href="tel:9920255543" className="hover:text-[#e8821a] transition-colors">9920255543</a>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <Mail size={18} className="mt-0.5 flex-shrink-0 text-[#57B745] group-hover:text-[#e8821a] transition-colors" />
                <a href="mailto:brharneayurved3183@gmail.com" className="hover:text-[#e8821a] transition-colors break-all">
                  brharneayurved3183@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            <span className="text-[#e8821a] font-medium">B. R. Harne Ayurvedic Medical College Karav-Vangani</span>
            {" "} · © {new Date().getFullYear()} · All Rights Reserved
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Developed by</span>
            <Image 
              src="/images/bizonance_logo.png" 
              alt="BiZONANCE" 
              width={100} 
              height={24} 
              className="object-contain h-6 w-auto"
              unoptimized
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
