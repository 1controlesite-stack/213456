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
  overview: string;
  audience: string;
  learnings: string[];
  investment: string;
  format: string;
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

export const themes: Record<string, ThemeData> = {
  homeopatia: {
    slug: "homeopatia",
    title: "Homeopatia",
    shortTitle: "Homeopatia",
    description:
      "Formações avançadas em homeopatia que exploram desde os Lantanídeos até as camadas energéticas da consciência, unindo ciência e sensibilidade terapêutica.",
    introduction:
      "A homeopatia vai além do sintoma. Nesta linha de formações, você mergulha em abordagens avançadas que conectam o remédio homeopático à história profunda do indivíduo — seus vínculos, suas heranças e sua jornada de individuação. Cada curso foi estruturado para terapeutas que desejam ampliar sua leitura clínica com profundidade e método.",
    seo: {
      title: "Homeopatia Avançada | Célia Franz",
      description:
        "Cursos avançados de homeopatia: Lantanídeos, Sais de Schüssler, Miasmas, Lac's, Portais Matridonais e Assinatura Energética.",
    },
    courses: [
      {
        id: "lantanideos",
        title: "Lantanídeos",
        overview:
          "Estudo aprofundado dos elementos lantanídeos na homeopatia, explorando temas de autonomia, individuação e liberdade interior. Uma abordagem que conecta a tabela periódica à jornada de autoconhecimento do paciente.",
        audience:
          "Terapeutas homeopatas e profissionais de saúde integrativa que desejam compreender os processos de individuação através da lente homeopática.",
        learnings: [
          "Compreensão dos 15 elementos lantanídeos e seus temas centrais",
          "Relação entre autonomia, sombra e individuação",
          "Aplicação clínica dos lantanídeos na prática terapêutica",
          "Leitura simbólica e energética de cada elemento",
        ],
        investment: "Consulte valores atualizados",
        format: "Online ao vivo com material de apoio",
      },
      {
        id: "sais-de-schussler",
        title: "Sais de Schüssler",
        overview:
          "Formação focada nos 12 sais bioquímicos de Schüssler e sua aplicação na nutrição celular. Aprenda a identificar carências minerais e a restaurar o equilíbrio fisiológico do organismo de forma natural.",
        audience:
          "Terapeutas, nutricionistas e profissionais de saúde que buscam ferramentas complementares de reequilíbrio mineral e celular.",
        learnings: [
          "Os 12 sais bioquímicos e suas funções no organismo",
          "Diagnóstico facial dos sais de Schüssler",
          "Protocolos de aplicação terapêutica",
          "Integração dos sais com outras abordagens terapêuticas",
        ],
        investment: "Consulte valores atualizados",
        format: "Online ao vivo com material de apoio",
      },
      {
        id: "miasmas",
        title: "Miasmas – Herança Impressa no SER Humano",
        overview:
          "Estudo dos miasmas como padrões hereditários que moldam predisposições físicas, emocionais e comportamentais. Uma leitura profunda da herança miasmática e seus impactos na saúde integral.",
        audience:
          "Homeopatas e terapeutas que desejam compreender as camadas hereditárias que influenciam a saúde e o comportamento humano.",
        learnings: [
          "Os miasmas clássicos e contemporâneos na homeopatia",
          "Identificação de padrões miasmáticos no paciente",
          "Relação entre miasmas e doenças crônicas",
          "Estratégias terapêuticas para tratamento miasmático",
        ],
        investment: "Consulte valores atualizados",
        format: "Online ao vivo com material de apoio",
      },
      {
        id: "lacs",
        title: "Homeopatia dos Vínculos Feridos – Método Lac's",
        overview:
          "Uma abordagem inovadora que utiliza os remédios Lac (leites) para tratar feridas nos vínculos primários. Explore como as relações maternas e de nutrição impactam a saúde emocional e física.",
        audience:
          "Terapeutas homeopatas que buscam aprofundar o trabalho com vínculos afetivos, relações maternas e padrões de apego.",
        learnings: [
          "Os principais remédios Lac e seus temas vinculares",
          "Leitura dos padrões de apego na prática clínica",
          "Técnicas de anamnese para identificação de feridas vinculares",
          "Aplicação dos Lac's em diferentes faixas etárias",
        ],
        investment: "Consulte valores atualizados",
        format: "Online ao vivo com material de apoio",
      },
      {
        id: "portais-matridonais",
        title: "Portais Matridonais",
        overview:
          "Estudo dos arquétipos maternos e seus portais de passagem. Uma formação que conecta a jornada feminina ancestral com a prática terapêutica, explorando os ritos de passagem e a sabedoria do feminino.",
        audience:
          "Terapeutas que trabalham com saúde feminina, ciclos de vida e arquétipos do feminino sagrado.",
        learnings: [
          "Os portais matridonais e suas fases",
          "Arquétipos femininos na jornada terapêutica",
          "Ritos de passagem e sua importância na cura",
          "Aplicação clínica na saúde feminina integrativa",
        ],
        investment: "Consulte valores atualizados",
        format: "Online ao vivo com material de apoio",
      },
      {
        id: "assinatura-energetica",
        title: "Assinatura Energética das Sete Camadas da Consciência",
        overview:
          "Uma formação que mapeia as sete camadas da consciência humana e suas assinaturas energéticas. Aprenda a ler e interpretar os padrões energéticos que influenciam a saúde e o comportamento.",
        audience:
          "Terapeutas integrais que buscam uma leitura ampliada do ser humano através de suas camadas energéticas e de consciência.",
        learnings: [
          "As sete camadas da consciência e suas características",
          "Identificação da assinatura energética individual",
          "Relação entre camadas de consciência e padrões de saúde",
          "Ferramentas de leitura e diagnóstico energético",
        ],
        investment: "Consulte valores atualizados",
        format: "Online ao vivo com material de apoio",
      },
    ],
  },
  constelacao: {
    slug: "constelacao",
    title: "Constelação Familiar e Sistêmica",
    shortTitle: "Constelação",
    description:
      "Formações em constelação familiar sistêmica, hidroconstelação e abordagens arquetípicas que revelam dinâmicas ocultas nos sistemas familiares e relacionais.",
    introduction:
      "A constelação familiar é uma ferramenta poderosa para revelar dinâmicas ocultas que operam nos sistemas familiares e relacionais. As formações desta linha combinam a abordagem sistêmica clássica com metodologias exclusivas desenvolvidas por Célia Franz, incluindo a Hidroconstelação e o Movimento da Trilogia Arquetípica.",
    seo: {
      title: "Constelação Familiar Sistêmica | Célia Franz",
      description:
        "Formações em constelação familiar, hidroconstelação, Movimento das Riquezas e Trilogia Arquetípica com Célia Franz.",
    },
    courses: [
      {
        id: "constelacao-familiar",
        title: "Constelação Familiar Sistêmica e Hidroconstelação",
        overview:
          "Formação completa em constelação familiar sistêmica com a inovadora metodologia da Hidroconstelação. Aprenda a facilitar processos de cura sistêmica em ambiente aquático, potencializando o movimento da alma.",
        audience:
          "Terapeutas, psicólogos e profissionais de saúde que desejam se formar em constelação familiar com uma abordagem diferenciada e profunda.",
        learnings: [
          "Fundamentos da constelação familiar sistêmica",
          "Ordens do amor e leis sistêmicas",
          "Metodologia exclusiva de Hidroconstelação",
          "Facilitação de constelações individuais e em grupo",
        ],
        investment: "Consulte valores atualizados",
        format: "Presencial e online com práticas supervisionadas",
      },
      {
        id: "movimento-riquezas",
        title: "Movimento das Riquezas",
        overview:
          "Uma abordagem sistêmica sobre prosperidade e abundância. Descubra como padrões familiares e crenças herdadas influenciam sua relação com dinheiro, sucesso e merecimento.",
        audience:
          "Terapeutas e pessoas que desejam compreender e transformar padrões sistêmicos relacionados à prosperidade e abundância.",
        learnings: [
          "Dinâmicas familiares que bloqueiam a prosperidade",
          "Crenças herdadas sobre dinheiro e merecimento",
          "Movimentos sistêmicos de reconciliação com a abundância",
          "Ferramentas práticas de desbloqueio financeiro sistêmico",
        ],
        investment: "Consulte valores atualizados",
        format: "Online ao vivo com práticas",
      },
      {
        id: "mta",
        title: "M.T.A. – Movimento da Trilogia Arquetípica",
        overview:
          "Metodologia exclusiva que trabalha com três arquétipos fundamentais e seus movimentos na psique humana. Uma ferramenta potente para compreensão e transformação de padrões inconscientes.",
        audience:
          "Terapeutas que buscam metodologias inovadoras para trabalho com arquétipos e padrões inconscientes.",
        learnings: [
          "Os três arquétipos fundamentais da trilogia",
          "Movimentos arquetípicos na psique e no corpo",
          "Aplicação da M.T.A. em sessões individuais e grupais",
          "Integração da M.T.A. com outras abordagens terapêuticas",
        ],
        investment: "Consulte valores atualizados",
        format: "Presencial com vivências práticas",
      },
      {
        id: "oraculo-terapeuta",
        title: "Oráculo do Terapeuta",
        overview:
          "Uma formação que desenvolve a percepção intuitiva do terapeuta através de ferramentas oraculares. Aprenda a utilizar o oráculo como instrumento de leitura e orientação no processo terapêutico.",
        audience:
          "Terapeutas de todas as abordagens que desejam desenvolver sua intuição clínica e integrar ferramentas oraculares à prática.",
        learnings: [
          "Fundamentos do uso terapêutico do oráculo",
          "Desenvolvimento da percepção intuitiva",
          "Técnicas de leitura oracular no contexto clínico",
          "Ética e responsabilidade no uso de ferramentas intuitivas",
        ],
        investment: "Consulte valores atualizados",
        format: "Online ao vivo com práticas supervisionadas",
      },
    ],
  },
  mapas: {
    slug: "mapas",
    title: "Mapas",
    shortTitle: "Mapas",
    description:
      "Formações em mapa astrológico e códigos mentais, ferramentas de autoconhecimento que revelam potenciais e direcionam o caminho das riquezas interiores.",
    introduction:
      "Os mapas são ferramentas de leitura e navegação interior. Nesta linha de formações, você aprenderá a utilizar o mapa astrológico e os códigos mentais como instrumentos de compreensão profunda, identificando potenciais ocultos e desbloqueando caminhos de realização pessoal e profissional.",
    seo: {
      title: "Mapas Terapêuticos | Célia Franz",
      description:
        "Formações em mapa astrológico e códigos mentais para terapeutas. Caminho das Riquezas e Chave Mestra com Célia Franz.",
    },
    courses: [
      {
        id: "mapa-astrologico",
        title: "Mapa Astrológico – Caminho das Riquezas",
        overview:
          "Uma leitura astrológica voltada para a identificação de potenciais de prosperidade e realização. Aprenda a decifrar no mapa natal os caminhos que conduzem às riquezas materiais, emocionais e espirituais.",
        audience:
          "Terapeutas, astrólogos e profissionais que desejam utilizar a astrologia como ferramenta de orientação para prosperidade e propósito.",
        learnings: [
          "Leitura do mapa natal focada em prosperidade",
          "Casas astrológicas e seus potenciais de riqueza",
          "Trânsitos e ciclos de oportunidade",
          "Integração da leitura astrológica com o trabalho terapêutico",
        ],
        investment: "Consulte valores atualizados",
        format: "Online ao vivo com análises práticas",
      },
      {
        id: "chave-mestra",
        title: "Chave Mestra dos Códigos Mentais",
        overview:
          "Uma formação que decodifica os padrões mentais que governam comportamentos, decisões e resultados. Aprenda a identificar e reprogramar códigos mentais limitantes, abrindo portas para novas possibilidades.",
        audience:
          "Terapeutas, coaches e profissionais do desenvolvimento humano que buscam ferramentas de reprogramação mental e comportamental.",
        learnings: [
          "Identificação dos códigos mentais dominantes",
          "Técnicas de decodificação de padrões limitantes",
          "Metodologia de reprogramação mental",
          "Aplicação prática em sessões individuais e em grupo",
        ],
        investment: "Consulte valores atualizados",
        format: "Online ao vivo com exercícios práticos",
      },
    ],
  },
  eventos: {
    slug: "eventos",
    title: "Eventos",
    shortTitle: "Eventos",
    description:
      "Palestras, workshops, aulas gratuitas e pacotes terapêuticos. Oportunidades de vivência e contato direto com as metodologias de Célia Franz.",
    introduction:
      "Os eventos são portas de entrada para o universo de formações de Célia Franz. Através de palestras, workshops e aulas gratuitas, você pode experimentar as metodologias e decidir qual caminho de aprofundamento é ideal para sua jornada. Também oferecemos agendamentos individuais e pacotes terapêuticos personalizados.",
    seo: {
      title: "Eventos e Agendamentos | Célia Franz",
      description:
        "Palestras, workshops, aulas gratuitas e pacotes terapêuticos com Célia Franz. Agende sua experiência.",
    },
    courses: [
      {
        id: "eventos-palestras",
        title: "Eventos: Palestras, Workshops e Aulas Gratuitas",
        overview:
          "Participe de experiências transformadoras em formato de palestras, workshops temáticos e aulas gratuitas. Uma oportunidade de vivenciar as metodologias e conectar-se com uma comunidade de terapeutas em evolução.",
        audience:
          "Terapeutas em formação, profissionais de saúde, estudantes e qualquer pessoa interessada em autoconhecimento e terapias integrativas.",
        learnings: [
          "Introdução às metodologias exclusivas de Célia Franz",
          "Experiências práticas em formato condensado",
          "Networking com comunidade de terapeutas",
          "Orientação sobre caminhos de formação",
        ],
        investment: "Gratuito a valores acessíveis",
        format: "Presencial e online, conforme programação",
      },
      {
        id: "agendamentos",
        title: "Agendamentos e Pacotes Terapêuticos",
        overview:
          "Sessões individuais e pacotes terapêuticos personalizados com Célia Franz. Atendimento presencial e online com abordagem integrativa, combinando homeopatia, constelação e outras ferramentas conforme a necessidade de cada pessoa.",
        audience:
          "Pessoas que buscam atendimento terapêutico individual e personalizado, com acompanhamento profissional qualificado.",
        learnings: [
          "Avaliação integrativa personalizada",
          "Plano terapêutico individualizado",
          "Acompanhamento contínuo e suporte",
          "Integração de múltiplas abordagens terapêuticas",
        ],
        investment: "Consulte valores e pacotes disponíveis",
        format: "Presencial e online, sob agendamento",
      },
    ],
  },
};

