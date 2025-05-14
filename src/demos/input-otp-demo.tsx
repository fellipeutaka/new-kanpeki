"use client";

import { REGEXP_ONLY_DIGITS } from "input-otp";

import { useId, useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "~/components/ui/input-otp";
import { Label } from "~/components/ui/label";

export function InputOTPDemo() {
  return (
    <div className="flex flex-col flex-wrap gap-6 md:flex-row">
      <InputOTPSimple />
      <InputOTPPattern />
      <InputOTPWithSeparator />
      <InputOTPWithSpacing />
    </div>
  );
}

function InputOTPSimple() {
  const id = useId();

  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>Simple</Label>
      <InputOTP id={id} maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}

function InputOTPPattern() {
  const id = useId();

  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>Digits Only</Label>
      <InputOTP id={id} maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}

function InputOTPWithSeparator() {
  const [value, setValue] = useState("123456");
  const id = useId();

  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>With Separator</Label>
      <InputOTP id={id} maxLength={6} value={value} onChange={setValue}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}

function InputOTPWithSpacing() {
  const id = useId();

  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>With Spacing</Label>
      <InputOTP id={id} maxLength={6}>
        <InputOTPGroup className="gap-2 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
          <InputOTPSlot index={0} aria-invalid="true" />
          <InputOTPSlot index={1} aria-invalid="true" />
          <InputOTPSlot index={2} aria-invalid="true" />
          <InputOTPSlot index={3} aria-invalid="true" />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}
