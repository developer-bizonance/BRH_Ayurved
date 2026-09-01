import React from 'react';
import DepartmentLayout from '@/components/academics/DepartmentLayout';

export const metadata = { title: "Rog Nidan Department" };

const documents = [
  {
    "name": "Department Info.",
    "url": "/uploads/academics/Department Info.20250401_025816.pdf"
  },
  {
    "name": "Syllabus",
    "url": "/uploads/academics/Syllabus20250401_025854.pdf"
  },
  {
    "name": "ATP- SY Batch 2021-22",
    "url": "/uploads/academics/ATP- SY Batch 2021-2220250401_030220.pdf"
  },
  {
    "name": "ATP-S.Y. Batch 2022-23",
    "url": "/uploads/academics/ATP-S.Y. Batch 2022-2320250401_034931.pdf"
  },
  {
    "name": "Equipments & Instruments",
    "url": "/uploads/academics/Equipments & Instruments20250401_035207.pdf"
  },
  {
    "name": "ATP batch 2023-24",
    "url": "/uploads/academics/ATP batch 2023-2420260116_091201.pdf"
  }
];

const galleryImages = [
  "/uploads/gallery/120250401_035339_0.jpg",
  "/uploads/gallery/220250401_035350_0.jpg",
  "/uploads/gallery/320250401_035402_0.jpeg",
  "/uploads/gallery/420250401_035414_0.jpeg",
  "/uploads/gallery/320250401_035428_0.jpeg",
  "/uploads/gallery/620250401_035441_0.jpeg",
  "/uploads/gallery/520250401_035453_0.jpeg",
  "/uploads/gallery/520250401_035510_0.jpeg",
  "/uploads/gallery/520250401_035523_0.jpeg",
  "/uploads/gallery/620250401_035535_0.jpeg"
];

export default function DepartmentPage() {
  return (
    <DepartmentLayout 
      title="Rog Nidan"
      documents={documents}
      galleryImages={galleryImages}
    />
  );
}
