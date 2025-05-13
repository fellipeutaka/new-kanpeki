import { BathIcon, BedIcon, LandPlotIcon } from "lucide-react";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export function CardDemo() {
  return (
    <div className="flex flex-col items-start gap-4">
      <Card.Root className="w-full max-w-sm">
        <Card.Header>
          <Card.Title>Login to your account</Card.Title>
          <Card.Description>
            Enter your email below to login to your account
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="/"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </Card.Content>
        <Card.Footer className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="/" className="underline underline-offset-4">
              Sign up
            </a>
          </div>
        </Card.Footer>
      </Card.Root>
      <Card.Root>
        <Card.Header>
          <Card.Title>Meeting Notes</Card.Title>
          <Card.Description>
            Transcript from the meeting with the client.
          </Card.Description>
        </Card.Header>
        <Card.Content className="text-sm">
          <p>
            Client requested dashboard redesign with focus on mobile
            responsiveness.
          </p>
          <ol className="mt-4 flex list-decimal flex-col gap-2 pl-6">
            <li>New analytics widgets for daily/weekly metrics</li>
            <li>Simplified navigation menu</li>
            <li>Dark mode support</li>
            <li>Timeline: 6 weeks</li>
            <li>Follow-up meeting scheduled for next Tuesday</li>
          </ol>
        </Card.Content>
        <Card.Footer>
          <div className="-space-x-2 flex *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
            <Avatar.Root>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar.Root>
            <Avatar.Root>
              <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar.Root>
            <Avatar.Root>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar.Root>
          </div>
        </Card.Footer>
      </Card.Root>
      <Card.Root>
        <Card.Header>
          <Card.Title>Is this an image?</Card.Title>
          <Card.Description>This is a card with an image.</Card.Description>
        </Card.Header>
        <Card.Content className="px-0">
          <Image
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            className="aspect-video object-cover"
            width={500}
            height={500}
          />
        </Card.Content>
        <Card.Footer className="flex items-center gap-2">
          <Badge variant="outline">
            <BedIcon /> 4
          </Badge>
          <Badge variant="outline">
            <BathIcon /> 2
          </Badge>
          <Badge variant="outline">
            <LandPlotIcon /> 350m²
          </Badge>
          <div className="ml-auto font-medium tabular-nums">$135,000</div>
        </Card.Footer>
      </Card.Root>
      <div className="flex w-full flex-wrap items-start gap-8 md:*:data-[slot=card]:basis-1/4">
        <Card.Root>
          <Card.Content className="text-sm">Content Only</Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Header>
            <Card.Title>Header Only</Card.Title>
            <Card.Description>
              This is a card with a header and a description.
            </Card.Description>
          </Card.Header>
        </Card.Root>
        <Card.Root>
          <Card.Header>
            <Card.Title>Header and Content</Card.Title>
            <Card.Description>
              This is a card with a header and a content.
            </Card.Description>
          </Card.Header>
          <Card.Content className="text-sm">Content</Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Footer className="text-sm">Footer Only</Card.Footer>
        </Card.Root>
        <Card.Root>
          <Card.Header>
            <Card.Title>Header + Footer</Card.Title>
            <Card.Description>
              This is a card with a header and a footer.
            </Card.Description>
          </Card.Header>
          <Card.Footer className="text-sm">Footer</Card.Footer>
        </Card.Root>
        <Card.Root>
          <Card.Content className="text-sm">Content</Card.Content>
          <Card.Footer className="text-sm">Footer</Card.Footer>
        </Card.Root>
        <Card.Root>
          <Card.Header>
            <Card.Title>Header + Footer</Card.Title>
            <Card.Description>
              This is a card with a header and a footer.
            </Card.Description>
          </Card.Header>
          <Card.Content className="text-sm">Content</Card.Content>
          <Card.Footer className="text-sm">Footer</Card.Footer>
        </Card.Root>
      </div>
    </div>
  );
}
