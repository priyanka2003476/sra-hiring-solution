"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "@/components/common/Container";

const faqs = [
  {
    question: "Which industries do you recruit for?",
    answer:
      "We provide recruitment solutions for IT, Manufacturing, Healthcare, Banking & Finance, Retail, Logistics, Education, Sales & Marketing, and many other industries.",
  },
  {
    question: "Do you provide permanent recruitment services?",
    answer:
      "Yes. We specialize in permanent hiring for organizations looking to build strong and long-term teams.",
  },
  {
    question: "Do you offer contract staffing?",
    answer:
      "Yes. We provide flexible contract staffing solutions based on your project and business requirements.",
  },
  {
    question: "How long does the recruitment process take?",
    answer:
      "The hiring timeline depends on the role, but our streamlined recruitment process helps organizations hire qualified candidates as quickly as possible.",
  },
  {
    question: "How can I contact SRA Hiring Solution?",
    answer:
      "You can reach us through our Contact page, phone number, or email, and our recruitment team will get back to you promptly.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
<section
  id="faq"
  className="bg-slate-50 py-16 sm:py-20 lg:py-28"
>      <Container>
        <div
          className="fade-up text-center"
          style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "42rem" }}
        >
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 sm:px-5 sm:py-2">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700 sm:text-sm sm:tracking-[0.25em]">
              FAQ
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:mt-6 sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            Find answers to some of the most common questions about our
            recruitment services.
          </p>
        </div>

        <div
          className="mt-12 sm:mt-16"
          style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "56rem" }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const isLast = index === faqs.length - 1;

            return (
<div
  key={faq.question}
  className={`fade-up group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl ${
    isOpen ? "border-blue-500 shadow-lg" : "border-slate-200"
  }`}
  style={{
    animationDelay: `${index * 0.08}s`,
    marginBottom: isLast ? "0px" : "20px",
  }}
  onMouseEnter={() => setOpenIndex(index)}
  onMouseLeave={() => setOpenIndex(null)}
>
  <button
    onClick={() => setOpenIndex(isOpen ? null : index)}
    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-8 sm:py-6"
  >
    <span className="text-base font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-700 sm:text-lg">
      {faq.question}
    </span>

    <span
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
        isOpen
          ? "bg-blue-600 text-white rotate-180"
          : "bg-slate-100 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600"
      }`}
    >
      <ChevronDown size={18} />
    </span>
  </button>

  <div
    className={`overflow-hidden transition-all duration-500 ease-in-out ${
      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    <div className="border-t border-slate-200 px-5 py-5 sm:px-8 sm:py-6">
      <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
        {faq.answer}
      </p>
    </div>
  </div>
</div>
            );
          })}
        </div>
      </Container>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-up {
          opacity: 0;
          animation: fadeUp 0.6s ease-out forwards;
          animation-timeline: view();
          animation-range: entry 0% cover 25%;
        }
      `}</style>
    </section>
  );
}