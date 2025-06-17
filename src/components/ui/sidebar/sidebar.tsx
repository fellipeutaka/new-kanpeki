"use client";

import { PanelLeftIcon } from "lucide-react";

import { type VariantProps, cx } from "cva";
import {
  createContext,
  use,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Link, composeRenderProps } from "react-aria-components";
import { Button, ButtonPrimitive } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Separator } from "~/components/ui/separator";
import {
  Sheet,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "~/components/ui/sheet";
import { Skeleton } from "~/components/ui/skeleton";
import { Tooltip, type TooltipContent } from "~/components/ui/tooltip";
import { useIsMobile } from "~/hooks/use-is-mobile";
import { cn } from "~/lib/cva";
import { SidebarStyles } from "./styles";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

interface SidebarContextProps {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextProps | null>(null);

export function useSidebar() {
  const context = use(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

export interface SidebarProviderProps extends React.ComponentProps<"div"> {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: SidebarProviderProps) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = useState(false);

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );

  // Helper to toggle the sidebar.
  const toggleSidebar = useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen]);

  // Adds a keyboard shortcut to toggle the sidebar.
  useEffect(() => {
    const controller = new AbortController();

    window.addEventListener(
      "keydown",
      (e) => {
        if (e.key === SIDEBAR_KEYBOARD_SHORTCUT && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          toggleSidebar();
        }
      },
      { signal: controller.signal }
    );

    return () => controller.abort();
  }, [toggleSidebar]);

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed";

  const contextValue = useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, toggleSidebar]
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <div
        data-slot="sidebar-wrapper"
        style={
          {
            "--sidebar-width": SIDEBAR_WIDTH,
            "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
            ...style,
          } as React.CSSProperties
        }
        className={SidebarStyles.Provider({ className })}
        {...props}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

export interface SidebarRootProps extends React.ComponentProps<"div"> {
  side?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
}

export function SidebarRoot({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: SidebarRootProps) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={SidebarStyles.Root({ collapsible, className })}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet.Root isOpen={openMobile} onOpenChange={setOpenMobile} {...props}>
        <Sheet.Overlay>
          <Sheet.Modal
            className="w-(--sidebar-width)"
            side={side}
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
          >
            <Sheet.Content
              data-sidebar="sidebar"
              data-slot="sidebar"
              data-mobile="true"
              className="bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
            >
              <SheetHeader className="sr-only">
                <SheetTitle>Sidebar</SheetTitle>
                <SheetDescription>
                  Displays the mobile sidebar.
                </SheetDescription>
              </SheetHeader>
              <div className="flex size-full flex-col">{children}</div>
            </Sheet.Content>
          </Sheet.Modal>
        </Sheet.Overlay>
      </Sheet.Root>
    );
  }

  return (
    <div
      className="group peer hidden text-sidebar-foreground md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cx(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className={SidebarStyles.Inner()}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export interface SidebarTriggerProps
  extends React.ComponentProps<typeof Button> {}

export function SidebarTrigger({
  className,
  onPress,
  ...props
}: SidebarTriggerProps) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("size-7", className)}
      onPress={(event) => {
        onPress?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}

export interface SidebarRailProps
  extends React.ComponentProps<typeof ButtonPrimitive> {}

export function SidebarRail({ className, ...props }: SidebarRailProps) {
  const { toggleSidebar } = useSidebar();

  return (
    <ButtonPrimitive
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      onPress={toggleSidebar}
      className={SidebarStyles.Rail({ className })}
      {...props}
    />
  );
}

export interface SidebarInsetProps extends React.ComponentProps<"main"> {}

export function SidebarInset({ className, ...props }: SidebarInsetProps) {
  return (
    <main
      data-slot="sidebar-inset"
      className={SidebarStyles.Inset({ className })}
      {...props}
    />
  );
}

export interface SidebarInputProps extends React.ComponentProps<typeof Input> {}

export function SidebarInput({ className, ...props }: SidebarInputProps) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={composeRenderProps(className, (className) =>
        SidebarStyles.Input({ className })
      )}
      {...props}
    />
  );
}

export interface SidebarHeaderProps extends React.ComponentProps<"div"> {}

export function SidebarHeader({ className, ...props }: SidebarHeaderProps) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={SidebarStyles.Header({ className })}
      {...props}
    />
  );
}

export interface SidebarFooterProps extends React.ComponentProps<"div"> {}

export function SidebarFooter({ className, ...props }: SidebarFooterProps) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={SidebarStyles.Header({ className })}
      {...props}
    />
  );
}

export interface SidebarSeparatorProps
  extends React.ComponentProps<typeof Separator> {}

export function SidebarSeparator({
  className,
  ...props
}: SidebarSeparatorProps) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={SidebarStyles.Separator({ className })}
      {...props}
    />
  );
}

export interface SidebarContentProps extends React.ComponentProps<"div"> {}

export function SidebarContent({ className, ...props }: SidebarContentProps) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={SidebarStyles.Content({ className })}
      {...props}
    />
  );
}

export interface SidebarGroupProps extends React.ComponentProps<"div"> {}

