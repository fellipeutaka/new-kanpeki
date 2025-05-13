import { ChartAreaDemo } from "~/demos/chart-area-demo";
import { ChartBarDemo } from "~/demos/chart-bar-demo";
import { ChartLineDemo } from "~/demos/chart-line-demo";
import { ChartBarMixed } from "~/demos/chart-bar-mixed";

export function ChartDemo() {
  return (
    <div className="grid w-full max-w-screen-2xl @2xl:grid-cols-2 @6xl:grid-cols-3 gap-4 *:data-[slot=card]:flex-1">
      <ChartAreaDemo />
      <ChartBarDemo />
      <ChartBarMixed />
      <div className="@6xl:hidden">
        <ChartLineDemo />
      </div>
    </div>
  );
}
