import * as React from "react";
import { Container } from "@/app/components/ui/container";
import { cn } from "@/app/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";

// Hardcoded tile labels straight from the draft's 6-image grid description —
// dev-only annotations, not user-facing copy.
const TILE_LABELS = [
  "Leden",
  "Workouts",
  "Community",
  "Events",
  "Kids/Teens",
  "Sfeer in de box",
];

export const InstagramSection: React.FC = () => {
  const t = useTranslations();

  return (
    <section>
      <Container className="space-y-8">
        <h2 className="text-left heading-styles text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-center lg:text-5xl">
          {t("Instagram.heading")}
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {TILE_LABELS.map((label) => (
            <div
              key={label}
              className={cn(
                "flex items-center justify-center rounded-sm border border-border bg-secondary/60 text-xs text-muted-foreground",
                "aspect-square",
              )}
              aria-hidden="true"
            >
              {label}
            </div>
          ))}
        </div>
        <div className="text-left lg:text-center">
          {/* TODO: real Instagram URL */}
          <Link
            href="#"
            className={cn(
              "button-styles gap-2",
              "border border-border bg-secondary text-sm hover:bg-secondary/70",
            )}
          >
            {t("Instagram.cta")}
          </Link>
        </div>
      </Container>
    </section>
  );
};
