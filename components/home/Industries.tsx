import {
  BriefcaseBusiness,
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Truck,
} from "lucide-react";

import Container from "@/components/common/Container";

const industries = [
  {
    icon: BriefcaseBusiness,
    title: "Information Technology",
  },
  {
    icon: Factory,
    title: "Manufacturing",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
  },
  {
    icon: Landmark,
    title: "Banking & Finance",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
  },
  {
    icon: GraduationCap,
    title: "Education",
  },
  {
    icon: Building2,
    title: "Sales & Marketing",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      {/* Background Decorations */}

      <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl" />

      <div className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-50 blur-3xl" />

      <Container className="relative z-10">
        {/* Heading */}

        <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center text-center">
          <div className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-blue-700 sm:text-sm">
              Industries
            </span>
          </div>

          <h2 className="mt-6 w-full text-center text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Industries We Serve
          </h2>

          <p className="mt-6 w-full max-w-2xl text-center text-base leading-8 text-slate-600 sm:text-lg">
            We provide specialized recruitment solutions across diverse
            industries, helping organizations find skilled professionals for
            every business function.
          </p>
        </div>

        {/* Industries Grid */}

        <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl sm:p-8"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white sm:h-16 sm:w-16">
                  <Icon size={28} className="sm:hidden" />
                  <Icon size={30} className="hidden sm:block" />
                </div>

                <h3 className="mt-5 text-lg font-bold leading-7 text-slate-900 sm:mt-6 sm:text-xl">
                  {industry.title}
                </h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}