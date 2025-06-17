"use client";

import { XIcon } from "lucide-react";
import {
  Button,
  Input,
  SearchField,
  composeRenderProps,
} from "react-aria-components";
import { SearchFieldStyles } from "./styles";

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
