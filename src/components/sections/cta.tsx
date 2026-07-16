"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SplitText } from "@/components/ui/split-text";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section id="cta" className="relative overflow-hidden py-40 md:py-52">
      <div
        className="absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full opacity-40"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, #7c5cfc 20%, transparent 40%, #48e0d2 60%, transparent 80%, #7c5cfc 100%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/60 blur-[70px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
        <Reveal type="blur">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan">
            Vamos para as telas
          </span>
        </Reveal>

        <h2 className="mt-6 font-display text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
          <SplitText text="Vamos contar" />
          <br />
          <SplitText text="sua história?" className="text-gradient" delay={0.15} />
        </h2>

        <Reveal type="fade-up" delay={0.3}>
          <p className="mx-auto mt-6 max-w-md text-mist-dim">
            Conte pra gente sua ideia, feche o roteiro em uma reunião e veja
            seu filme ganhar forma em poucas semanas.
          </p>
        </Reveal>

        <Reveal type="fade-up" delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
              Pedir orçamento
            </Button>
            <Button variant="ghost">Ver reel completo</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
