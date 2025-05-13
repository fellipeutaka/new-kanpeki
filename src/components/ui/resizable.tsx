"use client";

import { GripVerticalIcon } from "lucide-react";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { cn } from "~/lib/cva";

export interface ResizablePanelGroupProps
  extends React.ComponentProps<typeof PanelGroup> {}

export function ResizablePanelGroup({
  className,
  ...props
}: ResizablePanelGroupProps) {
  return (
    <PanelGroup
      data-slot="resizable-panel-group"
      className={cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        className
      )}
      {...props}
    />
  );
}

export interface ResizablePanelProps
  extends React.ComponentProps<typeof Panel> {}

export function ResizablePanel({ ...props }: ResizablePanelProps) {
  return <Panel data-slot="resizable-panel" {...props} />;
}

export interface ResizableHandleProps
  extends React.ComponentProps<typeof PanelResizeHandle> {
  withHandle?: boolean;
}

export function ResizableHandle({
  withHandle,
  className,
  ...props
}: ResizableHandleProps) {
  return (
    <PanelResizeHandle
      data-slot="resizable-handle"
      className={cn(
        "after:-translate-x-1/2 data-[panel-group-direction=vertical]:after:-translate-y-1/2 relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="z-10 flex h-4 w-3 items-center justify-center rounded-xs border bg-border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </PanelResizeHandle>
  );
}
