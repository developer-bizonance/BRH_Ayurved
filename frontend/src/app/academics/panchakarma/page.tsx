import React from 'react';
import DepartmentLayout from '@/components/academics/DepartmentLayout';

export const metadata = { title: "Panchakarma Department" };

const documents = [
  {
    "name": "ATP",
    "url": "/uploads/academics/ATP20250524_021541.pdf"
  },
  {
    "name": "Syllabus",
    "url": "/uploads/academics/Syllabus 20260106_090701.pdf"
  },
  {
    "name": "Departmental info.",
    "url": "/uploads/academics/Departmental info.20260106_091804.pdf"
  },
  {
    "name": "ATP batch 2021-22",
    "url": "/uploads/academics/ATP batch 2021-2220260106_105348.pdf"
  }
];

const galleryImages = [
  "/uploads/gallery/12320250524_022054_0.jpeg",
  "/uploads/gallery/12320250524_022054_1.jpeg",
  "/uploads/gallery/12320250524_022054_2.jpeg",
  "/uploads/gallery/12320250524_022054_3.jpeg",
  "/uploads/gallery/12320250524_022054_4.jpeg",
  "/uploads/gallery/12320250524_022054_5.jpeg",
  "/uploads/gallery/12320250524_022054_6.jpeg",
  "/uploads/gallery/12320250524_022054_7.jpeg",
  "/uploads/gallery/12320250524_022054_8.jpeg",
  "/uploads/gallery/12320250524_022054_9.jpeg",
  "/uploads/gallery/12320250524_022054_10.jpeg",
  "/uploads/gallery/12320250524_022054_11.jpeg",
  "/uploads/gallery/Madhavbaug Khopoli Educational Visit _69535e2e4e5f5.jpg",
  "/uploads/gallery/Raktmokshan Camp_69535e708ac33.jpg",
  "/uploads/gallery/Raktmokshan Camp_6981ffe9f2edd.shtml"
];

export default function DepartmentPage() {
  return (
    <DepartmentLayout 
      title="Panchakarma"
      documents={documents}
      galleryImages={galleryImages}
    />
  );
}
