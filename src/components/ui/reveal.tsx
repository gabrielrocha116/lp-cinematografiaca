"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealType = "fade-up" | "fade" | "blur" | "mask" | "scale";

const variants: Record<RevealType, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(14px)", y: 16 },
    show: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
  mask: {
    hidden: { clipPath: "inset(0 0 100% 0)", opacity: 1 },
    show: { clipPath: "inset(0 0 0% 0)", opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    show: { opacity: 1, scale: 1 },
  },
};

export function Reveal({
  children,
  type = "fade-up",
  delay = 0,
  duration = 0.8,
  className,
  once = true,
  amount = 0.3,
  as: Tag = "div",
}: {
  children: ReactNode;
  type?: RevealType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
  as?: "div" | "span" | "li";
}) {
  const MotionTag = motion[Tag];
  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants[type]}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  once = true,
  amount = 0.3,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
  amount?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ staggerChildren: stagger }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  type = "fade-up",
  duration = 0.7,
}: {
  children: ReactNode;
  className?: string;
  type?: RevealType;
  duration?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      variants={variants[type]}
      transition={{ duration, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
