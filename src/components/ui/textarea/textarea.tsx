"use client";

import { TextArea } from "react-aria-components";
import { TextareaStyles } from "./styles";

export interface TextareaProps extends React.ComponentProps<typeof TextArea> {}

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <TextArea
      data-slot="textarea"
      className={TextareaStyles({ className })}
      {...props}
    />
  );
}
