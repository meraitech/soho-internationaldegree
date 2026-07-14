interface MyCardItem {
  title: string;
  description?: string;
  imageSrc?: string;
}

interface MyCardProps {
  items: MyCardItem[];
}

export default function MyCard({ items }: MyCardProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-background">
      {items.map((item, index) => (
        <div key={index} className="bg-surface text-background">
          <div className="w-full aspect-video bg-sekeleton">
            {item.imageSrc ? (
              <img src={item.imageSrc} alt={item.title} className="w-full h-full object-cover" />
            ) : null}
          </div>
          <div className="px-6 py-14">
            <h3 className="font-heading font-semibold mb-4">{item.title}</h3>
            {item.description && <p className="">{item.description}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