export function SidebarGroup({ className, ...props }: SidebarGroupProps) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={SidebarStyles.Group({ className })}
      {...props}
    />
  );
}

export interface SidebarGroupLabelProps extends React.ComponentProps<"div"> {}

export function SidebarGroupLabel({
  className,
  ...props
}: SidebarGroupLabelProps) {
  return (
    <div
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={SidebarStyles.Label({ className })}
      {...props}
    />
  );
}

export interface SidebarGroupActionProps
  extends React.ComponentProps<typeof ButtonPrimitive> {}

export function SidebarGroupAction({
  className,
  ...props
}: SidebarGroupActionProps) {
  return (
    <ButtonPrimitive
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={composeRenderProps(className, (className) =>
        SidebarStyles.GroupAction({ className })
      )}
      {...props}
    />
  );
}

export interface SidebarGroupContentProps extends React.ComponentProps<"div"> {}

export function SidebarGroupContent({
  className,
  ...props
}: SidebarGroupContentProps) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={SidebarStyles.GroupContent({ className })}
      {...props}
    />
  );
}

export interface SidebarMenuProps extends React.ComponentProps<"ul"> {}

export function SidebarMenu({ className, ...props }: SidebarMenuProps) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={SidebarStyles.Menu({ className })}
      {...props}
    />
  );
}

export interface SidebarMenuItemProps extends React.ComponentProps<"li"> {}

export function SidebarMenuItem({ className, ...props }: SidebarMenuItemProps) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={SidebarStyles.MenuItem({ className })}
      {...props}
    />
  );
}

export interface SidebarMenuButtonProps
  extends React.ComponentProps<typeof ButtonPrimitive>,
    VariantProps<typeof SidebarStyles.MenuButton> {
  isActive?: boolean;
  tooltip?: string | React.ComponentProps<typeof TooltipContent>;
}

export function SidebarMenuButton({
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: SidebarMenuButtonProps) {
  const { isMobile, state } = useSidebar();

  const button = (
    <ButtonPrimitive
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={composeRenderProps(className, (className) =>
        SidebarStyles.MenuButton({ variant, size, className })
      )}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip.Root isDisabled={state !== "collapsed" || isMobile}>
      {button}

      <Tooltip.Content placement="right" {...tooltip} />
    </Tooltip.Root>
  );
}

export interface SidebarMenuLinkProps
  extends React.ComponentProps<typeof Link>,
    VariantProps<typeof SidebarStyles.MenuButton> {
  isActive?: boolean;
  tooltip?: string | React.ComponentProps<typeof TooltipContent>;
}

export function SidebarMenuLink({
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: SidebarMenuLinkProps) {
  const { isMobile, state } = useSidebar();

  const link = (
    <Link
      data-slot="sidebar-menu-link"
      data-sidebar="menu-link"
      data-size={size}
      data-active={isActive}
      className={composeRenderProps(className, (className) =>
        SidebarStyles.MenuButton({ variant, size, className })
      )}
      {...props}
    />
  );

  if (!tooltip) {
    return link;
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip.Root isDisabled={state !== "collapsed" || isMobile}>
      {link}

      <Tooltip.Content placement="right" {...tooltip} />
    </Tooltip.Root>
  );
}

export interface SidebarMenuActionProps
  extends React.ComponentProps<typeof ButtonPrimitive>,
    VariantProps<typeof SidebarStyles.MenuAction> {}

export function SidebarMenuAction({
  className,
  showOnHover = false,
  ...props
}: SidebarMenuActionProps) {
  return (
    <ButtonPrimitive
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={composeRenderProps(className, (className) =>
        SidebarStyles.MenuAction({
          className,
          showOnHover,
        })
      )}
      {...props}
    />
  );
}

export interface SidebarMenuBadgeProps extends React.ComponentProps<"div"> {}

export function SidebarMenuBadge({
  className,
  ...props
}: SidebarMenuBadgeProps) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={SidebarStyles.MenuBadge({ className })}
      {...props}
    />
  );
}

export interface SidebarMenuSkeletonProps extends React.ComponentProps<"div"> {
  showIcon?: boolean;
}

export function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: SidebarMenuSkeletonProps) {
  // Random width between 50 to 90%.
  const width = useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
}

export interface SidebarMenuSubProps extends React.ComponentProps<"ul"> {}

export function SidebarMenuSub({ className, ...props }: SidebarMenuSubProps) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-sidebar-border border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  );
}

export interface SidebarMenuSubItemProps extends React.ComponentProps<"li"> {}

export function SidebarMenuSubItem({
  className,
  ...props
}: SidebarMenuSubItemProps) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn("group/menu-sub-item relative", className)}
      {...props}
    />
  );
}

export interface SidebarMenuSubButtonProps
  extends React.ComponentProps<typeof Link>,
    VariantProps<typeof SidebarStyles.MenuSubButton> {
  isActive?: boolean;
}

export function SidebarMenuSubButton({
  size = "md",
  isActive = false,
  className,
  ...props
}: SidebarMenuSubButtonProps) {
  return (
    <Link
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={SidebarStyles.MenuSubButton({
        className,
        size,
      })}
      {...props}
    />
  );
}
