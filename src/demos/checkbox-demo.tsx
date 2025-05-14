"use client";

import {
  CheckboxIndicator,
  CheckboxProvider,
  CheckboxRoot,
} from "~/components/ui/checkbox";

export function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-6">
      <CheckboxProvider>
        <CheckboxRoot>
          <CheckboxIndicator />
        </CheckboxRoot>
        Accept terms and conditions
      </CheckboxProvider>

      <CheckboxProvider defaultSelected>
        <CheckboxRoot>
          <CheckboxIndicator />
        </CheckboxRoot>
        <div className="grid gap-2">
          Accept terms and conditions
          <p className="text-muted-foreground text-sm">
            By clicking this checkbox, you agree to the terms and conditions.
          </p>
        </div>
      </CheckboxProvider>

      <CheckboxProvider isDisabled>
        <CheckboxRoot>
          <CheckboxIndicator />
        </CheckboxRoot>
        Enable notifications
      </CheckboxProvider>

      <CheckboxProvider
        className="items-start rounded-lg border selected:border-blue-600 selected:bg-blue-50 p-3 hover:bg-accent/50 dark:selected:border-blue-900 dark:selected:bg-blue-950"
        defaultSelected
      >
        <CheckboxRoot className="group-selected:border-blue-600 group-selected:bg-blue-600 group-selected:text-white dark:group-selected:border-blue-700 dark:group-selected:bg-blue-700">
          <CheckboxIndicator />
        </CheckboxRoot>
        <div className="grid gap-1.5 font-normal">
          <p className="font-medium text-sm leading-none">
            Enable notifications
          </p>
          <p className="text-muted-foreground text-sm">
            You can enable or disable notifications at any time.
          </p>
        </div>
      </CheckboxProvider>
    </div>
  );
}
