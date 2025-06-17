import type { VariantProps } from "cva";
import { AlertStyles } from "./styles";

export interface AlertRootProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof AlertStyles.Root> {}

export function AlertRoot({ className, variant, ...props }: AlertRootProps) {
  return (
    <div
      data-slot="alert-root"
      role="alert"
      className={AlertStyles.Root({ variant, className })}
      {...props}
    />
  );
}

export interface AlertTitleProps extends React.ComponentProps<"div"> {}

export function AlertTitle({ className, ...props }: AlertTitleProps) {
  return (
    <div
      data-slot="alert-title"
      className={AlertStyles.Title({ className })}
      {...props}
    />
  );
}

export interface AlertDescriptionProps extends React.ComponentProps<"div"> {}

export function AlertDescription({
  className,
  ...props
}: AlertDescriptionProps) {
  return (
    <div
      data-slot="alert-description"
      className={AlertStyles.Description({ className })}
      {...props}
    />
  );
}
