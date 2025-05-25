"use client";

import type { VariantProps } from "cva";
import { XIcon } from "lucide-react";
import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
  composeRenderProps,
} from "react-aria-components";
import { DialogStyles } from "./styles";

export interface DialogRootProps
  extends React.ComponentProps<typeof DialogTrigger> {}

export function DialogRoot(props: DialogRootProps) {
  return <DialogTrigger data-slot="dialog-root" {...props} />;
}

export interface DialogModalProps
  extends React.ComponentProps<typeof Modal>,
    VariantProps<typeof DialogStyles.Modal> {
  /**
   * Whether to close the modal when the user interacts outside it.
   * @default true
   */
  isDismissable?: boolean;
}

export function DialogModal({
  className,
  isDismissable = true,
  ...props
}: DialogModalProps) {
  return (
    <Modal
      data-slot="dialog-modal"
      className={composeRenderProps(className, (className) =>
        DialogStyles.Modal({ className })
      )}
      isDismissable={isDismissable}
      {...props}
    />
  );
}

export interface DialogOverlayProps
  extends React.ComponentProps<typeof ModalOverlay>,
    VariantProps<typeof DialogStyles.Overlay> {
  /**
   * Whether to close the modal when the user interacts outside it.
   * @default true
   */
  isDismissable?: boolean;
}

export function DialogOverlay({
  className,
  isBlurred,
  isDismissable = true,
  ...props
}: DialogOverlayProps) {
  return (
    <ModalOverlay
      data-slot="dialog-overlay"
      className={composeRenderProps(className, (className) =>
        DialogStyles.Overlay({ className, isBlurred })
      )}
      isDismissable={isDismissable}
      {...props}
    />
  );
}

export interface DialogContentProps
  extends React.ComponentProps<typeof Dialog> {}

export function DialogContent({ className, ...props }: DialogContentProps) {
  return (
    <Dialog
      data-slot="dialog-content"
      className={DialogStyles.Content({ className })}
      {...props}
    />
  );
}

export interface DialogCloseProps
  extends Omit<React.ComponentProps<typeof Button>, "children" | "slot"> {}

export function DialogClose({ className, ...props }: DialogCloseProps) {
  return (
    <Button
      {...props}
      data-slot="dialog-close"
      slot="close"
      className={composeRenderProps(className, (className) =>
        DialogStyles.Close({ className })
      )}
    >
      <XIcon />
      <span className="sr-only">Close</span>
    </Button>
  );
}

export interface DialogHeaderProps extends React.ComponentProps<"div"> {}

export function DialogHeader({ className, ...props }: DialogHeaderProps) {
  return (
    <div
      data-slot="dialog-header"
      className={DialogStyles.Header({ className })}
      {...props}
    />
  );
}

export interface DialogFooterProps extends React.ComponentProps<"div"> {}

export function DialogFooter({ className, ...props }: DialogFooterProps) {
  return (
    <div
      data-slot="dialog-footer"
      className={DialogStyles.Footer({ className })}
      {...props}
    />
  );
}

export interface DialogTitleProps
  extends React.ComponentProps<typeof Heading> {}

export function DialogTitle({ className, ...props }: DialogTitleProps) {
  return (
    <Heading
      slot="title"
      data-slot="dialog-title"
      className={DialogStyles.Title({ className })}
      {...props}
    />
  );
}

export interface DialogDescriptionProps extends React.ComponentProps<"p"> {}

export function DialogDescription({
  className,
  ...props
}: DialogDescriptionProps) {
  return (
    <p
      data-slot="dialog-description"
      className={DialogStyles.Description({ className })}
      {...props}
    />
  );
}
