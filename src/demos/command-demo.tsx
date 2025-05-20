"use client";

import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  SearchIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react";

import { useEffect, useState } from "react";
import { Keyboard } from "react-aria-components";
import { Autocomplete } from "~/components/ui/autocomplete";
import {
  DialogContent,
  DialogModal,
  DialogOverlay,
  DialogRoot,
} from "~/components/ui/dialog";
import {
  MenuContent,
  MenuEmpty,
  MenuGroup,
  MenuItem,
  MenuLabel,
  MenuSeparator,
  MenuShortcut,
} from "~/components/ui/menu";
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
        <Keyboard className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-medium font-mono text-[10px] text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </Keyboard>
      </p>

      <DialogOverlay>
        <DialogModal className="bg-popover p-0 text-popover-foreground">
          <DialogContent className="gap-0">
            <Autocomplete>
              <SearchFieldRoot className="h-12" aria-label="Search" autoFocus>
                <SearchIcon />
                <SearchFieldInput
                  className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Type a command or search..."
                />
                <SearchFieldButton />
              </SearchFieldRoot>

              <MenuContent
                className="max-h-[300px] border-none **:data-[slot=menu-item]:py-3 **:data-[slot=menu-label]:text-muted-foreground **:data-[slot=menu-label]:text-xs"
                renderEmptyState={() => (
                  <MenuEmpty>No results found.</MenuEmpty>
                )}
              >
                <MenuGroup>
                  <MenuLabel>Suggestions</MenuLabel>

                  <MenuItem textValue="Calendar">
                    <CalendarIcon />
                    <span>Calendar</span>
                  </MenuItem>
                  <MenuItem textValue="Search Emoji">
                    <SmileIcon />
                    <span>Search Emoji</span>
                  </MenuItem>
                  <MenuItem textValue="Calculator">
                    <CalculatorIcon />
                    <span>Calculator</span>
                  </MenuItem>
                </MenuGroup>
                <MenuSeparator />
                <MenuGroup>
                  <MenuLabel>Settings</MenuLabel>

                  <MenuItem textValue="Profile">
                    <UserIcon />
                    <span>Profile</span>
                    <MenuShortcut>⌘P</MenuShortcut>
                  </MenuItem>
                  <MenuItem textValue="Billing">
                    <CreditCardIcon />
                    <span>Billing</span>
                    <MenuShortcut>⌘B</MenuShortcut>
                  </MenuItem>
                  <MenuItem textValue="Settings">
                    <SettingsIcon />
                    <span>Settings</span>
                    <MenuShortcut>⌘S</MenuShortcut>
                  </MenuItem>
                </MenuGroup>
              </MenuContent>
            </Autocomplete>
          </DialogContent>
        </DialogModal>
      </DialogOverlay>
    </DialogRoot>
  );
}
