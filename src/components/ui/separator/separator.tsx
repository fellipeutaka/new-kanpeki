"use client";

import { Separator as RACSeparator } from "react-aria-components";
import { SeparatorStyles } from "./styles";

export interface SeparatorProps
  extends React.ComponentProps<typeof RACSeparator> {}

export function Separator({ className, ...props }: SeparatorProps) {
  return (
    <RACSeparator
      data-slot="separator"
      className={SeparatorStyles({ className })}
      {...props}
    />
  );
}
