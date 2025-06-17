"use client";

import { getLocalTimeZone, today } from "@internationalized/date";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "~/components/ui/button/button";
import { Calendar } from "~/components/ui/calendar";

export function CalendarDemo() {
  return (
    <div className="flex @md:flex-row flex-col flex-wrap items-start gap-2">
      <Calendar.Root variant="outline">
        <Calendar.Header>
          <Calendar.Nav>
            <Button
              size="icon"
              variant="outline"
              className="size-8 text-muted-fg sm:size-7"
              slot="previous"
            >
              <ChevronLeftIcon className="size-4" />
            </Button>

            <Calendar.Month />

            <Button
              size="icon"
              variant="outline"
              className="size-8 text-muted-fg sm:size-7"
              slot="next"
            >
              <ChevronRightIcon className="size-4" />
            </Button>
          </Calendar.Nav>
        </Calendar.Header>

        <Calendar.Grid weekdayStyle="short">
          <Calendar.GridHeader>
            {(weekDay) => <Calendar.HeaderCell>{weekDay}</Calendar.HeaderCell>}
          </Calendar.GridHeader>

          <Calendar.GridBody>
            {(date) => <Calendar.Cell shape="rounded" date={date} />}
          </Calendar.GridBody>
        </Calendar.Grid>
      </Calendar.Root>

      <Calendar.Range
        variant="outline"
        visibleDuration={{ months: 2 }}
        isDateUnavailable={(date) => {
          return date.compare(today(getLocalTimeZone())) > 0;
        }}
      >
        <Calendar.Header>
          <Calendar.Nav>
            <Button
              size="icon"
              variant="outline"
              className="size-8 text-muted-fg sm:size-7"
              slot="previous"
            >
              <ChevronLeftIcon className="size-4" />
            </Button>

            <Calendar.Month />

            <Button
              size="icon"
              variant="outline"
              className="size-8 text-muted-fg sm:size-7"
              slot="next"
            >
              <ChevronRightIcon className="size-4" />
            </Button>
          </Calendar.Nav>
        </Calendar.Header>

        <div className="flex gap-2">
          <Calendar.Grid weekdayStyle="short">
            <Calendar.GridHeader>
              {(weekDay) => (
                <Calendar.HeaderCell>{weekDay}</Calendar.HeaderCell>
              )}
            </Calendar.GridHeader>

            <Calendar.GridBody>
              {(date) => <Calendar.Cell date={date} />}
            </Calendar.GridBody>
          </Calendar.Grid>

          <Calendar.Grid offset={{ months: 1 }} weekdayStyle="short">
            <Calendar.GridHeader>
              {(weekDay) => (
                <Calendar.HeaderCell>{weekDay}</Calendar.HeaderCell>
              )}
            </Calendar.GridHeader>

            <Calendar.GridBody>
              {(date) => <Calendar.Cell date={date} />}
            </Calendar.GridBody>
          </Calendar.Grid>
        </div>
      </Calendar.Range>
    </div>
  );
}
