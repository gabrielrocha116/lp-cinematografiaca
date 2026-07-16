import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Logos } from "@/components/sections/logos";
import { Benefits } from "@/components/sections/benefits";
import { Services } from "@/components/sections/services";
import { Projects } from "@/components/sections/projects";
import { Process } from "@/components/sections/process";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Logos />
        <Benefits />
        <Services />
        <Projects />
        <Process />
        <Stats />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
