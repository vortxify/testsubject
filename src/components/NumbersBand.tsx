export default function NumbersBand({
  title = 'Our School by the Numbers',
  subtitle,
  items
}: {
  title?: string;
  subtitle?: string;
  items: { value: string; label: string }[];
}) {
  return (
    <div className="rounded-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-teal text-white px-6 py-10">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold">{title}</h3>
          {subtitle && <p className="mt-2 text-white/90">{subtitle}</p>}
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((x) => (
            <div key={x.label} className="text-center bg-white/10 rounded-lg py-4">
              <div className="text-2xl font-bold">{x.value}</div>
              <div className="text-white/90 text-sm mt-1">{x.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
