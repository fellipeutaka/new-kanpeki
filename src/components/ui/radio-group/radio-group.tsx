"use client";

import { CircleIcon } from "lucide-react";
import {
  RadioGroup as RACRadioGroup,
  Radio,
  composeRenderProps,
} from "react-aria-components";
import { RadioGroupStyles } from "./styles";

export interface RadioGroupRootProps
  extends React.ComponentProps<typeof RACRadioGroup> {}

export function RadioGroupRoot({ className, ...props }: RadioGroupRootProps) {
  return (
    <RACRadioGroup
      data-slot="radio-group-root"
      className={composeRenderProps(className, (className) =>
        RadioGroupStyles.Root({ className })
      )}
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
      className={composeRenderProps(className, (className) =>
        RadioGroupStyles.Item({ className })
      )}
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
      className={RadioGroupStyles.Indicator({ className })}
    >
      <CircleIcon className="size-2 fill-primary opacity-0 transition group-selected:opacity-100" />
    </span>
  );
}
