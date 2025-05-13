"use client";

import { ChevronDownIcon } from "lucide-react";
import {
  Button,
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  composeRenderProps,
} from "react-aria-components";

import { cn } from "~/lib/cva";

export interface AccordionRootProps
  extends React.ComponentProps<typeof DisclosureGroup> {}

export function AccordionRoot({ ...props }: AccordionRootProps) {
  return <DisclosureGroup data-slot="accordion" {...props} />;
}

export interface AccordionItemProps
  extends React.ComponentProps<typeof Disclosure> {}

export function AccordionItem({ className, ...props }: AccordionItemProps) {
  return (
    <Disclosure
      data-slot="accordion-item"
      className={cn("group border-b last:border-b-0", className)}
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
      className={cn(
        "flex w-full flex-1 items-start justify-between gap-4 rounded-md py-4 text-left font-medium text-sm outline-none transition-all hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      {composeRenderProps(children, (children) => (
        <>
          {children}
          <ChevronDownIcon className="pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200 group-expanded:rotate-180" />
        </>
      ))}
    </Button>
  );
}

export interface AccordionContentProps
  extends React.ComponentProps<typeof DisclosurePanel> {}

export function AccordionContent({
  className,
  children,
  ...props
}: AccordionContentProps) {
  return (
    <DisclosurePanel
      data-slot="accordion-content"
      className="overflow-hidden text-sm transition-[height,content_visibility] transition-discrete [interpolate-size:allow-keywords] aria-hidden:h-0"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </DisclosurePanel>
  );
}
