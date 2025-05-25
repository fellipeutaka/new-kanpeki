"use client";

import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod/v4";

import { Button } from "~/components/ui/button/button";
import * as Form from "~/components/ui/form/namespace";
import { Input } from "~/components/ui/input/input";
import { Label } from "~/components/ui/label/label";
import * as Listbox from "~/components/ui/list-box/namespace";
import * as Popover from "~/components/ui/popover/namespace";
import * as Select from "~/components/ui/select/namespace";
import { Textarea } from "~/components/ui/textarea/textarea";
import { Textfield } from "~/components/ui/textfield/textfield";

const items = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
] as const;

const FormSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters."),
  email: z.email("Please select an email to display."),
  bio: z
    .string()
    .min(10, "Bio must be at least 10 characters.")
    .max(160, "Bio must not be longer than 30 characters."),
  // type: z.enum(
  //   ["all", "mentions", "none"],
  //   "You need to select a notification type."
  // ),
  // mobile: z.boolean().default(false).optional(),
  // items: z
  //   .array(z.string())
  //   .refine(
  //     (value) => value.some((item) => item),
  //     "You have to select at least one item."
  //   ),
  // dob: z.date("A date of birth is required."),
  // marketing_emails: z.boolean().default(false).optional(),
  // security_emails: z.boolean(),
});

type FormSchema = z.infer<typeof FormSchema>;

export function FormDemo() {
  const form = useForm<FormSchema>({
    resolver: standardSchemaResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      bio: "",
      // items: ["recents", "home"],
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  });

  return (
    <Form.Root
      validationBehavior="aria"
      onSubmit={onSubmit}
      autoComplete="off"
      className="grid w-full max-w-sm gap-6"
    >
      <Controller
        control={form.control}
        name="username"
        render={({ field: { ref, ...field }, fieldState }) => (
          <Textfield {...field} isInvalid={fieldState.invalid}>
            <Label>Username</Label>
            <Input placeholder="shadcn" ref={ref} />

            <Form.Description>
              This is your public display name.
            </Form.Description>
            <Form.Message>{fieldState.error?.message}</Form.Message>
          </Textfield>
        )}
      />
      {/* TODO: Fix email ring color */}
      <Controller
        control={form.control}
        name="email"
        render={({ field, fieldState }) => (
          <Select.Root
            aria-label="Email"
            placeholder="Select a verified email to display"
            name={field.name}
            onBlur={field.onBlur}
            selectedKey={field.value}
            onSelectionChange={field.onChange}
            isDisabled={field.disabled}
            isInvalid={fieldState.invalid}
          >
            <Label>Email</Label>

            <Select.Trigger ref={field.ref}>
              <Select.Value />
            </Select.Trigger>
            <Popover.Content>
              <Listbox.Root>
                <Listbox.Item id="m@example.com">m@example.com</Listbox.Item>
                <Listbox.Item id="m@google.com">m@google.com</Listbox.Item>
                <Listbox.Item id="m@support.com">m@support.com</Listbox.Item>
              </Listbox.Root>
            </Popover.Content>

            <Form.Description>
              You can manage email addresses in your email settings.
            </Form.Description>
            <Form.Message>{fieldState.error?.message}</Form.Message>
          </Select.Root>
        )}
      />
      <Controller
        control={form.control}
        name="bio"
        render={({ field: { ref, ...field }, fieldState }) => (
          <Textfield {...field} isInvalid={fieldState.invalid}>
            <Label>Bio</Label>
            <Textarea
              placeholder="Tell us a little bit about yourself"
              ref={ref}
            />

            <Form.Description>
              You can <span>@mention</span> other users and organizations.
            </Form.Description>
            <Form.Message>{fieldState.error?.message}</Form.Message>
          </Textfield>
        )}
      />

      {/* <FormField
        control={form.control}
        name="type"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-3">
            <FormLabel>Notify me about...</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col gap-3"
              >
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <RadioGroupItem value="all" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    All new messages
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <RadioGroupItem value="mentions" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Direct messages and mentions
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <RadioGroupItem value="none" />
                  </FormControl>
                  <FormLabel className="font-normal">Nothing</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <Form.Message />
          </FormItem>
        )}
      /> */}
      {/* <FormField
        control={form.control}
        name="mobile"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start gap-3 rounded-md border p-4 shadow-xs">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="flex flex-col gap-1">
              <FormLabel className="leading-snug">
                Use different settings for my mobile devices
              </FormLabel>
              <Form.Description className="leading-snug">
                You can manage your mobile notifications in the mobile settings
                page.
              </Form.Description>
            </div>
          </FormItem>
        )}
      /> */}
      {/* <FormField
        control={form.control}
        name="items"
        render={() => (
          <FormItem className="flex flex-col gap-4">
            <div>
              <FormLabel className="text-base">Sidebar</FormLabel>
              <Form.Description>
                Select the items you want to display in the sidebar.
              </Form.Description>
            </div>
            <div className="flex flex-col gap-2">
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex items-start gap-3"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal text-sm leading-tight">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </div>
            <Form.Message />
          </FormItem>
        )}
      /> */}
      {/* <FormField
        control={form.control}
        name="dob"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel>Date of birth</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[240px] pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <Popover.Content className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                  initialFocus
                />
              </Popover.Content>
            </Popover>
            <Form.Description>
              Your date of birth is used to calculate your age.
            </Form.Description>
            <Form.Message />
          </FormItem>
        )}
      /> */}
      {/* <div>
        <h3 className="mb-4 font-medium text-lg">Email Notifications</h3>
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="marketing_emails"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start justify-between rounded-lg border p-4 shadow-xs">
                <div className="flex flex-col gap-0.5">
                  <FormLabel className="leading-normal">
                    Marketing emails
                  </FormLabel>
                  <Form.Description className="leading-snug">
                    Receive emails about new products, features, and more.
                  </Form.Description>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="security_emails"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start justify-between rounded-lg border p-4 shadow-xs">
                <div className="flex flex-col gap-0.5 opacity-60">
                  <FormLabel className="leading-normal">
                    Security emails
                  </FormLabel>
                  <Form.Description className="leading-snug">
                    Receive emails about your account security.
                  </Form.Description>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled
                    aria-readonly
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </div> */}
      <Button type="submit">Submit</Button>
    </Form.Root>
  );
}
