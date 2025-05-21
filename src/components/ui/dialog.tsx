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

import { cva } from "~/lib/cva";

export const DialogStyles = {
  Overlay: cva({
    base: [
      "fixed inset-0 z-50",
      "entering:motion-opacity-in entering:motion-duration-500",
      "exiting:motion-opacity-out exiting:motion-duration-300",
      "has-[[data-side=center]]:motion-duration-150!",
    ],
    variants: {
      isBlurred: {
        true: ["backdrop-blur"],
        false: ["bg-black/15 dark:bg-black/60"],
      },
    },
    defaultVariants: {
      isBlurred: false,
    },
  }),
  Modal: cva({
    base: [
      "data-[side=center]:motion-duration-150! fixed z-50 w-full bg-background p-4 shadow-lg outline-none",
      "entering:motion-opacity-in entering:motion-duration-500",
      "exiting:motion-opacity-out exiting:motion-duration-300",
      "sm:rounded-lg",
    ],
    variants: {
      side: {
        top: [
          "inset-x-0 top-0 left-0 border-b",
          "entering:-motion-translate-y-in-100",
          "exiting:-motion-translate-y-out-100",
        ],
        bottom: [
          "inset-x-0 bottom-0 border-t ease-in-out",
          "entering:motion-translate-y-in-100",
          "exiting:motion-translate-y-out-100",
        ],
        left: [
          "inset-y-0 left-0 h-full w-3/4 border-r ease-in-out sm:max-w-sm",
          "entering:-motion-translate-x-in-100",
          "exiting:-motion-translate-x-out-100",
        ],
        right: [
          "inset-y-0 right-0 h-full w-3/4 border-l ease-in-out sm:max-w-sm",
          "entering:motion-translate-x-in-100",
          "exiting:motion-translate-x-out-100",
        ],
        center: [
          "-translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-lg border p-6",
          "entering:motion-scale-in-95",
          "exiting:motion-scale-out-95",
        ],
      },
    },
    defaultVariants: {
      side: "center",
    },
  }),
  Content: cva({
    base: ["grid gap-4 outline-none"],
  }),
  Close: cva({
    base: [
      "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity",
      "hover:opacity-100",
      "focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "disabled:pointer-events-none",
      "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    ],
  }),
  Header: cva({
    base: ["flex flex-col space-y-1.5 text-center", "sm:text-left"],
  }),
  Footer: cva({
    base: ["flex flex-col-reverse", "sm:flex-row sm:justify-end sm:space-x-2"],
  }),
  Title: cva({
    base: ["font-semibold text-lg leading-none tracking-tight"],
  }),
  Description: cva({
    base: ["text-muted-foreground text-sm"],
  }),
};

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
  side,
  isDismissable = true,
  ...props
}: DialogModalProps) {
  return (
    <Modal
      data-slot="dialog-modal"
      className={composeRenderProps(className, (className) =>
        DialogStyles.Modal({ className, side })
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
