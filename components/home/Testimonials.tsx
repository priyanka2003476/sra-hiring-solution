import { Quote } from "lucide-react";
import Container from "@/components/common/Container";

const testimonials = [
  {
    company: "Finance Buddha Pvt. Ltd.",
    feedback:
      "SRA Hiring Solution consistently provided qualified candidates with a quick turnaround time. Their recruitment process was smooth, professional, and reliable.",
  },
  {
    company: "Arvind Limited",
    feedback:
      "Their recruitment team understood our requirements perfectly and helped us hire talented professionals efficiently.",
  },
  {
    company: "ElasticRun",
    feedback:
      "Excellent hiring support with high-quality candidates. We highly appreciate their professionalism and responsiveness.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">

        <div className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2">
  <span className="text-sm font-extrabold uppercase tracking-[0.25em] text-blue-700">
Testimonials
  </span>
</div>
          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            What Our Clients Say
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We believe long-term partnerships are built on trust, quality,
            and consistent recruitment excellence.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.company}
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-white hover:shadow-2xl"
            >
              <Quote
                size={45}
                className="text-blue-600"
              />

              <p className="mt-6 leading-8 text-slate-600">
                "{item.feedback}"
              </p>

              <div className="mt-8 border-t border-slate-200 pt-5">

                <h3 className="text-xl font-bold text-slate-900">
                  {item.company}
                </h3>

                <p className="text-sm text-slate-500">
                  Trusted Client
                </p>

              </div>

            </div>
          ))}

        </div>
      </Container>
    </section>
  );
}