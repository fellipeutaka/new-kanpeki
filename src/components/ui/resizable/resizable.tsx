"use client";

import { GripVerticalIcon } from "lucide-react";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { ResizableStyles } from "./styles";

export interface ResizableRootProps
  extends React.ComponentProps<typeof PanelGroup> {}

export function ResizableRoot({ className, ...props }: ResizableRootProps) {
  return (
    <PanelGroup
      data-slot="resizable-root"
      className={ResizableStyles.Root({ className })}
      {...props}
    />
  );
}

export interface ResizablePanelProps
  extends React.ComponentProps<typeof Panel> {}

export function ResizablePanel(props: ResizablePanelProps) {
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
      className={ResizableStyles.Handle({ className })}
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
