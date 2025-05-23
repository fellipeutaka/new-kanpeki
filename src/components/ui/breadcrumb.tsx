"use client";

import { ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";
import { Breadcrumb, Breadcrumbs, Link } from "react-aria-components";

import { cn } from "~/lib/cva";

export interface BreadcrumbRootProps<T extends object>
  extends React.ComponentProps<typeof Breadcrumbs<T>> {}

export function BreadcrumbRoot<T extends object>({
  className,
  ...props
}: BreadcrumbRootProps<T>) {
  return (
    <Breadcrumbs
      data-slot="breadcrumb-root"
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-muted-foreground text-sm sm:gap-2.5",
        className
      )}
      {...props}
    />
  );
}

export interface BreadcrumbItemProps
  extends React.ComponentProps<typeof Breadcrumb> {}

export function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps) {
  return (
    <Breadcrumb
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  );
}

export interface BreadcrumbLinkProps
  extends React.ComponentProps<typeof Link> {}

export function BreadcrumbLink({ className, ...props }: BreadcrumbLinkProps) {
  return (
    <Link
      data-slot="breadcrumb-link"
      className={cn(
        "rounded-md current:font-normal current:text-foreground outline-none transition-all hover:text-foreground",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        className
      )}
      {...props}
    />
  );
}

export interface BreadcrumbSeparatorProps
  extends React.ComponentProps<typeof Breadcrumb> {}

export function BreadcrumbSeparator({
  children,
  className,
  ...props
}: BreadcrumbSeparatorProps) {
  return (
    <Breadcrumb
      data-slot="breadcrumb-separator"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRightIcon />}
    </Breadcrumb>
  );
}

export interface BreadcrumbEllipsisProps extends React.ComponentProps<"span"> {}

export function BreadcrumbEllipsis({
  className,
  ...props
}: BreadcrumbEllipsisProps) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
}
