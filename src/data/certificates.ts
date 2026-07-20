import type { StaticImageData } from "next/image";
import { certificateImageMap } from "@/lib/images";

export interface Certificate {
  slug: string;
  image: StaticImageData;
  title: { en: string; id: string };
  description: { en: string; id: string };
}

export const certificates: Certificate[] = [
  {
    slug: "iao-incorporation",
    image: certificateImageMap["iao-incorporation"],
    title: {
      en: "Certificate of Incorporation — IAO",
      id: "Certificate of Incorporation IAO",
    },
    description: {
      en: "Incorporation document of the International Accreditation Organization as a WA Non-Profit Corporation in the State of Washington.",
      id: "Dokumen pendirian International Accreditation Organization sebagai WA Non-Profit Corporation di State of Washington.",
    },
  },
  {
    slug: "us-education-approval",
    image: certificateImageMap["us-education-approval"],
    title: {
      en: "US Department of Education Approval Letter",
      id: "US Department of Education Approval Letter",
    },
    description: {
      en: "Approval letter for the International Accreditation Organization to grant international accreditation status.",
      id: "Surat approval untuk International Accreditation Organization dalam pemberian status akreditasi internasional.",
    },
  },
  {
    slug: "usdla-member",
    image: certificateImageMap["usdla-member"],
    title: {
      en: "USDLA Non-Profit Member Certificate",
      id: "USDLA Non Profit Member Certificate",
    },
    description: {
      en: "Non-profit membership certificate of the International Accreditation Organization in the United States Distance Learning Association.",
      id: "Sertifikat keanggotaan non-profit International Accreditation Organization di United States Distance Learning Association.",
    },
  },
  {
    slug: "iao-international-accreditation",
    image: certificateImageMap["iao-international-accreditation"],
    title: {
      en: "Certificate of International Accreditation — IAO",
      id: "Certificate of International Accreditation",
    },
    description: {
      en: "IAO international accreditation certificate for Yayasan Hafiz Indonesia Emas, valid until May 18, 2031.",
      id: "Sertifikat akreditasi internasional IAO untuk Yayasan Hafiz Indonesia Emas, berlaku sampai 18 Mei 2031.",
    },
  },
];
