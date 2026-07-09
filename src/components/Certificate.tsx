interface CertificateItem {
  title: string;
  description: string;
}

interface CertificateItemsProps {
  items: CertificateItem[];
}

export default function CertificateItems({ items }: CertificateItemsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-background">
      {items.map((item, index) => (
        <div key={index} className="bg-surface">
          <div className="w-full aspect-video bg-test">
            {/* <img src="" alt="" /> */}
          </div>
          <div className="p-6">
            <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
            <p className="">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
