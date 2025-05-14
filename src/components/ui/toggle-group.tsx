"use client";

import type { VariantProps } from "cva";
import { createContext, useContext } from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
  composeRenderProps,
} from "react-aria-components";
import { toggleVariants } from "~/components/ui/toggle";
import { cn } from "~/lib/cva";

const ToggleGroupContext = createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

export type ToggleGroupProps = React.ComponentProps<typeof ToggleButtonGroup> &
  VariantProps<typeof toggleVariants>;

export function ToggleGroup({
  className,
  variant,
  size,
  ...props
}: ToggleGroupProps) {
  return (
    <ToggleGroupContext.Provider value={{ variant, size }}>
      <ToggleButtonGroup
        data-slot="toggle-group"
        data-variant={variant}
        data-size={size}
        className={composeRenderProps(className, (className) =>
          cn(
            "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
            className
          )
        )}
        {...props}
      />
    </ToggleGroupContext.Provider>
  );
}

export interface ToggleGroupItemProps
  extends React.ComponentProps<typeof ToggleButton>,
    VariantProps<typeof toggleVariants> {}

export function ToggleGroupItem({
  className,
  variant,
  size,
  ...props
}: ToggleGroupItemProps) {
  const context = useContext(ToggleGroupContext);
  const _variant = context.variant ?? variant;
  const _size = context.size ?? size;

  return (
    <ToggleButton
      data-slot="toggle-group-item"
      data-variant={_variant}
      data-size={_size}
      className={composeRenderProps(className, (className) =>
        toggleVariants({
          variant: _variant,
          size: _size,
          className: [
            "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
            className,
          ],
        })
      )}
      {...props}
    />
  );
}
