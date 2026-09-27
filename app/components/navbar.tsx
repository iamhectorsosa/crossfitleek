import * as React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Container } from "./container";

export const Navbar: React.FC = () => {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-md">
      <Container className="flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2.5">
          <span
            className="flex flex-wrap font-header text-lg font-extrabold tracking-wide uppercase lg:text-2xl"
            aria-label={t("CrossFitLeek")}
          >
            <span aria-hidden="true">
              C<span className="text-base lg:text-xl">ross</span>f
              <span className="text-base lg:text-xl">it</span>
            </span>

            <span aria-hidden="true" className="ml-1.5 text-primary">
              Leek
            </span>
          </span>
        </Link>
      </Container>
    </header>
  );
};
