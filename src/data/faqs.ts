export interface FAQItem {
  question: { en: string; id: string };
  answer: { en: string; id: string };
  displayOrder: number;
}

export type FAQPage = "home" | "about";

export const faqs: Record<FAQPage, FAQItem[]> = {
  home: [
    {
      question: { en: "Can my work experience be recognized?", id: "Dapatkah pengalaman kerja saya diakui?" },
      answer: { en: "Yes. Through our Prior Learning Assessment (PLA) program, your professional experience can be evaluated for academic credit recognition.", id: "Ya. Melalui program Penilaian Pembelajaran Sebelumnya (PLA), pengalaman profesional Anda dapat dievaluasi untuk pengakuan kredit akademik." },
      displayOrder: 1,
    },
    {
      question: { en: "Can I apply for an international degree?", id: "Dapatkah saya mendaftar untuk gelar internasional?" },
      answer: { en: "Yes. We offer pathways to bachelor's, master's, and doctoral degrees from international partner institutions.", id: "Ya. Kami menawarkan jalur menuju gelar sarjana, magister, dan doktor dari institusi mitra internasional." },
      displayOrder: 2,
    },
    {
      question: { en: "Who issues the credential?", id: "Siapa yang menerbitkan kredensial?" },
      answer: { en: "Credentials are issued directly by the partner institution, not by International.degree. We are an education facilitator.", id: "Kredensial diterbitkan langsung oleh institusi mitra, bukan oleh International.degree. Kami adalah fasilitator pendidikan." },
      displayOrder: 3,
    },
    {
      question: { en: "Are partner institutions accredited?", id: "Apakah institusi mitra terakreditasi?" },
      answer: { en: "Yes, our partner institutions hold accredited status from recognized accreditation bodies. Specific accreditation information is provided for each program.", id: "Ya, institusi mitra kami memiliki status terakreditasi dari badan akreditasi yang diakui. Informasi akreditasi spesifik disediakan untuk setiap program." },
      displayOrder: 4,
    },
    {
      question: { en: "How long does the process take?", id: "Berapa lama prosesnya?" },
      answer: { en: "The timeline varies by program. Certificate programs may take 3–12 months, while degree pathways typically take 1–5 years depending on the level and your prior learning.", id: "Jangka waktu bervariasi tergantung program. Program sertifikat dapat memakan waktu 3–12 bulan, sementara jalur gelar biasanya memakan waktu 1–5 tahun tergantung tingkat dan pembelajaran sebelumnya." },
      displayOrder: 5,
    },
    {
      question: { en: "Can the credential be used in Indonesia?", id: "Dapatkah kredensial digunakan di Indonesia?" },
      answer: { en: "Credential recognition in Indonesia depends on the institution, employer, and applicable regulations. We recommend verifying with the relevant Indonesian authorities or your employer.", id: "Pengakuan kredensial di Indonesia tergantung pada institusi, pemberi kerja, dan peraturan yang berlaku. Kami merekomendasikan verifikasi dengan otoritas Indonesia terkait atau pemberi kerja Anda." },
      displayOrder: 6,
    },
    {
      question: { en: "What documents are required?", id: "Dokumen apa saja yang diperlukan?" },
      answer: { en: "Required documents vary by program but typically include your CV/resume, academic transcripts, identification document, and professional references.", id: "Dokumen yang diperlukan bervariasi per program tetapi biasanya mencakup CV/resume, transkrip akademik, dokumen identitas, dan referensi profesional." },
      displayOrder: 7,
    },
    {
      question: { en: "How much does the program cost?", id: "Berapa biaya programnya?" },
      answer: { en: "Program fees vary depending on the program, institution, and pathway. Please contact us via WhatsApp for detailed fee information.", id: "Biaya program bervariasi tergantung pada program, institusi, dan jalur. Silakan hubungi kami melalui WhatsApp untuk informasi biaya terperinci." },
      displayOrder: 8,
    },
  ],
  about: [
    {
      question: { en: "Is International.degree a university?", id: "Apakah International.degree sebuah universitas?" },
      answer: { en: "No. International.degree is an education facilitator and consultant. We help professionals access international academic programs. We are not a university and do not issue degrees.", id: "Tidak. International.degree adalah fasilitator dan konsultan pendidikan. Kami membantu profesional mengakses program akademik internasional. Kami bukan universitas dan tidak menerbitkan gelar." },
      displayOrder: 1,
    },
    {
      question: { en: "Who issues the credential?", id: "Siapa yang menerbitkan kredensial?" },
      answer: { en: "All credentials are issued directly by the partner institution. International.degree facilitates access but does not issue academic credentials.", id: "Semua kredensial diterbitkan langsung oleh institusi mitra. International.degree memfasilitasi akses tetapi tidak menerbitkan kredensial akademik." },
      displayOrder: 2,
    },
    {
      question: { en: "What is the role of International.degree?", id: "Apa peran International.degree?" },
      answer: { en: "We provide consultation, program recommendation, document assistance, application assistance, and communication support with institutions. We help you navigate the pathway to your academic goal.", id: "Kami menyediakan konsultasi, rekomendasi program, bantuan dokumen, bantuan aplikasi, dan dukungan komunikasi dengan institusi. Kami membantu Anda menavigasi jalur menuju tujuan akademik Anda." },
      displayOrder: 3,
    },
    {
      question: { en: "How do I verify an institution?", id: "Bagaimana cara memverifikasi institusi?" },
      answer: { en: "You can verify an institution by visiting its official website, checking its accreditation status with the relevant accreditation body, or contacting us via WhatsApp for verification assistance.", id: "Anda dapat memverifikasi institusi dengan mengunjungi situs web resminya, memeriksa status akreditasinya dengan badan akreditasi terkait, atau menghubungi kami melalui WhatsApp untuk bantuan verifikasi." },
      displayOrder: 4,
    },
    {
      question: { en: "How do I verify a credential?", id: "Bagaimana cara memverifikasi kredensial?" },
      answer: { en: "Credentials can be verified through the issuing institution's verification portal or by contacting their registrar's office. We can assist with the verification process.", id: "Kredensial dapat diverifikasi melalui portal verifikasi institusi penerbit atau dengan menghubungi kantor registrasi mereka. Kami dapat membantu proses verifikasi." },
      displayOrder: 5,
    },
    {
      question: { en: "Is admission guaranteed?", id: "Apakah penerimaan dijamin?" },
      answer: { en: "No. Admission is decided solely by the partner institution based on their academic requirements and policies.", id: "Tidak. Penerimaan diputuskan sepenuhnya oleh institusi mitra berdasarkan persyaratan dan kebijakan akademik mereka." },
      displayOrder: 6,
    },
    {
      question: { en: "Is graduation guaranteed?", id: "Apakah kelulusan dijamin?" },
      answer: { en: "No. Graduation requirements are set by the institution and must be fulfilled by the student. We provide support but cannot guarantee academic outcomes.", id: "Tidak. Persyaratan kelulusan ditetapkan oleh institusi dan harus dipenuhi oleh mahasiswa. Kami memberikan dukungan tetapi tidak dapat menjamin hasil akademik." },
      displayOrder: 7,
    },
    {
      question: { en: "Can fees be refunded?", id: "Apakah biaya dapat dikembalikan?" },
      answer: { en: "Refund policies are determined by the partner institution and any applicable agreements. Please contact us for specific refund information for your program.", id: "Kebijakan pengembalian dana ditentukan oleh institusi mitra dan perjanjian yang berlaku. Silakan hubungi kami untuk informasi pengembalian dana spesifik untuk program Anda." },
      displayOrder: 8,
    },
  ],
};
