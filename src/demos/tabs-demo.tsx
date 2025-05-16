import { AppWindowIcon, CodeIcon } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardRoot,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from "~/components/ui/tabs";
import { Textfield } from "~/components/ui/textfield";

export function TabsDemo() {
  return (
    <div className="flex flex-col gap-6">
      <TabsRoot defaultSelectedKey="account" className="max-w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger id="account">Account</TabsTrigger>
          <TabsTrigger id="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent id="account">
          <CardRoot>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you&apos;re
                done.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <Textfield defaultValue="Pedro Duarte">
                <Label>Name</Label>
                <Input />
              </Textfield>
              <Textfield defaultValue="@peduarte">
                <Label>Username</Label>
                <Input />
              </Textfield>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </CardRoot>
        </TabsContent>
        <TabsContent id="password">
          <CardRoot>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you&apos;ll be logged
                out.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <Textfield>
                <Label>Current password</Label>
                <Input type="password" />
              </Textfield>
              <Textfield>
                <Label>New password</Label>
                <Input type="password" />
              </Textfield>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </CardRoot>
        </TabsContent>
      </TabsRoot>

      <TabsRoot defaultSelectedKey="home">
        <TabsList>
          <TabsTrigger id="home">Home</TabsTrigger>
          <TabsTrigger id="settings">Settings</TabsTrigger>
        </TabsList>
      </TabsRoot>

      <TabsRoot defaultSelectedKey="home">
        <TabsList>
          <TabsTrigger id="home">Home</TabsTrigger>
          <TabsTrigger id="settings" isDisabled>
            Disabled
          </TabsTrigger>
        </TabsList>
      </TabsRoot>

      <TabsRoot defaultSelectedKey="preview">
        <TabsList>
          <TabsTrigger id="preview">
            <AppWindowIcon />
            Preview
          </TabsTrigger>
          <TabsTrigger id="code">
            <CodeIcon />
            Code
          </TabsTrigger>
        </TabsList>
      </TabsRoot>
    </div>
  );
}
