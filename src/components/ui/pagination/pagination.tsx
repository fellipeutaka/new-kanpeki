"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import { Link, composeRenderProps } from "react-aria-components";

import { type Button, ButtonStyles } from "~/components/ui/button";
import { PaginationStyles } from "./styles";

export interface PaginationRootProps extends React.ComponentProps<"nav"> {}

export function PaginationRoot({ className, ...props }: PaginationRootProps) {
  return (
    <nav
      aria-label="pagination"
      data-slot="pagination-root"
      className={PaginationStyles.Root({ className })}
      {...props}
    />
  );
}

export interface PaginationContentProps extends React.ComponentProps<"ul"> {}

export function PaginationContent({
  className,
  ...props
}: PaginationContentProps) {
  return (
    <ul
      data-slot="pagination-content"
      className={PaginationStyles.Content({ className })}
      {...props}
    />
  );
}

export interface PaginationItemProps extends React.ComponentProps<"li"> {}

export function PaginationItem({ ...props }: PaginationItemProps) {
  return <li data-slot="pagination-item" {...props} />;
}

export interface PaginationLinkProps
  extends Pick<React.ComponentProps<typeof Button>, "size">,
    React.ComponentProps<typeof Link> {
  isActive?: boolean;
}

export function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={composeRenderProps(className, (className) =>
        ButtonStyles({
          variant: isActive ? "outline" : "ghost",
          size,
          className,
        })
      )}
      {...props}
    />
  );
}

export interface PaginationPreviousProps
  extends React.ComponentProps<typeof PaginationLink> {}

export function PaginationPrevious({
  className,
  ...props
}: PaginationPreviousProps) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={PaginationStyles.Navigation({
        className,
        variant: "previous",
      })}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  );
}

export interface PaginationNextProps
  extends React.ComponentProps<typeof PaginationLink> {}

export function PaginationNext({ className, ...props }: PaginationNextProps) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={PaginationStyles.Navigation({
        className,
        variant: "next",
      })}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  );
}

export interface PaginationEllipsisProps extends React.ComponentProps<"span"> {}

export function PaginationEllipsis({
  className,
  ...props
}: PaginationEllipsisProps) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={PaginationStyles.Ellipsis({ className })}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}
