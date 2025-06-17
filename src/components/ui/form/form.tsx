"use client";

import {
  FieldError,
  Form,
  Text,
  composeRenderProps,
} from "react-aria-components";
import { FormStyles } from "./styles";

export interface FormRootProps extends React.ComponentProps<typeof Form> {}
export function FormRoot(props: FormRootProps) {
  return <Form {...props} data-slot="form-root" />;
}

export interface FormDescriptionProps
  extends Omit<React.ComponentProps<typeof Text>, "slot"> {}

export function FormDescription({ className, ...props }: FormDescriptionProps) {
  return (
    <Text
      {...props}
      data-slot="form-description"
      slot="description"
      className={FormStyles.Description({
        className,
      })}
    />
  );
}

export interface FormMessageProps
  extends React.ComponentProps<typeof FieldError> {}

export function FormMessage({ className, ...props }: FormMessageProps) {
  return (
    <FieldError
      {...props}
      data-slot="form-message"
      className={composeRenderProps(className, (className) =>
        FormStyles.Message({
          className,
        })
      )}
    />
  );
}
