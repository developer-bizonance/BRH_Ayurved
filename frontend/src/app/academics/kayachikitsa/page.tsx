import React from 'react';
import DepartmentLayout from '@/components/academics/DepartmentLayout';

export const metadata = { title: "Kayachikitsa Department" };

const documents = [
  {
    "name": "Department info",
    "url": "https://www.brharneayurved.in/uploads/academics/\tDepartment info20250524_020202.pdf"
  },
  {
    "name": "Syllabus",
    "url": "https://www.brharneayurved.in/uploads/academics/Syllabus20250524_020230.pdf"
  },
  {
    "name": "ATP",
    "url": "https://www.brharneayurved.in/uploads/academics/ATP20250524_020254.pdf"
  },
  {
    "name": "ATP batch 2021-22",
    "url": "https://www.brharneayurved.in/uploads/academics/ATP batch 2021-2220260106_105605.pdf"
  }
];

const galleryImages = [
  "https://www.brharneayurved.in/uploads/gallery/1234567820250524_020458_0.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/1234567820250524_020458_1.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/1234567820250524_020458_2.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/1234567820250524_020458_3.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/1234567820250524_020458_4.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/1234567820250524_020458_5.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/1234567820250524_020458_6.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/1234567820250524_020458_7.jpeg"
];

export default function DepartmentPage() {
  return (
    <DepartmentLayout 
      title="Kayachikitsa"
      documents={documents}
      galleryImages={galleryImages}
    />
  );
}
