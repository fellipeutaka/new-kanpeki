import { lazy } from "react";
import { ComponentWrapper } from "~/demos/component-wrapper";

const SINK_COMPONENTS: [
  string,
  React.LazyExoticComponent<() => React.JSX.Element>
][] = [
  [
    "chart",
    lazy(() =>
      import("~/demos/chart-demo").then((mod) => ({ default: mod.ChartDemo }))
    ),
  ],
  [
    "accordion",
    lazy(() =>
      import("~/demos/accordion-demo").then((mod) => ({
        default: mod.AccordionDemo,
      }))
    ),
  ],
  [
    "alert",
    lazy(() =>
      import("~/demos/alert-demo").then((mod) => ({ default: mod.AlertDemo }))
    ),
  ],
  [
    "alert-dialog",
    lazy(() =>
      import("~/demos/alert-dialog-demo").then((mod) => ({
        default: mod.AlertDialogDemo,
      }))
    ),
  ],
  // ["aspect-ratio"],
  [
    "avatar",
    lazy(() =>
      import("~/demos/avatar-demo").then((mod) => ({ default: mod.AvatarDemo }))
    ),
  ],
  [
    "badge",
    lazy(() =>
      import("~/demos/badge-demo").then((mod) => ({ default: mod.BadgeDemo }))
    ),
  ],
  [
    "breadcrumb",
    lazy(() =>
      import("~/demos/breadcrumb-demo").then((mod) => ({
        default: mod.BreadcrumbDemo,
      }))
    ),
  ],
  [
    "button",
    lazy(() =>
      import("~/demos/button-demo").then((mod) => ({ default: mod.ButtonDemo }))
    ),
  ],
  [
    "calendar",
    lazy(() =>
      import("~/demos/calendar-demo").then((mod) => ({
        default: mod.CalendarDemo,
      }))
    ),
  ],
  [
    "card",
    lazy(() =>
      import("~/demos/card-demo").then((mod) => ({ default: mod.CardDemo }))
    ),
  ],
  [
    "carousel",
    lazy(() =>
      import("~/demos/carousel-demo").then((mod) => ({
        default: mod.CarouselDemo,
      }))
    ),
  ],
  [
    "checkbox",
    lazy(() =>
      import("~/demos/checkbox-demo").then((mod) => ({
        default: mod.CheckboxDemo,
      }))
    ),
  ],
  [
    "collapsible",
    lazy(() =>
      import("~/demos/collapsible-demo").then((mod) => ({
        default: mod.CollapsibleDemo,
      }))
    ),
  ],
  [
    "combobox",
    lazy(() =>
      import("~/demos/combobox-demo").then((mod) => ({
        default: mod.ComboboxDemo,
      }))
    ),
  ],
  [
    "command",
    lazy(() =>
      import("~/demos/command-demo").then((mod) => ({
        default: mod.CommandDemo,
      }))
    ),
  ],
  // ["context-menu"],
  [
    "date-picker",
    lazy(() =>
      import("~/demos/date-picker-demo").then((mod) => ({
        default: mod.DatePickerDemo,
      }))
    ),
  ],
  [
    "dialog",
    lazy(() =>
      import("~/demos/dialog-demo").then((mod) => ({ default: mod.DialogDemo }))
    ),
  ],
  // ["drawer"],
  [
    "dropdown-menu",
    lazy(() =>
      import("~/demos/dropdown-menu-demo").then((mod) => ({
        default: mod.DropdownMenuDemo,
      }))
    ),
  ],
  // ["form"],
  [
    "hover-card",
    lazy(() =>
      import("~/demos/hover-card-demo").then((mod) => ({
        default: mod.HoverCardDemo,
      }))
    ),
  ],
  [
    "input",
    lazy(() =>
      import("~/demos/input-demo").then((mod) => ({ default: mod.InputDemo }))
    ),
  ],
  [
    "input-otp",
    lazy(() =>
      import("~/demos/input-otp-demo").then((mod) => ({
        default: mod.InputOTPDemo,
      }))
    ),
  ],
  [
    "label",
    lazy(() =>
      import("~/demos/label-demo").then((mod) => ({ default: mod.LabelDemo }))
    ),
  ],
  // ["menubar"],
  // ["navigation-menu"],
  [
    "pagination",
    lazy(() =>
      import("~/demos/pagination-demo").then((mod) => ({
        default: mod.PaginationDemo,
      }))
    ),
  ],
  [
    "popover",
    lazy(() =>
      import("~/demos/popover-demo").then((mod) => ({
        default: mod.PopoverDemo,
      }))
    ),
  ],
  // [
  //   "progress",
  //   lazy(() =>
  //     import("~/demos/progress-demo").then((mod) => ({
  //       default: mod.ProgressDemo,
  //     }))
  //   ),
  // ],
  // [
  //   "radio-group",
  //   lazy(() =>
  //     import("~/demos/radio-group-demo").then((mod) => ({
  //       default: mod.RadioGroupDemo,
  //     }))
  //   ),
  // ],
  // [
  //   "resizable",
  //   lazy(() =>
  //     import("~/demos/resizable-demo").then((mod) => ({
  //       default: mod.ResizableDemo,
  //     }))
  //   ),
  // ],
  // ["scroll-area"],
  [
    "select",
    lazy(() =>
      import("~/demos/select-demo").then((mod) => ({ default: mod.SelectDemo }))
    ),
  ],
  // [
  //   "separator",
  //   lazy(() =>
  //     import("~/demos/separator-demo").then((mod) => ({
  //       default: mod.SeparatorDemo,
  //     }))
  //   ),
  // ],
  [
    "sheet",
    lazy(() =>
      import("~/demos/sheet-demo").then((mod) => ({ default: mod.SheetDemo }))
    ),
  ],
  // [
  //   "skeleton",
  //   lazy(() =>
  //     import("~/demos/skeleton-demo").then((mod) => ({
  //       default: mod.SkeletonDemo,
  //     }))
  //   ),
  // ],
  // [
  //   "slider",
  //   lazy(() =>
  //     import("~/demos/slider-demo").then((mod) => ({ default: mod.SliderDemo }))
  //   ),
  // ],
  // [
  //   "sonner",
  //   lazy(() =>
  //     import("~/demos/sonner-demo").then((mod) => ({ default: mod.SonnerDemo }))
  //   ),
  // ],
  // [
  //   "switch",
  //   lazy(() =>
  //     import("~/demos/switch-demo").then((mod) => ({
  //       default: mod.SwitchDemo,
  //     }))
  //   ),
  // ],
  // [
  //   "table",
  //   lazy(() =>
  //     import("~/demos/table-demo").then((mod) => ({ default: mod.TableDemo }))
  //   ),
  // ],
  // [
  //   "tabs",
  //   lazy(() =>
  //     import("~/demos/tabs-demo").then((mod) => ({ default: mod.TabsDemo }))
  //   ),
  // ],
  // [
  //   "textarea",
  //   lazy(() =>
  //     import("~/demos/textarea-demo").then((mod) => ({
  //       default: mod.TextareaDemo,
  //     }))
  //   ),
  // ],
  // [
  //   "toggle",
  //   lazy(() =>
  //     import("~/demos/toggle-demo").then((mod) => ({ default: mod.ToggleDemo }))
  //   ),
  // ],
  // [
  //   "toggle-group",
  //   lazy(() =>
  //     import("~/demos/toggle-group-demo").then((mod) => ({
  //       default: mod.ToggleGroupDemo,
  //     }))
  //   ),
  // ],
  // [
  //   "tooltip",
  //   lazy(() =>
  //     import("~/demos/tooltip-demo").then((mod) => ({
  //       default: mod.TooltipDemo,
  //     }))
  //   ),
  // ],
];

export default function SinkPage() {
  return (
    <div className="@container grid flex-1 gap-4 p-4">
      {SINK_COMPONENTS.map(([name, Component]) => (
        <ComponentWrapper key={name} name={name}>
          <Component />
        </ComponentWrapper>
      ))}
    </div>
  );
}
