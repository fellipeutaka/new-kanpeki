"use client";

import { ChevronDownIcon } from "lucide-react";
import {
  Button,
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  composeRenderProps,
} from "react-aria-components";
import { AccordionStyles } from "./styles";

export interface AccordionRootProps
  extends React.ComponentProps<typeof DisclosureGroup> {}

export function AccordionRoot(props: AccordionRootProps) {
  return <DisclosureGroup data-slot="accordion-root" {...props} />;
}

export interface AccordionItemProps
  extends React.ComponentProps<typeof Disclosure> {}

export function AccordionItem({ className, ...props }: AccordionItemProps) {
  return (
    <Disclosure
      data-slot="accordion-item"
      className={composeRenderProps(className, (className) =>
        AccordionStyles.Item({ className })
      )}
      {...props}
    />
  );
}

export interface AccordionTriggerProps
  extends Omit<React.ComponentProps<typeof Button>, "slot"> {}

export function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionTriggerProps) {
  return (
    <Button
      data-slot="accordion-trigger"
      slot="trigger"
      className={composeRenderProps(className, (className) =>
        AccordionStyles.Trigger({ className })
      )}
      {...props}
    >
      {composeRenderProps(children, (children) => (
        <>
          {children}
          <ChevronDownIcon className={AccordionStyles.Icon()} />
        </>
      ))}
    </Button>
  );
}

export interface AccordionContentProps
  extends React.ComponentProps<typeof DisclosurePanel> {}

export function AccordionContent({
  className,
  ...props
}: AccordionContentProps) {
  return (
    <DisclosurePanel
      data-slot="accordion-content"
      className={AccordionStyles.Content({
        className,
      })}
      {...props}
    />
  );
}
