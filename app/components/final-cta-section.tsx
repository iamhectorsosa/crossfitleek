import * as React from "react";
import { Container } from "@/app/components/ui/container";
import { cn } from "@/app/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const FinalCtaSection: React.FC = () => {
  const t = useTranslations();

  return (
    <section className="bg-card">
      <Container className="space-y-6 py-16 text-left sm:py-24 lg:text-center">
        <h2 className="heading-styles text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          {t("FinalCta.heading")}
        </h2>
        <p className="heading-styles text-lg">{t("FinalCta.subheading")}</p>
        <p className="text-base leading-relaxed text-muted-foreground">
          {t("FinalCta.paragraph")}
        </p>

        <div className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-center">
            {/* TODO: real signup link */}
            <a
              href="#"
              className={cn(
                "button-styles",
                "border border-primary bg-primary text-sm hover:bg-primary/90",
              )}
            >
              {t("FinalCta.ctaPrimary")}
            </a>

            <Link
              href="/contact"
              className={cn(
                "button-styles",
                "border border-border bg-secondary text-sm hover:bg-secondary/70",
              )}
            >
              {t("FinalCta.ctaSecondary")}
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            {t("FinalCta.questionLine")}
          </p>
        </div>
      </Container>
    </section>
  );
};
