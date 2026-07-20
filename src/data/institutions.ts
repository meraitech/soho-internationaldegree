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
    country: "Indonesia",
    website: "https://example.edu",
    logoLabel: "SIU",
    accreditationBody: "National Accreditation Agency (BAN-PT) / International Accreditation Body",
    partnershipDescription: {
      en: "Accredited university partner offering degree conferral through the Recognition of Prior Learning (RPL) framework for experienced professionals aged 30+.",
      id: "Mitra universitas terakreditasi yang menyediakan pemberian gelar melalui kerangka Recognition of Prior Learning (RPL) bagi profesional berpengalaman berusia 30+.",
    },
    credentialIssuerDescription: {
      en: "All degrees are conferred and issued directly by the partner university based on RPL assessment.",
      id: "Semua gelar diberikan dan diterbitkan langsung oleh universitas mitra berdasarkan penilaian RPL.",
    },
  },
];
