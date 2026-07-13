"use client";

import {
  Award,
  BriefcaseBusiness,
  Clock3,
  Users,
} from "lucide-react";

import Container from "@/components/common/Container";

const features = [
  {
    icon: BriefcaseBusiness,
    title: "Industry Expertise",
    description:
      "Extensive experience in recruiting professionals across IT and Non-IT industries.",
  },
  {
    icon: Clock3,
    title: "Fast Hiring Process",
    description:
      "Efficient recruitment strategies that reduce hiring time without compromising quality.",
  },
  {
    icon: Users,
    title: "Dedicated Recruitment Team",
    description:
      "Experienced recruiters focused on understanding your business and hiring requirements.",
  },
  {
    icon: Award,
    title: "Quality Talent",
    description:
      "Access to highly skilled candidates through a strong network and proven recruitment process.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-start gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div className="fade-up lg:sticky lg:top-32">

<div className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2">
  <span className="text-sm font-extrabold uppercase tracking-[0.25em] text-blue-700">
    Why Choose Us
  </span>
</div>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
              Why Businesses Trust
              <span className="text-blue-600">
                {" "}SRA Hiring Solution
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-600">
              We combine recruitment expertise, advanced hiring strategies,
              and a client-first approach to help organizations hire the
              right talent quickly, efficiently, and with complete
              transparency.
            </p>

            <div className="mt-14 rounded-[20px] bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-2xl">

              <h3 className="text-5xl font-bold">
                500+
              </h3>

              <p className="mt-3 text-lg text-blue-100">
                Successful Placements Across Multiple Industries
              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div className="space-y-8">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className={`fade-up delay-${index + 1} group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl`}
                >

                  {/* Blue Accent */}

                  <div className="absolute left-0 top-0 h-full w-1 bg-blue-600 scale-y-0 transition-all duration-500 group-hover:scale-y-100"></div>

                  <div className="flex gap-6">

                    {/* Number */}

                    <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg font-bold text-slate-400 lg:flex">
                      0{index + 1}
                    </div>

                    {/* Icon */}

                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-blue-600 group-hover:text-white">

                      <Icon size={30} />

                    </div>

                    {/* Content */}

                    <div>

                      <h3 className="text-2xl font-bold text-slate-900">
                        {feature.title}
                      </h3>

                      <p className="mt-4 leading-8 text-slate-600">
                        {feature.description}
                      </p>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </Container>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-up {
          opacity: 0;
          animation: fadeUp 0.8s ease-out forwards;
          animation-timeline: view();
          animation-range: entry 10% cover 30%;
        }

        .delay-1 {
          animation-delay: 0.1s;
        }

        .delay-2 {
          animation-delay: 0.2s;
        }

        .delay-3 {
          animation-delay: 0.3s;
        }

        .delay-4 {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
}