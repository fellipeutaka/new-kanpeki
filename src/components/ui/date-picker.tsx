"use client";

import { ChevronDownIcon } from "lucide-react";
import {
  DatePicker,
  type DateValue,
  composeRenderProps,
} from "react-aria-components";
import { cn } from "~/lib/cva";

export interface DatePickerRootProps<T extends DateValue>
  extends React.ComponentProps<typeof DatePicker<T>> {}

export function DatePickerRoot<T extends DateValue>({
  className,
  ...props
}: DatePickerRootProps<T>) {
  return (
    <DatePicker
      data-slot="date-picker"
      className={composeRenderProps(className, (className) =>
        cn("group", className)
      )}
      {...props}
    />
  );
}

export interface DatePickerIconProps
  extends Omit<React.ComponentProps<"span">, "children"> {}

export function DatePickerIcon({ className, ...props }: DatePickerIconProps) {
  return (
    <span
      data-slot="date-picker-icon"
      aria-hidden="true"
      className={cn("ml-auto", className)}
      {...props}
    >
      <ChevronDownIcon className="size-4 text-muted-foreground transition group-open:rotate-180" />
    </span>
  );
}
