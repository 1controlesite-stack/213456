import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { biography } from "@/data/courses";
import { ScrollArea } from "@/components/ui/scroll-area";

interface BiographyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const sections = [
  { title: "Atuação", content: "atuacao" as const },
  { title: "Metodologia Caminho das Riquezas", content: "metodologia" as const },
  { title: "Formações", content: "formacoes" as const },
  { title: "Pesquisa Contínua", content: "pesquisa" as const },
];

const BiographyModal = ({ open, onOpenChange }: BiographyModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl overflow-hidden border-none bg-background p-0 shadow-2xl shadow-primary/10">
        {/* Header com fundo roxo */}
        <div className="relative bg-primary px-8 pb-8 pt-10">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
          <DialogHeader className="relative">
            <p className="font-amoresa text-lg text-gold">Biografia</p>
            <DialogTitle className="mt-1 font-serif text-3xl text-primary-foreground">
              Célia Franz
            </DialogTitle>
            <DialogDescription className="mt-2 text-sm text-primary-foreground/70">
              Neuropsicanalista integrativa e educadora
            </DialogDescription>
          </DialogHeader>
          {/* Divider dourado */}
          <div className="mt-5 h-px w-20 bg-gradient-to-r from-gold/60 to-transparent" />
        </div>

        {/* Conteúdo */}
        <ScrollArea className="max-h-[55vh]">
          <div className="px-6 py-6 sm:px-8 sm:py-8">
            {sections.map((section, i) => (
              <div key={section.content} className="group">
                <div className="flex gap-4">
                  {/* Barra lateral decorativa */}
                  <div className="relative flex flex-col items-center pt-1.5">
                    <span className="block h-2 w-2 rounded-full bg-gold/50 transition-colors duration-300 group-hover:bg-gold" />
                    {i < sections.length - 1 && (
                      <span className="mt-1 block w-px flex-1 bg-border" />
                    )}
                  </div>

                  <div className={`flex-1 ${i < sections.length - 1 ? "pb-7" : "pb-2"}`}>
                    <h3 className="font-serif text-base font-semibold leading-snug text-foreground sm:text-lg">
                      {section.title}
                    </h3>
                    <div className="mt-2.5 text-[0.8125rem] leading-[1.7] text-muted-foreground sm:text-sm sm:leading-[1.75] whitespace-pre-line">
                      {biography[section.content]}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default BiographyModal;
