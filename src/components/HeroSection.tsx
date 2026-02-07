import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToCourses = () => {
    document.getElementById("formacoes")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-32">
      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Formações terapêuticas avançadas para quem busca profundidade
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
              Educação estruturada em homeopatia, constelação familiar, mapas e terapias integrativas. Método, sensibilidade e prática para a sua jornada como terapeuta.
            </p>
            <Button
              onClick={scrollToCourses}
              className="mt-8 gap-2 bg-gold text-gold-foreground hover:bg-gold/90"
              size="lg"
            >
              Conhecer formações
              <ArrowDown className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center justify-center">
            <div className="aspect-[4/5] w-full max-w-md overflow-hidden rounded-lg bg-primary-foreground/10">
              <img
                src="/placeholder.svg"
                alt="Célia Franz — terapeuta e educadora em formações avançadas"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
