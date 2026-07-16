import { services } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { ServiceVisual } from "@/components/sections/service-visual-client";

export function Services() {
  return (
    <section id="services" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal type="blur">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan">
            O que fazemos
          </span>
        </Reveal>
        <Reveal type="fade-up" delay={0.1}>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Três formatos, uma linguagem visual.
          </h2>
        </Reveal>

        <div className="mt-20 flex flex-col gap-6">
          {services.map((service, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={service.index} type="fade-up" delay={0.05}>
                <div
                  className={cn(
                    "grid grid-cols-1 items-center gap-10 rounded-3xl border border-line bg-void-3/40 p-8 md:grid-cols-2 md:gap-16 md:p-14",
                    reversed && "md:[&>*:first-child]:order-2"
                  )}
                >
                  <div>
                    <span className="font-mono text-sm text-mist-faint">
                      {service.index}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 max-w-md text-mist-dim leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-8 flex items-baseline gap-2 border-t border-line pt-6">
                      <span className="font-display text-3xl font-semibold text-gradient">
                        {service.stat.value}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-[0.1em] text-mist-faint">
                        {service.stat.label}
                      </span>
                    </div>
                  </div>

                  <div className="h-52 rounded-2xl border border-line bg-void-4/50 p-6 md:h-64">
                    <ServiceVisual index={i} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
