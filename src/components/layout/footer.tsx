import { ArrowUp } from "lucide-react";
import { LogoMark } from "@/components/layout/logo-mark";
import { Magnetic } from "@/components/ui/magnetic";

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="M4 4l16 16M20 4L4 20" strokeLinecap="round" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M7.5 10.5v6M7.5 7.75v.01M12 16.5v-3.75c0-1.1.9-2 2-2s2 .9 2 2v3.75M12 12.75v3.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path
        d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.6 2.8 5.5 3.1 5.5 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.1 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const columns = [
  {
    title: "Serviços",
    links: ["Institucional", "Publicidade", "Documentário", "Eventos"],
  },
  {
    title: "Estúdio",
    links: ["Sobre", "Equipe", "Imprensa", "Contato"],
  },
  {
    title: "Recursos",
    links: ["Portfólio", "Reel", "Processo", "Blog"],
  },
  {
    title: "Legal",
    links: ["Privacidade", "Termos", "Direitos de imagem"],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line pt-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-2 gap-10 pb-16 md:grid-cols-6">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="h-7 w-7">
                <LogoMark />
              </span>
              <span className="font-display text-[15px] font-semibold tracking-tight">
                LUMEN
              </span>
            </div>
            <p className="mt-5 max-w-[220px] text-sm leading-relaxed text-mist-dim">
              Cinema para marcas que não têm tempo a perder com produções
              genéricas.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" data-cursor="link" aria-label="X (Twitter)">
                <XIcon className="h-4 w-4 text-mist-faint transition-colors hover:text-mist" />
              </a>
              <a href="#" data-cursor="link" aria-label="LinkedIn">
                <LinkedInIcon className="h-4 w-4 text-mist-faint transition-colors hover:text-mist" />
              </a>
              <a href="#" data-cursor="link" aria-label="GitHub">
                <GitHubIcon className="h-4 w-4 text-mist-faint transition-colors hover:text-mist" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.12em] text-mist-faint">
                {col.title}
              </h4>
              <ul className="mt-5 flex flex-col gap-3.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      data-cursor="link"
                      className="text-sm text-mist-dim transition-colors hover:text-mist"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line py-8 sm:flex-row">
          <p className="font-mono text-[11px] text-mist-faint">
            © {new Date().getFullYear()} LUMEN Filmes. Todos os direitos
            reservados.
          </p>
          <Magnetic cursor="link">
            <a
              href="#top"
              className="flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-mist-dim transition-colors hover:text-mist"
            >
              Voltar ao topo
              <ArrowUp className="h-3 w-3" />
            </a>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
