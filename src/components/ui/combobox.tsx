"use client";

import { ChevronsUpDownIcon } from "lucide-react";
import { ComboBox, Input, composeRenderProps } from "react-aria-components";
import { cn } from "~/lib/cva";
import { Button } from "./button";

export interface ComboboxRootProps<T extends object>
  extends React.ComponentProps<typeof ComboBox<T>> {}

export function ComboboxRoot<T extends object>({
  className,
  ...props
}: ComboboxRootProps<T>) {
  return (
    <ComboBox
      {...props}
      data-slot="combobox-root"
      className={composeRenderProps(className, (className) =>
        cn("[&_[data-slot=combobox-trigger]]:w-full", className)
      )}
    />
  );
}

export interface ComboboxTriggerProps extends React.ComponentProps<"div"> {}

export function ComboboxTrigger({ className, ...props }: ComboboxTriggerProps) {
  return (
    <div
      {...props}
      data-slot="combobox-trigger"
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm outline-none",
        "transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "pending:opacity-50 disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        "*:first:pl-4 *:last:pr-4",
        className
      )}
    />
  );
}

export interface ComboboxInputProps
  extends React.ComponentProps<typeof Input> {}

export function ComboboxInput({ className, ...props }: ComboboxInputProps) {
  return (
    <Input
      {...props}
      data-slot="combobox-input"
      className={composeRenderProps(className, (className) =>
        cn("size-full flex-1 bg-transparent py-2 outline-none", className)
      )}
    />
  );
}

export interface ComboboxIcon extends React.ComponentProps<"svg"> {}

export function ComboboxIcon({ className, ...props }: ComboboxIcon) {
  return (
    <Button variant="unstyled">
      <ChevronsUpDownIcon
        {...props}
        className={cn("text-muted-foreground", className)}
      />
    </Button>
  );
}
