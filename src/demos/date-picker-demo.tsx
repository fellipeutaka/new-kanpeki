"use client";

import { getLocalTimeZone } from "@internationalized/date";
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { type DateValue, Group } from "react-aria-components";
import { Button } from "~/components/ui/button/button";
import * as Calendar from "~/components/ui/calendar/namespace";
import * as DateField from "~/components/ui/date-field/namespace";
import * as DatePicker from "~/components/ui/date-picker/namespace";
import { DialogContent } from "~/components/ui/dialog/dialog";
import * as Popover from "~/components/ui/popover/namespace";
import { cn } from "~/lib/cva";

export function DatePickerDemo() {
  return (
    <div className="flex flex-col items-start gap-4 md:flex-row">
      <Simple />
      <DatePickerSimple />
      {/* <DatePicker.WithRange /> */}
    </div>
  );
}

function Simple() {
  return (
    <DatePicker.Root>
      <Group>
        <Button variant="outline" className="font-normal">
          <CalendarIcon className="size-4 shrink-0 text-muted-foreground" />
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
          <DatePicker.Icon />
        </Button>
      </Group>
      <Popover.Content>
        <DialogContent className="bg-popover">
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
                {(weekDay) => (
                  <Calendar.HeaderCell>{weekDay}</Calendar.HeaderCell>
                )}
              </Calendar.GridHeader>

              <Calendar.GridBody>
                {(date) => <Calendar.Cell date={date} />}
              </Calendar.GridBody>
            </Calendar.Grid>
          </Calendar.Root>
        </DialogContent>
      </Popover.Content>
    </DatePicker.Root>
  );
}

function DatePickerSimple() {
  const [date, setDate] = useState<DateValue>();

  return (
    <Popover.Root>
      <Button
        variant="outline"
        className={cn(
          "min-w-[200px] justify-start px-2 font-normal",
          !date && "text-muted-foreground"
        )}
      >
        <CalendarIcon className="text-muted-foreground" />
        {date ? (
          date.toDate(getLocalTimeZone()).toLocaleDateString(undefined, {
            month: "long",
            day: "numeric",
            year: "numeric",
          })
        ) : (
          <span>Pick a date</span>
        )}
      </Button>
      <Popover.Content className="min-w-auto p-3" placement="bottom start">
        <Calendar.Root value={date} onChange={setDate}>
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
              {(weekDay) => (
                <Calendar.HeaderCell>{weekDay}</Calendar.HeaderCell>
              )}
            </Calendar.GridHeader>

            <Calendar.GridBody>
              {(date) => <Calendar.Cell date={date} />}
            </Calendar.GridBody>
          </Calendar.Grid>
        </Calendar.Root>
      </Popover.Content>
    </Popover.Root>
  );
}

// function DatePicker.WithRange() {
//   const [date, setDate] = useState<DateRange | undefined>({
//     from: new Date(new Date().getFullYear(), 0, 20),
//     to: addDays(new Date(new Date().getFullYear(), 0, 20), 20),
//   });

//   return (
//     <Popover>
//       <PopoverTrigger asChild>
//         <Button
//           id="date"
//           variant={"outline"}
//           className={cn(
//             "w-fit justify-start px-2 font-normal",
//             !date && "text-muted-foreground"
//           )}
//         >
//           <CalendarIcon className="text-muted-foreground" />
//           {date?.from ? (
//             date.to ? (
//               <>
//                 {format(date.from, "LLL dd, y")} -{" "}
//                 {format(date.to, "LLL dd, y")}
//               </>
//             ) : (
//               format(date.from, "LLL dd, y")
//             )
//           ) : (
//             <span>Pick a date</span>
//           )}
//         </Button>
//       </PopoverTrigger>
//       <Popover.Content className="w-auto p-0" align="start">
//         <Calendar.
//           initialFocus
//           mode="range"
//           defaultMonth={date?.from}
//           selected={date}
//           onSelect={setDate}
//           numberOfMonths={2}
//         />
//       </Popover.Content>
//     </Popover>
//   );
// }
