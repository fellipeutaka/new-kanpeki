"use client";

import { TextField, composeRenderProps } from "react-aria-components";
import { TextfieldStyles } from "./styles";

export interface TextfieldProps
  extends React.ComponentProps<typeof TextField> {}

export function Textfield({ className, ...props }: TextfieldProps) {
  return (
    <TextField
      data-slot="textfield"
      className={composeRenderProps(className, (className) =>
        TextfieldStyles({ className })
      )}
      {...props}
    />
  );
}
