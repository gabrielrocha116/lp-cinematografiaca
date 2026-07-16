"use client";

import { type ButtonHTMLAttributes, type ReactNode, useState, type MouseEvent } from "react";
import { Magnetic } from "@/components/ui/magnetic";
import { cn } from "@/lib/utils";

type Ripple = { id: number; x: number; y: number };

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "ghost";
  icon?: ReactNode;
}

export function Button({
  children,
  variant = "primary",
  icon,
  className,
  onClick,
  ...props
}: ButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((r) => [
      ...r,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
    ]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 700);
    onClick?.(e);
  }

  const base =
    "group relative isolate flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 font-body text-sm font-semibold tracking-wide transition-transform duration-300 active:scale-[0.97]";

  const variants = {
    primary:
      "bg-mist text-void shadow-[0_0_0_1px_rgba(244,242,249,0.1),0_20px_40px_-15px_rgba(124,92,252,0.5)] hover:shadow-[0_0_0_1px_rgba(244,242,249,0.2),0_25px_50px_-12px_rgba(124,92,252,0.75)]",
    ghost:
      "text-mist border border-line-strong hover:border-mist/40 bg-void-3/40 backdrop-blur-sm",
  };

  return (
    <Magnetic cursor="link">
      <button
        className={cn(base, variants[variant], className)}
        onClick={handleClick}
        {...props}
      >
        {variant === "primary" && (
          <span className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-t from-violet-2 via-violet to-cyan opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
        )}
        <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-void">
          {children}
          {icon}
        </span>
        {ripples.map((r) => (
          <span
            key={r.id}
            className="pointer-events-none absolute -z-10 rounded-full bg-mist/30"
            style={{
              left: r.x,
              top: r.y,
              width: 10,
              height: 10,
              transform: "translate(-50%,-50%)",
              animation: "ripple 700ms ease-out forwards",
            }}
          />
        ))}
      </button>
    </Magnetic>
  );
}
