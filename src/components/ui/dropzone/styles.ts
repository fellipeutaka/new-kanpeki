import { cva } from "~/lib/cva";

export const DropzoneStyles = {
  Provider: cva({
    base: ["group relative"],
  }),
  Root: cva({
    base: [
      "grid w-full select-none place-content-center rounded-lg border-2 border-dashed transition",
      "group-drop-target:border-primary",
    ],
  }),
  Label: cva({
    base: ["font-medium text-sm"],
  }),
};
