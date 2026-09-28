import * as React from "react";
import { FadeIn } from "@/app/components/ui/fade-in";
import { cn } from "@/app/lib/utils";

type ContainerProps = React.ComponentPropsWithoutRef<"div"> & {
  animate?: boolean;
};

export const Container: React.FC<ContainerProps> = ({
  animate = true,
  className,
  ...props
}) => {
  const classes = cn(
    "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
    className,
  );

  if (!animate) {
    return <div className={classes} {...props} />;
  }

  return <FadeIn className={classes} {...props} />;
};
