import * as React from "react";
import { Container } from "@/app/components/container";
import { cn } from "@/app/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const IntroSection: React.FC = () => {
  const t = useTranslations();
  const paragraphs = t.raw("Intro.paragraphs") as string[];
  const lines = t.raw("Intro.lines") as string[];

  return (
    <section id="meer-dan-een-workout" className="bg-card">
      <Container className="space-y-6 py-16 text-left sm:py-24 lg:text-center">
        <h2 className="heading-styles text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          {t("Intro.heading")}
        </h2>

        <div className="space-y-6">
          <div className="space-y-3">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="space-y-1">
            {lines.map((line) => (
              <p key={line} className="heading-styles text-base sm:text-lg">
                {line}
              </p>
            ))}
          </div>
        </div>

        {/*
          Content note: the draft's CTA annotation says "link for 2 weeks
          proefweken", but the visible label "ONTDEK HOE HET WERKT" clearly
          means "see how it works" / "see the programs". Linking to the
          Programs section since that matches the visible copy — confirm
          intended target with the content owner.
        */}
        <Link
          href="#training"
          className={cn(
            "button-styles gap-2",
            "border border-border bg-secondary text-sm hover:bg-secondary/70",
          )}
        >
          {t("Intro.cta")}
        </Link>
      </Container>
    </section>
  );
};
