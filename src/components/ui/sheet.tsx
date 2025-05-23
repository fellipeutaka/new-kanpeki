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
import { cva } from "~/lib/cva";

export const SheetStyles = {
  Overlay: cva({
    base: [
      "fixed inset-0 z-50",
      "entering:motion-opacity-in entering:motion-duration-500 exiting:motion-duration-300 motion-ease-in-out exiting:motion-opacity-out",
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
      "fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition",
      "motion-ease-in-out entering:motion-duration-500 exiting:motion-duration-300",
    ],
    variants: {
      side: {
        right: [
          "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          "entering:motion-translate-x-in-100",
          "exiting:motion-translate-x-out-100",
        ],
        left: [
          "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          "entering:-motion-translate-x-in-100",
          "exiting:-motion-translate-x-out-100",
        ],
        top: [
          "inset-x-0 top-0 h-auto border-b",
          "entering:-motion-translate-y-in-100",
          "exiting:-motion-translate-y-out-100",
        ],
        bottom: [
          "inset-x-0 bottom-0 h-auto border-t",
          "entering:motion-translate-y-in-100",
          "exiting:motion-translate-y-out-100",
        ],
      },
    },
  }),
  Content: cva({
    base: ["flex h-full flex-col gap-4 outline-none"],
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
    base: ["flex flex-col gap-1.5 p-4"],
  }),
  Footer: cva({
    base: ["mt-auto flex flex-col gap-2 p-4"],
  }),
  Title: cva({
    base: ["font-semibold text-foreground"],
  }),
  Description: cva({
    base: ["text-muted-foreground text-sm"],
  }),
};

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
