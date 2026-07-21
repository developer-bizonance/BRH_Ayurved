import React from 'react';
import DepartmentLayout from '@/components/academics/DepartmentLayout';

export const metadata = { title: "Prasuti and Stri Roga Department" };

const documents = [
  {
    "name": "Syllabus",
    "url": "https://www.brharneayurved.in/uploads/academics/Syllabus20250524_015533.pdf"
  },
  {
    "name": "ATP",
    "url": "https://www.brharneayurved.in/uploads/academics/ATP20250524_015605.pdf"
  },
  {
    "name": "ATP batch 2021-22",
    "url": "https://www.brharneayurved.in/uploads/academics/ATP batch 2021-2220260116_091143.pdf"
  },
  {
    "name": "Departmental info.",
    "url": "https://www.brharneayurved.in/uploads/academics/Departmental info.20260202_053415.pdf"
  }
];

const galleryImages = [
  "https://www.brharneayurved.in/uploads/gallery/123420250524_015734_0.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/123420250524_015734_1.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/123420250524_015734_2.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/123420250524_015734_3.jpeg"
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
