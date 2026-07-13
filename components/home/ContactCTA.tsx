"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import Container from "@/components/common/Container";

export default function ContactCTA() {
  return (
<section
  id="contact"
  className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
>      <Container>
        {/* Section Heading */}
        <div
          className="fade-up mb-12 text-center sm:mb-16"
          style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "42rem" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600 sm:text-sm sm:tracking-[0.35em]">
            Get In Touch
          </p>
<div className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2">
  <span className="text-sm font-extrabold uppercase tracking-[0.25em] text-blue-700">
    Contact Us
  </span>
</div>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            Have a hiring need or looking for your next opportunity? Reach out and let&apos;s talk.
          </p>
        </div>

        {/* CTA Card */}
        <div className="fade-up overflow-hidden rounded-3xl bg-gradient-to-r from-blue-800 via-blue-800 to-indigo-700 sm:rounded-[10px]">
          <div className="grid items-center gap-10 p-8 sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-16">
            <div>
              <p className="fade-up delay-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200 sm:text-sm sm:tracking-[0.35em]">
                Let&apos;s Work Together
              </p>

              <h3 className="fade-up delay-2 mt-5 text-3xl font-bold leading-tight text-white sm:mt-6 sm:text-4xl lg:text-5xl">
                Ready To Build Your Dream Team?
              </h3>

              <p className="fade-up delay-3 mt-5 max-w-xl text-base leading-7 text-blue-100 sm:mt-6 sm:text-lg sm:leading-8">
                Partner with SRA Hiring Solution and let our recruitment experts help you find the right talent for your organization.
              </p>

              <div className="fade-up delay-4 mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-lg transition-transform duration-300 hover:scale-105 sm:px-8 sm:py-4 sm:text-base"
                >
                  Contact Us
                </Link>

                {/* <Link
                  href="/careers"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/70 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-700 sm:px-8 sm:py-4 sm:text-base"
                >
                </Link> */}
              </div>

              <div className="fade-up delay-5 mt-10 space-y-4 border-t border-white/20 pt-8 sm:mt-12 sm:space-y-5">
                <div className="flex items-center gap-4 text-white">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <a href="tel:+919353465553" className="text-sm transition hover:underline sm:text-base">
                    +91 9353465553
                  </a>
                </div>

                <div className="flex items-center gap-4 text-white">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <a href="mailto:shivakumarm.sra@gmail.com" className="break-all text-sm transition hover:underline sm:text-base">
                    shivakumarm.sra@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-4 text-white">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <a href="mailto:neethusrahirings@gmail.com" className="break-all text-sm transition hover:underline sm:text-base">
                    neethusrahirings@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-4 text-white">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <span className="text-sm sm:text-base">Davanagere, Karnataka</span>
                </div>
              </div>
            </div>

            <div className="fade-up delay-3 flex justify-center">
              <Image
                src="/images/contact/contact-illustration.png"
                alt="Contact SRA Hiring Solution"
                width={700}
                height={700}
                className="h-auto w-full max-w-xs sm:max-w-sm lg:max-w-xl"
              />
            </div>
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-up {
          opacity: 0;
          animation: fadeUp 0.7s ease-out forwards;
          animation-timeline: view();
          animation-range: entry 0% cover 25%;
        }
        .delay-1 {
          animation-delay: 0.05s;
        }
        .delay-2 {
          animation-delay: 0.12s;
        }
        .delay-3 {
          animation-delay: 0.2s;
        }
        .delay-4 {
          animation-delay: 0.28s;
        }
        .delay-5 {
          animation-delay: 0.36s;
        }
      `}</style>
    </section>
  );
}
