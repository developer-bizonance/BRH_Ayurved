import React from 'react';
import DepartmentLayout from '@/components/academics/DepartmentLayout';

export const metadata = { title: "Shalya Tantra Department" };

const documents = [
  {
    "name": "Department info",
    "url": "/uploads/academics/\tDepartment info20250524_021124.pdf"
  },
  {
    "name": "ATP",
    "url": "/uploads/academics/ATP20250524_021217.pdf"
  },
  {
    "name": "Syllabus",
    "url": "/uploads/academics/Syllabus 20260106_100509.pdf"
  },
  {
    "name": "Departmental info.",
    "url": "/uploads/academics/Departmental info.20260115_070542.pdf"
  },
  {
    "name": "ATP batch 2021-22",
    "url": "/uploads/academics/ATP batch 2021-2220260115_070730.pdf"
  }
];

const galleryImages = [
  "/uploads/gallery/1220250524_021319_0.jpeg",
  "/uploads/gallery/Shalya 1_69436b2398409.jpg",
  "/uploads/gallery/Shalya 2_69436b46e968a.jpg",
  "/uploads/gallery/Shalya 3_69436b663b1c0.jpg",
  "/uploads/gallery/Shalya 4_695cdec37eae4.jpg",
  "/uploads/gallery/Shalya 5_695cdef53a4ee.jpg"
];

export default function DepartmentPage() {
  return (
    <DepartmentLayout 
      title="Shalya Tantra"
      documents={documents}
      galleryImages={galleryImages}
    />
  );
}
