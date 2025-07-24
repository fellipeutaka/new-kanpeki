"use client";

import { Input as RACInput, composeRenderProps } from "react-aria-components";
import { InputStyles } from "./styles";

export interface InputProps extends React.ComponentProps<typeof RACInput> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <RACInput
      data-slot="input"
      className={composeRenderProps(className, (className) =>
        InputStyles({ className })
      )}
      {...props}
    />
  );
}
