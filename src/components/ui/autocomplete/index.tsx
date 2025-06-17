"use client";

import {
  Autocomplete as AutocompletePrimitive,
  useFilter,
} from "react-aria-components";

export interface AutocompleteProps
  extends React.ComponentProps<typeof AutocompletePrimitive> {
  options?: Intl.CollatorOptions;
}

export function Autocomplete({ filter, options, ...props }: AutocompleteProps) {
  const { contains } = useFilter({ sensitivity: "base", ...options });

  return <AutocompletePrimitive filter={filter ?? contains} {...props} />;
}
