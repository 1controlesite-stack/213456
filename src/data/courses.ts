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
      "Formações avançadas em estratégias homeopáticas:\nIntegração das neurociências e da neuroespiritualidade à base homeopática, para a compreensão profunda do sofrimento psíquico específico da nossa era atual.\n\nCapacitamos o terapeuta homeopata a realizar uma leitura clínica assertiva, tratando pessoas e não apenas sintomas.",
    introduction:
      "A homeopatia vai além do sintoma. Nesta linha de formações, você mergulha em abordagens avançadas que conectam o remédio homeopático à história profunda do indivíduo — seus vínculos, suas heranças e sua jornada de individuação. Cada curso foi estruturado para terapeutas que desejam ampliar sua leitura clínica com profundidade, método e rigor científico contemporâneo.",
    seo: {
      title: "Homeopatia Avançada | Célia Franz",
      description:
        "Cursos avançados de homeopatia: Lantanídeos, Sais de Schüssler, Miasmas, Lac's, Portais Matridonais e Assinatura Energética com Célia Franz.",
    },
    courses: [
      {
        id: "lantanideos",
        title: "Lantanídeos",
        overview:
          "Vivemos uma era de aceleração silenciosa. As pessoas não estão apenas cansadas — estão mentalmente exauridas. Pensamentos que não desligam, mentes que não descansam nem durante o sono, corpos que adoecem como consequência direta desse excesso de atividade psíquica. Ansiedade crônica, TDAH, TDA, hiperfoco, superdotação, altas habilidades, enxaquecas por esforço mental, doenças autoimunes sem causa aparente e a sensação constante de estar \"ligado demais\" tornaram-se queixas comuns nos consultórios. É nesse cenário que os lantanídeos se revelam como os medicamentos homeopáticos mais alinhados com o sofrimento psíquico da era contemporânea. Eles atuam no eixo da autonomia, do autocontrole e da reorganização profunda do self.",
        audience:
          "Formação premium voltada para terapeutas que desejam ir além do sintoma, além do rótulo e além do protocolo comum. Para profissionais que atendem pessoas com mentes altamente ativas, perceptivas e sensíveis — que pensam em excesso, sentem em profundidade e carregam uma tensão interna constante.",
        learnings: [
          "Compreender por que tantas pessoas não conseguem descansar a mente",
          "Identificar por que o excesso de autocontrole leva ao colapso",
          "Reconhecer por que a superdotação e as altas habilidades frequentemente adoecem",
          "Utilizar 17 lantanídeos e seus sais com compreensão clínica, posológica e estratégica",
          "Restaurar equilíbrio sem apagar identidade, potência ou inteligência",
          "Integrar neurociência, neuropsicanálise e neuroespiritualidade à homeopatia dos minerais",
        ],
        investment: "Consulte valores atualizados",
        format: "Online ao vivo com material de apoio",
      },
      {
        id: "sais-de-schussler",
        title: "Sais de Schüssler",
        overview:
          "Este não é um curso sobre sais minerais. É uma formação sobre como a vida se sustenta nos detalhes invisíveis. Os Sais de Schüssler revelam algo desconcertante: muitos estados psíquicos persistentes não se mantêm apenas por conflitos internos ou padrões inconscientes, mas porque o organismo perdeu sua capacidade microscópica de funcionar com precisão. Quando a célula perde seus microelementos essenciais, o sistema nervoso perde eficiência, a mente perde clareza, o emocional perde elasticidade — e o indivíduo passa a viver em estados de fadiga, ansiedade, rigidez ou esgotamento que parecem não responder às abordagens tradicionais. Aqui, os sais são apresentados como microestruturas reguladoras da vida, responsáveis por viabilizar o metabolismo intracelular que sustenta a psique, a cognição e a autorregulação do organismo.",
        audience:
          "Para terapeutas que compreendem que o verdadeiro tratamento não começa no sintoma, nem termina no discurso — ele começa no nível onde a vida se organiza. Profissionais que buscam um novo grau de refinamento clínico, entendendo não apenas o que a pessoa sente, mas por que o organismo dela já não consegue sustentar equilíbrio psíquico.",
        learnings: [
          "Reconhecer quando o sofrimento emocional é expressão de uma falha mineral silenciosa",
          "Identificar quando a mente não responde porque a célula está exausta",
          "Integrar fundamentos da terapêutica bioquímica de Schüssler com leitura contemporânea da psique",
          "Aplicar neurociências e neuroespiritualidade à clínica bioquímica",
          "Compreender quando o trabalho de consciência precisa de um solo biológico funcional para acontecer",
          "Restituir ao sistema a linguagem básica para voltar a funcionar com inteligência",
        ],
        investment: "Consulte valores atualizados",
        format: "Online ao vivo com material de apoio",
      },
      {
        id: "miasmas",
        title: "Miasmas – Herança Impressa no SER Humano",
        overview:
          "Nos campos invisíveis da hereditariedade energética e psíquica revela-se a arquitetura profunda dos miasmas — forças ancestrais que atravessam gerações e se imprimem no ser humano como padrões de emoções, predisposições, repetições inconscientes e estados de adoecimento. Os miasmas são heranças impressas que vêm da ancestralidade, carregando a memória viva de histórias não resolvidas, conflitos silenciados, traumas antigos e adaptações extremas à sobrevivência. Reconhecer o miasma que rege os desequilíbrios de um indivíduo é como decifrar a assinatura vibracional de sua história mais profunda — acessar a matriz invisível que sustenta sintomas físicos, padrões emocionais recorrentes e estados mentais cristalizados.",
        audience:
          "Terapeutas homeopatas e profissionais de saúde integrativa que desejam intervir no ponto de origem, onde a herança ancestral encontra o sistema nervoso, o corpo e a consciência. Para quem compreende que não se trata apenas de tratar sintomas, mas de acessar o campo miasmático como chave real de transformação.",
        learnings: [
          "Identificar com precisão clínica o miasma predominante que governa o campo do paciente",
          "Escolher o remédio correto para romper o fluxo da doença — fisiológica, mental, emocional ou espiritual",
          "Integrar fundamentos da homeopatia clássica com leitura psicossomática e neurociência das emoções",
          "Conduzir um processo de cura verdadeiro, unindo neurociência e neuroespiritualidade",
          "Atuar com segurança, precisão e profundidade no campo miasmático",
          "Compreender como e por que os miasmas se manifestam e como conduzir a reorganização profunda",
        ],
        investment: "Consulte valores atualizados",
        format: "Online ao vivo com material de apoio",
      },
      {
        id: "lacs",
        title: "Homeopatia dos Vínculos Feridos – Método Lac's",
        overview:
          "Este curso foi criado para terapeutas que compreendem que os maiores bloqueios da vida adulta não se originam no presente, mas nos vínculos primários não resolvidos, especialmente aqueles estabelecidos no sistema familiar. A Homeopatia dos Vínculos Feridos é um campo altamente especializado da homeopatia contemporânea, fundamentado nos medicamentos oriundos do leite animal (os Lac's), cuja assinatura terapêutica atua diretamente sobre vínculos familiares adoecidos, emaranhamentos sistêmicos invisíveis, lealdades inconscientes, engramas emocionais profundos e padrões repetitivos de sofrimento, escassez e autossabotagem. Os medicamentos do leite carregam a assinatura do pertencimento, da dependência, da separação, do abandono, da lealdade e da identidade familiar.",
        audience:
          "Terapeutas que trabalham com constelação familiar sistêmica, atuam com vínculos, traumas relacionais e padrões repetitivos, desejam tratar bloqueios de prosperidade sob uma ótica clínica profunda, buscam estratégias terapêuticas sofisticadas e não convencionais, e querem oferecer um atendimento verdadeiramente transformador.",
        learnings: [
          "Ler padrões vinculares adoecidos e identificar o medicamento Lac correto",
          "Tratar submissão excessiva, oposição crônica, dependência emocional e rebeldia congelada",
          "Desorganizar padrões sistêmicos cristalizados para liberar lealdades inconscientes",
          "Consolidar movimentos constelatórios e sustentar reorganizações do campo",
          "Integrar a homeopatia dos Lac's com a constelação familiar sistêmica",
          "Destravar o fluxo da vida, dos relacionamentos e da prosperidade",
        ],
        investment: "Consulte valores atualizados",
        format: "Online ao vivo com material de apoio",
      },
      {
        id: "portais-matridonais",
        title: "Portais Matridonais",
        overview:
          "A maior parte dos conflitos emocionais, relacionais e até financeiros da vida adulta não se origina na infância, mas antes dela. Ainda no período intrauterino, o sistema nervoso em formação já registra emoções, ambientes, rejeições, medos e vínculos vividos pela mãe e pelo campo familiar. Esses registros silenciosos tornam-se a base da personalidade, da forma de amar, de reagir ao mundo e de lidar com limites, proteção, pertencimento e segurança. Aqui, você aprenderá a utilizar remédios homeopáticos matridonais como líquido amniótico, placenta, cordão umbilical, vernix caseosa, foliculinum e leite materno, para restaurar registros primários da vida.",
        audience:
          "Terapeutas que desejam ir além do tratamento sintomático e acessar a raiz real dos traumas intrauterinos, de forma clínica, segura e profundamente eficaz. A aplicação é simples, leve e precisa, mesmo para quem não domina a homeopatia clássica.",
        learnings: [
          "Identificar traumas gestacionais através de sinais clínicos, padrões emocionais e sonhos recorrentes",
          "Compreender quando e como indicar cada portal matridonal",
          "Reorganizar campos emocionais, neuropsíquicos e energéticos formados no útero",
          "Integrar homeopatia contemporânea com neuropsicanálise e neurobiologia do desenvolvimento",
          "Ampliar significativamente a qualidade dos atendimentos com atuação diferenciada",
          "Tratar a origem, e não apenas os efeitos das dores humanas originadas na vida intrauterina",
        ],
        investment: "Consulte valores atualizados",
        format: "Online ao vivo com material de apoio",
      },
      {
        id: "assinatura-energetica",
        title: "Assinatura Energética das Sete Camadas da Consciência",
        overview:
          "Este curso nasce de uma compreensão profunda e rara: não somos feitos de sintomas isolados, mas de camadas de consciência que se organizam, se desorganizam e se reorganizam ao longo da vida. Baseado nos estudos de Tinus Smits e ampliado por uma leitura contemporânea que integra neurociência, psicossomática e neuroespiritualidade, o método propõe uma transformação estrutural do indivíduo. Cada camada representa um nível específico de organização interna — desde a sobrevivência e a segurança primária, passando pela autoestima, presença, proteção emocional e identidade, até a sétima camada, onde o indivíduo reencontra sentido, unidade e coerência profunda. Este curso, por si só, já é um tratamento profundo.",
        audience:
          "Terapeutas que compreendem que tratar sintomas não basta. Para profissionais que desejam restaurar estruturas, corrigir a \"fiação interna\" que provoca os desequilíbrios, e gerar resultados consistentes, rápidos e transformadores em todas as áreas da vida do cliente.",
        learnings: [
          "Ler o ser humano de forma integral através das sete camadas da consciência",
          "Identificar qual camada está mais fragilizada e como se manifesta nos comportamentos e escolhas",
          "Aplicar medicamentos homeopáticos correspondentes à assinatura vibracional de cada nível",
          "Estabilizar o sistema nervoso, regular a bioquímica e fortalecer o campo emocional",
          "Não tratar sintomas, mas restaurar estruturas de forma progressiva e respeitosa",
          "Produzir mudanças profundas e sustentáveis com método elegante e altamente eficaz",
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
      "Formações em constelação familiar sistêmica, hidroconstelação e abordagens arquetípicas que revelam dinâmicas ocultas nos sistemas familiares e relacionais, com rigor clínico e maturidade terapêutica.",
    introduction:
      "A constelação familiar é uma ferramenta poderosa para revelar dinâmicas ocultas que operam nos sistemas familiares e relacionais. As formações desta linha combinam a abordagem sistêmica clássica com metodologias exclusivas desenvolvidas por Célia Franz, incluindo a Hidroconstelação e o Movimento das Riquezas — formações que integram neurociência, neuroespiritualidade e quase 20 anos de experiência clínica.",
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
          "Este curso nasce da intersecção entre experiência clínica profunda, rigor conceitual e maturidade terapêutica. A formação foi desenhada para formar consteladores capazes de ler campos com precisão, sustentar movimentos complexos e atuar com ética, presença e clareza — mesmo diante de situações adversas, densas ou inesperadas. O curso se ancora nos fundamentos de Bert Hellinger, integrando o olhar de Brigitte Ribes e Vera Bassoi, além de contribuições contemporâneas que dialogam com a neurociência e a observação clínica refinada. Na Hidroconstelação, o curso se aprofunda na prática de constelação na água, onde os movimentos se dão por si só, impulsionados pelo próprio campo morfogenético. A água passa a ser compreendida como interface de leitura do campo, capaz de revelar padrões ocultos e dinâmicas psíquicas profundas.",
        audience:
          "Para quem deseja atuar em um nível premium de constelação, com segurança técnica, clareza de leitura e capacidade de sustentar processos complexos sem improvisações frágeis. Terapeutas que compreendem que constelar não é apenas aplicar uma técnica, mas ocupar um lugar com presença, precisão e respeito absoluto aos campos que se revelam.",
        learnings: [
          "Reconhecer as leis sistêmicas como dinâmicas vivas de campo, não conceitos decorados",
          "Aprofundar a compreensão dos campos morfogenéticos e mórficos",
          "Lidar com interferências no campo: invasões emocionais, projeções, contaminações e resistências",
          "Dominar a Hidroconstelação com segurança técnica e leitura precisa",
          "Realizar exercícios exclusivos de reorganização pessoal e reposicionamento frente à prosperidade",
          "Conduzir movimentos restauradores com sobriedade e respeito à hierarquia dos sistemas",
        ],
        investment: "Consulte valores atualizados",
        format: "Presencial e online com práticas supervisionadas",
      },
      {
        id: "movimento-riquezas",
        title: "Movimento das Riquezas",
        overview:
          "O Movimento das Riquezas é um método autoral criado para restaurar o fluxo natural da vida, do fluxo financeiro e da realização pessoal a partir da liberação profunda de engramas e emaranhamentos ativos nos campos mórficos e morfogenéticos. Trata-se de uma constelação avançada, precisa e altamente estruturada, que revela com clareza aquilo que está oculto no campo, sem margem para interpretações rasas ou manipulações inconscientes. O terapeuta aprende a ler movimentos, visualizar imagens mentais do campo, direções e símbolos com tal precisão que se torna impossível não enxergar o que precisa ser visto. Após a constelação reveladora, o terapeuta é treinado para aplicar técnicas avançadas de neuromodulação cerebral, reprogramação de mapas neurais e atualização de hologramas.",
        audience:
          "Terapeutas que buscam resultados profundos, consistentes e duradouros, tanto para o cliente quanto para o profissional. Para quem deseja se posicionar em um novo patamar de leitura, atuação e prosperidade com um método exclusivo, rigoroso e elegante.",
        learnings: [
          "Restaurar o fluxo natural da vida, do fluxo financeiro e da realização pessoal",
          "Ler campos mórficos e morfogenéticos com precisão e objetividade",
          "Aplicar técnicas avançadas de neuromodulação cerebral e reprogramação de mapas neurais",
          "Construir pacotes terapêuticos estruturados de 6 a 18 sessões com protocolo claro",
          "Trabalhar com segurança e sustentação sem desgaste emocional ou energético",
          "Unir neurociência e neuroespiritualidade em linguagem moderna e refinada",
        ],
        investment: "Consulte valores atualizados",
        format: "Online ao vivo com práticas",
      },
      {
        id: "mta",
        title: "M.T.A. – Movimento da Trilogia Arquetípica",
        overview:
          "Em um cenário clínico cada vez mais complexo, não basta sensibilidade terapêutica — é indispensável método, estrutura e base neurocientífica. O M.T.A. nasce dessa necessidade: oferecer ao terapeuta uma técnica clara, rápida e profundamente direcionada para detectar bloqueios, travas sistêmicas e a origem real dos conflitos psíquicos e psicossomáticos. Integra constelação sistêmica, estudos contemporâneos da psiquê, Programação Neurolinguística, neurociência e neuroespiritualidade, permitindo uma leitura objetiva do campo do cliente. Em poucos movimentos, o método revela se o conflito está relacionado a vínculos feridos, experiências intrauterinas, padrões transgeracionais ou núcleos psíquicos mais profundos.",
        audience:
          "Terapeutas que desejam trabalhar com mais verdade, profundidade e autoridade. Para profissionais que compreendem que o campo terapêutico contemporâneo exige precisão na leitura, maturidade na condução e coerência no tratamento — sem improvisações ou tentativas aleatórias.",
        learnings: [
          "Detectar rapidamente a origem real dos conflitos psíquicos e psicossomáticos",
          "Diferenciar se o conflito vem de vínculos feridos, experiências intrauterinas ou padrões transgeracionais",
          "Indicar a vertente de tratamento homeopático mais coerente para cada caso",
          "Integrar constelação sistêmica com PNL, neurociência e neuroespiritualidade",
          "Evitar intervenções genéricas e tentativas aleatórias na clínica",
          "Ganhar clareza clínica para conduzir processos com ética e eficácia",
        ],
        investment: "Consulte valores atualizados",
        format: "Presencial com vivências práticas",
      },
      {
        id: "oraculo-terapeuta",
        title: "Oráculo do Terapeuta",
        overview:
          "O Oráculo do Terapeuta nasce da interseção entre os estudos contemporâneos da psiquê, a psicossomática, a leitura neuroespiritual e a linguagem simbólica que atravessa o inconsciente individual e coletivo. Não se trata de um oráculo comum nem de um baralho intuitivo genérico — foi concebido e refinado a partir da experiência clínica real. As 27 cartas formam um sistema completo de leitura e direcionamento, dialogando com camadas profundas do funcionamento psíquico e alcançando conteúdos que envolvem conflitos emocionais, padrões repetitivos, manifestações psicossomáticas, estados de exaustão mental e bloqueios existenciais que a consciência verbal não consegue organizar sozinha. O símbolo, quando bem estruturado, faz o que a mente linear não faz: atravessa defesas, suaviza resistências e cria pontes entre o consciente e o inconsciente.",
        audience:
          "Terapeutas e psicoterapeutas que desejam ampliar o repertório de leitura, aprofundar a escuta clínica e favorecer intervenções mais precisas. Profissionais que entendem que o símbolo continua sendo uma das linguagens mais antigas — e mais atuais — da mente humana.",
        learnings: [
          "Ler pessoas através do símbolo e compreender movimentos psíquicos por meio dos arquétipos",
          "Utilizar as 27 cartas como instrumento de abertura de sessão e investigação simbólica",
          "Aplicar a imagética como ferramenta de consciência, direcionamento e transformação",
          "Compreender vínculos entre emoções não elaboradas e suas expressões no corpo",
          "Ampliar a percepção do cliente sobre estados internos com neurodinâmica simbólica",
          "Oferecer devolutivas terapêuticas profundas e acessíveis, sem excesso de racionalização",
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
      "Formações em mapa astrológico terapêutico e decodificação de códigos mentais — ferramentas de leitura profunda que revelam potenciais ocultos e direcionam o caminho das riquezas.",
    introduction:
      "Os mapas são ferramentas de leitura e navegação interior. Nesta linha de formações, você aprenderá a utilizar o mapa astrológico e os códigos mentais como instrumentos de compreensão profunda, identificando potenciais ocultos e desbloqueando caminhos de realização pessoal e profissional com precisão clínica e base neurocientífica.",
    seo: {
      title: "Mapas Terapêuticos | Célia Franz",
      description:
        "Formações em mapa astrológico terapêutico e códigos mentais para terapeutas. Caminho das Riquezas e Chave Mestra com Célia Franz.",
    },
    courses: [
      {
        id: "mapa-astrologico",
        title: "Mapa Astrológico – Caminho das Riquezas",
        overview:
          "Existe uma diferença radical entre olhar um mapa astrológico e saber lê-lo como um campo de informações vivas. A maioria das leituras permanece na superfície: traços, tendências, descrições elegantes que até fazem sentido, mas não transformam. Este curso é uma formação terapêutica autoral, criada para ensinar o terapeuta a ler o mapa como um sistema de heranças, onde estão inscritos registros ancestrais, memórias do período intrauterino, vínculos familiares, padrões de prosperidade, travas financeiras, desafios profissionais e potenciais de expansão real. Aqui, o mapa deixa de ser simbólico no sentido raso e passa a ser um instrumento clínico de leitura profunda dos campos psíquicos e sistêmicos. Ninguém nasce \"bloqueado\" ou \"sem sorte\" — o que existe são códigos herdados, muitos inconscientes, que seguem operando enquanto não são vistos.",
        audience:
          "Terapeutas e profissionais que atendem pessoas com bloqueios recorrentes em dinheiro, trabalho e relacionamentos. Para quem já percebeu que muitas travas não se resolvem apenas com conversa ou insight e deseja atuar em um nível mais profundo, seguro e estruturado, unindo visão sistêmica, ancestralidade e leitura psíquica real.",
        learnings: [
          "Ler mapas astrológicos de forma terapêutica e sistêmica, não apenas simbólica",
          "Identificar heranças ancestrais que moldam a relação com dinheiro, trabalho e pertencimento",
          "Analisar questões cármicas, lealdades invisíveis e repetições familiares no mapa",
          "Ler marcas do período intrauterino que geram medo de expansão ou culpa por prosperar",
          "Compreender onde o fluxo financeiro se interrompe e quais medos sabotam crescimento",
          "Direcionar atendimentos com mais precisão e elevar o valor percebido do trabalho clínico",
        ],
        investment: "Consulte valores atualizados",
        format: "Online ao vivo com análises práticas",
      },
      {
        id: "chave-mestra",
        title: "Chave Mestra dos Códigos Mentais",
        overview:
          "Vivemos uma nova era terapêutica. O paciente contemporâneo não busca apenas escuta — busca clareza, precisão, direção e resultados reais. A Chave Mestra dos Códigos Mentais permite que, em uma única sessão, o terapeuta tenha acesso a uma leitura profunda e integrada do cliente, identificando com clareza emaranhamentos familiares e sistêmicos, engramas emocionais inconscientes, padrões repetitivos herdados da ancestralidade, feridas emocionais estruturais e desequilíbrios biofísicos, psicossomáticos e financeiros. O terapeuta que domina a Chave Mestra transforma a sessão inicial em um verdadeiro mapa terapêutico completo — algo raro e altamente valorizado no mercado atual.",
        audience:
          "Este não é um curso introdutório. É uma formação pensada para terapeutas de nível premium, que desejam se diferenciar no mercado, elevar o padrão dos atendimentos, trabalhar com profundidade sem perder objetividade e oferecer ao cliente uma experiência terapêutica clara, segura e transformadora.",
        learnings: [
          "Realizar leitura 360° do cliente em uma única sessão",
          "Decodificar engramas emocionais e emaranhamentos sistêmicos",
          "Analisar padrões familiares e ancestrais com integração de setênios e genograma",
          "Indicar estratégias homeopáticas contemporâneas a partir da leitura inicial",
          "Atuar sobre o eixo biofísico, psicossomático e emocional de forma integrada",
          "Aplicar psicoeducação como ferramenta de remodelação neural e direcionamento estratégico",
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
      "Palestras, workshops, aulas gratuitas de degustação e pacotes terapêuticos. Espaços de abertura de consciência, leitura profunda e atualização do mapa interno.",
    introduction:
      "Os eventos são portas de entrada para o universo de formações de Célia Franz. Não são encontros comuns — são espaços de abertura de consciência, leitura profunda e atualização do mapa interno, criados para quem já ultrapassou o nível do conteúdo raso e busca compreensão real. As aulas gratuitas de degustação permitem que você experimente a linguagem e o método antes de decidir aprofundar.",
    seo: {
      title: "Eventos e Agendamentos | Célia Franz",
      description:
        "Palestras, workshops, aulas gratuitas e pacotes terapêuticos com Célia Franz. Agende sua experiência transformadora.",
    },
    courses: [
      {
        id: "eventos-palestras",
        title: "Eventos: Palestras, Workshops e Aulas Gratuitas",
        overview:
          "Ao longo do ano, são realizadas palestras, workshops, lives e aulas gratuitas de degustação, sempre com temas amplos e atuais, sustentados por neurociência contemporânea, estudos da psiquê, leitura sistêmica, psicossomática, homeopatia avançada e uma abordagem neuroespiritual aplicada — sem misticismo vazio e sem simplificações perigosas. Cada evento é pensado para provocar insight, reposicionamento interno e ampliação de consciência. Falamos de padrões emocionais repetitivos, heranças invisíveis, vínculos que adoecem, bloqueios de prosperidade, exaustão mental, conflitos internos silenciosos e caminhos reais de reorganização. Não trabalhamos com discursos motivacionais passageiros — trabalhamos com conteúdo que atravessa, que gera desconforto produtivo, clareza e maturidade psíquica.",
        audience:
          "Público leigo, terapeutas e profissionais que desejam refinar seu olhar clínico e humano. Para quem sente que chegou a hora de pensar melhor, sentir com mais consciência e viver com mais coerência.",
        learnings: [
          "Experienciar a linguagem, o método e a forma de leitura de Célia Franz",
          "Reconhecer padrões emocionais repetitivos e entender por que se repetem",
          "Enxergar onde está a raiz do desequilíbrio em diferentes áreas da vida",
          "Receber conteúdo estruturado, exercícios guiados e direcionamentos práticos",
          "Conectar-se com uma comunidade de terapeutas em evolução",
          "Receber orientação sobre caminhos de formação e aprofundamento",
        ],
        investment: "Gratuito a valores acessíveis",
        format: "Presencial e online, conforme programação",
      },
      {
        id: "agendamentos",
        title: "Agendamentos e Pacotes Terapêuticos",
        overview:
          "Aqui, o atendimento não começa com protocolos genéricos — começa com clareza, leitura profunda e estratégia terapêutica personalizada. Antes de qualquer escolha, você pode agendar uma consulta inicial para compreender qual pacote terapêutico é o mais adequado para o seu momento de vida. O trabalho integra estudos contemporâneos da psiquê, neurociência aplicada, leitura sistêmica familiar, psicossomática, neuroeconomia, neuroespiritualidade, recondicionamento mental e homeopatia contemporânea. Pacotes disponíveis: Caminho das Riquezas Premium (o mais completo, envolvendo ancestralidade, padrões familiares, bloqueios de prosperidade e recondicionamento), Mapa Chave Mestra (sessão única de clareza imediata) e Constelação Caminho das Riquezas (constelação ampla com sessões de recondicionamento mental).",
        audience:
          "Pessoas que buscam atendimento terapêutico individual e personalizado, com acompanhamento profissional qualificado. Para quem está pronto para assumir maturidade emocional, reorganizar sua estrutura interna e acessar uma nova lógica de vida, prosperidade e presença.",
        learnings: [
          "Consulta inicial com leitura profunda e direcionamento personalizado",
          "Caminho das Riquezas Premium — pacote completo de transformação integral",
          "Mapa Chave Mestra — sessão única para clareza imediata sobre padrões ocultos",
          "Constelação Caminho das Riquezas — constelação ampla com recondicionamento mental",
          "Atendimento presencial e online sob agendamento",
          "Abordagem integrativa combinando múltiplas ferramentas conforme a necessidade",
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
    "Minha atuação profissional nasce da união precisa entre estudos contemporâneos da psiquê, neurociência, psicossomática, leitura sistêmica e abordagens corporais profundas, integradas a uma escuta clínica refinada e a uma compreensão avançada dos códigos que organizam a experiência humana. Cada curso e cada atendimento que desenvolvo são concebidos como um mapa vivo de leitura e intervenção, no qual nada é isolado ou tratado fora de contexto. Corpo, história biográfica, vínculos primários, padrões ancestrais e escolhas conscientes são compreendidos como partes de um mesmo sistema inteligente, dinâmico e autorregulável. Meus cursos se conectam de forma orgânica, formando um ecossistema terapêutico integrado, voltado à restauração integral do ser humano.",
  metodologia:
    "Ao longo de aproximadamente 30 anos de experiência clínica, consolidei uma visão ampla, estratégica e ética do cuidado humano, que deu origem à metodologia Caminho das Riquezas. Por meio dela, realizo atendimentos e também formo terapeutas, ensinando uma abordagem abrangente, precisa e atualizada, que une rigor técnico, sensibilidade clínica e respeito às raízes do saber humano ancestral. Cada processo é conduzido com presença, clareza e consistência — para quem busca evolução concreta, maturidade interna e resultados sustentáveis, e não soluções superficiais.",
  formacoes:
    "Gestão Hospitalar (UNIP). Pós-graduações e especializações: Neuropsicanálise; Psicologia Corporal e Bioenergética; Intolerância e Alergias Alimentares; Estratégias Ortomoleculares e Oligoterapia; Homeopatia Clássica e Contemporânea; Terapias Florais (Bach, Minas, Joel Aleixo); Terapia Reichiana e Bioenergética (Centro Reichiano de Curitiba); Formação Holística e Psicoterapia Holística (Universidade Holística do Brasil); Constelação Familiar e Sistêmica; Terapia de Vidas Passadas (UHB); Regressão Transgenerativa (SIAH); Hipnose Clínica e Condicionativa (SIAH / Instituto Brasileiro de Hipnologia); Ressonância Pessoal Psicoterapêutica (PDI – Dr. Idalino Almeida); Terapeuta de Renascimento/Rebirthing (Instituto Casa Samadhi); Astrologia Psíquica e Cármica; Neurociências e Neuroespiritualidade; PSYCH-K; Iridologia e Naturopatia; Nova Medicina Germânica Avançada (Psicossomática); Reprogramação Biológica; Terapia Biofísica e Medicina Vibracional; Neurobioquímica; Modulação Intestinal.",
  pesquisa:
    "Me mantenho pesquisadora apaixonada em neurociências, epigenética e influências transgeracionais, constelações gemelares e homeopatia contemporânea, para aprimorar a cada dia meu grande objetivo de vida: compreender no máximo possível a constituição do SER humano e quais as reais raízes dos seus distúrbios específicos. Dessa forma, conseguirmos trazer a restauração de todo o sofrimento em todos os aspectos da pessoa. Trato pessoas e não sintomas!",
};
