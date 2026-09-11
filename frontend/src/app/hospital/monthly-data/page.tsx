import PageBanner from "@/components/ui/PageBanner";
import DocumentAccordion from "@/components/ui/DocumentAccordion";

export const metadata = { title: "Monthly Hospital Data" };

const opdData = [
  { "name": "OPD JAN 25", "url": "/uploads/hospital/OPD JAN 2520250524_024524.pdf" },
  { "name": "OPD Feb 2025", "url": "/uploads/hospital/OPD Feb 202520250524_024557.pdf" },
  { "name": "OPD April 2025", "url": "/uploads/hospital/OPD April 202520250626_164859.pdf" },
  { "name": "OPD May 2025", "url": "/uploads/hospital/OPD May 202520250626_165324.pdf" },
  { "name": "OPD March 2025", "url": "/uploads/hospital/OPD March 202520250628_052448.pdf" },
  { "name": "OPD June 2025", "url": "/uploads/hospital/OPD June 202520250718_061301.pdf" },
  { "name": "July 2025", "url": "/uploads/hospital/July 202520250904_044049.pdf" },
  { "name": "August 2025", "url": "/uploads/hospital/August 202520250916_101707.pdf" },
  { "name": "September 2025", "url": "/uploads/hospital/September 202520251015_083113.pdf" },
  { "name": "October 2025", "url": "/uploads/hospital/October 202520251121_112515.pdf" },
  { "name": "November 2025", "url": "/uploads/hospital/November 202520251230_050125.pdf" },
  { "name": "December 2025", "url": "/uploads/hospital/December 2025 20260129_115834.pdf" },
  { "name": "January 2026", "url": "/uploads/hospital/January 202620260227_111045.pdf" },
  { "name": "Feb 2026", "url": "/uploads/hospital/Feb 202620260309_122332.pdf" },
  { "name": "March 2026", "url": "/uploads/hospital/March 202620260408_050521.pdf" },
  { "name": "April 2026", "url": "/uploads/hospital/April 202620260509_121624.pdf" },
  { "name": "May 2026", "url": "/uploads/hospital/May 202620260615_100815.pdf" },
  { "name": "June 2026", "url": "/uploads/hospital/June 202620260712_025003.pdf" },
  { "name": "August 2026", "url": "/uploads/hospital/August_2026_OPD.pdf" }
];

const ipdData = [
  { "name": "IPD JAN 2025", "url": "/uploads/hospital/IPD JAN 202520250524_025124.pdf" },
  { "name": "IPD Feb 2025", "url": "/uploads/hospital/IPD Feb 202520250524_025158.pdf" },
  { "name": "IPD April 2025", "url": "/uploads/hospital/IPD April 202520250626_164627.pdf" },
  { "name": "IPD May 2025", "url": "/uploads/hospital/IPD May 202520250626_165345.pdf" },
  { "name": "IPD March 2025", "url": "/uploads/hospital/IPD March 202520250628_052534.pdf" },
  { "name": "IPD June 2025", "url": "/uploads/hospital/IPD June 202520250718_061140.pdf" },
  { "name": "July 2025", "url": "/uploads/hospital/July 202520250904_044000.pdf" },
  { "name": "August 2025", "url": "/uploads/hospital/August 202520250916_102131.pdf" },
  { "name": "September 2025", "url": "/uploads/hospital/September 202520251015_083157.pdf" },
  { "name": "October 2025", "url": "/uploads/hospital/October 202520251124_120226.pdf" },
  { "name": "November 2025", "url": "/uploads/hospital/November 202520251230_050152.pdf" },
  { "name": "December 2025", "url": "/uploads/hospital/December 2025 20260120_035057.pdf" },
  { "name": "January 2026", "url": "/uploads/hospital/January 202620260227_111133.pdf" },
  { "name": "Feb 2026", "url": "/uploads/hospital/Feb 202620260309_122403.pdf" },
  { "name": "March 2026", "url": "/uploads/hospital/March 202620260408_050551.pdf" },
  { "name": "April 2026", "url": "/uploads/hospital/April 202620260509_121652.pdf" },
  { "name": "May 2026", "url": "/uploads/hospital/May 202620260615_100853.pdf" },
  { "name": "June 2026", "url": "/uploads/hospital/June 202620260712_025035.pdf" },
  { "name": "August 2026", "url": "/uploads/hospital/August_2026_IPD.pdf" }
];

