import React from 'react';
import DepartmentLayout from '@/components/academics/DepartmentLayout';

export const metadata = { title: "Rachna Sharir Department" };

const documents = [
  {
    "name": "Department info",
    "url": "https://www.brharneayurved.in/uploads/academics/Department info20250401_003252.pdf"
  },
  {
    "name": "Syllabus",
    "url": "https://www.brharneayurved.in/uploads/academics/Syllabus20250401_003353.pdf"
  },
  {
    "name": "ATP",
    "url": "https://www.brharneayurved.in/uploads/academics/ATP20250401_003438.pdf"
  },
  {
    "name": "Equipments & Instruments",
    "url": "https://www.brharneayurved.in/uploads/academics/Equipments & Instruments20250401_003823.pdf"
  }
];

const galleryImages = [
  "https://www.brharneayurved.in/uploads/gallery/rachnasharir_685d914215251.jpg",
  "https://www.brharneayurved.in/uploads/gallery/rachnasharir_685d914217162.jpg",
  "https://www.brharneayurved.in/uploads/gallery/rachnasharir_685d9142180f6.jpg",
  "https://www.brharneayurved.in/uploads/gallery/rachnasharir_685d914219157.jpg",
  "https://www.brharneayurved.in/uploads/gallery/rachnasharir_685d914219914.jpg",
  "https://www.brharneayurved.in/uploads/gallery/rachnasharir_685d91421a84b.jpg",
  "https://www.brharneayurved.in/uploads/gallery/rachnasharir_685d9169225b3.jpg",
  "https://www.brharneayurved.in/uploads/gallery/rachnasharir_685d9169234be.jpg",
  "https://www.brharneayurved.in/uploads/gallery/rachnasharir_685d91692436c.jpg",
  "https://www.brharneayurved.in/uploads/gallery/rachnasharir_685d916924e3a.jpg",
  "https://www.brharneayurved.in/uploads/gallery/rachnasharir_685d9169261f7.jpg",
  "https://www.brharneayurved.in/uploads/gallery/rachnasharir_685d9169271ea.jpg",
  "https://www.brharneayurved.in/uploads/gallery/rachnasharir_685d916927ee3.jpg"
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
