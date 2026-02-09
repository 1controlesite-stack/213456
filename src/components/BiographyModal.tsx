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
          <div className="space-y-8 px-8 py-8">
            {sections.map((section, i) => (
              <div key={section.content} className="group">
                <div className="flex items-start gap-3">
                  <span className="mt-1 block h-5 w-0.5 rounded-full bg-gold/40 transition-all duration-300 group-hover:h-full group-hover:bg-gold/70" />
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      {section.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {biography[section.content]}
                    </p>
                  </div>
                </div>
                {i < sections.length - 1 && (
                  <div className="gold-divider ml-6 mt-6" />
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default BiographyModal;
