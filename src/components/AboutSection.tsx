import { useState } from "react";
import { Button } from "@/components/ui/button";
import BiographyModal from "@/components/BiographyModal";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
const AboutSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const imageReveal = useScrollReveal({
    threshold: 0.15
  });
  const textReveal = useScrollReveal({
    threshold: 0.15
  });
  return <section className="relative py-20 overflow-hidden shadow-none opacity-100 md:py-[115px]" aria-labelledby="sobre-heading">
      {/* Subtle decorative blob */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-gold/[0.03] blur-3xl" />

      <div className="container relative">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div ref={imageReveal.ref} className={`reveal-left flex justify-center md:order-1 md:col-span-5 ${imageReveal.isVisible ? "visible" : ""}`}>
            <div className="relative">
              {/* Asymmetric accent */}
              <div className="absolute -left-4 -top-4 h-full w-full rounded-lg bg-gradient-to-br from-gold/10 to-transparent" />
              <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-lg shadow-xl shadow-primary/10">
                <img alt="Retrato profissional de Célia Franz" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" src="/lovable-uploads/7a1460b3-d398-45cc-86f1-736d790638b0.jpg" />
              </div>
            </div>
          </div>

          <div ref={textReveal.ref} className={`reveal-right md:order-2 md:col-span-7 ${textReveal.isVisible ? "visible" : ""}`}>
            <p className="font-amoresa text-xl text-gold">Sobre</p>
            <h2 id="sobre-heading" className="mt-2 font-serif text-3xl font-semibold text-primary md:text-4xl">
              Célia Franz
            </h2>
            <div className="gold-divider mt-4 w-24" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Neuropsicanalista integrativa e educadora com aproximadamente 30
              anos de experiência clínica dedicados à formação de terapeutas.
              Célia desenvolveu a metodologia Caminho das Riquezas, unindo rigor
              técnico, sensibilidade clínica e respeito às raízes do saber
              humano ancestral.
            </p>
            <Button variant="outline" className="mt-6 border-primary/20 text-primary shadow-sm hover:bg-primary/5 hover:shadow-md transition-all duration-300" onClick={() => setModalOpen(true)}>
              Ler biografia completa
            </Button>
          </div>
        </div>
      </div>

      <BiographyModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>;
};
export default AboutSection;