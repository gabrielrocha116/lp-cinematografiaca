import { testimonials } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

function Row({
  items,
  reverse = false,
}: {
  items: typeof testimonials;
  reverse?: boolean;
}) {
  const loop = [...items, ...items];
  return (
    <div className="group overflow-hidden">
      <div
        className={cn(
          "flex w-max gap-5",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        style={{ animationPlayState: "running" }}
      >
        {loop.map((t, i) => (
          <div
            key={i}
            className="w-[380px] shrink-0 rounded-3xl border border-line bg-void-3/50 p-7 backdrop-blur-sm transition-colors hover:border-line-strong group-hover:[animation-play-state:paused]"
          >
            <p className="text-[15px] leading-relaxed text-mist">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-violet to-cyan font-mono text-[11px] font-medium text-void">
                {initials(t.name)}
              </div>
              <div>
                <div className="text-sm font-medium">{t.name}</div>
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-mist-faint">
                  {t.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  const mid = Math.ceil(testimonials.length / 2);
  return (
    <section className="relative py-32 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal type="blur">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan">
            Quem já filmou com a gente
          </span>
        </Reveal>
        <Reveal type="fade-up" delay={0.1}>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Marca que filma com a LUMEN, repete.
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-16 flex flex-col gap-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-void to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-void to-transparent md:w-32" />
        <Row items={testimonials.slice(0, mid)} />
        <Row items={testimonials.slice(mid)} reverse />
      </div>
    </section>
  );
}
