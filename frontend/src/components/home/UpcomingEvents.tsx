"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function UpcomingEvents() {
  const events = [
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
    }
  ];

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 w-full py-12 bg-slate-50">
      <div className="mb-10 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-1.5 h-8 bg-[#e8821a] mr-3 rounded-full"></div>
          <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
        </div>
        <Link href="/upcoming-events" className="text-[#57B745] hover:text-[#4a9d3a] font-semibold flex items-center gap-1 transition-colors">
          See more <ArrowRight size={18} />
        </Link>
      </div>
      
      <div className="relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{
            nextEl: '.swiper-button-next-upcoming',
            prevEl: '.swiper-button-prev-upcoming',
          }}
          className="pb-8"
        >
          {events.map((event) => (
            <SwiperSlide key={event.id} className="h-auto pb-4 pt-4">
              <div className="bg-white h-full rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col transition-transform hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
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
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev-upcoming absolute left-0 top-1/2 -translate-y-1/2 -ml-4 lg:-ml-6 z-10 w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center justify-center text-[#57B745] hover:bg-[#57B745] hover:text-white transition-all disabled:opacity-0 disabled:cursor-auto">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button className="swiper-button-next-upcoming absolute right-0 top-1/2 -translate-y-1/2 -mr-4 lg:-mr-6 z-10 w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center justify-center text-[#57B745] hover:bg-[#57B745] hover:text-white transition-all disabled:opacity-0 disabled:cursor-auto">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    </section>
  );
}
