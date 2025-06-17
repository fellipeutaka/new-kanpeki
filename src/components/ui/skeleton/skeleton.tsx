import { SkeletonStyles } from "./styles";

export interface SkeletonProps extends React.ComponentProps<"div"> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      className={SkeletonStyles({ className })}
      {...props}
    />
  );
}
