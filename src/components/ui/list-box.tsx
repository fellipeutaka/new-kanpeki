"use client";

import { CheckIcon } from "lucide-react";
import {
  Header,
  ListBox,
  ListBoxItem,
  ListBoxSection,
  composeRenderProps,
} from "react-aria-components";
import { cn } from "~/lib/cva";

export interface ListboxRootProps<T extends object>
  extends React.ComponentProps<typeof ListBox<T>> {}

export function ListboxRoot<T extends object>({
  className,
  ...props
}: ListboxRootProps<T>) {
  return (
    <ListBox
      data-slot="listbox-root"
      className={cn(
        "relative z-50 min-w-32 overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        className
      )}
      {...props}
    />
  );
}

export interface ListboxItemProps
  extends React.ComponentProps<typeof ListBoxItem> {}

export function ListboxItem({
  className,
  children,
  textValue,
  ...props
}: ListboxItemProps) {
  const _textValue =
    (textValue ?? typeof children === "string") ? String(children) : undefined;

  return (
    <ListBoxItem
      data-slot="listbox-item"
      className={cn(
        "relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden",
        "focus:bg-accent focus:text-accent-foreground",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
        "*:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      textValue={_textValue}
      {...props}
    >
      {composeRenderProps(children, (children, values) => (
        <>
          {values.isSelected && (
            <span
              className={cn(
                "absolute right-2 flex size-3.5 items-center justify-center"
              )}
            >
              <CheckIcon className="size-4" />
            </span>
          )}

          {children}
        </>
      ))}
    </ListBoxItem>
  );
}

export interface ListboxEmptyProps extends React.ComponentProps<"div"> {}

export function ListboxEmpty({ className, ...props }: ListboxEmptyProps) {
  return (
    <div
      data-slot="listbox-empty"
      className={cn("pointer-events-none py-6 text-center text-sm", className)}
      {...props}
    />
  );
}

export interface ListboxGroupProps<T extends object>
  extends React.ComponentProps<typeof ListBoxSection<T>> {}

export function ListboxGroup<T extends object>(props: ListboxGroupProps<T>) {
  return <ListBoxSection data-slot="listbox-group" {...props} />;
}

export interface ListboxLabelProps
  extends React.ComponentProps<typeof Header> {}

export function ListboxLabel({ className, ...props }: ListboxLabelProps) {
  return (
    <Header
      data-slot="listbox-label"
      className={cn(
        "px-2 py-1.5 font-medium text-muted-foreground text-xs",
        className
      )}
      {...props}
    />
  );
}
