"use client";

import { Label as LabelPrimitive } from "react-aria-components";

import { cn } from "~/lib/cva";

export interface LabelProps
  extends React.ComponentProps<typeof LabelPrimitive> {}

export function Label({ className, ...props }: LabelProps) {
  return (
    <LabelPrimitive
      data-slot="label"
      className={cn(
        "flex select-none items-center gap-2 font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
        className
      )}
      {...props}
    />
  );
}
