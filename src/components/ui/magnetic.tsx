"use client";

import { useRef, type ReactNode, type PointerEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export function Magnetic({
  children,
  className,
  strength = 0.4,
  cursor = "link",
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
  cursor?: "link" | "text" | "default";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 16, stiffness: 200, mass: 0.4 });
  const springY = useSpring(y, { damping: 16, stiffness: 200, mass: 0.4 });

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function onPointerLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      data-cursor={cursor}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{ x: springX, y: springY }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}
