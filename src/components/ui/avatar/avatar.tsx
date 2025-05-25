"use client";

import { createContext, use, useLayoutEffect, useState } from "react";
import { AvatarStyles } from "./styles";

type Status = "idle" | "loading" | "success" | "error";
const AvatarContext = createContext<{
  status: Status;
  onStatusChange: (status: Status) => void;
} | null>(null);

function useAvatarContext() {
  const context = use(AvatarContext);
  if (!context) {
    throw new Error("Avatar components must be rendered within the AvatarRoot");
  }
  return context;
}

export interface AvatarRootProps extends React.ComponentProps<"span"> {}

export function AvatarRoot({ className, ...props }: AvatarRootProps) {
  const [status, setStatus] = useState<Status>("idle");

  return (
    <AvatarContext value={{ status, onStatusChange: setStatus }}>
      <span
        data-slot="avatar-root"
        data-status={status}
        className={AvatarStyles.Root({ className })}
        {...props}
      />
    </AvatarContext>
  );
}

function useImageLoadingStatus(src?: string) {
  const [status, setStatus] = useState<Status>("idle");

  useLayoutEffect(() => {
    if (!src) {
      setStatus("error");
      return;
    }
    let isMounted = true;
    const image = new window.Image();
    const updateStatus = (status: Status) => () => {
      if (!isMounted) {
        return;
      }
      setStatus(status);
    };
    setStatus("loading");
    image.onload = updateStatus("success");
    image.onerror = updateStatus("error");
    image.src = src;
    return () => {
      isMounted = false;
    };
  }, [src]);

  return status;
}

export interface AvatarImageProps extends React.ComponentProps<"img"> {
  src?: string;
}

export function AvatarImage({ className, src, ...props }: AvatarImageProps) {
  const context = useAvatarContext();
  const status = useImageLoadingStatus(src);

  useLayoutEffect(() => {
    if (status !== "idle") {
      context.onStatusChange(status);
    }
  }, [status, context.onStatusChange]);

  if (status !== "success") {
    return null;
  }

  return (
    <img
      {...props}
      data-slot="avatar-image"
      src={src}
      alt={props.alt}
      className={AvatarStyles.Image({ className })}
    />
  );
}

export interface AvatarFallbackProps extends React.ComponentProps<"span"> {}

export function AvatarFallback({ className, ...props }: AvatarFallbackProps) {
  const { status } = useAvatarContext();

  return (
    <span
      {...props}
      aria-hidden={status !== "error"}
      data-slot="avatar-fallback"
      className={AvatarStyles.Fallback({ className })}
    />
  );
}

export interface AvatarPlaceholderProps extends React.ComponentProps<"span"> {}

export function AvatarPlaceholder({
  className,
  ...props
}: AvatarPlaceholderProps) {
  const { status } = useAvatarContext();

  if (status !== "idle" && status !== "loading") {
    return null;
  }

  return (
    <span
      {...props}
      data-slot="avatar-placeholder"
      className={AvatarStyles.Placeholder({ className })}
    />
  );
}
