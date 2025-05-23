import {
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbRoot,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Button } from "~/components/ui/button";
import { MenuContent, MenuItem, MenuRoot } from "~/components/ui/menu";
import { PopoverContent } from "~/components/ui/popover";

export function BreadcrumbDemo() {
  return (
    <BreadcrumbRoot>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <MenuRoot>
          <Button variant="unstyled" size="icon">
            <BreadcrumbEllipsis />
          </Button>

          <PopoverContent>
            <MenuContent>
              <MenuItem>Documentation</MenuItem>
              <MenuItem>Themes</MenuItem>
              <MenuItem>GitHub</MenuItem>
            </MenuContent>
          </PopoverContent>
        </MenuRoot>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink>Breadcrumb</BreadcrumbLink>
      </BreadcrumbItem>
    </BreadcrumbRoot>
  );
}
