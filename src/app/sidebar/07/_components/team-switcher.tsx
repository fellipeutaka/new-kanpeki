import { ChevronsUpDownIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

import { Keyboard } from "~/components/ui/keyboard";
import { Menu } from "~/components/ui/menu";
import { Popover } from "~/components/ui/popover";
import { Sidebar, useSidebar } from "~/components/ui/sidebar";

interface TeamSwitcherProps {
  teams: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
}

export function TeamSwitcher({ teams }: TeamSwitcherProps) {
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = useState(teams[0]);

  if (!activeTeam) {
    return null;
  }

  return (
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <Menu.Root>
          <Sidebar.MenuButton size="lg">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <activeTeam.logo className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{activeTeam.name}</span>
              <span className="truncate text-xs">{activeTeam.plan}</span>
            </div>
            <ChevronsUpDownIcon className="ml-auto" />
          </Sidebar.MenuButton>

          <Popover.Content placement={isMobile ? "bottom" : "right"}>
            <Menu.Content className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg">
              <Menu.Label className="text-muted-foreground text-xs">
                Teams
              </Menu.Label>
              {teams.map((team, index) => (
                <Menu.Item
                  key={team.name}
                  onAction={() => setActiveTeam(team)}
                  className="gap-2 p-2"
                >
                  <div className="flex size-6 items-center justify-center rounded-md border">
                    <team.logo className="size-3.5 shrink-0" />
                  </div>
                  {team.name}
                  <Keyboard variant="menu">⌘{index + 1}</Keyboard>
                </Menu.Item>
              ))}
              <Menu.Separator />
              <Menu.Item className="gap-2 p-2">
                <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                  <PlusIcon className="size-4" />
                </div>
                <div className="font-medium text-muted-foreground">
                  Add team
                </div>
              </Menu.Item>
            </Menu.Content>
          </Popover.Content>
        </Menu.Root>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  );
}
