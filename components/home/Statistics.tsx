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
    <section className="bg-gradient-to-r from-slate-900 to-blue-900 py-24">
      <Container>
        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">
            Our Impact
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Numbers That Speak For Themselves
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Our commitment to quality recruitment has helped organizations
            build stronger teams while supporting professionals in achieving
            meaningful careers.
          </p>

        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-3xl border border-white/10 bg-white/10 p-10 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/20"
            >
              <h3 className="text-5xl font-bold text-white">
                {stat.number}
              </h3>

              <p className="mt-4 text-lg text-slate-300">
                {stat.title}
              </p>
            </div>
          ))}

        </div>
      </Container>
    </section>
  );
}