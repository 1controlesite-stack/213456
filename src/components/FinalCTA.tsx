import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/data/courses";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const FinalCTA = () => {
  const reveal = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="relative bg-primary py-20 md:py-28 overflow-hidden" aria-labelledby="cta-heading">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gold/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -bottom-20 h-48 w-48 rounded-full bg-gold/[0.06] blur-3xl" />

      <div
        ref={reveal.ref}
        className={`container relative text-center reveal ${reveal.isVisible ? "visible" : ""}`}
      >
        <p className="font-amoresa text-xl text-gold">Próximo passo</p>
        <h2
          id="cta-heading"
          className="mt-2 font-serif text-3xl font-semibold text-primary-foreground md:text-4xl"
        >
          Pronta para transformar sua prática terapêutica?
        </h2>
        <div className="gold-divider mx-auto mt-4 w-32" />
        <p className="mx-auto mt-6 max-w-xl text-base text-primary-foreground/70 md:text-lg">
          Entre em contato pelo WhatsApp e descubra a formação ideal para sua
          jornada profissional.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-8 gap-2 bg-gold text-gold-foreground shadow-lg shadow-gold/20 hover:bg-gold/90 hover:shadow-xl hover:shadow-gold/30 transition-all duration-300"
        >
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Falar pelo WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
