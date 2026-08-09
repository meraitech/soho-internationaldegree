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
      en: "Senior professional without a bachelor's degree? Earn the degree your career experience deserves. Fast, nationally accredited, and affordable.",
      id: "Profesional senior tanpa gelar sarjana? Dapatkan gelar yang layak untuk pengalaman karier Anda. Cepat, terakreditasi nasional, dan terjangkau.",
    },
    description: {
      en: "You have built a successful career through years of professional experience. Now earn a bachelor's degree that formally recognizes your expertise. No need to start from scratch. No need to sit through years of classes. Your existing experience is the foundation of your degree.",
      id: "Anda telah membangun karier sukses melalui bertahun-tahun pengalaman profesional. Sekarang dapatkan gelar sarjana yang secara formal mengakui keahlian Anda. Tidak perlu memulai dari nol. Tidak perlu duduk di kelas bertahun-tahun. Pengalaman Anda adalah fondasi gelar Anda.",
    },
    suitableFor: {
      en: "Senior professionals with extensive work experience who want a recognized bachelor's degree that matches their professional standing.",
      id: "Profesional senior dengan pengalaman kerja luas yang menginginkan gelar sarjana yang diakui sesuai dengan posisi profesional mereka.",
    },
    features: {
      en: [
        "Degree based on professional experience. No classroom required.",
        "Fast completion designed for busy professionals.",
        "Nationally accredited (A) and internationally recognized (IAO).",
        "Affordable. Real value for established professionals.",
        "Personal academic advisor throughout the process.",
      ],
      id: [
        "Gelar berdasarkan pengalaman profesional. Tanpa harus ke kelas.",
        "Penyelesaian cepat dirancang untuk profesional sibuk.",
        "Terakreditasi nasional (A) dan diakui internasional (IAO).",
        "Biaya terjangkau. Nilai nyata untuk profesional mapan.",
        "Penasihat akademik pribadi selama proses.",
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
      en: "Senior executive with a bachelor's? Advance your credentials. Get a master's degree that recognizes your leadership experience. No campus required.",
      id: "Eksekutif senior dengan S1? Tingkatkan kredensial Anda. Dapatkan gelar magister yang mengakui pengalaman kepemimpinan Anda. Tanpa perlu ke kampus.",
    },
    description: {
      en: "You have led teams, solved complex problems, and delivered results. Now earn a master's degree that recognizes your advanced expertise and leadership. Designed for senior professionals who want the credential their career deserves. No need to pause your momentum. No need to sit through lectures.",
      id: "Anda telah memimpin tim, memecahkan masalah kompleks, dan memberikan hasil. Sekarang dapatkan gelar magister yang mengakui keahlian lanjutan dan kepemimpinan Anda. Dirancang untuk profesional senior yang menginginkan kredensial yang layak untuk karier mereka. Tanpa menghentikan momentum. Tanpa duduk di ruang kuliah.",
    },
    suitableFor: {
      en: "Senior professionals and executives with a bachelor's degree who want a master's degree based on their career experience and leadership.",
      id: "Profesional senior dan eksekutif dengan gelar sarjana yang ingin gelar magister berdasarkan pengalaman karier dan kepemimpinan mereka.",
    },
    features: {
      en: [
        "Master's degree based on your career achievements. No classroom hours.",
        "Fast track for busy executives and senior professionals.",
        "Nationally accredited (A) and internationally recognized (IAO).",
        "Zero disruption to your career.",
        "Dedicated advisor guides you through every step.",
      ],
      id: [
        "Gelar magister berdasarkan pencapaian karier Anda. Tanpa jam kelas.",
        "Jalur cepat untuk eksekutif dan profesional senior yang sibuk.",
        "Terakreditasi nasional (A) dan diakui internasional (IAO).",
        "Tanpa mengganggu karier Anda.",
        "Penasihat khusus yang membimbing Anda di setiap langkah.",
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
      en: "The highest earned qualification for senior leaders. Validated through your career impact and leadership. No traditional dissertation required.",
      id: "Kualifikasi formal tertinggi untuk pemimpin senior. Divalidasi melalui dampak karier dan kepemimpinan Anda. Tanpa disertasi tradisional.",
    },
    description: {
      en: "Your life's work is your dissertation. An earned doctorate (Ph.D., DBA, Ed.D.) that recognizes your advanced expertise, leadership impact, and proven mastery. Not how many hours you spent in a lecture hall. This is the highest formal recognition for senior professionals.",
      id: "Karya hidup Anda adalah disertasi Anda. Doktor formal (Ph.D., DBA, Ed.D.) yang mengakui keahlian lanjutan, dampak kepemimpinan, dan penguasaan Anda yang terbukti. Bukan berapa jam Anda habiskan di ruang kuliah. Ini adalah pengakuan formal tertinggi untuk profesional senior.",
    },
    suitableFor: {
      en: "Senior leaders, executives, and expert practitioners with 8+ years of experience who want the highest formal credential without pausing their career.",
      id: "Pemimpin senior, eksekutif, dan praktisi ahli dengan 8+ tahun pengalaman yang menginginkan kredensial formal tertinggi tanpa menghentikan karir mereka.",
    },
    features: {
      en: [
        "Doctorate earned through professional portfolio. No traditional dissertation.",
        "Validates advanced expertise, leadership, and real-world impact.",
        "Internationally recognized accreditation (IAO).",
        "Self-paced, flexible timeline.",
        "Prestigious earned doctorate title (Ph.D., DBA, Ed.D.).",
      ],
      id: [
        "Doktor diperoleh melalui portofolio profesional. Tanpa disertasi tradisional.",
        "Memvalidasi keahlian lanjutan, kepemimpinan, dan dampak nyata.",
        "Akreditasi yang diakui secara internasional (IAO).",
        "Jadwal fleksibel, sesuai kecepatan Anda.",
        "Gelar doktor formal yang prestisius (Ph.D., DBA, Ed.D.).",
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
      en: "International recognition for a lifetime of achievement and contribution in your field.",
      id: "Pengakuan internasional untuk pencapaian seumur hidup dan kontribusi di bidang Anda.",
    },
    description: {
      en: "Some achievements are too significant to go unrecognized. Doctor Honoris Causa (Dr.Hc.) and Professor Honoris Causa (Prof.Hc.) are the highest international non-academic honorary titles. Awarded to individuals whose life's work has made a lasting impact on their community, industry, or society.",
      id: "Beberapa pencapaian terlalu signifikan untuk tidak diakui. Doctor Honoris Causa (Dr.Hc.) dan Professor Honoris Causa (Prof.Hc.) adalah gelar kehormatan non-akademik internasional tertinggi. Diberikan kepada individu yang karya hidupnya telah memberikan dampak abadi pada komunitas, industri, atau masyarakat mereka.",
    },
    suitableFor: {
      en: "Distinguished individuals with outstanding lifetime achievement and lasting impact in their field.",
      id: "Individu terhormat dengan pencapaian seumur hidup yang luar biasa dan dampak abadi di bidangnya.",
    },
    features: {
      en: [
        "Highest international non-academic honorary recognition.",
        "Awarded for lifetime achievement and community impact.",
        "Globally recognized honorary title (Dr.Hc. / Prof.Hc.).",
        "Simple documentation process.",
        "Lifetime title for professional and social contexts.",
      ],
      id: [
        "Pengakuan kehormatan non-akademik internasional tertinggi.",
        "Diberikan untuk pencapaian seumur hidup dan dampak komunitas.",
        "Gelar kehormatan yang diakui secara global (Dr.Hc. / Prof.Hc.).",
        "Proses dokumentasi sederhana.",
        "Gelar seumur hidup untuk konteks profesional dan sosial.",
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
      en: "Fast, focused credentials for busy executives. Get recognized certification in strategic leadership, global business, and more. Without leaving your career.",
      id: "Kredensial cepat dan terfokus untuk eksekutif sibuk. Dapatkan sertifikasi yang diakui dalam kepemimpinan strategis, bisnis global, dan lainnya. Tanpa meninggalkan karir Anda.",
    },
    description: {
      en: "Need a credential fast? Professional certificates are designed for working professionals who want recognized certification in strategic leadership, global business, and other high-impact fields. Shorter than a full degree. Powerful enough to open new doors.",
      id: "Butuh kredensial dengan cepat? Sertifikat profesional dirancang untuk profesional yang menginginkan sertifikasi diakui dalam kepemimpinan strategis, bisnis global, dan bidang berdampak tinggi lainnya. Lebih pendek dari gelar penuh. Cukup kuat untuk membuka pintu baru.",
    },
    suitableFor: {
      en: "Working professionals who want to add a recognized credential to their profile quickly. Ideal for career transitions, promotions, or expanding into new areas.",
      id: "Profesional yang ingin menambahkan kredensial yang diakui ke profil mereka dengan cepat. Ideal untuk transisi karir, promosi, atau memperluas ke area baru.",
    },
    features: {
      en: [
        "Fast completion. Get certified in weeks, not years.",
        "Focused on practical, high-demand skills.",
        "Recognized international certification.",
        "No prior degree required for most programs.",
        "Ideal complement to your professional experience.",
      ],
      id: [
        "Penyelesaian cepat. Sertifikasi dalam hitungan minggu, bukan tahun.",
        "Terfokus pada keterampilan praktis dengan permintaan tinggi.",
        "Sertifikasi internasional yang diakui.",
        "Sebagian besar program tidak memerlukan gelar sebelumnya.",
        "Pelengkap ideal untuk pengalaman profesional Anda.",
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
