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
import { ListboxStyles } from "./styles";

export interface ListboxRootProps<T extends object>
  extends React.ComponentProps<typeof ListBox<T>> {}

export function ListboxRoot<T extends object>({
  className,
  ...props
}: ListboxRootProps<T>) {
  return (
    <ListBox
      data-slot="listbox-root"
      className={composeRenderProps(className, (className) =>
        ListboxStyles.Root({ className })
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
      className={composeRenderProps(className, (className) =>
        ListboxStyles.Item({ className })
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
      className={ListboxStyles.Empty({ className })}
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
      className={ListboxStyles.Label({ className })}
      {...props}
    />
  );
}
