import { useTranslations } from "next-intl";
import Image from "next/image";

import Icon from "./icon.svg";

export default function Home() {
  const t = useTranslations();
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-center">
        <header className="flex flex-col items-center justify-center">
          <Image
            src={Icon}
            unoptimized
            alt={t("CrossFitLeekLogo")}
            className="size-16 lg:size-24"
          />
          <h1
            className="flex flex-wrap font-header text-3xl font-extrabold tracking-wide uppercase lg:text-5xl"
            aria-label={t("CrossFitLeek")}
          >
            <span aria-hidden="true">
              C<span className="text-2xl lg:text-4xl">ross</span>f
              <span className="text-2xl lg:text-4xl">it</span>
            </span>

            <span aria-hidden="true" className="ml-2 text-primary">
              Leek
            </span>
          </h1>
          <h2 className="font-extralight uppercase lg:text-lg">
            {t("MoveLikeAHuman")}
          </h2>
        </header>
      </main>
    </div>
  );
}
