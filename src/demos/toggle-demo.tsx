import {
  BoldIcon,
  BookmarkIcon,
  ItalicIcon,
  UnderlineIcon,
} from "lucide-react";

import { Toggle } from "~/components/ui/toggle";

export function ToggleDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Toggle aria-label="Toggle italic">
        <BoldIcon />
      </Toggle>
      <Toggle aria-label="Toggle italic" variant="default">
        <UnderlineIcon />
      </Toggle>
      <Toggle aria-label="Toggle italic" variant="default" isDisabled>
        Disabled
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle italic">
        <ItalicIcon />
        Italic
      </Toggle>
      <Toggle
        aria-label="Toggle book"
        className="selected:[&_svg]:fill-accent-foreground"
      >
        <BookmarkIcon />
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle italic" size="sm">
        Small
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle italic" size="lg">
        Large
      </Toggle>
    </div>
  );
}
