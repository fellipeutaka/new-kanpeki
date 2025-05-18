"use client";

import { use } from "react";
import {
  SliderOutput as Output,
  Slider,
  SliderStateContext,
  SliderThumb as Thumb,
  SliderTrack as Track,
  composeRenderProps,
} from "react-aria-components";

import { cva } from "~/lib/cva";

export const SliderStyles = {
  Root: cva({
    base: [
      "flex flex-col gap-2",
      "orientation-vertical:h-56 orientation-vertical:items-center",
      "orientation-horizontal:w-full",
      "disabled:opacity-50",
    ],
  }),
  Header: cva({
    base: ["flex items-center justify-between gap-2"],
  }),
  Output: cva({
    base: ["text-muted-fg text-sm tabular-nums"],
  }),
  Track: cva({
    base: [
      "group/track relative rounded-full bg-zinc-200 disabled:bg-bg-disabled dark:bg-zinc-800",
      "orientation-horizontal:h-1.5 orientation-horizontal:w-full orientation-vertical:w-1.5 orientation-vertical:flex-1 grow",
    ],
  }),
  Thumb: cva({
    base: [
      "top-1/2 left-1/2 size-4 shrink-0 rounded-full border border-primary bg-background shadow-sm ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:outline-hidden focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50",
    ],
  }),
  Range: cva({
    base: [
      "rounded-full bg-primary group-disabled/track:bg-bg-disabled",
      "group-orientation-horizontal/top-0 pointer-events-none absolute group-orientation-vertical/track:bottom-0 group-orientation-horizontal/track:h-full group-orientation-vertical/track:w-full",
    ],
  }),
};

export interface SliderRootProps<T extends number | number[]>
  extends React.ComponentProps<typeof Slider<T>> {}

export function SliderRoot<T extends number | number[]>({
  className,
  ...props
}: SliderRootProps<T>) {
  return (
    <Slider
      {...props}
      data-slot="slider-root"
      className={composeRenderProps(className, (className) =>
        SliderStyles.Root({ className })
      )}
    />
  );
}

export interface SliderTrackProps extends React.ComponentProps<typeof Track> {}

export function SliderTrack({ className, ...props }: SliderTrackProps) {
  return (
    <Track
      {...props}
      data-slot="slider-track"
      className={composeRenderProps(className, (className) =>
        SliderStyles.Track({ className })
      )}
    />
  );
}

export interface SliderThumbProps extends React.ComponentProps<typeof Thumb> {}

export function SliderThumb({ className, ...props }: SliderThumbProps) {
  const context = use(SliderStateContext);

  if (!context) {
    throw new Error("SliderThumb should be used within a Slider component.");
  }

  return context.values.map((_value, idx) => (
    <Thumb
      {...props}
      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
      key={idx}
      index={idx}
      data-slot="slider-thumb"
      className={composeRenderProps(className, (className) =>
        SliderStyles.Thumb({ className })
      )}
    />
  ));
}

export interface SliderOutputProps
  extends React.ComponentProps<typeof Output> {}

export function SliderOutput({ className, ...props }: SliderOutputProps) {
  return (
    <Output
      {...props}
      data-slot="slider-output"
      className={composeRenderProps(className, (className) =>
        SliderStyles.Output({ className })
      )}
    />
  );
}

export interface SliderRangeProps extends React.ComponentProps<"div"> {}

export function SliderRange({ className, ...props }: SliderRangeProps) {
  const context = use(SliderStateContext);

  if (!context) {
    throw new Error("SliderRange should be used within a Slider component.");
  }

  const { orientation, getThumbPercent, values } = context;

  return (
    <div
      {...props}
      className={SliderStyles.Range({ className })}
      style={
        values.length === 1
          ? orientation === "horizontal"
            ? { width: `${getThumbPercent(0) * 100}%` }
            : { height: `${getThumbPercent(0) * 100}%` }
          : orientation === "horizontal"
          ? {
              left: `${getThumbPercent(0) * 100}%`,
              width: `${
                Math.abs(getThumbPercent(0) - getThumbPercent(1)) * 100
              }%`,
            }
          : {
              bottom: `${getThumbPercent(0) * 100}%`,
              height: `${
                Math.abs(getThumbPercent(0) - getThumbPercent(1)) * 100
              }%`,
            }
      }
    />
  );
}

export interface SliderHeaderProps extends React.ComponentProps<"div"> {}

export function SliderHeader({ className, ...props }: SliderHeaderProps) {
  return (
    <div
      {...props}
      data-slot="slider-header"
      className={SliderStyles.Header({ className })}
    />
  );
}
