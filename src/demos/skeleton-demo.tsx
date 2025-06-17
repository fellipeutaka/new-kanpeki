import { Card } from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";

export function SkeletonDemo() {
  return (
    <div className="flex w-full flex-wrap items-start gap-4">
      <div className="flex items-center gap-4">
        <Skeleton className="size-10 shrink-0 rounded-full" />
        <div className="grid gap-2">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
      <div className="flex w-full flex-wrap items-start gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <Card.Root key={index} className="@md:w-auto w-full @md:min-w-sm">
            <Card.Header>
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-1/2" />
            </Card.Header>
            <Card.Content>
              <Skeleton className="aspect-square w-full" />
            </Card.Content>
          </Card.Root>
        ))}
      </div>
    </div>
  );
}
