import * as React from "react";
import { cn } from "@/app/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Logo } from "./logo";
import { NavbarDrawer } from "./navbar-drawer";
import { Container } from "./ui/container";

export const Navbar: React.FC = () => {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-md">
      <Container
        animate={false}
        className="flex items-center justify-between gap-4 py-3"
      >
        <Link href="/" aria-label={t("CrossFitLeek")} className="shrink-0">
          <Logo className="size-6 w-auto" />
        </Link>

        <div className="flex min-w-0 items-center gap-2">
          <a
            href="#"
            className={cn(
              "button-styles",
              "border border-primary bg-primary text-sm hover:bg-primary/90",
              "px-3 py-1.5",
            )}
          >
            {t("StartTrialForTwoWeeks")}
          </a>
          <NavbarDrawer />
        </div>
      </Container>
    </header>
  );
};
