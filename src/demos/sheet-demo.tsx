import { Button } from "~/components/ui/button";
import { DialogContent } from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetModal,
  SheetOverlay,
  SheetRoot,
  SheetTitle,
} from "~/components/ui/sheet";
import { Textfield } from "~/components/ui/textfield";

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

export function SheetDemo() {
  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <SheetRoot>
        <Button variant="outline">Open</Button>

        <SheetOverlay>
          <SheetModal side="right">
            <DialogContent className="flex h-full flex-col">
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid flex-1 auto-rows-min gap-6 px-4">
                <Textfield defaultValue="Pedro Duarte">
                  <Label>Name</Label>
                  <Input />
                </Textfield>
                <Textfield defaultValue="@peduarte">
                  <Label>Username</Label>
                  <Input />
                </Textfield>
              </div>
              <SheetFooter className="grid w-full gap-2 *:flex *:w-full">
                <Button type="submit">Save changes</Button>
                <Button slot="close" variant="outline">
                  Close
                </Button>
              </SheetFooter>
            </DialogContent>
          </SheetModal>
        </SheetOverlay>
      </SheetRoot>
      {/* <div className="flex gap-2">
        {SHEET_SIDES.map((side) => (
          <DialogRoot key={side}>
            <Button variant="outline" className="capitalize">
              {side}
            </Button>

            <DialogOverlay>
              <DialogModal side={side}>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when
                      you&apos;re done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="overflow-y-auto px-4 text-sm">
                    <h4 className="mb-4 font-medium text-lg leading-none">
                      Lorem Ipsum
                    </h4>
                    {Array.from({ length: 10 }).map((_, index) => (
                      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                      <p key={index} className="mb-4 leading-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    ))}
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                    <Button slot="close" variant="outline">
                      Cancel
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </DialogModal>
            </DialogOverlay>
          </DialogRoot>
        ))}
      </div> */}
    </div>
  );
}
