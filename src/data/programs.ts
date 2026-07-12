export interface Program {
  slug: string;
  category: string;
  name: { en: string; id: string };
  description: { en: string; id: string };
  icon: string;
  institutionSlug: string;
  institutionName: string;
  credentialType: { en: string; id: string };
  studyMethod: { en: string; id: string };
  duration: { en: string; id: string };
  eligibility: { en: string; id: string };
  overview: { en: string; id: string };
  suitableApplicants: { en: string; id: string };
  requiredDocuments: { en: string; id: string };
  curriculumSummary: { en: string; id: string };
  assessmentMethod: { en: string; id: string };
  graduationRequirements: { en: string; id: string };
  feeInformation: { en: string; id: string };
  accreditationInformation: { en: string; id: string };
  disclosure: { en: string; id: string };
  isPublished: boolean;
  displayOrder: number;
}

export const programCategories = [
  "Professional Certificate",
  "Executive Education",
  "Prior Learning Assessment",
  "Bachelor Degree Pathway",
  "Master Degree Pathway",
  "Doctoral Degree Pathway",
] as const;

export const programs: Program[] = [
  {
    slug: "professional-certificate-leadership",
    category: "Professional Certificate",
    name: { en: "Professional Certificate in Strategic Leadership", id: "Sertifikat Profesional dalam Kepemimpinan Strategis" },
    description: { en: "A professional certificate program designed for experienced leaders seeking formal recognition of their management expertise.", id: "Program sertifikat profesional yang dirancang untuk pemimpin berpengalaman yang mencari pengakuan formal atas keahlian manajemen mereka." },
    icon: "FaAward",
    institutionSlug: "sample-university",
    institutionName: "Sample International University",
    credentialType: { en: "Professional Certificate", id: "Sertifikat Profesional" },
    studyMethod: { en: "Online / Distance Learning", id: "Online / Pembelajaran Jarak Jauh" },
    duration: { en: "6–12 months", id: "6–12 bulan" },
    eligibility: { en: "Minimum 5 years of professional experience and a bachelor's degree or equivalent.", id: "Minimal 5 tahun pengalaman profesional dan gelar sarjana atau setara." },
    overview: { en: "This program provides experienced professionals with a formal credential that validates their strategic leadership capabilities. The curriculum is designed to be flexible and applicable to real-world business challenges.", id: "Program ini memberikan profesional berpengalaman kredensial formal yang memvalidasi kemampuan kepemimpinan strategis mereka. Kurikulum dirancang fleksibel dan dapat diterapkan pada tantangan bisnis nyata." },
    suitableApplicants: { en: "Senior managers, business owners, and executives seeking formal recognition of their leadership experience.", id: "Manajer senior, pemilik bisnis, dan eksekutif yang mencari pengakuan formal atas pengalaman kepemimpinan mereka." },
    requiredDocuments: { en: "Bachelor's degree transcript, CV/resume, professional reference, and identification document.", id: "Transkrip gelar sarjana, CV/resume, referensi profesional, dan dokumen identitas." },
    curriculumSummary: { en: "Strategic Planning, Organizational Leadership, Change Management, Business Ethics, Capstone Project.", id: "Perencanaan Strategis, Kepemimpinan Organisasi, Manajemen Perubahan, Etika Bisnis, Proyek Capstone." },
    assessmentMethod: { en: "Written assignments, case studies, and a final capstone project.", id: "Tugas tertulis, studi kasus, dan proyek capstone akhir." },
    graduationRequirements: { en: "Complete all modules and pass the capstone project.", id: "Menyelesaikan semua modul dan lulus proyek capstone." },
    feeInformation: { en: "Contact us for fee information.", id: "Hubungi kami untuk informasi biaya." },
    accreditationInformation: { en: "Accredited by the UK Accreditation Council.", id: "Terakreditasi oleh UK Accreditation Council." },
    disclosure: { en: "This certificate is a professional credential. Academic credit transfer is at the discretion of the receiving institution.", id: "Sertifikat ini adalah kredensial profesional. Transfer kredit akademik adalah kebijakan institusi penerima." },
    isPublished: true,
    displayOrder: 1,
  },
  {
    slug: "executive-education-global-business",
    category: "Executive Education",
    name: { en: "Executive Education in Global Business", id: "Pendidikan Eksekutif dalam Bisnis Global" },
    description: { en: "An executive program for senior professionals who want to expand their international business acumen.", id: "Program eksekutif untuk profesional senior yang ingin memperluas wawasan bisnis internasional mereka." },
    icon: "FaUserTie",
    institutionSlug: "sample-university",
    institutionName: "Sample International University",
    credentialType: { en: "Executive Education Certificate", id: "Sertifikat Pendidikan Eksekutif" },
    studyMethod: { en: "Blended (Online + Intensive Workshops)", id: "Blended (Online + Workshop Intensif)" },
    duration: { en: "3–6 months", id: "3–6 bulan" },
    eligibility: { en: "Minimum 7 years of executive-level experience.", id: "Minimal 7 tahun pengalaman tingkat eksekutif." },
    overview: { en: "This program equips senior executives with advanced global business strategies, cross-cultural leadership, and international market analysis skills.", id: "Program ini membekali eksekutif senior dengan strategi bisnis global tingkat lanjut, kepemimpinan lintas budaya, dan keterampilan analisis pasar internasional." },
    suitableApplicants: { en: "CEOs, directors, and senior executives leading international operations.", id: "CEO, direktur, dan eksekutif senior yang memimpin operasi internasional." },
    requiredDocuments: { en: "CV/resume, executive summary of experience, and identification document.", id: "CV/resume, ringkasan eksekutif pengalaman, dan dokumen identitas." },
    curriculumSummary: { en: "Global Market Strategy, Cross-Cultural Leadership, International Finance, Digital Transformation, Executive Capstone.", id: "Strategi Pasar Global, Kepemimpinan Lintas Budaya, Keuangan Internasional, Transformasi Digital, Capstone Eksekutif." },
    assessmentMethod: { en: "Executive briefs, strategic presentations, and capstone project.", id: "Brief eksekutif, presentasi strategis, dan proyek capstone." },
    graduationRequirements: { en: "Complete all modules and submit the capstone project.", id: "Menyelesaikan semua modul dan menyerahkan proyek capstone." },
    feeInformation: { en: "Contact us for fee information.", id: "Hubungi kami untuk informasi biaya." },
    accreditationInformation: { en: "Accredited by the UK Accreditation Council.", id: "Terakreditasi oleh UK Accreditation Council." },
    disclosure: { en: "This is a non-degree executive education program. It does not confer academic credit unless otherwise stated.", id: "Ini adalah program pendidikan eksekutif non-gelar. Tidak memberikan kredit akademik kecuali dinyatakan lain." },
    isPublished: true,
    displayOrder: 2,
  },
  {
    slug: "prior-learning-assessment",
    category: "Prior Learning Assessment",
    name: { en: "Prior Learning Assessment (PLA)", id: "Penilaian Pembelajaran Sebelumnya (PLA)" },
    description: { en: "A formal process to evaluate professional experience and prior learning for academic recognition.", id: "Proses formal untuk mengevaluasi pengalaman profesional dan pembelajaran sebelumnya untuk pengakuan akademik." },
    icon: "FaClipboardList",
    institutionSlug: "sample-university",
    institutionName: "Sample International University",
    credentialType: { en: "Academic Credit Recognition", id: "Pengakuan Kredit Akademik" },
    studyMethod: { en: "Portfolio Assessment", id: "Penilaian Portofolio" },
    duration: { en: "2–4 months", id: "2–4 bulan" },
    eligibility: { en: "Minimum 8 years of professional experience in a relevant field.", id: "Minimal 8 tahun pengalaman profesional di bidang terkait." },
    overview: { en: "The Prior Learning Assessment program allows experienced professionals to convert their work experience and informal learning into recognized academic credit, potentially accelerating their degree pathway.", id: "Program Penilaian Pembelajaran Sebelumnya memungkinkan profesional berpengalaman mengonversi pengalaman kerja dan pembelajaran informal mereka menjadi kredit akademik yang diakui, berpotensi mempercepat jalur gelar mereka." },
    suitableApplicants: { en: "Experienced professionals who want their work experience evaluated for academic credit.", id: "Profesional berpengalaman yang ingin pengalaman kerja mereka dievaluasi untuk kredit akademik." },
    requiredDocuments: { en: "Detailed CV/resume, professional portfolio, letters of recommendation, and identification document.", id: "CV/resume terperinci, portofolio profesional, surat rekomendasi, dan dokumen identitas." },
    curriculumSummary: { en: "Portfolio development guidance, competency mapping, evidence submission, academic evaluation.", id: "Panduan pengembangan portofolio, pemetaan kompetensi, pengajuan bukti, evaluasi akademik." },
    assessmentMethod: { en: "Portfolio review and competency assessment by faculty.", id: "Tinjauan portofolio dan penilaian kompetensi oleh fakultas." },
    graduationRequirements: { en: "Submit a complete portfolio that demonstrates competency in the assessed areas.", id: "Menyerahkan portofolio lengkap yang menunjukkan kompetensi di bidang yang dinilai." },
    feeInformation: { en: "Contact us for fee information.", id: "Hubungi kami untuk informasi biaya." },
    accreditationInformation: { en: "Conducted under the academic policies of Sample International University.", id: "Dilakukan berdasarkan kebijakan akademik Sample International University." },
    disclosure: { en: "Award of credit is at the sole discretion of the institution. Prior learning assessment does not guarantee credit approval.", id: "Pemberian kredit adalah kebijakan mutlak institusi. Penilaian pembelajaran sebelumnya tidak menjamin persetujuan kredit." },
    isPublished: true,
    displayOrder: 3,
  },
  {
    slug: "bachelor-degree-pathway",
    category: "Bachelor Degree Pathway",
    name: { en: "Bachelor Degree Pathway", id: "Jalur Gelar Sarjana" },
    description: { en: "An accelerated bachelor's degree pathway for experienced professionals without a prior undergraduate degree.", id: "Jalur gelar sarjana yang dipercepat untuk profesional berpengalaman tanpa gelar sarjana sebelumnya." },
    icon: "FaBookOpen",
    institutionSlug: "sample-university",
    institutionName: "Sample International University",
    credentialType: { en: "Bachelor's Degree", id: "Gelar Sarjana" },
    studyMethod: { en: "Online / Distance Learning", id: "Online / Pembelajaran Jarak Jauh" },
    duration: { en: "2–3 years (accelerated)", id: "2–3 tahun (dipercepat)" },
    eligibility: { en: "Minimum 5 years of professional experience and a high school diploma or equivalent.", id: "Minimal 5 tahun pengalaman profesional dan ijazah SMA atau setara." },
    overview: { en: "This pathway offers experienced professionals without a bachelor's degree the opportunity to earn an internationally recognized undergraduate degree by leveraging their professional experience.", id: "Jalur ini menawarkan profesional berpengalaman tanpa gelar sarjana kesempatan untuk mendapatkan gelar sarjana yang diakui secara internasional dengan memanfaatkan pengalaman profesional mereka." },
    suitableApplicants: { en: "Business owners and professionals who need a bachelor's degree for career advancement.", id: "Pemilik bisnis dan profesional yang membutuhkan gelar sarjana untuk kemajuan karir." },
    requiredDocuments: { en: "High school diploma or equivalent, CV/resume, professional references, and identification document.", id: "Ijazah SMA atau setara, CV/resume, referensi profesional, dan dokumen identitas." },
    curriculumSummary: { en: "General education, major coursework, elective modules, and a final research project.", id: "Pendidikan umum, mata kuliah utama, modul elektif, dan proyek penelitian akhir." },
    assessmentMethod: { en: "Assignments, examinations, and a final research project.", id: "Tugas, ujian, dan proyek penelitian akhir." },
    graduationRequirements: { en: "Complete all required credits and pass the final research project.", id: "Menyelesaikan semua kredit yang diperlukan dan lulus proyek penelitian akhir." },
    feeInformation: { en: "Contact us for fee information.", id: "Hubungi kami untuk informasi biaya." },
    accreditationInformation: { en: "Accredited by the UK Accreditation Council.", id: "Terakreditasi oleh UK Accreditation Council." },
    disclosure: { en: "Admission and graduation decisions are made by the issuing institution. Prior learning credit is awarded at the institution's discretion.", id: "Keputusan penerimaan dan kelulusan dibuat oleh institusi penerbit. Kredit pembelajaran sebelumnya diberikan berdasarkan kebijakan institusi." },
    isPublished: true,
    displayOrder: 4,
  },
  {
    slug: "master-degree-pathway",
    category: "Master Degree Pathway",
    name: { en: "Master Degree Pathway", id: "Jalur Gelar Magister" },
    description: { en: "A master's degree pathway designed for senior professionals seeking advanced academic qualification.", id: "Jalur gelar magister yang dirancang untuk profesional senior yang mencari kualifikasi akademik tingkat lanjut." },
    icon: "FaGraduationCap",
    institutionSlug: "sample-university",
    institutionName: "Sample International University",
    credentialType: { en: "Master's Degree", id: "Gelar Magister" },
    studyMethod: { en: "Online / Distance Learning", id: "Online / Pembelajaran Jarak Jauh" },
    duration: { en: "1.5–2 years", id: "1,5–2 tahun" },
    eligibility: { en: "A bachelor's degree and minimum 3 years of professional experience.", id: "Gelar sarjana dan minimal 3 tahun pengalaman profesional." },
    overview: { en: "This master's pathway provides senior professionals with an advanced academic credential that builds on their existing expertise and professional experience.", id: "Jalur magister ini memberikan profesional senior kredensial akademik tingkat lanjut yang dibangun di atas keahlian dan pengalaman profesional mereka yang ada." },
    suitableApplicants: { en: "Senior managers, executives, and professionals seeking a master's degree for career advancement.", id: "Manajer senior, eksekutif, dan profesional yang mencari gelar magister untuk kemajuan karir." },
    requiredDocuments: { en: "Bachelor's degree transcript, CV/resume, letters of recommendation, and identification document.", id: "Transkrip gelar sarjana, CV/resume, surat rekomendasi, dan dokumen identitas." },
    curriculumSummary: { en: "Advanced coursework in chosen field, research methodology, and a master's thesis.", id: "Mata kuliah lanjutan di bidang pilihan, metodologi penelitian, dan tesis magister." },
    assessmentMethod: { en: "Coursework, examinations, and a master's thesis.", id: "Tugas kuliah, ujian, dan tesis magister." },
    graduationRequirements: { en: "Complete all coursework and successfully defend the master's thesis.", id: "Menyelesaikan semua tugas kuliah dan berhasil mempertahankan tesis magister." },
    feeInformation: { en: "Contact us for fee information.", id: "Hubungi kami untuk informasi biaya." },
    accreditationInformation: { en: "Accredited by the UK Accreditation Council.", id: "Terakreditasi oleh UK Accreditation Council." },
    disclosure: { en: "Admission and graduation decisions are made by the issuing institution.", id: "Keputusan penerimaan dan kelulusan dibuat oleh institusi penerbit." },
    isPublished: true,
    displayOrder: 5,
  },
  {
    slug: "doctoral-degree-pathway",
    category: "Doctoral Degree Pathway",
    name: { en: "Doctoral Degree Pathway", id: "Jalur Gelar Doktor" },
    description: { en: "A doctoral pathway for senior leaders and experts seeking the highest level of academic credential.", id: "Jalur doktor untuk pemimpin senior dan ahli yang mencari kredensial akademik tingkat tertinggi." },
    icon: "FaFlask",
    institutionSlug: "sample-university",
    institutionName: "Sample International University",
    credentialType: { en: "Doctoral Degree", id: "Gelar Doktor" },
    studyMethod: { en: "Research-based with online supervision", id: "Berbasis penelitian dengan bimbingan online" },
    duration: { en: "3–5 years", id: "3–5 tahun" },
    eligibility: { en: "A master's degree and minimum 5 years of senior professional experience.", id: "Gelar magister dan minimal 5 tahun pengalaman profesional senior." },
    overview: { en: "This doctoral pathway is designed for senior leaders and subject matter experts who want to earn the highest academic credential while continuing their professional careers.", id: "Jalur doktor ini dirancang untuk pemimpin senior dan ahli materi yang ingin mendapatkan kredensial akademik tertinggi sambil melanjutkan karir profesional mereka." },
    suitableApplicants: { en: "Senior executives, researchers, and thought leaders seeking a doctoral degree.", id: "Eksekutif senior, peneliti, dan pemikir yang mencari gelar doktor." },
    requiredDocuments: { en: "Master's degree transcript, CV/resume, research proposal, letters of recommendation, and identification document.", id: "Transkrip gelar magister, CV/resume, proposal penelitian, surat rekomendasi, dan dokumen identitas." },
    curriculumSummary: { en: "Advanced research methods, literature review, doctoral research, and dissertation.", id: "Metode penelitian lanjutan, tinjauan pustaka, penelitian doktor, dan disertasi." },
    assessmentMethod: { en: "Research proposal defense, annual progress reviews, and dissertation defense.", id: "Ujian proposal penelitian, tinjauan kemajuan tahunan, dan ujian disertasi." },
    graduationRequirements: { en: "Complete and defend a doctoral dissertation that makes an original contribution to the field.", id: "Menyelesaikan dan mempertahankan disertasi doktor yang memberikan kontribusi asli pada bidang tersebut." },
    feeInformation: { en: "Contact us for fee information.", id: "Hubungi kami untuk informasi biaya." },
    accreditationInformation: { en: "Accredited by the UK Accreditation Council.", id: "Terakreditasi oleh UK Accreditation Council." },
    disclosure: { en: "Admission and graduation decisions are made by the issuing institution. The doctoral degree is issued by the institution, not by International.degree.", id: "Keputusan penerimaan dan kelulusan dibuat oleh institusi penerbit. Gelar doktor diterbitkan oleh institusi, bukan oleh International.degree." },
    isPublished: true,
    displayOrder: 6,
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

export function getProgramsByCategory(category: string): Program[] {
  return programs.filter((p) => p.category === category && p.isPublished);
}
