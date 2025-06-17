"use client";

import {
  FolderIcon,
  ForwardIcon,
  type LucideIcon,
  MoreHorizontalIcon,
  Trash2Icon,
} from "lucide-react";

import { Menu } from "~/components/ui/menu";
import { Popover } from "~/components/ui/popover";
import { Sidebar, useSidebar } from "~/components/ui/sidebar";

interface NavProjectsProps {
  projects: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
}

export function NavProjects({ projects }: NavProjectsProps) {
  const { isMobile } = useSidebar();

  return (
    <Sidebar.Group className="group-data-[collapsible=icon]:hidden">
      <Sidebar.GroupLabel>Projects</Sidebar.GroupLabel>
      <Sidebar.Menu>
        {projects.map((item) => (
          <Sidebar.MenuItem key={item.name}>
            <Sidebar.MenuLink href={item.url}>
              <item.icon />
              <span>{item.name}</span>
            </Sidebar.MenuLink>
            <Menu.Root>
              <Sidebar.MenuAction showOnHover>
                <MoreHorizontalIcon />
                <span className="sr-only">More</span>
              </Sidebar.MenuAction>

              <Popover.Content
                placement={isMobile ? "bottom end" : "right top"}
              >
                <Menu.Content className="w-48 rounded-lg">
                  <Menu.Item>
                    <FolderIcon className="text-muted-foreground" />
                    <span>View Project</span>
                  </Menu.Item>
                  <Menu.Item>
                    <ForwardIcon className="text-muted-foreground" />
                    <span>Share Project</span>
                  </Menu.Item>
                  <Menu.Separator />
                  <Menu.Item>
                    <Trash2Icon className="text-muted-foreground" />
                    <span>Delete Project</span>
                  </Menu.Item>
                </Menu.Content>
              </Popover.Content>
            </Menu.Root>
          </Sidebar.MenuItem>
        ))}
        <Sidebar.MenuItem>
          <Sidebar.MenuButton className="text-sidebar-foreground/70">
            <MoreHorizontalIcon className="text-sidebar-foreground/70" />
            <span>More</span>
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
      </Sidebar.Menu>
    </Sidebar.Group>
  );
}
