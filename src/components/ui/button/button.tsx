"use client";

import type { VariantProps } from "cva";
import {
  Button as ButtonPrimitive,
  composeRenderProps,
} from "react-aria-components";
import { ButtonStyles } from "./styles";

export interface ButtonProps
  extends React.ComponentProps<typeof ButtonPrimitive>,
    VariantProps<typeof ButtonStyles> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={composeRenderProps(className, (className) =>
        ButtonStyles({ variant, size, className })
      )}
      {...props}
    />
  );
}

export { ButtonPrimitive };