const bedOccupancyData = [
  { "name": "bed occupancy JAN 2025", "url": "/uploads/hospital/bed occupancy JAN 202520250524_025700.pdf" },
  { "name": "Bed Occupancy Feb 2025", "url": "/uploads/hospital/Bed Occupancy Feb 202520250524_025738.pdf" },
  { "name": "Bed Occupancy April 2025", "url": "/uploads/hospital/Bed Occupancy April 202520250626_165122.pdf" },
  { "name": "Bed Occupancy May 2025", "url": "/uploads/hospital/Bed Occupancy May 202520250626_165422.pdf" },
  { "name": "Bed Occupancy March 2025", "url": "/uploads/hospital/Bed Occupancy March 202520250628_052641.pdf" },
  { "name": "Bed occupancy June 2025", "url": "/uploads/hospital/Bed occupancy June 202520250718_060918.pdf" },
  { "name": "July 2025", "url": "/uploads/hospital/July 202520250904_043908.pdf" },
  { "name": "August 2025", "url": "/uploads/hospital/August 202520250916_102355.pdf" },
  { "name": "September 2025", "url": "/uploads/hospital/September 202520251015_083234.pdf" },
  { "name": "October 2025", "url": "/uploads/hospital/October 202520251124_120205.pdf" },
  { "name": "November 2025", "url": "/uploads/hospital/November 202520251230_050217.pdf" },
  { "name": "December 2025", "url": "/uploads/hospital/December 2025 20260120_035116.pdf" },
  { "name": "January 2026", "url": "/uploads/hospital/January 202620260227_111212.pdf" },
  { "name": "Feb 2026", "url": "/uploads/hospital/Feb 202620260309_122433.pdf" },
  { "name": "March 2026", "url": "/uploads/hospital/March 202620260408_050628.pdf" },
  { "name": "April 2026", "url": "/uploads/hospital/April 202620260509_121722.pdf" },
  { "name": "May 2026", "url": "/uploads/hospital/May 202620260615_100924.pdf" },
  { "name": "June 2026", "url": "/uploads/hospital/June 202620260712_025115.pdf" },
  { "name": "August 2026", "url": "/uploads/hospital/August_2026_Bed_Occupancy.pdf" }
];

const medicalSurgicalData = [
  { "name": "April 2025", "url": "/uploads/hospital/April 202520250626_165218.pdf" },
  { "name": "May 2025", "url": "/uploads/hospital/May 202520250626_165442.pdf" },
  { "name": "August 2025", "url": "/uploads/hospital/August 202520250917_120640.pdf" },
  { "name": "October 2025", "url": "/uploads/hospital/October 202520251121_112644.pdf" },
  { "name": "January 2025", "url": "/uploads/hospital/January 202520260130_081127.pdf" },
  { "name": "Feb 2025", "url": "/uploads/hospital/Feb 202520260130_081226.pdf" },
  { "name": "June 2025", "url": "/uploads/hospital/June 202520260130_081328.pdf" },
  { "name": "July 2025", "url": "/uploads/hospital/July 202520260130_081357.pdf" },
  { "name": "September 2025", "url": "/uploads/hospital/September 202520260130_081500.pdf" },
  { "name": "November 2025", "url": "/uploads/hospital/November 202520260130_081523.pdf" },
  { "name": "December 2025", "url": "/uploads/hospital/December 2025 20260130_081615.pdf" },
  { "name": "March 2025", "url": "/uploads/hospital/March 202520260130_083956.pdf" },
  { "name": "January 2026", "url": "/uploads/hospital/January 202620260227_111242.pdf" },
  { "name": "Feb 2026", "url": "/uploads/hospital/Feb 202620260309_122510.pdf" },
  { "name": "March 2026", "url": "/uploads/hospital/March 202620260420_093840.pdf" },
  { "name": "April 2026", "url": "/uploads/hospital/April 202620260509_121751.pdf" },
  { "name": "May 2026", "url": "/uploads/hospital/May 202620260615_101004.pdf" },
  { "name": "June 2026", "url": "/uploads/hospital/June 202620260716_060755.pdf" },
  { "name": "August 2026", "url": "/uploads/hospital/August_2026_Medical_Surgical.pdf" }
];

const monthlyData = [
  { category: "OPD Data", files: opdData },
  { category: "IPD Data", files: ipdData },
  { category: "Bed Occupancy Data", files: bedOccupancyData },
  { category: "Medical and Surgical Procedures", files: medicalSurgicalData }
];

export default function MonthlyHospitalDataPage() {
  return (
    <div>
      <PageBanner title="Monthly Hospital Data" breadcrumbs={[{ label: "Hospital" }, { label: "Monthly Hospital Data" }]} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-2">
        <DocumentAccordion sections={monthlyData} />
      </div>
    </div>
  );
}
