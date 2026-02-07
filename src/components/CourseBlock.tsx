import { Course, getWhatsAppLink } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, HelpCircle } from "lucide-react";

interface CourseBlockProps {
  course: Course;
}

const CourseBlock = ({ course }: CourseBlockProps) => {
  return (
    <article id={course.id} className="scroll-mt-24 py-12 first:pt-0">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Main content */}
        <div className="md:col-span-2 space-y-8">
          <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
            {course.title}
          </h2>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Visão geral
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {course.overview}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Para quem é
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {course.audience}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              O que você aprenderá
            </h3>
            <ul className="mt-3 space-y-2">
              {course.learnings.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar card */}
        <div className="md:col-span-1">
          <Card className="sticky top-24 border-border">
            <CardHeader>
              <CardTitle className="font-serif text-lg">Informações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Investimento
                </p>
                <p className="mt-1 text-sm text-foreground">{course.investment}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Formato
                </p>
                <p className="mt-1 text-sm text-foreground">{course.format}</p>
              </div>

              <Button asChild className="w-full gap-2 bg-gold text-gold-foreground hover:bg-gold/90">
                <a
                  href={getWhatsAppLink(course.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  Garantir minha vaga
                </a>
              </Button>

              <a
                href={getWhatsAppLink(course.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-gold"
              >
                <HelpCircle className="h-3.5 w-3.5" />
                Tem dúvidas? Fale conosco
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </article>
  );
};

export default CourseBlock;
