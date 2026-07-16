"use client";

import { motion } from "framer-motion";

const NODES = [
  { x: 30, y: 60 },
  { x: 120, y: 24 },
  { x: 120, y: 100 },
  { x: 210, y: 44 },
  { x: 210, y: 92 },
  { x: 290, y: 66 },
];

const EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [2, 4],
  [3, 5],
  [4, 5],
];

export function OrchestrationVisual() {
  return (
    <svg viewBox="0 0 320 130" className="h-full w-full">
      {EDGES.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
          stroke="url(#edge-grad)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: i * 0.12, ease: "easeOut" }}
        />
      ))}
      {NODES.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i === 5 ? 6 : 4}
          fill={i === 5 ? "#48e0d2" : "#a78bfa"}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        />
      ))}
      {NODES.map((n, i) => (
        <motion.circle
          key={`pulse-${i}`}
          cx={n.x}
          cy={n.y}
          r={4}
          fill="none"
          stroke="#7c5cfc"
          strokeWidth="1"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          animate={{ scale: [1, 4], opacity: [0.5, 0] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            delay: i * 0.35,
            ease: "easeOut",
          }}
        />
      ))}
      <defs>
        <linearGradient id="edge-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7c5cfc" />
          <stop offset="100%" stopColor="#48e0d2" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function SyncVisual() {
  const bars = [40, 65, 30, 80, 50, 90, 45, 70, 35, 60, 85, 55];
  return (
    <div className="flex h-full w-full items-end gap-2 px-2">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-t-sm bg-gradient-to-t from-violet-soft via-violet to-violet-2"
          initial={{ height: "6%" }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </div>
  );
}

export function WaveformVisual() {
  const bars = Array.from({ length: 28 }, (_, i) =>
    Math.round(30 + Math.sin(i * 0.7) * 24 + Math.sin(i * 2.3) * 12)
  );
  return (
    <div className="flex h-full w-full items-center gap-[3px] px-2">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-full bg-gradient-to-t from-cyan to-violet-2"
          style={{ height: `${h}%` }}
          animate={{ scaleY: [0.4, 1, 0.6, 1, 0.4] }}
          transition={{
            duration: 1.8 + (i % 5) * 0.15,
            repeat: Infinity,
            delay: i * 0.04,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
