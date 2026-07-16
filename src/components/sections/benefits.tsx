import { Aperture, Film, Clapperboard, Zap, type LucideIcon } from "lucide-react";
import { benefits } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";

const icons: Record<string, LucideIcon> = {
  Aperture,
  Film,
  Clapperboard,
  Zap,
};

export function Benefits() {
  return (
    <section id="product" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal type="blur">
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan">
                Por que a LUMEN
              </span>
            </Reveal>
            <Reveal type="fade-up" delay={0.1}>
              <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                Feito para marcas que
                <span className="text-gradient"> não têm tempo a perder.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal type="fade-up" delay={0.2} className="max-w-sm">
            <p className="text-mist-dim">
              Cada etapa da produção é pensada em torno de uma regra: um
              filme só ganha a confiança de quem assiste quando é bem
              dirigido, bem contado e entregue no prazo certo.
            </p>
          </Reveal>
        </div>

        <RevealGroup
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.1}
        >
          {benefits.map((b) => {
            const Icon = icons[b.icon];
            return (
              <RevealItem key={b.title} type="blur">
                <TiltCard className="h-full p-7">
                  <div className="mb-8 grid h-11 w-11 place-items-center rounded-xl border border-line-strong bg-void-4/60">
                    <Icon className="h-5 w-5 text-violet-2" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist-dim">
                    {b.description}
                  </p>
                </TiltCard>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
