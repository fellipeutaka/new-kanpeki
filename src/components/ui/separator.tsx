"use client";

import { Separator as SeparatorPrimitive } from "react-aria-components";

import { cn } from "~/lib/cva";

export interface SeparatorProps
  extends React.ComponentProps<typeof SeparatorPrimitive> {}

export function Separator({ className, ...props }: SeparatorProps) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      className={cn(
        "shrink-0 bg-border",
        "orientation-horizontal:h-px orientation-horizontal:w-full",
        "orientation-vertical:h-full orientation-vertical:w-px",
        className
      )}
      {...props}
    />
  );
}
