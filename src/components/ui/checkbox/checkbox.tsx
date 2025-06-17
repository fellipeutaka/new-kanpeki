"use client";

import { CheckIcon, MinusIcon } from "lucide-react";
import { Checkbox, composeRenderProps } from "react-aria-components";
import { CheckboxStyles } from "./styles";

export interface CheckboxProviderProps
  extends React.ComponentProps<typeof Checkbox> {}

export function CheckboxProvider({
  className,
  ...props
}: CheckboxProviderProps) {
  return (
    <Checkbox
      {...props}
      data-slot="checkbox-provider"
      className={composeRenderProps(className, (className) =>
        CheckboxStyles.Provider({ className })
      )}
    />
  );
}

export interface CheckboxRootProps extends React.ComponentProps<"div"> {}

export function CheckboxRoot({ className, ...props }: CheckboxRootProps) {
  return (
    <div
      {...props}
      data-slot="checkbox-root"
      className={CheckboxStyles.Root({ className })}
    />
  );
}

export interface CheckboxIndicatorProps extends React.ComponentProps<"svg"> {}

export function CheckboxIndicator({
  className,
  ...props
}: CheckboxIndicatorProps) {
  return (
    <>
      <MinusIcon
        {...props}
        data-slot="checkbox-indicator"
        className={CheckboxStyles.Indicator({
          className: [className, "group-indeterminate:block"],
        })}
      />

      <CheckIcon
        {...props}
        data-slot="checkbox-indicator"
        className={CheckboxStyles.Indicator({
          className: [className, "group-selected:block"],
        })}
      />
    </>
  );
}
