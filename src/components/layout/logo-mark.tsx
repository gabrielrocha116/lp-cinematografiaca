import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-full w-full", className)}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="15" stroke="url(#lm-grad)" strokeWidth="1.4" fill="none" opacity="0.5" />
      <ellipse
        cx="16"
        cy="16"
        rx="14"
        ry="5"
        stroke="url(#lm-grad)"
        strokeWidth="1.2"
        fill="none"
        transform="rotate(-18 16 16)"
      />
      <circle cx="16" cy="16" r="5.5" fill="url(#lm-grad)" />
      <defs>
        <linearGradient id="lm-grad" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#48e0d2" />
        </linearGradient>
      </defs>
    </svg>
  );
}
