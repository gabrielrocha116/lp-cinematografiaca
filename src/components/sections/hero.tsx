"use client";

import { ArrowRight, Play, Sparkle } from "lucide-react";
import { SplitText } from "@/components/ui/split-text";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { cn } from "@/lib/utils";

const corners = [
  "top-6 left-6 border-t border-l rounded-tl-lg",
  "top-6 right-6 border-t border-r rounded-tr-lg",
  "bottom-6 left-6 border-b border-l rounded-bl-lg",
  "bottom-6 right-6 border-b border-r rounded-br-lg",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-28 pt-36 md:pt-44">
      {/* cinematic arc glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[56vh] w-[130vw] max-w-[1500px] -translate-x-1/2 -translate-y-[30%] rounded-full opacity-70 blur-[110px]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, rgba(124,92,252,0.55), rgba(72,224,210,0.18) 45%, transparent 72%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[50vh] bg-gradient-to-b from-void via-transparent to-void"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-[820px] flex-col items-center px-6 text-center md:px-10">
        <Reveal type="blur" delay={0.1}>
          <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-void-3/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-mist-dim backdrop-blur-sm">
            <Sparkle className="h-3 w-3 text-cyan" />
            Produção Audiovisual Cinematográfica
          </span>
        </Reveal>

        <h1 className="mt-7 text-balance font-display text-[12vw] leading-[1.03] font-semibold tracking-tight sm:text-[8vw] md:text-[4.6vw] lg:text-[3.8vw]">
          <SplitText text="Cada frame conta" delay={0.25} />
          <br />
          <SplitText text="uma história." delay={0.45} className="text-gradient" />
        </h1>

        <Reveal type="fade-up" delay={0.75} duration={0.9}>
          <p className="mt-7 max-w-lg text-balance font-body text-base leading-relaxed text-mist-dim md:text-lg">
            A LUMEN transforma roteiro, luz e som em filmes que prendem a
            atenção do primeiro corte à última cena — para marcas que não
            têm tempo a perder com produções genéricas.
          </p>
        </Reveal>

        <Reveal type="fade-up" delay={0.9}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
              Ver portfólio
            </Button>
            <Button variant="ghost">Falar com a produção</Button>
          </div>
        </Reveal>
      </div>

      <Reveal type="scale" delay={0.3} duration={1} className="relative mt-20 px-6 md:px-10">
        <div className="mx-auto w-full max-w-5xl">
          <div className="group relative aspect-video overflow-hidden rounded-3xl border border-line-strong bg-void-3 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.85)]">
            <div
              className="absolute inset-0 animate-drift"
              style={{
                background:
                  "radial-gradient(circle at 25% 20%, rgba(124,92,252,0.4), transparent 55%), radial-gradient(circle at 78% 82%, rgba(72,224,210,0.28), transparent 55%), linear-gradient(160deg, #17121f, #0b0a0f 70%)",
              }}
              aria-hidden="true"
            />

            <div
              className="animate-sweep absolute inset-y-0 left-0 w-1/3 skew-x-[-20deg] bg-linear-to-r from-transparent via-mist/10 to-transparent"
              aria-hidden="true"
            />

            <div className="grain-local absolute inset-0" aria-hidden="true" />

            <div className="absolute inset-x-0 top-0 h-[7%] bg-void" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 h-[7%] bg-void" aria-hidden="true" />

            {corners.map((pos) => (
              <span
                key={pos}
                className={cn("absolute h-7 w-7 border-mist/25", pos)}
                aria-hidden="true"
              />
            ))}

            <div className="absolute inset-0 grid place-items-center">
              <Magnetic strength={0.2} cursor="link">
                <button
                  type="button"
                  aria-label="Assistir ao showreel"
                  className="grid h-20 w-20 place-items-center rounded-full border border-mist/25 bg-void/50 backdrop-blur-md transition-transform duration-300 group-hover:scale-105"
                >
                  <Play className="h-6 w-6 translate-x-0.5 fill-mist text-mist" />
                </button>
              </Magnetic>
            </div>

            <div className="absolute bottom-8 left-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-mist-dim">
                Showreel 2026 · 01:42
              </span>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="relative mx-auto mt-10 flex max-w-5xl items-center justify-between px-6 md:px-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-mist-faint">
          Scroll
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-mist-faint">
          Mais de 320 filmes entregues
        </span>
      </div>
    </section>
  );
}
