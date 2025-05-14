"use client";

import { TextField, composeRenderProps } from "react-aria-components";
import { cn } from "~/lib/cva";

export interface TextfieldProps
  extends React.ComponentProps<typeof TextField> {}

export function Textfield({ className, ...props }: TextfieldProps) {
  return (
    <TextField
      data-slot="textfield"
      className={composeRenderProps(className, (className) =>
        cn("grid gap-3", className)
      )}
      {...props}
    />
  );
}
