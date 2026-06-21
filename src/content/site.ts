export const siteConfig = {
  name: "AUGUSTO VALMONT",
  url: "https://augustovalmont.com",
  description:
    "La sede digital de Augusto Valmont: una filosofía de autodominio, disciplina estratégica, crecimiento y excelencia deliberada.",
  tagline: "Autodominio. Disciplina estratégica. Crecimiento implacable.",
  keywords: [
    "Augusto Valmont",
    "autodominio",
    "disciplina estratégica",
    "crecimiento personal",
    "filosofía",
    "excelencia",
  ],
  nav: [
    { href: "/", label: "Inicio" },
    { href: "/philosophy", label: "Filosofía" },
    { href: "/journal", label: "Journal" },
    { href: "/about", label: "Acerca" },
  ],
};

export const pillars = [
  {
    title: "Autodominio",
    description: "Domina mente, cuerpo y emociones hasta que tu criterio pese más que cualquier impulso.",
  },
  {
    title: "Disciplina estratégica",
    description: "Actúa con intención, consistencia y control. Nada importante debe depender del ánimo del día.",
  },
  {
    title: "Crecimiento implacable",
    description: "Mejorar cada día en cada dominio relevante es una obligación, no una preferencia.",
  },
  {
    title: "Excelencia con impacto",
    description: "Los resultados deben ser concretos, útiles y sostenibles. La estética sin sustancia no alcanza.",
  },
];

export const focusAreas = [
  {
    title: "Físico",
    points: ["Fuerza.", "Salud.", "Rendimiento."],
  },
  {
    title: "Mente",
    points: ["Aprendizaje.", "Pensamiento.", "Sabiduría."],
  },
  {
    title: "Patrimonio",
    points: ["Negocios.", "Inversiones.", "Libertad."],
  },
  {
    title: "Habilidades",
    points: ["Ingeniería.", "Programación.", "Sistemas."],
  },
  {
    title: "Legado",
    points: ["Impacto.", "Liderazgo.", "Familia."],
  },
];

export const homePhilosophy = {
  statement: "La mayoría vive por defecto. Yo creo que la vida debe diseñarse.",
  body:
    "A través de disciplina, sistemas y acción deliberada, nos volvemos más fuertes, más sabios y más capaces con cada año que pasa. La libertad no es una emoción: es la consecuencia de una vida gobernada con claridad.",
};

export const initiatives = [
  {
    title: "WebForge",
    description:
      "Ecosistema tecnológico enfocado en software, automatización e infraestructura digital para construir activos con profundidad operativa.",
  },
  {
    title: "NovaTV",
    description:
      "Sistemas e infraestructura para streaming y televisión diseñados para escalar con criterio, estabilidad y visión de largo plazo.",
  },
  {
    title: "Nexus",
    description:
      "Sistema operativo personal impulsado por IA para pensar mejor, decidir con más velocidad y ejecutar con menos fricción.",
  },
];

export type PhilosophySection = {
  kicker: string;
  title: string;
  body: string[];
};

