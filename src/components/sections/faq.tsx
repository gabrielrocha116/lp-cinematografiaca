import { faqs } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section className="relative py-32 md:py-40">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 md:grid-cols-[1fr_1.4fr] md:gap-20 md:px-10">
        <div>
          <Reveal type="blur">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan">
              Perguntas
            </span>
          </Reveal>
          <Reveal type="fade-up" delay={0.1}>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Respostas antes de você perguntar de novo.
            </h2>
          </Reveal>
          <Reveal type="fade-up" delay={0.2}>
            <p className="mt-5 max-w-sm text-mist-dim">
              Não achou o que procurava? Nossa equipe responde toda mensagem
              em até um dia útil.
            </p>
          </Reveal>
        </div>

        <Reveal type="fade-up">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
