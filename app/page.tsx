import { Hero } from "./components/hero";
import { IntroSection } from "./components/intro-section";
import { ProgramsSection } from "./components/programs-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroSection />
      <ProgramsSection />
    </main>
  );
}
