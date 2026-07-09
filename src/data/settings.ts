export type Lang = "en" | "id";

export const settings = {
  companyName: "International.degree",
  legalCompanyName: "International.degree",
  registrationNumber: "",
  address: "Jakarta, Indonesia",
  email: "hello@international.degree",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+1234567890",
  advisorName: "Academic Advisor",
};

export const defaultLang: Lang = "en";
