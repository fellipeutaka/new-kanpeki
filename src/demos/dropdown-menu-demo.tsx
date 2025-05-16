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
import {
  // DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  // DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
} from "~/components/ui/dropdown-menu";
import { PopoverContent } from "~/components/ui/popover";

export function DropdownMenuDemo() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <DropdownMenuSimple />
      <DropdownMenuCheckboxes />
      <DropdownMenuRadioGroupDemo />
      <DropdownMenuWithAvatar />
      <DropdownMenuAvatarOnly />
      <DropdownMenuIconColor />
    </div>
  );
}

function DropdownMenuSimple() {
  return (
    <DropdownMenuRoot>
      <Button variant="outline">Open</Button>

      <PopoverContent placement="bottom start">
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem textValue="Profile">
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem textValue="Billing">
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem textValue="Settings">
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem textValue="Keyboard shortcuts">
              Keyboard shortcuts
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem textValue="Team">Team</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuItem textValue="Invite users">
                Invite users
              </DropdownMenuItem>
              <PopoverContent>
                <DropdownMenuContent>
                  <DropdownMenuItem textValue="Email">Email</DropdownMenuItem>
                  <DropdownMenuItem textValue="Message">
                    Message
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem textValue="More">More...</DropdownMenuItem>
                </DropdownMenuContent>
              </PopoverContent>
            </DropdownMenuSub>
            <DropdownMenuItem textValue="New Team">
              New Team
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>GitHub</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuItem isDisabled>API</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem textValue="Log out">
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </PopoverContent>
    </DropdownMenuRoot>
  );
}

function DropdownMenuCheckboxes() {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));

  return (
    <DropdownMenuRoot>
      <Button variant="outline">Checkboxes</Button>

      <PopoverContent placement="bottom start">
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuItem>
              <UserIcon /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCardIcon /> Billing
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings2Icon /> Settings
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup
            selectionMode="multiple"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
          >
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuItem>Status Bar</DropdownMenuItem>
            <DropdownMenuItem isDisabled>Activity Bar</DropdownMenuItem>
            <DropdownMenuItem>Panel</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <LogOutIcon /> Sign Out
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </PopoverContent>
    </DropdownMenuRoot>
  );
}

function DropdownMenuRadioGroupDemo() {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));

  return (
    <DropdownMenuRoot>
      <Button variant="outline">Radio Group</Button>

      <PopoverContent placement="bottom start">
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel inset>Panel Position</DropdownMenuLabel>
          <DropdownMenuGroup
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
          >
            <DropdownMenuItem>Top</DropdownMenuItem>
            <DropdownMenuItem>Bottom</DropdownMenuItem>
            <DropdownMenuItem isDisabled>Right</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </PopoverContent>
    </DropdownMenuRoot>
  );
}

function DropdownMenuWithAvatar() {
  return (
    <DropdownMenuRoot>
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
        <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width) min-w-56">
          <DropdownMenuLabel className="p-0 font-normal">
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
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <SparklesIcon />
              Upgrade to Pro
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <BadgeCheckIcon />
              Account
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCardIcon />
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BellIcon />
              Notifications
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </PopoverContent>
    </DropdownMenuRoot>
  );
}

function DropdownMenuAvatarOnly() {
  return (
    <DropdownMenuRoot>
      <Button variant="outline" className="size-8 rounded-full border-none p-0">
        <AvatarRoot>
          <AvatarImage src="https://github.com/leerob.png" alt="leerob" />
          <AvatarFallback className="rounded-lg">LR</AvatarFallback>
        </AvatarRoot>
      </Button>

      <PopoverContent placement="bottom start">
        <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width) min-w-56">
          <DropdownMenuLabel className="p-0 font-normal">
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
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <SparklesIcon />
              Upgrade to Pro
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <BadgeCheckIcon />
              Account
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCardIcon />
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BellIcon />
              Notifications
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </PopoverContent>
    </DropdownMenuRoot>
  );
}

function DropdownMenuIconColor() {
  return (
    <DropdownMenuRoot>
      <Button variant="ghost" size="icon">
        <MoreHorizontalIcon />
        <span className="sr-only">Toggle menu</span>
      </Button>

      <PopoverContent placement="bottom start">
        <DropdownMenuContent>
          <DropdownMenuGroup className="*:data-[slot=dropdown-menu-item]:[&>svg]:text-muted-foreground">
            <DropdownMenuItem>
              <PencilIcon />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ShareIcon />
              Share
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <TrashIcon />
              Delete
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </PopoverContent>
    </DropdownMenuRoot>
  );
}
