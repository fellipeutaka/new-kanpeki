"use client";

import type { VariantProps } from "cva";
import { AnimatePresence, type PanInfo, motion } from "motion/react";
import { use } from "react";
import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
  OverlayTriggerStateContext,
  Text,
} from "react-aria-components";

import { DrawerStyles } from "./styles";

const MotionModal = motion.create(Modal);
const MotionModalOverlay = motion.create(ModalOverlay);

// Vaul-inspired constants
const VELOCITY_THRESHOLD = 0.4;
const CLOSE_THRESHOLD = 0.25;
const TRANSITION_DURATION = 0.5;
const TRANSITION_EASE = [0.32, 0.72, 0, 1] as const;

type DrawerSide = "top" | "right" | "bottom" | "left";

// Get initial position for each side
function getInitialTransform(side: DrawerSide) {
  switch (side) {
    case "top":
      return { y: "-100%" };
    case "right":
      return { x: "100%" };
    case "bottom":
      return { y: "100%" };
    case "left":
      return { x: "-100%" };
    default:
      return { y: "100%" };
  }
}

// Check if drag should close the drawer
function shouldClose(
  side: DrawerSide,
  offset: { x: number; y: number },
  velocity: { x: number; y: number }
): boolean {
  const isVertical = side === "top" || side === "bottom";
  const dragDistance = isVertical ? Math.abs(offset.y) : Math.abs(offset.x);
  const dragVelocity = isVertical ? Math.abs(velocity.y) : Math.abs(velocity.x);

  // Check if dragging in close direction
  const isClosingDirection =
    (side === "bottom" && offset.y > 0) ||
    (side === "top" && offset.y < 0) ||
    (side === "left" && offset.x < 0) ||
    (side === "right" && offset.x > 0);

  if (!isClosingDirection) {
    return false;
  }

  // Close on high velocity
  if (dragVelocity > VELOCITY_THRESHOLD) {
    return true;
  }

  // Close on distance threshold
  const threshold =
    (isVertical ? window.innerHeight : window.innerWidth) * CLOSE_THRESHOLD;
  return dragDistance >= threshold;
}

// Get drag configuration for each side
function getDragConfig(side: DrawerSide) {
  const isVertical = side === "top" || side === "bottom";

  return {
    drag: (isVertical ? "y" : "x") as "x" | "y",
    dragConstraints: isVertical
      ? side === "top"
        ? { top: -300, bottom: 5 } // More restrictive for scrollable content
        : { top: -5, bottom: 300 } // Very limited upward movement
      : side === "left"
        ? { left: -300, right: 5 }
        : { left: -5, right: 300 },
    dragElastic: isVertical
      ? side === "top"
        ? { top: 0.15, bottom: 0.02 } // Higher resistance near content
        : { top: 0.02, bottom: 0.15 } // Very high resistance upward
      : side === "left"
        ? { left: 0.15, right: 0.02 }
        : { left: 0.02, right: 0.15 },
  };
}

export interface DrawerRootProps
  extends React.ComponentProps<typeof DialogTrigger> {}

export function DrawerRoot(props: DrawerRootProps) {
  return <DialogTrigger data-slot="drawer-root" {...props} />;
}

export interface DrawerOverlayProps
  extends Omit<React.ComponentProps<typeof MotionModalOverlay>, "children">,
    VariantProps<typeof DrawerStyles.Modal> {
  /**
   * Whether to close the modal when the user interacts outside it.
   * @default true
   */
  isDismissable?: boolean;
  /**
   * Whether the drawer should float with margins.
   * @default false
   */
  isFloat?: boolean;
  /**
   * Whether to show the drag notch indicator.
   * @default true
   */
  notch?: boolean;
  children: React.ReactNode;
}

export function DrawerOverlay({
  className,
  isDismissable = true,
  side = "bottom",
  isFloat = false,
  notch = true,
  children,
  ...props
}: DrawerOverlayProps) {
  const state = use(OverlayTriggerStateContext);

  if (!state) {
    return null;
  }

  const handleDragEnd = (_: unknown, { offset, velocity }: PanInfo) => {
    if (shouldClose(side, offset, velocity)) {
      state.close();
    }
  };

  const initialTransform = getInitialTransform(side);
  const dragConfig = getDragConfig(side);

  return (
    <AnimatePresence>
      {(props?.isOpen || state?.isOpen) && (
        <MotionModalOverlay
          data-slot="drawer-overlay"
          className={DrawerStyles.Overlay({ className })}
          isDismissable={isDismissable}
          isOpen={props?.isOpen || state?.isOpen}
          onOpenChange={props?.onOpenChange || state?.setOpen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: TRANSITION_DURATION,
            ease: TRANSITION_EASE,
          }}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }}
          {...props}
        >
          <MotionModal
            data-slot="drawer-modal"
            className={DrawerStyles.Modal({ side, isFloat })}
            initial={initialTransform}
            animate={{ x: 0, y: 0 }}
            exit={initialTransform}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 400,
            }}
            drag={dragConfig.drag}
            dragConstraints={dragConfig.dragConstraints}
            dragElastic={dragConfig.dragElastic}
            dragMomentum={false}
            dragSnapToOrigin
            onDragEnd={handleDragEnd}
            whileDrag={{
              cursor: "grabbing",
            }}
          >
            <Dialog
              data-slot="drawer-content"
              className={DrawerStyles.Content({ side })}
              data-side={side}
              aria-label="Drawer"
            >
              {notch && (side === "bottom" || side === "top") && (
                <div className={DrawerStyles.Notch()} />
              )}
              {children}
            </Dialog>
          </MotionModal>
        </MotionModalOverlay>
      )}
    </AnimatePresence>
  );
}

export interface DrawerHeaderProps extends React.ComponentProps<"div"> {}

export function DrawerHeader({ className, ...props }: DrawerHeaderProps) {
  return (
    <div
      data-slot="drawer-header"
      slot="header"
      className={DrawerStyles.Header({ className })}
      {...props}
    />
  );
}

export interface DrawerTitleProps
  extends React.ComponentProps<typeof Heading> {}

export function DrawerTitle({ className, ...props }: DrawerTitleProps) {
  return (
    <Heading
      slot="title"
      data-slot="drawer-title"
      className={DrawerStyles.Title({ className })}
      {...props}
    />
  );
}

export interface DrawerDescriptionProps
  extends React.ComponentProps<typeof Text> {}

export function DrawerDescription({
  className,
  ...props
}: DrawerDescriptionProps) {
  return (
    <Text
      slot="description"
      data-slot="drawer-description"
      className={DrawerStyles.Description({ className })}
      {...props}
    />
  );
}

export interface DrawerBodyProps extends React.ComponentProps<"div"> {}

export function DrawerBody({ className, ...props }: DrawerBodyProps) {
  return (
    <div
      data-slot="drawer-body"
      slot="body"
      className={DrawerStyles.Body({ className })}
      {...props}
    />
  );
}

export interface DrawerFooterProps extends React.ComponentProps<"div"> {}

export function DrawerFooter({ className, ...props }: DrawerFooterProps) {
  return (
    <div
      data-slot="drawer-footer"
      slot="footer"
      className={DrawerStyles.Footer({ className })}
      {...props}
    />
  );
}

export interface DrawerCloseProps extends React.ComponentProps<typeof Button> {}

export function DrawerClose({ className, ...props }: DrawerCloseProps) {
  return (
    <Button
      data-slot="drawer-close"
      slot="close"
      className={className}
      {...props}
    />
  );
}
