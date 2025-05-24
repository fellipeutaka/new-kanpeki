"use client";

import { getLocalTimeZone, today } from "@internationalized/date";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeader,
  CalendarHeaderCell,
  CalendarMonth,
  CalendarNav,
  CalendarRoot,
  RangeCalendarRoot,
} from "~/components/ui/calendar";

export function CalendarDemo() {
  return (
    <div className="flex @md:flex-row flex-col flex-wrap items-start gap-2">
      <CalendarRoot className="rounded-md border p-3 shadow-sm">
        <CalendarHeader>
          <CalendarNav>
            <Button
              size="icon"
              variant="outline"
              className="size-8 text-muted-fg sm:size-7"
              slot="previous"
            >
              <ChevronLeftIcon className="size-4" />
            </Button>

            <CalendarMonth />

            <Button
              size="icon"
              variant="outline"
              className="size-8 text-muted-fg sm:size-7"
              slot="next"
            >
              <ChevronRightIcon className="size-4" />
            </Button>
          </CalendarNav>
        </CalendarHeader>

        <CalendarGrid weekdayStyle="short">
          <CalendarGridHeader>
            {(weekDay) => <CalendarHeaderCell>{weekDay}</CalendarHeaderCell>}
          </CalendarGridHeader>

          <CalendarGridBody>
            {(date) => <CalendarCell shape="rounded" date={date} />}
          </CalendarGridBody>
        </CalendarGrid>
      </CalendarRoot>

      <RangeCalendarRoot
        className="rounded-md border p-3 shadow-sm"
        visibleDuration={{ months: 2 }}
        isDateUnavailable={(date) => {
          return date.compare(today(getLocalTimeZone())) > 0;
        }}
      >
        <CalendarHeader>
          <CalendarNav>
            <Button
              size="icon"
              variant="outline"
              className="size-8 text-muted-fg sm:size-7"
              slot="previous"
            >
              <ChevronLeftIcon className="size-4" />
            </Button>

            <CalendarMonth />

            <Button
              size="icon"
              variant="outline"
              className="size-8 text-muted-fg sm:size-7"
              slot="next"
            >
              <ChevronRightIcon className="size-4" />
            </Button>
          </CalendarNav>
        </CalendarHeader>

        <div className="flex gap-2">
          <CalendarGrid weekdayStyle="short">
            <CalendarGridHeader>
              {(weekDay) => <CalendarHeaderCell>{weekDay}</CalendarHeaderCell>}
            </CalendarGridHeader>

            <CalendarGridBody>
              {(date) => <CalendarCell date={date} />}
            </CalendarGridBody>
          </CalendarGrid>

          <CalendarGrid offset={{ months: 1 }} weekdayStyle="short">
            <CalendarGridHeader>
              {(weekDay) => <CalendarHeaderCell>{weekDay}</CalendarHeaderCell>}
            </CalendarGridHeader>

            <CalendarGridBody>
              {(date) => <CalendarCell date={date} />}
            </CalendarGridBody>
          </CalendarGrid>
        </div>
      </RangeCalendarRoot>
    </div>
  );
}
