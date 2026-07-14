"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import Container from "@/components/common/Container";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/40 to-white py-20 sm:py-24 lg:py-32"
    >
      {/* Background Effects */}

      <div className="pointer-events-none absolute -left-40 -top-32 h-[420px] w-[420px] rounded-full bg-blue-200/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-indigo-200/40 blur-3xl" />

      <Container className="relative z-10">
        {/* Heading */}

        <div className="fade-up mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full bg-blue-100 px-6 py-2">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-700">
              Contact Us
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Let's Build Something Great Together
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-blue-600" />

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Whether you're hiring exceptional talent or searching for your next
            career opportunity, our team is here to help you every step of the
            way.
          </p>
        </div>

        {/* Glass Card */}

        <div className="fade-up overflow-hidden rounded-[36px] border border-white/20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 shadow-[0_25px_80px_rgba(37,99,235,0.35)] backdrop-blur-2xl">

<div className="grid items-center justify-items-center gap-16 px-8 py-10 sm:px-12 sm:py-14 lg:grid-cols-2 lg:gap-24 lg:px-20 lg:py-20">
            {/* Left */}

<div className="flex w-full flex-col items-center justify-center text-center">
              <span className="text-sm font-bold uppercase tracking-[0.35em] text-blue-200">
                LET'S WORK TOGETHER
              </span>

              <h3 className="mt-6 text-4xl font-extrabold leading-tight text-white lg:text-5xl">
                Ready To Build Your Dream Team?
              </h3>

<p className="mt-8 max-w-xl text-lg leading-8 font-medium text-blue-100">                Partner with SRA Hiring Solution and let our recruitment
                specialists connect you with highly qualified professionals
                across multiple industries.
              </p>

              <Link
                href="/contact"
                className="mt-10 inline-flex items-center justify-center rounded-xl bg-white px-10 py-4 text-lg font-bold text-blue-700 shadow-xl transition duration-300 hover:scale-105"
              >
                Contact Us
              </Link>

              {/* Contact Details */}

              <div className="mt-12 w-full max-w-lg space-y-5">

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-xl transition hover:bg-white/20">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <Phone className="h-5 w-5 text-white" />
                  </div>

                  <a
                    href="tel:+919353465553"
                    className="text-lg font-semibold text-white"
                  >
                    +91 9353465553
                  </a>

                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-xl transition hover:bg-white/20">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <Mail className="h-5 w-5 text-white" />
                  </div>

                  <a
                    href="mailto:shivakumarm.sra@gmail.com"
                    className="text-base font-semibold text-white break-all"
                  >
                    shivakumarm.sra@gmail.com
                  </a>

                </div>
                                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-xl transition hover:bg-white/20">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <Mail className="h-5 w-5 text-white" />
                  </div>

                  <a
                    href="mailto:neethusrahirings@gmail.com"
                    className="text-base font-semibold text-white break-all"
                  >
                    neethusrahirings@gmail.com
                  </a>

                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-xl transition hover:bg-white/20">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>

                  <span className="text-lg font-semibold text-white">
                    Davanagere, Karnataka
                  </span>

                </div>

              </div>

            </div>

            {/* Right Side Image */}

            <div className="fade-up delay-3 flex items-center justify-center">

              <div className="relative">

                <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-3xl" />

                <Image
                  src="/images/contact/contact-illustration.png"
                  alt="Contact SRA Hiring Solution"
                  width={700}
                  height={700}
                  priority
                  className="relative h-auto w-full max-w-sm drop-shadow-[0_25px_45px_rgba(0,0,0,0.45)] sm:max-w-md lg:max-w-xl"
                />

              </div>

            </div>

          </div>

        </div>

      </Container>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-up {
          opacity: 0;
          animation: fadeUp 0.8s ease forwards;
          animation-timeline: view();
          animation-range: entry 0% cover 30%;
        }

        .delay-3 {
          animation-delay: 0.2s;
        }
      `}</style>

    </section>
  );
}