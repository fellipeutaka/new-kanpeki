import { ArrowRightIcon, Loader2Icon, SendIcon } from "lucide-react";
import { ButtonStyles } from "~/components/ui/button";
import { Link } from "~/components/ui/link/link";

export function LinkDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Link href="https://github.com/fellipeutaka">Link</Link>
        <Link href="https://github.com/fellipeutaka" variant="foreground">
          Foreground
        </Link>
        <Link href="https://github.com/fellipeutaka" variant="primary">
          Primary
        </Link>
        <Link href="https://github.com/fellipeutaka" variant="unstyled">
          Unstyled
        </Link>
      </div>
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Link href="https://github.com/fellipeutaka" underline="always">
          Underline (Always)
        </Link>
        <Link href="https://github.com/fellipeutaka" underline="hover">
          Underline (Hover)
        </Link>
      </div>
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Link
          href="https://github.com/fellipeutaka"
          variant="unstyled"
          className={ButtonStyles()}
        >
          Link Button
        </Link>
        <Link
          href="https://github.com/fellipeutaka"
          variant="unstyled"
          className={ButtonStyles({ variant: "outline" })}
        >
          Link Button Outline
        </Link>
        <Link
          href="https://github.com/fellipeutaka"
          variant="unstyled"
          className={ButtonStyles({ variant: "ghost" })}
        >
          Link Button Ghost
        </Link>
        <Link
          href="https://github.com/fellipeutaka"
          variant="unstyled"
          className={ButtonStyles({ variant: "destructive" })}
        >
          Link Button Destructive
        </Link>
        <Link
          href="https://github.com/fellipeutaka"
          variant="unstyled"
          className={ButtonStyles({ variant: "secondary" })}
        >
          Link Button Secondary
        </Link>
        <Link
          href="https://github.com/fellipeutaka"
          variant="unstyled"
          className={ButtonStyles({ variant: "link" })}
        >
          Link Button Link
        </Link>
        <Link
          href="https://github.com/fellipeutaka"
          variant="unstyled"
          className={ButtonStyles({ variant: "outline" })}
        >
          <SendIcon /> Send
        </Link>
        <Link
          href="https://github.com/fellipeutaka"
          variant="unstyled"
          className={ButtonStyles({ variant: "outline" })}
        >
          Learn More <ArrowRightIcon />
        </Link>
        <Link
          href="https://github.com/fellipeutaka"
          variant="unstyled"
          className={ButtonStyles({ variant: "outline" })}
          isDisabled
        >
          <Loader2Icon className="animate-spin" />
          Please wait
        </Link>
      </div>
    </div>
  );
}
