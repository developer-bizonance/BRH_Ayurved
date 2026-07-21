import React from 'react';
import DepartmentLayout from '@/components/academics/DepartmentLayout';

export const metadata = { title: "Rasashastra and Bhaishajya Kalpana Department" };

const documents = [
  {
    "name": "Department Info",
    "url": "https://www.brharneayurved.in/uploads/academics/Department Info20250401_020926.pdf"
  },
  {
    "name": "Syllabus",
    "url": "https://www.brharneayurved.in/uploads/academics/Syllabus20250401_021001.pdf"
  },
  {
    "name": "SY BAMS 2022-23 Theory ATP",
    "url": "https://www.brharneayurved.in/uploads/academics/SY BAMS 2022-23 Theory ATP20250401_021041.pdf"
  },
  {
    "name": "SY BAMS 2022-23 Practical ATP",
    "url": "https://www.brharneayurved.in/uploads/academics/SY BAMS 2022-23 Practical ATP20250401_021113.pdf"
  },
  {
    "name": "ATP batch 2023-24",
    "url": "https://www.brharneayurved.in/uploads/academics/ATP batch 2023-2420260116_091239.pdf"
  }
];

const galleryImages = [
  "https://www.brharneayurved.in/uploads/gallery/220250401_021645_0.jpg",
  "https://www.brharneayurved.in/uploads/gallery/320250401_021718_0.jpg",
  "https://www.brharneayurved.in/uploads/gallery/420250401_021738_0.jpg",
  "https://www.brharneayurved.in/uploads/gallery/620250401_021756_0.jpg",
  "https://www.brharneayurved.in/uploads/gallery/820250401_021823_0.jpg",
  "https://www.brharneayurved.in/uploads/gallery/6520250401_021841_0.jpg",
  "https://www.brharneayurved.in/uploads/gallery/620250401_021859_0.jpg",
  "https://www.brharneayurved.in/uploads/gallery/620250401_021917_0.jpg",
  "https://www.brharneayurved.in/uploads/gallery/rasashastra_685d959eb969d.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/rasashastra_685d959eba9ef.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/rasashastra_685d959ebb21b.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/rasashastra_685d959ebd451.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/rasashastra_685d959ebde16.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/rasashastra_685d959ec021e.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/rasashastra_685d959ec0eba.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/rasashastra_685d959ec1cb2.jpeg"
];

export default function DepartmentPage() {
  return (
    <DepartmentLayout 
      title="Rasashastra and Bhaishajya Kalpana"
      documents={documents}
      galleryImages={galleryImages}
    />
  );
}
