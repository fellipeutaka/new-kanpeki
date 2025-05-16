import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbRoot,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "~/components/ui/dropdown-menu";

export function BreadcrumbDemo() {
  return (
    <BreadcrumbRoot>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
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
