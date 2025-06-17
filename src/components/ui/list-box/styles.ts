import { cva } from "~/lib/cva";

export const ListboxStyles = {
  Root: cva({
    base: [
      "relative z-50 min-w-32 overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
    ],
  }),
  Item: cva({
    base: [
      "relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
      "*:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
    ],
  }),
  Empty: cva({
    base: ["pointer-events-none py-6 text-center text-sm"],
  }),
  Label: cva({
    base: ["px-2 py-1.5 font-medium text-muted-foreground text-xs"],
  }),
};
