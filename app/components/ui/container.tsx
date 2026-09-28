import * as React from "react";
import { cn } from "@/app/lib/utils";

type ContainerProps = React.ComponentPropsWithoutRef<"div"> & {};

export const Container: React.FC<ContainerProps> = ({
  className,
  ...props
}) => (
  <div
    className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}
    {...props}
  />
);
