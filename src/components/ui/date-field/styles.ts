import { cva } from "~/lib/cva";

export const DateFieldStyles = {
  Segment: cva({
    base: [
      "rounded p-0.5 outline-none transition",
      "data-placeholder:text-muted-foreground",
      "type-literal:px-0 type-literal:text-muted-foreground",
      "focus:bg-ring/50",
    ],
  }),
};
