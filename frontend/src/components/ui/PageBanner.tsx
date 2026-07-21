import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  breadcrumbs: Breadcrumb[];
  description?: string;
}

export default function PageBanner({ title }: PageBannerProps) {
  return (
    <div className="pt-12 pb-6 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-8 md:h-10 bg-[#57B745] rounded-full"></div>
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
