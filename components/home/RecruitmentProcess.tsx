import {
  ClipboardList,
  Search,
  UserCheck,
  MessageSquare,
  FileCheck,
  BadgeCheck,
} from "lucide-react";

import Container from "@/components/common/Container";

const process = [
  {
    icon: ClipboardList,
    title: "Requirement Analysis",
    description:
      "Understanding the client's hiring needs, company culture, and role expectations.",
  },
  {
    icon: Search,
    title: "Talent Sourcing",
    description:
      "Finding qualified candidates through our extensive talent network and sourcing platforms.",
  },
  {
    icon: UserCheck,
    title: "Candidate Screening",
    description:
      "Evaluating technical skills, communication, and cultural fit before shortlisting.",
  },
  {
    icon: MessageSquare,
    title: "Interview Coordination",
    description:
      "Scheduling interviews and ensuring a smooth hiring experience for clients and candidates.",
  },
  {
    icon: FileCheck,
    title: "Offer Management",
    description:
      "Supporting salary negotiation, offer rollout, and documentation throughout the hiring process.",
  },
  {
    icon: BadgeCheck,
    title: "Successful Onboarding",
    description:
      "Helping candidates transition smoothly into their new organization.",
  },
];

export default function RecruitmentProcess() {
  return (
    <section className="bg-white py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
         <div className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2">
  <span className="text-sm font-extrabold uppercase tracking-[0.25em] text-blue-700">
Our Process
  </span>
</div>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Our Recruitment Process
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A structured hiring approach that helps organizations recruit the
            right talent efficiently and confidently.
          </p>
        </div>

        <div className="relative mx-auto mt-20 max-w-5xl">

          {/* Timeline */}

          <div className="absolute left-8 top-8 hidden h-[88%] w-1 rounded-full bg-blue-200 md:block"></div>

          <div className="space-y-10">

            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative flex items-start gap-10"
                >
                  {/* Icon */}

                  <div className="z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                    <Icon size={28} />
                  </div>

                  {/* Card */}

                  <div className="flex-1 rounded-3xl border border-slate-200 bg-slate-50 px-8 py-7 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-xl">

                    <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                      Step {index + 1}
                    </span>

                    <h3 className="mt-2 text-3xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-lg leading-8 text-slate-600">
                      {step.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </Container>
    </section>
  );
}