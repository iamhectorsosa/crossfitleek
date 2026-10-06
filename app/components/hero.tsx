import { Container } from "@/app/components/ui/container";
import { cn } from "@/app/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Hero() {
  const t = useTranslations();

  return (
    <section className="relative isolate overflow-hidden">
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

      <Container className="space-y-6 py-28 text-center sm:py-36 lg:py-44">
        <h1 className="mx-auto max-w-4xl font-header text-4xl font-extrabold tracking-tight text-foreground uppercase sm:text-6xl lg:text-7xl">
          {t("Hero.headlineLead")}{" "}
          <span className="text-primary">{t("Hero.headlineAccent")}</span>
        </h1>

        <p className="mx-auto max-w-xl heading-styles text-base sm:text-lg">
          {t("Hero.subheadline")}
        </p>

        <div className="flex justify-center">
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
    </section>
  );
}
