import Image from "next/image";

export const metadata = {
  title: "Principal's Desk | B. R. Harne Ayurvedic Medical College",
  description: "Message from Dr. Hari Ranjit Naik, Principal of B. R. Harne Ayurvedic Medical College.",
};

export default function PrincipalDeskPage() {
  return (
    <div className="bg-slate-50 h-full flex flex-col pt-12 pb-24">
      {/* Page Header */}
      <div className="pb-8 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
            Principal&apos;s Desk
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
                  src="/images/Principle.png"
                  alt="Dr. Hari Ranjit Naik"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="text-center relative z-10 w-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Hari Ranjit Naik</h3>
                <p className="text-[#57B745] font-semibold text-lg uppercase tracking-wider mb-1">Principal</p>
                <p className="text-[#57B745] font-semibold text-sm uppercase tracking-wider mb-6">B. R. Harne Ayurvedic Medical College</p>


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
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Dear Students,</h2>

                <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                  <p className="text-justify leading-relaxed">
                    I congratulate you all on your decision of taking admission in B.R. Harne Ayurvedic Medical College, Karav &ndash; Vangani. You will find this institute, being dedicated to the students&apos; aspirations for excellence in medical education, and will be an ultimate destination for grooming your medical capabilities.
                  </p>

                  <p className="text-justify leading-relaxed">
                    A well-planned, beautifully developed and neatly maintained campus with free handed gift of natural beauty provides every facility and conducive academic atmosphere to the students for study and to build up their career. Apart from providing medical education college also conducts many co-curricular programs likes medical camps, medical community services, disaster management programs, the celebration of National Ayurveda Day and International Yoga Day, keeping in view the multifaceted development of students.
                  </p>

                  <p className="text-justify leading-relaxed">
                    As per the future plans, the institute envisages to start PG courses in every discipline of Ayurveda. We encourage and emphasize on research and development, consultancy and continuous industry-academia interaction.
                  </p>
                </div>

                <div className="mt-12 mb-8 text-lg font-bold text-[#57B745]">
                  All the Best & Welcome!
                </div>
                <div className="pt-8 border-t border-gray-100">
                  <div className="text-left">
                    <p className="font-bold text-gray-900 text-lg">B. R. Harne Ayurvedic Medical College</p>
                    <p className="text-sm text-gray-600 mt-1">brharneayurved3183@gmail.com</p>
                    <p className="text-sm text-gray-600">8108999726 / 7796663463</p>
                    <p className="text-sm text-[#e8821a] font-bold tracking-wide uppercase mt-2">Principal</p>
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
