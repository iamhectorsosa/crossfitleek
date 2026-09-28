import { Container } from "@/app/components/ui/container";
import { cn } from "@/app/lib/utils";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations();
  const tags = t.raw("Hero.tags") as string[];

  return (
    <section>
      <Container className="space-y-6 pt-32 text-left lg:text-center">
        <div className="space-y-3">
          <h1 className="max-w-3xl font-header text-4xl font-extrabold tracking-tight text-foreground uppercase sm:text-6xl lg:mx-auto lg:text-7xl">
            {t("Hero.headlineLead")}{" "}
            <span className="text-primary">{t("Hero.headlineAccent")}</span>
          </h1>

          <p className="max-w-xl heading-styles text-base sm:text-lg lg:mx-auto">
            {t("Hero.subheadline")}
          </p>
        </div>

        <div className="group w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_3rem,black_calc(100%-3rem),transparent)]">
          <div className="flex">
            {[0, 1].map((setIdx) => (
              <ul
                key={setIdx}
                aria-hidden={setIdx === 1 || undefined}
                className="flex min-w-full shrink-0 animate-marquee items-center gap-2 px-1 group-hover:[animation-play-state:paused]"
              >
                {[...tags, ...tags].map((tag, i) => (
                  <li
                    key={tag + i}
                    aria-hidden={i >= tags.length || undefined}
                    className="flex items-center gap-2 heading-styles text-sm text-primary sm:text-base"
                  >
                    {tag}
                    <span aria-hidden="true">·</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-auto">
          {t("Hero.body")}
        </p>

        <div className="space-y-3">
          <p className="max-w-xl heading-styles text-base sm:text-lg lg:mx-auto">
            {t("Hero.ctaIntro")}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-center">
            <a
              href="#"
              className={cn(
                "button-styles",
                "border border-primary bg-primary text-sm hover:bg-primary/90",
              )}
            >
              {t("Hero.ctaPrimary")}
            </a>
            <a
              href="#"
              className={cn(
                "button-styles",
                "border border-border bg-secondary text-sm hover:bg-secondary/70",
              )}
            >
              {t("Hero.ctaSecondary")}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
