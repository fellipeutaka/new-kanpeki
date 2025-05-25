import { cva } from "~/lib/cva";

export const PopoverStyles = {
  Content: cva({
    base: [
      "z-50 shadow-md outline-hidden",

      "motion-duration-150",
      "entering:motion-opacity-in entering:motion-ease-out",
      "entering:placement-left:motion-translate-x-in-[0.25rem]",
      "entering:placement-right:motion-translate-x-in-[-0.25rem]",
      "entering:placement-top:motion-translate-y-in-[0.25rem]",
      "entering:placement-bottom:motion-translate-y-in-[-0.25rem]",

      "exiting:motion-opacity-out exiting:motion-ease-in",
      "exiting:placement-left:motion-translate-x-out-[0.25rem]",
      "exiting:placement-right:motion-translate-x-out-[-0.25rem]",
      "exiting:placement-top:motion-translate-y-out-[0.25rem]",
      "exiting:placement-bottom:motion-translate-y-out-[-0.25rem]",
    ],
    variants: {
      isMenu: {
        true: [
          "min-w-(--trigger-width) overflow-hidden *:data-[slot=listbox-root]:max-h-[inherit]",
        ],
        false: [
          "min-w-72 rounded-md border bg-popover p-4 text-popover-foreground",
        ],
      },
    },
  }),
  Arrow: cva({
    base: [
      "block fill-popover stroke-border",
      "group-placement-left:-rotate-90 group-placement-bottom:rotate-180 group-placement-right:rotate-90",
    ],
  }),
};
