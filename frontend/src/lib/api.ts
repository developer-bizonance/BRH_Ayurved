// Static Data for the Project
export const mockData = {
  notices: [
    {
      "id": 1,
      "title": "Prakriti Parikshan Report of CISF Unit JWC Mumbai and RCP Mumbai with 08 volunteers on 16-01-2025",
      "url": "/uploads/whats_new/prakriti_parikshan_report.pdf",
      "isNew": true,
      "date": "2025-03-25"
    },
    {
      "id": 2,
      "title": "Community Health Check up Camp",
      "url": "/uploads/whats_new/community_health_camp.pdf",
      "isNew": true,
      "date": "2025-03-31"
    },
    {
      "id": 3,
      "title": "Run For Ayurveda Students Prize Achievement",
      "url": "/uploads/whats_new/run_for_ayurveda.pdf",
      "isNew": true,
      "date": "2026-02-14"
    },
    {
      "id": 4,
      "title": "Spandan 2026",
      "url": "/uploads/whats_new/spandan_2026.pdf",
      "isNew": true,
      "date": "2026-05-16"
    },
    {
      "id": 5,
      "title": "Summer Vacation 2026",
      "url": "/uploads/whats_new/summer_vacation_2026.pdf",
      "isNew": true,
      "date": "2026-05-18"
    }
  ],
  teachingStaff: [
    {
      "id": 1,
      "name": "Dr. Sample Professor",
      "designation": "Professor & HOD",
      "department": "Kriya Sharir",
      "qualification": "MD (Ayu), PhD",
      "experience": "15 years",
      "email": "professor@brharneayurved.in",
      "photo": null
    },
    {
      "id": 2,
      "name": "Dr. Another Faculty",
      "designation": "Associate Professor",
      "department": "Rachna Sharir",
      "qualification": "MD (Ayu)",
      "experience": "10 years",
      "email": "faculty2@brharneayurved.in",
      "photo": null
    },
    {
      "id": 3,
      "name": "Dr. Sample Assistant",
      "designation": "Assistant Professor",
      "department": "Kayachikitsa",
      "qualification": "MD (Ayu)",
      "experience": "6 years",
      "email": "faculty3@brharneayurved.in",
      "photo": null
    }
  ],
  nonTeachingStaff: [
    { "id": 1, "name": "Sample Staff", "designation": "Office Superintendent", "department": "Administration", "photo": null },
    { "id": 2, "name": "Another Staff", "designation": "Librarian", "department": "Library", "photo": null },
    { "id": 3, "name": "Support Staff", "designation": "Lab Technician", "department": "Laboratory", "photo": null }
  ],
  hospitalStaff: [
    { "id": 1, "name": "Dr. Hospital Doctor", "designation": "Medical Officer", "department": "OPD", "photo": null },
    { "id": 2, "name": "Hospital Staff 2", "designation": "Staff Nurse", "department": "IPD", "photo": null }
  ],
  students: [
    {
      "id": 1,
      "year": "2024-25",
      "rollNo": "BRH001",
      "name": "Sample Student 1",
      "course": "BAMS",
      "yearOfStudy": "1st Year",
      "category": "General"
    },
    {
      "id": 2,
      "year": "2024-25",
      "rollNo": "BRH002",
      "name": "Sample Student 2",
      "course": "BAMS",
      "yearOfStudy": "2nd Year",
      "category": "OBC"
    },
    {
      "id": 3,
      "year": "2024-25",
      "rollNo": "BRH003",
      "name": "Sample Student 3",
      "course": "BAMS",
      "yearOfStudy": "3rd Year",
      "category": "SC"
    }
  ],
  internalResults: [
    {
      "id": 1,
      "rollNo": "BRH001",
      "name": "Sample Student 1",
      "subject": "Kriya Sharir",
      "yearOfStudy": "1st Year",
      "marksObtained": 72,
      "totalMarks": 100,
      "result": "Pass"
    },
    {
      "id": 2,
      "rollNo": "BRH002",
      "name": "Sample Student 2",
      "subject": "Rachna Sharir",
      "yearOfStudy": "2nd Year",
      "marksObtained": 85,
      "totalMarks": 100,
      "result": "Pass"
    }
  ],
  universityResults: [],
  gallery: [
    { id: 1, src: '/uploads/gallery/s5_6887522893bda.jpg', alt: 'College Campus', category: 'campus' },
    { id: 2, src: '/uploads/gallery/s4_6887521a21f4b.jpg', alt: 'College Activity', category: 'events' },
    { id: 3, src: '/uploads/gallery/s3_6887520d7c678.jpg', alt: 'College Event', category: 'events' },
    { id: 4, src: '/uploads/gallery/s2_688751fea85d4.png', alt: 'Campus View', category: 'campus' },
    { id: 5, src: '/uploads/gallery/s1_688751f0272d4.png', alt: 'College Banner', category: 'events' }
  ]
};

// Mock API client for static project
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
  getNotices: async () => {
    await delay(300);
    return { success: true, data: mockData.notices };
  },
  getTeachingStaff: async () => {
    await delay(300);
    return { success: true, data: mockData.teachingStaff };
  },
  getNonTeachingStaff: async () => {
    await delay(300);
    return { success: true, data: mockData.nonTeachingStaff };
  },
  getHospitalStaff: async () => {
    await delay(300);
    return { success: true, data: mockData.hospitalStaff };
  },
  getStudents: async (year?: string) => {
    await delay(300);
    let data = mockData.students;
    if (year) {
      data = data.filter(s => s.year === year);
    }
    return { success: true, data };
  },
  getInternalResults: async () => {
    await delay(300);
    return { success: true, data: mockData.internalResults };
  },
  getUniversityResults: async () => {
    await delay(300);
    return { success: true, data: mockData.universityResults };
  },
  getGallery: async (category?: string) => {
    await delay(300);
    let data = mockData.gallery;
    if (category && category !== 'all') {
      data = data.filter(img => img.category === category);
    }
    return { success: true, data };
  },
  submitContact: async (data: ContactForm) => {
    await delay(500);
    console.log("Contact form submitted:", data);
    return { success: true, message: "Thank you! Your message has been sent successfully." };
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
