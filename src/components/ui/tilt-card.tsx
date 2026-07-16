"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export function TiltCard({
  children,
  className,
  glow = true,
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(0, { damping: 20, stiffness: 220 });
  const rotateY = useSpring(0, { damping: 20, stiffness: 220 });
  const mx = useSpring(50, { damping: 24, stiffness: 200 });
  const my = useSpring(50, { damping: 24, stiffness: 200 });

  function onMove(e: PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    rotateY.set((px - 0.5) * 14);
    rotateX.set((0.5 - py) * 14);
    mx.set(px * 100);
    my.set(py * 100);
  }

  function onLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  const bg = useMotionTemplate`radial-gradient(340px circle at ${mx}% ${my}%, rgba(124,92,252,0.18), transparent 65%)`;

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={cn(
        "group relative rounded-3xl border border-line bg-void-3/50 backdrop-blur-sm",
        "transition-colors duration-300 hover:border-line-strong",
        className
      )}
    >
      {glow && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: bg }}
          aria-hidden="true"
        />
      )}
      <div className="relative">{children}</div>
    </motion.div>
  );
}
