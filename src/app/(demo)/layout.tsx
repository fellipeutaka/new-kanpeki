import { ModeSwitcher } from "~/components/mode-switcher";
import { Separator } from "~/components/ui/separator";

export interface DemoLayoutProps {
  children: React.ReactNode;
}

export default function DemoLayout({ children }: DemoLayoutProps) {
  return (
    <>
      <header className="sticky inset-x-0 top-0 isolate z-10 flex shrink-0 items-center gap-2 border-b bg-background">
        <div className="flex h-14 w-full items-center gap-2 px-4">
          <Separator
            orientation="vertical"
            className="mr-2 orientation-vertical:h-4"
          />
          <div className="ml-auto flex items-center gap-2">
            <ModeSwitcher />
          </div>
        </div>
      </header>

      {children}
    </>
  );
}
