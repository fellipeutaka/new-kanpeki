import { cva } from "~/lib/cva";

export const BreadcrumbStyles = {
  Root: cva({
    base: [
      "flex flex-wrap items-center gap-1.5 break-words text-muted-foreground text-sm sm:gap-2.5",
    ],
  }),
  Item: cva({
    base: ["inline-flex items-center gap-1.5"],
  }),
  Link: cva({
    base: [
      "rounded-md current:font-normal current:text-foreground outline-none transition-all hover:text-foreground",
      "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
    ],
  }),
  Separator: cva({
    base: ["[&>svg]:size-3.5"],
  }),
  Ellipsis: cva({
    base: ["flex size-9 items-center justify-center"],
  }),
};
