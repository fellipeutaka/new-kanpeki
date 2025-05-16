"use client";

import { ChevronsUpDownIcon, SearchIcon } from "lucide-react";
import { Autocomplete, SearchField, useFilter } from "react-aria-components";
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
} from "~/components/ui/avatar";
import {
  ComboboxInput,
  ComboboxRoot,
  ComboboxTrigger,
} from "~/components/ui/combobox";
import { Input } from "~/components/ui/input";
import {
  ListboxEmpty,
  ListboxItem,
  ListboxRoot,
} from "~/components/ui/list-box";
import { PopoverContent } from "~/components/ui/popover";
import { SelectRoot, SelectTrigger, SelectValue } from "~/components/ui/select";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

type Framework = (typeof frameworks)[number];

const users = [
  {
    id: "1",
    username: "shadcn",
  },
  {
    id: "2",
    username: "leerob",
  },
  {
    id: "3",
    username: "evilrabbit",
  },
] as const;

type User = (typeof users)[number];

const timezones = [
  {
    label: "Americas",
    timezones: [
      { value: "America/New_York", label: "(GMT-5) New York" },
      { value: "America/Los_Angeles", label: "(GMT-8) Los Angeles" },
      { value: "America/Chicago", label: "(GMT-6) Chicago" },
      { value: "America/Toronto", label: "(GMT-5) Toronto" },
      { value: "America/Vancouver", label: "(GMT-8) Vancouver" },
      { value: "America/Sao_Paulo", label: "(GMT-3) São Paulo" },
    ],
  },
  {
    label: "Europe",
    timezones: [
      { value: "Europe/London", label: "(GMT+0) London" },
      { value: "Europe/Paris", label: "(GMT+1) Paris" },
      { value: "Europe/Berlin", label: "(GMT+1) Berlin" },
      { value: "Europe/Rome", label: "(GMT+1) Rome" },
      { value: "Europe/Madrid", label: "(GMT+1) Madrid" },
      { value: "Europe/Amsterdam", label: "(GMT+1) Amsterdam" },
    ],
  },
  {
    label: "Asia/Pacific",
    timezones: [
      { value: "Asia/Tokyo", label: "(GMT+9) Tokyo" },
      { value: "Asia/Shanghai", label: "(GMT+8) Shanghai" },
      { value: "Asia/Singapore", label: "(GMT+8) Singapore" },
      { value: "Asia/Dubai", label: "(GMT+4) Dubai" },
      { value: "Australia/Sydney", label: "(GMT+11) Sydney" },
      { value: "Asia/Seoul", label: "(GMT+9) Seoul" },
    ],
  },
] as const;

type Timezone = (typeof timezones)[number];

export function ComboboxDemo() {
  return (
    <div className="flex w-full flex-wrap items-start gap-4">
      <FrameworkCombobox frameworks={[...frameworks]} />

      <UserCombobox users={[...users]} selectedUserId={users[0].id} />
      {/* <TimezoneCombobox
        timezones={[...timezones]}
        selectedTimezone={timezones[0].timezones[0]}
      /> */}
      {/* <ComboboxWithCheckbox frameworks={[...frameworks]} /> */}
    </div>
  );
}

function FrameworkCombobox({ frameworks }: { frameworks: Framework[] }) {
  return (
    <ComboboxRoot
      allowsEmptyCollection
      className="w-full md:max-w-[200px]"
      aria-label="Frameworks"
    >
      <ComboboxTrigger>
        <ComboboxInput placeholder="Select framework..." />

        <ChevronsUpDownIcon className="text-muted-foreground" />
      </ComboboxTrigger>

      <PopoverContent>
        <ListboxRoot
          renderEmptyState={() => (
            <ListboxEmpty>No frameworks found.</ListboxEmpty>
          )}
          items={frameworks}
        >
          {(framework) => (
            <ListboxItem id={framework.value}>{framework.label}</ListboxItem>
          )}
        </ListboxRoot>
      </PopoverContent>
    </ComboboxRoot>
  );
}

function UserCombobox({
  users,
  selectedUserId,
}: {
  users: User[];
  selectedUserId: string;
}) {
  const { contains } = useFilter({ sensitivity: "base" });

  return (
    <SelectRoot
      className="w-full md:max-w-[200px]"
      placeholder="Select user..."
      aria-label="Users"
      defaultSelectedKey={selectedUserId}
    >
      <SelectTrigger className="w-full">
        <SelectValue />
      </SelectTrigger>

      <PopoverContent>
        <Autocomplete filter={contains}>
          <SearchField
            className="flex h-9 items-center gap-2 border px-3"
            aria-label="Search"
            autoFocus
          >
            <SearchIcon
              aria-hidden
              className="ml-2 h-4 w-4 text-gray-600 forced-colors:text-[ButtonText]"
            />
            <Input placeholder="Search languages" />
          </SearchField>
          <ListboxRoot items={users}>
            {(user) => (
              <ListboxItem textValue={user.username} id={user.id}>
                <AvatarRoot className="size-5">
                  <AvatarImage
                    src={`https://github.com/${user.username}.png`}
                  />
                  <AvatarFallback>{user.username[0]}</AvatarFallback>
                </AvatarRoot>
                {user.username}
              </ListboxItem>
            )}
          </ListboxRoot>
        </Autocomplete>
      </PopoverContent>
    </SelectRoot>
  );
}

