"use client";

import {
  Button,
  DialogTrigger,
  OverlayArrow,
  Popover,
  PopoverContext,
  composeRenderProps,
  useSlottedContext,
} from "react-aria-components";

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
        true: ["min-w-(--trigger-width) overflow-y-auto"],
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

export interface PopoverRootProps
  extends React.ComponentProps<typeof DialogTrigger> {}

export function PopoverRoot(props: PopoverRootProps) {
  return <DialogTrigger data-slot="popover" {...props} />;
}

export interface PopoverTriggerProps
  extends React.ComponentProps<typeof Button> {}

export function PopoverTrigger(props: PopoverTriggerProps) {
  return <Button data-slot="popover-trigger" {...props} />;
}

export interface PopoverContentProps
  extends React.ComponentProps<typeof Popover> {
  /**
   * The additional offset applied along the main axis between the element and its
   * anchor element.
   * @default 4
   */
  offset?: number;
}

export function PopoverContent({
  className,
  offset = 4,
  placement,
  ...props
}: PopoverContentProps) {
  const popoverContext = useSlottedContext(PopoverContext);
  const isMenu = popoverContext?.trigger !== "DialogTrigger";
  const isSubmenuTrigger = popoverContext?.trigger === "SubmenuTrigger";
  const _placement = placement ?? (isSubmenuTrigger ? "right" : "bottom start");

  return (
    <Popover
      data-slot="popover-content"
      offset={offset}
      placement={_placement}
      className={composeRenderProps(className, (className) =>
        PopoverStyles.Content({
          className,
          isMenu,
        })
      )}
      {...props}
    />
  );
}

export interface PopoverAnchorProps
  extends React.ComponentProps<typeof OverlayArrow> {}

export function PopoverAnchor({ ...props }: PopoverAnchorProps) {
  return <OverlayArrow data-slot="popover-anchor" {...props} />;
}
