import { Resizable } from "~/components/ui/resizable";

export function ResizableDemo() {
  return (
    <div className="flex w-full flex-col gap-6">
      <Resizable.Root
        direction="horizontal"
        className="max-w-md rounded-lg border md:min-w-[450px]"
      >
        <Resizable.Panel defaultSize={50}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">One</span>
          </div>
        </Resizable.Panel>
        <Resizable.Handle />
        <Resizable.Panel defaultSize={50}>
          <Resizable.Root direction="vertical">
            <Resizable.Panel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Two</span>
              </div>
            </Resizable.Panel>
            <Resizable.Handle />
            <Resizable.Panel defaultSize={75}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Three</span>
              </div>
            </Resizable.Panel>
          </Resizable.Root>
        </Resizable.Panel>
      </Resizable.Root>

      <Resizable.Root
        direction="horizontal"
        className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
      >
        <Resizable.Panel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Sidebar</span>
          </div>
        </Resizable.Panel>
        <Resizable.Handle withHandle />
        <Resizable.Panel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </Resizable.Panel>
      </Resizable.Root>

      <Resizable.Root
        direction="vertical"
        className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
      >
        <Resizable.Panel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Header</span>
          </div>
        </Resizable.Panel>
        <Resizable.Handle />
        <Resizable.Panel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </Resizable.Panel>
      </Resizable.Root>
    </div>
  );
}
