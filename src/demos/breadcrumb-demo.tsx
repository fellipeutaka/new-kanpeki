import { Breadcrumb } from "~/components/ui/breadcrumb";
import { Button } from "~/components/ui/button/button";
import { Link } from "~/components/ui/link/link";
import { Menu } from "~/components/ui/menu";
import { Popover } from "~/components/ui/popover";

export function BreadcrumbDemo() {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.Item>
        <Link href="/">Home</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Menu.Root>
          <Button variant="unstyled" size="icon">
            <Breadcrumb.Ellipsis />
          </Button>

          <Popover.Content>
            <Menu.Content>
              <Menu.Item>Documentation</Menu.Item>
              <Menu.Item>Themes</Menu.Item>
              <Menu.Item>GitHub</Menu.Item>
            </Menu.Content>
          </Popover.Content>
        </Menu.Root>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Link href="/docs/components">Components</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Link>Breadcrumb</Link>
      </Breadcrumb.Item>
    </Breadcrumb.Root>
  );
}
