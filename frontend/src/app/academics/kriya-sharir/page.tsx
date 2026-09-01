import React from 'react';
import DepartmentLayout from '@/components/academics/DepartmentLayout';

export const metadata = { title: "Kriya Sharir Department" };

const documents = [
  {
    name: "Department Info",
    url: "/uploads/academics/Department%20Info20250331_125922.pdf"
  },
  {
    name: "Syllabus",
    url: "/uploads/academics/Syllabus20250331_130029.pdf"
  },
  {
    name: "ATP",
    url: "/uploads/academics/ATP20250331_130121.pdf"
  },
  {
    name: "ATP batch 2025-26",
    url: "/uploads/academics/ATP%20batch%202025-2620260130_082314.pdf"
  }
];

const galleryImages = [
  "/uploads/gallery/120250331_130610_0.jpeg",
  "/uploads/gallery/220250331_130627_0.jpg",
  "/uploads/gallery/320250331_130748_0.jpg",
  "/uploads/gallery/420250331_130802_0.jpg",
  "/uploads/gallery/520250331_130837_0.jpg",
  "/uploads/gallery/620250331_130924_0.jpg",
  "/uploads/gallery/720250331_131013_0.jpg",
  "/uploads/gallery/820250331_131128_0.jpg",
  "/uploads/gallery/920250331_131143_0.jpg",
  "/uploads/gallery/1020250331_131230_0.jpg",
  "/uploads/gallery/1120250331_131244_0.jpg",
  "/uploads/gallery/1220250331_131259_0.jpg",
  "/uploads/gallery/1320250331_131317_0.jpg",
  "/uploads/gallery/1420250331_131945_0.jpg",
  "/uploads/gallery/1520250331_131954_0.jpg",
  "/uploads/gallery/1620250331_132042_0.jpg",
  "/uploads/gallery/1720250331_132054_0.jpg",
  "/uploads/gallery/1820250331_132105_0.jpg",
  "/uploads/gallery/1920250331_132436_0.jpg"
];

const videos = [
  "https://www.youtube.com/embed/ScMzIvxBSi4" // Placeholder video, replace with actual video URL
];

export default function DepartmentPage() {
  return (
    <DepartmentLayout 
      title="Kriya Sharir"
      documents={documents}
      galleryImages={galleryImages}
      videos={videos}
    />
  );
}
