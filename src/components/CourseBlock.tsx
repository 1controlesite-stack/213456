import { Course, getWhatsAppLink } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { HelpCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface CourseBlockProps {
  course: Course;
}

const CourseBlock = ({ course }: CourseBlockProps) => {
  const reveal = useScrollReveal({ threshold: 0.08 });

  const vagaLink = course.linkVaga || getWhatsAppLink(course.title);
  const contatoLink = course.linkContato || getWhatsAppLink(course.title);

  return (
    <article
      id={course.id}
      ref={reveal.ref}
      className={`scroll-mt-24 py-12 first:pt-0 reveal-left ${reveal.isVisible ? "visible" : ""}`}
    >
      <div className="grid gap-8 md:grid-cols-3">
        {/* Main content */}
        <div className="md:col-span-2 space-y-8">
          {/* Course image */}
          {course.image && (
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-muted shadow-lg shadow-primary/5">
              <img
                src={course.image}
                alt=""
                className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl opacity-50"
                aria-hidden="true"
              />
              <img
                src={course.image}
                alt={`Capa do curso ${course.title}`}
                className="relative h-full w-full object-contain"
                loading="lazy"
              />
            </div>
          )}

          <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
            {course.title}
          </h2>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Visão geral
            </h3>
            <div className="gold-divider mt-2 w-12" />
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {course.overview}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Para quem é
            </h3>
            <div className="gold-divider mt-2 w-12" />
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {course.audience}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              O que você aprenderá
            </h3>
            <div className="gold-divider mt-2 w-12" />
            <ul className="mt-3 space-y-2">
              {course.learnings.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-base text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar card */}
        <div className="md:col-span-1">
          <Card className="sticky top-24 border-border shadow-lg shadow-primary/5 transition-shadow hover:shadow-xl hover:shadow-primary/8">
            <CardHeader>
              <CardTitle className="font-serif text-lg text-primary">
                Informações
              </CardTitle>
              <div className="gold-divider mt-1 w-10" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                  Investimento
                </p>
                <p className="mt-1 text-sm text-foreground">{course.investment}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                  Formato
                </p>
                <p className="mt-1 text-sm text-foreground">{course.format}</p>
              </div>

              <Button
                asChild
                className="w-full gap-2 bg-accent text-accent-foreground shadow-md shadow-accent/15 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
              >
                <a
                  href={vagaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Garantir minha vaga
                </a>
              </Button>

              <a
                href={contatoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
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
