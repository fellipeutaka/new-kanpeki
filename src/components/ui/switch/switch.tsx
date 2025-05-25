"use client";

import { Switch, composeRenderProps } from "react-aria-components";
import { SwitchStyles } from "./styles";

export interface SwitchRootProps extends React.ComponentProps<typeof Switch> {}

export function SwitchRoot({ className, ...props }: SwitchRootProps) {
  return (
    <Switch
      {...props}
      data-slot="switch-root"
      className={composeRenderProps(className, (className) =>
        SwitchStyles.Root({
          className,
        })
      )}
    />
  );
}

export interface SwitchTrackProps extends React.ComponentProps<"span"> {}

export function SwitchTrack({ className, ...props }: SwitchTrackProps) {
  return (
    <span
      {...props}
      data-slot="switch-track"
      className={SwitchStyles.Track({ className })}
    />
  );
}

export interface SwitchThumbProps extends React.ComponentProps<"span"> {}

export function SwitchThumb({ className, ...props }: SwitchThumbProps) {
  return (
    <span
      {...props}
      data-slot="switch-thumb"
      className={SwitchStyles.Thumb({ className })}
    />
  );
}
