import { useTranslations } from "next-intl";
import Link from "next/link";

import { Logo } from "./logo";
import { Container } from "./ui/container";

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-card">
      <Container
        animate={false}
        className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row"
      >
        <Link href="/" aria-label={t("CrossFitLeek")}>
          <Logo className="h-6 w-auto" />
        </Link>

        <p className="heading-styles text-sm text-muted-foreground">
          {t("CrossFitLeek")} {year}
        </p>
      </Container>
    </footer>
  );
}
