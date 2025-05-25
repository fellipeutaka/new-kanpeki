import type { VariantProps } from "cva";
import { Keyboard as KeyboardPrimitive } from "react-aria-components";
import { KeyboardStyles } from "./styles";

export interface KeyboardProps
  extends React.ComponentProps<typeof KeyboardPrimitive>,
    VariantProps<typeof KeyboardStyles> {}

export function Keyboard({ className, variant, ...props }: KeyboardProps) {
  return (
    <KeyboardPrimitive
      {...props}
      data-slot="keyboard"
      className={KeyboardStyles({ className, variant })}
    />
  );
}
