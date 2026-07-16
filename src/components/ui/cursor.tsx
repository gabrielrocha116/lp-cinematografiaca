"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<"default" | "link" | "text">("default");
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { damping: 28, stiffness: 280, mass: 0.6 });
  const ringY = useSpring(y, { damping: 28, stiffness: 280, mass: 0.6 });

  const raf = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mq.matches);
    document.documentElement.classList.toggle("has-cursor", mq.matches);
    const onChange = (e: MediaQueryListEvent) => {
      setEnabled(e.matches);
      document.documentElement.classList.toggle("has-cursor", e.matches);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const move = (e: PointerEvent) => {
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        x.set(e.clientX);
        y.set(e.clientY);
        setVisible(true);
      });

      const target = e.target as HTMLElement;
      const interactive = target.closest("[data-cursor]");
      setVariant(
        (interactive?.getAttribute("data-cursor") as "link" | "text" | null) ??
          "default"
      );
    };

    const leave = () => setVisible(false);

    window.addEventListener("pointermove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseleave", leave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100]"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s ease" }}
      aria-hidden="true"
    >
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-mist mix-blend-difference"
        style={{
          x,
          y,
          width: 8,
          height: 8,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-mist/70 mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: variant === "link" ? 64 : variant === "text" ? 4 : 34,
          height: variant === "link" ? 64 : variant === "text" ? 4 : 34,
          opacity: variant === "link" ? 0.9 : 0.5,
        }}
        transition={{ type: "spring", damping: 24, stiffness: 300 }}
      />
    </div>
  );
}
