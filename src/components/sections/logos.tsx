import { logos } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

export function Logos() {
  const loop = [...logos, ...logos];

  return (
    <section className="relative border-y border-line py-14">
      <Reveal type="fade" className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.14em] text-mist-faint">
          Marcas que já confiaram na LUMEN
        </p>
      </Reveal>

      <div className="relative mt-8 overflow-hidden mask-fade-b">
        <div
          className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-void to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-void to-transparent"
          aria-hidden="true"
        />
        <div className="flex w-max animate-marquee items-center gap-16">
          {loop.map((logo, i) => (
            <span
              key={i}
              className="font-display text-xl font-semibold tracking-tight text-mist-faint opacity-60 transition-opacity hover:opacity-100"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
