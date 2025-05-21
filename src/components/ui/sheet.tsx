"use client";
import {
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
} from "react-aria-components";

import { cn } from "~/lib/cva";

export interface SheetRootProps
  extends React.ComponentProps<typeof DialogTrigger> {}

export function SheetRoot(props: SheetRootProps) {
  return <DialogTrigger data-slot="sheet-root" {...props} />;
}

export interface SheetOverlayProps
  extends React.ComponentProps<typeof ModalOverlay> {
  /**
   * Whether to close the modal when the user interacts outside it.
   * @default true
   */
  isDismissable?: boolean;
}

export function SheetOverlay({
  className,
  isDismissable = true,
  ...props
}: SheetOverlayProps) {
  return (
    <ModalOverlay
      data-slot="sheet-overlay"
      className={cn(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=open]:animate-in",
        className
      )}
      isDismissable={isDismissable}
      {...props}
    />
  );
}

export interface SheetModalProps extends React.ComponentProps<typeof Modal> {
  side?: "top" | "right" | "bottom" | "left";
}

export function SheetModal({
  className,
  side = "right",
  ...props
}: SheetModalProps) {
  return (
    <Modal
      data-slot="sheet-content"
      className={cn(
        "fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:duration-300 data-[state=open]:duration-500",
        side === "right" &&
          "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
        side === "left" &&
          "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
        side === "top" &&
          "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
        side === "bottom" &&
          "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
        className
      )}
      {...props}
    />
  );
}

export interface SheetHeaderProps extends React.ComponentProps<"div"> {}

export function SheetHeader({ className, ...props }: SheetHeaderProps) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  );
}

export interface SheetFooterProps extends React.ComponentProps<"div"> {}

export function SheetFooter({ className, ...props }: SheetFooterProps) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

export interface SheetTitleProps extends React.ComponentProps<typeof Heading> {}

export function SheetTitle({ className, ...props }: SheetTitleProps) {
  return (
    <Heading
      slot="title"
      data-slot="sheet-title"
      className={cn("font-semibold text-foreground", className)}
      {...props}
    />
  );
}

export interface SheetDescriptionProps extends React.ComponentProps<"p"> {}

export function SheetDescription({
  className,
  ...props
}: SheetDescriptionProps) {
  return (
    <p
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}
