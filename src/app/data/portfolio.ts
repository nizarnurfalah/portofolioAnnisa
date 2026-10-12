export interface ClinicalSkill {
  category: string;
  description: string;
  items: string[];
}

export interface Experience {
  id: string;
  role: string;
  institution: string;
  period: string;
  location: string;
  type: "Clinical" | "Community" | "Organization";
  badge: string;
  summaryDescription?: string;
  description: string[];
  images: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  period?: string;
  description: string;
  highlights: string[];
  images: string[];
  badge?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  image?: string;
  pdfUrl?: string;
  credentialUrl?: string;
  driveUrl?: string;
  badge?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  faculty?: string;
  period: string;
  gpa?: string;
  description: string;
  achievements?: string[];
}

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const getAssetUrl = (path: string): string => {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) return path;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
};

export const personalInfo = {
  fullName: "Annisa Haura Salshabira",
  nickname: "Caca",
  role: "Bachelor of Applied Midwifery | Public Health | Healthcare Administration & Operations",
  roleShort: "Bachelor of Applied Science in Midwifery",
  institution: "Faculty of Medicine, Universitas Padjadjaran",
  location: "Bandung, West Java, Indonesia",
  domicileText: "Based in Bandung, West Java, Indonesia. Open for relocation and professional placement across various regions.",
  email: "haurasalshabira@gmail.com",
  linkedin: "https://www.linkedin.com/in/annisahaurasalshabira",
  instagram: "https://www.instagram.com/annisahauraaa/",
  cvUrl: "https://drive.google.com/file/d/1JADyuOp9wWJJPfHrcxsXoL1HIrzKh5Jt/view?usp=sharing",
  journalUrl: "https://journal.umpr.ac.id/index.php/pengabdianmu/article/view/10505",
  journalDriveUrl: "https://drive.google.com/file/d/1S6yS9HR970C1IOlaBpWH9dLWe69ZTP6h/view?usp=sharing",
  summary:
    "A healthcare-trained professional with experience in healthcare services, administrative documentation, research, and organizational coordination. Experienced across 3 healthcare institutions, with 1 year in student development at HIMA Kebidanan Unpad and 5 months as Head of the Facilitator Division at NAVIYARA, leading 8 facilitators and coordinating a program for 39 incoming students. Academic achievements include a scientific publication and registered intellectual property (HAKI).\n\nAspiring to build a career in healthcare administration, medical claims verification, and corporate operations, I aim to apply my analytical, organizational, and communication skills to support accurate documentation and efficient workflows.",
  highlights: [
    { value: "3.90 / 4.00", label: "GPA from Universitas Padjadjaran" },
    { value: "39+ Participants", label: "Managed & Mentored in Programs" },
    { value: "8 Team Members", label: "Coordinated as Head of Division" },
    { value: "HAKI & Publication", label: "Official Intellectual Property & Peer-Reviewed Journal" },
  ],
};

export const nonFormalPhotos = [
  {
    url: getAssetUrl("/fotononformal/Annisa Haura Salshabira-3.jpg"),
    caption: "Academic & Campus Moments",
  },
  {
    url: getAssetUrl("/fotononformal/Annisa Haura Salshabira-44.jpg"),
    caption: "Student Community Engagement",
  },
  {
    url: getAssetUrl("/fotononformal/Annisa Haura Salshabira-45.jpg"),
    caption: "Mentorship & Leadership",
  },
  {
    url: getAssetUrl("/fotononformal/Annisa Haura Salshabira-47.jpg"),
    caption: "Cross-Disciplinary Teamwork",
  },
  {
    url: getAssetUrl("/fotononformal/Annisa Haura Salshabira-48.jpg"),
    caption: "Healthcare & Campus Activities",
  },
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Applied Science in Midwifery",
    institution: "Universitas Padjadjaran",
    faculty: "Faculty of Medicine · Direct-Entry Midwifery Program",
    period: "Aug 2022 – Jun 2026",
    gpa: "GPA: 3.90/4.00 (Cumlaude)",
    description:
      "Comprehensive academic and clinical education covering maternal-neonatal health, health administration, clinical diagnostics, and family-centered community health.",
    achievements: [
      "Official Intellectual Property (HAKI) from Ministry of Law & Human Rights RI for MP-ASI Handbook",
      "Head of Facilitator Division at Naviyara Midwifery Student Orientation",
      "Author of published peer-reviewed community health journal (PengabdianMu, 2026)",
    ],
  },
  {
    degree: "Natural Sciences (MIPA)",
    institution: "SMA Kartika XIX-1 Bandung",
    period: "Jun 2019 – May 2022",
    gpa: "Final Grade: 89.87/100.00",
    description:
      "Graduated with honors in Natural Sciences. Actively engaged in school cultural and publication initiatives.",
  },
];

