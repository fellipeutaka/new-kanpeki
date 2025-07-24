import { Breadcrumb } from "~/components/ui/breadcrumb";
import { Link } from "~/components/ui/link/link";
import { Separator } from "~/components/ui/separator";
import { Sidebar } from "~/components/ui/sidebar";
import { AppSidebar } from "./_components/app-sidebar";

export default function Page() {
  return (
    <Sidebar.Provider>
      <AppSidebar />
      <Sidebar.Inset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <Sidebar.Trigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb.Root>
              <Breadcrumb.Item className="hidden md:block">
                <Link href="#">Building Your Application</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator className="hidden md:block" />
              <Breadcrumb.Item>
                <Link>Data Fetching</Link>
              </Breadcrumb.Item>
            </Breadcrumb.Root>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </Sidebar.Inset>
    </Sidebar.Provider>
  );
}
