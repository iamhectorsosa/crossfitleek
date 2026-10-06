import * as React from "react";
import { ProgramCard } from "@/app/components/program-card";
import { Container } from "@/app/components/ui/container";
import { useTranslations } from "next-intl";

type ProgramItem = {
  title: string;
  tagline: string;
  description: string;
  cta: string;
  imageAlt: string;
};

const BLOB_BASE_URL = "https://ix0lkyaphkycx1ct.public.blob.vercel-storage.com";

// Programs.items is ordered CrossFit, Strength, Endurance, SWEAT,
// Kids & Teens, Personal Training — matching photo-3.webp .. photo-8.webp.
const PHOTO_START_INDEX = 3;

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
          {items.map((item, index) => (
            <ProgramCard
              key={item.title}
              title={item.title}
              tagline={item.tagline}
              description={item.description}
              cta={item.cta}
              imageSrc={`${BLOB_BASE_URL}/photo-${PHOTO_START_INDEX + index}.webp`}
              imageAlt={item.imageAlt}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
