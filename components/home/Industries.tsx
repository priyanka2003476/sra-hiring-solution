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
  className="bg-slate-50 py-24"
>      <Container>
        <div className="mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2">
  <span className="text-sm font-extrabold uppercase tracking-[0.25em] text-blue-700">
    Industries
  </span>
</div>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Industries We Serve
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We provide specialized recruitment solutions across diverse
            industries, helping organizations find skilled professionals for
            every business function.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
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