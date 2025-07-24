"use client";

import type { VariantProps } from "cva";
import { Link, composeRenderProps } from "react-aria-components";
import { ButtonStyles } from "../button";

export interface LinkButtonProps
  extends React.ComponentProps<typeof Link>,
    VariantProps<typeof ButtonStyles> {}

export function LinkButton({
  className,
  variant,
  size,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      data-slot="link"
      className={composeRenderProps(className, (className) =>
        ButtonStyles({ variant, size, className })
      )}
      {...props}
    />
  );
}
