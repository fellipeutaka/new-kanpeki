import { cva } from "~/lib/cva";

export const PaginationStyles = {
  Root: cva({
    base: ["mx-auto flex w-full justify-center"],
  }),
  Content: cva({
    base: ["flex flex-row items-center gap-1"],
  }),
  Navigation: cva({
    base: ["gap-1 px-2.5"],
    variants: {
      variant: {
        previous: ["sm:pl-2.5"],
        next: ["sm:pr-2.5"],
      },
    },
  }),
  Ellipsis: cva({
    base: ["flex size-9 items-center justify-center"],
  }),
};
