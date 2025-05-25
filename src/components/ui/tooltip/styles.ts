import { cva } from "~/lib/cva";

export const TooltipStyles = {
  Content: cva({
    base: [
      "group motion-duration-150 z-50 rounded-md border bg-popover px-3 py-1.5 text-popover-foreground text-xs will-change-transform",
      "entering:placement-left:motion-translate-x-in-[0.5rem]",
      "entering:placement-right:motion-translate-x-in-[-0.5rem]",
      "entering:placement-top:motion-translate-y-in-[0.5rem]",
      "entering:placement-bottom:motion-translate-y-in-[-0.5rem]",
      "entering:motion-opacity-in",
      "exiting:motion-opacity-out",
    ],
  }),
  Arrow: cva({
    base: [
      "group-placement-left:-rotate-90 fill-popover stroke-border group-placement-bottom:rotate-180 group-placement-right:rotate-90",
    ],
  }),
};
