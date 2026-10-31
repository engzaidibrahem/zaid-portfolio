export type Locale = "en" | "ar";

export type UiCopy = {
  nav: { work: string; stack: string; about: string; contact: string };
  hero: {
    availability: string;
    globeCaption: string;
    role: string;
    headline: string;
    subline: string;
    ctaWork: string;
    ctaContact: string;
    metricsLabel: string;
    metrics: { label: string; value: string }[];
  };
  work: {
    label: string;
    title: string;
    subtitle: string;
    caseStudy: string;
    live: string;
    github: string;
  };
  stack: { label: string; title: string; groups: { title: string; note: string }[] };
  about: { label: string; title: string; p1: string; p2: string; p3: string; footnote: string };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    email: string;
    whatsapp: string;
    github: string;
  };
  footer: { projects: string; rights: string };
  caseStudy: {
    back: string;
    overview: string;
    problem: string;
    solution: string;
    architecture: string;
    contribution: string;
    team: string;
    challenges: string;
    live: string;
    repo: string;
  };
  lang: { en: string; ar: string };
};

export const ui: Record<Locale, UiCopy> = {
  en: {
    nav: { work: "Work", stack: "Stack", about: "About", contact: "Contact" },
    hero: {
      availability: "Available for remote engineering work",
      globeCaption: "Indonesia · Saudi Arabia · UAE · Jordan · Remote worldwide",
      role: "Software Engineer · Full-Stack · Product Builder",
      headline: "I build backend systems and products that teams rely on in production.",
      subline:
        "Python, Django, FastAPI, PostgreSQL, APIs, and modern frontends—designed as one coherent system, not disconnected features.",
      ctaWork: "Explore projects",
      ctaContact: "Get in touch",
      metricsLabel: "At a glance",
      metrics: [
        { value: "6", label: "Production case studies" },
        { value: "API-first", label: "Architecture focus" },
        { value: "ID · Remote", label: "Based in Indonesia" },
      ],
    },
    work: {
      label: "Selected work",
      title: "Real software, documented honestly.",
      subtitle: "Compact previews—open a case study for architecture, contribution, and stack.",
      caseStudy: "Case study",
      live: "Live",
      github: "GitHub",
    },
    stack: {
      label: "Technical stack",
      title: "What I use to ship end-to-end.",
      groups: [
        { title: "Backend", note: "Services, auth, business logic" },
        { title: "Data & APIs", note: "PostgreSQL, Redis, REST" },
        { title: "Frontend", note: "React, Next.js, TypeScript" },
        { title: "Delivery", note: "Docker, Linux, Nginx, CI" },
      ],
    },
    about: {
      label: "About me",
      title: "Engineering with clarity and ownership.",
      p1: "I'm Zaid Ibrahem, a software engineer focused on backends, APIs, data layers, and the interfaces that make complex systems usable.",
      p2: "My work includes SaaS commerce, logistics platforms, school systems, and restaurant operations—projects where permissions, ledgers, and reliability matter every day.",
      p3: "I'm also the founder of SOFT STEP in Indonesia. Client delivery runs through the same engineering standards as my own products.",
      footnote: "Open to remote contracts and long-term product collaboration.",
    },
    contact: {
      label: "Contact",
      title: "Let's talk about your next system.",
      subtitle: "Backend, platform, or full product—remote-friendly.",
      email: "Email",
      whatsapp: "WhatsApp",
      github: "GitHub",
    },
    footer: { projects: "All projects", rights: "Built from architecture to deployment." },
    caseStudy: {
      back: "Back to work",
      overview: "Overview",
      problem: "Problem",
      solution: "Solution",
      architecture: "Architecture",
      contribution: "My contribution",
      team: "Team / client",
      challenges: "Challenges",
      live: "Live project",
      repo: "Repository",
    },
    lang: { en: "EN", ar: "AR" },
  },
  ar: {
    nav: { work: "الأعمال", stack: "التقنيات", about: "عني", contact: "تواصل" },
    hero: {
      availability: "متاح لمشاريع هندسية عن بُعد",
      globeCaption: "إندونيسيا · السعودية · الإمارات · الأردن · عن بُعد عالمياً",
      role: "مهندس برمجيات · تطوير شامل · بناء منتجات",
      headline: "أصمّم أنظمة خلفية ومنتجات رقمية تعمل بثبات في بيئة الإنتاج.",
      subline:
        "Python وDjango وFastAPI وPostgreSQL وواجهات برمجية وواجهات مستخدم حديثة—حل متكامل من البنية إلى التشغيل، لا ميزات مبعثرة.",
      ctaWork: "تصفّح المشاريع",
      ctaContact: "راسلني",
      metricsLabel: "لمحة سريعة",
      metrics: [
        { value: "٦", label: "مشاريع موثّقة في الإنتاج" },
        { value: "واجهات برمجية أولاً", label: "أسلوب البناء" },
        { value: "إندونيسيا · عن بُعد", label: "الموقع" },
      ],
    },
    work: {
      label: "أعمال مختارة",
      title: "مشاريع حقيقية، شرح واضح.",
      subtitle: "لمحة سريعة هنا—التفاصيل التقنية داخل دراسة الحالة.",
      caseStudy: "دراسة الحالة",
      live: "رابط مباشر",
      github: "المستودع",
    },
    stack: {
      label: "التقنيات",
      title: "أدواتي من الفكرة إلى الإطلاق.",
      groups: [
        { title: "الخلفية", note: "خدمات، صلاحيات، منطق العمل" },
        { title: "البيانات والواجهات البرمجية", note: "PostgreSQL، Redis، REST" },
        { title: "واجهة المستخدم", note: "React، Next.js، TypeScript" },
        { title: "التسليم", note: "Docker، Linux، Nginx، CI" },
      ],
    },
    about: {
      label: "عني",
      title: "هندسة واضحة ومسؤولية كاملة.",
      p1: "زيد إبراهيم—مهندس برمجيات أركّز على الأنظمة الخلفية، واجهات الربط، طبقات البيانات، والواجهات التي تبسّط التعقيد.",
      p2: "خبرتي تمتد إلى منصات تجارة، لوجستيات، إدارة مدارس، وتشغيل مطاعم—مجالات تعتمد على الصلاحيات، السجلات، والاستقرار اليومي.",
      p3: "أؤسّس أيضاً SOFT STEP في إندونيسيا. مشاريع العملاء تُبنى بنفس معايير جودة منتجاتي الخاصة.",
      footnote: "أستقبل عقوداً عن بُعد وتعاوناً طويل الأمد على المنتج.",
    },
    contact: {
      label: "تواصل",
      title: "لنناقش مشروعك القادم.",
      subtitle: "نظام خلفي، منصة، أو منتج كامل—العمل عن بُعد متاح.",
      email: "البريد الإلكتروني",
      whatsapp: "واتساب",
      github: "GitHub",
    },
    footer: { projects: "كل المشاريع", rights: "من الهندسة إلى الإنتاج." },
    caseStudy: {
      back: "العودة للأعمال",
      overview: "نظرة عامة",
      problem: "المشكلة",
      solution: "الحل",
      architecture: "الهندسة",
      contribution: "مساهمتي",
      team: "الفريق / العميل",
      challenges: "التحديات",
      live: "المشروع المباشر",
      repo: "المستودع",
    },
    lang: { en: "EN", ar: "AR" },
  },
};