export const skillsAndCompetencies = [
  {
    category: "Administrative & Documentation",
    description: "Standardized medical records, patient data filing, and administrative workflow governance.",
    items: [
      "Medical record documentation",
      "Data collection and recordkeeping",
      "Document organization",
      "Patient information management",
    ],
  },
  {
    category: "Data & Digital Tools",
    description: "Proficiency in workplace productivity suites and data analytics software.",
    items: [
      "Microsoft Office (Word, Excel, PowerPoint)",
      "Google Workspace",
      "Basic SPSS (Data Analysis)",
      "Canva (Visual Communication)",
      "Basic data reporting",
    ],
  },
  {
    category: "Healthcare Competencies",
    description: "Patient-centered maternal-child clinical support, triage, and preventive health practices.",
    items: [
      "Clinical documentation",
      "Maternal and child health services",
      "Health education",
      "Community health assessment",
      "Patient safety and infection prevention",
    ],
  },
  {
    category: "Professional Skills",
    description: "Core competencies supporting operational efficiency and collaborative success.",
    items: [
      "Cross-functional team coordination",
      "Professional communication",
      "High attention to detail",
      "Time management & prioritization",
      "Adaptability & continuous learning",
    ],
  },
];

const rawClinicalExperiences: Experience[] = [
  {
    id: "rsud-syamsudin",
    role: "Clinical Midwifery Internship",
    institution: "RSUD R. Syamsudin, SH. Sukabumi",
    period: "Apr 2025 – Jun 2025 (3 Months)",
    location: "Sukabumi, West Java",
    type: "Clinical",
    badge: "Provincial Referral Hospital",
    summaryDescription:
      "Gained clinical experience across 4 service areas, handling 6+ obstetric and gynecological case types, including high-risk pregnancies and emergency conditions, while supporting continuous patient care in a dynamic hospital environment.",
    description: [
      "Assisted with clinical procedures and diagnostic examinations.",
      "Coordinated with multidisciplinary healthcare teams to ensure accurate information flow and continuity of care.",
      "Maintained timely clinical documentation while adhering to patient safety and infection prevention practices.",
    ],
    images: [
      "/Magang/Clinical Midwifery Intern RSUD R. Syamsudin, SH. Sukabumi · Magang/1788756910391.jpg",
      "/Magang/Clinical Midwifery Intern RSUD R. Syamsudin, SH. Sukabumi · Magang/1788756910134.jpg",
      "/Magang/Clinical Midwifery Intern RSUD R. Syamsudin, SH. Sukabumi · Magang/1788756910265.jpg",
    ],
  },
  {
    id: "puskesmas-padasuka",
    role: "Clinical Midwifery Internship",
    institution: "UPTD Puskesmas Padasuka Kota Bandung",
    period: "Aug 2024 – Oct 2024 (3 Months)",
    location: "Bandung, West Java",
    type: "Clinical",
    badge: "Primary Healthcare Center",
    summaryDescription:
      "Supported maternal and child healthcare services, managing 30+ ANC visits, 5 deliveries, and 7 PNC visits, including patient assessments, documentation, and follow-ups.",
    description: [
      "Supported newborn care, immunization, KPSP screening, and family planning services.",
      "Delivered maternal and child health education to promote preventive healthcare and improve patient understanding.",
      "Maintained accurate patient records and coordinated with healthcare teams to support continuity of care.",
    ],
    images: [
      "/Magang/Clinical Midwifery Intern UPTD Puskesmas Padasuka Kota Bandung · Magang/1788755121646.jpg",
      "/Magang/Clinical Midwifery Intern UPTD Puskesmas Padasuka Kota Bandung · Magang/1788755121835.jpg",
      "/Magang/Clinical Midwifery Intern UPTD Puskesmas Padasuka Kota Bandung · Magang/1788755121371.jpg",
    ],
  },
  {
    id: "rshs-bandung",
    role: "Basic Midwifery Skills Internship",
    institution: "RSUP Dr. Hasan Sadikin Bandung (RSHS)",
    period: "Jun 2023 – Jul 2023 (2 Months)",
    location: "Bandung, West Java",
    type: "Clinical",
    badge: "Top National Referral Hospital",
    summaryDescription:
      "Completed foundational clinical training in a hospital setting, gaining exposure to midwifery service workflows and patient care practices.",
    description: [
      "Maintained accurate and organized medical records in accordance with healthcare documentation standards.",
      "Coordinated patient information with healthcare teams to support clear communication and efficient information flow.",
      "Followed established procedures for basic clinical tasks, patient safety, and infection prevention.",
    ],
    images: [
      "/Magang/Intern Basic Midwifery Skills Intern RSUP Dr. Hasan Sadikin Bandung · Magang/1788753108621.jpg",
      "/Magang/Intern Basic Midwifery Skills Intern RSUP Dr. Hasan Sadikin Bandung · Magang/1788753108644.jpg",
    ],
  },
  {
    id: "unpad-komunitas",
    role: "Community Midwifery Practice",
    institution: "Universitas Padjadjaran",
    period: "Dec 2023 – Jan 2024 (2 Months)",
    location: "Desa Cilayung, Sumedang, West Java",
    type: "Community",
    badge: "Community Health Placement",
    summaryDescription:
      "Participated in community-based healthcare activities, gaining experience in household assessments, community health needs identification, and planning appropriate follow-up actions.",
    description: [
      "Successfully implemented 9 community health intervention programs in collaboration with a student team.",
      "Assessed 55 households to document community health needs and identify priority issues.",
      "Contributed to measurable behavior changes through targeted community health education and interventions.",
    ],
    images: [
      "/Magang/Midwifery Community Intern Universitas Padjadjaran · Magang/1788844787993.jpg",
      "/Magang/Midwifery Community Intern Universitas Padjadjaran · Magang/1788845091019.jpg",
      "/Magang/Midwifery Community Intern Universitas Padjadjaran · Magang/1788845157776.jpg",
    ],
  },
];

