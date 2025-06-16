import { cva } from "~/lib/cva";

export const SidebarStyles = {
  MenuSubButton: cva({
    base: [
      "-translate-x-px flex h-7 min-w-0 items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-hidden ring-sidebar-ring",
      "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
      "focus-visible:ring-2",
      "disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50",
      "[&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
      "active:bg-sidebar-accent active:text-sidebar-accent-foreground",
      "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
      "group-data-[collapsible=icon]:hidden",
    ],
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }),
};
