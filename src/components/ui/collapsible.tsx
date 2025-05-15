"use client";

import {
  Button,
  Disclosure,
  DisclosurePanel,
  composeRenderProps,
} from "react-aria-components";
import { cn } from "~/lib/cva";

export interface CollapsibleProps
  extends React.ComponentProps<typeof Disclosure> {}

export function Collapsible({ ...props }: CollapsibleProps) {
  return <Disclosure data-slot="collapsible-root" {...props} />;
}

export interface CollapsibleTriggerProps
  extends Omit<React.ComponentProps<typeof Button>, "slot"> {}

export function CollapsibleTrigger({ ...props }: CollapsibleTriggerProps) {
  return <Button data-slot="collapsible-trigger" slot="trigger" {...props} />;
}

export interface CollapsibleContentProps
  extends React.ComponentProps<typeof DisclosurePanel> {}

export function CollapsibleContent({
  className,
  ...props
}: CollapsibleContentProps) {
  return (
    <DisclosurePanel
      data-slot="collapsible-content"
      className={composeRenderProps(className, (className) =>
        cn(
          "overflow-hidden text-sm transition-[height,content_visibility] transition-discrete [interpolate-size:allow-keywords] aria-hidden:h-0",
          className
        )
      )}
      {...props}
    />
  );
}
