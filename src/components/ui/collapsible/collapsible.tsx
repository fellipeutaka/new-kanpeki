"use client";

import {
  Button,
  Disclosure,
  DisclosurePanel,
  composeRenderProps,
} from "react-aria-components";
import { CollapsibleStyles } from "./styles";

export interface CollapsibleRootProps
  extends React.ComponentProps<typeof Disclosure> {}

export function CollapsibleRoot({ ...props }: CollapsibleRootProps) {
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
        CollapsibleStyles.Content({ className })
      )}
      {...props}
    />
  );
}
