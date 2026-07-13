import {
  Briefcase,
  Building2,
  GraduationCap,
  Search,
  Users,
  UserRoundCheck,
} from "lucide-react";

import Container from "@/components/common/Container";
import ServiceCard from "@/components/cards/ServiceCard";

const services = [
  {
    icon: UserRoundCheck,
    title: "Permanent Recruitment",
    description:
      "Helping organizations hire skilled professionals for long-term success.",
  },
  {
    icon: Briefcase,
    title: "IT Recruitment",
    description:
      "Connecting companies with talented software developers, testers, analysts, and IT specialists.",
  },
  {
    icon: Building2,
    title: "Non-IT Recruitment",
    description:
      "Recruitment solutions for manufacturing, healthcare, finance, sales, HR, and operations.",
  },
  {
    icon: Users,
    title: "Contract Staffing",
    description:
      "Flexible staffing solutions for short-term and project-based hiring requirements.",
  },
  {
    icon: GraduationCap,
    title: "Campus Hiring",
    description:
      "Connecting fresh graduates with organizations through structured campus recruitment programs.",
  },
  {
    icon: Search,
    title: "Executive Search",
    description:
      "Identifying experienced leaders and senior professionals for strategic positions.",
  },
];

export default function Services() {
  return (
<section
  id="services"
  className="bg-white py-24"
>      <Container>
        <div className="text-center">
         <div className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2">
  <span className="text-sm font-extrabold uppercase tracking-[0.25em] text-blue-700">
Our Services 
  </span>
</div>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Recruitment Solutions Designed For Every Business
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We provide end-to-end recruitment services tailored to your
            organization's hiring needs across multiple industries.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}