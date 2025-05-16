"use client";

import { CircleIcon } from "lucide-react";
import {
  Radio,
  RadioGroup as RadioGroupPrimitive,
} from "react-aria-components";

import { cn } from "~/lib/cva";
import { LabelStyles } from "./label";

export interface RadioGroupProps
  extends React.ComponentProps<typeof RadioGroupPrimitive> {}

export function RadioGroup({ className, ...props }: RadioGroupProps) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  );
}

export interface RadioGroupItemProps
  extends React.ComponentProps<typeof Radio> {}

export function RadioGroupItem({ className, ...props }: RadioGroupItemProps) {
  return (
    <Radio
      data-slot="radio-group-item"
      className={LabelStyles({
        className: ["group flex w-fit items-center gap-3", className],
      })}
      {...props}
    />
  );
}

export interface RadioGroupIndicatorProps
  extends Omit<React.ComponentProps<"span">, "children"> {}

export function RadioGroupIndicator({
  className,
  ...props
}: RadioGroupIndicatorProps) {
  return (
    <span
      {...props}
      aria-hidden="true"
      data-slot="radio-group-indicator"
      className={cn(
        "grid aspect-square size-4 shrink-0 place-content-center rounded-full border border-input text-primary",
        "shadow-xs outline-none transition",
        "group-focus-visible:border-ring group-focus-visible:ring-[3px] group-focus-visible:ring-ring/50",
        "group-disabled:cursor-not-allowed group-disabled:opacity-50",
        "group-aria-invalid:border-destructive group-aria-invalid:ring-destructive/20",
        "group-dark:bg-input/30 group-dark:aria-invalid:ring-destructive/40",
        className
      )}
    >
      <CircleIcon className="size-2 fill-primary opacity-0 transition group-selected:opacity-100" />
    </span>
  );
}
