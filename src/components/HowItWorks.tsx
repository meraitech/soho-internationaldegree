import type { ReactNode } from "react";
import {
  FaWhatsapp,
  FaPaperPlane,
  FaClipboardCheck,
  FaStar,
  FaHandshake,
  FaCircleCheck,
  FaCertificate,
} from "react-icons/fa6";

const stepIcons: ReactNode[] = [
  <FaWhatsapp />,
  <FaPaperPlane />,
  <FaClipboardCheck />,
  <FaStar />,
  <FaHandshake />,
  <FaCircleCheck />,
  <FaCertificate />,
];

interface HowItWorksProps {
  steps: string[];
}

export default function HowItWorks({ steps }: HowItWorksProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {steps.map((step, index) => (
        <div key={index} className="bg-surface text-background">
          <div className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl text-maroon">{stepIcons[index]}</span>
              <div className="w-8 h-8 bg-maroon text-warm-white flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
            </div>
            <p className="text-charcoal/70">{step}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
