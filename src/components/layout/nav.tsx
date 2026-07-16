"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useLenis } from "lenis/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/lib/data";
import { LogoMark } from "@/components/layout/logo-mark";
import { Magnetic } from "@/components/ui/magnetic";
import { cn } from "@/lib/utils";

function useActiveSection() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.5, 1] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return activeId;
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 200,
    mass: 0.2,
  });
  const activeId = useActiveSection();
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, lenis]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        className="h-[2px] origin-left bg-gradient-to-r from-violet via-violet-2 to-cyan"
        style={{ scaleX: progress }}
      />
      <div
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "border-b border-line bg-void/70 shadow-[0_20px_50px_-35px_rgba(0,0,0,0.9)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
          <Magnetic strength={0.25} cursor="link">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="h-7 w-7">
                <LogoMark />
              </span>
              <span className="font-display text-[15px] font-semibold tracking-tight">
                LUMEN
              </span>
            </a>
          </Magnetic>

          <ul className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    data-cursor="link"
                    className={cn(
                      "group relative block py-1 font-mono text-xs uppercase tracking-[0.12em] transition-colors duration-300",
                      isActive
                        ? "text-mist"
                        : "text-mist-dim hover:text-violet-2"
                    )}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-violet-2 transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className="absolute -bottom-2.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Magnetic cursor="link">
              <a
                href="#cta"
                className="group relative isolate flex items-center gap-1.5 overflow-hidden rounded-full bg-mist px-5 py-2.5 font-body text-sm font-semibold text-void transition-transform duration-300 active:scale-[0.97]"
              >
                <span className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-t from-violet-2 via-violet to-cyan opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
                <span className="relative z-10 flex items-center gap-1.5 transition-colors duration-300 group-hover:text-void">
                  Contato
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>
            </Magnetic>
          </div>

          <button
            className="grid h-9 w-9 place-items-center lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[65px] bottom-0 z-40 flex flex-col justify-center bg-void/98 backdrop-blur-xl lg:hidden"
          >
            <nav className="px-8">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-3 py-3 font-display text-4xl font-semibold tracking-tight text-mist transition-colors duration-300 hover:text-violet-2"
                    >
                      <span className="font-mono text-xs text-mist-faint">
                        0{i + 1}
                      </span>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.06 * navLinks.length + 0.15,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-10"
              >
                <a
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-mist px-6 py-3 font-body text-sm font-semibold text-void"
                >
                  Falar com a produção
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
