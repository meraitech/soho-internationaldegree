interface TrustItem {
  title: string;
  description: string;
}

interface TrustItemsProps {
  items: TrustItem[];
}

export default function TrustItems({ items }: TrustItemsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-background">
      {items.map((item, index) => (
        <div key={index} className="bg-surface text-background">
          <div className="w-full aspect-video bg-test">
            {/* <img src="" alt="" /> */}
          </div>
          <div className="px-6 py-14">
            <h3 className="font-heading font-semibold mb-4">{item.title}</h3>
            <p className="">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
