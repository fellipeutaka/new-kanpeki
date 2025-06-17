import { cva } from "~/lib/cva";

export const CheckboxStyles = {
  Provider: cva({
    base: [
      "group flex items-center gap-3 font-medium text-sm leading-none transition",
      "disabled:opacity-50",
    ],
  }),
  Root: cva({
    base: [
      "grid size-4 shrink-0 place-content-center rounded border border-toggle bg-secondary text-background transition",

      "group-selected:border-primary/70 group-selected:bg-primary group-selected:text-primary-foreground",
      "group-selected:group-invalid:border-danger/70 group-selected:group-invalid:bg-danger group-selected:group-invalid:text-danger-foreground",

      "group-focus-visible:border-primary/70 group-focus-visible:ring-4 group-focus-visible:ring-primary/20",
      "group-focus-visible:group-invalid:border-danger/70 group-focus-visible:group-invalid:text-danger-foreground group-focus-visible:group-invalid:ring-danger/20",

      "group-invalid:border-danger/70 group-invalid:bg-danger/20 group-invalid:text-danger-foreground group-invalid:ring-danger/20",
      "group-disabled:cursor-not-allowed",
    ],
  }),
  Indicator: cva({
    base: ["hidden size-3"],
  }),
};