// function TimezoneCombobox({
//   timezones,
//   selectedTimezone,
// }: {
//   timezones: Timezone[];
//   selectedTimezone: Timezone["timezones"][number];
// }) {
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(selectedTimezone.value);

//   const selectedGroup = useMemo(
//     () =>
//       timezones.find((group) =>
//         group.timezones.find((tz) => tz.value === value)
//       ),
//     [value, timezones]
//   );

//   const selectedTimezoneLabel = useMemo(
//     () => selectedGroup?.timezones.find((tz) => tz.value === value)?.label,
//     [value, selectedGroup]
//   );

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           className="h-12 w-full justify-between px-2.5 md:max-w-[200px]"
//         >
//           {selectedTimezone ? (
//             <div className="flex flex-col items-start gap-0.5">
//               <span className="font-normal text-muted-foreground text-xs">
//                 {selectedGroup?.label}
//               </span>
//               <span>{selectedTimezoneLabel}</span>
//             </div>
//           ) : (
//             "Select timezone"
//           )}
//           <ChevronDownIcon className="text-muted-foreground" />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="p-0" align="start">
//         <Command>
//           <CommandInput placeholder="Search timezone..." />
//           <CommandList className="scroll-pb-12">
//             <CommandEmpty>No timezone found.</CommandEmpty>
//             {timezones.map((region) => (
//               <CommandGroup key={region.label} heading={region.label}>
//                 {region.timezones.map((timezone) => (
//                   <CommandItem
//                     key={timezone.value}
//                     value={timezone.value}
//                     onSelect={(currentValue) => {
//                       setValue(
//                         currentValue as Timezone["timezones"][number]["value"]
//                       );
//                       setOpen(false);
//                     }}
//                   >
//                     {timezone.label}
//                     <CheckIcon
//                       className="ml-auto opacity-0 data-[selected=true]:opacity-100"
//                       data-selected={value === timezone.value}
//                     />
//                   </CommandItem>
//                 ))}
//               </CommandGroup>
//             ))}
//             <CommandSeparator className="sticky bottom-10" />
//             <CommandGroup className="sticky bottom-0 bg-popover">
//               <CommandItem>
//                 <PlusCircleIcon />
//                 Create timezone
//               </CommandItem>
//             </CommandGroup>
//           </CommandList>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   );
// }

// function ComboboxWithCheckbox({ frameworks }: { frameworks: Framework[] }) {
//   const [open, setOpen] = useState(false);
//   const [selectedFrameworks, setSelectedFrameworks] = useState<Framework[]>([]);

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           // biome-ignore lint/a11y/useSemanticElements: <explanation>
//           role="combobox"
//           aria-expanded={open}
//           className="w-fit min-w-[280px] justify-between"
//         >
//           {selectedFrameworks.length > 0
//             ? selectedFrameworks.map((framework) => framework.label).join(", ")
//             : "Select frameworks (multi-select)..."}
//           <ChevronsUpDown className="text-muted-foreground" />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-[300px] p-0" align="start">
//         <Command>
//           <CommandInput placeholder="Search framework..." />
//           <CommandList>
//             <CommandEmpty>No framework found.</CommandEmpty>
//             <CommandGroup>
//               {frameworks.map((framework) => (
//                 <CommandItem
//                   key={framework.value}
//                   value={framework.value}
//                   onSelect={(currentValue) => {
//                     setSelectedFrameworks(
//                       selectedFrameworks.some((f) => f.value === currentValue)
//                         ? selectedFrameworks.filter(
//                             (f) => f.value !== currentValue
//                           )
//                         : [...selectedFrameworks, framework]
//                     );
//                   }}
//                 >
//                   <div
//                     className="pointer-events-none size-4 shrink-0 select-none rounded-[4px] border border-input transition-all data-[selected=true]:border-primary data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground *:[svg]:opacity-0 data-[selected=true]:*:[svg]:opacity-100"
//                     data-selected={selectedFrameworks.some(
//                       (f) => f.value === framework.value
//                     )}
//                   >
//                     <CheckIcon className="size-3.5 text-current" />
//                   </div>
//                   {framework.label}
//                 </CommandItem>
//               ))}
//             </CommandGroup>
//           </CommandList>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   );
// }
