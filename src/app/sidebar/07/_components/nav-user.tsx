"use client";

import {
  BadgeCheckIcon,
  BellIcon,
  ChevronsUpDownIcon,
  CreditCardIcon,
  LogOutIcon,
  SparklesIcon,
} from "lucide-react";

import { Avatar } from "~/components/ui/avatar";
import { Menu } from "~/components/ui/menu";
import { Popover } from "~/components/ui/popover";
import { Sidebar, useSidebar } from "~/components/ui/sidebar";

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
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <Menu.Root>
          <Sidebar.MenuButton
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
            <ChevronsUpDownIcon className="ml-auto size-4" />
          </Sidebar.MenuButton>
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
                  <SparklesIcon />
                  Upgrade to Pro
                </Menu.Item>
              </Menu.Group>
              <Menu.Separator />
              <Menu.Group>
                <Menu.Item>
                  <BadgeCheckIcon />
                  Account
                </Menu.Item>
                <Menu.Item>
                  <CreditCardIcon />
                  Billing
                </Menu.Item>
                <Menu.Item>
                  <BellIcon />
                  Notifications
                </Menu.Item>
              </Menu.Group>
              <Menu.Separator />
              <Menu.Item variant="destructive">
                <LogOutIcon />
                Log out
              </Menu.Item>
            </Menu.Content>
          </Popover.Content>
        </Menu.Root>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  );
}
