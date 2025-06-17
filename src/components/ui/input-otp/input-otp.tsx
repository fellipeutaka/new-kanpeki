"use client";

import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";

import { useContext } from "react";
import { InputOTPStyles } from "./styles";

export type InputOTPRootProps = React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
};

export function InputOTPRoot({
  className,
  containerClassName,
  ...props
}: InputOTPRootProps) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={InputOTPStyles.Container({
        class: containerClassName,
      })}
      className={InputOTPStyles.Root({ className })}
      {...props}
    />
  );
}

export interface InputOTPGroupProps extends React.ComponentProps<"div"> {}

export function InputOTPGroup({ className, ...props }: InputOTPGroupProps) {
  return (
    <div
      data-slot="input-otp-group"
      className={InputOTPStyles.Group({ className })}
      {...props}
    />
  );
}

export interface InputOTPSlotProps extends React.ComponentProps<"div"> {
  index: number;
}

export function InputOTPSlot({
  index,
  className,
  ...props
}: InputOTPSlotProps) {
  const inputOTPContext = useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={InputOTPStyles.Slot({ className })}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
}

export interface InputOTPSeparatorProps extends React.ComponentProps<"div"> {}

export function InputOTPSeparator({ ...props }: InputOTPSeparatorProps) {
  return (
    <div
      tabIndex={-1}
      data-slot="input-otp-separator"
      // biome-ignore lint/a11y/useSemanticElements: <explanation>
      role="separator"
      {...props}
    >
      <MinusIcon />
    </div>
  );
}
