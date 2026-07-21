import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';

export const metadata = {
  title: "Upcoming Events | B. R. Harne Ayurvedic Medical College",
  description: "Explore all upcoming events, seminars, and camps at B. R. Harne Ayurvedic Medical College.",
};

const allUpcomingEvents = [
  {
    id: 1,
    title: "Diabetic Profile Camp",
    date: "June 10, 2026",
    time: "09:00",
    location: "B. R. Harne Ayurveda, Pathology lab",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600&h=400",
    link: "#"
  },
  {
    id: 2,
    title: "International Day of Yoga",
    date: "June 21, 2026",
    time: "08:00",
    location: "B. R. Harne Ayurvedic Medical College",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600&h=400",
    link: "#"
  },
  {
    id: 3,
    title: "Monsoon Health Checkup",
    date: "July 15, 2026",
    time: "10:00",
    location: "B. R. Harne College Clinic",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=600&h=400",
    link: "#"
  },
  {
    id: 4,
    title: "Ayurveda Research Seminar",
    date: "August 05, 2026",
    time: "09:30",
    location: "Main Auditorium",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=600&h=400",
    link: "#"
  },
  {
    id: 5,
    title: "Guest Lecture: Modern Ayurveda",
    date: "September 12, 2026",
    time: "11:00",
    location: "Seminar Hall 2",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600&h=400",
    link: "#"
  }
];

export default function UpcomingEventsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageBanner 
        title="Upcoming Events" 
        breadcrumbs={[
          { label: "Upcoming Events" }
        ]} 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allUpcomingEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col transition-transform hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              <div className="relative h-64 w-full border-b border-gray-100">
                <Image 
                  src={event.image} 
                  alt={event.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{event.title}</h3>
                
                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={18} className="text-[#e8821a] mr-3 shrink-0" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock size={18} className="text-[#57B745] mr-3 shrink-0" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={18} className="text-red-500 mr-3 shrink-0" />
                    <span className="text-sm line-clamp-1">{event.location}</span>
                  </div>
                </div>
                
                <div className="flex justify-end mt-auto">
                  <Link 
                    href={event.link}
                    className="inline-flex items-center px-5 py-2.5 bg-[#57B745] hover:bg-[#57B745] text-white text-sm font-bold rounded-full transition-colors group shadow-sm"
                  >
                    View Details
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
