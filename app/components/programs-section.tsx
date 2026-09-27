import * as React from "react";
import { Container } from "@/app/components/container";
import { ProgramCard } from "@/app/components/program-card";
import { useTranslations } from "next-intl";

type ProgramItem = {
  title: string;
  tagline: string;
  description: string;
  cta: string;
};

// Placeholder photo labels, sourced from the "Photo: ..." captions in the
// content draft — dev-only annotations, not user-facing copy.
const PLACEHOLDER_LABELS: Record<string, string> = {
  CrossFit: "Foto: groepstraining",
  Strength: "Foto: groepstraining",
  Endurance: "Foto: hardlopen / roeien / fietsen",
  SWEAT: "Foto: toegankelijke groep",
  "Kids & Teens": "Foto: kids/teens training",
  "Personal Training": "Foto: coach + sporter",
};

export const ProgramsSection: React.FC = () => {
  const t = useTranslations();
  const items = t.raw("Programs.items") as ProgramItem[];

  return (
    <section id="training">
      <Container className="space-y-10">
        <h2 className="text-left heading-styles text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-center lg:text-5xl">
          {t("Programs.heading")}
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <ProgramCard
              key={item.title}
              title={item.title}
              tagline={item.tagline}
              description={item.description}
              cta={item.cta}
              placeholderLabel={
                PLACEHOLDER_LABELS[item.title] ?? "Foto: groepstraining"
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
