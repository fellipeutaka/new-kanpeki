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

import { cva } from "~/lib/cva";

export const CalendarStyles = {
  Root: cva({
    base: ["group"],
  }),
  Header: cva({
    base: ["flex w-full justify-center gap-1 px-1 pb-5 sm:pb-4"],
  }),
  Heading: cva({
    base: ["font-medium text-sm"],
  }),
  Nav: cva({
    base: ["flex w-full items-center justify-between gap-1"],
  }),
  Grid: cva({
    base: [
      "w-full",
      "[&_tr]:mt-2 [&_tr]:flex [&_tr]:w-full [&_tr]:justify-between",
      "[&_tr_td[aria-selected=true]]:bg-accent",
      "[&_tr_td[aria-selected=true]:has([data-selection-start])]:rounded-l-md",
      "[&_tr_td[aria-selected=true]:has([data-selection-end])]:rounded-r-md",
      "group-data-[slot=calendar-root]:[&_tr_td[aria-selected=true]]:rounded-md",

      "[&_tr_td[aria-selected=true]:has([data-selection-start][data-shape=rounded])]:rounded-l-full",
      "[&_tr_td[aria-selected=true]:has([data-selection-end][data-shape=rounded])]:rounded-r-full",
      "group-data-[slot=calendar-root]:[&_tr_td[aria-selected=true]:has([data-slot=rounded])]:rounded-full",
    ],
  }),
  HeaderCell: cva({
    base: ["w-8 rounded-md font-normal text-[0.8rem] text-muted-foreground"],
  }),
  Cell: cva({
    base: [
      "relative grid size-8 select-none place-content-center whitespace-nowrap text-accent-foreground text-sm outline-hidden transition",
      "hover:bg-accent hover:text-accent-foreground",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
      "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",

      "selected:bg-primary selected:text-primary-foreground",
      "group-data-[slot=range-calendar-root]:selected:bg-accent group-data-[slot=range-calendar-root]:selected:text-accent-foreground",
      "group-data-[slot=range-calendar-root]:selection-start:bg-primary group-data-[slot=range-calendar-root]:selection-start:text-primary-foreground",
      "group-data-[slot=range-calendar-root]:selection-end:bg-primary group-data-[slot=range-calendar-root]:selection-end:text-primary-foreground",
    ],
    variants: {
      isToday: {
        true: [
          "after:-translate-x-1/2 after:absolute after:start-1/2 after:bottom-1 after:z-10",
          "after:size-[3px] after:rounded-full after:bg-current",
        ],
      },
      shape: {
        rounded: "rounded-full",
        default: [
          "rounded-md group-data-[slot=range-calendar-root]:not-selection-start:not-selection-end:selected:rounded-none",
        ],
      },
    },
    defaultVariants: {
      shape: "default",
    },
  }),
};

export interface CalendarRootProps<T extends DateValue>
  extends React.ComponentProps<typeof Calendar<T>> {}
export function CalendarRoot<T extends DateValue>({
  className,
  ...props
}: CalendarRootProps<T>) {
  return (
    <Calendar
      data-slot="calendar-root"
      className={composeRenderProps(className, (className) =>
        CalendarStyles.Root({
          className,
        })
      )}
      {...props}
    />
  );
}

export interface RangeCalendarRootProps<T extends DateValue>
  extends React.ComponentProps<typeof RangeCalendar<T>> {}
export function RangeCalendarRoot<T extends DateValue>({
  className,
  ...props
}: RangeCalendarRootProps<T>) {
  return (
    <RangeCalendar
      data-slot="range-calendar-root"
      className={composeRenderProps(className, (className) =>
        CalendarStyles.Root({
          className,
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
