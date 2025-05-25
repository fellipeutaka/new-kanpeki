"use client";

import {
  DateField as DateFieldPrimitive,
  DateInput,
  DateSegment,
  type DateValue,
  composeRenderProps,
} from "react-aria-components";
import { DateFieldStyles } from "./styles";

export interface DateFieldRootProps<T extends DateValue>
  extends React.ComponentProps<typeof DateFieldPrimitive<T>> {}

export function DateFieldRoot<T extends DateValue>(
  props: DateFieldRootProps<T>
) {
  return <DateFieldPrimitive {...props} data-slot="date-field-root" />;
}

export interface DateFieldInputProps
  extends React.ComponentProps<typeof DateInput> {}

export function DateFieldInput(props: DateFieldInputProps) {
  return <DateInput data-slot="date-field-input" {...props} />;
}

export interface DateFieldSegmentProps
  extends React.ComponentProps<typeof DateSegment> {}

export function DateFieldSegment({
  className,
  ...props
}: DateFieldSegmentProps) {
  return (
    <DateSegment
      {...props}
      data-slot="date-field-segment"
      className={composeRenderProps(className, (className) =>
        DateFieldStyles.Segment({ className })
      )}
    />
  );
}
