"use client";

import { ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";
import {
  Breadcrumb,
  Breadcrumbs,
  Link,
  composeRenderProps,
} from "react-aria-components";
import { BreadcrumbStyles } from "./styles";

export interface BreadcrumbRootProps<T extends object>
  extends React.ComponentProps<typeof Breadcrumbs<T>> {}

export function BreadcrumbRoot<T extends object>({
  className,
  ...props
}: BreadcrumbRootProps<T>) {
  return (
    <Breadcrumbs
      data-slot="breadcrumb-root"
      className={BreadcrumbStyles.Root({ className })}
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
      className={BreadcrumbStyles.Item({ className })}
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
      className={composeRenderProps(className, (className) =>
        BreadcrumbStyles.Link({ className })
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
      className={composeRenderProps(className, (className) =>
        BreadcrumbStyles.Separator({ className })
      )}
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
      className={BreadcrumbStyles.Ellipsis({ className })}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
}
