import React from 'react';
import Link from 'next/link';
import PageBanner from '@/components/ui/PageBanner';

export const metadata = { title: "Important Links" };

const links = [
  { name: "Maharashtra University of Health sciences, Nashik (MUHS)", url: "https://www.muhs.ac.in/dept_links1.aspx" },
  { name: "Maharashtra council of Indian Medicine, Mumbai (MCIM)", url: "https://mcimindia.org.in/" },
  { name: "Director of medical Education and Research (DMER)", url: "https://www.med-edu.in/" },
  { name: "Medical Education and Drug Department, Govt. Of Maharashtra", url: "https://medical.maharashtra.gov.in/1154/Home" },
  { name: "University Grants Commission", url: "https://www.education.gov.in/en/university-grants-commission-ugc" },
  { name: "Fees Regulating Authority", url: "https://www.mahafra.org/?q=home" },
  { name: "Admission Regulating Authority", url: "https://maha-ara.org/ara-authorities/" },
  { name: "Directorate of AYUSH", url: "https://mahayush.gov.in/" },
  { name: "National Commission for Indian System of Medicine (NCISM)", url: "https://ncismindia.org/" },
  { name: "CET Cell", url: "https://cetcell.mahacet.org/" }
];

export default function ImportantLinksPage() {
  return (
    <div>
      <PageBanner 
        title="Important Links" 
        breadcrumbs={[
          { label: "Important Links" }
        ]} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-16">
        <div className="flex flex-col gap-4 max-w-5xl">
          {links.map((link, idx) => (
            <Link 
              href={link.url} 
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#57B745]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#57B745]/10 flex-shrink-0 flex items-center justify-center text-[#57B745] group-hover:bg-[#57B745] group-hover:text-white transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 text-sm md:text-base group-hover:text-[#57B745] transition-colors leading-tight">
                  {link.name}
                </h3>
              </div>
              <div className="ml-4 flex-shrink-0 text-gray-300 group-hover:text-[#e8821a] transition-all transform group-hover:translate-x-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
