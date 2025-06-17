import { cva } from "~/lib/cva";

export const AvatarStyles = {
  Root: cva({
    base: ["group relative flex size-8 shrink-0 overflow-hidden rounded-full"],
  }),
  Image: cva({
    base: ["aspect-square size-full"],
  }),
  Fallback: cva({
    base: [
      "size-full select-none place-content-center rounded-full bg-muted",
      "grid group-data-[status=success]:hidden",
    ],
  }),
  Placeholder: cva({
    base: ["grid size-full animate-pulse place-content-center bg-muted"],
  }),
};
