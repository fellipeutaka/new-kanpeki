import type { VariantProps } from "cva";
import { BadgeStyles } from "./styles";

export interface BadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof BadgeStyles> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={BadgeStyles({ variant, className })}
      {...props}
    />
  );
}
