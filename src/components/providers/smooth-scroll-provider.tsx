"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    const onUpdate = () => ScrollTrigger.update();
    lenis.on("scroll", onUpdate);
    return () => {
      lenis.off("scroll", onUpdate);
    };
  }, [lenis]);

  useEffect(() => {
    if (!lenis) return;
    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
    };
  }, [lenis]);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        touchMultiplier: 1.6,
        autoRaf: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
