import PageBanner from "@/components/ui/PageBanner";
import Link from "next/link";

export const metadata = { title: "Teaching Staff Attendance" };

const files = [
  { "name": "February 2025", "url": "https://brharneayurved.in/uploads/biometric_attendance/February 202520250326_021448.pdf" },
  { "name": "January 2025", "url": "https://brharneayurved.in/uploads/biometric_attendance/January 202520250326_021543.pdf" },
  { "name": "MARCH 2025", "url": "https://brharneayurved.in/uploads/biometric_attendance/MARCH 202520250725_045208.pdf" },
  { "name": "April 2025", "url": "https://brharneayurved.in/uploads/biometric_attendance/April 202520250802_101504.pdf" },
  { "name": "July 2025", "url": "https://brharneayurved.in/uploads/biometric_attendance/July 202520250825_110234.pdf" },
  { "name": "June 2025", "url": "https://brharneayurved.in/uploads/biometric_attendance/June 202520260222_113413.pdf" },
  { "name": "May 2025", "url": "https://brharneayurved.in/uploads/biometric_attendance/May 202520260222_113517.pdf" },
  { "name": "January 2026", "url": "https://brharneayurved.in/uploads/biometric_attendance/January 202620260227_111424.pdf" },
  { "name": "February 2026", "url": "https://brharneayurved.in/uploads/biometric_attendance/February 202620260328_100807.pdf" },
  { "name": "March 2026", "url": "https://brharneayurved.in/uploads/biometric_attendance/March 202620260331_131119.pdf" },
  { "name": "December 2025", "url": "https://brharneayurved.in/uploads/biometric_attendance/December 2025 20260402_104927.pdf" },
  { "name": "November 2025", "url": "https://brharneayurved.in/uploads/biometric_attendance/November 202520260416_080737.pdf" },
  { "name": "April 2026", "url": "https://brharneayurved.in/uploads/biometric_attendance/April 202620260508_091254.pdf" }
];

export default function TeachingStaffAttendancePage() {
  return (
    <div>
      <PageBanner title="Teaching Staff Attendance" breadcrumbs={[{ label: "Biometric Attendance" }, { label: "Teaching Staff" }]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-0">
        <div className="w-full">
          <div className="flex flex-col gap-2">
            {files.map((file, idx) => (
              <Link 
                href={file.url} 
                target="_blank"
                key={idx}
                className="group flex items-center py-3 border-b border-gray-100 last:border-0 transition-all duration-300 hover:translate-x-1"
              >
                <div className="flex-shrink-0 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 72" width="28" height="28">
                    <path fill="none" stroke="#ff2a2a" strokeWidth="4" strokeLinejoin="round" d="M8,2 h26 l16,16 v48 a4,4 0 0,1 -4,4 H8 a4,4 0 0,1 -4,-4 V6 a4,4 0 0,1 4,-4 z" />
                    <path fill="#ff2a2a" d="M38.6,40.9c-2.4-0.4-5.3-0.8-8.6-1.1c-2.3-4.9-4.3-9.5-5.9-13.6c1.1-3.3,1.9-6.6,2.2-8.8
                      c0.4-2.8-0.1-4.7-1.4-5.2c-1.3-0.5-3.1,0.5-3.7,3.3c-0.6,2.7-0.1,6.8,1.4,11.3c-1.6,4.6-3.6,9.5-5.9,14.2
                      c-3.8,4.1-7.4,7.4-10.2,9.3c-2.3,1.5-4.1,2-5,1.1c-0.7-0.7-0.6-2,0.4-3.7c1.4-2.5,4.5-4.4,9.2-5.7c3.2-0.8,6.8-1,10.6-0.6
                      c4.1-2,8.6-4.2,13.2-6.5c3.2-1.6,6.3-2.6,8.8-2.6c1.9,0,3,0.7,3.1,1.9c0.1,1.4-1.2,2.7-3.6,3.6C41.5,41,40.1,41,38.6,40.9z
                      M24.4,13.6c0-0.4-0.1-0.9-0.3-1.2c-0.3-0.5-0.7-0.6-0.9-0.4c-0.3,0.2-0.5,0.7-0.5,1.5c0,1.2,0.1,2.8,0.5,4.6
                      C23.5,16.7,23.9,15,24.4,13.6z M12.1,48.2c-1.2,1-2.1,2.1-2.5,3.2c-0.3,0.9-0.2,1.5,0,1.7c0.2,0.2,0.7,0.1,1.4-0.4
                      C12.7,51.8,14.2,50.3,16.1,48C14.8,48,13.4,48.1,12.1,48.2z M23.6,36.3c1.5-3.1,2.9-6.3,4.1-9.4c-1.2,2.8-2.2,5.7-3,8.7
                      C24.3,35.8,23.9,36.1,23.6,36.3z M41.4,37.6c1.3-0.4,2-1,2-1.6c0-0.3-0.2-0.5-0.6-0.5c-1,0-2.4,0.6-4.2,1.5
                      C39.7,37.3,40.6,37.5,41.4,37.6z" />
                    <text x="26" y="64" fill="#333333" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="17" textAnchor="middle">PDF</text>
                  </svg>
                </div>
                <h4 className="font-medium text-gray-700 text-[15px] leading-snug group-hover:text-[#57B745] transition-colors duration-300">
                  {file.name}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
