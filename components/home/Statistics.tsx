import Container from "@/components/common/Container";

const stats = [
  {
    number: "500+",
    title: "Successful Placements",
  },
  {
    number: "100+",
    title: "Hiring Partners",
  },
  {
    number: "20+",
    title: "Industries Served",
  },
  {
    number: "95%",
    title: "Client Satisfaction",
  },
];

export default function Statistics() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a] py-44 sm:py-52 lg:py-60">
      {/* Background Glow */}

      <div className="pointer-events-none absolute -top-48 -left-48 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[180px]" />

      <div className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[180px]" />

      <Container className="relative z-10">
        {/* Heading */}

        <div className="text-center">
          <div className="inline-flex items-center rounded-full bg-blue-500/20 px-5 py-2">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-200">
              Our Impact
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Numbers That Speak For Themselves
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-blue-400" />

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Our commitment to quality recruitment has helped organizations
            build stronger teams while supporting professionals in achieving
            meaningful careers.
          </p>
        </div>

        {/* Statistics */}

        <div className="mt-28 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="group rounded-3xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-blue-400 hover:bg-white/15 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <h3 className="text-5xl font-extrabold text-blue-300 transition-colors duration-300 group-hover:text-white">
                {stat.number}
              </h3>

              <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-blue-400 transition-all duration-300 group-hover:w-16" />

              <p className="mt-5 text-lg font-medium text-slate-200">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}