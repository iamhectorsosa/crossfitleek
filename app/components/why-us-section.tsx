import * as React from "react";
import { Container } from "@/app/components/container";
import { ValuePropCard } from "@/app/components/value-prop-card";
import { useTranslations } from "next-intl";

type ValuePropItem = {
  title: string;
  description: string;
};

export const WhyUsSection: React.FC = () => {
  const t = useTranslations();
  const items = t.raw("WhyUs.items") as ValuePropItem[];

  return (
    <section id="waarom-crossfit-leek">
      <Container className="space-y-10">
        <div className="space-y-3 text-left lg:text-center">
          <h2 className="heading-styles text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {t("WhyUs.heading")}
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg lg:mx-auto">
            {t("WhyUs.subheading")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <ValuePropCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
