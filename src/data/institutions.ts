export interface Institution {
  slug: string;
  name: string;
  country: string;
  website: string;
  logoLabel: string;
  accreditationBody?: string;
  partnershipDescription: {
    en: string;
    id: string;
  };
  credentialIssuerDescription: {
    en: string;
    id: string;
  };
}

export const institutions: Institution[] = [
  {
    slug: "sample-university",
    name: "Sample International University",
    country: "United Kingdom",
    website: "https://example.edu",
    logoLabel: "SIU",
    accreditationBody: "UK Accreditation Council",
    partnershipDescription: {
      en: "Partner institution offering international degree pathways for experienced professionals.",
      id: "Institusi mitra yang menyediakan jalur gelar internasional bagi profesional berpengalaman.",
    },
    credentialIssuerDescription: {
      en: "All credentials are issued directly by Sample International University.",
      id: "Semua kredensial diterbitkan langsung oleh Sample International University.",
    },
  },
];
