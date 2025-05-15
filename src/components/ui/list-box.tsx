"use client";

import { CheckIcon } from "lucide-react";
import {
  ListBox,
  ListBoxItem,
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
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in",
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
    textValue ?? typeof children === "string" ? String(children) : undefined;

  return (
    <ListBoxItem
      data-slot="listbox-item"
      className={cn(
        "relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      textValue={_textValue}
      {...props}
    >
      {composeRenderProps(children, (children, values) => (
        <>
          <span
            className={cn(
              "absolute right-2 flex size-3.5 items-center justify-center transition-[opacity,visibility] transition-discrete",
              values.isSelected
                ? "visible opacity-100"
                : "invisible opacity-100"
            )}
          >
            <CheckIcon className="size-4" />
          </span>
          {children}
        </>
      ))}
    </ListBoxItem>
  );
}
