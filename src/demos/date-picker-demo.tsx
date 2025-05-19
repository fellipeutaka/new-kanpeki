"use client";

import { type DateValue, getLocalTimeZone } from "@internationalized/date";
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { Group } from "react-aria-components";
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
} from "~/components/ui/calendar";
import { DateFieldInput } from "~/components/ui/date-field";
import { DatePickerIcon, DatePickerRoot } from "~/components/ui/date-picker";
import { DialogContent } from "~/components/ui/dialog";
import { PopoverContent, PopoverRoot } from "~/components/ui/popover";
import { cn } from "~/lib/cva";

export function DatePickerDemo() {
  return (
    <div className="flex flex-col items-start gap-4 md:flex-row">
      <Simple />
      <DatePickerSimple />
      {/* <DatePickerWithRange /> */}
    </div>
  );
}

function Simple() {
  return (
    <DatePickerRoot>
      <Group>
        <Button variant="outline" className="font-normal">
          <CalendarIcon className="size-4 shrink-0 text-muted-foreground" />
          <DateFieldInput />
          <DatePickerIcon />
        </Button>
      </Group>
      <PopoverContent>
        <DialogContent className="bg-popover">
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
                {(weekDay) => (
                  <CalendarHeaderCell>{weekDay}</CalendarHeaderCell>
                )}
              </CalendarGridHeader>

              <CalendarGridBody>
                {(date) => <CalendarCell date={date} />}
              </CalendarGridBody>
            </CalendarGrid>
          </CalendarRoot>
        </DialogContent>
      </PopoverContent>
    </DatePickerRoot>
  );
}

function DatePickerSimple() {
  const [date, setDate] = useState<DateValue>();

  return (
    <PopoverRoot>
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
      <PopoverContent placement="bottom start">
        <CalendarRoot value={date} onChange={setDate}>
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
              {(date) => <CalendarCell date={date} />}
            </CalendarGridBody>
          </CalendarGrid>
        </CalendarRoot>
      </PopoverContent>
    </PopoverRoot>
  );
}

// function DatePickerWithRange() {
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
//       <PopoverContent className="w-auto p-0" align="start">
//         <Calendar
//           initialFocus
//           mode="range"
//           defaultMonth={date?.from}
//           selected={date}
//           onSelect={setDate}
//           numberOfMonths={2}
//         />
//       </PopoverContent>
//     </Popover>
//   );
// }
