import React from 'react';
import DepartmentLayout from '@/components/academics/DepartmentLayout';

export const metadata = { title: "Dravyaguna Vidnyana Department" };

const documents = [
  {
    "name": "Department info",
    "url": "https://www.brharneayurved.in/uploads/academics/Department info20250401_013854.pdf"
  },
  {
    "name": "Syllabus",
    "url": "https://www.brharneayurved.in/uploads/academics/Syllabus20250401_013948.pdf"
  },
  {
    "name": "ATP",
    "url": "https://www.brharneayurved.in/uploads/academics/ATP20250401_014030.pdf"
  },
  {
    "name": "ATP batch 2023-24",
    "url": "https://www.brharneayurved.in/uploads/academics/ATP batch 2023-2420260127_092452.pdf"
  }
];

const galleryImages = [
  "https://www.brharneayurved.in/uploads/gallery/120250401_014811_0.jpg",
  "https://www.brharneayurved.in/uploads/gallery/220250401_014828_0.jpg",
  "https://www.brharneayurved.in/uploads/gallery/320250401_014839_0.jpg",
  "https://www.brharneayurved.in/uploads/gallery/320250401_014859_0.jpg",
  "https://www.brharneayurved.in/uploads/gallery/3220250401_014929_0.jpg",
  "https://www.brharneayurved.in/uploads/gallery/420250401_014941_0.jpg",
  "https://www.brharneayurved.in/uploads/gallery/320250401_015002_0.jpg",
  "https://www.brharneayurved.in/uploads/gallery/520250401_015019_0.jpg",
  "https://www.brharneayurved.in/uploads/gallery/420250401_015052_0.jpg",
  "https://www.brharneayurved.in/uploads/gallery/420250401_015735_0.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/320250401_015752_0.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/5820250401_015807_0.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/dravyaguna_685d9489e8f17.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/dravyaguna_685d9489e9b57.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/dravyaguna_685d9489ea47a.jpeg",
  "https://www.brharneayurved.in/uploads/gallery/dravyaguna_685d9489eb457.png",
  "https://www.brharneayurved.in/uploads/gallery/dravyaguna_685d9489ec7f3.png",
  "https://www.brharneayurved.in/uploads/gallery/dravyaguna_685d9489ed87d.png",
  "https://www.brharneayurved.in/uploads/gallery/dravyaguna_685d9489ef469.png",
  "https://www.brharneayurved.in/uploads/gallery/dravyaguna_685d9489f00f4.png",
  "https://www.brharneayurved.in/uploads/gallery/dravyaguna_685d9489f0a1e.png",
  "https://www.brharneayurved.in/uploads/gallery/dravyaguna_685d9489f13a8.png",
  "https://www.brharneayurved.in/uploads/gallery/dravyaguna_685d9489f24c1.png",
  "https://www.brharneayurved.in/uploads/gallery/dravyaguna_685d9489f2edb.png",
  "https://www.brharneayurved.in/uploads/gallery/dravyaguna_685d9489f3d92.png",
  "https://www.brharneayurved.in/uploads/gallery/dravyaguna_685d948a00759.png"
];

export default function DepartmentPage() {
  return (
    <DepartmentLayout 
      title="Dravyaguna Vidnyana"
      documents={documents}
      galleryImages={galleryImages}
    />
  );
}
