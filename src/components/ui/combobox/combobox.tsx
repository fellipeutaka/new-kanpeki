"use client";

import { ChevronsUpDownIcon } from "lucide-react";
import { ComboBox, Input, composeRenderProps } from "react-aria-components";
import { Button } from "../button/button";
import { ComboboxStyles } from "./styles";

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
        ComboboxStyles.Root({ className })
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
      className={ComboboxStyles.Trigger({ className })}
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
        ComboboxStyles.Input({ className })
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
        className={ComboboxStyles.Icon({ className })}
      />
    </Button>
  );
}
