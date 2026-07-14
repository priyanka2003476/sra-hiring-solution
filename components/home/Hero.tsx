"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Container from "@/components/common/Container";
import PrimaryButton from "@/components/common/PrimaryButton";
import StatCard from "@/components/cards/StatCard";

const CLIENT_LOGOS = [
  "VIH Capital Advisory Private Limited",
  "Finance Buddha Pvt. Ltd.",
  "Relex Health Care Pvt. Ltd.",
  "ElasticRun",
  "Arvind Limited",
  "Infoneo Technologies Pvt. Ltd.",
  "Pratham Motors",
  "Justdial Pvt. Ltd.",];

export default function Hero() {
  return (
    <section    id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-100/40 blur-3xl sm:h-96 sm:w-96" />

      <Container>
        <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          {/* LEFT */}
          <div className="relative z-10">
            <span className="fade-up delay-1 inline-flex rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-700 sm:px-5 sm:py-2 sm:text-sm">
              Recruitment & Workforce Solutions
            </span>

            <h1 className="fade-up delay-2 mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:mt-8 sm:text-5xl lg:text-6xl xl:text-7xl">
              Connecting Businesses With{" "}
              <span className="text-blue-600">Exceptional Talent</span>
            </h1>

            <p className="fade-up delay-3 mt-6 max-w-xl text-base leading-7 text-slate-600 sm:mt-8 sm:text-lg sm:leading-8">
              We help businesses recruit highly skilled professionals across
              IT and Non-IT industries with faster hiring, transparent
              recruitment, and long-term workforce solutions.
            </p>

            <div className="fade-up delay-4 mt-8 flex flex-wrap gap-4 sm:mt-10 sm:gap-5">
              <PrimaryButton className="px-6 py-3 text-sm sm:px-8 sm:py-4 sm:text-base">
                {/* Hire Talent */}
              </PrimaryButton>

              <button className="group flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg sm:px-8 sm:py-4 sm:text-base">
                {/* Explore Jobs */}
                {/* <ArrowRight */}
                  {/* // size={18} */}
                  {/* // className="transition-transform duration-300 group-hover:translate-x-1" */}
                {/* /> */}
              </button>
            </div>

            {/* Mobile / Tablet stats row */}
            <div className="fade-up delay-5 mt-10 grid grid-cols-3 gap-4 border-t border-slate-200 pt-8 lg:hidden">
              <div>
                {/* <p className="text-2xl font-bold text-slate-900">500+</p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">Placements</p> */}
              </div>
              <div>
                {/* <p className="text-2xl font-bold text-slate-900">100+</p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">Hiring Partners</p> */}
              </div>
              <div>
                {/* <p className="text-2xl font-bold text-slate-900">20+</p> */}
                {/* <p className="mt-1 text-xs text-slate-500 sm:text-sm">Industries</p> */}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="fade-up delay-3 relative mx-auto flex max-w-md items-center justify-center lg:max-w-none">
            <Image
              src="/images/hero/hero-image.png"
              alt="Recruitment Illustration"
              width={650}
              height={650}
              priority
              className="w-full max-w-xl"
            />

            <div className="absolute left-0 top-8 hidden lg:block xl:top-12">
              {/* <StatCard number="500+" title="Successful Placements" /> */}
            </div>
            <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 lg:block xl:-right-6">
              {/* <StatCard number="100+" title="Hiring Partners" /> */}
            </div>
            <div className="absolute bottom-2 left-12 hidden lg:block xl:bottom-5 xl:left-20">
              {/* <StatCard number="20+" title="Industries Served" /> */}
            </div>
          </div>
        </div>

        {/* Trusted-by marquee */}
        <div className="fade-up delay-6 border-t border-slate-200 py-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 sm:text-left">
            Trusted by teams hiring from
          </p>
          <div className="relative mt-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="marquee flex w-max items-center gap-14">
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="whitespace-nowrap text-lg font-bold text-slate-400 sm:text-xl"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { opacity: 0; animation: fadeUp 0.6s ease-out forwards; }
        .delay-1 { animation-delay: 0.05s; }
        .delay-2 { animation-delay: 0.15s; }
        .delay-3 { animation-delay: 0.25s; }
        .delay-4 { animation-delay: 0.35s; }
        .delay-5 { animation-delay: 0.45s; }
        .delay-6 { animation-delay: 0.6s; }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee { animation: marquee 22s linear infinite; }
        .marquee:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
}