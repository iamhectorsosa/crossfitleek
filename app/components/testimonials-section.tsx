import * as React from "react";
import { Container } from "@/app/components/container";
import { TestimonialCard } from "@/app/components/testimonial-card";
import { cn } from "@/app/lib/utils";
import { useTranslations } from "next-intl";

type Review = {
  quote: string;
  name: string;
  since: string;
};

export const TestimonialsSection: React.FC = () => {
  const t = useTranslations();
  const paragraphs = t.raw("Testimonials.paragraphs") as string[];
  const reviews = t.raw("Testimonials.reviews") as Review[];

  return (
    <section id="reviews">
      <div className="space-y-16">
        <Container className="space-y-6 text-left lg:text-center">
          <h2 className="heading-styles text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {t("Testimonials.heading")}
          </h2>

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

          <p className="heading-styles text-lg">{t("Testimonials.boldLine")}</p>
          <p className="text-base text-muted-foreground">
            {t("Testimonials.closingLine")}
          </p>

          {/* TODO: real signup link */}
          <a
            href="#"
            className={cn(
              "button-styles",
              "border border-primary bg-primary text-sm hover:bg-primary/90",
            )}
          >
            {t("Testimonials.cta")}
          </a>
        </Container>

        <Container className="space-y-8">
          <h3 className="text-left heading-styles text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-center lg:text-5xl">
            {t("Testimonials.reviewsHeading")}
          </h3>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {reviews.map((review) => (
              <TestimonialCard
                key={review.name + review.since}
                quote={review.quote}
                name={review.name}
                since={review.since}
              />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};
