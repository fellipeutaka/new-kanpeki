"use client";

import { createContext, use } from "react";
import {
  ProgressBar,
  type ProgressBarRenderProps,
  composeRenderProps,
} from "react-aria-components";
import { ProgressStyles } from "./styles";

const InternalProgressContext = createContext<ProgressBarRenderProps | null>(
  null
);

export interface ProgressRootProps
  extends React.ComponentProps<typeof ProgressBar> {}

export function ProgressRoot({
  className,
  children,
  ...props
}: ProgressRootProps) {
  return (
    <ProgressBar
      data-slot="progress-root"
      className={composeRenderProps(className, (className) =>
        ProgressStyles.Root({ className })
      )}
      {...props}
    >
      {composeRenderProps(children, (children, values) => (
        <InternalProgressContext value={values}>
          {children}
        </InternalProgressContext>
      ))}
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
      className={ProgressStyles.Indicator({ className })}
      style={{ transform: `translateX(-${100 - percentage}%)` }}
    />
  );
}
