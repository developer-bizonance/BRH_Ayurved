import React from 'react';
import PageBanner from '@/components/ui/PageBanner';

export const metadata = {
  title: "Videos | B. R. Harne Ayurvedic Medical College",
  description: "Watch videos of events, medical camps, and campus life at B. R. Harne Ayurvedic Medical College.",
};

const allVideos = [
  {
    id: "LXb3EKWsInQ", 
    title: "Campus Tour - B. R. Harne Ayurvedic Medical College"
  },
  {
    id: "ScMzIvxBSi4", 
    title: "Annual Gathering & Events Highlights"
  },
  {
    id: "tO01J-M3g0U", 
    title: "Medical Camp & Community Service"
  },
  {
    id: "ysz5S6PUM-U", 
    title: "Ayurveda Seminar & Workshop"
  },
  {
    id: "E8x4M6YJ2zQ",
    title: "Sports Day Highlights"
  },
  {
    id: "J---aiyznGQ",
    title: "Cultural Festival Performances"
  }
];

export default function VideosPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageBanner 
        title="Our Videos" 
        breadcrumbs={[
          { label: "Videos" }
        ]} 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allVideos.map((video, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] group">
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
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#57B745] transition-colors">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
