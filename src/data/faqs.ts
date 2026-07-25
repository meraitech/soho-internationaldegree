export interface FAQItem {
  question: { en: string; id: string };
  answer: { en: string; id: string };
  displayOrder: number;
}

export type FAQPage = "home" | "about";

export const faqs: Record<FAQPage, FAQItem[]> = {
  home: [
    {
      question: { en: "Is international.degree a university?", id: "Apakah international.degree sebuah universitas?" },
      answer: { en: "No. international.degree is a higher education facilitator and consultant. We assist professionals in accessing nationally and/or internationally accredited degree programs.", id: "Bukan. international.degree adalah fasilitator dan konsultan pendidikan tinggi. Kami membantu para profesional dalam mengakses program gelar yang terakreditasi nasional dan/atau internasional." },
      displayOrder: 1,
    },
    {
      question: { en: "Who issues the degree certificates?", id: "Siapa yang menerbitkan sertifikat gelar?" },
      answer: { en: "All credentials are issued directly by our partner institutions. international.degree facilitates access but does not issue academic credentials itself.", id: "Semua kredensial diterbitkan langsung oleh institusi mitra kami. international.degree memfasilitasi akses tetapi tidak menerbitkan kredensial akademik sendiri." },
      displayOrder: 2,
    },
    {
      question: { en: "What is the role of international.degree?", id: "Apa peran international.degree?" },
      answer: { en: "We provide consultation services, program recommendations, document assistance, application support, and communication liaison with partner institutions. We guide you through the process of earning an academic degree or receiving an international honorary award.", id: "Kami menyediakan layanan konsultasi, rekomendasi program, bantuan dokumen, dukungan aplikasi, dan komunikasi dengan institusi mitra. Kami membimbing Anda melalui proses mendapatkan gelar akademik atau menerima penghargaan kehormatan internasional." },
      displayOrder: 3,
    },
    {
      question: { en: "How can I verify an institution?", id: "Bagaimana cara memverifikasi institusi?" },
      answer: { en: "You may verify an institution by visiting its official website, checking its accreditation status with the relevant accrediting body, or contacting us via WhatsApp for verification assistance.", id: "Anda dapat memverifikasi institusi dengan mengunjungi situs web resminya, memeriksa status akreditasinya dengan badan akreditasi terkait, atau menghubungi kami melalui WhatsApp untuk bantuan verifikasi." },
      displayOrder: 4,
    },
    {
      question: { en: "How can I verify my credential?", id: "Bagaimana cara memverifikasi kredensial saya?" },
      answer: { en: "Credentials can be verified through the issuing institution's verification portal or by contacting their registrar office. We can also assist you with this verification process.", id: "Kredensial dapat diverifikasi melalui portal verifikasi institusi penerbit atau dengan menghubungi kantor registrar mereka. Kami juga dapat membantu Anda dengan proses verifikasi ini." },
      displayOrder: 5,
    },
    {
      question: { en: "Is admission guaranteed?", id: "Apakah penerimaan dijamin?" },
      answer: { en: "No. Admission decisions are made solely by the partner institution based on their academic requirements and policies. We provide support but cannot guarantee admission outcomes.", id: "Tidak. Keputusan penerimaan dibuat sepenuhnya oleh institusi mitra berdasarkan persyaratan dan kebijakan akademik mereka. Kami memberikan dukungan tetapi tidak dapat menjamin hasil penerimaan." },
      displayOrder: 6,
    },
    {
      question: { en: "Is graduation guaranteed?", id: "Apakah kelulusan dijamin?" },
      answer: { en: "No. Graduation requirements are set by the institution and must be fulfilled by the candidate. We provide guidance but cannot guarantee academic results.", id: "Tidak. Persyaratan kelulusan ditetapkan oleh institusi dan harus dipenuhi oleh kandidat. Kami memberikan bimbingan tetapi tidak dapat menjamin hasil akademik." },
      displayOrder: 7,
    },
    {
      question: { en: "Are fees refundable?", id: "Apakah biaya dapat dikembalikan?" },
      answer: { en: "Refund policies are determined by the partner institution and applicable agreements. Please contact us for specific refund information for your chosen program.", id: "Kebijakan pengembalian dana ditentukan oleh institusi mitra dan perjanjian yang berlaku. Silakan hubungi kami untuk informasi pengembalian dana spesifik untuk program yang Anda pilih." },
      displayOrder: 8,
    },
    {
      question: { en: "What is the standing of the Doctor Honoris Causa degree obtained through international.degree?", id: "Apa status gelar Doctor Honoris Causa yang diperoleh melalui international.degree?" },
      answer: { en: "The Doctor Honoris Causa is an international non-academic honorary award that does not require a dissertation.", id: "Doctor Honoris Causa adalah penghargaan kehormatan non-akademik internasional yang tidak memerlukan disertasi." },
      displayOrder: 9,
    },
    {
      question: { en: "Is this Doctor Honoris Causa degree legally valid?", id: "Apakah gelar Doctor Honoris Causa ini sah secara hukum?" },
      answer: { en: "Yes. It is an honorary title conferred by the international community, awarded in recognition of an individual's competence, and is separate from formal academic qualifications.", id: "Ya. Ini adalah gelar kehormatan yang diberikan oleh komunitas internasional, diberikan sebagai pengakuan atas kompetensi seseorang, dan terpisah dari kualifikasi akademik formal." },
      displayOrder: 10,
    },
  ],
  about: [
    {
      question: { en: "Is international.degree a university?", id: "Apakah international.degree sebuah universitas?" },
      answer: { en: "No. international.degree is a higher education facilitator and consultant. We assist professionals in accessing nationally and/or internationally accredited degree programs.", id: "Bukan. international.degree adalah fasilitator dan konsultan pendidikan tinggi. Kami membantu para profesional dalam mengakses program gelar yang terakreditasi nasional dan/atau internasional." },
      displayOrder: 1,
    },
    {
      question: { en: "Who issues the degree certificates?", id: "Siapa yang menerbitkan sertifikat gelar?" },
      answer: { en: "All credentials are issued directly by our partner institutions. international.degree facilitates access but does not issue academic credentials itself.", id: "Semua kredensial diterbitkan langsung oleh institusi mitra kami. international.degree memfasilitasi akses tetapi tidak menerbitkan kredensial akademik sendiri." },
      displayOrder: 2,
    },
    {
      question: { en: "What is the role of international.degree?", id: "Apa peran international.degree?" },
      answer: { en: "We provide consultation services, program recommendations, document assistance, application support, and communication liaison with partner institutions. We guide you through the process of earning an academic degree or receiving an international honorary award.", id: "Kami menyediakan layanan konsultasi, rekomendasi program, bantuan dokumen, dukungan aplikasi, dan komunikasi dengan institusi mitra. Kami membimbing Anda melalui proses mendapatkan gelar akademik atau menerima penghargaan kehormatan internasional." },
      displayOrder: 3,
    },
    {
      question: { en: "How can I verify an institution?", id: "Bagaimana cara memverifikasi institusi?" },
      answer: { en: "You may verify an institution by visiting its official website, checking its accreditation status with the relevant accrediting body, or contacting us via WhatsApp for verification assistance.", id: "Anda dapat memverifikasi institusi dengan mengunjungi situs web resminya, memeriksa status akreditasinya dengan badan akreditasi terkait, atau menghubungi kami melalui WhatsApp untuk bantuan verifikasi." },
      displayOrder: 4,
    },
    {
      question: { en: "How can I verify my credential?", id: "Bagaimana cara memverifikasi kredensial saya?" },
      answer: { en: "Credentials can be verified through the issuing institution's verification portal or by contacting their registrar office. We can also assist you with this verification process.", id: "Kredensial dapat diverifikasi melalui portal verifikasi institusi penerbit atau dengan menghubungi kantor registrar mereka. Kami juga dapat membantu Anda dengan proses verifikasi ini." },
      displayOrder: 5,
    },
    {
      question: { en: "Is admission guaranteed?", id: "Apakah penerimaan dijamin?" },
      answer: { en: "No. Admission decisions are made solely by the partner institution based on their academic requirements and policies. We provide support but cannot guarantee admission outcomes.", id: "Tidak. Keputusan penerimaan dibuat sepenuhnya oleh institusi mitra berdasarkan persyaratan dan kebijakan akademik mereka. Kami memberikan dukungan tetapi tidak dapat menjamin hasil penerimaan." },
      displayOrder: 6,
    },
    {
      question: { en: "Is graduation guaranteed?", id: "Apakah kelulusan dijamin?" },
      answer: { en: "No. Graduation requirements are set by the institution and must be fulfilled by the candidate. We provide guidance but cannot guarantee academic results.", id: "Tidak. Persyaratan kelulusan ditetapkan oleh institusi dan harus dipenuhi oleh kandidat. Kami memberikan bimbingan tetapi tidak dapat menjamin hasil akademik." },
      displayOrder: 7,
    },
    {
      question: { en: "Are fees refundable?", id: "Apakah biaya dapat dikembalikan?" },
      answer: { en: "Refund policies are determined by the partner institution and applicable agreements. Please contact us for specific refund information for your chosen program.", id: "Kebijakan pengembalian dana ditentukan oleh institusi mitra dan perjanjian yang berlaku. Silakan hubungi kami untuk informasi pengembalian dana spesifik untuk program yang Anda pilih." },
      displayOrder: 8,
    },
    {
      question: { en: "What is the standing of the Doctor Honoris Causa degree obtained through international.degree?", id: "Apa status gelar Doctor Honoris Causa yang diperoleh melalui international.degree?" },
      answer: { en: "The Doctor Honoris Causa is an international non-academic honorary award that does not require a dissertation.", id: "Doctor Honoris Causa adalah penghargaan kehormatan non-akademik internasional yang tidak memerlukan disertasi." },
      displayOrder: 9,
    },
    {
      question: { en: "Is this Doctor Honoris Causa degree legally valid?", id: "Apakah gelar Doctor Honoris Causa ini sah secara hukum?" },
      answer: { en: "Yes. It is an honorary title conferred by the international community, awarded in recognition of an individual's competence, and is separate from formal academic qualifications.", id: "Ya. Ini adalah gelar kehormatan yang diberikan oleh komunitas internasional, diberikan sebagai pengakuan atas kompetensi seseorang, dan terpisah dari kualifikasi akademik formal." },
      displayOrder: 10,
    },
  ],
};
