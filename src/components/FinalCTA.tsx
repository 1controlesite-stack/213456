import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/data/courses";
import { MessageCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="bg-primary py-20 md:py-28" aria-labelledby="cta-heading">
      <div className="container text-center">
        <h2
          id="cta-heading"
          className="font-serif text-3xl font-semibold text-primary-foreground md:text-4xl"
        >
          Pronta para transformar sua prática terapêutica?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/80 md:text-lg">
          Entre em contato pelo WhatsApp e descubra a formação ideal para sua jornada profissional.
        </p>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="mt-8 gap-2"
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
