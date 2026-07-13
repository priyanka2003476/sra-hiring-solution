"use client";

import Image from "next/image";

import Container from "@/components/common/Container";
import PrimaryButton from "@/components/common/PrimaryButton";

export default function About() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-20">
          {/* LEFT */}
<div className="fade-up relative order-2 mx-auto max-w-md sm:max-w-lg lg:order-1 lg:mx-0 lg:max-w-none">            <Image
              src="/images/about/about-us.png"
              alt="About SRA Hiring Solution"
              width={650}
              height={650}
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="h-auto w-full rounded-2xl sm:rounded-3xl"
            />

            {/* Experience Card */}
            <div className="absolute -bottom-6 left-4 rounded-xl bg-white p-4 shadow-xl sm:-bottom-8 sm:left-8 sm:rounded-2xl sm:p-6 sm:shadow-2xl">
             
            </div>
          </div>

<div className="order-1 mt-0 lg:order-2 lg:mt-0">
  <div className="fade-up delay-1 inline-flex items-center rounded-full bg-blue-100 px-5 py-2">
    <span className="text-sm font-extrabold uppercase tracking-[0.25em] text-blue-700">
      About Us
    </span>
  </div>

            <h2 className="fade-up delay-2 mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:mt-6 sm:text-4xl lg:text-5xl">
              Empowering Businesses Through Smart Recruitment Solutions
            </h2>

            <p className="fade-up delay-3 mt-6 max-w-xl text-base leading-8 tracking-normal text-slate-600 sm:mt-8 sm:text-lg sm:leading-9">
              SRA Hiring Solution is a trusted recruitment and workforce
              solutions company dedicated to helping businesses hire
              exceptional professionals across IT and Non-IT industries.
            </p>

            <p className="fade-up delay-4 mt-5 max-w-xl text-base leading-8 tracking-normal text-slate-600 sm:mt-6 sm:text-lg sm:leading-9">
              We focus on delivering high-quality recruitment services,
              understanding every client&apos;s hiring needs, and connecting
              them with skilled professionals who contribute to long-term
              business growth.
            </p>

            {/* Cards */}
            <div className="fade-up delay-5 mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6">
              <div className="rounded-2xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                  Our Vision
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  To become India&apos;s most trusted recruitment partner by
                  delivering quality talent and long-term workforce
                  solutions.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                  Our Mission
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  Helping organizations build successful teams while creating
                  meaningful career opportunities for talented professionals.
                </p>
              </div>
            </div>

            <div className="fade-up delay-6 mt-10 sm:mt-12">
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
          animation-delay: 0.1s;
        }
        .delay-3 {
          animation-delay: 0.15s;
        }
        .delay-4 {
          animation-delay: 0.2s;
        }
        .delay-5 {
          animation-delay: 0.25s;
        }
        .delay-6 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
}