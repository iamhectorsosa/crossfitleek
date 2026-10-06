import { Hero } from "./components/hero";
import { IntroSection } from "./components/intro-section";
import { ProgramsSection } from "./components/programs-section";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 py-16 sm:gap-24">
      <Hero />
      <IntroSection />
      <ProgramsSection />
    </main>
  );
}
