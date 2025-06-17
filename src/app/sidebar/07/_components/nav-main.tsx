import { ChevronRightIcon, type LucideIcon } from "lucide-react";

import { Collapsible } from "~/components/ui/collapsible";
import { Sidebar } from "~/components/ui/sidebar";

export interface NavMainProps {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}

export function NavMain({ items }: NavMainProps) {
  return (
    <Sidebar.Group>
      <Sidebar.GroupLabel>Platform</Sidebar.GroupLabel>
      <Sidebar.Menu>
        {items.map((item) => (
          <Collapsible.Root
            key={item.title}
            defaultExpanded={item.isActive}
            className="group"
          >
            <Sidebar.MenuItem>
              <Sidebar.MenuButton slot="trigger" tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
                <ChevronRightIcon className="ml-auto transition-transform duration-200 group-expanded:rotate-90" />
              </Sidebar.MenuButton>
              <Collapsible.Content>
                <Sidebar.MenuSub>
                  {item.items?.map((subItem) => (
                    <Sidebar.MenuSubItem key={subItem.title}>
                      <Sidebar.MenuSubButton href={subItem.url}>
                        {subItem.title}
                      </Sidebar.MenuSubButton>
                    </Sidebar.MenuSubItem>
                  ))}
                </Sidebar.MenuSub>
              </Collapsible.Content>
            </Sidebar.MenuItem>
          </Collapsible.Root>
        ))}
      </Sidebar.Menu>
    </Sidebar.Group>
  );
}
