"use client";

import {
  Tab,
  TabList,
  TabPanel,
  Tabs,
  composeRenderProps,
} from "react-aria-components";

import { cn } from "~/lib/cva";

export interface TabsRootProps extends React.ComponentProps<typeof Tabs> {}

export function TabsRoot({ className, ...props }: TabsRootProps) {
  return (
    <Tabs
      data-slot="tabs-root"
      className={composeRenderProps(className, (className) =>
        cn("flex flex-col gap-2", className)
      )}
      {...props}
    />
  );
}

export interface TabsListProps<T extends object>
  extends React.ComponentProps<typeof TabList<T>> {}

export function TabsList<T extends object>({
  className,
  ...props
}: TabsListProps<T>) {
  return (
    <TabList
      data-slot="tabs-list"
      className={composeRenderProps(className, (className) =>
        cn(
          "inline-flex h-9 w-fit items-center justify-center rounded-lg bg-muted p-[3px] text-muted-foreground",
          className
        )
      )}
      {...props}
    />
  );
}

export interface TabsTriggerProps extends React.ComponentProps<typeof Tab> {}

export function TabsTrigger({ className, ...props }: TabsTriggerProps) {
  return (
    <Tab
      data-slot="tabs-trigger"
      className={composeRenderProps(className, (className) =>
        cn(
          "inline-flex h-[calc(100%-1px)] flex-1 select-none items-center justify-center gap-1.5 whitespace-nowrap rounded-md border",
          "border-transparent px-2 py-1 font-medium text-foreground text-sm transition-[color,box-shadow]",
          "focus-visible:border-ring focus-visible:outline-1 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
          "disabled:pointer-events-none disabled:opacity-50",
          "selected:bg-background selected:shadow-sm",
          "dark:selected:border-input dark:selected:bg-input/30 dark:selected:text-foreground dark:text-muted-foreground",
          "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
          className
        )
      )}
      {...props}
    />
  );
}

export interface TabsContentProps
  extends React.ComponentProps<typeof TabPanel> {}

export function TabsContent({ className, ...props }: TabsContentProps) {
  return (
    <TabPanel
      data-slot="tabs-content"
      className={composeRenderProps(className, (className) =>
        cn("flex-1 outline-none", className)
      )}
      {...props}
    />
  );
}
