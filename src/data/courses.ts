import { getCoursesByTheme, type CMSCourseWithSlug } from "./cms-loader";

export const WHATSAPP_NUMBER = "5500000000000";
export const SITE_URL = "https://celiafranz.com.br";

export function getWhatsAppLink(courseName?: string) {
  const message = courseName
    ? `Olá! Gostaria de saber mais sobre o curso "${courseName}" com Célia Franz.`
    : "Olá! Gostaria de saber mais sobre as formações da Célia Franz.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export interface Course {
  id: string;
  title: string;
  image?: string;
  overview: string;
  audience: string;
  learnings: string[];
  investment: string;
  format: string;
  linkVaga?: string;
  linkContato?: string;
}

export interface ThemeData {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  introduction: string;
  courses: Course[];
  seo: {
    title: string;
    description: string;
  };
}

function mapCMS(c: CMSCourseWithSlug): Course {
  return {
    id: c.slug,
    title: c.title,
    image: c.cover,
    overview: c.visao_geral,
    audience: c.pra_quem,
    learnings: c.aprendizado,
    investment: c.info_box.investimento,
    format: c.info_box.formato,
    linkVaga: c.info_box.link_vaga,
    linkContato: c.info_box.link_contato,
  };
}

const themeMeta: Record<string, Omit<ThemeData, "courses">> = {
  homeopatia: {
    slug: "homeopatia",
    title: "Homeopatia",
    shortTitle: "Homeopatia",
    description:
      "Formações avançadas em estratégias homeopáticas:\nIntegração das neurociências e da neuroespiritualidade à base homeopática, para a compreensão profunda do sofrimento psíquico específico da nossa era atual.\n\nCapacitamos o terapeuta homeopata a realizar uma leitura clínica assertiva, tratando pessoas e não apenas sintomas.",
    introduction:
      "A homeopatia vai além do sintoma. Nesta linha de formações, você mergulha em abordagens avançadas que conectam o remédio homeopático à história profunda do indivíduo — seus vínculos, suas heranças e sua jornada de individuação. Cada curso foi estruturado para terapeutas que desejam ampliar sua leitura clínica com profundidade, método e rigor científico contemporâneo.",
    seo: {
      title: "Homeopatia Avançada | Célia Franz",
      description:
        "Cursos avançados de homeopatia: Lantanídeos, Sais de Schüssler, Miasmas, Lac's, Portais Matridonais e Assinatura Energética com Célia Franz.",
    },
  },
  constelacao: {
    slug: "constelacao",
    title: "Constelação Familiar e Sistêmica",
    shortTitle: "Constelação",
    description:
      "Formações em constelação familiar sistêmica, hidroconstelação e abordagens arquetípicas que revelam dinâmicas ocultas nos sistemas familiares e relacionais, com rigor clínico e maturidade terapêutica.",
    introduction:
      "A constelação familiar é uma ferramenta poderosa para revelar dinâmicas ocultas que operam nos sistemas familiares e relacionais. As formações desta linha combinam a abordagem sistêmica clássica com metodologias exclusivas desenvolvidas por Célia Franz, incluindo a Hidroconstelação e o Movimento das Riquezas — formações que integram neurociência, neuroespiritualidade e quase 20 anos de experiência clínica.",
    seo: {
      title: "Constelação Familiar Sistêmica | Célia Franz",
      description:
        "Formações em constelação familiar, hidroconstelação, Movimento das Riquezas e Trilogia Arquetípica com Célia Franz.",
    },
  },
  mapas: {
    slug: "mapas",
    title: "Mapas",
    shortTitle: "Mapas",
    description:
      "Formações em mapa astrológico terapêutico e decodificação de códigos mentais — ferramentas de leitura profunda que revelam potenciais ocultos e direcionam o caminho das riquezas.",
    introduction:
      "Os mapas são ferramentas de leitura e navegação interior. Nesta linha de formações, você aprenderá a utilizar o mapa astrológico e os códigos mentais como instrumentos de compreensão profunda, identificando potenciais ocultos e desbloqueando caminhos de realização pessoal e profissional com precisão clínica e base neurocientífica.",
    seo: {
      title: "Mapas Terapêuticos | Célia Franz",
      description:
        "Formações em mapa astrológico terapêutico e códigos mentais para terapeutas. Caminho das Riquezas e Chave Mestra com Célia Franz.",
    },
  },
  eventos: {
    slug: "eventos",
    title: "Eventos",
    shortTitle: "Eventos",
    description:
      "Palestras, workshops, aulas gratuitas de degustação e pacotes terapêuticos. Espaços de abertura de consciência, leitura profunda e atualização do mapa interno.",
    introduction:
      "Os eventos são portas de entrada para o universo de formações de Célia Franz. Não são encontros comuns — são espaços de abertura de consciência, leitura profunda e atualização do mapa interno, criados para quem já ultrapassou o nível do conteúdo raso e busca compreensão real. As aulas gratuitas de degustação permitem que você experimente a linguagem e o método antes de decidir aprofundar.",
    seo: {
      title: "Eventos e Agendamentos | Célia Franz",
      description:
        "Palestras, workshops, aulas gratuitas e pacotes terapêuticos com Célia Franz. Agende sua experiência transformadora.",
    },
  },
};

