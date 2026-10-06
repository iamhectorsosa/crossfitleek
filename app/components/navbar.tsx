import * as React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Logo } from "./logo";
import { Container } from "./ui/container";

export const Navbar: React.FC = () => {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-md">
      <Container
        animate={false}
        className="flex items-center justify-between py-3"
      >
        <Link href="/" aria-label={t("CrossFitLeek")}>
          <Logo className="size-6 w-auto" />
        </Link>
      </Container>
    </header>
  );
};
