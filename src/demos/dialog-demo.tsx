import { Button } from "~/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogModal,
  DialogOverlay,
  DialogRoot,
  DialogTitle,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textfield } from "~/components/ui/textfield";

export function DialogDemo() {
  return (
    <div className="flex flex-col items-start gap-4 md:flex-row">
      <DialogWithForm />
      <DialogScrollableContent />
      <DialogWithStickyFooter />
    </div>
  );
}

function DialogWithForm() {
  return (
    <DialogRoot>
      <Button variant="outline">Edit Profile</Button>

      <DialogOverlay isDismissable>
        <DialogModal className="sm:max-w-[425px]">
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <Textfield name="name" defaultValue="Pedro Duarte" autoFocus>
                <Label>Name</Label>
                <Input />
              </Textfield>
              <Textfield name="username" defaultValue="@peduarte">
                <Label>Username</Label>
                <Input />
              </Textfield>
            </div>
            <DialogFooter>
              <Button slot="close" variant="outline">
                Cancel
              </Button>
              <Button type="submit">Save changes</Button>
            </DialogFooter>

            <DialogClose />
          </DialogContent>
        </DialogModal>
      </DialogOverlay>
    </DialogRoot>
  );
}

function DialogScrollableContent() {
  return (
    <DialogRoot>
      <Button variant="outline">Scrollable Content</Button>

      <DialogOverlay isDismissable>
        <DialogModal className="sm:max-w-[425px]">
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Scrollable Content</DialogTitle>
              <DialogDescription>
                This is a dialog with scrollable content.
              </DialogDescription>
            </DialogHeader>
            <div className="-mx-6 max-h-[500px] overflow-y-auto px-6 text-sm">
              <h4 className="mb-4 font-medium text-lg leading-none">
                Lorem Ipsum
              </h4>
              {Array.from({ length: 10 }).map((_, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <p key={index} className="mb-4 leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              ))}
            </div>

            <DialogClose />
          </DialogContent>
        </DialogModal>
      </DialogOverlay>
    </DialogRoot>
  );
}

function DialogWithStickyFooter() {
  return (
    <DialogRoot>
      <Button variant="outline">Sticky Footer</Button>

      <DialogOverlay isDismissable>
        <DialogModal>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Scrollable Content</DialogTitle>
              <DialogDescription>
                This is a dialog with scrollable content.
              </DialogDescription>
            </DialogHeader>
            <div className="-mx-6 max-h-[500px] overflow-y-auto px-6 text-sm">
              <h4 className="mb-4 font-medium text-lg leading-none">
                Lorem Ipsum
              </h4>
              {Array.from({ length: 10 }).map((_, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <p key={index} className="mb-4 leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              ))}
            </div>
            <DialogFooter>
              <Button slot="close" variant="outline">
                Close
              </Button>
            </DialogFooter>

            <DialogClose />
          </DialogContent>
        </DialogModal>
      </DialogOverlay>
    </DialogRoot>
  );
}
