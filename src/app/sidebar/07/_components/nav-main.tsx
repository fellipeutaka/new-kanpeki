"use client";

import { ChevronRightIcon, type LucideIcon } from "lucide-react";

import { Collapsible } from "~/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "~/components/ui/sidebar/sidebar";

export interface NavMainProps {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}

export function NavMain({ items }: NavMainProps) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible.Root
            key={item.title}
            defaultExpanded={item.isActive}
            className="group"
          >
            <SidebarMenuItem>
              <SidebarMenuButton slot="trigger" tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
                <ChevronRightIcon className="ml-auto transition-transform duration-200 group-expanded:rotate-90" />
              </SidebarMenuButton>
              <Collapsible.Content>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton href={subItem.url}>
                        {subItem.title}
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </Collapsible.Content>
            </SidebarMenuItem>
          </Collapsible.Root>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
