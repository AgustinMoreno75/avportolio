import type { Locale } from "@/lib/locales";

export const siteConfig = {
  name: "Augusto Valmont",
  url: "https://augustovalmont.com",
  contactEmail: "hello@augustovalmont.com",
  socialLinks: [
    { id: "github", href: "https://github.com/AgustinMoreno75" },
    { id: "email", href: "mailto:hello@augustovalmont.com" },
  ],
} as const;

type Project = {
  title: string;
  category: string;
  status: string;
  description: string;
  mission: string;
  technology: string[];
};

type SiteContent = {
  metadata: {
    description: string;
    tagline: string;
    keywords: string[];
  };
  navigation: {
    items: Array<{ href: string; label: string }>;
    ctaLabel: string;
    languageLabel: string;
    openMenuLabel: string;
    closeMenuLabel: string;
  };
  socialLabels: Record<(typeof siteConfig.socialLinks)[number]["id"], string>;
  footer: {
    description: string;
  };
  home: {
    metadataTitle: string;
    metadataDescription: string;
    kicker: string;
    heroTitle: string;
    heroDescription: string;
    primaryCta: string;
    secondaryCta: string;
    currentlyBuilding: string;
    whatIDoEyebrow: string;
    whatIDoTitle: string;
    whatIDoDescription: string;
    currentProjectsEyebrow: string;
    currentProjectsTitle: string;
    currentProjectsDescription: string;
    viewDetails: string;
    aboutEyebrow: string;
    aboutTitle: string;
    aboutLink: string;
    principlesEyebrow: string;
    principlesTitle: string;
    visionEyebrow: string;
    finalCtaEyebrow: string;
    finalCtaTitle: string;
    finalCtaDescription: string;
    finalCtaButton: string;
    whatIDo: Array<{ title: string; description: string }>;
    aboutParagraphs: string[];
    principles: string[];
    vision: {
      title: string;
      body: string[];
    };
  };
  projects: {
    items: Project[];
    metadataTitle: string;
    metadataDescription: string;
    eyebrow: string;
    title: string;
    description: string;
    missionLabel: string;
    technologyLabel: string;
  };
  about: {
    metadataTitle: string;
    metadataDescription: string;
    eyebrow: string;
    title: string;
    description: string;
    sections: Array<{ label: string; paragraphs: string[] }>;
    visionLabel: string;
  };
  contact: {
    metadataTitle: string;
    metadataDescription: string;
    eyebrow: string;
    title: string;
    intro: string;
    availability: string;
    detailsLabel: string;
    socialLinksLabel: string;
    formLabel: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
    helperText: string;
  };
  journal: {
    metadataTitle: string;
    metadataDescription: string;
    eyebrow: string;
    title: string;
    description: string;
    browser: {
      searchAndFilter: string;
      searchPlaceholder: string;
      allCategoriesLabel: string;
      entrySingular: string;
      entryPlural: string;
      updatingResults: string;
      featuredEntry: string;
      readFull: string;
      noResults: string;
      previous: string;
      next: string;
      page: string;
      of: string;
      readEntry: string;
    };
    article: {
      backToJournal: string;
      keepReading: string;
      relatedTitle: string;
    };
  };
};

const sharedTechnology = {
  webforge: ["Next.js", "TypeScript", "Automation", "Infrastructure"],
  novatv: ["Streaming", "Workflows", "Ops", "Integrations"],
};

