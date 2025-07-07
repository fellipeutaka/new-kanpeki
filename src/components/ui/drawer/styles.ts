import { cva } from "~/lib/cva";

export const DrawerStyles = {
  Overlay: cva({
    base: [
      "fixed inset-0 z-50",
      "data-[state=closed]:animate-out data-[state=open]:animate-in",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    ],
  }),
  Modal: cva({
    base: [
      "fixed z-50 flex touch-none flex-col gap-4 bg-background shadow-lg will-change-transform",
      "data-[state=closed]:animate-out data-[state=open]:animate-in",
      "data-[state=closed]:duration-300 data-[state=open]:duration-500",
    ],
    variants: {
      side: {
        top: [
          "inset-x-0 top-0 rounded-b-lg border-b",
          "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        ],
        right: [
          "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
        ],
        bottom: [
          "inset-x-0 bottom-0 rounded-t-lg border-t",
          "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        ],
        left: [
          "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
        ],
      },
      isFloat: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        side: "top",
        isFloat: true,
        className: "inset-x-2 top-2 rounded-lg border",
      },
      {
        side: "right",
        isFloat: true,
        className: "inset-y-2 right-2 rounded-lg border",
      },
      {
        side: "bottom",
        isFloat: true,
        className: "inset-x-2 bottom-2 rounded-lg border",
      },
      {
        side: "left",
        isFloat: true,
        className: "inset-y-2 left-2 rounded-lg border",
      },
    ],
    defaultVariants: {
      side: "bottom",
      isFloat: false,
    },
  }),
  Content: cva({
    base: [
      "group relative flex flex-col overflow-hidden outline-none",
      "h-full max-h-full",
    ],
    variants: {
      side: {
        top: ["mx-auto w-full max-w-lg"],
        right: ["h-full"],
        bottom: ["mx-auto w-full max-w-lg"],
        left: ["h-full"],
      },
    },
    defaultVariants: {
      side: "bottom",
    },
  }),
  Header: cva({
    base: ["flex flex-col space-y-1.5 p-4 text-center sm:text-left"],
  }),
  Title: cva({
    base: ["font-semibold text-lg leading-none tracking-tight"],
  }),
  Description: cva({
    base: ["text-muted-foreground text-sm"],
  }),
  Body: cva({
    base: ["flex-1 overflow-auto p-4"],
  }),
  Footer: cva({
    base: ["flex flex-col-reverse p-4 sm:flex-row sm:justify-end sm:space-x-2"],
  }),
  Notch: cva({
    base: ["mx-auto h-2 w-[100px] rounded-full bg-muted"],
    variants: {
      side: {
        top: ["order-last mb-4"],
        bottom: ["my-4"],
        left: [],
        right: [],
      },
    },
    defaultVariants: {
      side: "bottom",
    },
  }),
};
