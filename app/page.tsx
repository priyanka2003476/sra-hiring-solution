import About from "@/components/home/About";
import ContactCTA from "@/components/home/ContactCTA";
import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import Industries from "@/components/home/Industries";
import RecruitmentProcess from "@/components/home/RecruitmentProcess";
import Services from "@/components/home/Services";
import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";
import TrustedCompanies from "@/components/home/TrustedCompanies";
import WhyChooseUs from "@/components/home/WhyChooseUs";

import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <TrustedCompanies />

        <WhyChooseUs />


        <Services />

        <RecruitmentProcess />

        <Industries />

        <Statistics />

        <Testimonials />

        <FAQ />

        <ContactCTA />
      </main>
    </>
  );
}