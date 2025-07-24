import { Link } from "~/components/ui/link/link";

const SIDEBARS = [
  {
    href: "/sidebar/01",
    label: "Sidebar 01",
    tooltip: "A simple sidebar with navigation grouped by section",
  },
  {
    href: "/sidebar/07",
    label: "Sidebar 07",
    tooltip: "A sidebar that collapses to icons",
  },
] as const;

export default function Page() {
  return (
    <main className="grid">
      {SIDEBARS.map((sidebar) => (
        <div key={sidebar.href}>
          <Link href={sidebar.href}>{sidebar.tooltip}</Link>
        </div>
      ))}
    </main>
  );
}
