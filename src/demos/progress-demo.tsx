"use client";

import { useEffect, useState } from "react";
import { Progress, ProgressIndicator } from "~/components/ui/progress";

export function ProgressDemo() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress aria-label="Progress demo" value={progress} className="w-[60%]">
      <ProgressIndicator />
    </Progress>
  );
}
