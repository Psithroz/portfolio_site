import type { Locale, Translations } from "./types";

export const translations: Record<Locale, Translations> = {
  fr: {
    metadata: {
      title: "Timotey LAMOTTE — Technicien Réseaux",
      description:
        "CV de Timotey LAMOTTE — Technicien Réseaux, administration réseau, sécurité et virtualisation.",
    },
    nav: {
      home: "Accueil",
      projects: "Projets",
      cyberNews: "Cybersécurité",
      objectives: "Objectifs",
      contact: "Contact",
      githubProfile: "Profil GitHub",
      toggleNav: "Ouvrir ou fermer la navigation",
      switchLanguage: "Changer de langue",
    },
    home: {
      subtitle: "Technicien Réseaux",
      tagline:
        "Passionné par les infrastructures réseau, je conçois, déploie et maintiens des environnements fiables, sécurisés et performants.",
      terminalPrompt: "network@timotey:~$ whoami",
      profileTitle: "Profil",
      profileText:
        "Technicien réseaux junior, je maîtrise la configuration de switches et routeurs, le dépannage Layer 2/3 et la sécurisation des infrastructures. Fort d'une expérience en support technique 24/7 et d'une appétence pour la cybersécurité, je recherche un poste pour contribuer à la disponibilité et à l'optimisation des réseaux d'entreprise.",
      downloadCv: "Télécharger le CV (PDF)",
      location: "Avignon, France",
      educationTitle: "Formation",
      experienceTitle: "Expériences",
      certificatesTitle: "Certifications",
      skillsSectionTitle: "Compétences techniques",
      languagesTitle: "Langues",
      footerRights: "Tous droits réservés.",
      emailAria: "Courriel",
      experience: [
        {
          title: "Technicien informatique & réseaux",
          company: "La Bonne Heure",
          location: "Noves, France",
          period: "Juin 2024 – Juillet 2024",
          highlights: [
            "Administré l'infrastructure réseau de paiement événementiel, garantissant une disponibilité continue et une bande passante optimisée lors d'événements à fort trafic.",
            "Diagnostiqué et résolu des incidents de connectivité Layer 1/2/3 en support 24h/24, réduisant les temps d'arrêt réseau de 50 %.",
            "Maintenu la documentation réseau (topologie, procédures de dépannage, configurations critiques) pour assurer la continuité opérationnelle.",
          ],
        },
        {
          title: "Serveur",
          company: "Mecha Uma, Restaurant",
          location: "Avignon, France",
          period: "Juin 2023 – Juillet 2023",
          highlights: [
            "Coordination d'équipe et gestion des flux en période de forte affluence",
            "Service client réactif dans un environnement à haute pression",
          ],
        },
        {
          title: "Ouvrier",
          company: "Sojufel, Usine",
          location: "St-Andiol, France",
          period: "Juin 2022 – Juillet 2022",
          highlights: [
            "Respect strict des procédures de sécurité et des normes industrielles",
            "Rigueur opérationnelle et fiabilité dans un environnement de production",
          ],
        },
        {
          title: "Employé polyvalent",
          company: "Marjane, Restaurant",
          location: "Québec, Canada",
          period: "Janvier 2021 – Juin 2021",
          highlights: [
            "Communication multilingue (français / anglais) avec une clientèle internationale",
            "Adaptabilité et autonomie dans un contexte interculturel",
          ],
        },
      ],
      education: [
        {
          school: "Lycée Philippe de Girard",
          location: "Avignon, France",
          diploma: "BAC Général — BAC S option sciences de l'ingénieur",
        },
      ],
      certificates: [
        {
          name: "Certification Cisco CCNA",
          description:
            "Routage & commutation, VLANs, OSPF, dépannage réseau IP — installation, configuration et maintenance d'infrastructures",
        },
        {
          name: "Certification Microsoft : Azure fundamentals AZ-900",
          description:
            "Fondamentaux cloud Azure — réseaux virtuels, connectivité hybride et services d'infrastructure",
        },
        {
          name: "MOOC Sécurité Numérique de l'ANSSI",
          description:
            "Bonnes pratiques de sécurité réseau, gestion des risques et protection des systèmes d'information",
        },
      ],
      networkSkills: [
        {
          categoryKey: "routing",
          category: "Routage & Commutation",
          skills: [
            "Cisco CCNA",
            "VLANs / Trunking",
            "OSPF / BGP",
            "STP / RSTP",
            "DHCP / DNS",
            "Inter-VLAN Routing",
          ],
        },
        {
          categoryKey: "security",
          category: "Sécurité réseau",
          skills: [
            "Firewalls",
            "VPN IPsec / SSL",
            "NAT / PAT",
            "ACLs",
            "Segmentation réseau",
            "Active Directory",
          ],
        },
        {
          categoryKey: "systems",
          category: "Systèmes & Virtualisation",
          skills: [
            "Windows Server",
            "Linux",
            "VMware",
            "Hyper-V",
            "Azure",
            "Gestion des services",
          ],
        },
        {
          categoryKey: "monitoring",
          category: "Supervision & Outils",
          skills: [
            "Wireshark",
            "Zabbix",
            "Nagios",
            "PRTG",
            "Documentation réseau",
            "Analyse de trafic",
          ],
        },
      ],
      languages: [
        "Français (natif)",
        "Anglais (C1 — courant)",
        "Espagnol (B1)",
      ],
    },
    contact: {
      title: "Contact",
      subtitle:
        "Un projet en tête, une opportunité à discuter ou simplement envie de dire bonjour ? Laissez-moi un message, je vous répondrai rapidement.",
      infoTitle: "Coordonnées",
      email: "E-mail",
      location: "Localisation",
      linkedin: "LinkedIn",
      asyncNote:
        "Vous préférez la communication asynchrone ? N'hésitez pas à envoyer des liens, des croquis ou des idées en vrac. J'aime collaborer dès les premières étapes d'un projet.",
      formTitle: "Travaillons ensemble",
      name: "Nom",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "votrenom@exemple.com",
      subject: "Objet",
      subjectPlaceholder: "Idée de projet, collaboration ou question",
      message: "Message",
      messagePlaceholder: "Comment puis-je vous aider ?",
      submit: "Envoyer le message",
      success:
        "Message envoyé ! Ceci est un message de confirmation provisoire en attendant l'intégration du formulaire.",
    },
    cyberNews: {
      title: "Veille Cybersécurité",
      subtitle:
        "Flux RSS en temps réel — sources françaises et anglaises, triées du plus récent au plus ancien.",
      tabs: {
        all: "Tous",
        french: "Flux français",
        english: "Flux anglais",
      },
      loading: "Chargement des flux RSS…",
      error:
        "Impossible de charger les flux RSS. Veuillez réessayer plus tard.",
      noArticles: "Aucun article disponible pour le moment.",
      readMore: "Lire l'article",
    },
    projects: {
      title: "Projets",
      subtitle:
        "Une sélection de réalisations et d'expérimentations. Remplacez les espaces réservés ci-dessous par vos vrais projets lorsque vous serez prêt.",
      addLink: "[Ajouter un lien]",
      viewProject: "Voir le projet",
      items: [
        {
          id: "p1",
          title: "[Nom du projet]",
          description:
            "[Brève description des fonctionnalités et des technologies utilisées. Mentionnez le problème résolu et ce qui rend le projet intéressant.]",
          tags: ["Next.js", "React", "Tailwind"],
          link: "#",
        },
        {
          id: "p2",
          title: "[Nom du projet]",
          description:
            "[Brève description des fonctionnalités et des technologies utilisées. Mentionnez le problème résolu et ce qui rend le projet intéressant.]",
          tags: ["IA", "TypeScript", "API"],
          link: "#",
        },
        {
          id: "p3",
          title: "[Nom du projet]",
          description:
            "[Brève description des fonctionnalités et des technologies utilisées. Mentionnez le problème résolu et ce qui rend le projet intéressant.]",
          tags: ["Design System", "UI", "Accessibilité"],
          link: "#",
        },
        {
          id: "p4",
          title: "[Nom du projet]",
          description:
            "[Brève description des fonctionnalités et des technologies utilisées. Mentionnez le problème résolu et ce qui rend le projet intéressant.]",
          tags: ["Full Stack", "Base de données", "Auth"],
          link: "#",
        },
      ],
    },
    objectives: {
      title: "Objectifs",
      subtitle:
        "Une feuille de route vivante de mes prochaines étapes — sur le plan technique, créatif et professionnel. Remplacez ces espaces réservés par les objectifs qui définissent votre propre trajectoire.",
      whyMatters: "Pourquoi c'est important pour moi",
      categories: {
        technical: "Objectifs techniques",
        project: "Objectifs projets",
        career: "Objectifs carrière",
      },
      statuses: {
        inProgress: "En cours",
        target2026: "Objectif 2026",
        mastered: "Acquis",
      },
      items: [
        {
          id: "tech-1",
          categoryKey: "technical",
          title: "[Titre de l'objectif]",
          statusKey: "inProgress",
          target: "[Date cible]",
          reason:
            "[Pourquoi c'est important pour moi — par ex. approfondir ma capacité à créer des expériences 3D immersives.]",
        },
        {
          id: "tech-2",
          categoryKey: "technical",
          title: "[Titre de l'objectif]",
          statusKey: "target2026",
          target: "[Date cible]",
          reason:
            "[Pourquoi c'est important pour moi — par ex. explorer de nouveaux langages système et la performance bas niveau.]",
        },
        {
          id: "project-1",
          categoryKey: "project",
          title: "[Titre de l'objectif]",
          statusKey: "inProgress",
          target: "[Date cible]",
          reason:
            "[Pourquoi c'est important pour moi — par ex. construire quelque chose de bout en bout qui apporte une vraie valeur.]",
        },
        {
          id: "project-2",
          categoryKey: "project",
          title: "[Titre de l'objectif]",
          statusKey: "target2026",
          target: "[Date cible]",
          reason:
            "[Pourquoi c'est important pour moi — par ex. contribuer à la communauté open source dont je dépends.]",
        },
        {
          id: "career-1",
          categoryKey: "career",
          title: "[Titre de l'objectif]",
          statusKey: "inProgress",
          target: "[Date cible]",
          reason:
            "[Pourquoi c'est important pour moi — par ex. évoluer vers un rôle où je peux piloter des fonctionnalités sur toute la stack.]",
        },
        {
          id: "career-2",
          categoryKey: "career",
          title: "[Titre de l'objectif]",
          statusKey: "mastered",
          target: "[Date cible]",
          reason:
            "[Pourquoi c'est important pour moi — par ex. collaborer avec des équipes diverses à travers différents fuseaux horaires.]",
        },
      ],
    },
  },
  en: {
    metadata: {
      title: "Timotey LAMOTTE — Network Technician",
      description:
        "Resume of Timotey LAMOTTE — Network Technician, CCNA certified, network administration, security and virtualization.",
    },
    nav: {
      home: "Home",
      projects: "Projects",
      cyberNews: "Cybersecurity",
      objectives: "Objectives",
      contact: "Contact",
      githubProfile: "GitHub Profile",
      toggleNav: "Toggle navigation",
      switchLanguage: "Switch language",
    },
    home: {
      subtitle: "Network Technician — CCNA Certified",
      tagline:
        "Passionate about network infrastructure, I design, deploy and maintain reliable, secure and high-performance environments.",
      terminalPrompt: "network@timotey:~$ whoami",
      profileTitle: "Profile",
      profileText:
        "Junior network technician with CCNA certification, skilled in configuring switches and routers, Layer 2/3 troubleshooting and infrastructure hardening. Backed by 24/7 technical support experience and a strong interest in cybersecurity, I am seeking a role to contribute to enterprise network availability and performance optimization.",
      downloadCv: "Download Resume (PDF)",
      location: "Avignon, France",
      educationTitle: "Education",
      experienceTitle: "Experience",
      certificatesTitle: "Certifications",
      skillsSectionTitle: "Technical Skills",
      languagesTitle: "Languages",
      footerRights: "All rights reserved.",
      emailAria: "Email",
      experience: [
        {
          title: "IT & Network Technician",
          company: "La Bonne Heure",
          location: "Noves, France",
          period: "June 2024 – July 2024",
          highlights: [
            "Administered event payment network infrastructure, ensuring continuous uptime and optimized bandwidth during high-traffic operations.",
            "Troubleshot Layer 1/2/3 connectivity issues with 24/7 on-call support, reducing network downtime by 50%.",
            "Maintained network infrastructure documentation (topology, troubleshooting procedures, critical configurations) to ensure operational continuity.",
          ],
        },
        {
          title: "Waiter",
          company: "Mecha Uma, Restaurant",
          location: "Avignon, France",
          period: "June 2023 – July 2023",
          highlights: [
            "Team coordination and workflow management during peak traffic periods",
            "Responsive customer service in a high-pressure environment",
          ],
        },
        {
          title: "Factory Worker",
          company: "Sojufel, Factory",
          location: "St-Andiol, France",
          period: "June 2022 – July 2022",
          highlights: [
            "Strict compliance with safety procedures and industrial standards",
            "Operational rigor and reliability in a production environment",
          ],
        },
        {
          title: "All-round Employee",
          company: "Marjane, Restaurant",
          location: "Quebec, Canada",
          period: "January 2021 – June 2021",
          highlights: [
            "Multilingual communication (French / English) with international customers",
            "Adaptability and autonomy in a cross-cultural context",
          ],
        },
      ],
      education: [
        {
          school: "Lycée Philippe de Girard",
          location: "Avignon, France",
          diploma:
            "General Baccalaureate — Science track with Engineering Sciences option",
        },
      ],
      certificates: [
        {
          name: "Cisco CCNA Certification",
          description:
            "Routing & switching, VLANs, OSPF, IP network troubleshooting — infrastructure installation, configuration and maintenance",
        },
        {
          name: "Microsoft Certified: Azure fundamentals AZ-900",
          description:
            "Azure cloud fundamentals — virtual networks, hybrid connectivity and infrastructure services",
        },
        {
          name: "ANSSI Digital Security MOOC",
          description:
            "Network security best practices, risk management and information systems protection",
        },
      ],
      networkSkills: [
        {
          categoryKey: "routing",
          category: "Routing & Switching",
          skills: [
            "Cisco CCNA",
            "VLANs / Trunking",
            "OSPF / BGP",
            "STP / RSTP",
            "DHCP / DNS",
            "Inter-VLAN Routing",
          ],
        },
        {
          categoryKey: "security",
          category: "Network Security",
          skills: [
            "Firewalls",
            "IPsec / SSL VPN",
            "NAT / PAT",
            "ACLs",
            "Network Segmentation",
            "Active Directory",
          ],
        },
        {
          categoryKey: "systems",
          category: "Systems & Virtualization",
          skills: [
            "Windows Server",
            "Linux",
            "VMware",
            "Hyper-V",
            "Azure",
            "Service Management",
          ],
        },
        {
          categoryKey: "monitoring",
          category: "Monitoring & Tools",
          skills: [
            "Wireshark",
            "Zabbix",
            "Nagios",
            "PRTG",
            "Network Documentation",
            "Traffic Analysis",
          ],
        },
      ],
      languages: [
        "French (native)",
        "English (C1 — fluent)",
        "Spanish (B1)",
      ],
    },
    contact: {
      title: "Contact",
      subtitle:
        "Have a project in mind, an opportunity to discuss, or just want to say hello? Drop a message and I'll get back to you quickly.",
      infoTitle: "Contact Info",
      email: "Email",
      location: "Location",
      linkedin: "LinkedIn",
      asyncNote:
        "Prefer async communication? Feel free to send links, sketches, or rough ideas. I enjoy collaborating early in the process.",
      formTitle: "Let's work together",
      name: "Name",
      namePlaceholder: "Your name",
      emailPlaceholder: "yourname@example.com",
      subject: "Subject",
      subjectPlaceholder: "Project idea, collaboration, or question",
      message: "Message",
      messagePlaceholder: "How can I help you?",
      submit: "Send Message",
      success:
        "Message sent! This is a preview confirmation message pending form integration.",
    },
    cyberNews: {
      title: "Cybersecurity Monitor",
      subtitle:
        "Real-time RSS feeds from French and English sources, sorted newest to oldest.",
      tabs: {
        all: "All",
        french: "French Feeds",
        english: "English Feeds",
      },
      loading: "Loading RSS feeds…",
      error: "Unable to load RSS feeds. Please try again later.",
      noArticles: "No articles available at the moment.",
      readMore: "Read article",
    },
    projects: {
      title: "Projects",
      subtitle:
        "A curated set of builds and experiments. Replace the placeholders below with your real work when ready.",
      addLink: "[Add link]",
      viewProject: "View Project",
      items: [
        {
          id: "p1",
          title: "[Project Name]",
          description:
            "[Brief description of the functionality and tech used. Mention the problem it solves and what makes it interesting.]",
          tags: ["Next.js", "React", "Tailwind"],
          link: "#",
        },
        {
          id: "p2",
          title: "[Project Name]",
          description:
            "[Brief description of the functionality and tech used. Mention the problem it solves and what makes it interesting.]",
          tags: ["AI", "TypeScript", "API"],
          link: "#",
        },
        {
          id: "p3",
          title: "[Project Name]",
          description:
            "[Brief description of the functionality and tech used. Mention the problem it solves and what makes it interesting.]",
          tags: ["Design System", "UI", "Accessibility"],
          link: "#",
        },
        {
          id: "p4",
          title: "[Project Name]",
          description:
            "[Brief description of the functionality and tech used. Mention the problem it solves and what makes it interesting.]",
          tags: ["Full Stack", "Database", "Auth"],
          link: "#",
        },
      ],
    },
    objectives: {
      title: "Objectives",
      subtitle:
        "A living roadmap of where I'm heading next — technically, creatively, and professionally. Replace these placeholders with the goals that define your own trajectory.",
      whyMatters: "Why this matters to me",
      categories: {
        technical: "Technical Goals",
        project: "Project Goals",
        career: "Career Goals",
      },
      statuses: {
        inProgress: "In Progress",
        target2026: "Target 2026",
        mastered: "Mastered",
      },
      items: [
        {
          id: "tech-1",
          categoryKey: "technical",
          title: "[Objective Title]",
          statusKey: "inProgress",
          target: "[Target Completion Date]",
          reason:
            "[Why this matters to me — e.g. deepening my ability to build immersive 3D experiences.]",
        },
        {
          id: "tech-2",
          categoryKey: "technical",
          title: "[Objective Title]",
          statusKey: "target2026",
          target: "[Target Completion Date]",
          reason:
            "[Why this matters to me — e.g. exploring new systems languages and low-level performance.]",
        },
        {
          id: "project-1",
          categoryKey: "project",
          title: "[Objective Title]",
          statusKey: "inProgress",
          target: "[Target Completion Date]",
          reason:
            "[Why this matters to me — e.g. building something end-to-end that delivers real value.]",
        },
        {
          id: "project-2",
          categoryKey: "project",
          title: "[Objective Title]",
          statusKey: "target2026",
          target: "[Target Completion Date]",
          reason:
            "[Why this matters to me — e.g. giving back to the open-source community I rely on.]",
        },
        {
          id: "career-1",
          categoryKey: "career",
          title: "[Objective Title]",
          statusKey: "inProgress",
          target: "[Target Completion Date]",
          reason:
            "[Why this matters to me — e.g. growing into a role where I can own features across the stack.]",
        },
        {
          id: "career-2",
          categoryKey: "career",
          title: "[Objective Title]",
          statusKey: "mastered",
          target: "[Target Completion Date]",
          reason:
            "[Why this matters to me — e.g. collaborating with diverse teams across time zones.]",
        },
      ],
    },
  },
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}
