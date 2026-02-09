import { useParams, Navigate, Link } from "react-router-dom";
import { themes, SITE_URL } from "@/data/courses";
import { getCourseBySlug } from "@/data/cms-loader";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import CourseBlock from "@/components/CourseBlock";
import FinalCTA from "@/components/FinalCTA";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CourseDetail = () => {
  const { tema, slug } = useParams<{ tema: string; slug: string }>();

  const theme = tema ? themes[tema] : undefined;
  const cmsCourse = slug ? getCourseBySlug(slug) : undefined;

  if (!theme || !cmsCourse || cmsCourse.tema !== tema) {
    return <Navigate to="/404" replace />;
  }

  const course = theme.courses.find((c) => c.id === slug);
  if (!course) {
    return <Navigate to="/404" replace />;
  }

  const relatedCourses = theme.courses.filter((c) => c.id !== slug);
  const relatedReveal = useScrollReveal({ threshold: 0.08 });

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.overview.substring(0, 200),
    provider: {
      "@type": "Person",
      name: "Célia Franz",
      url: SITE_URL,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      name: course.title,
      description: course.overview.substring(0, 200),
      courseMode: course.format,
    },
  };

  return (
    <Layout whatsappCourse={course.title}>
      <SEOHead
        title={`${course.title} | Célia Franz`}
        description={course.overview.substring(0, 155)}
        path={`/${tema}/${slug}`}
        schemaData={schemaData}
        keywords={`${course.title}, ${theme.title}, Célia Franz, formação terapêutica`}
      />

      <section className="py-16 md:py-24" aria-label="Detalhes do curso">
        <div className="container">
          <CourseBlock course={course} />
        </div>
      </section>

      {/* Related courses */}
      {relatedCourses.length > 0 && (
        <section className="border-t border-border bg-secondary py-16 md:py-20">
          <div className="container">
            <div
              ref={relatedReveal.ref}
              className={`reveal ${relatedReveal.isVisible ? "visible" : ""}`}
            >
              <p className="font-amoresa text-3xl text-gold md:text-4xl">
                Você também pode gostar
              </p>
              <div className="gold-divider mt-3 w-16" />
            </div>

            <div className="mt-10 -mx-4 px-4 overflow-x-auto scrollbar-hide">
              <div className="flex gap-5" style={{ minWidth: "min-content" }}>
                {relatedCourses.map((related) => (
                  <Link
                    key={related.id}
                    to={`/${tema}/${related.id}`}
                    className="card-lift group flex-shrink-0 w-[280px] overflow-hidden rounded-lg border border-border bg-card"
                  >
                    <div className="relative aspect-square w-full overflow-hidden bg-muted">
                      {related.image ? (
                        <>
                          <img
                            src={related.image}
                            alt=""
                            className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl opacity-60"
                            aria-hidden="true"
                          />
                          <img
                            src={related.image}
                            alt={`Capa do curso ${related.title}`}
                            className="relative h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        </>
                      ) : (
                        <img
                          src="/placeholder.svg"
                          alt={`Capa do curso ${related.title}`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-serif text-base font-semibold leading-snug text-primary line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                        {related.overview}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition-all group-hover:text-accent/80 group-hover:gap-2.5">
                        Saiba mais
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </Layout>
  );
};

export default CourseDetail;
