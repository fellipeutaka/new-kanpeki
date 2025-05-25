"use client";

import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
  composeRenderProps,
} from "react-aria-components";

import type { VariantProps } from "cva";
import { XIcon } from "lucide-react";
import { SheetStyles } from "./styles";

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
      className={composeRenderProps(className, (className) =>
        SheetStyles.Overlay({ className })
      )}
      isDismissable={isDismissable}
      {...props}
    />
  );
}

export interface SheetContentProps
  extends React.ComponentProps<typeof Dialog> {}

export function SheetContent({ className, ...props }: SheetContentProps) {
  return (
    <Dialog
      data-slot="sheet-content"
      className={SheetStyles.Content({ className })}
      {...props}
    />
  );
}

export interface SheetCloseProps
  extends Omit<React.ComponentProps<typeof Button>, "children" | "slot"> {}

export function SheetClose({ className, ...props }: SheetCloseProps) {
  return (
    <Button
      {...props}
      data-slot="sheet-close"
      slot="close"
      className={composeRenderProps(className, (className) =>
        SheetStyles.Close({ className })
      )}
    >
      <XIcon />
      <span className="sr-only">Close</span>
    </Button>
  );
}

export interface SheetModalProps
  extends React.ComponentProps<typeof Modal>,
    VariantProps<typeof SheetStyles.Modal> {}

export function SheetModal({
  className,
  side = "right",
  ...props
}: SheetModalProps) {
  return (
    <Modal
      data-slot="sheet-content"
      className={composeRenderProps(className, (className) =>
        SheetStyles.Modal({ className, side })
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
      className={SheetStyles.Header({ className })}
      {...props}
    />
  );
}

export interface SheetFooterProps extends React.ComponentProps<"div"> {}

export function SheetFooter({ className, ...props }: SheetFooterProps) {
  return (
    <div
      data-slot="sheet-footer"
      className={SheetStyles.Footer({ className })}
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
      className={SheetStyles.Title({ className })}
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
      className={SheetStyles.Description({ className })}
      {...props}
    />
  );
}
