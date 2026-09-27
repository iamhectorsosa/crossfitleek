import * as React from "react";

type TestimonialCardProps = {
  quote: string;
  name: string;
  since: string;
};

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  since,
}) => {
  return (
    <figure className="flex flex-col gap-4 rounded-sm border border-border bg-card p-6">
      <blockquote className="text-base leading-relaxed text-foreground">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="text-sm text-muted-foreground">
        — {name}, {since}
      </figcaption>
    </figure>
  );
};
