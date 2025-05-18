"use client";

import { useState } from "react";
import { Label } from "~/components/ui/label";
import {
  SliderHeader,
  SliderOutput,
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
} from "~/components/ui/slider";

export function SliderDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col flex-wrap gap-6 md:flex-row">
      <SliderRoot defaultValue={[50]} maxValue={100} step={1}>
        <SliderTrack>
          <SliderRange />
          <SliderThumb />
        </SliderTrack>
      </SliderRoot>

      <SliderRoot defaultValue={[25, 50]} maxValue={100} step={1}>
        <SliderTrack>
          <SliderRange />
          <SliderThumb />
        </SliderTrack>
      </SliderRoot>

      <SliderRoot defaultValue={[10, 20]} maxValue={100} step={10}>
        <SliderTrack>
          <SliderRange />
          <SliderThumb />
        </SliderTrack>
      </SliderRoot>

      <div className="flex w-full items-center gap-6">
        <SliderRoot
          defaultValue={[50]}
          maxValue={100}
          step={1}
          orientation="vertical"
        >
          <SliderTrack>
            <SliderRange />
            <SliderThumb />
          </SliderTrack>
        </SliderRoot>

        <SliderRoot
          defaultValue={[25]}
          maxValue={100}
          step={1}
          orientation="vertical"
        >
          <SliderTrack>
            <SliderRange />
            <SliderThumb />
          </SliderTrack>
        </SliderRoot>
      </div>

      <SliderControlled />
    </div>
  );
}

function SliderControlled() {
  const [value, setValue] = useState([0.3, 0.7]);

  return (
    <SliderRoot
      value={value}
      onChange={setValue}
      minValue={0}
      maxValue={1}
      step={0.1}
    >
      <SliderHeader>
        <Label>Temperature</Label>

        <SliderOutput className="text-muted-foreground text-sm">
          {({ state }) =>
            state.values.map((_, i) => state.getThumbValueLabel(i)).join(", ")
          }
        </SliderOutput>
      </SliderHeader>
      <SliderTrack>
        <SliderRange />
        <SliderThumb />
      </SliderTrack>
    </SliderRoot>
  );
}
