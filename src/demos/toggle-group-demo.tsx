import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import { ToggleGroup } from "~/components/ui/toggle-group";

export function ToggleGroupDemo() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <ToggleGroup.Root selectionMode="multiple">
        <ToggleGroup.Item id="bold" aria-label="Toggle bold">
          <BoldIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item id="italic" aria-label="Toggle italic">
          <ItalicIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item id="strikethrough" aria-label="Toggle strikethrough">
          <UnderlineIcon />
        </ToggleGroup.Item>
      </ToggleGroup.Root>

      <ToggleGroup.Root
        variant="outline"
        selectionMode="single"
        defaultSelectedKeys={["all"]}
        className="*:data-[slot=toggle-group-item]:w-20"
      >
        <ToggleGroup.Item id="all" aria-label="Toggle all">
          All
        </ToggleGroup.Item>
        <ToggleGroup.Item id="missed" aria-label="Toggle missed">
          Missed
        </ToggleGroup.Item>
      </ToggleGroup.Root>

      <ToggleGroup.Root
        variant="outline"
        selectionMode="single"
        size="sm"
        defaultSelectedKeys={["last-24-hours"]}
        className="*:data-[slot=toggle-group-item]:px-3"
      >
        <ToggleGroup.Item id="last-24-hours" aria-label="Toggle last 24 hours">
          Last 24 hours
        </ToggleGroup.Item>
        <ToggleGroup.Item id="last-7-days" aria-label="Toggle last 7 days">
          Last 7 days
        </ToggleGroup.Item>
      </ToggleGroup.Root>

      <ToggleGroup.Root
        selectionMode="single"
        size="sm"
        defaultSelectedKeys={["last-24-hours"]}
        className="*:data-[slot=toggle-group-item]:px-3"
      >
        <ToggleGroup.Item id="last-24-hours" aria-label="Toggle last 24 hours">
          Last 24 hours
        </ToggleGroup.Item>
        <ToggleGroup.Item id="last-7-days" aria-label="Toggle last 7 days">
          Last 7 days
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
  );
}
