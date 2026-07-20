import type { StaticImageData } from "next/image";

import aboutJpg from "../../public/img/about.jpg";
import hero1Jpg from "../../public/img/hero1.jpg";
import hero2Jpg from "../../public/img/hero2.jpg";
import hero3Jpg from "../../public/img/hero3.jpg";
import heroJpg from "../../public/img/hero.jpg";
import suitable1Jpg from "../../public/img/suitable-1.jpg";
import suitable2Jpg from "../../public/img/suitable-2.jpg";
import suitable3Jpg from "../../public/img/suitable-3.jpg";

import iaoIncorporationJpg from "../../public/certificates/iao-incorporation.jpg";
import iaoInternationalAccreditationJpg from "../../public/certificates/iao-international-accreditation.jpg";
import usEducationApprovalJpg from "../../public/certificates/us-education-approval.jpg";
import usdlaMemberJpg from "../../public/certificates/usdla-member.jpg";

export const images = {
  about: aboutJpg,
  hero: {
    main: heroJpg,
    carousel: [hero1Jpg, hero2Jpg, hero3Jpg] as const,
  },
  suitable: [suitable1Jpg, suitable2Jpg, suitable3Jpg] as const,
  certificates: {
    iaoIncorporation: iaoIncorporationJpg,
    iaoInternationalAccreditation: iaoInternationalAccreditationJpg,
    usEducationApproval: usEducationApprovalJpg,
    usdlaMember: usdlaMemberJpg,
  },
} as const;

export const certificateImageMap: Record<string, StaticImageData> = {
  "iao-incorporation": iaoIncorporationJpg,
  "iao-international-accreditation": iaoInternationalAccreditationJpg,
  "us-education-approval": usEducationApprovalJpg,
  "usdla-member": usdlaMemberJpg,
};
