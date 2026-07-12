interface HowItWorksProps {
  steps: string[];
  title?: string;
}

export default function HowItWorks({ steps, title }: HowItWorksProps) {
  return (
    <div>
      {title && (
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-maroon font-heading text-center mb-12">
          {title}
        </h2>
      )}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="shrink-0 w-10 h-10 bg-maroon text-warm-white  flex items-center justify-center font-heading font-bold text-lg">
                {index + 1}
              </div>
              <p className="text-charcoal/70 pt-2">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
