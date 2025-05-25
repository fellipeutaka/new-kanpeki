import { cva } from "~/lib/cva";

export const TableStyles = {
  Container: cva({
    base: ["relative w-full overflow-x-auto"],
  }),
  Root: cva({
    base: ["w-full caption-bottom text-sm"],
  }),
  Header: cva({
    base: ["[&_tr]:border-b"],
  }),
  Body: cva({
    base: ["[&_tr:last-child]:border-0"],
  }),
  Footer: cva({
    base: ["border-t bg-muted/50 font-medium [&>tr]:last:border-b-0"],
  }),
  Row: cva({
    base: [
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
    ],
  }),
  Head: cva({
    base: [
      "h-10 whitespace-nowrap px-2 text-left align-middle font-medium text-foreground",
      "[&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
    ],
  }),
  Cell: cva({
    base: [
      "whitespace-nowrap p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
    ],
  }),
  Caption: cva({
    base: ["mt-4 text-muted-foreground text-sm"],
  }),
};
