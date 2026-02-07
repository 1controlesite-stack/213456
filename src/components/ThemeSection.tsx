import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ThemeData } from "@/data/courses";
import { cn } from "@/lib/utils";

interface ThemeSectionProps {
  theme: ThemeData;
  index: number;
}

const ThemeSection = ({ theme, index }: ThemeSectionProps) => {
  const isReversed = index % 2 !== 0;

  return (
    <section
      className={cn("py-16 md:py-24", index % 2 === 0 ? "bg-background" : "bg-secondary/30")}
      aria-labelledby={`theme-${theme.slug}`}
    >
      <div className="container">
        <div className={cn("grid items-start gap-10 md:grid-cols-10")}>
          {/* Image — 70% or 30% */}
          <div
            className={cn(
              "md:col-span-7",
              isReversed && "md:order-2 md:col-start-4 md:col-span-7"
            )}
          >
            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-muted">
              <img
                src="/placeholder.svg"
                alt={`Ilustração da formação em ${theme.title}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content — 30% or 70% */}
          <div
            className={cn(
              "flex flex-col justify-center md:col-span-3",
              isReversed && "md:order-1 md:col-start-1 md:col-span-3"
            )}
          >
            <h2
              id={`theme-${theme.slug}`}
              className="font-serif text-2xl font-semibold text-foreground md:text-3xl"
            >
              {theme.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {theme.description}
            </p>

            <ul className="mt-6 space-y-2">
              {theme.courses.map((course) => (
                <li key={course.id}>
                  <Link
                    to={`/${theme.slug}#${course.id}`}
                    className="group flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to={`/${theme.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Ver todas as formações
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemeSection;
