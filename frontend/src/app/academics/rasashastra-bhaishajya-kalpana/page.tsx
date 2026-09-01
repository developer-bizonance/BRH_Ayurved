import React from 'react';
import DepartmentLayout from '@/components/academics/DepartmentLayout';

export const metadata = { title: "Rasashastra and Bhaishajya Kalpana Department" };

const documents = [
  {
    "name": "Department Info",
    "url": "/uploads/academics/Department Info20250401_020926.pdf"
  },
  {
    "name": "Syllabus",
    "url": "/uploads/academics/Syllabus20250401_021001.pdf"
  },
  {
    "name": "SY BAMS 2022-23 Theory ATP",
    "url": "/uploads/academics/SY BAMS 2022-23 Theory ATP20250401_021041.pdf"
  },
  {
    "name": "SY BAMS 2022-23 Practical ATP",
    "url": "/uploads/academics/SY BAMS 2022-23 Practical ATP20250401_021113.pdf"
  },
  {
    "name": "ATP batch 2023-24",
    "url": "/uploads/academics/ATP batch 2023-2420260116_091239.pdf"
  }
];

const galleryImages = [
  "/uploads/gallery/220250401_021645_0.jpg",
  "/uploads/gallery/320250401_021718_0.jpg",
  "/uploads/gallery/420250401_021738_0.jpg",
  "/uploads/gallery/620250401_021756_0.jpg",
  "/uploads/gallery/820250401_021823_0.jpg",
  "/uploads/gallery/6520250401_021841_0.jpg",
  "/uploads/gallery/620250401_021859_0.jpg",
  "/uploads/gallery/620250401_021917_0.jpg",
  "/uploads/gallery/rasashastra_685d959eb969d.jpeg",
  "/uploads/gallery/rasashastra_685d959eba9ef.jpeg",
  "/uploads/gallery/rasashastra_685d959ebb21b.jpeg",
  "/uploads/gallery/rasashastra_685d959ebd451.jpeg",
  "/uploads/gallery/rasashastra_685d959ebde16.jpeg",
  "/uploads/gallery/rasashastra_685d959ec021e.jpeg",
  "/uploads/gallery/rasashastra_685d959ec0eba.jpeg",
  "/uploads/gallery/rasashastra_685d959ec1cb2.jpeg"
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
