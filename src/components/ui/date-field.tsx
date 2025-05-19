"use client";

import { DateInput, DateSegment } from "react-aria-components";

export interface DateFieldInputProps
  extends Omit<React.ComponentProps<typeof DateInput>, "children"> {}

export function DateFieldInput({ className, ...props }: DateFieldInputProps) {
  return (
    <DateInput data-slot="date-field-input" className={className} {...props}>
      {(segment) => (
        <DateSegment
          data-slot="date-segment"
          className="rounded p-0.5 type-literal:px-0 type-literal:text-muted-foreground outline-none transition focus:bg-ring/50 data-placeholder:text-muted-foreground"
          segment={segment}
        />
      )}
    </DateInput>
  );
}
