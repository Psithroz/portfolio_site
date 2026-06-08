export type Locale = "fr" | "en";

export type ObjectiveStatusKey = "inProgress" | "target2026" | "mastered";
export type ObjectiveCategoryKey = "technical" | "project" | "career";

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface EducationItem {
  school: string;
  location: string;
  diploma: string;
}

export interface CertificateItem {
  name: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  items: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface ObjectiveItem {
  id: string;
  categoryKey: ObjectiveCategoryKey;
  title: string;
  statusKey: ObjectiveStatusKey;
  target: string;
  reason: string;
}

export interface Translations {
  metadata: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    projects: string;
    objectives: string;
    contact: string;
    githubProfile: string;
    toggleNav: string;
    switchLanguage: string;
  };
  home: {
    subtitle: string;
    tagline: string;
    profileTitle: string;
    profileText: string;
    skillsTitle: string;
    skillsText: string;
    educationTitle: string;
    experienceTitle: string;
    certificatesTitle: string;
    skillsSectionTitle: string;
    footerRights: string;
    emailAria: string;
    experience: ExperienceItem[];
    education: EducationItem[];
    certificates: CertificateItem[];
    skills: SkillCategory[];
  };
  contact: {
    title: string;
    subtitle: string;
    infoTitle: string;
    email: string;
    location: string;
    linkedin: string;
    asyncNote: string;
    formTitle: string;
    name: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subject: string;
    subjectPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    success: string;
  };
  projects: {
    title: string;
    subtitle: string;
    addLink: string;
    viewProject: string;
    items: ProjectItem[];
  };
  objectives: {
    title: string;
    subtitle: string;
    whyMatters: string;
    categories: Record<ObjectiveCategoryKey, string>;
    statuses: Record<ObjectiveStatusKey, string>;
    items: ObjectiveItem[];
  };
}
