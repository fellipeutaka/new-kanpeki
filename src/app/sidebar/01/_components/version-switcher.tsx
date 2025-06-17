"use client";

import {
  CheckIcon,
  ChevronsUpDownIcon,
  GalleryVerticalEndIcon,
} from "lucide-react";
import { useState } from "react";
import { Menu } from "~/components/ui/menu";
import { Popover } from "~/components/ui/popover";
import { Sidebar } from "~/components/ui/sidebar";

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
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <Menu.Root>
          <Sidebar.MenuButton
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
          </Sidebar.MenuButton>

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
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  );
}
