import { cva } from "~/lib/cva";

export const DialogStyles = {
  Overlay: cva({
    base: [
      "fixed inset-0 z-50",
      "entering:motion-opacity-in motion-duration-200 motion-ease exiting:motion-opacity-out",
    ],
    variants: {
      isBlurred: {
        true: ["backdrop-blur"],
        false: ["bg-black/15 dark:bg-black/60"],
      },
    },
    defaultVariants: {
      isBlurred: false,
    },
  }),
  Modal: cva({
    base: [
      "fixed z-50 w-full bg-background p-4 shadow-lg outline-none",
      "entering:motion-opacity-in motion-duration-200 exiting:motion-opacity-out motion-ease",
      "sm:rounded-lg",
      "-translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-lg border p-6",
      "entering:motion-scale-in-95",
      "exiting:motion-scale-out-95",
    ],
  }),
  Content: cva({
    base: ["grid gap-4 outline-none"],
  }),
  Close: cva({
    base: [
      "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity",
      "hover:opacity-100",
      "focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "disabled:pointer-events-none",
      "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    ],
  }),
  Header: cva({
    base: ["flex flex-col gap-2 text-center sm:text-left"],
  }),
  Footer: cva({
    base: ["flex flex-col-reverse", "sm:flex-row sm:justify-end sm:space-x-2"],
  }),
  Title: cva({
    base: ["font-semibold text-lg leading-none"],
  }),
  Description: cva({
    base: ["text-muted-foreground text-sm"],
  }),
};
