interface StatCardProps {
  number: string;
  title: string;
  className?: string;
}

export default function StatCard({
  number,
  title,
  className = "",
}: StatCardProps) {
  return (
    <div
      className={`rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${className}`}
    >
      <h2 className="text-4xl font-bold text-blue-600">
        {number}
      </h2>

      <p className="mt-2 text-sm text-slate-600">
        {title}
      </p>
    </div>
  );
}