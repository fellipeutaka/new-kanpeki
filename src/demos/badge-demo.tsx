import { AlertCircleIcon, ArrowRightIcon, CheckIcon } from "lucide-react";
import { Badge } from "~/components/ui/badge/badge";
import { BadgeStyles } from "~/components/ui/badge/styles";

export function BadgeDemo() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex w-full flex-wrap gap-2">
        <Badge>Badge</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="danger">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="outline">
          <CheckIcon />
          Badge
        </Badge>
        <Badge variant="danger">
          <AlertCircleIcon />
          Alert
        </Badge>
        <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
          8
        </Badge>
        <Badge
          className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
          variant="danger"
        >
          99
        </Badge>
        <Badge
          className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
          variant="outline"
        >
          20+
        </Badge>
      </div>
      <div className="flex w-full flex-wrap gap-2">
        <a className={BadgeStyles()} href="/">
          Link <ArrowRightIcon />
        </a>
        <a className={BadgeStyles({ variant: "secondary" })} href="/">
          Link <ArrowRightIcon />
        </a>
        <a className={BadgeStyles({ variant: "danger" })} href="/">
          Link <ArrowRightIcon />
        </a>
        <a className={BadgeStyles({ variant: "outline" })} href="/">
          Link <ArrowRightIcon />
        </a>
      </div>
    </div>
  );
}
