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
  type: "Klinik" | "Komunitas" | "Organisasi";
  description: string[];
  images: string[];
  badge: string;
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
}

export interface EducationItem {
  degree: string;
  institution: string;
  faculty?: string;
  period: string;
  description: string;
  achievements?: string[];
}

export const personalInfo = {
  fullName: "Annisa Haura Salshabira",
  nickname: "Caca",
  role: "Sarjana Terapan Kebidanan",
  institution: "Fakultas Kedokteran, Universitas Padjadjaran",
  location: "Bandung, Jawa Barat, Indonesia",
  email: "haurasalshabira@gmail.com",
  linkedin: "https://www.linkedin.com/in/annisahaurasalshabira",
  instagram: "https://www.instagram.com/annisahauraaa/",
  cvUrl: "/cv/Annisa-Haura-Salshabira-CV.pdf",
  summary:
    "Lulusan Sarjana Terapan Kebidanan dari Universitas Padjadjaran dengan pengalaman komprehensif melalui praktik klinik di rumah sakit rujukan provinsi, puskesmas, serta asuhan kebidanan komunitas. Terampil dalam asuhan maternal & neonatal (fisiologis & patologis), pemeriksaan diagnostik klinis, konseling pasien yang empatik, serta manajemen program kesehatan masyarakat. Berdedikasi tinggi untuk memberikan pelayanan kebidanan yang aman, profesional, dan berpusat pada pasien.",
  stats: [
    { value: "4+", label: "Stase Klinik & Komunitas" },
    { value: "100%", label: "Kelulusan Mentoring Naviyara" },
    { value: "HAKI", label: "Hak Cipta Kemenkumham RI" },
    { value: "UNPAD", label: "Pendidikan Bidan Jalur Langsung" },
  ],
};

export const clinicalSkills: ClinicalSkill[] = [
  {
    category: "Pelayanan Kebidanan Fisiologis & Patologis",
    description:
      "Penanganan asuhan kebidanan menyeluruh bagi ibu hamil, bersalin, nifas, dan bayi baru lahir.",
    items: [
      "Antenatal Care (ANC) Terpadu",
      "Asuhan Persalinan Normal (APN)",
      "Postnatal Care (PNC) & Asuhan Nifas",
      "Asuhan Bayi Baru Lahir & Neonatus",
      "Pelayanan Keluarga Berencana (KB)",
      "Pelayanan Imunisasi Dasar Lengkap",
      "Bantuan Prosedur Kuretase",
    ],
  },
  {
    category: "Keterampilan Diagnostik & Medis",
    description:
      "Pengoperasian alat pemantauan janin dan diagnostik medis serta kepatuhan prosedur keselamatan.",
    items: [
      "Pemeriksaan Cardiotocography (CTG)",
      "Pemeriksaan Non-Stress Test (NST)",
      "Perekaman Elektrokardiogram (EKG)",
      "Prosedur Pencegahan & Pengendalian Infeksi (PPI)",
      "Dokumentasi Rekam Medis Standar RS",
      "Standar Keselamatan Pasien (Patient Safety)",
    ],
  },
  {
    category: "Konseling & Edukasi Kesehatan",
    description:
      "Komunikasi terapeutik dan pemberdayaan keluarga dalam pencegahan masalah kesehatan ibu & anak.",
    items: [
      "Konseling Laktasi & Manajemen Menyusui",
      "Edukasi Makanan Pendamping ASI (MPASI)",
      "Deteksi Dini Gangguan Psikologis & Depresi Pasca Salin",
      "Penyuluhan Kesehatan Reproduksi Remaja",
      "Komunikasi Interpersonal & Terapeutik",
    ],
  },
  {
    category: "Manajemen Administrasi & Alat Digital",
    description:
      "Kemampuan koordinasi acara, pelaporan medis, serta pemanfaatan perangkat lunak pendukung riset.",
    items: [
      "Microsoft Office Specialist (Excel, Word, PowerPoint)",
      "Google Workspace Collaboration",
      "Desain Media Informasi Kesehatan (Canva)",
      "Pengolahan Data Penelitian (SPSS Dasar)",
      "Manajemen Kepanitiaan & Alur Acara",
    ],
  },
];

