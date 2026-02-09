import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const HeroSection = () => {
  const scrollToCourses = () => {
    document.getElementById("formacoes")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const textReveal = useScrollReveal({ threshold: 0.1 });
  const imageReveal = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="relative overflow-hidden bg-secondary py-24 md:py-36">
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/[0.04] blur-3xl" />

      <div className="container relative">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div
            ref={textReveal.ref}
            className={`reveal-left md:col-span-7 ${textReveal.isVisible ? "visible" : ""}`}
          >
            <p className="font-amoresa text-xl text-gold md:text-2xl">
              Célia Franz
            </p>
            <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-primary md:text-4xl lg:text-5xl">
              Ecossistema de formações de terapeutas do Básico ao Avançado, nível{" "}
              <span className="text-gold">PREMIUM</span>.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Educação estruturada em homeopatia, constelação familiar, mapas e
              terapias integrativas. Método, sensibilidade e prática para a sua
              jornada como terapeuta.
            </p>
            <Button
              onClick={scrollToCourses}
              className="mt-8 gap-2 bg-accent text-accent-foreground shadow-lg shadow-accent/20 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/25 transition-all duration-300"
              size="lg"
            >
              Conhecer formações
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </Button>
          </div>

          <div
            ref={imageReveal.ref}
            className={`reveal-right md:col-span-5 ${imageReveal.isVisible ? "visible" : ""}`}
          >
            <div className="relative mx-auto max-w-md">
              {/* Asymmetric gold frame accent */}
              <div className="absolute -right-3 -top-3 h-24 w-24 rounded-tr-2xl border-r-2 border-t-2 border-gold/30" />
              <div className="absolute -bottom-3 -left-3 h-24 w-24 rounded-bl-2xl border-b-2 border-l-2 border-gold/30" />
              <div className="aspect-[4/5] w-full overflow-hidden rounded-lg shadow-2xl shadow-primary/20">
                <img
                  alt="Célia Franz — terapeuta e educadora em formações avançadas"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                  src="/lovable-uploads/4d2ce723-795f-4abf-a5b1-353f21613c99.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