export const clinicalExperiences: Experience[] = rawClinicalExperiences.map(
  (exp) => ({
    ...exp,
    images: exp.images.map(getAssetUrl),
  })
);

const rawProjectsData: ProjectItem[] = [
  {
    id: "project-bhakti-kencana",
    title: "Adolescent Health Education Outreach at SMK Bhakti Kencana Cileunyi",
    category: "Health Promotion",
    badge: "School Outreach",
    description:
      "A school-based health education program designed to raise adolescents’ awareness of reproductive health, personal hygiene, and social risks affecting their well-being.",
    highlights: [
      "Served as Master of Ceremonies (MC), facilitating the flow of the educational program.",
      "Facilitated educational sessions on early marriage, premarital sex, and reproductive health.",
      "Supported awareness-building on personal hygiene, pornography prevention, and sexual harassment.",
    ],
    images: [
      "/Project/Adolescent Health Education Outreach at SMK Bhakti Kencana Cileunyi/1788922924066.jpg",
    ],
  },
  {
    id: "project-padjadjaran-clinic",
    title: "Integrated Antenatal Care (ANC) at Padjadjaran Clinic",
    category: "Clinical Placement",
    badge: "Primary Clinical Care",
    description:
      "A supervised clinical placement focused on antenatal examinations, maternal and fetal health monitoring, and pregnancy counseling at Padjadjaran Clinic.",
    highlights: [
      "Conducted antenatal examinations, including Leopold maneuvers and fetal heart rate assessment using a Doppler device.",
      "Monitored vital signs, maternal weight, and pregnancy conditions to support risk identification.",
      "Provided counseling on pregnancy nutrition and birth preparedness under clinical supervision.",
    ],
    images: [
      "/Project/Antenatal Care (ANC) at Padjadjaran Clinic/1788921774641.jpg",
      "/Project/Antenatal Care (ANC) at Padjadjaran Clinic/1788921775014.jpg",
    ],
  },
  {
    id: "project-gigi-sehat",
    title: "Aksi Gigi Sehat – Community Oral Health Education",
    category: "Community Outreach",
    badge: "Primary School Health",
    description:
      "A community outreach project at SDN Cibeusi aimed at improving elementary students’ awareness of oral hygiene and healthy daily habits.",
    highlights: [
      "Coordinated external communications and school permissions to support program implementation.",
      "Delivered interactive oral health education to elementary school students.",
      "Demonstrated proper toothbrushing techniques to encourage healthy oral hygiene practices.",
    ],
    images: [
      "/Project/Aksi Gigi Sehat - Community Oral Health Education/1788842438293.jpg",
    ],
  },
  {
    id: "project-gemas",
    title: "Health Promotion: GEMAS (Gerakan Masyarakat Sehat)",
    category: "Community Health",
    badge: "Preventive Care",
    description:
      "A community health promotion program in Desa Cilayung focused on Clean and Healthy Living Behaviors (PHBS) and basic health screening for older residents.",
    highlights: [
      "Delivered health education on smoking awareness, mosquito larvae control, and waste sorting.",
      "Assisted with blood pressure, blood glucose, and cholesterol screening for older residents.",
      "Supported community awareness of disease prevention and routine health monitoring.",
    ],
    images: [
      "/Magang/Midwifery Community Intern Universitas Padjadjaran · Magang/1788844787993.jpg",
      "/Magang/Midwifery Community Intern Universitas Padjadjaran · Magang/1788845091019.jpg",
    ],
  },
  {
    id: "project-gemasting",
    title: "Community Health Promotion through GEMASTING & KEMAYUNG",
    category: "Maternal & Child Health",
    badge: "Stunting Prevention",
    description:
      "A community health promotion program in Desa Cilayung focused on stunting prevention and supporting healthy growth and development in young children.",
    highlights: [
      "Supported stunting prevention education through GEMASTING (Gerakan Masyarakat Cegah Stunting).",
      "Contributed to community education on early childhood growth and development through KEMAYUNG (Perkembangan Balita Cilayung).",
      "Promoted awareness of child nutrition, growth monitoring, and developmental needs.",
    ],
    images: [
      "/Magang/Midwifery Community Intern Universitas Padjadjaran · Magang/1788845157776.jpg",
    ],
  },
];

