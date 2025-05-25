import { cva } from "~/lib/cva";

export const SwitchStyles = {
  Root: cva({
    base: ["group inline-flex touch-none items-center gap-2"],
  }),
  Track: cva({
    base: [
      "group inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-input shadow-xs transition",
      "group-focus-visible:ring-default",
      "group-invalid:ring-danger",
      "group-disabled:cursor-not-allowed group-disabled:opacity-50",
      "group-selected:bg-primary",
    ],
  }),
  Thumb: cva({
    base: [
      "pointer-events-none block size-4 translate-x-0 rounded-full shadow-lg ring-0 transition-all",
      "group-selected:ml-4",
      "group-pressed:w-5",
      "group-selected:group-pressed:ml-3",

      "bg-background dark:bg-foreground dark:group-selected:bg-primary-foreground",
    ],
  }),
};
