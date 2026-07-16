"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.03,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "span" | "h1" | "h2";
}) {
  const words = text.split(" ");
  const MotionTag = motion[Tag];

  return (
    <MotionTag
      className={cn("inline-block", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, wi) => (
        <span key={wi} className="inline-block overflow-hidden pb-[0.15em] align-bottom">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%", rotate: 4 },
              show: { y: "0%", rotate: 0 },
            }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
            {wi !== words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