export const projectsData: ProjectItem[] = rawProjectsData.map((project) => ({
  ...project,
  images: project.images.map(getAssetUrl),
}));

const rawCertificationsData: Certification[] = [
  {
    id: "cert-journal-2026",
    title: "Scientific Publication: Penyuluhan Ibu Hamil Mengenai Depresi Pasca Persalinan",
    issuer: "Jurnal PengabdianMu (Jurnal Ilmiah Pengabdian kepada Masyarakat, Sinta 3)",
    year: "2026",
    badge: "Peer-Reviewed Journal",
    credentialUrl: "https://drive.google.com/file/d/1S6yS9HR970C1IOlaBpWH9dLWe69ZTP6h/view?usp=sharing",
    driveUrl: "https://drive.google.com/file/d/1S6yS9HR970C1IOlaBpWH9dLWe69ZTP6h/view?usp=sharing",
    image: "/fotojurnal.png",
  },
  {
    id: "cert-microsoft-bootcamp",
    title: "Microsoft Office Specialist (Word, Excel, PowerPoint)",
    issuer: "Certified Bootcamp Program",
    year: "2026",
    badge: "Digital Skills Certification",
    image: "/Annisa_sertifikat/Sertifikasi Microsoft_Annisa Haura_page-0001.jpg",
  },
  {
    id: "cert-haki",
    title: "Official Intellectual Property (HAKI): Buku Saku MP-ASI",
    issuer: "Kementerian Hukum dan Hak Asasi Manusia RI (No. EC00202468494)",
    year: "2024",
    badge: "Intellectual Property Rights",
    image: "/Annisa_sertifikat/Lani GumilangSST.,MM. , Buku Saku MP ASI, sertifikat_EC00202468494 (2) (2)_page-0001.jpg",
  },
  {
    id: "cert-toefl",
    title: "English Proficiency Test (TOEFL Equivalent)",
    issuer: "Language Certification Center",
    year: "2024",
    badge: "English Language",
    image: "/Annisa_sertifikat/Sertifikat TOEFL_Annisa Haura_page-0001.jpg",
  },
  {
    id: "cert-rshs",
    title: "Hospital Clinical Orientation for Midwifery Students",
    issuer: "RSUP Dr. Hasan Sadikin Bandung",
    year: "2023",
    badge: "Hospital Safety & Patient Care",
    image: "/Annisa_sertifikat/1788784213850.jpg",
  },
];

