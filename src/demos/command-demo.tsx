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
import { Autocomplete } from "~/components/ui/autocomplete";
import { Dialog } from "~/components/ui/dialog";
import { Keyboard } from "~/components/ui/keyboard";
import { Menu } from "~/components/ui/menu";
import { SearchField } from "~/components/ui/search-field";

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
    <Dialog.Root isOpen={isOpen} onOpenChange={setIsOpen}>
      <p className="text-muted-foreground text-sm">
        Press{" "}
        <Keyboard>
          <span className="text-xs">⌘</span>J
        </Keyboard>
      </p>

      <Dialog.Overlay>
        <Dialog.Modal className="bg-popover p-0 text-popover-foreground">
          <Dialog.Content className="gap-0">
            <Autocomplete>
              <SearchField.Root className="h-12" aria-label="Search" autoFocus>
                <SearchIcon />
                <SearchField.Input placeholder="Type a command or search..." />
                <SearchField.Button />
              </SearchField.Root>

              <Menu.Content
                variant="command"
                renderEmptyState={() => (
                  <Menu.Empty>No results found.</Menu.Empty>
                )}
              >
                <Menu.Group>
                  <Menu.Label>Suggestions</Menu.Label>

                  <Menu.Item textValue="Calendar">
                    <CalendarIcon />
                    <span>Calendar</span>
                  </Menu.Item>
                  <Menu.Item textValue="Search Emoji">
                    <SmileIcon />
                    <span>Search Emoji</span>
                  </Menu.Item>
                  <Menu.Item textValue="Calculator">
                    <CalculatorIcon />
                    <span>Calculator</span>
                  </Menu.Item>
                </Menu.Group>
                <Menu.Separator />
                <Menu.Group>
                  <Menu.Label>Settings</Menu.Label>

                  <Menu.Item textValue="Profile">
                    <UserIcon />
                    <span>Profile</span>
                    <Keyboard variant="menu">⌘P</Keyboard>
                  </Menu.Item>
                  <Menu.Item textValue="Billing">
                    <CreditCardIcon />
                    <span>Billing</span>
                    <Keyboard variant="menu">⌘B</Keyboard>
                  </Menu.Item>
                  <Menu.Item textValue="Settings">
                    <SettingsIcon />
                    <span>Settings</span>
                    <Keyboard variant="menu">⌘S</Keyboard>
                  </Menu.Item>
                </Menu.Group>
              </Menu.Content>
            </Autocomplete>
          </Dialog.Content>
        </Dialog.Modal>
      </Dialog.Overlay>
    </Dialog.Root>
  );
}
