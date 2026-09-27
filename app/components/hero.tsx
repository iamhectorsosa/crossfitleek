import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations();
  const tags = t.raw("Hero.tags") as string[];

  return (
    <section className="relative isolate flex min-h-[92vh] w-full items-end overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,#1e1e1e,#0a0a0a_65%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-background via-background/70 to-background/20"
      />

      <div className="mx-auto w-full max-w-6xl px-4 pt-32 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <h1 className="max-w-3xl font-header text-4xl font-black tracking-tight text-foreground uppercase sm:text-6xl lg:text-7xl">
          {t("Hero.headlineLead")}{" "}
          <span className="text-primary">{t("Hero.headlineAccent")}</span>
        </h1>

        <p className="mt-4 max-w-xl font-header-secondary text-base tracking-wide text-foreground/90 uppercase sm:text-lg">
          {t("Hero.subheadline")}
        </p>

        <ul className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1.5 font-header-secondary text-xs tracking-[0.1em] text-primary uppercase sm:text-sm">
          {tags.map((tag, i) => (
            <li key={tag} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden="true" className="text-muted-foreground">
                  ·
                </span>
              )}
              {tag}
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
          {t("Hero.body")}
        </p>

        <p className="mt-6 max-w-xl font-header-secondary text-sm font-medium tracking-wide text-foreground uppercase sm:text-base">
          {t("Hero.ctaIntro")}
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 font-header-secondary text-sm font-semibold tracking-[0.04em] text-foreground uppercase transition-colors hover:bg-primary/90"
          >
            {t("Hero.ctaPrimary")}
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-sm border border-border bg-secondary px-6 py-3 font-header-secondary text-sm font-semibold tracking-[0.04em] text-foreground uppercase transition-colors hover:bg-secondary/70"
          >
            {t("Hero.ctaSecondary")}
          </a>
        </div>
      </div>
    </section>
  );
}
