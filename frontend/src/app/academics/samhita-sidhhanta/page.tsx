import React from 'react';
import DepartmentLayout from '@/components/academics/DepartmentLayout';

export const metadata = { title: "Samhita Sidhhanta Department" };

const documents = [
  {
    "name": "Department info",
    "url": "/uploads/academics/Department info20250401_010835.pdf"
  },
  {
    "name": "SYLLABUS - PADARTHA VIJNANAM",
    "url": "/uploads/academics/SYLLABUS - PADARTHA VIJNANAM 20250628_100508.pdf"
  },
  {
    "name": "SYLLABUS - SAMHITA ADHYAYAN - 1",
    "url": "/uploads/academics/SYLLABUS - SAMHITA ADHYAYAN - 120250628_100806.pdf"
  },
  {
    "name": "SYLLABUS - SAMHITA ADHYAYAN - 2",
    "url": "/uploads/academics/SYLLABUS - SAMHITA ADHYAYAN - 220250628_100903.pdf"
  },
  {
    "name": "SYLLABUS - SAMSKRITAM EVAM AYURVED ITHIHAS",
    "url": "/uploads/academics/SYLLABUS - SAMSKRITAM EVAM AYURVED ITHIHAS20250628_100948.pdf"
  },
  {
    "name": "ATP batch 2023-24",
    "url": "/uploads/academics/ATP batch 2023-2420260115_065936.pdf"
  },
  {
    "name": "Yearly SA1 ATP batch 2025-26",
    "url": "/uploads/academics/Yearly SA1 ATP batch 2025-2620260205_114239.pdf"
  },
  {
    "name": "Yearly PV1 ATP batch 2025-26",
    "url": "/uploads/academics/Yearly PV1 ATP batch 2025-2620260205_114419.pdf"
  },
  {
    "name": "Yearly SA2 ATP batch 2024-25",
    "url": "/uploads/academics/Yearly SA2 ATP batch 2024-2520260205_114509.pdf"
  },
  {
    "name": "Yearly SA3 ATP batch 2021-22",
    "url": "/uploads/academics/Yearly SA3 ATP batch 2021-2220260205_114637.pdf"
  }
];

const galleryImages = [
  "/uploads/gallery/120250401_012634_0.jpg",
  "/uploads/gallery/220250401_012658_0.jpg",
  "/uploads/gallery/320250401_012711_0.jpg",
  "/uploads/gallery/420250401_012726_0.jpg",
  "/uploads/gallery/520250401_012753_0.jpg",
  "/uploads/gallery/620250401_012840_0.jpg",
  "/uploads/gallery/720250401_012901_0.jpg",
  "/uploads/gallery/820250401_012917_0.jpg",
  "/uploads/gallery/920250401_012939_0.jpg",
  "/uploads/gallery/1120250401_013001_0.jpg",
  "/uploads/gallery/1220250401_013016_0.jpg",
  "/uploads/gallery/1320250401_013035_0.jpg",
  "/uploads/gallery/1420250401_013058_0.jpg",
  "/uploads/gallery/1520250401_013114_0.jpg",
  "/uploads/gallery/1620250401_013130_0.jpg",
  "/uploads/gallery/1720250401_013147_0.jpg",
  "/uploads/gallery/1820250401_013205_0.jpg",
  "/uploads/gallery/1920250401_013219_0.jpg",
  "/uploads/gallery/2020250401_013236_0.jpg",
  "/uploads/gallery/120250401_013258_0.jpeg",
  "/uploads/gallery/220250401_013317_0.jpeg",
  "/uploads/gallery/320250401_013333_0.jpeg",
  "/uploads/gallery/420250401_013347_0.jpeg",
  "/uploads/gallery/520250401_013401_0.jpeg",
  "/uploads/gallery/620250401_013415_0.jpeg",
  "/uploads/gallery/720250401_013428_0.jpeg",
  "/uploads/gallery/920250401_013441_0.jpeg",
  "/uploads/gallery/1020250401_013454_0.jpeg",
  "/uploads/gallery/1120250401_013507_0.jpeg",
  "/uploads/gallery/1220250401_013519_0.jpeg",
  "/uploads/gallery/1320250401_013536_0.jpeg",
  "/uploads/gallery/1420250401_013551_0.jpeg",
  "/uploads/gallery/1520250401_013606_0.jpeg",
  "/uploads/gallery/1620250401_013623_0.jpeg"
];

export default function DepartmentPage() {
  return (
    <DepartmentLayout 
      title="Samhita Sidhhanta"
      documents={documents}
      galleryImages={galleryImages}
    />
  );
}
