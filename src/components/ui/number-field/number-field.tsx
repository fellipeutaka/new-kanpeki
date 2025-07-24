"use client";

import {
  NumberField as NumberFieldPrimitive,
  composeRenderProps,
} from "react-aria-components";
import { NumberFieldStyles } from "./styles";

export interface NumberFieldProps
  extends React.ComponentProps<typeof NumberFieldPrimitive> {}

export function NumberField({ className, ...props }: NumberFieldProps) {
  return (
    <NumberFieldPrimitive
      data-slot="number-field"
      className={composeRenderProps(className, (className) =>
        NumberFieldStyles({ className })
      )}
      {...props}
    />
  );
}
