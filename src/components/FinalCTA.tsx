import WhatsAppButton from "./WhatsAppButton";

interface FinalCTAProps {
  headline: string;
  description: string;
  ctaLabel?: string;
  ctaMessage?: string;
}

export default function FinalCTA({
  headline,
  description,
  ctaLabel,
  ctaMessage,
}: FinalCTAProps) {
  return (
    <div className="bg-maroon rounded-2xl p-8 md:p-12 lg:p-16 text-center text-warm-white">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading leading-tight mb-4">
        {headline}
      </h2>
      <p className="text-lg md:text-xl text-warm-white/80 max-w-2xl mx-auto mb-8">
        {description}
      </p>
      <WhatsAppButton
        label={ctaLabel || "Consult via WhatsApp"}
        message={ctaMessage}
        variant="gold"
        size="lg"
      />
    </div>
  );
}
