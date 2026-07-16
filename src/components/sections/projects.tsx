"use client";

import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic";

export function Projects() {
  return (
    <section id="work" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal type="blur">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan">
            Trabalhos recentes
          </span>
        </Reveal>
        <Reveal type="fade-up" delay={0.1}>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Feito pela LUMEN.
          </h2>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-16 max-w-[1400px] px-6 md:px-10">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className="sticky mb-6"
            style={{ top: `${6 + i * 1.1}rem`, zIndex: i + 1 }}
          >
            <Reveal type="scale" amount={0.5}>
              <Magnetic strength={0.06} cursor="link" className="block w-full">
                <div className="flex flex-col justify-between gap-8 rounded-3xl border border-line-strong bg-void-3/90 p-8 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:flex-row sm:items-center md:p-12">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-mist-faint">
                      {project.category}
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <div className="font-display text-xl font-semibold text-gradient sm:text-2xl">
                        {project.metric}
                      </div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-mist-faint">
                        resultado
                      </div>
                    </div>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-line-strong transition-colors group-hover:border-mist/40">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </Magnetic>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
