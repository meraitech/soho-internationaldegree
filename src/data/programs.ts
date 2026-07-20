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
    category: "Nationally Accredited Degrees",
    name: { en: "Doctoral Degree (S3)", id: "Gelar Doktor (S3)" },
    description: { en: "Nationally accredited doctoral degree conferred through Recognition of Prior Learning (RPL). Available disciplines include DBA, Ed.D., Ph.D., and other relevant fields.", id: "Gelar doktor terakreditasi nasional yang diberikan melalui Recognition of Prior Learning (RPL). Disiplin yang tersedia meliputi DBA, Ed.D., Ph.D., dan bidang relevan lainnya." },
    icon: "FaFlask",
    institutionSlug: "sample-university",
    institutionName: institution,
    credentialType: { en: "Doctoral Degree (S3)", id: "Gelar Doktor (S3)" },
    studyMethod: { en: "Recognition of Prior Learning (RPL) Assessment", id: "Penilaian Recognition of Prior Learning (RPL)" },
    duration: { en: "Assessment completed within 4–8 weeks", id: "Penilaian selesai dalam 4–8 minggu" },
    eligibility: { en: "Minimum 30 years of age, Senior High School (SLTA) qualification, and established competence at the expert level in the relevant field.", id: "Minimal usia 30 tahun, kualifikasi SLTA, dan kompetensi yang mapan di tingkat ahli di bidang terkait." },
    overview: { en: "This nationally accredited doctoral degree is conferred based on the Recognition of Prior Learning (RPL) framework. Your extensive professional experience and expert-level competencies are evaluated against doctoral academic standards to award the appropriate degree title (DBA, Ed.D., Ph.D., or other relevant disciplines).", id: "Gelar doktor terakreditasi nasional ini diberikan berdasarkan kerangka Recognition of Prior Learning (RPL). Pengalaman profesional ekstensif dan kompetensi tingkat ahli Anda dievaluasi terhadap standar akademik doktoral untuk memberikan gelar yang sesuai (DBA, Ed.D., Ph.D., atau disiplin relevan lainnya)." },
    suitableApplicants: { en: "Expert-level professionals aged 30+ with a minimum of Senior High School (SLTA) education who have established outstanding competence in their field and seek the highest level of academic recognition.", id: "Profesional tingkat ahli berusia 30+ dengan pendidikan minimal SLTA yang memiliki kompetensi luar biasa yang mapan di bidangnya dan mencari pengakuan akademik tingkat tertinggi." },
    requiredDocuments: { en: "1. Detailed Curriculum Vitae (CV)\n2. Specific degree choice aligned with your area of competence\n3. Proof of completed payment", id: "1. Curriculum Vitae (CV) terperinci\n2. Pilihan gelar spesifik yang sesuai dengan bidang kompetensi Anda\n3. Bukti pembayaran lunas" },
    curriculumSummary: { en: "Recognition of Prior Learning (RPL) evaluation — expert-level competency mapping, comprehensive evidence portfolio review, and doctoral academic credit assessment.", id: "Evaluasi Recognition of Prior Learning (RPL) — pemetaan kompetensi tingkat ahli, tinjauan portofolio bukti komprehensif, dan penilaian kredit akademik doktoral." },
    assessmentMethod: { en: "Portfolio-based expert competency assessment and prior learning evaluation by the academic committee.", id: "Penilaian kompetensi ahli berbasis portofolio dan evaluasi pembelajaran sebelumnya oleh komite akademik." },
    graduationRequirements: { en: "Successful completion of the RPL assessment and verification of submitted credentials.", id: "Penyelesaian penilaian RPL yang berhasil dan verifikasi kredensial yang diajukan." },
    fee: 6000,
    feeInformation: { en: "USD 6,000 + USD 100 registration fee", id: "USD 6.000 + biaya pendaftaran USD 100" },
    accreditationInformation: { en: "Nationally accredited degree awarded by an accredited Indonesian university partner.", id: "Gelar terakreditasi nasional yang diberikan oleh mitra universitas terakreditasi Indonesia." },
    disclosure: { en: "This degree is conferred based on Recognition of Prior Learning (RPL). Admission and degree conferral decisions are made by the issuing university. International.degree is a service platform, not a degree-granting institution.", id: "Gelar ini diberikan berdasarkan Recognition of Prior Learning (RPL). Keputusan penerimaan dan pemberian gelar dibuat oleh universitas penerbit. International.degree adalah platform layanan, bukan institusi pemberi gelar." },
    isPublished: true,
    displayOrder: 3,
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
