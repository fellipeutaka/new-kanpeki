import type { VariantProps } from "cva";
import { cn, cva } from "~/lib/cva";

const alertVariants = cva({
  base: "relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",

  variants: {
    variant: {
      default: "bg-card text-card-foreground",
      destructive:
        "bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 [&>svg]:text-current",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface AlertRootProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof alertVariants> {}

export function AlertRoot({ className, variant, ...props }: AlertRootProps) {
  return (
    <div
      data-slot="alert-root"
      role="alert"
      className={alertVariants({ variant, className })}
      {...props}
    />
  );
}

export interface AlertTitleProps extends React.ComponentProps<"div"> {}

export function AlertTitle({ className, ...props }: AlertTitleProps) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      )}
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
      className={cn(
        "col-start-2 grid justify-items-start gap-1 text-muted-foreground text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  );
}
