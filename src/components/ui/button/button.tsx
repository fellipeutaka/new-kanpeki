"use client";

import type { VariantProps } from "cva";
import { Button as RACButton, composeRenderProps } from "react-aria-components";
import { ButtonStyles } from "./styles";

export interface ButtonProps
  extends React.ComponentProps<typeof RACButton>,
    VariantProps<typeof ButtonStyles> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <RACButton
      data-slot="button"
      className={composeRenderProps(className, (className) =>
        ButtonStyles({ variant, size, className })
      )}
      {...props}
    />
  );
}

export { RACButton };
