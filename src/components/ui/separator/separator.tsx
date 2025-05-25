"use client";

import { Separator as SeparatorPrimitive } from "react-aria-components";
import { SeparatorStyles } from "./styles";

export interface SeparatorProps
  extends React.ComponentProps<typeof SeparatorPrimitive> {}

export function Separator({ className, ...props }: SeparatorProps) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      className={SeparatorStyles({ className })}
      {...props}
    />
  );
}
