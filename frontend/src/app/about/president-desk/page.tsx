import Image from "next/image";

export const metadata = {
  title: "President's Desk | B. R. Harne Ayurvedic Medical College",
  description: "Message from Mr. Mangesh B. Harne, Hon. President of Jai Shree Siddhivinayak Foundation.",
};

export default function PresidentDeskPage() {
  return (
    <div className="bg-slate-50 h-full flex flex-col pt-12 pb-24">
      {/* Page Header */}
      <div className="pb-8 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
            President Desk
          </h1>
          <div className="w-12 h-1 bg-[#57B745] rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="flex flex-col lg:flex-row">

            {/* Left Column: Image and Profile */}
            <div className="lg:w-2/5 bg-slate-50 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col items-center relative overflow-hidden">
              {/* Decorative curved background */}
              <div className="absolute top-0 left-0 w-full h-[55%] bg-[#ecfdf5] rounded-b-[50%]"></div>
              <div className="relative z-10 w-full max-w-[260px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white mb-8">
                <Image
                  src="/images/President.jpg"
                  alt="Mr. Mangesh B. Harne"
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>

              <div className="text-center relative z-10 w-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mr. Mangesh B. Harne</h3>
                <p className="text-[#57B745] font-semibold text-lg uppercase tracking-wider mb-1">President</p>
                <p className="text-[#57B745] font-semibold text-sm uppercase tracking-wider mb-6">Jai Shree Siddhivinayak Foundation</p>
              </div>
            </div>

            {/* Right Column: Message Content */}
            <div className="lg:w-3/5 p-8 md:p-14 relative flex flex-col justify-center">
              {/* Quote Icon Background */}
              <div className="absolute top-10 right-12 text-gray-50 opacity-80 pointer-events-none">
                <svg className="w-40 h-40 transform -scale-x-100" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Dear Student's,</h2>

                <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                  <p className="text-justify leading-relaxed">
                    Jai Shree Siddhivinayak Foundation was established in the year 2007 with a social commitment of providing professional, competitive and industry relevant education to the younger generation of rural and urban area. The globalization and liberalization have changed all the concerns and references. There is a need to reconsider the present education at all its levels and hence it is necessary to deviate from the traditional methods and use the new methods and technology for imparting education.
                  </p>

                  <p className="text-justify leading-relaxed">
                    In today's era of globalization, an organization needs qualified technocrats and managers filled with enthusiasm and spirit of hard work blended with self confidence to achieve their goals. At Jai Shree Siddhivinayak Foundation's B. R. Harne College of Engineering and Technology, we have put together the organizational learning and insights gathered over time and combined them with innovative, state-of-the-art delivery mechanisms that will equip the younger generation to take on the challenges both in India and overseas.
                  </p>

                  <p className="text-justify leading-relaxed">
                    The institute has a very special place in my heart. Since 2011, BRHCET has developed excellent infra-structural facilities with well-equipped laboratories and an enriched library, which will be updated regularly. I believe that in nearby future the institute will produce competent technocrats and managers who will make significant contribution to the corporate world and industries all over the world.
                  </p>
                </div>

                <div className="mt-12 mb-8 text-lg font-bold text-[#57B745]">
                  All the Best & Welcome!
                </div>
                <div className="pt-8 border-t border-gray-100">
                  <div className="text-left">
                    <p className="font-bold text-gray-900 text-lg">Mr. Mangesh B. Harne</p>
                    <p className="text-sm text-gray-600 mt-1">Hon. President, "Jai Shree Siddhivinayak</p>
                    <p className="text-sm text-gray-600">Foundation" Dombivali (West ), Thane</p>
                    <p className="text-sm text-[#e8821a] font-bold tracking-wide uppercase mt-2">President</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
