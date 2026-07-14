"use client";

import { FaWhatsapp } from "react-icons/fa6";

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  className?: string;
  variant?: "primary" | "outline" | "secondary" | "accent";
  size?: "md" | "lg";
}

const variantStyles = {
  primary: "bg-foreground text-background",
  secondary: "bg-dark text-white ",
  accent: "bg-background text-foreground",
  outline: "border-2 border-maroon text-maroon hover:bg-maroon hover:text-white",
};

const sizeStyles = {
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function WhatsAppButton({
  message = "Hello International.degree, I would like to consult about the available international academic programs.",
  label = "Consult via WhatsApp",
  className = "",
  variant = "primary",
  size = "lg",
}: WhatsAppButtonProps) {
  const href = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+1234567890"}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      <FaWhatsapp aria-hidden="true" />
      {label}
    </a>
  );
}
