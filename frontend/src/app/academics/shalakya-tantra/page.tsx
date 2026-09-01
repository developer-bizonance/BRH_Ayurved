import React from 'react';
import DepartmentLayout from '@/components/academics/DepartmentLayout';

export const metadata = { title: "Shalakya Tantra Department" };

const documents = [
  {
    "name": "Department info",
    "url": "/uploads/academics/\tDepartment info20250524_020633.pdf"
  },
  {
    "name": "Syllabus",
    "url": "/uploads/academics/Syllabus20250524_020704.pdf"
  },
  {
    "name": "ATP",
    "url": "/uploads/academics/ATP20250524_020729.pdf"
  },
  {
    "name": "ATP batch 2021-22",
    "url": "/uploads/academics/ATP batch 2021-2220260124_095100.pdf"
  },
  {
    "name": "Departmental info.",
    "url": "/uploads/academics/Departmental info.20260124_095231.pdf"
  }
];

const galleryImages = [
  "/uploads/gallery/1234520250524_021012_0.jpeg",
  "/uploads/gallery/1234520250524_021012_1.jpeg",
  "/uploads/gallery/1234520250524_021012_2.jpeg",
  "/uploads/gallery/1234520250524_021012_3.jpeg",
  "/uploads/gallery/1234520250524_021012_4.jpeg",
  "/uploads/gallery/1234520250524_021012_5.jpeg",
  "/uploads/gallery/1234520250524_021012_6.jpeg",
  "/uploads/gallery/1234520250524_021012_7.jpeg",
  "/uploads/gallery/1234520250524_021012_8.jpeg",
  "/uploads/gallery/1234520250524_021012_9.jpeg",
  "/uploads/gallery/1234520250524_021012_10.jpeg"
];

export default function DepartmentPage() {
  return (
    <DepartmentLayout 
      title="Shalakya Tantra"
      documents={documents}
      galleryImages={galleryImages}
    />
  );
}
