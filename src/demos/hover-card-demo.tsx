import { CalendarIcon } from "lucide-react";

import { Avatar } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button/button";
import { Tooltip } from "~/components/ui/tooltip";

export function HoverCardDemo() {
  return (
    <Tooltip.Root delay={700}>
      <Button variant="link">@nextjs</Button>

      <Tooltip.Content
        offset={4}
        className="w-80 p-4 shadow-md"
        placement="right"
      >
        <div className="flex justify-between gap-4">
          <Avatar.Root>
            <Avatar.Image src="https://github.com/vercel.png" />
            <Avatar.Fallback>VC</Avatar.Fallback>
          </Avatar.Root>
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold text-sm">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="mt-1 flex items-center gap-2">
              <CalendarIcon className="size-4 text-muted-foreground" />{" "}
              <span className="text-muted-foreground text-xs">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </Tooltip.Content>
    </Tooltip.Root>
  );
}