export const themeOrder = ["homeopatia", "constelacao", "mapas", "eventos"] as const;

export const biography = {
  atuacao:
    "Célia Franz é terapeuta integrativa e educadora com mais de duas décadas de experiência na formação de terapeutas. Sua atuação abrange homeopatia avançada, constelação familiar sistêmica, hidroconstelação, mapas terapêuticos e desenvolvimento de metodologias exclusivas para o trabalho com consciência e prosperidade.",
  metodologia:
    "A Metodologia Caminho das Riquezas é uma criação original de Célia Franz que integra astrologia, constelação sistêmica e leitura de códigos mentais para identificar e desbloquear potenciais de realização. Desenvolvida ao longo de anos de pesquisa e prática clínica, esta abordagem oferece um mapa personalizado para cada indivíduo encontrar seu caminho de abundância material, emocional e espiritual.",
  formacoes:
    "Formada em homeopatia clássica com especializações em Lantanídeos, Sais de Schüssler e terapêutica miasmática. Consteladora familiar sistêmica com formação internacional. Criadora da metodologia de Hidroconstelação. Pesquisadora dos Portais Matridonais e da Assinatura Energética das Sete Camadas da Consciência.",
  pesquisa:
    "Célia mantém uma trajetória de pesquisa contínua, atualizando e expandindo suas metodologias através do estudo de novas abordagens terapêuticas, participação em congressos internacionais e supervisão de casos clínicos. Seu compromisso é com uma educação terapêutica que seja ao mesmo tempo rigorosa e sensível, técnica e intuitiva.",
};
