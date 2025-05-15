import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { PopoverContent, PopoverRoot } from "~/components/ui/popover";
import { Textfield } from "~/components/ui/textfield";

export function PopoverDemo() {
  return (
    <PopoverRoot>
      <Button variant="outline">Open popover</Button>

      <PopoverContent className="w-80" placement="bottom start">
        <div className="grid gap-4">
          <div className="grid gap-1.5">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-muted-foreground text-sm">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <Textfield
              defaultValue="100%"
              autoFocus
              className="grid grid-cols-3 items-center gap-4"
            >
              <Label>Width</Label>
              <Input className="col-span-2 h-8" />
            </Textfield>
            <Textfield
              defaultValue="300px"
              className="grid grid-cols-3 items-center gap-4"
            >
              <Label>Max. width</Label>
              <Input className="col-span-2 h-8" />
            </Textfield>
            <Textfield
              defaultValue="25px"
              className="grid grid-cols-3 items-center gap-4"
            >
              <Label>Height</Label>
              <Input className="col-span-2 h-8" />
            </Textfield>
            <Textfield
              defaultValue="none"
              className="grid grid-cols-3 items-center gap-4"
            >
              <Label>Max. height</Label>
              <Input className="col-span-2 h-8" />
            </Textfield>
          </div>
        </div>
      </PopoverContent>
    </PopoverRoot>
  );
}
