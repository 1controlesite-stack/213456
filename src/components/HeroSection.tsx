import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  const scrollToCourses = () => {
    document.getElementById("formacoes")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative overflow-hidden bg-secondary py-24 md:py-32">
      {/* Subtle decorative accent line */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="font-amoresa text-lg text-gold md:text-xl">Célia Franz</p>
            <h1 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight text-primary md:text-4xl lg:text-5xl">
              Ecossistema de formações de terapeutas do Básico ao Avançado, nível PREMIUM.                
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Educação estruturada em homeopatia, constelação familiar, mapas e terapias integrativas. Método, sensibilidade e prática para a sua jornada como terapeuta.
            </p>
            <Button onClick={scrollToCourses} className="mt-8 gap-2 bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
              Conhecer formações
              <ArrowDown className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center justify-center">
            <div className="aspect-[4/5] w-full max-w-md overflow-hidden rounded-lg border border-border bg-muted">
              <img src="/placeholder.svg" alt="Célia Franz — terapeuta e educadora em formações avançadas" className="h-full w-full object-cover" loading="eager" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;