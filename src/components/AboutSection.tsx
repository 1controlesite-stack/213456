import { useState } from "react";
import { Button } from "@/components/ui/button";
import BiographyModal from "@/components/BiographyModal";

const AboutSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-20 md:py-28" aria-labelledby="sobre-heading">
      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex justify-center md:order-1">
            <div className="aspect-[3/4] w-full max-w-sm overflow-hidden rounded-lg bg-muted">
              <img
                src="/placeholder.svg"
                alt="Retrato profissional de Célia Franz"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="md:order-2">
            <h2 id="sobre-heading" className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Sobre Célia Franz
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Terapeuta integrativa e educadora com mais de duas décadas dedicadas à formação de terapeutas. Célia Franz desenvolveu metodologias exclusivas que unem rigor técnico e sensibilidade, preparando profissionais para uma prática clínica profunda e transformadora.
            </p>
            <Button
              variant="outline"
              className="mt-6"
              onClick={() => setModalOpen(true)}
            >
              Ler biografia completa
            </Button>
          </div>
        </div>
      </div>

      <BiographyModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default AboutSection;
