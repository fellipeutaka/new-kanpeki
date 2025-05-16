"use client";

import { ComboBox, Input, composeRenderProps } from "react-aria-components";
import { cn } from "~/lib/cva";
import { Button, type ButtonProps } from "./button";

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

export interface ComboboxTriggerProps extends ButtonProps {}

export function ComboboxTrigger({
  variant = "outline",
  ...props
}: ComboboxTriggerProps) {
  return <Button {...props} data-slot="combobox-trigger" variant={variant} />;
}

export interface ComboboxInputProps
  extends React.ComponentProps<typeof Input> {}

export function ComboboxInput({ className, ...props }: ComboboxInputProps) {
  return (
    <Input
      {...props}
      data-slot="combobox-input"
      className={composeRenderProps(className, (className) =>
        cn("size-full flex-1 bg-transparent outline-none", className)
      )}
    />
  );
}
