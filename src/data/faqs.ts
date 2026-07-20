export interface FAQItem {
  question: { en: string; id: string };
  answer: { en: string; id: string };
  displayOrder: number;
}

export type FAQPage = "home" | "about";

export const faqs: Record<FAQPage, FAQItem[]> = {
  home: [
    {
      question: { en: "What is Recognition of Prior Learning (RPL)?", id: "Apa itu Recognition of Prior Learning (RPL)?" },
      answer: { en: "Recognition of Prior Learning (RPL) is a framework that evaluates your professional experience, existing knowledge, and competencies against academic standards for degree conferral. It allows experienced professionals to earn a degree based on what they already know and have achieved in their career.", id: "Recognition of Prior Learning (RPL) adalah kerangka kerja yang mengevaluasi pengalaman profesional, pengetahuan yang ada, dan kompetensi Anda terhadap standar akademik untuk pemberian gelar. Ini memungkinkan profesional berpengalaman untuk mendapatkan gelar berdasarkan apa yang sudah mereka ketahui dan capai dalam karir mereka." },
      displayOrder: 1,
    },
    {
      question: { en: "What are the requirements to apply?", id: "Apa saja persyaratan untuk mendaftar?" },
      answer: { en: "You must be at least 30 years of age, hold a minimum Senior High School (SLTA) qualification, and demonstrate established competence in your respective field.", id: "Anda harus berusia minimal 30 tahun, memiliki kualifikasi minimal SLTA, dan menunjukkan kompetensi yang mapan di bidang Anda." },
      displayOrder: 2,
    },
    {
      question: { en: "What degrees are available?", id: "Gelar apa saja yang tersedia?" },
      answer: { en: "We offer nationally accredited degrees (Bachelor's: SE., SM., S.Pd., S.Kom.; Master's: MM., M.Pd., M.Si.; Doctoral: DBA, Ed.D., Ph.D.) and internationally non-accredited degrees (B.Sc., M.Sc., Dr.Hc., Prof.Hc.).", id: "Kami menawarkan gelar terakreditasi nasional (Sarjana: SE., SM., S.Pd., S.Kom.; Magister: MM., M.Pd., M.Si.; Doktor: DBA, Ed.D., Ph.D.) dan gelar non-akreditasi internasional (B.Sc., M.Sc., Dr.Hc., Prof.Hc.)." },
      displayOrder: 3,
    },
    {
      question: { en: "How much does it cost?", id: "Berapa biayanya?" },
      answer: { en: "Fees vary by degree level: Nationally Accredited — Bachelor's USD 2,000, Master's USD 3,000, Doctoral USD 6,000. Internationally Non-Accredited — B.Sc. USD 200, M.Sc. USD 400, Dr.Hc. USD 1,000, Prof.Hc. USD 2,000. A registration fee of USD 100 applies to all programs.", id: "Biaya bervariasi berdasarkan tingkat gelar: Terakreditasi Nasional — Sarjana USD 2.000, Magister USD 3.000, Doktor USD 6.000. Non-Akreditasi Internasional — B.Sc. USD 200, M.Sc. USD 400, Dr.Hc. USD 1.000, Prof.Hc. USD 2.000. Biaya pendaftaran sebesar USD 100 berlaku untuk semua program." },
      displayOrder: 4,
    },
    {
      question: { en: "Is International.degree a university?", id: "Apakah International.degree sebuah universitas?" },
      answer: { en: "No. International.degree is a service platform that facilitates degree conferral through the RPL framework. Degrees are awarded by our accredited university partners, not by International.degree.", id: "Tidak. International.degree adalah platform layanan yang memfasilitasi pemberian gelar melalui kerangka RPL. Gelar diberikan oleh mitra universitas terakreditasi kami, bukan oleh International.degree." },
      displayOrder: 5,
    },
    {
      question: { en: "Can the degree be recognized in Indonesia?", id: "Apakah gelar dapat diakui di Indonesia?" },
      answer: { en: "Nationally accredited degrees are awarded by Indonesian university partners and are recognized under the Indonesian higher education system. Recognition of internationally non-accredited degrees depends on the employer, institution, or regulator. We recommend verifying with the relevant authorities.", id: "Gelar terakreditasi nasional diberikan oleh mitra universitas Indonesia dan diakui dalam sistem pendidikan tinggi Indonesia. Pengakuan gelar non-akreditasi internasional tergantung pada pemberi kerja, institusi, atau regulator. Kami merekomendasikan verifikasi dengan otoritas terkait." },
      displayOrder: 6,
    },
    {
      question: { en: "What documents do I need to submit?", id: "Dokumen apa yang perlu saya serahkan?" },
      answer: { en: "You need to submit: 1) Your detailed Curriculum Vitae (CV), 2) The specific degree you wish to apply for aligned with your area of competence, and 3) Proof of completed payment.", id: "Anda perlu menyerahkan: 1) Curriculum Vitae (CV) terperinci Anda, 2) Gelar spesifik yang ingin Anda lamar sesuai dengan bidang kompetensi Anda, dan 3) Bukti pembayaran lunas." },
      displayOrder: 7,
    },
    {
      question: { en: "How long does the process take?", id: "Berapa lama prosesnya?" },
      answer: { en: "The RPL assessment and degree conferral process is typically completed within 2–4 weeks for most programs. Doctoral-level assessments may take 4–8 weeks.", id: "Proses penilaian RPL dan pemberian gelar biasanya selesai dalam 2–4 minggu untuk sebagian besar program. Penilaian tingkat doktor mungkin memakan waktu 4–8 minggu." },
      displayOrder: 8,
    },
  ],
  about: [
    {
      question: { en: "Is International.degree a university?", id: "Apakah International.degree sebuah universitas?" },
      answer: { en: "No. International.degree is a service platform that facilitates higher degree conferral based on the Recognition of Prior Learning (RPL) framework. We are not a university and do not issue degrees. Degrees are awarded by our accredited partner institutions.", id: "Tidak. International.degree adalah platform layanan yang memfasilitasi pemberian gelar tinggi berdasarkan kerangka Recognition of Prior Learning (RPL). Kami bukan universitas dan tidak menerbitkan gelar. Gelar diberikan oleh institusi mitra terakreditasi kami." },
      displayOrder: 1,
    },
    {
      question: { en: "Who issues the degree?", id: "Siapa yang menerbitkan gelar?" },
      answer: { en: "All degrees are issued directly by the partner university or institution based on the RPL assessment. International.degree facilitates the process but does not issue academic credentials.", id: "Semua gelar diterbitkan langsung oleh universitas atau institusi mitra berdasarkan penilaian RPL. International.degree memfasilitasi proses tetapi tidak menerbitkan kredensial akademik." },
      displayOrder: 2,
    },
    {
      question: { en: "What is the role of International.degree?", id: "Apa peran International.degree?" },
      answer: { en: "We provide consultation, degree recommendation, document assistance, application support, and communication facilitation with partner institutions. We help experienced professionals navigate the RPL-based degree conferral process.", id: "Kami menyediakan konsultasi, rekomendasi gelar, bantuan dokumen, dukungan aplikasi, dan fasilitasi komunikasi dengan institusi mitra. Kami membantu profesional berpengalaman menavigasi proses pemberian gelar berbasis RPL." },
      displayOrder: 3,
    },
    {
      question: { en: "How do I verify an institution?", id: "Bagaimana cara memverifikasi institusi?" },
      answer: { en: "You can verify an institution by visiting its official website, checking its accreditation status with the relevant accreditation body, or contacting us via WhatsApp for verification assistance.", id: "Anda dapat memverifikasi institusi dengan mengunjungi situs web resminya, memeriksa status akreditasinya dengan badan akreditasi terkait, atau menghubungi kami melalui WhatsApp untuk bantuan verifikasi." },
      displayOrder: 4,
    },
    {
      question: { en: "Is admission guaranteed?", id: "Apakah penerimaan dijamin?" },
      answer: { en: "No. Admission and degree conferral decisions are made solely by the partner institution based on their RPL assessment and academic requirements.", id: "Tidak. Keputusan penerimaan dan pemberian gelar dibuat sepenuhnya oleh institusi mitra berdasarkan penilaian RPL dan persyaratan akademik mereka." },
      displayOrder: 5,
    },
    {
      question: { en: "What is the difference between nationally accredited and internationally non-accredited degrees?", id: "Apa perbedaan antara gelar terakreditasi nasional dan non-akreditasi internasional?" },
      answer: { en: "Nationally accredited degrees are awarded by Indonesian university partners and are recognized within the Indonesian higher education system. Internationally non-accredited degrees (including B.Sc., M.Sc., Dr.Hc., Prof.Hc.) are internationally recognized but do not carry national accreditation status. Both are conferred through the RPL framework.", id: "Gelar terakreditasi nasional diberikan oleh mitra universitas Indonesia dan diakui dalam sistem pendidikan tinggi Indonesia. Gelar non-akreditasi internasional (termasuk B.Sc., M.Sc., Dr.Hc., Prof.Hc.) diakui secara internasional tetapi tidak memiliki status akreditasi nasional. Keduanya diberikan melalui kerangka RPL." },
      displayOrder: 6,
    },
    {
      question: { en: "Can fees be refunded?", id: "Apakah biaya dapat dikembalikan?" },
      answer: { en: "Refund policies are determined by the partner institution and any applicable agreements. Please contact us for specific refund information regarding your program.", id: "Kebijakan pengembalian dana ditentukan oleh institusi mitra dan perjanjian yang berlaku. Silakan hubungi kami untuk informasi pengembalian dana spesifik mengenai program Anda." },
      displayOrder: 7,
    },
    {
      question: { en: "How do I start the process?", id: "Bagaimana cara memulai proses?" },
      answer: { en: "Contact us via WhatsApp for a personal consultation. Our academic advisor will guide you through the process, help you choose the right degree, and assist with document submission.", id: "Hubungi kami melalui WhatsApp untuk konsultasi personal. Penasihat akademik kami akan membimbing Anda melalui proses, membantu memilih gelar yang tepat, dan mendukung pengiriman dokumen." },
      displayOrder: 8,
    },
  ],
};
