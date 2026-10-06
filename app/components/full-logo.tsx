import * as React from "react";
import { cn } from "@/app/lib/utils";
import { useTranslations } from "next-intl";

export const FullLogo: React.FC<{ className?: string }> = ({ className }) => {
  const t = useTranslations();

  return (
    <span
      className={cn(
        "flex flex-wrap items-center gap-x-[0.2em]",
        "font-header text-lg font-extrabold tracking-[-0.01em] uppercase lg:text-2xl",
        className,
      )}
      aria-label={t("CrossFitLeek")}
    >
      <span
        className="flex flex-wrap items-center leading-[0.85em]"
        aria-hidden="true"
      >
        C<span className="text-[0.8em]">ross</span>f
        <span className="text-[0.8em]">it</span>
      </span>

      <span aria-hidden="true" className="leading-[0.85em] text-primary">
        Leek
      </span>
    </span>
  );
};