export const themes: Record<string, ThemeData> = Object.fromEntries(
  Object.entries(themeMeta).map(([key, meta]) => [
    key,
    { ...meta, courses: getCoursesByTheme(key).map(mapCMS) },
  ])
);

export const themeOrder = ["homeopatia", "constelacao", "mapas", "eventos"] as const;

export const biography = {
  atuacao:
    "Minha atuação profissional nasce da união precisa entre estudos contemporâneos da psiquê, neurociência, psicossomática, leitura sistêmica e abordagens corporais profundas, integradas a uma escuta clínica refinada e a uma compreensão avançada dos códigos que organizam a experiência humana.\n\nCada curso e cada atendimento que desenvolvo são concebidos como um mapa vivo de leitura e intervenção, no qual nada é isolado ou tratado fora de contexto.\n\nCorpo, história biográfica, vínculos primários, padrões ancestrais e escolhas conscientes são compreendidos como partes de um mesmo sistema inteligente, dinâmico e autorregulável. Meus cursos se conectam de forma orgânica, formando um ecossistema terapêutico integrado, voltado à restauração integral do ser humano.",
  metodologia:
    "Ao longo de aproximadamente 30 anos de experiência clínica, consolidei uma visão ampla, estratégica e ética do cuidado humano, que deu origem à metodologia Caminho das Riquezas.\n\nPor meio dela, realizo atendimentos e também formo terapeutas, ensinando uma abordagem abrangente, precisa e atualizada, que une rigor técnico, sensibilidade clínica e respeito às raízes do saber humano ancestral.\n\nCada processo é conduzido com presença, clareza e consistência — para quem busca evolução concreta, maturidade interna e resultados sustentáveis, e não soluções superficiais.",
  formacoes:
    "Gestão Hospitalar (UNIP)\n\nPós-graduações e especializações:\n• Neuropsicanálise\n• Psicologia Corporal e Bioenergética\n• Intolerância e Alergias Alimentares\n• Estratégias Ortomoleculares e Oligoterapia\n• Homeopatia Clássica e Contemporânea\n• Terapias Florais (Bach, Minas, Joel Aleixo)\n• Terapia Reichiana e Bioenergética\n• Formação Holística e Psicoterapia Holística\n• Constelação Familiar e Sistêmica\n• Terapia de Vidas Passadas\n• Regressão Transgenerativa\n• Hipnose Clínica e Condicionativa\n• Ressonância Pessoal Psicoterapêutica\n• Terapeuta de Renascimento / Rebirthing\n• Astrologia Psíquica e Cármica\n• Neurociências e Neuroespiritualidade\n• PSYCH-K\n• Iridologia e Naturopatia\n• Nova Medicina Germânica Avançada (Psicossomática)\n• Reprogramação Biológica\n• Terapia Biofísica e Medicina Vibracional\n• Neurobioquímica\n• Modulação Intestinal",
  pesquisa:
    "Me mantenho pesquisadora apaixonada em neurociências, epigenética e influências transgeracionais, constelações gemelares e homeopatia contemporânea.\n\nMeu grande objetivo de vida: compreender no máximo possível a constituição do SER humano e quais as reais raízes dos seus distúrbios específicos.\n\nDessa forma, conseguirmos trazer a restauração de todo o sofrimento em todos os aspectos da pessoa. Trato pessoas e não sintomas!",
};
