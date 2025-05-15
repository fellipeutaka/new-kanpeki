"use client";

import type { VariantProps } from "cva";
import { ChevronDownIcon } from "lucide-react";
import {
  Button,
  Select,
  SelectValue as SelectValuePrimitive,
  composeRenderProps,
} from "react-aria-components";

import { cva } from "~/lib/cva";

const SelectStyles = {
  Trigger: cva({
    base: [
      "group flex w-fit items-center justify-between gap-2 whitespace-nowrap rounded-md border border-input bg-transparent",
      "px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow]",
      "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
      "dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:hover:bg-input/50",
      "[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
    ],
    variants: {
      size: {
        default: "h-9",
        sm: "h-8",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }),
  Value: cva({
    base: [
      "line-clamp-1 flex items-center gap-2 data-placeholder:text-muted-foreground",
    ],
  }),
};

export interface SelectRootProps extends React.ComponentProps<typeof Select> {}

export function SelectRoot({ ...props }: SelectRootProps) {
  return <Select data-slot="select" {...props} />;
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
            <ChevronDownIcon className="size-4 opacity-50 transition group-pressed:rotate-180" />
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
  extends React.ComponentProps<typeof SelectValuePrimitive> {}

export function SelectValue({ className, ...props }: SelectValueProps) {
  return (
    <SelectValuePrimitive
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
