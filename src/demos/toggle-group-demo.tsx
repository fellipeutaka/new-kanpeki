import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";

export function ToggleGroupDemo() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <ToggleGroup selectionMode="multiple">
        <ToggleGroupItem id="bold" aria-label="Toggle bold">
          <BoldIcon />
        </ToggleGroupItem>
        <ToggleGroupItem id="italic" aria-label="Toggle italic">
          <ItalicIcon />
        </ToggleGroupItem>
        <ToggleGroupItem id="strikethrough" aria-label="Toggle strikethrough">
          <UnderlineIcon />
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup
        variant="outline"
        selectionMode="single"
        defaultSelectedKeys={["all"]}
        className="*:data-[slot=toggle-group-item]:w-20"
      >
        <ToggleGroupItem id="all" aria-label="Toggle all">
          All
        </ToggleGroupItem>
        <ToggleGroupItem id="missed" aria-label="Toggle missed">
          Missed
        </ToggleGroupItem>
      </ToggleGroup>

      <ToggleGroup
        variant="outline"
        selectionMode="single"
        size="sm"
        defaultSelectedKeys={["last-24-hours"]}
        className="*:data-[slot=toggle-group-item]:px-3"
      >
        <ToggleGroupItem id="last-24-hours" aria-label="Toggle last 24 hours">
          Last 24 hours
        </ToggleGroupItem>
        <ToggleGroupItem id="last-7-days" aria-label="Toggle last 7 days">
          Last 7 days
        </ToggleGroupItem>
      </ToggleGroup>

      <ToggleGroup
        selectionMode="single"
        size="sm"
        defaultSelectedKeys={["last-24-hours"]}
        className="*:data-[slot=toggle-group-item]:px-3"
      >
        <ToggleGroupItem id="last-24-hours" aria-label="Toggle last 24 hours">
          Last 24 hours
        </ToggleGroupItem>
        <ToggleGroupItem id="last-7-days" aria-label="Toggle last 7 days">
          Last 7 days
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