export const clinicalExperiences: Experience[] = [
  {
    id: "rsud-syamsudin",
    role: "Mahasiswa Magang Kebidanan Klinik",
    institution: "RSUD R. Syamsudin, SH. Sukabumi",
    period: "April 2025 – Juni 2025 (3 Bulan)",
    location: "Sukabumi, Jawa Barat",
    type: "Klinik",
    badge: "Rumah Sakit Rujukan",
    description: [
      "Menangani asuhan kebidanan komprehensif untuk kasus obstetri dan ginekologi (fisiologis dan patologis).",
      "Membantu tindakan prosedur kuretase dan pemeriksaan diagnostik penunjang, termasuk CTG, NST, dan EKG.",
      "Berkolaborasi aktif dengan tim medis lintas profesi (dokter spesialis obgyn, perawat, anestesi) dalam tata laksana pasien.",
      "Menyusun dokumentasi rekam medis secara teliti, rapi, dan tepat waktu sesuai standar akreditasi rumah sakit.",
    ],
    images: [
      "/Magang/Clinical Midwifery Intern RSUD R. Syamsudin, SH. Sukabumi · Magang/1788756910391.jpg",
      "/Magang/Clinical Midwifery Intern RSUD R. Syamsudin, SH. Sukabumi · Magang/1788756910134.jpg",
      "/Magang/Clinical Midwifery Intern RSUD R. Syamsudin, SH. Sukabumi · Magang/1788756910265.jpg",
    ],
  },
  {
    id: "puskesmas-padasuka",
    role: "Mahasiswa Magang Kebidanan Klinik",
    institution: "UPTD Puskesmas Padasuka Kota Bandung",
    period: "Agustus 2024 – Oktober 2024 (3 Bulan)",
    location: "Bandung, Jawa Barat",
    type: "Klinik",
    badge: "Pelayanan Primer",
    description: [
      "Melaksanakan asuhan kebidanan fisiologis secara mandiri dan komprehensif: Antenatal Care (ANC), pendampingan persalinan normal, nifas, dan perawatan bayi baru lahir.",
      "Memberikan pelayanan Keluarga Berencana (KB) serta imunisasi dasar rutin pada bayi dan balita.",
      "Menyampaikan edukasi kesehatan ibu dan anak (KIA) secara komunikatif dan ramah keluarga.",
      "Melakukan pencatatan register kohort dan rekam medis digital/manual sesuai regulasi puskesmas.",
    ],
    images: [
      "/Magang/Clinical Midwifery Intern UPTD Puskesmas Padasuka Kota Bandung · Magang/1788755121646.jpg",
      "/Magang/Clinical Midwifery Intern UPTD Puskesmas Padasuka Kota Bandung · Magang/1788755121835.jpg",
      "/Magang/Clinical Midwifery Intern UPTD Puskesmas Padasuka Kota Bandung · Magang/1788755121371.jpg",
    ],
  },
  {
    id: "rshs-bandung",
    role: "Mahasiswa Magang Keterampilan Dasar Kebidanan",
    institution: "RSUP Dr. Hasan Sadikin Bandung (RSHS)",
    period: "Juni 2023 – Juli 2023 (2 Bulan)",
    location: "Bandung, Jawa Barat",
    type: "Klinik",
    badge: "RS Rujukan Nasional",
    description: [
      "Melakukan prosedur dasar kebidanan dengan mematuhi prinsip Patient Safety dan protokol Pencegahan dan Pengendalian Infeksi (PPI).",
      "Mengelola dokumentasi rekam medis pasien serta berkoordinasi dengan perawat dan tenaga kesehatan lainnya dalam pelayanan rawat inap.",
      "Mendapatkan sertifikat resmi orientasi rumah sakit mahasiswa dari Kemenkes RI / RSUP Dr. Hasan Sadikin.",
    ],
    images: [
      "/Magang/Intern Basic Midwifery Skills Intern RSUP Dr. Hasan Sadikin Bandung · Magang/1788753108621.jpg",
      "/Annisa_sertifikat/1788784213850.jpg",
    ],
  },
  {
    id: "kebidanan-komunitas",
    role: "Mahasiswa Magang Kebidanan Komunitas",
    institution: "Universitas Padjadjaran",
    period: "Desember 2025 – Januari 2026 (2 Bulan)",
    location: "Desa Cilayung, Sumedang, Jawa Barat",
    type: "Komunitas",
    badge: "Community Midwifery",
    description: [
      "Melakukan pengkajian kesehatan ibu, anak, dan keluarga langsung secara door-to-door di lingkungan masyarakat pedesaan.",
      "Menganalisis data masalah kesehatan keluarga dan merumuskan rencana tindak lanjut (RTL) berbasis pemecahan masalah.",
      "Mengadakan kegiatan posyandu terpadu, pemantauan status gizi balita lewat KMS, serta penyuluhan pencegahan stunting.",
    ],
    images: [
      "/Magang/Midwifery Community Intern Universitas Padjadjaran · Magang/1788845091019.jpg",
      "/Magang/Midwifery Community Intern Universitas Padjadjaran · Magang/1788844787993.jpg",
      "/Magang/Midwifery Community Intern Universitas Padjadjaran · Magang/1788845157776.jpg",
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "buku-saku-mpasi",
    title: "Buku Saku MP-ASI (Makanan Pendamping ASI)",
    category: "Hak Cipta & Karya Ilmiah",
    badge: "HAKI Kemenkumham RI",
    description:
      "Karya buku edukasi panduan praktis pemberian makanan pendamping ASI bagi ibu dan balita yang telah terdaftar resmi memiliki Hak Cipta dari Kementerian Hukum dan HAM Republik Indonesia.",
    highlights: [
      "Surat Pencatatan Ciptaan resmi No. 000643844 (Kemenkumham RI)",
      "Pencipta bersama dosen dan tim kebidanan Universitas Padjadjaran",
      "Panduan takaran nutrisi, higienitas, dan pencegahan malnutrisi pada masa MP-ASI",
    ],
    images: ["/Project/Buku Saku MPASI/1788919234101.jpg"],
  },
  {
    id: "anc-padjadjaran",
    title: "Pelayanan Antenatal Care (ANC) Terpadu",
    category: "Praktik Klinis Kebidanan",
    badge: "Klinik Padjadjaran",
    description:
      "Pemeriksaan kehamilan komprehensif bagi ibu hamil di Klinik Padjadjaran, mencakup pemantauan tumbuh kembang janin, pemeriksaan tanda vital, penimbangan, dan KIE nutrisi kehamilan.",
    highlights: [
      "Pemeriksaan palpasi Leopold dan denyut jantung janin (Doppler)",
      "Skrining faktor risiko kehamilan dan persiapan persalinan aman",
      "Penyampaian konseling kehamilan yang menenangkan dan informatif",
    ],
    images: [
      "/Project/Antenatal Care (ANC) at Padjadjaran Clinic/1788921774641.jpg",
      "/Project/Antenatal Care (ANC) at Padjadjaran Clinic/1788921775014.jpg",
    ],
  },
  {
    id: "edukasi-remaja",
    title: "Edukasi Kesehatan Remaja di SMK Bhakti Kencana",
    category: "Penyuluhan Komunitas",
    badge: "Outreach Program",
    description:
      "Program pengabdian masyarakat berupa penyuluhan kesehatan reproduksi remaja, pencegahan anemia, dan pemahaman gizi seimbang bagi siswa SMK Bhakti Kencana Cileunyi.",
    highlights: [
      "Edukasi siklus menstruasi sehat dan personal hygiene",
      "Sosialisasi pencegahan anemia pada remaja putri dengan tablet tambah darah",
      "Sesi tanya jawab interaktif untuk memecahkan stigma seputar kesehatan reproduksi",
    ],
    images: [
      "/Project/Adolescent Health Education Outreach at SMK Bhakti Kencana Cileunyi/1788922924066.jpg",
    ],
  },
  {
    id: "aksi-gigi-sehat",
    title: "Aksi Gigi Sehat & Pengabdian Komunitas (ENCHORA)",
    category: "Promosi Kesehatan",
    badge: "Pengabdian Masyarakat",
    description:
      "Inisiatif promosi kesehatan gigi dan perilaku hidup bersih dan sehat (PHBS) serta rangkaian Project of Action (ENCHORA) untuk anak-anak dan warga setempat.",
    highlights: [
      "Demonstrasi praktik sikat gigi yang benar bagi anak-anak",
      "Edukasi keterkaitan kesehatan rongga mulut dengan tumbuh kembang anak",
      "Kolaborasi tim multidisiplin mahasiswa dalam aksi sosial",
    ],
    images: [
      "/Project/Aksi Gigi Sehat - Community Oral Health Education/1788842438293.jpg",
      "/Project/Project of Action (ENCHORA)/1788842873661.jpg",
    ],
  },
];

export const certificationsData: Certification[] = [
  {
    id: "cert-rshs",
    title: "Orientasi Rumah Sakit Mahasiswa",
    issuer: "Kemenkes RI / RSUP Dr. Hasan Sadikin Bandung",
    year: "2023",
    credentialId: "PL.02.01/X.2.2/2688/2023",
    image: "/Annisa_sertifikat/1788784213850.jpg",
  },
  {
    id: "cert-haki",
    title: "Surat Pencatatan Hak Cipta - Buku Saku MP-ASI",
    issuer: "Kementerian Hukum dan HAM Republik Indonesia",
    year: "2024",
    credentialId: "No. 000643844",
    image: "/Project/Buku Saku MPASI/1788919234101.jpg",
  },
  {
    id: "cert-elt",
    title: "English Language Test (ELT) - Score: 537",
    issuer: "Pusat Bahasa FIB Universitas Padjadjaran",
    year: "2024",
    credentialId: "No. 241101518",
    image: "/Annisa_sertifikat/1788789138472.jpg",
  },
  {
    id: "cert-msoffice",
    title: "Bootcamp Sertifikasi Microsoft Office Specialist",
    issuer: "Excel, Word & PowerPoint Specialist Certification",
    year: "2024",
    pdfUrl:
      "/Annisa_sertifikat/Annisa_Haura_Salshabira-bootcamp-sertifikasi-microsoft-office-excel-word-power-point-specialist.pdf",
  },
  {
    id: "cert-career",
    title: "Short Class Persiapan Kerja",
    issuer: "Professional Career Preparation",
    year: "2024",
    pdfUrl:
      "/Annisa_sertifikat/Annisa_Haura_Salshabira-short-class-persiapan-kerja.pdf",
  },
];

export const organizationExperiences: Experience[] = [
  {
    id: "naviyara",
    role: "Ketua Divisi Fasilitator – Naviyara",
    institution: "Himpunan Mahasiswa Kebidanan FK UNPAD",
    period: "Agustus 2024 – Desember 2024 (5 Bulan)",
    location: "Jatinangor, Jawa Barat",
    type: "Organisasi",
    badge: "Kepemimpinan",
    description: [
      "Memimpin dan mengarahkan tim berisi 8 fasilitator dalam menjalankan orientasi komprehensif bagi 39 mahasiswa baru kebidanan.",
      "Membimbing angkatan mahasiswa baru kebidanan 2024 hingga mencapai tingkat kelulusan 100% dengan capaian akademik baik.",
      "Mengkoordinasikan sesi mentoring, memantau adaptasi mahasiswa baru, dan mengevaluasi kinerja tim secara berkala.",
    ],
    images: [
      "/Himpunan/Head of Facilitator Division - Naviyara (New Student Orientation)/1788786616513.jpg",
      "/Himpunan/Head of Facilitator Division - Naviyara (New Student Orientation)/1788786434253.jpg",
    ],
  },
  {
    id: "kaderisasi-hima",
    role: "Staf Kaderisasi dan Pengembangan Mahasiswa",
    institution: "Himpunan Mahasiswa Kebidanan FK UNPAD",
    period: "Maret 2024 – Maret 2025 (1 Tahun 1 Bulan)",
    location: "Jatinangor, Jawa Barat",
    type: "Organisasi",
    badge: "Pengembangan Karakter",
    description: [
      "Merancang kurikulum dan konsep inti program kaderisasi mahasiswa baru untuk membangun karakter dan adaptasi akademik kebidanan.",
      "Menyusun alur acara, jadwal, dan rencana operasional teknis bersama panitia lintas divisi.",
    ],
    images: [
      "/Himpunan/Staff of Cadreization and Student Development/1788785495281.jpg",
    ],
  },
  {
    id: "humas-armavara",
    role: "Staf Hubungan Masyarakat – Armavara",
    institution: "Himpunan Mahasiswa Kebidanan FK UNPAD",
    period: "Juli 2023 – Desember 2023 (6 Bulan)",
    location: "Jatinangor, Jawa Barat",
    type: "Organisasi",
    badge: "Komunikasi Publik",
    description: [
      "Mengelola saluran komunikasi resmi dan narahubung utama penyebaran informasi kepada peserta orientasi dan pemangku kepentingan.",
      "Menjaga keterbukaan arus informasi yang terstruktur, tepat waktu, dan akurat.",
    ],
    images: [
      "/Himpunan/Public Relations Staff - Himpunan Mahasiswa Kebidanan FK Universitas Padjadjaran/1788787702278.jpg",
    ],
  },
  {
    id: "oppek-fk",
    role: "Fasilitator – OPPEK Fakultas Kedokteran",
    institution: "BEM Kema FK UNPAD",
    period: "Agustus 2023 (1 Bulan)",
    location: "Jatinangor, Jawa Barat",
    type: "Organisasi",
    badge: "Fasilitator Fakultas",
    description: [
      "Membimbing mahasiswa baru program sarjana kedokteran dalam proses transisi akademik dan pengenalan iklim kampus FK UNPAD.",
      "Mengelola komunikasi interaktif dan pembinaan kedisiplinan berbasis nilai humanisme kedokteran.",
    ],
    images: [],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: "Sarjana Terapan Kebidanan (S.Tr.Keb)",
    institution: "Universitas Padjadjaran (UNPAD)",
    faculty: "Fakultas Kedokteran · Pendidikan Bidan Jalur Langsung",
    period: "Agustus 2022 – Juni 2026",
    description:
      "Menempuh pendidikan akademik dan profesi kebidanan komprehensif, mencakup fisiologi obstetri, ginekologi, kegawatdaruratan maternal-neonatal, kesehatan reproduksi, serta kebidanan komunitas berbasis keluarga dan riset.",
    achievements: [
      "Pencatat Hak Cipta Resmi Kemenkumham RI untuk Buku Saku MP-ASI",
      "Ketua Divisi Fasilitator Naviyara Orientasi Mahasiswa Baru Kebidanan",
      "Stase Klinik Aktif di RS Rujukan (RSUD Syamsudin & RSHS Bandung) serta UPTD Puskesmas Padasuka",
    ],
  },
  {
    degree: "Sekolah Menengah Atas (MIPA)",
    institution: "SMA Kartika XIX-1 Bandung",
    period: "Juni 2019 – Mei 2022",
    description:
      "Fokus pada jurusan Matematika dan Ilmu Pengetahuan Alam (MIPA). Aktif dalam organisasi seni dan sosial kemasyarakatan Karawitan (Staf Publikasi, Desain & Dokumentasi).",
  },
];
