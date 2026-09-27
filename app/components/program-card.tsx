import * as React from "react";
import { cn } from "@/app/lib/utils";
import Link from "next/link";

type ProgramCardProps = {
  title: string;
  tagline: string;
  description: string;
  cta: string;
  placeholderLabel: string;
};

export const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  tagline,
  description,
  cta,
  placeholderLabel,
}) => {
  return (
    <article
      className={cn(
        "flex flex-col gap-4",
        "rounded-sm border border-border bg-card",
        "p-6",
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center rounded-sm border border-border bg-secondary/60 text-xs text-muted-foreground",
          "aspect-4/3 w-full",
        )}
        aria-hidden="true"
      >
        {placeholderLabel}
      </div>

      <h3 className="heading-styles text-lg">{title}</h3>

      <p className="font-header text-xl font-bold text-foreground sm:text-2xl">
        {tagline}
      </p>

      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      <Link
        href="#"
        className={cn(
          "button-styles mt-auto gap-2",
          "border border-border bg-secondary text-sm hover:bg-secondary/70",
        )}
      >
        {cta}
      </Link>
    </article>
  );
};
