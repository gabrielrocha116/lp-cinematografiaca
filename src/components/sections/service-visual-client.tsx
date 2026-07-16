"use client";

import dynamic from "next/dynamic";

const visualsByIndex = [
  dynamic(
    () =>
      import("@/components/sections/service-visuals").then(
        (m) => m.OrchestrationVisual
      ),
    { ssr: false }
  ),
  dynamic(
    () =>
      import("@/components/sections/service-visuals").then(
        (m) => m.SyncVisual
      ),
    { ssr: false }
  ),
  dynamic(
    () =>
      import("@/components/sections/service-visuals").then(
        (m) => m.WaveformVisual
      ),
    { ssr: false }
  ),
];

export function ServiceVisual({ index }: { index: number }) {
  const Visual = visualsByIndex[index % visualsByIndex.length];
  return <Visual />;
}
