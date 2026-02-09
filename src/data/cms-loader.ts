export interface CMSCourse {
  title: string;
  cover: string;
  visao_geral: string;
  pra_quem: string;
  aprendizado: string[];
  info_box: {
    investimento: string;
    formato: string;
    link_vaga: string;
    link_contato: string;
  };
  tema: string;
}

export interface CMSCourseWithSlug extends CMSCourse {
  slug: string;
}

const modules = import.meta.glob<CMSCourse>("/content/conteudos/*.json", {
  eager: true,
  import: "default",
});

function parseModules(): CMSCourseWithSlug[] {
  return Object.entries(modules).map(([path, data]) => {
    const slug = path.split("/").pop()?.replace(".json", "") || "";
    return { ...data, slug };
  });
}

let _cache: CMSCourseWithSlug[] | null = null;

function getAll(): CMSCourseWithSlug[] {
  if (!_cache) _cache = parseModules();
  return _cache;
}

export function getAllCourses(): CMSCourseWithSlug[] {
  return getAll();
}

export function getCoursesByTheme(tema: string): CMSCourseWithSlug[] {
  return getAll().filter((c) => c.tema === tema);
}

export function getCourseBySlug(slug: string): CMSCourseWithSlug | undefined {
  return getAll().find((c) => c.slug === slug);
}
