import { FullLogo } from "@/app/components/full-logo";
import { Container } from "@/app/components/ui/container";
import { cn } from "@/app/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { Logo } from "./logo";

export function Hero() {
  const t = useTranslations();

  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://ix0lkyaphkycx1ct.public.blob.vercel-storage.com/photo-1.webp"
          alt={t("Hero.imageAlt")}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <Container className="space-y-8 py-28 text-left sm:py-36 lg:py-44 lg:text-center">
        <header className="space-y-4">
          <Logo className="size-10 lg:mx-auto lg:size-14" />
          <h1>
            <FullLogo className="justify-start text-6xl lg:justify-center lg:text-8xl" />
          </h1>
          <p className="mx-auto font-header text-xl leading-[0.85em] font-light tracking-wide text-foreground uppercase sm:text-2xl">
            {t("Hero.headline")}
          </p>
        </header>

        <p className="max-w-xl heading-styles text-sm lg:mx-auto lg:text-base">
          {t("Hero.subheadline")}
        </p>

        <div className="flex justify-start lg:justify-center">
          <a
            href="#"
            className={cn(
              "button-styles",
              "border border-primary bg-primary text-sm hover:bg-primary/90",
            )}
          >
            {t("StartTrialForTwoWeeks")}
          </a>
        </div>
      </Container>
    </div>
  );
}
