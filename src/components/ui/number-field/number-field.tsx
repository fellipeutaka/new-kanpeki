"use client";

import {
  NumberField as RACNumberField,
  composeRenderProps,
} from "react-aria-components";
import { NumberFieldStyles } from "./styles";

export interface NumberFieldProps
  extends React.ComponentProps<typeof RACNumberField> {}

export function NumberField({ className, ...props }: NumberFieldProps) {
  return (
    <RACNumberField
      data-slot="number-field"
      className={composeRenderProps(className, (className) =>
        NumberFieldStyles({ className })
      )}
      {...props}
    />
  );
}
