"use client";

import type { VariantProps } from "cva";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import {
  Button,
  Header,
  Keyboard,
  Menu,
  MenuItem,
  MenuSection,
  MenuTrigger,
  Separator,
  SubmenuTrigger,
  composeRenderProps,
} from "react-aria-components";

import { cn, cva } from "~/lib/cva";

const DropdownMenuStyles = {
  Item: cva({
    base: [
      "group relative flex select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm",
      "outline-hidden focus:bg-accent focus:text-accent-foreground",
      "disabled:pointer-events-none disabled:opacity-50",
      "[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
    ],
    variants: {
      variant: {
        destructive: [
          "*:[svg]:!text-destructive text-destructive focus:bg-destructive/10",
          "focus:text-destructive dark:focus:bg-destructive/20",
        ],
      },
      inset: {
        true: "pl-8",
      },
    },
  }),
};

export interface DropdownMenuRootProps
  extends React.ComponentProps<typeof MenuTrigger> {}

export function DropdownMenuRoot(props: DropdownMenuRootProps) {
  return <MenuTrigger data-slot="dropdown-menu" {...props} />;
}

export interface DropdownMenuTriggerProps
  extends React.ComponentProps<typeof Button> {}

export function DropdownMenuTrigger(props: DropdownMenuTriggerProps) {
  return <Button data-slot="dropdown-menu-trigger" {...props} />;
}

export interface DropdownMenuContentProps<T extends object>
  extends React.ComponentProps<typeof Menu<T>> {}

export function DropdownMenuContent<T extends object>({
  className,
  ...props
}: DropdownMenuContentProps<T>) {
  return (
    <Menu
      data-slot="dropdown-menu-content"
      className={cn(
        "z-50 min-w-32 overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        className
      )}
      {...props}
    />
  );
}

export interface DropdownMenuGroupProps
  extends React.ComponentProps<typeof MenuSection> {}

export function DropdownMenuGroup(props: DropdownMenuGroupProps) {
  return <MenuSection data-slot="dropdown-menu-group" {...props} />;
}

export interface DropdownMenuItemProps
  extends React.ComponentProps<typeof MenuItem>,
    VariantProps<typeof DropdownMenuStyles.Item> {}

export function DropdownMenuItem({
  className,
  inset,
  variant,
  children,
  ...props
}: DropdownMenuItemProps) {
  return (
    <MenuItem
      data-slot="dropdown-menu-item"
      data-inset={inset}
      className={composeRenderProps(className, (className) =>
        DropdownMenuStyles.Item({ className, variant, inset })
      )}
      {...props}
    >
      {composeRenderProps(children, (children, values) => (
        <>
          <span
            data-slot="dropdown-menu-item-indicator"
            className="flex size-3.5 items-center justify-center empty:hidden"
          >
            {values.selectionMode === "single" && (
              <CircleIcon
                className="size-2 fill-current text-current opacity-0 transition-opacity group-selected:opacity-100"
                data-slot="indicator"
              />
            )}

            {values.selectionMode === "multiple" && (
              <CheckIcon
                className="size-4 text-current opacity-0 transition-opacity group-selected:opacity-100"
                data-slot="checked-icon"
              />
            )}
          </span>

          {children}
          {values.hasSubmenu && (
            <ChevronRightIcon data-slot="chevron" className="ml-auto size-4" />
          )}
        </>
      ))}
    </MenuItem>
  );
}

export interface DropdownMenuLabelProps
  extends React.ComponentProps<typeof Header> {
  inset?: boolean;
}

export function DropdownMenuLabel({
  className,
  inset,
  ...props
}: DropdownMenuLabelProps) {
  return (
    <Header
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 font-medium text-sm data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  );
}

export interface DropdownMenuSeparatorProps
  extends React.ComponentProps<typeof Separator> {}

export function DropdownMenuSeparator({
  className,
  ...props
}: DropdownMenuSeparatorProps) {
  return (
    <Separator
      data-slot="dropdown-menu-separator"
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  );
}

export interface DropdownMenuShortcutProps
  extends React.ComponentProps<typeof Keyboard> {}

export function DropdownMenuShortcut({
  className,
  ...props
}: DropdownMenuShortcutProps) {
  return (
    <Keyboard
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "ml-auto text-muted-foreground text-xs tracking-widest",
        className
      )}
      {...props}
    />
  );
}

export interface DropdownMenuSubProps
  extends React.ComponentProps<typeof SubmenuTrigger> {}

export function DropdownMenuSub(props: DropdownMenuSubProps) {
  return <SubmenuTrigger data-slot="dropdown-menu-sub" {...props} />;
}
