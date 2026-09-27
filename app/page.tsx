import { FinalCtaSection } from "./components/final-cta-section";
import { Hero } from "./components/hero";
import { InstagramSection } from "./components/instagram-section";
import { IntroSection } from "./components/intro-section";
import { ProgramsSection } from "./components/programs-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { WhyUsSection } from "./components/why-us-section";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 py-16 sm:gap-24">
      <Hero />
      <IntroSection />
      <ProgramsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FinalCtaSection />
      <InstagramSection />
    </main>
  );
}
