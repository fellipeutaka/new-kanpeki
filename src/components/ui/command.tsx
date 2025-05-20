"use client";

import { SearchIcon } from "lucide-react";

import {
  Input,
  Keyboard,
  Menu,
  MenuItem,
  MenuSection,
  SearchField,
  Separator,
} from "react-aria-components";
import { cn } from "~/lib/cva";

export interface CommandInputProps extends React.ComponentProps<typeof Input> {}

export function CommandInput({ className, ...props }: CommandInputProps) {
  return (
    <SearchField
      data-slot="command-input-wrapper"
      className="flex h-9 items-center gap-2 border-b px-3"
    >
      <SearchIcon className="size-4 shrink-0 opacity-50" />
      <Input
        data-slot="command-input"
        className={cn(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </SearchField>
  );
}

export interface CommandListProps extends React.ComponentProps<typeof Menu> {}

export function CommandList({ className, ...props }: CommandListProps) {
  return (
    <Menu
      data-slot="command-list"
      className={cn(
        "max-h-[300px] scroll-py-1 overflow-y-auto overflow-x-hidden",
        className
      )}
      {...props}
    />
  );
}

export interface CommandEmptyProps extends React.ComponentProps<"div"> {}

export function CommandEmpty({ className, ...props }: CommandEmptyProps) {
  return (
    <div
      data-slot="command-empty"
      className={cn("py-6 text-center text-sm", className)}
      {...props}
    />
  );
}

export interface CommandGroupProps<T extends object>
  extends React.ComponentProps<typeof MenuSection<T>> {}

export function CommandGroup<T extends object>({
  className,
  ...props
}: CommandGroupProps<T>) {
  return (
    <MenuSection
      data-slot="command-group"
      className={cn(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:text-xs",
        className
      )}
      {...props}
    />
  );
}

export interface CommandSeparatorProps
  extends React.ComponentProps<typeof Separator> {}

export function CommandSeparator({
  className,
  ...props
}: CommandSeparatorProps) {
  return (
    <Separator
      data-slot="command-separator"
      className={cn("-mx-1 h-px bg-border", className)}
      {...props}
    />
  );
}

export interface CommandItemProps<T extends object>
  extends React.ComponentProps<typeof MenuItem<T>> {}

export function CommandItem<T extends object>({
  className,
  ...props
}: CommandItemProps<T>) {
  return (
    <MenuItem
      data-slot="command-item"
      className={cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  );
}

export interface CommandShortcutProps
  extends React.ComponentProps<typeof Keyboard> {}

export function CommandShortcut({ className, ...props }: CommandShortcutProps) {
  return (
    <Keyboard
      data-slot="command-shortcut"
      className={cn(
        "ml-auto text-muted-foreground text-xs tracking-widest",
        className
      )}
      {...props}
    />
  );
}
