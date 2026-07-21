// API client for communicating with the Express backend
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

async function fetchAPI<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    next: { revalidate: 60 }, // Cache for 60 seconds
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export const api = {
  getNotices: () => fetchAPI<{ success: boolean; data: Notice[] }>('/notices'),
  getTeachingStaff: () => fetchAPI<{ success: boolean; data: Staff[] }>('/staff/teaching'),
  getNonTeachingStaff: () => fetchAPI<{ success: boolean; data: Staff[] }>('/staff/non-teaching'),
  getHospitalStaff: () => fetchAPI<{ success: boolean; data: Staff[] }>('/staff/hospital'),
  getStudents: (year?: string) =>
    fetchAPI<{ success: boolean; data: Student[] }>(`/admissions/students${year ? `?year=${year}` : ''}`),
  getInternalResults: () => fetchAPI<{ success: boolean; data: Result[] }>('/results/internal'),
  getUniversityResults: () => fetchAPI<{ success: boolean; data: Result[] }>('/results/university'),
  getGallery: (category?: string) =>
    fetchAPI<{ success: boolean; data: GalleryImage[] }>(`/gallery${category ? `?category=${category}` : ''}`),
  submitContact: async (data: ContactForm) => {
    const res = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return res.json();
  },
};

// Types
export interface Notice {
  id: number;
  title: string;
  url: string;
  isNew: boolean;
  date: string;
}

export interface Staff {
  id: number;
  name: string;
  designation: string;
  department: string;
  qualification?: string;
  experience?: string;
  email?: string;
  photo?: string | null;
}

export interface Student {
  id: number;
  year: string;
  rollNo: string;
  name: string;
  course: string;
  yearOfStudy: string;
  category: string;
}

export interface Result {
  id: number;
  rollNo: string;
  name: string;
  subject: string;
  yearOfStudy: string;
  marksObtained: number;
  totalMarks: number;
  result: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}
