"use client";

import {
  Calculator,
  Calendar,
  CreditCard,
  SearchIcon,
  Settings,
  Smile,
  User,
} from "lucide-react";

import { useEffect, useState } from "react";
import { Autocomplete } from "~/components/ui/autocomplete";
import {
  DialogContent,
  DialogModal,
  DialogOverlay,
  DialogRoot,
} from "~/components/ui/dialog";
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "~/components/ui/dropdown-menu";
import {
  SearchFieldButton,
  SearchFieldInput,
  SearchFieldRoot,
} from "~/components/ui/search-field";

export function CommandDemo() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    document.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          setIsOpen((isOpen) => !isOpen);
        }
      },
      {
        signal: controller.signal,
      }
    );

    return () => controller.abort();
  }, []);

  return (
    <DialogRoot isOpen={isOpen} onOpenChange={setIsOpen}>
      <p className="text-muted-foreground text-sm">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-medium font-mono text-[10px] text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p>

      <DialogOverlay>
        <DialogModal>
          <DialogContent>
            <Autocomplete>
              <SearchFieldRoot aria-label="Search" autoFocus>
                <SearchIcon />
                <SearchFieldInput placeholder="Type a command or search..." />
                <SearchFieldButton />
              </SearchFieldRoot>

              <DropdownMenuContent renderEmptyState={() => "No results found."}>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Suggestions</DropdownMenuLabel>

                  <DropdownMenuItem textValue="Calendar">
                    <Calendar />
                    <span>Calendar</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem textValue="Search Emoji">
                    <Smile />
                    <span>Search Emoji</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem textValue="Calculator">
                    <Calculator />
                    <span>Calculator</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Settings</DropdownMenuLabel>

                  <DropdownMenuItem textValue="Profile">
                    <User />
                    <span>Profile</span>
                    <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem textValue="Billing">
                    <CreditCard />
                    <span>Billing</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem textValue="Settings">
                    <Settings />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </Autocomplete>
          </DialogContent>
        </DialogModal>
      </DialogOverlay>
    </DialogRoot>
  );
}
