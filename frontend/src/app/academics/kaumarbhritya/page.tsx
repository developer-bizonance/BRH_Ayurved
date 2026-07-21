import React from 'react';
import DepartmentLayout from '@/components/academics/DepartmentLayout';

export const metadata = { title: "Kaumarbhritya (Bal Roga) Department" };

const documents = [
  {
    "name": "Department info",
    "url": "https://www.brharneayurved.in/uploads/academics/Department info20250524_015844.pdf"
  },
  {
    "name": "Syllabus",
    "url": "https://www.brharneayurved.in/uploads/academics/\tSyllabus20250524_015917.pdf"
  },
  {
    "name": "ATP",
    "url": "https://www.brharneayurved.in/uploads/academics/ATP20250524_015945.pdf"
  }
];

const galleryImages = [
  "https://www.brharneayurved.in/uploads/gallery/12320250524_020108_0.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/12320250524_020108_1.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/12320250524_020108_2.jpeg"
];

export default function DepartmentPage() {
  return (
    <DepartmentLayout 
      title="Kaumarbhritya (Bal Roga)"
      documents={documents}
      galleryImages={galleryImages}
    />
  );
}
