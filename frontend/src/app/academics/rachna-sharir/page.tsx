import React from 'react';
import DepartmentLayout from '@/components/academics/DepartmentLayout';

export const metadata = { title: "Rachna Sharir Department" };

const documents = [
  {
    "name": "Department info",
    "url": "/uploads/academics/Department info20250401_003252.pdf"
  },
  {
    "name": "Syllabus",
    "url": "/uploads/academics/Syllabus20250401_003353.pdf"
  },
  {
    "name": "ATP",
    "url": "/uploads/academics/ATP20250401_003438.pdf"
  },
  {
    "name": "Equipments & Instruments",
    "url": "/uploads/academics/Equipments & Instruments20250401_003823.pdf"
  }
];

const galleryImages = [
  "/uploads/gallery/rachnasharir_685d914215251.jpg",
  "/uploads/gallery/rachnasharir_685d914217162.jpg",
  "/uploads/gallery/rachnasharir_685d9142180f6.jpg",
  "/uploads/gallery/rachnasharir_685d914219157.jpg",
  "/uploads/gallery/rachnasharir_685d914219914.jpg",
  "/uploads/gallery/rachnasharir_685d91421a84b.jpg",
  "/uploads/gallery/rachnasharir_685d9169225b3.jpg",
  "/uploads/gallery/rachnasharir_685d9169234be.jpg",
  "/uploads/gallery/rachnasharir_685d91692436c.jpg",
  "/uploads/gallery/rachnasharir_685d916924e3a.jpg",
  "/uploads/gallery/rachnasharir_685d9169261f7.jpg",
  "/uploads/gallery/rachnasharir_685d9169271ea.jpg",
  "/uploads/gallery/rachnasharir_685d916927ee3.jpg"
];

export default function DepartmentPage() {
  return (
    <DepartmentLayout 
      title="Rachna Sharir"
      documents={documents}
      galleryImages={galleryImages}
    />
  );
}
