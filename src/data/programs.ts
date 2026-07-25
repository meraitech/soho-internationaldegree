export interface QualificationType {
  slug: string;
  icon: string;
  reactIcon: string;
  kind: { en: string; id: string };
  name: { en: string; id: string };
  tagline: { en: string; id: string };
  description: { en: string; id: string };
  suitableFor: { en: string; id: string };
  features: { en: string[]; id: string[] };
  disclosure: { en: string; id: string };
  displayOrder: number;
  isPublished: boolean;
}

export const qualificationTypes: QualificationType[] = [
  {
    slug: "bachelor",
    icon: "🎓",
    reactIcon: "FaGraduationCap",
    kind: { en: "Degree Program", id: "Program Gelar" },
    name: { en: "Bachelor Degree (B.Sc. / S1 equivalent)", id: "Bachelor Degree (B.Sc. / Setara S1)" },
    tagline: {
      en: "Already have college credits? Earn the recognized bachelor's degree your experience deserves — fast, affordable, and accredited.",
      id: "Udah pernah kuliah? Dapatkan gelar sarjana yang layak Anda dapatkan — cepat, biaya terjangkau, terakreditasi.",
    },
    description: {
      en: "You've already started your academic journey. Now complete it with a bachelor's degree that recognizes the college credits you've earned and the professional experience you've built. No need to start over or spend years in classrooms — your existing knowledge counts toward your degree.",
      id: "Anda sudah memulai perjalanan akademik Anda. Sekarang selesaikan dengan gelar sarjana yang mengakui kredit kuliah dan pengalaman profesional yang sudah Anda bangun. Tidak perlu memulai dari awal atau menghabiskan bertahun-tahun di kelas — pengetahuan Anda yang sudah ada diperhitungkan untuk gelar Anda.",
    },
    suitableFor: {
      en: "Professionals who have attended college (completed or incomplete) and want to earn a recognized bachelor's degree based on their existing credits and work experience.",
      id: "Profesional yang sudah pernah kuliah (lulus atau tidak) dan ingin mendapatkan gelar sarjana yang diakui berdasarkan kredit kuliah dan pengalaman kerja yang sudah ada.",
    },
    features: {
      en: [
        "Recognition of prior college credits and professional experience",
        "Fast completion — no need to repeat what you've already learned",
        "Nationally accredited (A) and/or internationally recognized (EAO)",
        "Affordable, transparent fee structure",
        "Personal academic advisor throughout the process",
      ],
      id: [
        "Pengakuan kredit kuliah dan pengalaman profesional yang sudah ada",
        "Penyelesaian cepat — tidak perlu mengulang yang sudah Anda pelajari",
        "Terakreditasi nasional (A) dan/atau diakui internasional (EAO)",
        "Biaya terjangkau dan transparan",
        "Penasihat akademik pribadi selama proses",
      ],
    },
    disclosure: {
      en: "International.degree is a service platform, not a degree-granting institution. Degrees are conferred by partner universities based on RPL assessment. Admission decisions are made solely by the partner institution.",
      id: "International.degree adalah platform layanan, bukan institusi pemberi gelar. Gelar diberikan oleh universitas mitra berdasarkan penilaian RPL. Keputusan penerimaan dibuat sepenuhnya oleh institusi mitra.",
    },
    displayOrder: 1,
    isPublished: true,
  },
  {
    slug: "master",
    icon: "🎓",
    reactIcon: "FaBookOpen",
    kind: { en: "Degree Program", id: "Program Gelar" },
    name: { en: "Master Degree (M.Sc. / S2 equivalent)", id: "Master Degree (M.Sc. / Setara S2)" },
    tagline: {
      en: "Already hold a bachelor's? Level up with a master's degree that values your professional experience — no long classroom hours required.",
      id: "Udah S1? Naik level dengan gelar magister yang menghargai pengalaman profesional Anda — tanpa harus duduk di kelas berjam-jam.",
    },
    description: {
      en: "You've already proven yourself in the field. Now earn the master's degree that matches your professional standing. Built for experienced professionals who want formal recognition of their advanced expertise without interrupting their career.",
      id: "Anda sudah membuktikan diri di lapangan. Sekarang dapatkan gelar magister yang sesuai dengan posisi profesional Anda. Dibangun untuk profesional berpengalaman yang ingin pengakuan formal atas keahlian lanjutan mereka tanpa mengganggu karir.",
    },
    suitableFor: {
      en: "Bachelor's degree holders with significant professional experience who want to earn a master's degree through recognition of their existing expertise and work achievements.",
      id: "Pemegang gelar sarjana dengan pengalaman profesional signifikan yang ingin mendapatkan gelar magister melalui pengakuan atas keahlian dan pencapaian kerja yang sudah ada.",
    },
    features: {
      en: [
        "Recognition of advanced professional experience and expertise",
        "Fast-track completion — designed for working professionals",
        "Nationally accredited (A) and/or internationally recognized (EAO)",
        "No mandatory classroom attendance",
        "Dedicated advisor guides you through every step",
      ],
      id: [
        "Pengakuan atas pengalaman profesional dan keahlian lanjutan",
        "Jalur cepat — dirancang untuk profesional yang bekerja",
        "Terakreditasi nasional (A) dan/atau diakui internasional (EAO)",
        "Tanpa kehadiran kelas wajib",
        "Penasihat khusus yang membimbing Anda di setiap langkah",
      ],
    },
    disclosure: {
      en: "International.degree is a service platform, not a degree-granting institution. Degrees are conferred by partner universities based on RPL assessment. Admission decisions are made solely by the partner institution.",
      id: "International.degree adalah platform layanan, bukan institusi pemberi gelar. Gelar diberikan oleh universitas mitra berdasarkan penilaian RPL. Keputusan penerimaan dibuat sepenuhnya oleh institusi mitra.",
    },
    displayOrder: 2,
    isPublished: true,
  },
  {
    slug: "doctoral",
    icon: "🎓",
    reactIcon: "FaFlask",
    kind: { en: "Degree Program", id: "Program Gelar" },
    name: { en: "Doctoral Degree (Ph.D. / DBA / Ed.D.)", id: "Doctoral Degree (Ph.D. / DBA / Ed.D.)" },
    tagline: {
      en: "The highest earned qualification — validated through your career achievements, leadership, and impact. No traditional dissertation required.",
      id: "Kualifikasi formal tertinggi — divalidasi melalui pencapaian karir, kepemimpinan, dan dampak Anda. Tanpa disertasi tradisional.",
    },
    description: {
      en: "Your life's work is your dissertation. An earned doctorate (Ph.D., DBA, Ed.D.) that recognizes your advanced expertise, leadership impact, and proven mastery — not how many hours you spent in a lecture hall. This is the pinnacle of formal academic recognition for senior professionals.",
      id: "Karya hidup Anda adalah disertasi Anda. Doktor formal (Ph.D., DBA, Ed.D.) yang mengakui keahlian lanjutan, dampak kepemimpinan, dan penguasaan Anda yang terbukti — bukan berapa jam Anda habiskan di ruang kuliah. Ini adalah puncak pengakuan akademik formal untuk profesional senior.",
    },
    suitableFor: {
      en: "Senior leaders, executives, and expert practitioners with 8+ years of advanced practice who want the highest formal credential without pausing their career.",
      id: "Pemimpin senior, eksekutif, dan praktisi ahli dengan 8+ tahun pengalaman lanjutan yang menginginkan kredensial formal tertinggi tanpa menghentikan karir mereka.",
    },
    features: {
      en: [
        "Doctorate earned through professional portfolio — no traditional dissertation",
        "Validates advanced expertise, leadership, and real-world impact",
        "Internationally recognized accreditation (EAO / IAO)",
        "Self-paced, flexible timeline",
        "Prestigious earned doctorate title (Ph.D., DBA, Ed.D.)",
      ],
      id: [
        "Doktor diperoleh melalui portofolio profesional — tanpa disertasi tradisional",
        "Memvalidasi keahlian lanjutan, kepemimpinan, dan dampak nyata",
        "Akreditasi yang diakui secara internasional (EAO / IAO)",
        "Jadwal fleksibel, sesuai kecepatan Anda",
        "Gelar doktor formal yang prestisius (Ph.D., DBA, Ed.D.)",
      ],
    },
    disclosure: {
      en: "This is an earned doctorate (Ph.D., DBA, Ed.D.), not an honorary title (Dr.Hc./Prof.Hc.). International.degree is a service platform, not a degree-granting institution. Admission and degree conferral decisions are made by the partner institution.",
      id: "Ini adalah doktor formal (Ph.D., DBA, Ed.D.), bukan gelar kehormatan (Dr.Hc./Prof.Hc.). International.degree adalah platform layanan, bukan institusi pemberi gelar. Keputusan penerimaan dan pemberian gelar dibuat oleh institusi mitra.",
    },
    displayOrder: 3,
    isPublished: true,
  },
  {
    slug: "honorary",
    icon: "🏅",
    reactIcon: "FaAward",
    kind: { en: "Honorary Award", id: "Penghargaan Kehormatan" },
    name: { en: "Honorary Award (Dr.Hc. / Prof.Hc.)", id: "Honorary Award (Dr.Hc. / Prof.Hc.)" },
    tagline: {
      en: "International recognition for a lifetime of achievement, contribution, and impact in your field.",
      id: "Pengakuan internasional untuk pencapaian seumur hidup, kontribusi, dan dampak di bidang Anda.",
    },
    description: {
      en: "Some achievements are too significant to go unrecognized. Doctor Honoris Causa (Dr.Hc.) and Professor Honoris Causa (Prof.Hc.) are the highest international non-academic honorary titles — awarded to individuals whose life's work has made a lasting impact on their community, industry, or society.",
      id: "Beberapa pencapaian terlalu signifikan untuk tidak diakui. Doctor Honoris Causa (Dr.Hc.) dan Professor Honoris Causa (Prof.Hc.) adalah gelar kehormatan non-akademik internasional tertinggi — diberikan kepada individu yang karya hidupnya telah memberikan dampak abadi pada komunitas, industri, atau masyarakat mereka.",
    },
    suitableFor: {
      en: "Distinguished individuals with a record of outstanding lifetime achievement, significant community contributions, and lasting impact in their field.",
      id: "Individu terhormat dengan rekam jejak pencapaian seumur hidup yang luar biasa, kontribusi komunitas yang signifikan, dan dampak abadi di bidangnya.",
    },
    features: {
      en: [
        "Highest international non-academic honorary recognition",
        "Awarded for lifetime achievement and community impact",
        "Globally recognized honorary title (Dr.Hc. / Prof.Hc.)",
        "Simple documentation process",
        "Lifetime title usable in professional and social contexts",
      ],
      id: [
        "Pengakuan kehormatan non-akademik internasional tertinggi",
        "Diberikan untuk pencapaian seumur hidup dan dampak komunitas",
        "Gelar kehormatan yang diakui secara global (Dr.Hc. / Prof.Hc.)",
        "Proses dokumentasi sederhana",
        "Gelar seumur hidup yang dapat digunakan dalam konteks profesional dan sosial",
      ],
    },
    disclosure: {
      en: "Doctor Honoris Causa (Dr.Hc.) and Professor Honoris Causa (Prof.Hc.) are non-academic honorary titles. They are not academic degrees. International.degree is a service platform, not a degree-granting institution.",
      id: "Doctor Honoris Causa (Dr.Hc.) dan Professor Honoris Causa (Prof.Hc.) adalah gelar kehormatan non-akademik. Ini bukan gelar akademik. International.degree adalah platform layanan, bukan institusi pemberi gelar.",
    },
    displayOrder: 4,
    isPublished: true,
  },
  {
    slug: "professional-certificate",
    icon: "📜",
    reactIcon: "FaCertificate",
    kind: { en: "Professional Certificate", id: "Sertifikat Profesional" },
    name: { en: "Professional Certificate (Strategic Leadership, Global Business, etc.)", id: "Sertifikat Profesional (Strategic Leadership, Global Business, dll.)" },
    tagline: {
      en: "Fast, focused credentials for working professionals — gain recognized certification in high-demand fields without leaving your career.",
      id: "Kredensial cepat dan terfokus untuk profesional — dapatkan sertifikasi yang diakui di bidang dengan permintaan tinggi tanpa meninggalkan karir Anda.",
    },
    description: {
      en: "Need a credential fast? Professional certificates are designed for working professionals who want recognized certification in strategic leadership, global business, and other high-impact fields. Shorter than a full degree, but powerful enough to open new doors.",
      id: "Butuh kredensial dengan cepat? Sertifikat profesional dirancang untuk profesional yang bekerja yang menginginkan sertifikasi diakui dalam kepemimpinan strategis, bisnis global, dan bidang berdampak tinggi lainnya. Lebih pendek dari gelar penuh, tetapi cukup kuat untuk membuka pintu baru.",
    },
    suitableFor: {
      en: "Working professionals who want to add a recognized credential to their profile quickly — ideal for career transitions, promotions, or expanding expertise into new areas.",
      id: "Profesional yang bekerja yang ingin menambahkan kredensial yang diakui ke profil mereka dengan cepat — ideal untuk transisi karir, promosi, atau memperluas keahlian ke area baru.",
    },
    features: {
      en: [
        "Fast completion — get certified in weeks, not years",
        "Focused on practical, high-demand skills",
        "Recognized international certification",
        "No prior degree required for most programs",
        "Ideal complement to existing professional experience",
      ],
      id: [
        "Penyelesaian cepat — dapatkan sertifikasi dalam hitungan minggu, bukan tahun",
        "Terfokus pada keterampilan praktis dengan permintaan tinggi",
        "Sertifikasi internasional yang diakui",
        "Sebagian besar program tidak memerlukan gelar sebelumnya",
        "Pelengkap ideal untuk pengalaman profesional yang sudah ada",
      ],
    },
    disclosure: {
      en: "Professional certificates are non-degree credentials. They do not confer academic degrees. International.degree is a service platform, not a certifying institution.",
      id: "Sertifikat profesional adalah kredensial non-gelar. Ini tidak memberikan gelar akademik. International.degree adalah platform layanan, bukan institusi pemberi sertifikasi.",
    },
    displayOrder: 5,
    isPublished: true,
  },
];

export function getQualificationBySlug(slug: string): QualificationType | undefined {
  return qualificationTypes.find((q) => q.slug === slug);
}
