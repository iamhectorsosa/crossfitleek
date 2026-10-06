import * as React from "react";
import { FadeIn } from "@/app/components/ui/fade-in";
import { cn } from "@/app/lib/utils";

type ContainerProps = React.ComponentPropsWithoutRef<"div"> & {
  id?: string;
  animate?: boolean;
};

export const Container: React.FC<ContainerProps> = ({
  id,
  animate = true,
  className,
  ...props
}) => {
  const classes = cn(
    "mx-auto w-full max-w-5xl px-4 py-16",
    id && "scroll-mt-12",
    className,
  );

  if (!animate) {
    return <div id={id} className={classes} {...props} />;
  }

  return <FadeIn id={id} className={classes} {...props} />;
};
