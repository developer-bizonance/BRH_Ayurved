"use client";
import PageBanner from "@/components/ui/PageBanner";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      <PageBanner
        title="Contact Us"
        description="Get in touch with B. R. Harne Ayurvedic Medical College"
        breadcrumbs={[{ label: "Contact" }]}
      />
      <div className="bg-slate-50 min-h-screen pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Section: Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: <MapPin size={24} />,
                title: "Our Address",
                detail: "At. Karav, Post Vangani, Tal. Ambarnath, Dist. Thane 421 503",
                color: "text-[#57B745]",
                bg: "bg-[#57B745]/10",
              },
              {
                icon: <Phone size={24} />,
                title: "Call Us",
                detail: "+91 9168694965 \n +91 9920255543",
                color: "text-[#57B745]",
                bg: "bg-[#57B745]/10",
                href: "tel:9168694965",
              },
              {
                icon: <Mail size={24} />,
                title: "Email Us",
                detail: "brharneayurved3183@gmail.com",
                color: "text-[#57B745]",
                bg: "bg-[#57B745]/10",
                href: "mailto:brharneayurved3183@gmail.com",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center group">
                <div className={`w-14 h-14 rounded-full ${item.bg} ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} className="text-gray-600 hover:text-[#57B745] transition-colors whitespace-pre-line text-sm">
                    {item.detail}
                  </a>
                ) : (
                  <p className="text-gray-600 whitespace-pre-line text-sm">{item.detail}</p>
                )}
              </div>
            ))}
          </div>

          {/* Middle Section: Map */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="relative h-[500px] w-full bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2868.6460079183616!2d73.31000151025417!3d19.119258220374476!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f3aa5c575bd3%3A0x755cb65135c140ca!2sB.R.%20HARNE%20AYURVEDIC%20MEDICAL%20COLLEGE%20AND%20HOSPITAL!5e1!3m2!1sen!2sin!4v1753720285033!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0 }}
                allowFullScreen
                loading="lazy"
                title="College Location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
