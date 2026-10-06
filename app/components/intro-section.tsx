import * as React from "react";
import { Container } from "@/app/components/ui/container";
import { cn } from "@/app/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export const IntroSection: React.FC = () => {
  const t = useTranslations();
  const paragraphs = t.raw("Intro.paragraphs") as string[];

  return (
    <div className="bg-card">
      <Container id="welcome" className="space-y-10 py-16 sm:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 text-left">
            <h2 className="heading-styles text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              {t("Intro.heading")}
            </h2>

            <div className="space-y-4">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-muted-foreground sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm border border-border">
            <Image
              src="https://ix0lkyaphkycx1ct.public.blob.vercel-storage.com/photo-2.webp"
              alt={t("Intro.imageAlt")}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-4 text-left lg:text-center">
          <p className="mx-auto max-w-3xl heading-styles text-base sm:text-lg">
            {t("Intro.closingLine")}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row lg:justify-center">
            <a
              href="#"
              className={cn(
                "button-styles",
                "border border-primary bg-primary text-sm hover:bg-primary/90",
              )}
            >
              {t("StartTrialForTwoWeeks")}
            </a>
            <Link
              href="#training"
              className={cn(
                "button-styles",
                "border border-border bg-secondary text-sm hover:bg-secondary/70",
              )}
            >
              {t("Intro.ctaSecondary")}
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
