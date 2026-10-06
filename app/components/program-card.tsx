import * as React from "react";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import Link from "next/link";

type ProgramCardProps = {
  title: string;
  tagline: string;
  description: string;
  cta: string;
  imageSrc: string;
  imageAlt: string;
};

export const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  tagline,
  description,
  cta,
  imageSrc,
  imageAlt,
}) => {
  return (
    <article
      className={cn(
        "flex flex-col gap-4",
        "rounded-sm border border-border bg-card",
        "p-6",
      )}
    >
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm border border-border">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
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
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </article>
  );
};
