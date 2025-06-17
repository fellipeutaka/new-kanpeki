import { SearchIcon } from "lucide-react";

import { Label } from "~/components/ui/label";
import { Sidebar } from "~/components/ui/sidebar";

export function SearchForm(props: React.ComponentProps<"form">) {
  return (
    <form {...props}>
      <Sidebar.Group className="py-0">
        <Sidebar.GroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <Sidebar.Input
            id="search"
            placeholder="Search the docs..."
            className="pl-8"
          />
          <SearchIcon className="-translate-y-1/2 pointer-events-none absolute top-1/2 left-2 size-4 select-none opacity-50" />
        </Sidebar.GroupContent>
      </Sidebar.Group>
    </form>
  );
}
