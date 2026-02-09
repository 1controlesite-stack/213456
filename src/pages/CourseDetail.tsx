import { useParams, Navigate } from "react-router-dom";
import { themes, SITE_URL } from "@/data/courses";
import { getCourseBySlug } from "@/data/cms-loader";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import CourseBlock from "@/components/CourseBlock";
import FinalCTA from "@/components/FinalCTA";

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

      <FinalCTA />
    </Layout>
  );
};

export default CourseDetail;
