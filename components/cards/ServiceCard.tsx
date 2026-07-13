import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group flex items-center justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">
      <div className="flex items-center gap-6">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
          <Icon size={30} />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900">
            {title}
          </h3>

          <p className="mt-2 max-w-2xl leading-7 text-slate-600">
            {description}
          </p>
        </div>
      </div>

      <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:translate-x-2">
        <ArrowRight size={20} />
      </div>
    </div>
  );
}