"use client";

import type { VariantProps } from "cva";
import { Link as RACLink, composeRenderProps } from "react-aria-components";
import { LinkStyles } from "./styles";

export interface LinkProps
  extends React.ComponentProps<typeof RACLink>,
    VariantProps<typeof LinkStyles> {}

export function Link({ className, variant, underline, ...props }: LinkProps) {
  return (
    <RACLink
      data-slot="link"
      className={composeRenderProps(className, (className) =>
        LinkStyles({ className, variant, underline })
      )}
      {...props}
    />
  );
}
