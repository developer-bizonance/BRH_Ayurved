// Shared reusable page content data — used across all inner pages
// Swap these out with real API calls when DB is ready

export const collegeInfo = {
  name: "B. R. Harne Ayurvedic Medical College",
  location: "Karav-Vangani (W), Tal. Ambarnath, Dist. Thane",
  email: "brharneayurved3183@gmail.com",
  phone1: "9168694965",
  phone2: "9920255543",
  address: "202, Sunrise Galaxy, Gupte Road, Vishnunagar, Dombivli (W)",
  institutionCode: "NCISM AYU0590",
  collegeCode: "MUHS 121111",
  dmerCode: "3183",
};

export const departments = [
  "Kriya Sharir",
  "Rachna Sharir",
  "Samhita Sidhhanta",
  "Dravyaguna Vidnyana",
  "Rasashastra & Bhaishajya Kalpana",
  "Rog Nidan",
  "Swasthavritta & Yoga",
  "Agad Tantra Avum Vidhi Vaidyaka",
  "Prasuti & Stri Roga",
  "Kaumarbhritya (Bal Roga)",
  "Kayachikitsa",
  "Shalakya Tantra",
  "Shalya Tantra",
  "Panchakarma",
];

export const ugCourses = [
  {
    name: "Bachelor of Ayurvedic Medicine and Surgery (BAMS)",
    duration: "5.5 Years (including 1-year internship)",
    seats: "60 Seats",
    eligibility: "HSC (10+2) with Physics, Chemistry, Biology with minimum 50% marks. NEET qualification mandatory.",
    description:
      "The BAMS program is a comprehensive undergraduate degree that trains students in both classical Ayurvedic medicine and modern biomedical sciences. Students gain hands-on clinical experience through the attached 100-bedded hospital.",
    subjects: [
      "Padartha Vigyan & Ayurveda Itihas",
      "Sanskrit",
      "Kriya Sharir",
      "Rachna Sharir",
      "Maulik Siddhant Evum Ashtang Hridayam",
      "Dravyaguna Vigyan",
      "Rasashastra & Bhaishajya Kalpana",
      "Rog Nidan & Vikriti Vigyan",
      "Swasthavritta",
      "Kayachikitsa",
      "Shalakya Tantra",
      "Prasuti & Stri Roga",
      "Kaumarbhritya",
      "Shalya Tantra",
      "Panchakarma",
    ],
  },
];

export const pgCourses = [
  {
    name: "MD (Ayurveda) — Kayachikitsa",
    duration: "3 Years",
    seats: "As per MUHS norms",
    eligibility: "BAMS with minimum 55% marks. AIAPGET qualified.",
    description: "Post-Graduate program in Internal Medicine of Ayurveda.",
  },
  {
    name: "MD (Ayurveda) — Panchakarma",
    duration: "3 Years",
    seats: "As per MUHS norms",
    eligibility: "BAMS with minimum 55% marks. AIAPGET qualified.",
    description: "Post-Graduate program in Panchakarma — Ayurveda's classical detoxification and rejuvenation therapy.",
  },
  {
    name: "MS (Ayurveda) — Shalya Tantra",
    duration: "3 Years",
    seats: "As per MUHS norms",
    eligibility: "BAMS with minimum 55% marks. AIAPGET qualified.",
    description: "Post-Graduate program in Ayurvedic Surgery.",
  },
];

export const hospitalFacilities = [
  { name: "OPD (Out Patient Department)", icon: "🏥", description: "Daily OPD with specialist consultations" },
  { name: "IPD (In Patient Department)", icon: "🛏️", description: "100-bedded state-of-the-art hospital" },
  { name: "Panchakarma Therapy", icon: "🌿", description: "Classical Panchakarma treatments" },
  { name: "Operation Theatre", icon: "⚕️", description: "Major, Minor and Shalakya OT" },
  { name: "Clinical Laboratory", icon: "🔬", description: "Modern diagnostic laboratory" },
  { name: "Physiotherapy", icon: "💪", description: "Physiotherapy and rehabilitation" },
];

export const importantLinks = [
  { name: "Central Council of Indian Medicine (CCIM)", url: "https://ccim.nic.in/" },
  { name: "Ministry of AYUSH", url: "https://main.mohfw.gov.in/departments/departments-health-and-family-welfare/ayush" },
  { name: "Maharashtra University of Health Sciences (MUHS)", url: "https://www.muhs.ac.in/" },
  { name: "NCISM (National Commission for Indian System of Medicine)", url: "https://ncism.gov.in/" },
  { name: "DMER Maharashtra", url: "https://www.dmer.org/" },
  { name: "National Eligibility cum Entrance Test (NEET)", url: "https://neet.nta.nic.in/" },
  { name: "AIAPGET (All India Ayush PG Entrance Test)", url: "https://aiapget.nta.ac.in/" },
  { name: "Ministry of Education", url: "https://www.education.gov.in/" },
];
