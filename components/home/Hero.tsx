"use client";

import Image from "next/image";

import Container from "@/components/common/Container";

const CLIENT_LOGOS = [
  "VIH Capital Advisory Private Limited",
  "Finance Buddha Pvt. Ltd.",
  "Relex Health Care Pvt. Ltd.",
  "ElasticRun",
  "Arvind Limited",
  "Infoneo Technologies Pvt. Ltd.",
  "Pratham Motors",
  "Justdial Pvt. Ltd.",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      {/* Background Blur */}

      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-100/40 blur-3xl sm:h-96 sm:w-96" />

      <Container>
        <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">

          {/* Left */}

          <div className="relative z-10">

            <span className="fade-up delay-1 inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              Recruitment & Workforce Solutions
            </span>

            <h1 className="fade-up delay-2 mt-8 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">
              Connecting Businesses With{" "}
              <span className="text-blue-600">
                Exceptional Talent
              </span>
            </h1>

            <p className="fade-up delay-3 mt-8 max-w-xl text-lg leading-8 text-slate-600">
              We help businesses recruit highly skilled professionals across
              IT and Non-IT industries with faster hiring, transparent
              recruitment, and long-term workforce solutions.
            </p>

          </div>

          {/* Right */}

          <div className="fade-up delay-3 relative mx-auto flex max-w-md items-center justify-center lg:max-w-none">

            <Image
              src="/images/hero/hero-image.png"
              alt="Recruitment Illustration"
              width={650}
              height={650}
              priority
              className="w-full max-w-xl"
            />

          </div>

        </div>
                {/* Trusted Companies */}

        <div className="fade-up delay-4 border-t border-slate-200 py-8 sm:py-10">

          <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-slate-400 sm:text-sm">
            Trusted by organizations hiring through us
          </p>

          <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

            <div className="marquee flex w-max items-center gap-16">

              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((name, index) => (
                <span
                  key={`${name}-${index}`}
                  className="whitespace-nowrap text-lg font-bold text-slate-500 transition duration-300 hover:text-blue-600 sm:text-xl"
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
          animation: fadeUp 0.7s ease-out forwards;
        }

        .delay-1 {
          animation-delay: 0.05s;
        }

        .delay-2 {
          animation-delay: 0.15s;
        }

        .delay-3 {
          animation-delay: 0.25s;
        }

        .delay-4 {
          animation-delay: 0.35s;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .marquee {
          animation: marquee 24s linear infinite;
        }

        .marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}