const siteContent: Record<Locale, SiteContent> = {
  es: {
    metadata: {
      description:
        "Sitio personal de Augusto Valmont, emprendedor, ingeniero y builder enfocado en empresas, sistemas y ejecución de largo plazo.",
      tagline:
        "Emprendedor, ingeniero y builder enfocado en crear empresas, sistemas y una vida de crecimiento intencional.",
      keywords: [
        "Augusto Valmont",
        "emprendedor",
        "ingeniero",
        "builder",
        "sistemas",
        "software",
        "automatización",
        "marca personal",
      ],
    },
    navigation: {
      items: [
        { href: "/", label: "Inicio" },
        { href: "/about", label: "Sobre mí" },
        { href: "/projects", label: "Proyectos" },
        { href: "/contact", label: "Contacto" },
      ],
      ctaLabel: "Hablemos",
      languageLabel: "Cambiar idioma",
      openMenuLabel: "Abrir navegación",
      closeMenuLabel: "Cerrar navegación",
    },
    socialLabels: {
      github: "GitHub",
      email: "Correo",
    },
    footer: {
      description:
        "Un espacio personal para construir empresas, sistemas, tecnología y una vida con dirección a través de la ejecución.",
    },
    home: {
      metadataTitle: "Start",
      metadataDescription:
        "Quién es Augusto Valmont, qué construye y por qué seguir su recorrido como emprendedor, ingeniero y builder.",
      kicker: "Sitio de marca personal",
      heroTitle: "Augusto Valmont",
      heroDescription:
        "Emprendedor, ingeniero y builder enfocado en crear empresas, sistemas y una vida de crecimiento intencional.",
      primaryCta: "Explorá mi trabajo",
      secondaryCta: "Sobre mí",
      currentlyBuilding: "Construyendo ahora",
      whatIDoEyebrow: "Qué hago",
      whatIDoTitle: "Construyo en la intersección entre empresas, sistemas y crecimiento personal.",
      whatIDoDescription:
        "La idea es simple: crear cosas útiles, operarlas bien y seguir creciendo para sostener proyectos cada vez más ambiciosos.",
      currentProjectsEyebrow: "Proyectos actuales",
      currentProjectsTitle: "Estos son los proyectos en los que estoy construyendo activamente hoy.",
      currentProjectsDescription:
        "Cada uno refleja una parte distinta de cómo trabajo: software, operaciones y construcción de sistemas sólidos.",
      viewDetails: "Ver detalle",
      aboutEyebrow: "Sobre Augusto",
      aboutTitle:
        "Construyo negocios, herramientas y capacidades alrededor de la misma idea: foco de largo plazo, claridad y ejecución.",
      aboutLink: "Conocé más sobre mí",
      principlesEyebrow: "Mis principios",
      principlesTitle: "Unas pocas ideas claras ordenan cómo trabajo, decido y construyo.",
      visionEyebrow: "Visión",
      finalCtaEyebrow: "Próximo paso",
      finalCtaTitle: "El recorrido recién empieza.",
      finalCtaDescription:
        "Si querés seguir el viaje, colaborar o hablar sobre construir algo importante, conectemos.",
      finalCtaButton: "Conectemos",
      whatIDo: [
        {
          title: "Construyo empresas",
          description:
            "Desarrollo negocios que resuelven problemas reales y generan valor de largo plazo con ejecución clara.",
        },
        {
          title: "Construyo sistemas",
          description:
            "Diseño marcos, procesos y tecnología que ayudan a escalar operaciones con claridad y consistencia.",
        },
        {
          title: "Me construyo a mí mismo",
          description:
            "Trabajo en mejorar física, mental y profesionalmente para sostener metas cada vez más grandes con capacidad real.",
        },
      ],
      aboutParagraphs: [
        "Soy un builder. Me interesan los negocios, la ingeniería, los sistemas y el desafío de crear una vida que pueda sostener ambiciones reales.",
        "No estoy tratando de sonar filosófico o motivacional. Estoy tratando de construir cosas reales: compañías, herramientas, procesos y habilidades que se acumulen con el tiempo.",
      ],
      principles: ["Disciplina", "Ejecución", "Responsabilidad", "Excelencia", "Crecimiento continuo"],
      vision: {
        title:
          "Estoy construyendo una vida y un conjunto de proyectos alrededor de libertad, creación, tecnología, impacto y legado.",
        body: [
          "Mi visión de largo plazo es crear empresas, sistemas y herramientas que me den más libertad para construir y al mismo tiempo generen valor real para otras personas.",
          "Quiero que la tecnología, la disciplina, la ambición y la ejecución apunten en la misma dirección. No me interesa solo crecer. Me interesa construir algo duradero y significativo.",
        ],
      },
    },
    projects: {
      metadataTitle: "Projects",
      metadataDescription:
        "Los proyectos, compañías y sistemas que Augusto Valmont está construyendo activamente.",
      eyebrow: "Proyectos",
      title: "Una vista de los proyectos y sistemas que estoy construyendo hoy.",
      description:
        "Cada proyecto forma parte de un recorrido más amplio alrededor de tecnología, ejecución, libertad y creación de valor de largo plazo.",
      missionLabel: "Misión",
      technologyLabel: "Tecnología",
      items: [
        {
          title: "WebForge",
          category: "Software y automatización",
          status: "Activo",
          description:
            "Software, automatización e infraestructura digital para convertir ideas en operaciones más inteligentes y escalables.",
          mission:
            "Crear herramientas y sistemas prácticos que simplifiquen la ejecución y generen apalancamiento para negocios digitales modernos.",
          technology: sharedTechnology.webforge,
        },
        {
          title: "NovaTV",
          category: "Operaciones de medios",
          status: "En crecimiento",
          description:
            "Operaciones de televisión y streaming diseñadas alrededor de confiabilidad, estructura y ejecución técnica sólida.",
          mission:
            "Construir mejores sistemas operativos para distribución, producción e infraestructura audiovisual de largo plazo.",
          technology: sharedTechnology.novatv,
        },
      ],
    },
    about: {
      metadataTitle: "About Me",
      metadataDescription:
        "Quién soy, qué estoy construyendo y cuál es la visión de largo plazo detrás de mi trabajo.",
      eyebrow: "Sobre mí",
      title:
        "Este sitio existe para explicar con claridad quién soy, qué estoy construyendo y por qué eso importa para mí.",
      description:
        "Quiero que quien llegue acá entienda a la persona detrás de los proyectos, los valores detrás del trabajo y la dirección de largo plazo detrás de todo lo que estoy construyendo.",
      sections: [
        {
          label: "Quién soy",
          paragraphs: [
            "Soy emprendedor, ingeniero y systems thinker. Disfruto construir desde cero, resolver problemas difíciles y convertir ideas en algo tangible.",
            "Me atraen los proyectos que mezclan tecnología, operaciones, estrategia y crecimiento personal. Para mí, construir no es solo trabajo: es una forma de pensar y de vivir.",
          ],
        },
        {
          label: "Mi historia",
          paragraphs: [
            "Con el tiempo entendí que lo que más me motiva no es tener ideas, sino ejecutarlas bien. Me interesa aprender rápido, construir con claridad y volverme capaz de sostener cosas cada vez más grandes.",
            "Por eso mi camino se mueve entre negocios, software, sistemas y desarrollo personal. Todo refuerza el mismo objetivo: convertirme en alguien capaz de construir más, mejor y durante mucho tiempo.",
          ],
        },
        {
          label: "En qué creo",
          paragraphs: [
            "Creo que la disciplina es una ventaja competitiva. Creo que la ejecución importa más que el ruido. Y creo que la claridad, la responsabilidad y la constancia separan a quienes construyen de quienes solo quieren la imagen de construir.",
          ],
        },
        {
          label: "Qué estoy construyendo",
          paragraphs: [
            "Hoy estoy construyendo en software, operaciones, automatización e inteligencia artificial. Al mismo tiempo, también estoy construyendo las habilidades, sistemas y base personal que necesito para hacer trabajo más grande en la próxima década.",
          ],
        },
      ],
      visionLabel: "Visión de largo plazo",
    },
    contact: {
      metadataTitle: "Contacto",
      metadataDescription:
        "Datos de contacto y formas de hablar con Augusto Valmont sobre proyectos, sistemas y nuevas oportunidades.",
      eyebrow: "Contacto",
      title: "La mejor forma de conectar es empezar una conversación clara.",
      intro:
        "Si querés hablar sobre software, sistemas, negocios, automatización o una oportunidad para construir algo importante, escribime.",
      availability:
        "Actualmente estoy abierto a conversaciones estratégicas, colaboraciones y nuevas oportunidades.",
      detailsLabel: "Canales",
      socialLinksLabel: "Links sociales",
      formLabel: "Formulario de contacto",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Email",
      emailPlaceholder: "tu@email.com",
      messageLabel: "Mensaje",
      messagePlaceholder: "Contame qué estás construyendo o por qué te gustaría conectar.",
      submitLabel: "Enviar mensaje",
      helperText: "Este formulario abre tu cliente de email con el mensaje listo para enviar.",
    },
    journal: {
      metadataTitle: "Journal",
      metadataDescription:
        "Artículos sobre sistemas, ejecución, identidad, fortaleza y crecimiento deliberado.",
      eyebrow: "Journal",
      title: "Un espacio editorial para ideas que fortalecen criterio, estructura y dirección.",
      description:
        "Cada entrada está pensada para quienes valoran profundidad sobre volumen, sistemas sobre entusiasmo y forma sobre ruido.",
      browser: {
        searchAndFilter: "Buscar y filtrar",
        searchPlaceholder: "Buscar por idea, tema o concepto",
        allCategoriesLabel: "Todas",
        entrySingular: "entrada",
        entryPlural: "entradas",
        updatingResults: "Actualizando resultados...",
        featuredEntry: "Entrada destacada",
        readFull: "Leer completa",
        noResults: "No hay resultados para esa búsqueda.",
        previous: "Anterior",
        next: "Siguiente",
        page: "Página",
        of: "de",
        readEntry: "Leer entrada",
      },
      article: {
        backToJournal: "Volver al journal",
        keepReading: "Seguir leyendo",
        relatedTitle: "Más ideas para fortalecer criterio y estructura.",
      },
    },
  },
  en: {
    metadata: {
      description:
        "Personal website of Augusto Valmont, an entrepreneur, engineer and builder focused on companies, systems and long-term execution.",
      tagline:
        "Entrepreneur, engineer and builder focused on creating companies, systems and a life of intentional growth.",
      keywords: [
        "Augusto Valmont",
        "entrepreneur",
        "engineer",
        "builder",
        "systems",
        "software",
        "automation",
        "personal brand",
      ],
    },
    navigation: {
      items: [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
      ],
      ctaLabel: "Get In Touch",
      languageLabel: "Change language",
      openMenuLabel: "Open navigation",
      closeMenuLabel: "Close navigation",
    },
    socialLabels: {
      github: "GitHub",
      email: "Email",
    },
    footer: {
      description:
        "A personal headquarters for building companies, systems, technology and a meaningful life through execution.",
    },
    home: {
      metadataTitle: "Start",
      metadataDescription:
        "Who Augusto Valmont is, what he is building and why his journey as an entrepreneur, engineer and builder is worth following.",
      kicker: "Personal brand website",
      heroTitle: "Augusto Valmont",
      heroDescription:
        "Entrepreneur, engineer and builder focused on creating companies, systems and a life of intentional growth.",
      primaryCta: "Explore My Work",
      secondaryCta: "About Me",
      currentlyBuilding: "Currently building",
      whatIDoEyebrow: "What I Do",
      whatIDoTitle: "I build across companies, systems and personal growth.",
      whatIDoDescription:
        "The goal is simple: create useful things, operate them well and keep becoming more capable as the work gets bigger.",
      currentProjectsEyebrow: "Current Projects",
      currentProjectsTitle: "These are the projects I’m actively building right now.",
      currentProjectsDescription:
        "Each one reflects a different part of how I work: software, operations and building strong systems.",
      viewDetails: "View details",
      aboutEyebrow: "About Augusto",
      aboutTitle:
        "I build businesses, tools and capabilities around the same idea: long-term focus, clarity and execution.",
      aboutLink: "Learn more about me",
      principlesEyebrow: "My Principles",
      principlesTitle: "A few short principles shape how I work, decide and build.",
      visionEyebrow: "Vision",
      finalCtaEyebrow: "Final CTA",
      finalCtaTitle: "The journey is just beginning.",
      finalCtaDescription:
        "If you want to follow the journey, collaborate or talk about building something meaningful, let’s connect.",
      finalCtaButton: "Let’s Connect",
      whatIDo: [
        {
          title: "Build Companies",
          description:
            "Creating businesses that solve real problems and generate long-term value through clear execution.",
        },
        {
          title: "Build Systems",
          description:
            "Designing frameworks, workflows and technology that help operations scale with clarity and consistency.",
        },
        {
          title: "Build Myself",
          description:
            "Constantly improving physically, mentally and professionally to support bigger goals with real capability.",
        },
      ],
      aboutParagraphs: [
        "I’m a builder. I’m interested in business, engineering, systems and the challenge of creating a life that can support meaningful ambition.",
        "I’m not trying to sound philosophical or motivational. I’m trying to build real things: companies, tools, processes and skills that compound over time.",
      ],
      principles: ["Discipline", "Execution", "Ownership", "Excellence", "Continuous Growth"],
      vision: {
        title:
          "I’m building a life and a set of ventures around freedom, creation, technology, impact and legacy.",
        body: [
          "My long-term vision is to create companies, systems and tools that give me more freedom to build while also creating real value for other people.",
          "I want technology, discipline, ambition and execution to point in the same direction. I’m not only interested in growth. I’m interested in building something durable and meaningful.",
        ],
      },
    },
    projects: {
      metadataTitle: "Projects",
      metadataDescription:
        "The projects, companies and systems Augusto Valmont is actively building.",
      eyebrow: "Projects",
      title: "A look at the projects and systems I’m currently building.",
      description:
        "Each project is part of a larger journey around technology, execution, freedom and long-term value creation.",
      missionLabel: "Mission",
      technologyLabel: "Technology",
      items: [
        {
          title: "WebForge",
          category: "Software & Automation",
          status: "Active",
          description:
            "Software, automation and digital infrastructure built to turn ideas into smarter and more scalable operations.",
          mission:
            "Build practical tools and systems that simplify execution and create leverage for modern digital businesses.",
          technology: sharedTechnology.webforge,
        },
        {
          title: "NovaTV",
          category: "Media Operations",
          status: "Growing",
          description:
            "Television and streaming operations designed around reliability, structure and strong technical execution.",
          mission:
            "Create better operating systems for content distribution, production and long-term media infrastructure.",
          technology: sharedTechnology.novatv,
        },
      ],
    },
    about: {
      metadataTitle: "About Me",
      metadataDescription:
        "Who I am, what I’m building and the long-term vision behind my work.",
      eyebrow: "About",
      title:
        "This site exists to explain clearly who I am, what I’m building and why it matters to me.",
      description:
        "I want people to understand the person behind the projects, the values behind the work and the long-term direction behind everything I’m building.",
      sections: [
        {
          label: "Who I Am",
          paragraphs: [
            "I’m an entrepreneur, engineer and systems thinker. I enjoy building from scratch, solving hard problems and turning ideas into something tangible.",
            "I’m drawn to projects that mix technology, operations, strategy and personal growth. For me, building is not only work. It’s how I think and how I live.",
          ],
        },
        {
          label: "My Story",
          paragraphs: [
            "Over time I realized that what motivates me most is not having ideas, but executing them well. I care about learning fast, building with clarity and becoming capable enough to carry bigger things.",
            "That’s why my path sits at the intersection of business, software, systems and self-development. Everything I do reinforces the same goal: becoming someone who can build more, better and for the long term.",
          ],
        },
        {
          label: "What I Believe",
          paragraphs: [
            "I believe discipline is a competitive advantage. I believe execution matters more than noise. And I believe clarity, ownership and consistency are what separate builders from people who only want the image of building.",
          ],
        },
        {
          label: "What I’m Building",
          paragraphs: [
            "Right now I’m building across software, operations, automation and AI. At the same time, I’m building the skills, systems and personal foundation required to do bigger work over the next decade.",
          ],
        },
      ],
      visionLabel: "My Long-Term Vision",
    },
    contact: {
      metadataTitle: "Contact",
      metadataDescription:
        "Contact details and ways to reach Augusto Valmont about projects, systems and new opportunities.",
      eyebrow: "Contact",
      title: "The best way to connect is to start a clear conversation.",
      intro:
        "If you want to talk about software, systems, business, automation or an opportunity to build something meaningful, reach out.",
      availability: "Currently open to strategic conversations, collaborations and new opportunities.",
      detailsLabel: "Details",
      socialLinksLabel: "Social Links",
      formLabel: "Contact Form",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me what you’re building or why you’d like to connect.",
      submitLabel: "Send Message",
      helperText: "This form opens your email client with the message ready to send.",
    },
    journal: {
      metadataTitle: "Journal",
      metadataDescription:
        "Articles about systems, execution, identity, strength and deliberate growth.",
      eyebrow: "Journal",
      title: "An editorial space for ideas that strengthen judgment, structure and direction.",
      description:
        "Each entry is for people who value depth over volume, systems over hype and form over noise.",
      browser: {
        searchAndFilter: "Search and filter",
        searchPlaceholder: "Search by idea, topic or concept",
        allCategoriesLabel: "All",
        entrySingular: "entry",
        entryPlural: "entries",
        updatingResults: "Updating results...",
        featuredEntry: "Featured entry",
        readFull: "Read full entry",
        noResults: "No results matched your search.",
        previous: "Previous",
        next: "Next",
        page: "Page",
        of: "of",
        readEntry: "Read entry",
      },
      article: {
        backToJournal: "Back to journal",
        keepReading: "Keep reading",
        relatedTitle: "More ideas for strengthening judgment and structure.",
      },
    },
  },
  it: {
    metadata: {
      description:
        "Sito personale di Augusto Valmont, imprenditore, ingegnere e builder focalizzato su aziende, sistemi ed esecuzione di lungo periodo.",
      tagline:
        "Imprenditore, ingegnere e builder focalizzato sulla creazione di aziende, sistemi e una vita di crescita intenzionale.",
      keywords: [
        "Augusto Valmont",
        "imprenditore",
        "ingegnere",
        "builder",
        "sistemi",
        "software",
        "automazione",
        "personal brand",
      ],
    },
    navigation: {
      items: [
        { href: "/", label: "Home" },
        { href: "/about", label: "Chi sono" },
        { href: "/projects", label: "Progetti" },
        { href: "/contact", label: "Contatto" },
      ],
      ctaLabel: "Parliamone",
      languageLabel: "Cambia lingua",
      openMenuLabel: "Apri navigazione",
      closeMenuLabel: "Chiudi navigazione",
    },
    socialLabels: {
      github: "GitHub",
      email: "Email",
    },
    footer: {
      description:
        "Uno spazio personale per costruire aziende, sistemi, tecnologia e una vita significativa attraverso l’esecuzione.",
    },
    home: {
      metadataTitle: "Start",
      metadataDescription:
        "Chi è Augusto Valmont, cosa sta costruendo e perché vale la pena seguire il suo percorso come imprenditore, ingegnere e builder.",
      kicker: "Sito di personal brand",
      heroTitle: "Augusto Valmont",
      heroDescription:
        "Imprenditore, ingegnere e builder focalizzato sulla creazione di aziende, sistemi e una vita di crescita intenzionale.",
      primaryCta: "Esplora il mio lavoro",
      secondaryCta: "Chi sono",
      currentlyBuilding: "Sto costruendo",
      whatIDoEyebrow: "Cosa faccio",
      whatIDoTitle: "Costruisco tra aziende, sistemi e crescita personale.",
      whatIDoDescription:
        "L’obiettivo è semplice: creare cose utili, gestirle bene e continuare a crescere mentre il lavoro diventa più grande.",
      currentProjectsEyebrow: "Progetti attuali",
      currentProjectsTitle: "Questi sono i progetti che sto costruendo attivamente in questo momento.",
      currentProjectsDescription:
        "Ognuno riflette una parte diversa del mio modo di lavorare: software, operazioni e costruzione di sistemi solidi.",
      viewDetails: "Vedi dettagli",
      aboutEyebrow: "Su Augusto",
      aboutTitle:
        "Costruisco business, strumenti e capacità attorno alla stessa idea: visione di lungo periodo, chiarezza ed esecuzione.",
      aboutLink: "Scopri di più su di me",
      principlesEyebrow: "I miei principi",
      principlesTitle: "Poche idee chiare guidano il mio modo di lavorare, decidere e costruire.",
      visionEyebrow: "Visione",
      finalCtaEyebrow: "Passo successivo",
      finalCtaTitle: "Il percorso è appena iniziato.",
      finalCtaDescription:
        "Se vuoi seguire il percorso, collaborare o parlare di qualcosa di importante da costruire, restiamo in contatto.",
      finalCtaButton: "Connettiamoci",
      whatIDo: [
        {
          title: "Costruisco aziende",
          description:
            "Creo business che risolvono problemi reali e generano valore nel lungo periodo grazie a un’esecuzione chiara.",
        },
        {
          title: "Costruisco sistemi",
          description:
            "Progetto framework, processi e tecnologia che aiutano le operazioni a scalare con chiarezza e coerenza.",
        },
        {
          title: "Costruisco me stesso",
          description:
            "Miglioro costantemente sul piano fisico, mentale e professionale per sostenere obiettivi sempre più grandi con capacità reale.",
        },
      ],
      aboutParagraphs: [
        "Sono un builder. Mi interessano il business, l’ingegneria, i sistemi e la sfida di creare una vita capace di sostenere ambizioni significative.",
        "Non sto cercando di sembrare filosofico o motivazionale. Sto cercando di costruire cose reali: aziende, strumenti, processi e competenze che si accumulano nel tempo.",
      ],
      principles: ["Disciplina", "Esecuzione", "Responsabilità", "Eccellenza", "Crescita continua"],
      vision: {
        title:
          "Sto costruendo una vita e un insieme di progetti attorno a libertà, creazione, tecnologia, impatto ed eredità.",
        body: [
          "La mia visione di lungo periodo è creare aziende, sistemi e strumenti che mi diano più libertà di costruire e allo stesso tempo producano valore reale per altre persone.",
          "Voglio che tecnologia, disciplina, ambizione ed esecuzione puntino nella stessa direzione. Non mi interessa solo crescere. Mi interessa costruire qualcosa di duraturo e significativo.",
        ],
      },
    },
    projects: {
      metadataTitle: "Projects",
      metadataDescription:
        "I progetti, le aziende e i sistemi che Augusto Valmont sta costruendo attivamente.",
      eyebrow: "Progetti",
      title: "Uno sguardo ai progetti e ai sistemi che sto costruendo oggi.",
      description:
        "Ogni progetto fa parte di un percorso più ampio attorno a tecnologia, esecuzione, libertà e creazione di valore nel lungo periodo.",
      missionLabel: "Missione",
      technologyLabel: "Tecnologia",
      items: [
        {
          title: "WebForge",
          category: "Software e automazione",
          status: "Attivo",
          description:
            "Software, automazione e infrastruttura digitale pensati per trasformare idee in operazioni più intelligenti e scalabili.",
          mission:
            "Costruire strumenti e sistemi pratici che semplifichino l’esecuzione e creino leva per i business digitali moderni.",
          technology: sharedTechnology.webforge,
        },
        {
          title: "NovaTV",
          category: "Operazioni media",
          status: "In crescita",
          description:
            "Operazioni televisive e streaming progettate intorno ad affidabilità, struttura ed esecuzione tecnica solida.",
          mission:
            "Creare sistemi operativi migliori per distribuzione, produzione e infrastruttura media di lungo periodo.",
          technology: sharedTechnology.novatv,
        },
      ],
    },
    about: {
      metadataTitle: "About Me",
      metadataDescription:
        "Chi sono, cosa sto costruendo e quale visione di lungo periodo sostiene il mio lavoro.",
      eyebrow: "Chi sono",
      title:
        "Questo sito esiste per spiegare con chiarezza chi sono, cosa sto costruendo e perché per me conta davvero.",
      description:
        "Voglio che chi arriva qui capisca la persona dietro i progetti, i valori dietro il lavoro e la direzione di lungo periodo dietro tutto ciò che sto costruendo.",
      sections: [
        {
          label: "Chi sono",
          paragraphs: [
            "Sono un imprenditore, ingegnere e systems thinker. Mi piace costruire da zero, risolvere problemi complessi e trasformare le idee in qualcosa di tangibile.",
            "Sono attratto dai progetti che combinano tecnologia, operazioni, strategia e crescita personale. Per me costruire non è solo lavoro: è un modo di pensare e di vivere.",
          ],
        },
        {
          label: "La mia storia",
          paragraphs: [
            "Col tempo ho capito che ciò che mi motiva di più non è avere idee, ma eseguirle bene. Mi interessa imparare in fretta, costruire con chiarezza e diventare capace di sostenere cose sempre più grandi.",
            "Per questo il mio percorso si muove tra business, software, sistemi e crescita personale. Tutto rafforza lo stesso obiettivo: diventare qualcuno capace di costruire di più, meglio e per il lungo termine.",
          ],
        },
        {
          label: "In cosa credo",
          paragraphs: [
            "Credo che la disciplina sia un vantaggio competitivo. Credo che l’esecuzione conti più del rumore. E credo che chiarezza, responsabilità e costanza separino chi costruisce da chi vuole solo l’immagine del costruire.",
          ],
        },
        {
          label: "Cosa sto costruendo",
          paragraphs: [
            "Oggi sto costruendo tra software, operazioni, automazione e intelligenza artificiale. Allo stesso tempo sto costruendo anche competenze, sistemi e fondamenta personali per fare lavoro più grande nel prossimo decennio.",
          ],
        },
      ],
      visionLabel: "La mia visione di lungo periodo",
    },
    contact: {
      metadataTitle: "Contatto",
      metadataDescription:
        "Dettagli di contatto e modi per parlare con Augusto Valmont di progetti, sistemi e nuove opportunità.",
      eyebrow: "Contatto",
      title: "Il modo migliore per connettersi è iniziare una conversazione chiara.",
      intro:
        "Se vuoi parlare di software, sistemi, business, automazione o di un’opportunità per costruire qualcosa di significativo, scrivimi.",
      availability: "Attualmente sono aperto a conversazioni strategiche, collaborazioni e nuove opportunità.",
      detailsLabel: "Dettagli",
      socialLinksLabel: "Link social",
      formLabel: "Modulo di contatto",
      nameLabel: "Nome",
      namePlaceholder: "Il tuo nome",
      emailLabel: "Email",
      emailPlaceholder: "tu@email.com",
      messageLabel: "Messaggio",
      messagePlaceholder: "Raccontami cosa stai costruendo o perché ti piacerebbe entrare in contatto.",
      submitLabel: "Invia messaggio",
      helperText: "Questo modulo apre il tuo client email con il messaggio pronto da inviare.",
    },
    journal: {
      metadataTitle: "Journal",
      metadataDescription:
        "Articoli su sistemi, esecuzione, identità, forza e crescita deliberata.",
      eyebrow: "Journal",
      title: "Uno spazio editoriale per idee che rafforzano giudizio, struttura e direzione.",
      description:
        "Ogni testo è pensato per chi valorizza profondità più del volume, sistemi più dell’entusiasmo e forma più del rumore.",
      browser: {
        searchAndFilter: "Cerca e filtra",
        searchPlaceholder: "Cerca per idea, tema o concetto",
        allCategoriesLabel: "Tutte",
        entrySingular: "articolo",
        entryPlural: "articoli",
        updatingResults: "Aggiornamento risultati...",
        featuredEntry: "Articolo in evidenza",
        readFull: "Leggi completo",
        noResults: "Nessun risultato per questa ricerca.",
        previous: "Precedente",
        next: "Successivo",
        page: "Pagina",
        of: "di",
        readEntry: "Leggi articolo",
      },
      article: {
        backToJournal: "Torna al journal",
        keepReading: "Continua a leggere",
        relatedTitle: "Altre idee per rafforzare giudizio e struttura.",
      },
    },
  },
  fr: {
    metadata: {
      description:
        "Site personnel d’Augusto Valmont, entrepreneur, ingénieur et builder centré sur les entreprises, les systèmes et l’exécution à long terme.",
      tagline:
        "Entrepreneur, ingénieur et builder focalisé sur la création d’entreprises, de systèmes et d’une vie de croissance intentionnelle.",
      keywords: [
        "Augusto Valmont",
        "entrepreneur",
        "ingénieur",
        "builder",
        "systèmes",
        "logiciel",
        "automatisation",
        "marque personnelle",
      ],
    },
    navigation: {
      items: [
        { href: "/", label: "Accueil" },
        { href: "/about", label: "À propos" },
        { href: "/projects", label: "Projets" },
        { href: "/contact", label: "Contact" },
      ],
      ctaLabel: "Parlons-en",
      languageLabel: "Changer de langue",
      openMenuLabel: "Ouvrir la navigation",
      closeMenuLabel: "Fermer la navigation",
    },
    socialLabels: {
      github: "GitHub",
      email: "Email",
    },
    footer: {
      description:
        "Un espace personnel pour construire des entreprises, des systèmes, de la technologie et une vie porteuse de sens grâce à l’exécution.",
    },
    home: {
      metadataTitle: "Start",
      metadataDescription:
        "Qui est Augusto Valmont, ce qu’il construit et pourquoi suivre son parcours d’entrepreneur, d’ingénieur et de builder.",
      kicker: "Site de marque personnelle",
      heroTitle: "Augusto Valmont",
      heroDescription:
        "Entrepreneur, ingénieur et builder focalisé sur la création d’entreprises, de systèmes et d’une vie de croissance intentionnelle.",
      primaryCta: "Explorer mon travail",
      secondaryCta: "À propos de moi",
      currentlyBuilding: "En construction",
      whatIDoEyebrow: "Ce que je fais",
      whatIDoTitle: "Je construis à l’intersection des entreprises, des systèmes et de la croissance personnelle.",
      whatIDoDescription:
        "L’objectif est simple : créer des choses utiles, bien les opérer et continuer à grandir à mesure que le travail devient plus ambitieux.",
      currentProjectsEyebrow: "Projets actuels",
      currentProjectsTitle: "Voici les projets que je construis activement en ce moment.",
      currentProjectsDescription:
        "Chacun reflète une facette différente de ma manière de travailler : logiciel, opérations et construction de systèmes solides.",
      viewDetails: "Voir le détail",
      aboutEyebrow: "À propos d’Augusto",
      aboutTitle:
        "Je construis des entreprises, des outils et des capacités autour d’une même idée : vision long terme, clarté et exécution.",
      aboutLink: "En savoir plus sur moi",
      principlesEyebrow: "Mes principes",
      principlesTitle: "Quelques idées simples structurent ma manière de travailler, décider et construire.",
      visionEyebrow: "Vision",
      finalCtaEyebrow: "Étape suivante",
      finalCtaTitle: "Le parcours ne fait que commencer.",
      finalCtaDescription:
        "Si vous voulez suivre le chemin, collaborer ou parler de quelque chose d’important à construire, restons en contact.",
      finalCtaButton: "Connectons-nous",
      whatIDo: [
        {
          title: "Je construis des entreprises",
          description:
            "Je développe des business qui résolvent de vrais problèmes et créent de la valeur sur le long terme grâce à une exécution claire.",
        },
        {
          title: "Je construis des systèmes",
          description:
            "Je conçois des cadres, des processus et de la technologie qui aident les opérations à scaler avec clarté et constance.",
        },
        {
          title: "Je me construis moi-même",
          description:
            "Je progresse en continu sur le plan physique, mental et professionnel pour soutenir des objectifs plus grands avec une vraie capacité.",
        },
      ],
      aboutParagraphs: [
        "Je suis un builder. Je m’intéresse au business, à l’ingénierie, aux systèmes et au défi de construire une vie capable de soutenir une ambition réelle.",
        "Je n’essaie pas d’avoir l’air philosophique ou motivant. J’essaie de construire des choses réelles : des entreprises, des outils, des processus et des compétences qui se cumulent avec le temps.",
      ],
      principles: ["Discipline", "Exécution", "Responsabilité", "Excellence", "Croissance continue"],
      vision: {
        title:
          "Je construis une vie et un ensemble de projets autour de la liberté, de la création, de la technologie, de l’impact et de l’héritage.",
        body: [
          "Ma vision à long terme est de créer des entreprises, des systèmes et des outils qui me donnent plus de liberté pour construire tout en créant une vraie valeur pour d’autres personnes.",
          "Je veux que la technologie, la discipline, l’ambition et l’exécution avancent dans la même direction. Je ne cherche pas seulement à grandir. Je cherche à construire quelque chose de durable et de significatif.",
        ],
      },
    },
    projects: {
      metadataTitle: "Projects",
      metadataDescription:
        "Les projets, entreprises et systèmes qu’Augusto Valmont construit activement.",
      eyebrow: "Projets",
      title: "Un aperçu des projets et des systèmes que je construis actuellement.",
      description:
        "Chaque projet fait partie d’un chemin plus large autour de la technologie, de l’exécution, de la liberté et de la création de valeur à long terme.",
      missionLabel: "Mission",
      technologyLabel: "Technologie",
      items: [
        {
          title: "WebForge",
          category: "Logiciel et automatisation",
          status: "Actif",
          description:
            "Logiciel, automatisation et infrastructure digitale conçus pour transformer des idées en opérations plus intelligentes et plus scalables.",
          mission:
            "Construire des outils et des systèmes pratiques qui simplifient l’exécution et créent du levier pour les entreprises digitales modernes.",
          technology: sharedTechnology.webforge,
        },
        {
          title: "NovaTV",
          category: "Opérations média",
          status: "En croissance",
          description:
            "Des opérations TV et streaming conçues autour de la fiabilité, de la structure et d’une exécution technique solide.",
          mission:
            "Créer de meilleurs systèmes opérationnels pour la distribution, la production et l’infrastructure média de long terme.",
          technology: sharedTechnology.novatv,
        },
      ],
    },
    about: {
      metadataTitle: "About Me",
      metadataDescription:
        "Qui je suis, ce que je construis et la vision long terme derrière mon travail.",
      eyebrow: "À propos",
      title:
        "Ce site existe pour expliquer clairement qui je suis, ce que je construis et pourquoi cela compte pour moi.",
      description:
        "Je veux que les personnes qui arrivent ici comprennent la personne derrière les projets, les valeurs derrière le travail et la direction long terme derrière tout ce que je construis.",
      sections: [
        {
          label: "Qui je suis",
          paragraphs: [
            "Je suis entrepreneur, ingénieur et systems thinker. J’aime construire à partir de zéro, résoudre des problèmes complexes et transformer des idées en quelque chose de tangible.",
            "Je suis attiré par les projets qui mélangent technologie, opérations, stratégie et croissance personnelle. Pour moi, construire n’est pas seulement du travail : c’est une manière de penser et de vivre.",
          ],
        },
        {
          label: "Mon histoire",
          paragraphs: [
            "Avec le temps, j’ai compris que ce qui me motive le plus n’est pas d’avoir des idées, mais de bien les exécuter. J’aime apprendre vite, construire avec clarté et devenir capable de porter des choses plus grandes.",
            "C’est pour cela que mon parcours se situe à l’intersection du business, du software, des systèmes et du développement personnel. Tout renforce le même objectif : devenir quelqu’un capable de construire plus, mieux et sur le long terme.",
          ],
        },
        {
          label: "Ce en quoi je crois",
          paragraphs: [
            "Je crois que la discipline est un avantage compétitif. Je crois que l’exécution compte plus que le bruit. Et je crois que la clarté, la responsabilité et la constance séparent les builders de ceux qui veulent seulement l’image de la construction.",
          ],
        },
        {
          label: "Ce que je construis",
          paragraphs: [
            "En ce moment, je construis dans le software, les opérations, l’automatisation et l’intelligence artificielle. En parallèle, je construis aussi les compétences, les systèmes et la base personnelle nécessaires pour faire un travail plus grand dans la prochaine décennie.",
          ],
        },
      ],
      visionLabel: "Ma vision à long terme",
    },
    contact: {
      metadataTitle: "Contact",
      metadataDescription:
        "Coordonnées et moyens de contacter Augusto Valmont à propos de projets, systèmes et nouvelles opportunités.",
      eyebrow: "Contact",
      title: "La meilleure façon de se connecter est de démarrer une conversation claire.",
      intro:
        "Si vous voulez parler de software, de systèmes, de business, d’automatisation ou d’une opportunité de construire quelque chose d’important, écrivez-moi.",
      availability:
        "Je suis actuellement ouvert aux conversations stratégiques, collaborations et nouvelles opportunités.",
      detailsLabel: "Coordonnées",
      socialLinksLabel: "Liens sociaux",
      formLabel: "Formulaire de contact",
      nameLabel: "Nom",
      namePlaceholder: "Votre nom",
      emailLabel: "Email",
      emailPlaceholder: "votre@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Dites-moi ce que vous construisez ou pourquoi vous souhaitez me contacter.",
      submitLabel: "Envoyer le message",
      helperText: "Ce formulaire ouvre votre client email avec le message prêt à être envoyé.",
    },
    journal: {
      metadataTitle: "Journal",
      metadataDescription:
        "Articles sur les systèmes, l’exécution, l’identité, la force et la croissance délibérée.",
      eyebrow: "Journal",
      title: "Un espace éditorial pour des idées qui renforcent le jugement, la structure et la direction.",
      description:
        "Chaque texte est pensé pour celles et ceux qui privilégient la profondeur au volume, les systèmes à l’enthousiasme et la forme au bruit.",
      browser: {
        searchAndFilter: "Rechercher et filtrer",
        searchPlaceholder: "Rechercher par idée, sujet ou concept",
        allCategoriesLabel: "Toutes",
        entrySingular: "article",
        entryPlural: "articles",
        updatingResults: "Mise à jour des résultats...",
        featuredEntry: "Article mis en avant",
        readFull: "Lire l’article complet",
        noResults: "Aucun résultat pour cette recherche.",
        previous: "Précédent",
        next: "Suivant",
        page: "Page",
        of: "sur",
        readEntry: "Lire l’article",
      },
      article: {
        backToJournal: "Retour au journal",
        keepReading: "Continuer la lecture",
        relatedTitle: "D’autres idées pour renforcer le jugement et la structure.",
      },
    },
  },
};

export function getSiteContent(locale: Locale) {
  return siteContent[locale];
}