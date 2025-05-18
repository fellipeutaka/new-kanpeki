import { Label } from "~/components/ui/label";
import { SwitchRoot, SwitchThumb, SwitchTrack } from "~/components/ui/switch";

export function SwitchDemo() {
  return (
    <div className="grid gap-6">
      <SwitchRoot>
        <SwitchTrack>
          <SwitchThumb />
        </SwitchTrack>
        <Label elementType="span">Airplane Mode</Label>
      </SwitchRoot>

      <SwitchRoot defaultSelected>
        <SwitchTrack className="group-selected:bg-blue-500 dark:group-selected:bg-blue-600">
          <SwitchThumb />
        </SwitchTrack>

        <Label elementType="span">Bluetooth</Label>
      </SwitchRoot>

      <SwitchRoot className="gap-6 rounded-lg border selected:border-blue-600 p-4 font-medium text-sm leading-none transition-colors">
        <div className="flex flex-col gap-1">
          <div className="font-medium">Share across devices</div>
          <div className="font-normal text-muted-foreground text-sm">
            Focus is shared across devices, and turns off when you leave the
            app.
          </div>
        </div>

        <SwitchTrack className="group-selected:bg-blue-500 dark:group-selected:bg-blue-600">
          <SwitchThumb />
        </SwitchTrack>
      </SwitchRoot>
    </div>
  );
}
