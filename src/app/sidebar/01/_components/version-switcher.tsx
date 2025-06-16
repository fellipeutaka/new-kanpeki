"use client";

import {
  CheckIcon,
  ChevronsUpDownIcon,
  GalleryVerticalEndIcon,
} from "lucide-react";
import { useState } from "react";
import { Menu } from "~/components/ui/menu";
import { Popover } from "~/components/ui/popover";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar/sidebar";

export interface VersionSwitcherProps {
  versions: string[];
  defaultVersion: string;
}

export function VersionSwitcher({
  versions,
  defaultVersion,
}: VersionSwitcherProps) {
  const [selectedVersion, setSelectedVersion] = useState(defaultVersion);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Menu.Root>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <GalleryVerticalEndIcon className="size-4" />
            </div>
            <div className="flex flex-col gap-0.5 leading-none">
              <span className="font-medium">Documentation</span>
              <span className="">v{selectedVersion}</span>
            </div>
            <ChevronsUpDownIcon className="ml-auto" />
          </SidebarMenuButton>

          <Popover.Content>
            <Menu.Content>
              {versions.map((version) => (
                <Menu.Item
                  key={version}
                  onAction={() => setSelectedVersion(version)}
                >
                  v{version}{" "}
                  {version === selectedVersion && (
                    <CheckIcon className="ml-auto" />
                  )}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Popover.Content>
        </Menu.Root>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
