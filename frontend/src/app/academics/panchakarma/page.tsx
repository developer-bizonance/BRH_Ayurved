import React from 'react';
import DepartmentLayout from '@/components/academics/DepartmentLayout';

export const metadata = { title: "Panchakarma Department" };

const documents = [
  {
    "name": "ATP",
    "url": "https://www.brharneayurved.in/uploads/academics/ATP20250524_021541.pdf"
  },
  {
    "name": "Syllabus",
    "url": "https://www.brharneayurved.in/uploads/academics/Syllabus 20260106_090701.pdf"
  },
  {
    "name": "Departmental info.",
    "url": "https://www.brharneayurved.in/uploads/academics/Departmental info.20260106_091804.pdf"
  },
  {
    "name": "ATP batch 2021-22",
    "url": "https://www.brharneayurved.in/uploads/academics/ATP batch 2021-2220260106_105348.pdf"
  }
];

const galleryImages = [
  "https://www.brharneayurved.in/uploads/gallery/12320250524_022054_0.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/12320250524_022054_1.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/12320250524_022054_2.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/12320250524_022054_3.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/12320250524_022054_4.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/12320250524_022054_5.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/12320250524_022054_6.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/12320250524_022054_7.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/12320250524_022054_8.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/12320250524_022054_9.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/12320250524_022054_10.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/12320250524_022054_11.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/Madhavbaug Khopoli Educational Visit _69535e2e4e5f5.jpg",
  "https://www.brharneayurved.in/uploads/gallery/Raktmokshan Camp_69535e708ac33.jpg",
  "https://www.brharneayurved.in/uploads/gallery/Raktmokshan Camp_6981ffe9f2edd.shtml"
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
