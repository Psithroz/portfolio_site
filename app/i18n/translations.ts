import type { Locale, Translations } from "./types";

export const translations: Record<Locale, Translations> = {
  fr: {
    metadata: {
      title: "Timotey LAMOTTE — Portfolio",
      description:
        "Portfolio de Timotey LAMOTTE — Étudiant en informatique, support technique et cybersécurité.",
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
      subtitle: "Étudiant — Recherche emploi été 2025",
      tagline:
        "Jeune étudiant motivé et expérimenté dans l'accueil et le service, je recherche un emploi pour l'été 2025 en vue de développer mes compétences.",
      profileTitle: "Profil",
      profileText:
        "Jeune étudiant motivé et expérimenté dans l'accueil et le service, avec une solide expérience en support informatique et une passion pour la cybersécurité et les réseaux.",
      skillsTitle: "Compétences clés",
      skillsText:
        "Support technique, administration réseau, développement Python/C++, certifications Azure et CCNA. Bilingue français-anglais avec expérience internationale au Canada.",
      educationTitle: "Formation",
      experienceTitle: "Expériences",
      certificatesTitle: "Certificats",
      skillsSectionTitle: "Compétences",
      footerRights: "Tous droits réservés.",
      emailAria: "Courriel",
      experience: [
        {
          title: "Technicien informatique",
          company: "La Bonne Heure",
          location: "Noves, France",
          period: "Juin 2024 – Juillet 2024",
          highlights: [
            "Géré un réseau de paiement informatique en assurant une disponibilité continue et optimale, contribuant à la fluidité des transactions lors d'événements de grande envergure.",
            "Assuré un support technique 24h/24, réduisant les temps d'arrêt de 50 % en intervenant rapidement sur les incidents critiques.",
            "Résolu des problèmes techniques en identifiant et corrigeant des anomalies, améliorant la satisfaction client et garantissant la continuité des opérations.",
          ],
        },
        {
          title: "Serveur",
          company: "Mecha Uma, Restaurant",
          location: "Avignon, France",
          period: "Juin 2023 – Juillet 2023",
          highlights: [
            "Gestion du stress et des périodes de forte affluence",
            "Service client rapide et efficace",
            "Coordination avec l'équipe en salle et en cuisine",
          ],
        },
        {
          title: "Ouvrier",
          company: "Sojufel, Usine",
          location: "St-Andiol, France",
          period: "Juin 2022 – Juillet 2022",
          highlights: [
            "Manipulation et entretien des machines de production",
            "Respect des normes de sécurité et des procédures",
            "Rigueur et productivité dans le travail répétitif",
          ],
        },
        {
          title: "Employé polyvalent",
          company: "Marjane, Restaurant",
          location: "Québec, Canada",
          period: "Janvier 2021 – Juin 2021",
          highlights: [
            "Accueil et conseil client personnalisé dans différentes langues",
            "Gestion des stocks et réapprovisionnement",
            "Adaptativité",
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
          name: "MOOC Sécurité Numérique de l'ANSSI",
          description: "MOOC de l'ANSSI",
        },
        {
          name: "Certification Microsoft : Azure fundamentals AZ-900",
          description:
            "Certification Microsoft attestant de connaissances fondamentales pour Microsoft Azure",
        },
        {
          name: "Certification Cisco CCNA",
          description:
            "Compétences fondamentales en réseaux : installation, configuration et dépannage des réseaux IP",
        },
      ],
      skills: [
        {
          category: "Systèmes & Logiciels",
          items:
            "Linux, Android et Windows | Suite Office | Windows Azure/Server",
        },
        {
          category: "Réseaux & Sécurité",
          items:
            "Bases en réseau (CCNA) | Connaissances en Active Directory | Passionné de cybersécurité",
        },
        {
          category: "Développement & Data",
          items:
            "Python, C++ | Bases en HTML, CSS et WordPress | Gestion de bases de données basique",
        },
        {
          category: "Langues",
          items:
            "Français (natif), Anglais (niveau C1, courant), Espagnol (B1)",
        },
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
      title: "Timotey LAMOTTE — Portfolio",
      description:
        "Portfolio of Timotey LAMOTTE — IT student, technical support and cybersecurity.",
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
      subtitle: "Student — Seeking summer 2025 job",
      tagline:
        "Motivated young student with experience in hospitality and customer service, seeking a summer 2025 job to develop my skills.",
      profileTitle: "Profile",
      profileText:
        "Motivated young student with experience in hospitality and customer service, solid IT support background, and a passion for cybersecurity and networking.",
      skillsTitle: "Key skills",
      skillsText:
        "Technical support, network administration, Python/C++ development, Azure and CCNA certifications. Bilingual French-English with international experience in Canada.",
      educationTitle: "Education",
      experienceTitle: "Experience",
      certificatesTitle: "Certificates",
      skillsSectionTitle: "Skills",
      footerRights: "All rights reserved.",
      emailAria: "Email",
      experience: [
        {
          title: "IT Technician",
          company: "La Bonne Heure",
          location: "Noves, France",
          period: "June 2024 – July 2024",
          highlights: [
            "Managed a payment network ensuring continuous optimal availability, contributing to smooth transactions during large-scale events.",
            "Provided 24/7 technical support, reducing downtime by 50% by quickly resolving critical incidents.",
            "Resolved technical issues by identifying and fixing anomalies, improving customer satisfaction and ensuring operational continuity.",
          ],
        },
        {
          title: "Waiter",
          company: "Mecha Uma, Restaurant",
          location: "Avignon, France",
          period: "June 2023 – July 2023",
          highlights: [
            "Managing stress during peak periods",
            "Fast and efficient customer service",
            "Coordination with front-of-house and kitchen teams",
          ],
        },
        {
          title: "Factory Worker",
          company: "Sojufel, Factory",
          location: "St-Andiol, France",
          period: "June 2022 – July 2022",
          highlights: [
            "Operating and maintaining production machinery",
            "Compliance with safety standards and procedures",
            "Rigor and productivity in repetitive work",
          ],
        },
        {
          title: "All-round Employee",
          company: "Marjane, Restaurant",
          location: "Quebec, Canada",
          period: "January 2021 – June 2021",
          highlights: [
            "Personalized customer welcome and advice in multiple languages",
            "Stock management and replenishment",
            "Adaptability",
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
          name: "ANSSI Digital Security MOOC",
          description: "ANSSI MOOC",
        },
        {
          name: "Microsoft Certified: Azure fundamentals AZ-900",
          description:
            "Microsoft certification demonstrating fundamental knowledge of Microsoft Azure",
        },
        {
          name: "Cisco CCNA Certification",
          description:
            "Fundamental networking skills: installation, configuration and troubleshooting of IP networks",
        },
      ],
      skills: [
        {
          category: "Systems & Software",
          items: "Linux, Android and Windows | Office Suite | Windows Azure/Server",
        },
        {
          category: "Networking & Security",
          items:
            "Networking basics (CCNA) | Active Directory knowledge | Cybersecurity enthusiast",
        },
        {
          category: "Development & Data",
          items:
            "Python, C++ | HTML, CSS and WordPress basics | Basic database management",
        },
        {
          category: "Languages",
          items:
            "French (native), English (C1, fluent), Spanish (B1)",
        },
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
