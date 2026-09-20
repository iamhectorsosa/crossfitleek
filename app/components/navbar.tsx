import { useTranslations } from "next-intl";
import Link from "next/link";

export function Navbar() {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
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
      </div>
    </header>
  );
}
