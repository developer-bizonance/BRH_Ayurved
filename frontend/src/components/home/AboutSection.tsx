import { Eye, Target } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-1 w-12 bg-[#e8821a] rounded-full" />
            <span className="text-[#e8821a] text-sm font-semibold uppercase tracking-wider">Who We Are</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#57B745] font-[var(--font-playfair)]">
            About Us
          </h2>
        </div>

        <p className="text-gray-600 leading-relaxed mb-10 text-base">
          B. R. Harne Ayurvedic Medical College is situated at Vangani (W), Tal. – Ambarnath, Dist. – Thane.
          The college has administrative office, auditorium, classrooms and dissection hall, well equipped
          laboratories, workshop and centralized library, canteen, 100 bedded state of art multispecialty
          hospital with panchakarma facility, major – minor – shalakya operation theatres.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Vision Card */}
          <div className="group card-hover bg-gradient-to-br from-[#f0faf5] to-white rounded-2xl p-6 border border-[#57B745]/10 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#57B745] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Eye size={20} />
              </div>
              <h3 className="text-xl font-bold text-[#57B745] font-[var(--font-playfair)]">Vision</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              To impart quality education in Ayurvedic Medical Science retaining the ethnic values of
              Ayurved and coupling with advances of modern medicine. To create Ayurvedic doctors which
              will serve the society with their knowledge with self-disciplined, mentally robust and
              morally strong values.
            </p>
          </div>

          {/* Mission Card */}
          <div className="group card-hover bg-gradient-to-br from-[#fff8f0] to-white rounded-2xl p-6 border border-[#e8821a]/10 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#e8821a] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Target size={20} />
              </div>
              <h3 className="text-xl font-bold text-[#57B745] font-[var(--font-playfair)]">Mission</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              To become benchmark institute in India; where learning is a joy and medical education
              will endeavour to make competent Ayurvedic Doctors which will be Ambassadors of Ancient
              Indian Wisdom across the globe.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
}
