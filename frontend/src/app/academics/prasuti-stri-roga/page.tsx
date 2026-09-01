import React from 'react';
import DepartmentLayout from '@/components/academics/DepartmentLayout';

export const metadata = { title: "Prasuti and Stri Roga Department" };

const documents = [
  {
    "name": "Syllabus",
    "url": "/uploads/academics/Syllabus20250524_015533.pdf"
  },
  {
    "name": "ATP",
    "url": "/uploads/academics/ATP20250524_015605.pdf"
  },
  {
    "name": "ATP batch 2021-22",
    "url": "/uploads/academics/ATP batch 2021-2220260116_091143.pdf"
  },
  {
    "name": "Departmental info.",
    "url": "/uploads/academics/Departmental info.20260202_053415.pdf"
  }
];

const galleryImages = [
  "/uploads/gallery/123420250524_015734_0.jpeg",
  "/uploads/gallery/123420250524_015734_1.jpeg",
  "/uploads/gallery/123420250524_015734_2.jpeg",
  "/uploads/gallery/123420250524_015734_3.jpeg"
];

export default function DepartmentPage() {
  return (
    <DepartmentLayout 
      title="Prasuti and Stri Roga"
      documents={documents}
      galleryImages={galleryImages}
    />
  );
}
