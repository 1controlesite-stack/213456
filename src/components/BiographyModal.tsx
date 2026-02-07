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

const BiographyModal = ({ open, onOpenChange }: BiographyModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Célia Franz</DialogTitle>
          <DialogDescription>Terapeuta integrativa e educadora</DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground">Atuação</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{biography.atuacao}</p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                Metodologia Caminho das Riquezas
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{biography.metodologia}</p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground">Formações</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{biography.formacoes}</p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground">Pesquisa Contínua</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{biography.pesquisa}</p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default BiographyModal;
