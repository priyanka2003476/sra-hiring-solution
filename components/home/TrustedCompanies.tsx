"use client";

import Container from "@/components/common/Container";

const companies = [
  "VIH Capital Advisory Pvt. Ltd.",
  "Finance Buddha Pvt. Ltd.",
  "Relex Health Care Pvt. Ltd.",
  "Prasad Novelties",
  "Pai Pvt. Ltd.",
  "Praja Premium",
  "ElasticRun",
  "Arvind Limited",
  "SVG Institution",
  "Induzbuy",
  "Zopnote",
  "Settlin",
  "My Skool Club",
  "D Y Upper Engineers & Contractors",
  "Grassroots Solutions & Services Pvt. Ltd.",
  "Infoneo Technologies Pvt. Ltd.",
  "Pratham Motors",
  "Yulu Bike Pvt. Ltd.",
  "Justdial Pvt. Ltd.",
  "PMJ Fintech Pvt. Ltd.",
];

export default function TrustedCompanies() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Heading */}
        <div
          className="fade-up text-center"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "48rem",
          }}
        >
        <div className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2">
  <span className="text-sm font-extrabold uppercase tracking-[0.25em] text-blue-700">
    Trusted By
  </span>
</div>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Organizations That Trust
            <span className="text-blue-600"> SRA Hiring Solution</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            We are proud to partner with startups, SMEs, and established
            organizations across India, helping them recruit talented
            professionals through reliable and customized workforce
            solutions.
          </p>
        </div>

        {/* Companies */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {companies.map((company, index) => (
            <div
              key={company}
              className="fade-up flex min-h-[100px] items-center justify-center rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl sm:min-h-[110px] sm:p-6 sm:hover:-translate-y-2"
              style={{ animationDelay: `${(index % 8) * 0.06}s` }}
            >
              <p className="text-sm font-semibold leading-5 text-slate-700 sm:text-base sm:leading-6">
                {company}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="fade-up mt-10 text-center sm:mt-14">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm text-slate-600 sm:gap-x-3 sm:text-lg">
            <span>
              <span className="font-bold text-blue-600">20+</span> Trusted
              Organizations
            </span>
            <span className="hidden text-slate-300 sm:inline">•</span>
            <span>
              <span className="font-bold text-blue-600">500+</span>{" "}
              Successful Placements
            </span>
            <span className="hidden text-slate-300 sm:inline">•</span>
            <span>
              <span className="font-bold text-blue-600">95%</span> Client
              Satisfaction
            </span>
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
          animation: fadeUp 0.6s ease-out forwards;
          animation-timeline: view();
          animation-range: entry 0% cover 25%;
        }
      `}</style>
    </section>
  );
}