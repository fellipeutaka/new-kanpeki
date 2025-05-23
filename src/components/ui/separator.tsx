"use client";

import { Separator as SeparatorPrimitive } from "react-aria-components";

import { cva } from "~/lib/cva";

export interface SeparatorProps
  extends React.ComponentProps<typeof SeparatorPrimitive> {}

export const SeparatorStyles = cva({
  base: [
    "shrink-0 bg-border",
    "orientation-horizontal:h-px orientation-horizontal:w-full",
    "orientation-vertical:h-full orientation-vertical:w-px",
  ],
  // TODO: Think about this
  // variants: {
  //   variant: {
  //     menu: "-mx-1 my-1",
  //   },
  // },
});

export function Separator({ className, ...props }: SeparatorProps) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      className={SeparatorStyles({ className })}
      {...props}
    />
  );
}
