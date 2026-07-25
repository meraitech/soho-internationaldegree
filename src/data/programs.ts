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
  fee: number;
  feeInformation: { en: string; id: string };
  accreditationInformation: { en: string; id: string };
  disclosure: { en: string; id: string };
  isPublished: boolean;
  displayOrder: number;
  whatsappMessage?: { en: string; id: string };
}

export const programCategories = [
  "Nationally Accredited Degrees",
  "Internationally Non Accredited Degrees",
] as const;

const institution = "Sample International University";

export const programs: Program[] = [
  {
    slug: "bachelor-degree",
    category: "Nationally Accredited Degrees",
    name: { en: "Bachelor's Degree (S1)", id: "Gelar Sarjana (S1)" },
    description: { en: "Nationally accredited bachelor's degree conferred through Recognition of Prior Learning (RPL). Available disciplines include SE., SM., S.Pd., S.Kom., and other relevant fields.", id: "Gelar sarjana terakreditasi nasional yang diberikan melalui Recognition of Prior Learning (RPL). Disiplin yang tersedia meliputi SE., SM., S.Pd., S.Kom., dan bidang relevan lainnya." },
    icon: "FaBookOpen",
    institutionSlug: "sample-university",
    institutionName: institution,
    credentialType: { en: "Bachelor's Degree (S1)", id: "Gelar Sarjana (S1)" },
    studyMethod: { en: "Recognition of Prior Learning (RPL) Assessment", id: "Penilaian Recognition of Prior Learning (RPL)" },
    duration: { en: "Assessment completed within 2–4 weeks", id: "Penilaian selesai dalam 2–4 minggu" },
    eligibility: { en: "Minimum 30 years of age, Senior High School (SLTA) qualification, and established competence in the relevant field.", id: "Minimal usia 30 tahun, kualifikasi SLTA, dan kompetensi yang mapan di bidang terkait." },
    overview: { en: "This nationally accredited bachelor's degree is conferred based on the Recognition of Prior Learning (RPL) framework. Your professional experience and existing competencies are evaluated against academic standards to award the appropriate degree title (SE., SM., S.Pd., S.Kom., or other relevant disciplines).", id: "Gelar sarjana terakreditasi nasional ini diberikan berdasarkan kerangka Recognition of Prior Learning (RPL). Pengalaman profesional dan kompetensi yang Anda miliki dievaluasi terhadap standar akademik untuk memberikan gelar yang sesuai (SE., SM., S.Pd., S.Kom., atau disiplin relevan lainnya)." },
    suitableApplicants: { en: "Professionals aged 30+ with a minimum of Senior High School (SLTA) education who have established competence in their field and seek formal academic recognition.", id: "Profesional berusia 30+ dengan pendidikan minimal SLTA yang memiliki kompetensi mapan di bidangnya dan mencari pengakuan akademik formal." },
    requiredDocuments: { en: "1. Detailed Curriculum Vitae (CV)\n2. Specific degree choice aligned with your area of competence\n3. Proof of completed payment", id: "1. Curriculum Vitae (CV) terperinci\n2. Pilihan gelar spesifik yang sesuai dengan bidang kompetensi Anda\n3. Bukti pembayaran lunas" },
    curriculumSummary: { en: "Recognition of Prior Learning (RPL) evaluation — competency mapping, evidence portfolio review, and academic credit assessment.", id: "Evaluasi Recognition of Prior Learning (RPL) — pemetaan kompetensi, tinjauan portofolio bukti, dan penilaian kredit akademik." },
    assessmentMethod: { en: "Portfolio-based competency assessment and prior learning evaluation by the academic committee.", id: "Penilaian kompetensi berbasis portofolio dan evaluasi pembelajaran sebelumnya oleh komite akademik." },
    graduationRequirements: { en: "Successful completion of the RPL assessment and verification of submitted credentials.", id: "Penyelesaian penilaian RPL yang berhasil dan verifikasi kredensial yang diajukan." },
    fee: 2000,
    feeInformation: { en: "USD 2,000 + USD 100 registration fee", id: "USD 2.000 + biaya pendaftaran USD 100" },
    accreditationInformation: { en: "Nationally accredited degree awarded by an accredited Indonesian university partner.", id: "Gelar terakreditasi nasional yang diberikan oleh mitra universitas terakreditasi Indonesia." },
    disclosure: { en: "This degree is conferred based on Recognition of Prior Learning (RPL). Admission and degree conferral decisions are made by the issuing university. International.degree is a service platform, not a degree-granting institution.", id: "Gelar ini diberikan berdasarkan Recognition of Prior Learning (RPL). Keputusan penerimaan dan pemberian gelar dibuat oleh universitas penerbit. International.degree adalah platform layanan, bukan institusi pemberi gelar." },
    isPublished: true,
    displayOrder: 1,
  },
  {
    slug: "master-degree",
    category: "Nationally Accredited Degrees",
    name: { en: "Master's Degree (S2)", id: "Gelar Magister (S2)" },
    description: { en: "Nationally accredited master's degree conferred through Recognition of Prior Learning (RPL). Available disciplines include MM., M.Pd., M.Si., and other relevant fields.", id: "Gelar magister terakreditasi nasional yang diberikan melalui Recognition of Prior Learning (RPL). Disiplin yang tersedia meliputi MM., M.Pd., M.Si., dan bidang relevan lainnya." },
    icon: "FaGraduationCap",
    institutionSlug: "sample-university",
    institutionName: institution,
    credentialType: { en: "Master's Degree (S2)", id: "Gelar Magister (S2)" },
    studyMethod: { en: "Recognition of Prior Learning (RPL) Assessment", id: "Penilaian Recognition of Prior Learning (RPL)" },
    duration: { en: "Assessment completed within 2–4 weeks", id: "Penilaian selesai dalam 2–4 minggu" },
    eligibility: { en: "Minimum 30 years of age, Senior High School (SLTA) qualification, and established competence in the relevant field.", id: "Minimal usia 30 tahun, kualifikasi SLTA, dan kompetensi yang mapan di bidang terkait." },
    overview: { en: "This nationally accredited master's degree is conferred based on the Recognition of Prior Learning (RPL) framework. Your professional experience and advanced competencies are evaluated against postgraduate academic standards to award the appropriate degree title (MM., M.Pd., M.Si., or other relevant disciplines).", id: "Gelar magister terakreditasi nasional ini diberikan berdasarkan kerangka Recognition of Prior Learning (RPL). Pengalaman profesional dan kompetensi lanjutan Anda dievaluasi terhadap standar akademik pascasarjana untuk memberikan gelar yang sesuai (MM., M.Pd., M.Si., atau disiplin relevan lainnya)." },
    suitableApplicants: { en: "Senior professionals aged 30+ with a minimum of Senior High School (SLTA) education who have established advanced competence in their field and seek a master's level academic recognition.", id: "Profesional senior berusia 30+ dengan pendidikan minimal SLTA yang memiliki kompetensi lanjutan yang mapan di bidangnya dan mencari pengakuan akademik tingkat magister." },
    requiredDocuments: { en: "1. Detailed Curriculum Vitae (CV)\n2. Specific degree choice aligned with your area of competence\n3. Proof of completed payment", id: "1. Curriculum Vitae (CV) terperinci\n2. Pilihan gelar spesifik yang sesuai dengan bidang kompetensi Anda\n3. Bukti pembayaran lunas" },
    curriculumSummary: { en: "Recognition of Prior Learning (RPL) evaluation — advanced competency mapping, evidence portfolio review, and postgraduate academic credit assessment.", id: "Evaluasi Recognition of Prior Learning (RPL) — pemetaan kompetensi lanjutan, tinjauan portofolio bukti, dan penilaian kredit akademik pascasarjana." },
    assessmentMethod: { en: "Portfolio-based advanced competency assessment and prior learning evaluation by the academic committee.", id: "Penilaian kompetensi lanjutan berbasis portofolio dan evaluasi pembelajaran sebelumnya oleh komite akademik." },
    graduationRequirements: { en: "Successful completion of the RPL assessment and verification of submitted credentials.", id: "Penyelesaian penilaian RPL yang berhasil dan verifikasi kredensial yang diajukan." },
    fee: 3000,
    feeInformation: { en: "USD 3,000 + USD 100 registration fee", id: "USD 3.000 + biaya pendaftaran USD 100" },
    accreditationInformation: { en: "Nationally accredited degree awarded by an accredited Indonesian university partner.", id: "Gelar terakreditasi nasional yang diberikan oleh mitra universitas terakreditasi Indonesia." },
    disclosure: { en: "This degree is conferred based on Recognition of Prior Learning (RPL). Admission and degree conferral decisions are made by the issuing university. International.degree is a service platform, not a degree-granting institution.", id: "Gelar ini diberikan berdasarkan Recognition of Prior Learning (RPL). Keputusan penerimaan dan pemberian gelar dibuat oleh universitas penerbit. International.degree adalah platform layanan, bukan institusi pemberi gelar." },
    isPublished: true,
    displayOrder: 2,
  },
  {
    slug: "doctoral-degree",
    category: "Internationally Non Accredited Degrees",
    name: { en: "Doctoral Degree Pathway", id: "Jalur Doktor" },
    description: { en: "Earn a professional/academic doctorate through Recognition of Prior Learning (RPL) — IAO-accredited, awarded by Hafiz Indonesia Emas Academy.", id: "Dapatkan doktor profesional/akademik melalui Recognition of Prior Learning (RPL) — terakreditasi IAO, diberikan oleh Hafiz Indonesia Emas Academy." },
    icon: "FaFlask",
    institutionSlug: "hafiz-indonesia-emas-academy",
    institutionName: "Hafiz Indonesia Emas Academy",
    credentialType: { en: "Earned Doctorate (Ph.D. / DBA / Ed.D.)", id: "Doktor Formal (Ph.D. / DBA / Ed.D.)" },
    studyMethod: { en: "Recognition of Prior Learning (RPL) — Professional Portfolio Assessment", id: "Penilaian Recognition of Prior Learning (RPL) — Portofolio Profesional" },
    duration: { en: "Self-paced; assessment completed within 4–8 weeks", id: "Mandiri; penilaian selesai dalam 4–8 minggu" },
    eligibility: { en: "Minimum 30 years old; hold a Master's degree OR exceptional senior leadership/professional standing; 8+ years of advanced practice, leadership, or notable contributions in your field.", id: "Minimal 30 tahun; memiliki gelar Master ATAU jabatan kepemimpinan/profesional senior yang luar biasa; 8+ tahun praktik lanjutan, kepemimpinan, atau kontribusi signifikan di bidang Anda." },
    overview: { en: "This is the highest formal earned qualification — a flexible route to get an earned professional/academic doctorate using Recognition of Prior Learning (RPL). We validate your advanced expertise, leadership impact, and proven mastery instead of long campus study or a traditional full dissertation. Available titles include Ph.D. (Doctor of Philosophy), DBA (Doctor of Business Administration), Ed.D. (Doctor of Education), and other practice-focused doctoral designations.\n\n⚠️ Important: This is an earned doctorate (Ph.D., DBA, Ed.D.) — NOT a Doctor Honoris Causa (Dr.Hc.) or Professor Honoris Causa (Prof.Hc.). An earned doctorate is the highest formal academic/professional qualification, based on advanced competence, verified mastery, and a professional portfolio. Dr.Hc./Prof.Hc. are honorary titles based on symbolic recognition of lifetime service and carry different standing.", id: "Ini adalah kualifikasi formal tertinggi — jalur fleksibel untuk mendapatkan doktor profesional/akademik melalui Recognition of Prior Learning (RPL). Kami memvalidasi keahlian lanjutan, dampak kepemimpinan, dan penguasaan yang terbukti tanpa perlu studi kampus panjang atau disertasi tradisional. Gelar yang tersedia meliputi Ph.D. (Doctor of Philosophy), DBA (Doctor of Business Administration), Ed.D. (Doctor of Education), dan gelar doktor berbasis praktik lainnya.\n\n⚠️ Penting: Ini adalah doktor formal (Ph.D., DBA, Ed.D.) — BUKAN Doctor Honoris Causa (Dr.Hc.) atau Professor Honoris Causa (Prof.Hc.). Doktor formal adalah kualifikasi akademik/profesional formal tertinggi, berdasarkan kompetensi lanjutan, penguasaan yang terverifikasi, dan portofolio profesional. Dr.Hc./Prof.Hc. adalah gelar kehormatan berdasarkan pengakuan simbolis atas pengabdian seumur hidup dan memiliki status yang berbeda." },
    suitableApplicants: { en: "Senior leaders, executives, and expert practitioners aged 30+ who hold a Master's degree or have exceptional professional standing, with 8+ years of advanced practice — ready for the highest formal credential without pausing their work.", id: "Pemimpin senior, eksekutif, dan praktisi ahli berusia 30+ yang memiliki gelar Master atau memiliki status profesional luar biasa, dengan 8+ tahun praktik lanjutan — siap untuk kredensial formal tertinggi tanpa menghentikan pekerjaan mereka." },
    requiredDocuments: { en: "1. Detailed Curriculum Vitae (CV)\n2. Highest diploma\n3. Key professional achievements and portfolio", id: "1. Curriculum Vitae (CV) terperinci\n2. Ijazah tertinggi\n3. Prestasi profesional utama dan portofolio" },
    curriculumSummary: { en: "1. Advanced Profile Review — Verify highest qualifications, major projects, leadership impact.\n2. Doctoral-Level RPL — Match your experience against IAO international doctoral standards.\n3. Self-Paced Deepening — Access tailored advanced materials from home.\n4. Professional Portfolio — Submit your key work plus reflective summary — no traditional dissertation required.\n5. Award — Receive your fully accredited earned doctorate, valid for life.", id: "1. Tinjauan Profil Lanjutan — Verifikasi kualifikasi tertinggi, proyek utama, dampak kepemimpinan.\n2. RPL Tingkat Doktoral — Cocokkan pengalaman Anda dengan standar doktoral internasional IAO.\n3. Pendalaman Mandiri — Akses materi lanjutan yang disesuaikan dari rumah.\n4. Portofolio Profesional — Kirimkan karya utama Anda plus ringkasan reflektif — tanpa disertasi tradisional.\n5. Penghargaan — Terima doktor formal terakreditasi penuh Anda, berlaku seumur hidup." },
    assessmentMethod: { en: "Advanced profile review, doctoral-level RPL assessment, and professional portfolio evaluation by the IAO-accredited committee.", id: "Tinjauan profil lanjutan, penilaian RPL tingkat doktoral, dan evaluasi portofolio profesional oleh komite terakreditasi IAO." },
    graduationRequirements: { en: "Successful completion of the advanced profile review, doctoral-level RPL assessment, and professional portfolio submission.", id: "Penyelesaian tinjauan profil lanjutan, penilaian RPL tingkat doktoral, dan pengiriman portofolio profesional yang berhasil." },
    fee: 3500,
    feeInformation: { en: "USD 3,500 + USD 100 registration fee", id: "USD 3.500 + biaya pendaftaran USD 100" },
    accreditationInformation: { en: "Accredited by the International Accreditation Organization (IAO) — the world's leading international accreditation body.", id: "Diakreditasi oleh International Accreditation Organization (IAO) — badan akreditasi internasional terkemuka di dunia." },
    disclosure: { en: "This is an earned doctorate (Ph.D., DBA, Ed.D.), not an honorary title (Dr.Hc./Prof.Hc.). Admission and degree conferral decisions are made by Hafiz Indonesia Emas Academy under IAO accreditation standards. International.degree is a service platform, not a degree-granting institution.", id: "Ini adalah doktor formal (Ph.D., DBA, Ed.D.), bukan gelar kehormatan (Dr.Hc./Prof.Hc.). Keputusan penerimaan dan pemberian gelar dibuat oleh Hafiz Indonesia Emas Academy di bawah standar akreditasi IAO. International.degree adalah platform layanan, bukan institusi pemberi gelar." },
    isPublished: true,
    displayOrder: 3,
    whatsappMessage: {
      en: "Hello International.degree, I would like to learn more about the Doctoral Degree Pathway.",
      id: "Halo International.degree, saya ingin mengetahui lebih lanjut tentang Jalur Doktor.",
    },
  },
  {
    slug: "international-bachelor",
    category: "Internationally Non Accredited Degrees",
    name: { en: "Bachelor of Science (B.Sc.)", id: "Bachelor of Science (B.Sc.)" },
    description: { en: "Internationally recognized non-accredited bachelor's degree conferred through Recognition of Prior Learning (RPL).", id: "Gelar sarjana non-akreditasi yang diakui secara internasional diberikan melalui Recognition of Prior Learning (RPL)." },
    icon: "FaBookOpen",
    institutionSlug: "sample-university",
    institutionName: institution,
    credentialType: { en: "Bachelor of Science (B.Sc.)", id: "Bachelor of Science (B.Sc.)" },
    studyMethod: { en: "Recognition of Prior Learning (RPL) Assessment", id: "Penilaian Recognition of Prior Learning (RPL)" },
    duration: { en: "Assessment completed within 2–4 weeks", id: "Penilaian selesai dalam 2–4 minggu" },
    eligibility: { en: "Minimum 30 years of age, Senior High School (SLTA) qualification, and established competence in the relevant field.", id: "Minimal usia 30 tahun, kualifikasi SLTA, dan kompetensi yang mapan di bidang terkait." },
    overview: { en: "This internationally recognized non-accredited bachelor's degree (B.Sc.) is conferred based on the Recognition of Prior Learning (RPL) framework. Your professional experience and competencies are evaluated to award the B.Sc. degree aligned with your field of expertise.", id: "Gelar sarjana non-akreditasi yang diakui secara internasional (B.Sc.) ini diberikan berdasarkan kerangka Recognition of Prior Learning (RPL). Pengalaman profesional dan kompetensi Anda dievaluasi untuk memberikan gelar B.Sc. yang sesuai dengan bidang keahlian Anda." },
    suitableApplicants: { en: "Professionals aged 30+ seeking an internationally recognized bachelor's degree credential based on their professional experience.", id: "Profesional berusia 30+ yang mencari kredensial gelar sarjana yang diakui secara internasional berdasarkan pengalaman profesional mereka." },
    requiredDocuments: { en: "1. Detailed Curriculum Vitae (CV)\n2. Specific degree choice aligned with your area of competence\n3. Proof of completed payment", id: "1. Curriculum Vitae (CV) terperinci\n2. Pilihan gelar spesifik yang sesuai dengan bidang kompetensi Anda\n3. Bukti pembayaran lunas" },
    curriculumSummary: { en: "Recognition of Prior Learning (RPL) evaluation — competency mapping, evidence portfolio review, and academic credit assessment.", id: "Evaluasi Recognition of Prior Learning (RPL) — pemetaan kompetensi, tinjauan portofolio bukti, dan penilaian kredit akademik." },
    assessmentMethod: { en: "Portfolio-based competency assessment and prior learning evaluation by the academic committee.", id: "Penilaian kompetensi berbasis portofolio dan evaluasi pembelajaran sebelumnya oleh komite akademik." },
    graduationRequirements: { en: "Successful completion of the RPL assessment and verification of submitted credentials.", id: "Penyelesaian penilaian RPL yang berhasil dan verifikasi kredensial yang diajukan." },
    fee: 200,
    feeInformation: { en: "USD 200 + USD 100 registration fee", id: "USD 200 + biaya pendaftaran USD 100" },
    accreditationInformation: { en: "Internationally recognized non-accredited degree.", id: "Gelar non-akreditasi yang diakui secara internasional." },
    disclosure: { en: "This degree is conferred based on Recognition of Prior Learning (RPL). This is a non-accredited degree. Admission and degree conferral decisions are made by the issuing institution. International.degree is a service platform, not a degree-granting institution.", id: "Gelar ini diberikan berdasarkan Recognition of Prior Learning (RPL). Ini adalah gelar non-akreditasi. Keputusan penerimaan dan pemberian gelar dibuat oleh institusi penerbit. International.degree adalah platform layanan, bukan institusi pemberi gelar." },
    isPublished: true,
    displayOrder: 4,
  },
  {
    slug: "international-master",
    category: "Internationally Non Accredited Degrees",
    name: { en: "Master of Science (M.Sc.)", id: "Master of Science (M.Sc.)" },
    description: { en: "Internationally recognized non-accredited master's degree conferred through Recognition of Prior Learning (RPL).", id: "Gelar magister non-akreditasi yang diakui secara internasional diberikan melalui Recognition of Prior Learning (RPL)." },
    icon: "FaGraduationCap",
    institutionSlug: "sample-university",
    institutionName: institution,
    credentialType: { en: "Master of Science (M.Sc.)", id: "Master of Science (M.Sc.)" },
    studyMethod: { en: "Recognition of Prior Learning (RPL) Assessment", id: "Penilaian Recognition of Prior Learning (RPL)" },
    duration: { en: "Assessment completed within 2–4 weeks", id: "Penilaian selesai dalam 2–4 minggu" },
    eligibility: { en: "Minimum 30 years of age, Senior High School (SLTA) qualification, and established competence in the relevant field.", id: "Minimal usia 30 tahun, kualifikasi SLTA, dan kompetensi yang mapan di bidang terkait." },
    overview: { en: "This internationally recognized non-accredited master's degree (M.Sc.) is conferred based on the Recognition of Prior Learning (RPL) framework. Your professional experience and advanced competencies are evaluated to award the M.Sc. degree aligned with your field of expertise.", id: "Gelar magister non-akreditasi yang diakui secara internasional (M.Sc.) ini diberikan berdasarkan kerangka Recognition of Prior Learning (RPL). Pengalaman profesional dan kompetensi lanjutan Anda dievaluasi untuk memberikan gelar M.Sc. yang sesuai dengan bidang keahlian Anda." },
    suitableApplicants: { en: "Senior professionals aged 30+ seeking an internationally recognized master's degree credential based on their professional experience.", id: "Profesional senior berusia 30+ yang mencari kredensial gelar magister yang diakui secara internasional berdasarkan pengalaman profesional mereka." },
    requiredDocuments: { en: "1. Detailed Curriculum Vitae (CV)\n2. Specific degree choice aligned with your area of competence\n3. Proof of completed payment", id: "1. Curriculum Vitae (CV) terperinci\n2. Pilihan gelar spesifik yang sesuai dengan bidang kompetensi Anda\n3. Bukti pembayaran lunas" },
    curriculumSummary: { en: "Recognition of Prior Learning (RPL) evaluation — advanced competency mapping, evidence portfolio review, and postgraduate academic credit assessment.", id: "Evaluasi Recognition of Prior Learning (RPL) — pemetaan kompetensi lanjutan, tinjauan portofolio bukti, dan penilaian kredit akademik pascasarjana." },
    assessmentMethod: { en: "Portfolio-based advanced competency assessment and prior learning evaluation by the academic committee.", id: "Penilaian kompetensi lanjutan berbasis portofolio dan evaluasi pembelajaran sebelumnya oleh komite akademik." },
    graduationRequirements: { en: "Successful completion of the RPL assessment and verification of submitted credentials.", id: "Penyelesaian penilaian RPL yang berhasil dan verifikasi kredensial yang diajukan." },
    fee: 400,
    feeInformation: { en: "USD 400 + USD 100 registration fee", id: "USD 400 + biaya pendaftaran USD 100" },
    accreditationInformation: { en: "Internationally recognized non-accredited degree.", id: "Gelar non-akreditasi yang diakui secara internasional." },
    disclosure: { en: "This degree is conferred based on Recognition of Prior Learning (RPL). This is a non-accredited degree. Admission and degree conferral decisions are made by the issuing institution. International.degree is a service platform, not a degree-granting institution.", id: "Gelar ini diberikan berdasarkan Recognition of Prior Learning (RPL). Ini adalah gelar non-akreditasi. Keputusan penerimaan dan pemberian gelar dibuat oleh institusi penerbit. International.degree adalah platform layanan, bukan institusi pemberi gelar." },
    isPublished: true,
    displayOrder: 5,
  },
  {
    slug: "doctor-honoris-causa",
    category: "Internationally Non Accredited Degrees",
    name: { en: "Doctor Honoris Causa (Dr.Hc.)", id: "Doctor Honoris Causa (Dr.Hc.)" },
    description: { en: "The highest international non-academic honorary doctoral degree conferred in recognition of outstanding lifetime achievement.", id: "Gelar doktor kehormatan non-akademik internasional tertinggi yang diberikan sebagai pengakuan atas pencapaian seumur hidup yang luar biasa." },
    icon: "FaAward",
    institutionSlug: "sample-university",
    institutionName: institution,
    credentialType: { en: "Doctor Honoris Causa (Dr.Hc.)", id: "Doctor Honoris Causa (Dr.Hc.)" },
    studyMethod: { en: "Honorary Recognition", id: "Pengakuan Kehormatan" },
    duration: { en: "Assessment completed within 2–4 weeks", id: "Penilaian selesai dalam 2–4 minggu" },
    eligibility: { en: "Minimum 30 years of age, Senior High School (SLTA) qualification, and outstanding lifetime achievement in the relevant field.", id: "Minimal usia 30 tahun, kualifikasi SLTA, dan pencapaian seumur hidup yang luar biasa di bidang terkait." },
    overview: { en: "Doctor Honoris Causa (Dr.Hc.) is the highest international non-academic honorary certification. It is conferred in recognition of individuals who have made significant contributions and demonstrated outstanding achievement in their field throughout their career.", id: "Doctor Honoris Causa (Dr.Hc.) adalah sertifikasi kehormatan non-akademik internasional tertinggi. Ini diberikan sebagai pengakuan atas individu yang telah memberikan kontribusi signifikan dan menunjukkan pencapaian luar biasa di bidangnya sepanjang karir mereka." },
    suitableApplicants: { en: "Distinguished individuals aged 30+ with a record of outstanding lifetime achievement and significant contributions to their field.", id: "Individu terhormat berusia 30+ dengan rekam jejak pencapaian seumur hidup yang luar biasa dan kontribusi signifikan di bidangnya." },
    requiredDocuments: { en: "1. Detailed Curriculum Vitae (CV)\n2. Statement of achievement and contributions\n3. Proof of completed payment", id: "1. Curriculum Vitae (CV) terperinci\n2. Pernyataan pencapaian dan kontribusi\n3. Bukti pembayaran lunas" },
    curriculumSummary: { en: "Honorary recognition based on documented lifetime achievement and contributions to the field.", id: "Pengakuan kehormatan berdasarkan pencapaian seumur hidup dan kontribusi yang terdokumentasi di bidangnya." },
    assessmentMethod: { en: "Achievement and contribution review by the honorary recognition committee.", id: "Tinjauan pencapaian dan kontribusi oleh komite pengakuan kehormatan." },
    graduationRequirements: { en: "Successful review and verification of submitted achievements and credentials.", id: "Tinjauan berhasil dan verifikasi pencapaian serta kredensial yang diajukan." },
    fee: 1000,
    feeInformation: { en: "USD 1,000 + USD 100 registration fee", id: "USD 1.000 + biaya pendaftaran USD 100" },
    accreditationInformation: { en: "International non-academic honorary certification.", id: "Sertifikasi kehormatan non-akademik internasional." },
    disclosure: { en: "Doctor Honoris Causa (Dr.Hc.) is a non-academic honorary title. It is not an academic doctoral degree. International.degree is a service platform, not a degree-granting institution.", id: "Doctor Honoris Causa (Dr.Hc.) adalah gelar kehormatan non-akademik. Ini bukan gelar doktor akademik. International.degree adalah platform layanan, bukan institusi pemberi gelar." },
    isPublished: true,
    displayOrder: 6,
  },
  {
    slug: "professor-honoris-causa",
    category: "Internationally Non Accredited Degrees",
    name: { en: "Professor Honoris Causa (Prof.Hc.)", id: "Professor Honoris Causa (Prof.Hc.)" },
    description: { en: "The highest international non-academic honorary professorship conferred in recognition of exceptional expertise and contribution.", id: "Gelar profesor kehormatan non-akademik internasional tertinggi yang diberikan sebagai pengakuan atas keahlian dan kontribusi luar biasa." },
    icon: "FaUserTie",
    institutionSlug: "sample-university",
    institutionName: institution,
    credentialType: { en: "Professor Honoris Causa (Prof.Hc.)", id: "Professor Honoris Causa (Prof.Hc.)" },
    studyMethod: { en: "Honorary Recognition", id: "Pengakuan Kehormatan" },
    duration: { en: "Assessment completed within 2–4 weeks", id: "Penilaian selesai dalam 2–4 minggu" },
    eligibility: { en: "Minimum 30 years of age, Senior High School (SLTA) qualification, and exceptional expertise and contribution in the relevant field.", id: "Minimal usia 30 tahun, kualifikasi SLTA, dan keahlian serta kontribusi luar biasa di bidang terkait." },
    overview: { en: "Professor Honoris Causa (Prof.Hc.) is the highest international non-academic honorary professorship. It is conferred in recognition of individuals who have demonstrated exceptional expertise, leadership, and contribution in their field throughout their career.", id: "Professor Honoris Causa (Prof.Hc.) adalah gelar profesor kehormatan non-akademik internasional tertinggi. Ini diberikan sebagai pengakuan atas individu yang telah menunjukkan keahlian luar biasa, kepemimpinan, dan kontribusi di bidangnya sepanjang karir mereka." },
    suitableApplicants: { en: "Eminent individuals aged 30+ with exceptional expertise, leadership, and significant contributions to their field.", id: "Individu terkemuka berusia 30+ dengan keahlian luar biasa, kepemimpinan, dan kontribusi signifikan di bidangnya." },
    requiredDocuments: { en: "1. Detailed Curriculum Vitae (CV)\n2. Statement of expertise, leadership, and contributions\n3. Proof of completed payment", id: "1. Curriculum Vitae (CV) terperinci\n2. Pernyataan keahlian, kepemimpinan, dan kontribusi\n3. Bukti pembayaran lunas" },
    curriculumSummary: { en: "Honorary recognition based on documented expertise, leadership, and contributions to the field.", id: "Pengakuan kehormatan berdasarkan keahlian, kepemimpinan, dan kontribusi yang terdokumentasi di bidangnya." },
    assessmentMethod: { en: "Expertise and contribution review by the honorary recognition committee.", id: "Tinjauan keahlian dan kontribusi oleh komite pengakuan kehormatan." },
    graduationRequirements: { en: "Successful review and verification of submitted achievements and credentials.", id: "Tinjauan berhasil dan verifikasi pencapaian serta kredensial yang diajukan." },
    fee: 2000,
    feeInformation: { en: "USD 2,000 + USD 100 registration fee", id: "USD 2.000 + biaya pendaftaran USD 100" },
    accreditationInformation: { en: "International non-academic honorary certification.", id: "Sertifikasi kehormatan non-akademik internasional." },
    disclosure: { en: "Professor Honoris Causa (Prof.Hc.) is a non-academic honorary title. It is not an academic professorship. International.degree is a service platform, not a degree-granting institution.", id: "Professor Honoris Causa (Prof.Hc.) adalah gelar kehormatan non-akademik. Ini bukan jabatan profesor akademik. International.degree adalah platform layanan, bukan institusi pemberi gelar." },
    isPublished: true,
    displayOrder: 7,
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

export function getProgramsByCategory(category: string): Program[] {
  return programs.filter((p) => p.category === category && p.isPublished);
}
