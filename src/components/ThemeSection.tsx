import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ThemeData } from "@/data/courses";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
interface ThemeSectionProps {
  theme: ThemeData;
  index: number;
}
const ThemeSection = ({
  theme,
  index
}: ThemeSectionProps) => {
  const isReversed = index % 2 !== 0;
  const hasBackground = index % 2 !== 0;
  const headerReveal = useScrollReveal({
    threshold: 0.1
  });
  const cardsReveal = useScrollReveal({
    threshold: 0.08
  });
  return <section className={cn("relative py-16 md:py-24 overflow-hidden", hasBackground ? "bg-secondary" : "bg-background")} aria-labelledby={`theme-${theme.slug}`}>
      {/* Decorative accent */}
      {hasBackground && <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-gold/[0.04] blur-3xl" />}

      <div className="container relative">
        {/* Theme header — alternating layout */}
        <div ref={headerReveal.ref} className={cn("grid items-center gap-10 md:grid-cols-10", headerReveal.isVisible ? "" : "")}>
          <div className={cn("md:col-span-6", isReversed && "md:order-2 md:col-start-5 md:col-span-6", isReversed ? "reveal-right" : "reveal-left", headerReveal.isVisible && "visible")}>
            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-border bg-muted shadow-lg shadow-primary/5">
              <img src="/placeholder.svg" alt={`Ilustração da formação em ${theme.title}`} className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>

          <div className={cn("flex flex-col justify-center md:col-span-4", isReversed && "md:order-1 md:col-start-1 md:col-span-4", isReversed ? "reveal-left" : "reveal-right", headerReveal.isVisible && "visible")}>
            <p className="font-amoresa text-gold text-5xl">{theme.shortTitle}</p>
            <div className="gold-divider mt-3 w-16" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
              {theme.description}
            </p>
            <Link to={`/${theme.slug}`} className="gold-underline mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent/80 my-[15px]">
              <span className="whitespace-nowrap">Ver todas as formações</span>
              <ArrowRight className="h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Course cards grid */}
        <div ref={cardsReveal.ref} className={cn("mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 reveal-stagger", cardsReveal.isVisible && "visible")}>
          {theme.courses.map(course => <Link key={course.id} to={`/${theme.slug}/${course.id}`} className="card-lift group overflow-hidden rounded-lg border border-border bg-card">
              <div className="relative aspect-square w-full overflow-hidden bg-muted">
                {course.image ? <>
                    <img src={course.image} alt="" className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl opacity-60" aria-hidden="true" />
                    <img src={course.image} alt={`Capa do curso ${course.title}`} className="relative h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </> : <img src="/placeholder.svg" alt={`Capa do curso ${course.title}`} className="h-full w-full object-cover" loading="lazy" />}
              </div>
              <div className="p-5">
                <h3 className="font-serif text-base font-semibold leading-snug text-primary md:text-lg">
                  {course.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {course.overview}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition-all group-hover:text-accent/80 group-hover:gap-2.5">
                  Saiba mais
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>)}
        </div>
      </div>
    </section>;
};
export default ThemeSection;