import { Eye, Target, Shield, Heart, Users, Zap, UserCheck, Star, Scale } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: 'Vision, Mission & Core Values | B. R. Harne Ayurvedic Medical College',
  description: 'Learn about the vision, mission, and core values of B. R. Harne Ayurvedic Medical College.',
};

export default function VisionMissionPage() {
  const coreValues = [
    { 
      title: "Integrity", 
      desc: "Honesty, fairness and transparency in our conduct and transaction.", 
      icon: <Shield size={28} className="text-[#57B745]" /> 
    },
    { 
      title: "Trust", 
      desc: "Faith and belief in each other.", 
      icon: <UserCheck size={28} className="text-[#57B745]" /> 
    },
    { 
      title: "Care", 
      desc: "Being concerned about the well being of all employees and students.", 
      icon: <Heart size={28} className="text-[#57B745]" /> 
    },
    { 
      title: "Collaboration", 
      desc: "Excellence through teamwork.", 
      icon: <Users size={28} className="text-[#57B745]" /> 
    },
    { 
      title: "Agility", 
      desc: "Speedy, responsive and proactive, achieved through empowering employees.", 
      icon: <Zap size={28} className="text-[#57B745]" /> 
    },
    { 
      title: "Respect", 
      desc: "Treat all stakeholders with respect and dignity.", 
      icon: <Users size={28} className="text-[#57B745]" /> 
    },
    { 
      title: "Excellence", 
      desc: "Bettering standards continuously, with passion and pride.", 
      icon: <Star size={28} className="text-[#57B745]" /> 
    },
    { 
      title: "Equity", 
      desc: "Believes in gender equity.", 
      icon: <Scale size={28} className="text-[#57B745]" /> 
    },
  ];

  return (
    <div className="bg-slate-50 h-full flex flex-col pt-12 pb-16">
      {/* Page Header */}
      <div className="pb-6 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
            Vision, Mission and Core Values
          </h1>
          <div className="w-12 h-1 bg-[#57B745] rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-start">
              <h2 className="text-2xl md:text-3xl font-bold text-[#57B745] mb-6">
                About B. R. Harne Ayurvedic Medical College
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg text-justify">
                B. R. Harne Ayurvedic Medical College is situated at Vangani (W), Tal. – Ambarnath, Dist. – Thane. 
                The college has administrative office, auditorium, classrooms and dissection hall, well equipped laboratories, 
                workshop and centralized library, canteen, 100 bedded state of art multispecialty hospital with panchakarma 
                facility, major – minor – shalakya operation theatres.
              </p>
            </div>
            <div className="relative min-h-[300px] md:min-h-[450px] w-full">
              <Image 
                src="/assets/images/About/College.jpg" 
                alt="B. R. Harne College Campus"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div>
              <div className="w-12 h-12 bg-[#57B745] rounded-lg flex items-center justify-center mb-5 text-white">
                <Eye size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-lg text-justify">
                To impart quality education in Ayurvedic Medical Science retaining the ethnic values of Ayurved 
                and coupling with advances of modern medicine. To create Ayurvedic doctors which will serve the 
                society with their knowledge with self-disciplined, mentally robust and morally strong values
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div>
              <div className="w-12 h-12 bg-[#e8821a] rounded-lg flex items-center justify-center mb-5 text-white">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-lg text-justify">
                To become benchmark institute in India; where learning is a joy and medical education will endeavour 
                to make competent Ayurvedic Doctors which will be Ambassadors of Ancient Indian Wisdom across the globe.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-12">
          <div className="text-left mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#57B745] mb-4">Our Core Values</h2>
            <div className="w-16 h-1 bg-[#e8821a] rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 rounded-xl bg-[#ecfdf5] shadow-sm hover:shadow-md border border-transparent hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
