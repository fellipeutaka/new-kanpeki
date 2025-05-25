"use client";

import {
  OverlayArrow,
  Tooltip,
  TooltipTrigger,
  composeRenderProps,
} from "react-aria-components";
import { TooltipStyles } from "./styles";

export interface TooltipRootProps
  extends React.ComponentProps<typeof TooltipTrigger> {
  /**
   * The delay time for the tooltip to show up. [See guidelines](https://spectrum.adobe.com/page/tooltip/#Immediate-or-delayed-appearance).
   * @default 0
   */
  delay?: number;

  /**
   * The delay time for the tooltip to close. [See guidelines](https://spectrum.adobe.com/page/tooltip/#Warmup-and-cooldown).
   * @default 300
   */
  closeDelay?: number;
}

export function TooltipRoot({
  delay = 0,
  closeDelay = 300,
  ...props
}: TooltipRootProps) {
  return (
    <TooltipTrigger
      data-slot="tooltip-root"
      delay={delay}
      closeDelay={closeDelay}
      {...props}
    />
  );
}

export interface TooltipContentProps
  extends React.ComponentProps<typeof Tooltip> {}

export function TooltipContent({ className, ...props }: TooltipContentProps) {
  return (
    <Tooltip
      data-slot="tooltip-content"
      className={composeRenderProps(className, (className) =>
        TooltipStyles.Content({ className })
      )}
      {...props}
    />
  );
}

export interface TooltipArrowProps
  extends React.ComponentProps<typeof OverlayArrow> {}

export function TooltipArrow({ className, ...props }: TooltipArrowProps) {
  return (
    <OverlayArrow {...props}>
      <svg
        aria-hidden="true"
        width={10}
        height={10}
        viewBox="0 0 10 10"
        className={TooltipStyles.Arrow({ className })}
      >
        <path d="M0 0 L5 5 L10 0" />
      </svg>
    </OverlayArrow>
  );
}
