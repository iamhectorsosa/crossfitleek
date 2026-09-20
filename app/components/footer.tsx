import { useTranslations } from "next-intl";
import Link from "next/link";

import { Logo } from "./logo";

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-card">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <Link href="/" aria-label={t("CrossFitLeek")}>
          <Logo className="h-6 w-auto" />
        </Link>

        <p className="font-header-secondary text-xs tracking-[0.14em] text-muted-foreground uppercase">
          {t("CrossFitLeek")} {year}
        </p>
      </div>
    </footer>
  );
}
