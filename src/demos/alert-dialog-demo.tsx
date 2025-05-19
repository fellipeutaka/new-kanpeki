import { Button } from "~/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogModal,
  DialogOverlay,
  DialogRoot,
  DialogTitle,
} from "~/components/ui/dialog";

export function AlertDialogDemo() {
  return (
    <DialogRoot>
      <Button variant="outline">Show Dialog</Button>

      <DialogOverlay isDismissable={false}>
        <DialogModal>
          <DialogContent role="alertdialog">
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button slot="close" variant="outline">
                Cancel
              </Button>
              <Button>Continue</Button>
            </DialogFooter>
          </DialogContent>
        </DialogModal>
      </DialogOverlay>
    </DialogRoot>
  );
}
