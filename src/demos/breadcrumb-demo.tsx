import * as Breadcrumb from "~/components/ui/breadcrumb/namespace";
import { Button } from "~/components/ui/button/button";
import * as Menu from "~/components/ui/menu/namespace";
import * as Popover from "~/components/ui/popover/namespace";

export function BreadcrumbDemo() {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
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
        <Breadcrumb.Link href="/docs/components">Components</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Link>Breadcrumb</Breadcrumb.Link>
      </Breadcrumb.Item>
    </Breadcrumb.Root>
  );
}
