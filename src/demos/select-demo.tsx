"use client";

import {
  ChartBarIcon,
  ChartLineIcon,
  ChartPieIcon,
  CircleDashedIcon,
} from "lucide-react";
import { Text } from "react-aria-components";
import { ListboxItem, ListboxRoot } from "~/components/ui/list-box";
import { PopoverContent } from "~/components/ui/popover";

import { SelectRoot, SelectTrigger, SelectValue } from "~/components/ui/select";

export function SelectDemo() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <SelectRoot aria-label="Fruits" placeholder="Select a fruit">
        <SelectTrigger className="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <PopoverContent>
          <ListboxRoot>
            {/* <SelectLabel>Fruits</SelectLabel> */}
            <ListboxItem id="apple">Apple</ListboxItem>
            <ListboxItem id="banana">Banana</ListboxItem>
            <ListboxItem id="blueberry">Blueberry</ListboxItem>
            <ListboxItem id="grapes" isDisabled>
              Grapes
            </ListboxItem>
            <ListboxItem id="pineapple">Pineapple</ListboxItem>
          </ListboxRoot>
        </PopoverContent>
      </SelectRoot>

      <SelectRoot aria-label="Large List" placeholder="Large List">
        <SelectTrigger className="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <PopoverContent>
          <ListboxRoot
            items={Array.from({ length: 100 }, (_, i) => ({ id: i }))}
          >
            {({ id }) => <ListboxItem id={id}>Item {id}</ListboxItem>}
          </ListboxRoot>
        </PopoverContent>
      </SelectRoot>

      <SelectRoot aria-label="Fruits" placeholder="Disabled" isDisabled>
        <SelectTrigger className="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <PopoverContent>
          <ListboxRoot>
            <ListboxItem id="apple">Apple</ListboxItem>
            <ListboxItem id="banana">Banana</ListboxItem>
            <ListboxItem id="blueberry">Blueberry</ListboxItem>
            <ListboxItem id="grapes" isDisabled>
              Grapes
            </ListboxItem>
            <ListboxItem id="pineapple">Pineapple</ListboxItem>
          </ListboxRoot>
        </PopoverContent>
      </SelectRoot>

      <SelectRoot aria-label="Charts" placeholder="With Icon">
        <SelectTrigger className="w-[180px]">
          <SelectValue>
            {(values) => (
              <>
                {values.isPlaceholder && (
                  <CircleDashedIcon className="text-muted-foreground" />
                )}
                {values.defaultChildren}
              </>
            )}
          </SelectValue>
        </SelectTrigger>
        <PopoverContent>
          <ListboxRoot>
            <ListboxItem id="line">
              <ChartLineIcon />
              <Text slot="label">Line</Text>
            </ListboxItem>
            <ListboxItem id="bar">
              <ChartBarIcon />
              <Text slot="label">Bar</Text>
            </ListboxItem>
            <ListboxItem id="pie">
              <ChartPieIcon />
              <Text slot="label">Pie</Text>
            </ListboxItem>
          </ListboxRoot>
        </PopoverContent>
      </SelectRoot>
    </div>
  );
}
