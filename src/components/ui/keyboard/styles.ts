import { cva } from "~/lib/cva";

export const KeyboardStyles = cva({
  variants: {
    variant: {
      default:
        "pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-medium font-mono text-[10px] text-muted-foreground opacity-100",
      menu: "ml-auto text-muted-foreground text-xs tracking-widest",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
