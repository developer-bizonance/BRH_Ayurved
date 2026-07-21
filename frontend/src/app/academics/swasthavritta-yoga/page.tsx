import React from 'react';
import DepartmentLayout from '@/components/academics/DepartmentLayout';

export const metadata = { title: "Swasthavritta Yoga Department" };

const documents = [
  {
    "name": "Department Info.",
    "url": "https://www.brharneayurved.in/uploads/academics/Department Info.20250408_115347.pdf"
  },
  {
    "name": "Syllabus",
    "url": "https://www.brharneayurved.in/uploads/academics/Syllabus20250408_115428.pdf"
  },
  {
    "name": "ATP - SY Batch 2021-22",
    "url": "https://www.brharneayurved.in/uploads/academics/ATP - SY Batch 2021-2220250408_115653.pdf"
  },
  {
    "name": "ATP - SY Batch 2022-23",
    "url": "https://www.brharneayurved.in/uploads/academics/ATP - SY Batch 2022-2320250408_115746.pdf"
  },
  {
    "name": "ATP batch 2023-24",
    "url": "https://www.brharneayurved.in/uploads/academics/ATP batch 2023-2420260115_065843.pdf"
  }
];

const galleryImages = [
  "https://www.brharneayurved.in/uploads/gallery/32320250408_120418_0.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/3432520250408_120436_0.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/65620250408_120449_0.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/6546520250408_120505_0.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/453420250408_120527_0.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/345320250408_120538_0.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/42320250408_120556_0.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/4620250408_120607_0.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/343220250408_120656_0.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/4620250408_120723_0.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/3520250408_120742_0.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/520250408_120755_0.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/5520250408_120814_0.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/56820250408_120828_0.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/546420250408_120840_0.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/907720250408_120851_0.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/Sewage treatment plant Visit_69736515ac005.jpg",
  "https://www.brharneayurved.in/uploads/gallery/Naturopathy Center educational Visit at Jaipur _697365e2c546b.jpg",
  "https://www.brharneayurved.in/uploads/gallery/Slaughter House Visit Deonar_6973663b8e731.jpg"
];

export default function DepartmentPage() {
  return (
    <DepartmentLayout 
      title="Swasthavritta Yoga"
      documents={documents}
      galleryImages={galleryImages}
    />
  );
}