export const philosophySections: PhilosophySection[] = [
  {
    kicker: "Identidad",
    title: "El polímata soberano no persigue validación. Construye dominio.",
    body: [
      "Identidad significa saber quién se está formando cuando nadie mira. No se trata de proyectar una imagen, sino de consolidar una naturaleza capaz de sostener responsabilidad, presión y largo plazo.",
      "La soberanía personal empieza cuando dejamos de vivir reaccionando a circunstancias, opiniones o impulsos. Desde ahí, cada decisión deja de ser accidental y empieza a responder a un estándar interno.",
    ],
  },
  {
    kicker: "Misión",
    title: "La misión es convertirse en una fuerza útil, disciplinada y difícil de corromper.",
    body: [
      "Una vida bien dirigida produce claridad, capacidad y servicio. El objetivo no es solamente avanzar, sino hacerlo de un modo que eleve el carácter y expanda el impacto.",
      "Todo lo que vale la pena requiere construcción paciente: cuerpo, criterio, patrimonio, relaciones, sistemas y legado. La misión es integrar esos dominios sin fragmentarse.",
    ],
  },
  {
    kicker: "Creencias",
    title: "La comodidad prolongada debilita. La fricción elegida fortalece.",
    body: [
      "Las creencias que orientan esta filosofía son simples: lo difícil suele ser formativo, la repetición crea identidad y la libertad real exige estructura. Sin estructura, incluso el talento se vuelve errático.",
      "No se idolatra el sufrimiento, pero sí la capacidad de tolerar incomodidad con serenidad. Lo contrario produce fragilidad disfrazada de conveniencia.",
    ],
  },
  {
    kicker: "Disciplina",
    title: "La disciplina es la arquitectura invisible de toda vida respetable.",
    body: [
      "La motivación fluctúa. Los sistemas permanecen. La disciplina consiste en diseñar contextos, ritmos y estándares que reduzcan la dependencia del estado emocional.",
      "Cuando la disciplina madura, deja de sentirse como restricción y empieza a parecerse a libertad. Permite elegir mejor, sostener mejor y corregir más rápido.",
    ],
  },
  {
    kicker: "Crecimiento",
    title: "Crecer no es sumar ruido. Es aumentar profundidad, rango y precisión.",
    body: [
      "El crecimiento real no siempre es visible de inmediato. Muchas veces ocurre como refinamiento: pensar con más nitidez, entrenar con más intención, hablar con más peso, construir con más criterio.",
      "Cada temporada exige una versión más completa de uno mismo. Quedarse igual también es una decisión, y casi siempre es una renuncia.",
    ],
  },
  {
    kicker: "Fortaleza",
    title: "La fortaleza integra cuerpo entrenado, mente estable y voluntad confiable.",
    body: [
      "No alcanza con lucir preparado. Hay que estarlo. La fortaleza se mide por la capacidad de responder con eficacia bajo presión, fatiga y ambigüedad.",
      "El cuerpo enseña obediencia, la mente enseña dirección y el carácter enseña permanencia. Sin esa triple alianza, el potencial no se vuelve poder utilizable.",
    ],
  },
  {
    kicker: "Excelencia",
    title: "La excelencia es un estándar. Nunca un estado final.",
    body: [
      "Buscar excelencia implica rechazar lo improvisado cuando la situación exige profundidad. Es revisar, simplificar, depurar y elevar hasta que forma y sustancia se sostengan mutuamente.",
      "No existe excelencia duradera sin humildad para corregir, paciencia para pulir y firmeza para sostener el nivel cuando nadie aplaude.",
    ],
  },
  {
    kicker: "Legado",
    title: "El legado es lo que sigue ordenando después de nuestra ausencia.",
    body: [
      "Una vida con propósito deja sistemas, ideas, instituciones, familia y ejemplo. Dejar legado no es aspirar a monumentos; es formar estructuras que sigan produciendo bien.",
      "La pregunta final no es cuánto acumulaste, sino cuánto fortaleciste a otros con lo que construiste.",
    ],
  },
];

export const aboutSections = {
  identity:
    "Augusto Valmont representa una filosofía de vida orientada al autodominio, la disciplina estratégica y la búsqueda deliberada de excelencia en cada dominio relevante.",
  vision:
    "La visión es formar una vida soberana: fuerte en lo físico, rigurosa en lo mental, libre en lo económico y clara en su dirección moral.",
  values: [
    {
      title: "Claridad",
      description: "Pensar sin niebla. Decidir sin confusión. Nombrar la realidad con precisión.",
    },
    {
      title: "Responsabilidad",
      description: "Asumir el peso de construir una vida de alto estándar sin delegar la causa en el contexto.",
    },
    {
      title: "Fortaleza",
      description: "Desarrollar la capacidad de sostener presión, incomodidad y complejidad sin perder forma.",
    },
    {
      title: "Elegancia",
      description: "Buscar una forma de vivir donde la precisión, la estética y la sustancia convivan con naturalidad.",
    },
  ],
  longTermMission:
    "Construir sistemas, ideas e instituciones que ayuden a más personas a vivir con más estructura, criterio y libertad real.",
  currentFocus: [
    "Diseñar infraestructura digital para operar con mayor autonomía.",
    "Profundizar en ingeniería, automatización e inteligencia artificial aplicada.",
    "Elevar estándares físicos, mentales y operativos de manera simultánea.",
  ],
};