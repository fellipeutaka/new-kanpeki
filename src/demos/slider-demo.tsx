"use client";

import { useState } from "react";
import { Label } from "~/components/ui/label/label";
import * as Slider from "~/components/ui/slider/namespace";

export function SliderDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col flex-wrap gap-6 md:flex-row">
      <Slider.Root defaultValue={[50]} maxValue={100} step={1}>
        <Slider.Track>
          <Slider.Range />
          <Slider.Thumb />
        </Slider.Track>
      </Slider.Root>

      <Slider.Root defaultValue={[25, 50]} maxValue={100} step={1}>
        <Slider.Track>
          <Slider.Range />
          <Slider.Thumb />
        </Slider.Track>
      </Slider.Root>

      <Slider.Root defaultValue={[10, 20]} maxValue={100} step={10}>
        <Slider.Track>
          <Slider.Range />
          <Slider.Thumb />
        </Slider.Track>
      </Slider.Root>

      <div className="flex w-full items-center gap-6">
        <Slider.Root
          defaultValue={[50]}
          maxValue={100}
          step={1}
          orientation="vertical"
        >
          <Slider.Track>
            <Slider.Range />
            <Slider.Thumb />
          </Slider.Track>
        </Slider.Root>

        <Slider.Root
          defaultValue={[25]}
          maxValue={100}
          step={1}
          orientation="vertical"
        >
          <Slider.Track>
            <Slider.Range />
            <Slider.Thumb />
          </Slider.Track>
        </Slider.Root>
      </div>

      <SliderControlled />
    </div>
  );
}

function SliderControlled() {
  const [value, setValue] = useState([0.3, 0.7]);

  return (
    <Slider.Root
      value={value}
      onChange={setValue}
      minValue={0}
      maxValue={1}
      step={0.1}
    >
      <Slider.Header>
        <Label>Temperature</Label>

        <Slider.Output className="text-muted-foreground text-sm">
          {({ state }) =>
            state.values.map((_, i) => state.getThumbValueLabel(i)).join(", ")
          }
        </Slider.Output>
      </Slider.Header>
      <Slider.Track>
        <Slider.Range />
        <Slider.Thumb />
      </Slider.Track>
    </Slider.Root>
  );
}
