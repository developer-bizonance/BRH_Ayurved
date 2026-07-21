import PageBanner from "@/components/ui/PageBanner";

export const metadata = { title: "About Hospital" };

export default function AboutHospitalPage() {
  return (
    <div className="bg-gray-50/50 min-h-screen">
      <PageBanner title="About Hospital" breadcrumbs={[{ label: "Hospital" }, { label: "About Hospital" }]} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-2">
        
        {/* Main Info Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 mb-12 mt-2">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            In existence since the institution’s inception, this hospital has provided holistic health care to thousands of poor and needy people. Patients come not only from Pune, but also distant remote rural areas. At very nominal charges, they enjoy access to a host of Ayurvedic therapies.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            These offer not only relief and cure from a host of common ailments, but also open the door to a new, healthy lifestyle, based on sound diet, a healthy daily regimen, and positive human values. The hospital also performs several inexpensive surgeries. Under an extension programme, health awareness and preliminary check-up camps have been held in rural areas.
          </p>
        </div>

        {/* Bed Allocation & Activities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Table */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-red-50 text-[#e8821a] flex items-center justify-center mr-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3h18v18H3zM12 8v8m-4-4h8"/>
                </svg>
              </span>
              Bed Allocation
            </h3>
            
            <div className="overflow-x-auto flex-grow">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100 text-gray-700">
                    <th className="py-4 px-4 font-semibold text-center w-16">Sr.</th>
                    <th className="py-4 px-4 font-semibold">Department</th>
                    <th className="py-4 px-4 font-semibold text-center w-32">No. of Beds</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  {[
                    { id: 1, name: "KAYACHIKITSA", beds: 20 },
                    { id: 2, name: "PANCHAKARMA", beds: 25 },
                    { id: 3, name: "SHALYATANTRA", beds: 20 },
                    { id: 4, name: "SHALAKYATANTRA", beds: 10 },
                    { id: 5, name: "STREEROG & PRASOOTI TANTRA", beds: 10 },
                    { id: 6, name: "BALROG", beds: 10 },
                    { id: 7, name: "VISHACHIKITSA", beds: "05" }
                  ].map((dept, index) => (
                    <tr key={index} className="border-b border-gray-50 hover:bg-green-50/50 transition-colors">
                      <td className="py-3 px-4 text-center">{dept.id}</td>
                      <td className="py-3 px-4 font-medium">{dept.name}</td>
                      <td className="py-3 px-4 text-center font-semibold text-[#57B745]">{dept.beds}</td>
                    </tr>
                  ))}
                  <tr className="bg-gray-50/80 font-bold text-gray-800">
                    <td className="py-4 px-4 text-center"></td>
                    <td className="py-4 px-4">Total Capacity</td>
                    <td className="py-4 px-4 text-center text-[#e8821a] text-lg">100</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Side Info */}
          <div className="flex flex-col gap-8">
            <div className="bg-gradient-to-br from-[#57B745] to-[#459e35] rounded-2xl p-8 shadow-sm text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Hospital Activities</h3>
              <p className="text-green-50 text-lg leading-relaxed relative z-10">
                The hospital activities are inclusive of the Family Planning Welfare Scheme. The Institution is also participating in the National Family Welfare Programme.
              </p>
              
              <ul className="mt-6 space-y-3 relative z-10">
                <li className="flex items-center text-white/90">
                  <svg className="w-5 h-5 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Month-wise Analysis
                </li>
                <li className="flex items-center text-white/90">
                  <svg className="w-5 h-5 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  IPD Month-wise Analysis
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex-grow">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                 <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mr-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                </span>
                Research & Development
              </h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#57B745]"></div>
                  </div>
                  <p className="text-gray-600">The institution is committed to systematic analysis of the several beneficial aspects of Ayurvedic massage. Other areas identified for R&D include Panchkarma treatment and medicinal valuation of plants.</p>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#57B745]"></div>
                  </div>
                  <p className="text-gray-600">The institution provides guidance to students doing doctoral studies in Ayurved.</p>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#57B745]"></div>
                  </div>
                  <p className="text-gray-600">We also conduct a Free Shibir every year for health checkups for the needy and poorest persons in the society.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}
