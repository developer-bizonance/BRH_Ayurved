import React from 'react';
import Image from 'next/image';
import PageBanner from '@/components/ui/PageBanner';

export interface Document {
  name: string;
  url: string;
}

export interface DepartmentLayoutProps {
  title: string;
  basicInfo?: React.ReactNode;
  vision?: React.ReactNode;
  mission?: React.ReactNode;
  documents: Document[];
  galleryImages: string[];
  videos?: string[];
}

const SectionHeading = ({ title }: { title: string }) => (
  <h2 className="flex items-center text-xl md:text-2xl font-bold mb-3 text-gray-800">
    {title}
  </h2>
);

export default function DepartmentLayout({
  title,
  basicInfo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  vision,
  mission,
  documents,
  galleryImages,
  videos = ["https://www.youtube.com/embed/ScMzIvxBSi4"]
}: DepartmentLayoutProps) {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <PageBanner 
        title={title} 
        breadcrumbs={[
          { label: "Academics" },
          { label: title }
        ]} 
      />

      <div className="max-w-6xl mx-auto px-4 py-4 md:py-6 bg-transparent">
        
        {/* Text Sections */}
        {(basicInfo || vision || mission) && (
          <div className="space-y-6 mb-8">
            {basicInfo && (
              <div>
                <div className="text-justify text-gray-700 whitespace-pre-line leading-relaxed">
                  {basicInfo}
                </div>
              </div>
            )}

            {vision && (
              <div>
                <SectionHeading title="Vision" />
                <div className="text-justify text-gray-700 whitespace-pre-line leading-relaxed">
                  {vision}
                </div>
              </div>
            )}

            {mission && (
              <div>
                <SectionHeading title="Mission" />
                <div className="text-justify text-gray-700 whitespace-pre-line leading-relaxed">
                  {mission}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Documents Section */}
        {documents && documents.length > 0 && (
          <div className="mb-12">
            <SectionHeading title="Documents" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {documents.map((doc, idx) => (
                <a 
                  key={idx}
                  href={doc.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow group bg-white"
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
                  <div className="flex flex-col overflow-hidden">
                    <span className="font-semibold text-gray-800 truncate">{doc.name}</span>
                    <span className="text-xs text-gray-500 mt-0.5">PDF Document</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Photo Gallery Section */}
        {galleryImages && galleryImages.length > 0 && (
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">
              Images
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((src, idx) => (
                <div 
                  key={idx}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white shadow-sm cursor-pointer group border border-gray-100"
                >
                  <Image
                    src={src}
                    alt={`${title} Gallery Image ${idx + 1}`}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-500 ease-in-out p-1"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Video Section */}
        {videos && videos.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">
              Videos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((src, idx) => (
                <div key={idx} className="relative aspect-video rounded-lg overflow-hidden shadow-sm border border-gray-100">
                  <iframe
                    src={src}
                    title={`${title} Video ${idx + 1}`}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
