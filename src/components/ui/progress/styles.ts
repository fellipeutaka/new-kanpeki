import { cva } from "~/lib/cva";

export const ProgressStyles = {
  Root: cva({
    base: ["relative h-2 w-full overflow-hidden rounded-full bg-primary/20"],
  }),
  Indicator: cva({
    base: [
      "size-full flex-1 bg-primary transition-transform duration-700 will-change-transform",
    ],
  }),
};
