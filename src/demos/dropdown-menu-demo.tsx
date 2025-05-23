"use client";

import {
  BadgeCheckIcon,
  BellIcon,
  ChevronsUpDownIcon,
  CreditCardIcon,
  LogOut,
  LogOutIcon,
  MoreHorizontalIcon,
  PencilIcon,
  Settings2Icon,
  ShareIcon,
  SparklesIcon,
  TrashIcon,
  UserIcon,
} from "lucide-react";
import { useState } from "react";
import type { Selection } from "react-aria-components";
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
} from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Keyboard } from "~/components/ui/keyboard";
import {
  // MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  // MenuGroup,
  MenuItem,
  MenuLabel,
  MenuRoot,
  MenuSeparator,
  MenuSub,
} from "~/components/ui/menu";
import { PopoverContent } from "~/components/ui/popover";

export function DropdownMenuDemo() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <MenuSimple />
      <MenuCheckboxes />
      <MenuRadioGroupDemo />
      <MenuWithAvatar />
      <MenuAvatarOnly />
      <MenuIconColor />
    </div>
  );
}

function MenuSimple() {
  return (
    <MenuRoot>
      <Button variant="outline">Open</Button>

      <PopoverContent placement="bottom start">
        <MenuContent className="w-56">
          <MenuLabel>My Account</MenuLabel>
          <MenuGroup>
            <MenuItem textValue="Profile">
              Profile
              <Keyboard variant="menu">⇧⌘P</Keyboard>
            </MenuItem>
            <MenuItem textValue="Billing">
              Billing
              <Keyboard variant="menu">⌘B</Keyboard>
            </MenuItem>
            <MenuItem textValue="Settings">
              Settings
              <Keyboard variant="menu">⌘S</Keyboard>
            </MenuItem>
            <MenuItem textValue="Keyboard shortcuts">
              Keyboard shortcuts
              <Keyboard variant="menu">⌘K</Keyboard>
            </MenuItem>
          </MenuGroup>
          <MenuSeparator />
          <MenuGroup>
            <MenuItem textValue="Team">Team</MenuItem>
            <MenuSub>
              <MenuItem textValue="Invite users">Invite users</MenuItem>
              <PopoverContent>
                <MenuContent>
                  <MenuItem textValue="Email">Email</MenuItem>
                  <MenuItem textValue="Message">Message</MenuItem>
                  <MenuSeparator />
                  <MenuItem textValue="More">More...</MenuItem>
                </MenuContent>
              </PopoverContent>
            </MenuSub>
            <MenuItem textValue="New Team">
              New Team
              <Keyboard variant="menu">⌘+T</Keyboard>
            </MenuItem>
          </MenuGroup>
          <MenuSeparator />
          <MenuItem>GitHub</MenuItem>
          <MenuItem>Support</MenuItem>
          <MenuItem isDisabled>API</MenuItem>
          <MenuSeparator />
          <MenuItem textValue="Log out">
            Log out
            <Keyboard variant="menu">⇧⌘Q</Keyboard>
          </MenuItem>
        </MenuContent>
      </PopoverContent>
    </MenuRoot>
  );
}

function MenuCheckboxes() {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));

  return (
    <MenuRoot>
      <Button variant="outline">Checkboxes</Button>

      <PopoverContent placement="bottom start">
        <MenuContent className="w-56">
          <MenuGroup>
            <MenuLabel>Account</MenuLabel>
            <MenuItem>
              <UserIcon /> Profile
            </MenuItem>
            <MenuItem>
              <CreditCardIcon /> Billing
            </MenuItem>
            <MenuItem>
              <Settings2Icon /> Settings
            </MenuItem>
          </MenuGroup>
          <MenuSeparator />
          <MenuGroup
            selectionMode="multiple"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
          >
            <MenuLabel>Appearance</MenuLabel>
            <MenuItem>Status Bar</MenuItem>
            <MenuItem isDisabled>Activity Bar</MenuItem>
            <MenuItem>Panel</MenuItem>
          </MenuGroup>
          <MenuSeparator />
          <MenuGroup>
            <MenuItem>
              <LogOutIcon /> Sign Out
            </MenuItem>
          </MenuGroup>
        </MenuContent>
      </PopoverContent>
    </MenuRoot>
  );
}

