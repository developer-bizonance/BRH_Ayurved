import Image from "next/image";

export const metadata = { title: "Board of Trustee" };

const trustees = [
  { srNo: 1, name: "Mr. Mangesh B. Harne", position: "President", image: "/images/President.jpg" },
  { srNo: 2, name: "Mrs. Kiran M. Harne", position: "Secretary" },
  { srNo: 3, name: "Mr. Rishikesh M. Harne", position: "Treasurer" },
];

export default function BoardOfTrusteePage() {
  return (
    <div className="bg-slate-50 h-full flex flex-col pt-12 pb-16">
      {/* Page Header */}
      <div className="pb-6 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
            Board of Trustee
          </h1>
          <div className="w-12 h-1 bg-[#57B745] rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mb-12">
            <p className="text-justify leading-relaxed">
              Jai Shree Siddhivinayak Foundation is a trust formed to develop educational facilities to the students from rural areas. The first step has been taken by opening by avenue towards engineering field as there is a demand for engineers throughout the nation. The institutes is approved by AICTE, New Delhi and foundation management will monitor and quality teaching.
            </p>
            <p className="text-justify leading-relaxed">
              Jai Shree Siddhivinayak Foundation is headed by the President Mr. Mangesh B. Harne who is graduate and engineering diploma holder with an experience in the field of construction and the Secretary Mrs. Kiran M. Harne from Dombivali. The foundation is established in 2007. The Registration No. of Foundation is MH/E 24307.
            </p>
            <p className="text-justify leading-relaxed">
              Jai Shree Siddhivinayak Foundation has planned to open the educational institutions in various filed like Management, Pharmacy, Architecture, and other professional courses. The Management of foundation shall provide the quality education all the time to prepare the students to committed to provide services to the society to full fill the needs of society, industry and nation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {trustees.map((trustee, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                {trustee.image ? (
                  <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 shadow-sm border border-gray-100">
                    <Image src={trustee.image} alt={trustee.name} fill className="object-cover object-top" />
                  </div>
                ) : (
                  <div className="w-40 h-40 mx-auto bg-[#57B745] text-white rounded-full flex items-center justify-center mb-6 text-6xl font-semibold">
                    {trustee.name.replace(/(Mr\.|Mrs\.)\s*/, '').charAt(0)}
                  </div>
                )}
                <div className="font-semibold text-gray-900 text-lg">{trustee.name}</div>
                <div className="text-gray-600 mt-1">{trustee.position}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
