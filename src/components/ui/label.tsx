"use client";

import { Label as LabelPrimitive } from "react-aria-components";

import { cva } from "~/lib/cva";

export const LabelStyles = cva({
  base: [
    "flex select-none items-center gap-2 font-medium text-sm leading-none",
    "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
    "group-disabled:pointer-events-none group-disabled:opacity-50",
  ],
});

export interface LabelProps
  extends React.ComponentProps<typeof LabelPrimitive> {}

export function Label({ className, ...props }: LabelProps) {
  return (
    <LabelPrimitive
      data-slot="label"
      className={LabelStyles({ className })}
      {...props}
    />
  );
}
