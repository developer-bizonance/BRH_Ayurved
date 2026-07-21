import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';

export const metadata = {
  title: "All Events | B. R. Harne Ayurvedic Medical College",
  description: "Explore all conducted events, seminars, and camps at B. R. Harne Ayurvedic Medical College.",
};

const allEvents = [
  {
    id: 1,
    title: "Blood Donation Camp",
    date: "March 06, 2026",
    time: "10:00",
    location: "B. R. Harne Ayurvedic Medical College",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=600&h=400",
    link: "#"
  },
  {
    id: 2,
    title: "Charak Jayanti 2025",
    date: "February 27, 2026",
    time: "09:30",
    location: "B. R. Harne Ayurveda, Seminar Hall",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600&h=400",
    link: "#"
  },
  {
    id: 3,
    title: "Ayush Expo 2025",
    date: "January 24, 2026",
    time: "10:00",
    location: "B. R. Harne College Campus",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=600&h=400",
    link: "#"
  },
  {
    id: 4,
    title: "National Ayurveda Seminar 2025",
    date: "April 15, 2026",
    time: "09:00",
    location: "Main Auditorium, B. R. Harne",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600&h=400",
    link: "#"
  },
  {
    id: 5,
    title: "Yoga and Wellness Retreat",
    date: "May 20, 2026",
    time: "07:00",
    location: "College Grounds",
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&q=80&w=600&h=400",
    link: "#"
  },
  {
    id: 6,
    title: "Herbal Medicine Workshop",
    date: "June 12, 2026",
    time: "11:00",
    location: "Botany Lab",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=600&h=400",
    link: "#"
  }
];

export default function AllEventsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageBanner 
        title="All Events" 
        breadcrumbs={[
          { label: "Events" }
        ]} 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allEvents.map((event) => (
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
