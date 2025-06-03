import { cx } from "cva";
import { cn } from "~/lib/cva";

export interface SpinnerProps
  extends Omit<React.ComponentProps<"div">, "children"> {}

const bars = Array.from({ length: 12 }, (_, i) => ({
  id: i,
}));

export function Spinner({ className, ...props }: SpinnerProps) {
  return (
    <div data-slot="spinner" className={cn("size-4", className)} {...props}>
      <div className="relative top-1/2 left-1/2 h-[inherit] w-[inherit]">
        {bars.map((bar) => (
          <div
            key={bar.id}
            aria-hidden="true"
            data-slot="spinner-bar"
            className={cx(
              "-left-[10%] -top-[3.9%] motion-opacity-loop-5/reset motion-duration-1200 motion-ease-linear absolute h-[8%] w-[24%] rounded-md bg-primary"
            )}
            style={{
              animationDelay: `-${1.3 - bar.id * 0.1}s`,
              transform: `rotate(${30 * bar.id}deg) translate(146%)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
