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

const PHOTO_START_INDEX = 3;

export const ProgramsSection: React.FC = () => {
  const t = useTranslations();
  const items = t.raw("Programs.items") as ProgramItem[];

  return (
    <Container id="training" className="space-y-8 md:space-y-12">
      <h2 className="text-left heading-styles text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-center lg:text-5xl">
        {t("Programs.heading")}
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
  );
};
