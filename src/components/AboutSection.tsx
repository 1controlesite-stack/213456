import { useState } from "react";
import { Button } from "@/components/ui/button";
import BiographyModal from "@/components/BiographyModal";
const AboutSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return <section className="py-20 md:py-28" aria-labelledby="sobre-heading">
      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex justify-center md:order-1">
            <div className="aspect-[3/4] w-full max-w-sm overflow-hidden rounded-lg border border-border bg-muted">
              <img alt="Retrato profissional de Célia Franz" className="h-full w-full object-cover" loading="lazy" src="/lovable-uploads/cbf167ff-e9cd-41ce-9211-0ca3a1007712.jpg" />
            </div>
          </div>

          <div className="md:order-2">
            <p className="font-amoresa text-lg text-gold">Sobre</p>
            <h2 id="sobre-heading" className="mt-2 font-serif text-3xl font-semibold text-primary md:text-4xl">
              Célia Franz
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Neuropsicanalista integrativa e educadora com aproximadamente 30 anos de experiência clínica dedicados à formação de terapeutas. Célia desenvolveu a metodologia Caminho das Riquezas, unindo rigor técnico, sensibilidade clínica e respeito às raízes do saber humano ancestral.
            </p>
            <Button variant="outline" className="mt-6 border-primary/20 text-primary hover:bg-primary/5" onClick={() => setModalOpen(true)}>
              Ler biografia completa
            </Button>
          </div>
        </div>
      </div>

      <BiographyModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>;
};
export default AboutSection;