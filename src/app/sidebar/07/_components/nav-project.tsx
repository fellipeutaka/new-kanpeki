"use client";

import {
  Folder,
  Forward,
  type LucideIcon,
  MoreHorizontal,
  Trash2,
} from "lucide-react";

import { Menu } from "~/components/ui/menu";
import { Popover } from "~/components/ui/popover";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuLink,
  useSidebar,
} from "~/components/ui/sidebar/sidebar";

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
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Projects</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuLink href={item.url}>
              <item.icon />
              <span>{item.name}</span>
            </SidebarMenuLink>
            <Menu.Root>
              <SidebarMenuAction showOnHover>
                <MoreHorizontal />
                <span className="sr-only">More</span>
              </SidebarMenuAction>

              <Popover.Content
                placement={isMobile ? "bottom end" : "right top"}
              >
                <Menu.Content className="w-48 rounded-lg">
                  <Menu.Item>
                    <Folder className="text-muted-foreground" />
                    <span>View Project</span>
                  </Menu.Item>
                  <Menu.Item>
                    <Forward className="text-muted-foreground" />
                    <span>Share Project</span>
                  </Menu.Item>
                  <Menu.Separator />
                  <Menu.Item>
                    <Trash2 className="text-muted-foreground" />
                    <span>Delete Project</span>
                  </Menu.Item>
                </Menu.Content>
              </Popover.Content>
            </Menu.Root>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton className="text-sidebar-foreground/70">
            <MoreHorizontal className="text-sidebar-foreground/70" />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