function MenuRadioGroupDemo() {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));

  return (
    <MenuRoot>
      <Button variant="outline">Radio Group</Button>

      <PopoverContent placement="bottom start">
        <MenuContent className="w-56">
          <MenuLabel inset>Panel Position</MenuLabel>
          <MenuGroup
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
          >
            <MenuItem>Top</MenuItem>
            <MenuItem>Bottom</MenuItem>
            <MenuItem isDisabled>Right</MenuItem>
          </MenuGroup>
        </MenuContent>
      </PopoverContent>
    </MenuRoot>
  );
}

function MenuWithAvatar() {
  return (
    <MenuRoot>
      <Button
        variant="outline"
        className="h-12 justify-start px-2 md:max-w-[200px]"
      >
        <AvatarRoot>
          <AvatarImage src="https://github.com/shadcn.png" alt="Shadcn" />
          <AvatarFallback className="rounded-lg">CN</AvatarFallback>
        </AvatarRoot>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">shadcn</span>
          <span className="truncate text-muted-foreground text-xs">
            shadcn@example.com
          </span>
        </div>
        <ChevronsUpDownIcon className="ml-auto text-muted-foreground" />
      </Button>

      <PopoverContent placement="bottom start">
        <MenuContent className="w-(--radix-dropdown-menu-trigger-width) min-w-56">
          <MenuLabel className="p-0 font-normal">
            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <AvatarRoot>
                <AvatarImage src="https://github.com/shadcn.png" alt="Shadcn" />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </AvatarRoot>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">shadcn</span>
                <span className="truncate text-muted-foreground text-xs">
                  shadcn@example.com
                </span>
              </div>
            </div>
          </MenuLabel>
          <MenuSeparator />
          <MenuGroup>
            <MenuItem>
              <SparklesIcon />
              Upgrade to Pro
            </MenuItem>
          </MenuGroup>
          <MenuSeparator />
          <MenuGroup>
            <MenuItem>
              <BadgeCheckIcon />
              Account
            </MenuItem>
            <MenuItem>
              <CreditCardIcon />
              Billing
            </MenuItem>
            <MenuItem>
              <BellIcon />
              Notifications
            </MenuItem>
          </MenuGroup>
          <MenuSeparator />
          <MenuItem>
            <LogOut />
            Sign Out
          </MenuItem>
        </MenuContent>
      </PopoverContent>
    </MenuRoot>
  );
}

function MenuAvatarOnly() {
  return (
    <MenuRoot>
      <Button variant="outline" className="size-8 rounded-full border-none p-0">
        <AvatarRoot>
          <AvatarImage src="https://github.com/leerob.png" alt="leerob" />
          <AvatarFallback className="rounded-lg">LR</AvatarFallback>
        </AvatarRoot>
      </Button>

      <PopoverContent placement="bottom start">
        <MenuContent className="w-(--radix-dropdown-menu-trigger-width) min-w-56">
          <MenuLabel className="p-0 font-normal">
            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <AvatarRoot>
                <AvatarImage src="https://github.com/leerob.png" alt="leerob" />
                <AvatarFallback className="rounded-lg">LR</AvatarFallback>
              </AvatarRoot>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">leerob</span>
                <span className="truncate text-muted-foreground text-xs">
                  leerob@example.com
                </span>
              </div>
            </div>
          </MenuLabel>
          <MenuSeparator />
          <MenuGroup>
            <MenuItem>
              <SparklesIcon />
              Upgrade to Pro
            </MenuItem>
          </MenuGroup>
          <MenuSeparator />
          <MenuGroup>
            <MenuItem>
              <BadgeCheckIcon />
              Account
            </MenuItem>
            <MenuItem>
              <CreditCardIcon />
              Billing
            </MenuItem>
            <MenuItem>
              <BellIcon />
              Notifications
            </MenuItem>
          </MenuGroup>
          <MenuSeparator />
          <MenuItem>
            <LogOut />
            Sign Out
          </MenuItem>
        </MenuContent>
      </PopoverContent>
    </MenuRoot>
  );
}

function MenuIconColor() {
  return (
    <MenuRoot>
      <Button variant="ghost" size="icon">
        <MoreHorizontalIcon />
        <span className="sr-only">Toggle menu</span>
      </Button>

      <PopoverContent placement="bottom start">
        <MenuContent>
          <MenuGroup className="*:data-[slot=dropdown-menu-item]:[&>svg]:text-muted-foreground">
            <MenuItem>
              <PencilIcon />
              Edit
            </MenuItem>
            <MenuItem>
              <ShareIcon />
              Share
            </MenuItem>
            <MenuSeparator />
            <MenuItem variant="destructive">
              <TrashIcon />
              Delete
            </MenuItem>
          </MenuGroup>
        </MenuContent>
      </PopoverContent>
    </MenuRoot>
  );
}
