"use client";

import type { VariantProps } from "cva";
import { ChevronDownIcon } from "lucide-react";
import {
  Button,
  SelectValue as RACSelectValue,
  Select,
  composeRenderProps,
} from "react-aria-components";

import { cn } from "~/lib/cva";
import { SelectStyles } from "./styles";

export interface SelectRootProps extends React.ComponentProps<typeof Select> {}

export function SelectRoot({ className, ...props }: SelectRootProps) {
  return (
    <Select
      data-slot="select"
      className={composeRenderProps(className, (className) =>
        cn("group grid gap-3", className)
      )}
      {...props}
    />
  );
}

export interface SelectTriggerProps
  extends React.ComponentProps<typeof Button>,
    VariantProps<typeof SelectStyles.Trigger> {}

export function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: SelectTriggerProps) {
  return (
    <Button
      data-slot="select-trigger"
      className={composeRenderProps(className, (className) =>
        SelectStyles.Trigger({ className })
      )}
      {...props}
    >
      {composeRenderProps(children, (children) => (
        <>
          {children}
          <span data-slot="select-icon" aria-hidden="true">
            <ChevronDownIcon className="size-4 transition group-pressed:rotate-180" />
          </span>
        </>
      ))}
    </Button>
  );
}

// export interface SelectGroupProps
//   extends React.ComponentProps<typeof SelectPrimitive.Group> {}

// export function SelectGroup({ ...props }: SelectGroupProps) {
//   return <SelectPrimitive.Group data-slot="select-group" {...props} />;
// }

export interface SelectValueProps
  extends React.ComponentProps<typeof RACSelectValue> {}

export function SelectValue({ className, ...props }: SelectValueProps) {
  return (
    <RACSelectValue
      data-slot="select-value"
      className={composeRenderProps(className, (className) =>
        SelectStyles.Value({ className })
      )}
      {...props}
    />
  );
}

// export interface SelectLabelProps
//   extends React.ComponentProps<typeof SelectPrimitive.Label> {}

// export function SelectLabel({ className, ...props }: SelectLabelProps) {
//   return (
//     <SelectPrimitive.Label
//       data-slot="select-label"
//       className={cn("px-2 py-1.5 text-muted-foreground text-xs", className)}
//       {...props}
//     />
//   );
// }

// export interface SelectSeparatorProps
//   extends React.ComponentProps<typeof SelectPrimitive.Separator> {}

// export function SelectSeparator({ className, ...props }: SelectSeparatorProps) {
//   return (
//     <SelectPrimitive.Separator
//       data-slot="select-separator"
//       className={cn("-mx-1 pointer-events-none my-1 h-px bg-border", className)}
//       {...props}
//     />
//   );
// }
