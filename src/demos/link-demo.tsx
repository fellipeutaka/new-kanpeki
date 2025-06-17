import { Link } from "~/components/ui/link";

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
        <Link href="https://github.com/fellipeutaka" underline="always">
          Underline (Always)
        </Link>
        <Link href="https://github.com/fellipeutaka" underline="hover">
          Underline (Hover)
        </Link>
      </div>
    </div>
  );
}
