"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Search,
  UserCheck,
  MessageSquare,
  FileCheck,
  BadgeCheck,
  Users,
  Target,
  ShieldCheck,
  Handshake,
} from "lucide-react";

import Container from "@/components/common/Container";

const process = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Requirement Analysis",
    description:
      "Understanding the client's hiring needs, company culture, and role expectations.",
  },
  {
    icon: Search,
    number: "02",
    title: "Talent Sourcing",
    description:
      "Finding qualified candidates through our extensive talent network and sourcing platforms.",
  },
  {
    icon: UserCheck,
    number: "03",
    title: "Candidate Screening",
    description:
      "Evaluating technical skills, communication, and cultural fit before shortlisting.",
  },
  {
    icon: MessageSquare,
    number: "04",
    title: "Interview Coordination",
    description:
      "Scheduling interviews and ensuring a smooth hiring experience for clients and candidates.",
  },
  {
    icon: FileCheck,
    number: "05",
    title: "Offer Management",
    description:
      "Supporting salary negotiation, offer rollout, and documentation throughout the hiring process.",
  },
  {
    icon: BadgeCheck,
    number: "06",
    title: "Successful Onboarding",
    description:
      "Helping candidates transition smoothly into their new organization.",
  },
];

const highlights = [
  {
    icon: Users,
    title: "Client-Focused",
    description: "We understand your unique hiring needs",
  },
  {
    icon: Target,
    title: "Quality Talent",
    description: "Rigorous screening ensures the best fit",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Process",
    description: "Clear communication at every step",
  },
  {
    icon: Handshake,
    title: "Long-Term Success",
    description: "We build lasting partnerships beyond hiring",
  },
];

export default function RecruitmentProcess() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-blue-50/40 py-20 md:py-28">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-100/60 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-blue-100/70 blur-2xl" />

      <Container className="relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
className="mb-24 flex flex-col items-center text-center md:mb-28"        >
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            <span className="text-sm font-extrabold uppercase tracking-[0.25em] text-blue-700">
              Our Process
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
          </div>

          <h2 className="mt-6 text-center text-4xl font-bold text-slate-900 sm:text-5xl">
            Our Recruitment Process
          </h2>

          <div className="mt-4 h-1 w-16 rounded-full bg-blue-600" />

          <p className="mt-6 max-w-3xl text-center text-base leading-8 text-slate-600 sm:text-lg">
            A structured hiring approach that helps organizations recruit the
            right talent efficiently and confidently.
          </p>
        </motion.div>

        {/* Timeline - desktop / tablet: horizontal, mobile: vertical */}
        <div className="relative mx-auto max-w-7xl">
          {/* Connecting line - horizontal on lg+, vertical on mobile */}
          <div className="absolute left-8 top-16 hidden h-[calc(100%-4rem)] w-0.5 bg-blue-200 lg:left-0 lg:top-9 lg:block lg:h-0.5 lg:w-full" />
          <div className="absolute left-8 top-16 block h-[calc(100%-4rem)] w-0.5 bg-blue-200 sm:hidden" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-6 lg:gap-x-4 lg:gap-y-0">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
className="relative flex items-start gap-5 sm:flex-col sm:items-center sm:gap-8 sm:text-center"                >
                  {/* Number badge (mobile - inline) */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[3px] border-blue-500 bg-white text-blue-600 shadow-lg sm:mt-8 sm:h-20 sm:w-20">
                    <span className="absolute -top-3 left-1/2 flex h-6 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-[10px] font-bold text-white shadow-md sm:-top-6">
                      {step.number}
                    </span>
                    <Icon size={22} className="sm:hidden" />
                    <Icon size={30} className="hidden sm:block" />
                  </div>

                  {/* Card */}
                  <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white px-7 py-8 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl sm:w-full">
<h3 className="text-lg font-bold leading-snug text-slate-900">                      {step.title}
                    </h3>
<div className="mx-auto mt-4 h-1 w-10 rounded-full bg-blue-500" />                    <p className="mt-5 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Highlights bar
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-16 max-w-6xl rounded-3xl border border-slate-200 bg-white/80 px-6 py-6 shadow-sm backdrop-blur-sm sm:mt-20 sm:px-8"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex items-start gap-3 ${
                    index !== 0 ? "lg:pl-8" : ""
                  }`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-sm leading-5 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div> */}
      </Container>
    </section>
  );
}