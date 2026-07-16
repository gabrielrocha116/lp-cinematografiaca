"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "gsap/ScrollTrigger";
import { processSteps } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [staticLayout, setStaticLayout] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setStaticLayout(reduce);
    if (reduce) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      const distance = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setActive(
              Math.min(
                processSteps.length - 1,
                Math.floor(self.progress * processSteps.length)
              )
            );
          },
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative overflow-hidden border-y border-line bg-void-2"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/10 blur-[140px]" />

      <div
        ref={trackRef}
        className={cn(
          "relative flex will-change-transform",
          staticLayout
            ? "flex-col gap-6 px-6 py-24 md:px-10"
            : "h-[100svh] w-max flex-row items-center"
        )}
      >
        <div
          className={cn(
            "flex shrink-0 flex-col justify-center px-6 md:px-10",
            !staticLayout && "h-full w-screen"
          )}
        >
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan">
            Como funciona
          </span>
          <h2 className="mt-4 max-w-md font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Quatro etapas, do roteiro à entrega.
          </h2>
          <p className="mt-5 max-w-sm text-mist-dim">
            {staticLayout
              ? "Acompanhe o processo abaixo."
              : "Continue rolando — esta seção se move para o lado."}
          </p>
        </div>

        {processSteps.map((step, i) => (
          <div
            key={step.number}
            className={cn(
              "shrink-0 border-line px-6 md:px-10",
              staticLayout
                ? "border-t pt-10"
                : "flex h-full w-screen items-center border-l md:w-[46vw]"
            )}
          >
            <div className="max-w-md">
              <span
                className={cn(
                  "font-display text-6xl font-semibold tracking-tight transition-colors duration-500 sm:text-7xl",
                  active === i && !staticLayout
                    ? "text-gradient"
                    : "text-void-4"
                )}
              >
                {step.number}
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {step.title}
              </h3>
              <p className="mt-4 leading-relaxed text-mist-dim">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {!staticLayout && (
        <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {processSteps.map((step, i) => (
            <span
              key={step.number}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                active === i ? "w-8 bg-cyan" : "w-1.5 bg-line-strong"
              )}
            />
          ))}
        </div>
      )}
    </section>
  );
}
