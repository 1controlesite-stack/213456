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
  const isDark = index % 2 !== 0;

  return (
    <section
      className={cn(
        "py-16 md:py-24",
        isDark ? "bg-primary text-primary-foreground" : "bg-background text-foreground"
      )}
      aria-labelledby={`theme-${theme.slug}`}
    >
      <div className="container">
        {/* Theme header — alternating layout */}
        <div className={cn("grid items-center gap-10 md:grid-cols-10")}>
          <div
            className={cn(
              "md:col-span-6",
              isReversed && "md:order-2 md:col-start-5 md:col-span-6"
            )}
          >
            <div className={cn(
              "aspect-[16/9] w-full overflow-hidden rounded-lg",
              isDark ? "bg-primary-foreground/10" : "bg-muted"
            )}>
              <img
                src="/placeholder.svg"
                alt={`Ilustração da formação em ${theme.title}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div
            className={cn(
              "flex flex-col justify-center md:col-span-4",
              isReversed && "md:order-1 md:col-start-1 md:col-span-4"
            )}
          >
            <h2
              id={`theme-${theme.slug}`}
              className="font-serif text-2xl font-semibold md:text-3xl"
            >
              {theme.title}
            </h2>
            <p className={cn(
              "mt-4 text-sm leading-relaxed",
              isDark ? "text-primary-foreground/70" : "text-muted-foreground"
            )}>
              {theme.description}
            </p>
            <Link
              to={`/${theme.slug}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold/80"
            >
              Ver todas as formações
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Course cards grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {theme.courses.map((course) => (
            <Link
              key={course.id}
              to={`/${theme.slug}#${course.id}`}
              className={cn(
                "group overflow-hidden rounded-lg border transition-shadow hover:shadow-lg",
                isDark
                  ? "border-primary-foreground/10 bg-primary-foreground/5"
                  : "border-border bg-card"
              )}
            >
              <div className={cn(
                "aspect-[16/10] w-full overflow-hidden",
                isDark ? "bg-primary-foreground/10" : "bg-muted"
              )}>
                <img
                  src="/placeholder.svg"
                  alt={`Capa do curso ${course.title}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-base font-semibold leading-snug md:text-lg">
                  {course.title}
                </h3>
                <p className={cn(
                  "mt-2 line-clamp-3 text-sm leading-relaxed",
                  isDark ? "text-primary-foreground/60" : "text-muted-foreground"
                )}>
                  {course.overview}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-gold transition-colors group-hover:text-gold/80">
                  Saiba mais
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemeSection;
