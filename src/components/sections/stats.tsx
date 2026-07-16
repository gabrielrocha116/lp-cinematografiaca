"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { stats } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

function StatItem({
  value,
  suffix,
  label,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [inView, value, count]);

  return (
    <div ref={ref} className="border-t border-line py-8 first:border-t-0 md:border-t-0 md:border-l md:py-0 md:pl-8 md:first:border-l-0 md:first:pl-0">
      <div className="flex items-baseline font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        <motion.span className="text-gradient">{rounded}</motion.span>
        <span className="text-gradient">{suffix}</span>
      </div>
      <p className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-mist-faint">
        {label}
      </p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative py-32 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal type="fade-up">
          <div className="grid grid-cols-1 gap-8 rounded-3xl border border-line bg-void-3/40 p-10 sm:grid-cols-2 md:grid-cols-4 md:p-14">
            {stats.map((s) => (
              <StatItem key={s.label} {...s} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
