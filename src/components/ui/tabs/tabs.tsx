"use client";

import {
  Tab,
  TabList,
  TabPanel,
  Tabs,
  composeRenderProps,
} from "react-aria-components";
import { TabsStyle } from "./styles";

export interface TabsRootProps extends React.ComponentProps<typeof Tabs> {}

export function TabsRoot({ className, ...props }: TabsRootProps) {
  return (
    <Tabs
      data-slot="tabs-root"
      className={composeRenderProps(className, (className) =>
        TabsStyle.Root({ className })
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
        TabsStyle.List({ className })
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
        TabsStyle.Trigger({ className })
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
        TabsStyle.Content({ className })
      )}
      {...props}
    />
  );
}
