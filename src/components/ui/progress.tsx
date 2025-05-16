"use client";

import { createContext, use } from "react";
import {
  ProgressBar,
  type ProgressBarRenderProps,
} from "react-aria-components";

import { cn } from "~/lib/cva";

const InternalProgressContext = createContext<ProgressBarRenderProps | null>(
  null
);

export interface ProgressProps
  extends React.ComponentProps<typeof ProgressBar> {}

export function Progress({ className, children, ...props }: ProgressProps) {
  return (
    <ProgressBar
      data-slot="progress"
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
        className
      )}
      {...props}
    >
      {(values) => (
        <InternalProgressContext value={values}>
          {typeof children === "function" ? children(values) : children}
        </InternalProgressContext>
      )}
    </ProgressBar>
  );
}

export interface ProgressIndicatorProps extends React.ComponentProps<"div"> {}

export function ProgressIndicator({
  className,
  ...props
}: ProgressIndicatorProps) {
  const ctx = use(InternalProgressContext);
  if (!ctx) {
    throw new Error(
      "ProgressIndicator must be used within a Progress component"
    );
  }
  const { percentage = 0 } = ctx;

  return (
    <div
      {...props}
      data-slot="progress-indicator"
      className={cn(
        "size-full flex-1 bg-primary transition-transform duration-700 will-change-transform",
        className
      )}
      style={{ transform: `translateX(-${100 - percentage}%)` }}
    />
  );
}
