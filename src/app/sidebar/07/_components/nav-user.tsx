"use client";

import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react";

import { Avatar } from "~/components/ui/avatar";
import { Menu } from "~/components/ui/menu";
import { Popover } from "~/components/ui/popover";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "~/components/ui/sidebar/sidebar";

interface NavUserProps {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}

export function NavUser({ user }: NavUserProps) {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Menu.Root>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <Avatar.Root className="size-8 rounded-lg">
              <Avatar.Image src={user.avatar} alt={user.name} />
              <Avatar.Fallback className="rounded-lg">CN</Avatar.Fallback>
            </Avatar.Root>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="truncate text-xs">{user.email}</span>
            </div>
            <ChevronsUpDown className="ml-auto size-4" />
          </SidebarMenuButton>
          <Popover.Content placement={isMobile ? "bottom end" : "right"}>
            <Menu.Content className="min-w-56 rounded-lg">
              <Menu.Label className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar.Root className="size-8 rounded-lg">
                    <Avatar.Image src={user.avatar} alt={user.name} />
                    <Avatar.Fallback className="rounded-lg">CN</Avatar.Fallback>
                  </Avatar.Root>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{user.name}</span>
                    <span className="truncate text-xs">{user.email}</span>
                  </div>
                </div>
              </Menu.Label>
              <Menu.Separator />
              <Menu.Group>
                <Menu.Item>
                  <Sparkles />
                  Upgrade to Pro
                </Menu.Item>
              </Menu.Group>
              <Menu.Separator />
              <Menu.Group>
                <Menu.Item>
                  <BadgeCheck />
                  Account
                </Menu.Item>
                <Menu.Item>
                  <CreditCard />
                  Billing
                </Menu.Item>
                <Menu.Item>
                  <Bell />
                  Notifications
                </Menu.Item>
              </Menu.Group>
              <Menu.Separator />
              <Menu.Item variant="destructive">
                <LogOut />
                Log out
              </Menu.Item>
            </Menu.Content>
          </Popover.Content>
        </Menu.Root>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
