"use client";

import { getLocalTimeZone, isToday } from "@internationalized/date";
import type { VariantProps } from "cva";
import {
  Calendar,
  CalendarCell as CalendarCellPrimitive,
  CalendarGridBody as CalendarGridBodyPrimitive,
  CalendarGridHeader as CalendarGridHeaderPrimitive,
  CalendarGrid as CalendarGridPrimitive,
  CalendarHeaderCell as CalendarHeaderCellPrimitive,
  type DateValue,
  Heading,
  RangeCalendar,
  composeRenderProps,
} from "react-aria-components";
import { CalendarStyles } from "./styles";

export interface CalendarRootProps<T extends DateValue>
  extends React.ComponentProps<typeof Calendar<T>>,
    VariantProps<typeof CalendarStyles.Root> {}

export function CalendarRoot<T extends DateValue>({
  className,
  variant,
  ...props
}: CalendarRootProps<T>) {
  return (
    <Calendar
      data-slot="calendar-root"
      className={composeRenderProps(className, (className) =>
        CalendarStyles.Root({
          className,
          variant,
        })
      )}
      {...props}
    />
  );
}

export interface RangeCalendarRootProps<T extends DateValue>
  extends React.ComponentProps<typeof RangeCalendar<T>>,
    VariantProps<typeof CalendarStyles.Root> {}

export function RangeCalendarRoot<T extends DateValue>({
  className,
  variant,
  ...props
}: RangeCalendarRootProps<T>) {
  return (
    <RangeCalendar
      data-slot="range-calendar-root"
      className={composeRenderProps(className, (className) =>
        CalendarStyles.Root({
          className,
          variant,
        })
      )}
      {...props}
    />
  );
}

export interface CalendarHeaderProps extends React.ComponentProps<"header"> {}

export function CalendarHeader({ className, ...props }: CalendarHeaderProps) {
  return (
    <header
      data-slot="calendar-header"
      className={CalendarStyles.Header({ className })}
      {...props}
    />
  );
}

export interface CalendarMonthProps
  extends React.ComponentProps<typeof Heading> {}

export function CalendarMonth({ className, ...props }: CalendarMonthProps) {
  return (
    <Heading
      {...props}
      data-slot="calendar-month"
      className={CalendarStyles.Heading({ className })}
    />
  );
}

export interface CalendarNavProps extends React.ComponentProps<"nav"> {}

export function CalendarNav({ className, ...props }: CalendarNavProps) {
  return (
    <nav
      {...props}
      data-slot="calendar-nav"
      className={CalendarStyles.Nav({ className })}
    />
  );
}

export interface CalendarGridProps
  extends React.ComponentProps<typeof CalendarGridPrimitive> {}
export function CalendarGrid({ className, ...props }: CalendarGridProps) {
  return (
    <CalendarGridPrimitive
      {...props}
      data-slot="calendar-grid"
      className={CalendarStyles.Grid({ className })}
    />
  );
}

export interface CalendarGridHeaderProps
  extends React.ComponentProps<typeof CalendarGridHeaderPrimitive> {}
export function CalendarGridHeader(props: CalendarGridHeaderProps) {
  return (
    <CalendarGridHeaderPrimitive {...props} data-slot="calendar-grid-header" />
  );
}

export interface CalendarHeaderCellProps
  extends React.ComponentProps<typeof CalendarHeaderCellPrimitive> {}

export function CalendarHeaderCell({
  className,
  ...props
}: CalendarHeaderCellProps) {
  return (
    <CalendarHeaderCellPrimitive
      {...props}
      data-slot="calendar-header-cell"
      className={CalendarStyles.HeaderCell({ className })}
    />
  );
}

export interface CalendarGridBodyProps
  extends React.ComponentProps<typeof CalendarGridBodyPrimitive> {}
export function CalendarGridBody(props: CalendarGridBodyProps) {
  return (
    <CalendarGridBodyPrimitive {...props} data-slot="calendar-grid-body" />
  );
}

export interface CalendarCellProps
  extends React.ComponentProps<typeof CalendarCellPrimitive>,
    Omit<VariantProps<(typeof CalendarStyles)["Cell"]>, "isToday"> {}

export function CalendarCell({
  className,
  shape,
  ...props
}: CalendarCellProps) {
  return (
    <CalendarCellPrimitive
      {...props}
      data-slot="calendar-cell"
      data-shape={shape}
      className={composeRenderProps(className, (className, values) =>
        CalendarStyles.Cell({
          isToday: isToday(values.date, getLocalTimeZone()),
          shape,
          className,
        })
      )}
    />
  );
}
