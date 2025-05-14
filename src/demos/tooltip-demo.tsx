import { InfoIcon } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  TooltipArrow,
  TooltipContent,
  TooltipRoot,
} from "~/components/ui/tooltip";

const positions = ["top", "right", "bottom", "left"] as const;

export function TooltipDemo() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <TooltipRoot>
        <Button variant="outline">Hover</Button>
        <TooltipContent offset={8}>
          <p>Add to library</p>

          <TooltipArrow />
        </TooltipContent>
      </TooltipRoot>
      <div className="flex gap-2">
        {positions.map((side) => (
          <TooltipRoot key={side}>
            <Button variant="outline" className="capitalize">
              {side}
            </Button>
            <TooltipContent offset={8} placement={side}>
              <p>Add to library</p>

              <TooltipArrow />
            </TooltipContent>
          </TooltipRoot>
        ))}
      </div>
      <TooltipRoot>
        <Button variant="ghost" size="icon">
          <InfoIcon />
          <span className="sr-only">Info</span>
        </Button>
        <TooltipContent offset={8}>
          To learn more about how this works, check out the docs. If you have
          any questions, please reach out to us.
          <TooltipArrow />
        </TooltipContent>
      </TooltipRoot>
    </div>
  );
}
