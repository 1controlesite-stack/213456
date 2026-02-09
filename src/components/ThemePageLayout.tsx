import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ThemeData, SITE_URL } from "@/data/courses";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import FinalCTA from "@/components/FinalCTA";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface ThemePageLayoutProps {
  theme: ThemeData;
}

const seoKeywords: Record<string, string> = {
  homeopatia: "homeopatia avançada, lantanídeos, sais de schüssler, miasmas, lac's homeopatia, portais matridonais, assinatura energética, curso homeopatia, formação homeopata",
  constelacao: "constelação familiar sistêmica, hidroconstelação, movimento das riquezas, constelação familiar online, formação constelador, curso constelação familiar",
  mapas: "mapa astrológico terapêutico, chave mestra códigos mentais, mapa astral terapêutico, curso mapa astrológico, leitura de mapa astral",
  eventos: "eventos terapêuticos, palestras homeopatia, workshops terapia integrativa, aulas gratuitas terapia, agendamento terapia, Célia Franz eventos",
};

const ThemePageLayout = ({ theme }: ThemePageLayoutProps) => {
  const { hash } = useLocation();
  const heroReveal = useScrollReveal({ threshold: 0.1 });
  const cardsReveal = useScrollReveal({ threshold: 0.08 });

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [hash]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: theme.title,
    description: theme.seo.description,
    provider: {
      "@type": "Person",
      name: "Célia Franz",
      url: SITE_URL,
    },
    hasCourseInstance: theme.courses.map((course) => ({
      "@type": "CourseInstance",
      name: course.title,
      description: course.overview.substring(0, 200),
      courseMode: course.format,
    })),
  };

  return (
    <Layout whatsappCourse={theme.title}>
      <SEOHead
        title={theme.seo.title}
        description={theme.seo.description}
        path={`/${theme.slug}`}
        schemaData={schemaData}
        keywords={seoKeywords[theme.slug] || ""}
      />

      {/* Hero */}
      <section className="relative bg-secondary py-20 md:py-28 overflow-hidden">
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-gold/[0.05] blur-3xl" />
        <div
          ref={heroReveal.ref}
          className={`container relative reveal ${heroReveal.isVisible ? "visible" : ""}`}
        >
          <h1 className="font-amoresa text-6xl text-gold md:text-7xl lg:text-8xl">{theme.shortTitle}</h1>
          <div className="gold-divider mt-4 w-24" />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {theme.introduction}
          </p>
        </div>
      </section>

      {/* Course cards grid */}
      <section className="py-16 md:py-24" aria-label="Lista de cursos">
        <div className="container">
          <div
            ref={cardsReveal.ref}
            className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 reveal-stagger ${cardsReveal.isVisible ? "visible" : ""}`}
          >
            {theme.courses.map((course) => (
              <Link
                key={course.id}
                to={`/${theme.slug}/${course.id}`}
                className="card-lift group overflow-hidden rounded-lg border border-border bg-card"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-muted">
                  {course.image ? (
                    <>
                      <img
                        src={course.image}
                        alt=""
                        className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl opacity-60"
                        aria-hidden="true"
                      />
                      <img
                        src={course.image}
                        alt={`Capa do curso ${course.title}`}
                        className="relative h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </>
                  ) : (
                    <img
                      src="/placeholder.svg"
                      alt={`Capa do curso ${course.title}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  )}
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </Layout>
  );
};

export default ThemePageLayout;
