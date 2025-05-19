"use client";

import { XIcon } from "lucide-react";
import {
  Button,
  Input,
  SearchField,
  composeRenderProps,
} from "react-aria-components";
import { cva } from "~/lib/cva";

export const SearchFieldStyles = {
  Root: cva({
    base: [
      "group flex h-9 items-center gap-2 border-b px-3",
      "[&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 [&_svg]:opacity-50",
    ],
  }),
  Input: cva({
    base: [
      "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden",
      "placeholder:text-muted-foreground",
      "disabled:cursor-not-allowed disabled:opacity-50",

      // Hide default clear button
      "[&::-webkit-search-cancel-button]:appearance-none",
      "[&::-webkit-search-decoration]:appearance-none",
    ],
  }),
  Close: cva({
    base: [
      "group-empty:pointer-events-none group-empty:opacity-0",
      "opacity-70 ring-offset-background transition-opacity",
      "hover:opacity-100",
      "focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "disabled:pointer-events-none",
    ],
  }),
};

export interface SearchFieldRootProps
  extends React.ComponentProps<typeof SearchField> {}

export function SearchFieldRoot({ className, ...props }: SearchFieldRootProps) {
  return (
    <SearchField
      {...props}
      data-slot="search-field-root"
      className={composeRenderProps(className, (className) =>
        SearchFieldStyles.Root({ className })
      )}
    />
  );
}

export interface SearchFieldInputProps
  extends React.ComponentProps<typeof Input> {}

export function SearchFieldInput({
  className,
  ...props
}: SearchFieldInputProps) {
  return (
    <Input
      {...props}
      data-slot="search-field-input"
      className={composeRenderProps(className, (className) =>
        SearchFieldStyles.Input({ className })
      )}
    />
  );
}

export interface SearchFieldButtonProps
  extends Omit<React.ComponentProps<typeof Button>, "children"> {}

export function SearchFieldButton({
  className,
  ...props
}: SearchFieldButtonProps) {
  return (
    <Button
      {...props}
      data-slot="search-field-input"
      className={composeRenderProps(className, (className) =>
        SearchFieldStyles.Close({ className })
      )}
    >
      <XIcon />
    </Button>
  );
}
