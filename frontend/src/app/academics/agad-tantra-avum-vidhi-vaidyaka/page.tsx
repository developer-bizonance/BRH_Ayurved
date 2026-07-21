import React from 'react';
import DepartmentLayout from '@/components/academics/DepartmentLayout';

export const metadata = { title: "Agad Tantra Avum Vidhi Vaidyaka Department" };

const documents = [
  {
    "name": "Department Info.",
    "url": "https://www.brharneayurved.in/uploads/academics/Department Info.20250408_121234.pdf"
  },
  {
    "name": "Syllabus",
    "url": "https://www.brharneayurved.in/uploads/academics/Syllabus20250408_121325.pdf"
  },
  {
    "name": "ATP - September 2022",
    "url": "https://www.brharneayurved.in/uploads/academics/ATP - September 202220250628_102524.pdf"
  },
  {
    "name": "ATP - October 2022",
    "url": "https://www.brharneayurved.in/uploads/academics/ATP - October 202220250628_102629.pdf"
  },
  {
    "name": "ATP  2022 -2023",
    "url": "https://www.brharneayurved.in/uploads/academics/ATP  2022 -202320250628_102747.pdf"
  },
  {
    "name": "ATP batch 2023-24",
    "url": "https://www.brharneayurved.in/uploads/academics/ATP batch 2023-2420260115_065708.pdf"
  }
];

const galleryImages = [
  "https://www.brharneayurved.in/uploads/gallery/23420250408_122555_0.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/520250408_122610_0.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/54620250408_122625_0.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/654620250408_122701_0.jpeg"
];

export default function DepartmentPage() {
  return (
    <DepartmentLayout 
      title="Agad Tantra Avum Vidhi Vaidyaka"
      documents={documents}
      galleryImages={galleryImages}
    />
  );
}