export const certificationsData: Certification[] = rawCertificationsData.map(
  (cert) => ({
    ...cert,
    image: cert.image ? getAssetUrl(cert.image) : undefined,
    pdfUrl: cert.pdfUrl ? getAssetUrl(cert.pdfUrl) : undefined,
  })
);

const rawOrganizationExperiences: Experience[] = [
  {
    id: "hima-kaderisasi",
    role: "Staff of Cadreization and Student Development",
    institution: "Himpunan Mahasiswa Kebidanan FK Universitas Padjadjaran",
    period: "Jan 2024 – Dec 2024 (1 Year)",
    location: "Jatinangor, West Java",
    type: "Organization",
    badge: "Curriculum & Character Building",
    description: [
      "Designed the curriculum and core concept for new student orientation programs to foster character building and academic adaptability.",
      "Structured event workflows, timelines, and technical operational plans in active coordination with cross-divisional committees.",
    ],
    images: [
      "/Himpunan/Staff of Cadreization and Student Development/1788785495281.jpg",
    ],
  },
  {
    id: "naviyara",
    role: "Head of Facilitator Division – Naviyara (New Student Orientation)",
    institution: "Himpunan Mahasiswa Kebidanan FK Universitas Padjadjaran",
    period: "May 2024 – Oct 2024 (5 Months)",
    location: "Jatinangor, West Java",
    type: "Organization",
    badge: "Division Head & Mentorship",
    description: [
      "Led 8 facilitators in delivering an orientation program for 39 incoming midwifery students, coordinating cross-divisional activities to ensure smooth program execution.",
      "Mentored the incoming cohort through structured guidance, regular monitoring, and performance evaluations, contributing to a 100% pass rate.",
    ],
    images: [
      "/Himpunan/Head of Facilitator Division - Naviyara (New Student Orientation)/1788786434253.jpg",
      "/Himpunan/Head of Facilitator Division - Naviyara (New Student Orientation)/1788786616513.jpg",
    ],
  },
  {
    id: "armavara-pr",
    role: "Public Relations Staff – Armavara (New Student Orientation)",
    institution: "Himpunan Mahasiswa Kebidanan FK Universitas Padjadjaran",
    period: "Jul 2023 – Dec 2023 (6 Months)",
    location: "Jatinangor, West Java",
    type: "Organization",
    badge: "Public Communications",
    description: [
      "Managed official communication channels and disseminated timely, structured information to participants and stakeholders.",
      "Served as the primary contact for external communications and coordinated with internal divisions to ensure consistent event updates.",
    ],
    images: [
      "/Himpunan/Public Relations Staff - Himpunan Mahasiswa Kebidanan FK Universitas Padjadjaran/1788787702278.jpg",
    ],
  },
  {
    id: "oppek-fk",
    role: "Facilitator – Faculty New Student Orientation (OPPEK)",
    institution: "BEM Kema FK Unpad",
    period: "Aug 2023 (1 Month)",
    location: "Jatinangor, West Java",
    type: "Organization",
    badge: "Faculty Orientation",
    description: [
      "Mentored incoming medical students during orientation to support their academic and campus transition.",
      "Coordinated communication between committee members and participants to ensure clear and consistent information delivery.",
    ],
    images: [],
  },
  {
    id: "enchora-sponsorship",
    role: "Sponsorship Staff – Project of Action (ENCHORA)",
    institution: "BEM Kema FK Unpad",
    period: "2023 (Collaborative Project)",
    location: "Jatinangor, West Java",
    type: "Organization",
    badge: "Funding & Strategic Partnership",
    description: [
      "Drafted sponsorship proposals and mapped potential partners to support event funding.",
      "Managed partner communications, negotiations, and administrative follow-ups to facilitate sponsorship agreements for a collaborative project involving students from General Medicine, Veterinary Medicine, and Midwifery programs.",
    ],
    images: [
      "/Project/Project of Action (ENCHORA)/1788842873661.jpg",
      "/Project/Project of Action (ENCHORA)/1788842873686.jpg",
    ],
  },
];

export const organizationExperiences: Experience[] = rawOrganizationExperiences.map(
  (org) => ({
    ...org,
    images: org.images.map(getAssetUrl),
  })
);
