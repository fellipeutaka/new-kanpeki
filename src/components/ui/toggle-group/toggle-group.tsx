"use client";

import type { VariantProps } from "cva";
import { createContext, useContext } from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
  composeRenderProps,
} from "react-aria-components";
import { ToggleStyles } from "../toggle/styles";
import { ToggleGroupStyles } from "./styles";

const ToggleGroupContext = createContext<VariantProps<typeof ToggleStyles>>({
  size: "default",
  variant: "default",
});

export type ToggleGroupRootProps = React.ComponentProps<
  typeof ToggleButtonGroup
> &
  VariantProps<typeof ToggleStyles>;

export function ToggleGroupRoot({
  className,
  variant,
  size,
  ...props
}: ToggleGroupRootProps) {
  return (
    <ToggleGroupContext.Provider value={{ variant, size }}>
      <ToggleButtonGroup
        data-slot="toggle-group-root"
        data-variant={variant}
        data-size={size}
        className={composeRenderProps(className, (className) =>
          ToggleGroupStyles.Root({ className })
        )}
        {...props}
      />
    </ToggleGroupContext.Provider>
  );
}

export interface ToggleGroupItemProps
  extends React.ComponentProps<typeof ToggleButton>,
    VariantProps<typeof ToggleStyles> {}

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
        ToggleStyles({
          variant: _variant,
          size: _size,
          className: ToggleGroupStyles.Item({ className }),
        })
      )}
      {...props}
    />
  );
}
