"use client";

import * as React from "react";
import { cn } from "@/app/lib/utils";

type FadeInProps = React.ComponentPropsWithoutRef<"div">;

export const FadeIn: React.FC<FadeInProps> = ({ className, ...props }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "motion-safe:transition-[opacity,translate]",
        "motion-safe:duration-700 motion-safe:ease-out",
        !isVisible && "motion-safe:translate-y-8 motion-safe:opacity-0",
        className,
      )}
      {...props}
    />
  );
};
