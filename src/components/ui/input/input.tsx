"use client";

import {
  Input as InputPrimitive,
  composeRenderProps,
} from "react-aria-components";
import { InputStyles } from "./styles";

export interface InputProps
  extends React.ComponentProps<typeof InputPrimitive> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <InputPrimitive
      data-slot="input"
      className={composeRenderProps(className, (className) =>
        InputStyles({ className })
      )}
      {...props}
    />
  );
}
