import { themes, themeOrder, SITE_URL } from "@/data/courses";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ThemeSection from "@/components/ThemeSection";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Célia Franz",
    url: SITE_URL,
    jobTitle: "Terapeuta Integrativa e Educadora",
    description:
      "Formações terapêuticas avançadas em homeopatia, constelação familiar, mapas e terapias integrativas.",
    knowsAbout: [
      "Homeopatia",
      "Constelação Familiar Sistêmica",
      "Terapias Integrativas",
      "Formação de Terapeutas",
    ],
  };

  return (
    <Layout>
      <SEOHead
        title="Célia Franz | Formações Terapêuticas Avançadas"
        description="Formações avançadas em homeopatia, constelação familiar, mapas terapêuticos e eventos com Célia Franz. Educação estruturada para terapeutas."
        path="/"
        schemaData={schemaData}
      />

      <HeroSection />

      <AboutSection />

      <div id="formacoes">
        {themeOrder.map((key, index) => (
          <ThemeSection key={key} theme={themes[key]} index={index} />
        ))}
      </div>

      <FinalCTA />
    </Layout>
  );
};

export default Index;
