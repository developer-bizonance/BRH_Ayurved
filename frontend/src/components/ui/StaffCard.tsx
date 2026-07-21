import Image from "next/image";
import { User, Award, Mail } from "lucide-react";

interface StaffCardProps {
  name: string;
  designation: string;
  department: string;
  qualification?: string;
  experience?: string;
  email?: string;
  photo?: string | null;
}

export default function StaffCard({
  name,
  designation,
  department,
  qualification,
  experience,
  email,
  photo,
}: StaffCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden card-hover">
      {/* Photo */}
      <div className="bg-gradient-to-br from-[#57B745]/10 to-[#e8821a]/10 p-6 flex items-center justify-center">
        {photo ? (
          <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-white shadow-md">
            <Image src={photo} alt={name} fill className="object-cover" />
          </div>
        ) : (
          <div className="w-24 h-24 rounded-full bg-[#57B745]/20 flex items-center justify-center ring-4 ring-white shadow-md">
            <User size={32} className="text-[#57B745]" />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 text-center space-y-1">
        <h3 className="font-bold text-gray-800 text-sm">{name}</h3>
        <p className="text-[#57B745] text-xs font-semibold">{designation}</p>
        <p className="text-gray-500 text-xs">{department}</p>

        {(qualification || experience) && (
          <div className="pt-2 border-t border-gray-100 space-y-1">
            {qualification && (
              <div className="flex items-center justify-center gap-1.5">
                <Award size={11} className="text-[#e8821a]" />
                <span className="text-xs text-gray-600">{qualification}</span>
              </div>
            )}
            {experience && (
              <p className="text-xs text-gray-500">{experience} experience</p>
            )}
          </div>
        )}

        {email && (
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-1 mt-2 text-[11px] text-[#57B745] hover:underline"
          >
            <Mail size={10} />
            {email}
          </a>
        )}
      </div>
    </div>
  );
}
