import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/data/courses";
import { MessageCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="bg-primary py-20 md:py-28" aria-labelledby="cta-heading">
      <div className="container text-center">
        <p className="font-amoresa text-lg text-gold">Próximo passo</p>
        <h2
          id="cta-heading"
          className="mt-2 font-serif text-3xl font-semibold text-primary-foreground md:text-4xl"
        >
          Pronta para transformar sua prática terapêutica?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/70 md:text-lg">
          Entre em contato pelo WhatsApp e descubra a formação ideal para sua jornada profissional.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-8 gap-2 bg-gold text-gold-foreground hover:bg-gold/90"
        >
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-5 w-5" />
            Falar pelo WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
