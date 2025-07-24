import type { VariantProps } from "cva";
import { Keyboard as RACKeyboard } from "react-aria-components";
import { KeyboardStyles } from "./styles";

export interface KeyboardProps
  extends React.ComponentProps<typeof RACKeyboard>,
    VariantProps<typeof KeyboardStyles> {}

export function Keyboard({ className, variant, ...props }: KeyboardProps) {
  return (
    <RACKeyboard
      {...props}
      data-slot="keyboard"
      className={KeyboardStyles({ className, variant })}
    />
  );
}
