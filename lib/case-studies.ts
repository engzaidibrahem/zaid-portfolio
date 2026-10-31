import type { Locale } from "@/lib/i18n/ui";

export type ProjectLocaleCopy = {
  name: string;
  category: string;
  tagline: string;
  summary: string;
  capabilities: string[];
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  myContribution: string;
  teamContribution?: string;
  challenges: string;
};

export type CaseStudyRecord = {
  slug: string;
  number: string;
  image: string;
  imageAlt: string;
  imagePosition?: "top" | "center";
  liveUrl?: string;
  githubUrl?: string;
  stack: string[];
  featured: boolean;
  highlight?: boolean;
  en: ProjectLocaleCopy;
  ar: ProjectLocaleCopy;
};

export type CaseStudy = ProjectLocaleCopy & {
  slug: string;
  number: string;
  image: string;
  imageAlt: string;
  imagePosition?: "top" | "center";
  liveUrl?: string;
  githubUrl?: string;
  stack: string[];
  featured: boolean;
  highlight?: boolean;
};

export const caseStudyRecords: CaseStudyRecord[] = [
  {
    slug: "restaurant-inventory-dashboard",
    number: "01",
    image: "/projects/gia-warehouse-app.png",
    imageAlt: "GIA Warehouse — restaurant inventory mobile app",
    imagePosition: "top",
    githubUrl:
      "https://github.com/engzaidibrahem/restaurant-inventory-dashboard-portfolio",
    stack: [
      "PostgreSQL",
      "Role-based API",
      "Admin Web",
      "Android Mobile",
      "Bilingual UI",
    ],
    featured: true,
    highlight: true,
    en: {
      name: "Restaurant inventory & stock monitoring",
      category: "Operations platform",
      tagline: "Warehouse, kitchen, and daily reporting for real restaurants.",
      summary:
        "Bilingual (Arabic / Indonesian) operations software: warehouse ledger, kitchen stock, chef daily reports, and period consumption—mobile APK plus owner admin dashboard.",
      capabilities: [
        "Warehouse ledger",
        "Kitchen operations",
        "Daily chef reports",
        "Stocktake workflow",
        "Finance & payroll",
        "Multi-role access",
      ],
      overview:
        "A production restaurant control system that tracks materials from warehouse inbound through kitchen use, approvals, and period reporting. The public GitHub repo is a portfolio showcase; application source stays private.",
      problem:
        "Margin leaks when stock moves without a trail: receiving without a ledger, kitchen transfers without records, chef counts without approval, and finance that cannot reconcile consumption over time.",
      solution:
        "One movement ledger ties warehouse balance, kitchen stock, chef daily reports, and owner/manager approval—drafts never change stock silently; every adjustment stays auditable.",
      architecture:
        "Mobile APK and admin web talk to a central API with role-based auth and a PostgreSQL ledger. Production runs on managed hosting; implementation detail is private while scope and UX are documented on GitHub.",
      myContribution:
        "I built the full system end to end: product architecture, API and authentication, PostgreSQL ledger design, admin dashboard, Android warehouse/mobile flows, bilingual UX, and production deployment—using the technologies and scope described in the portfolio repository on GitHub.",
      challenges:
        "Strict roles (owner, manager, chef, warehouse) versus speed on the floor, and keeping ledger integrity while supporting draft stocktake and report workflows.",
    },
    ar: {
      name: "تطبيق جرد للمطعم و مراقبة المخزون",
      category: "منصة تشغيل",
      tagline: "مستودع، مطبخ، وتقارير يومية لمطعم حقيقي.",
      summary:
        "نظام تشغيل ثنائي اللغة (عربي / إندونيسي): سجل مستودع، مخزون مطبخ، تقارير الشيف اليومية، واستهلاك لفترة زمنية—تطبيق أندرويد ولوحة إدارة للمالك.",
      capabilities: [
        "سجل المستودع",
        "تشغيل المطبخ",
        "تقارير الشيف اليومية",
        "جرد بموافقات",
        "مالية ورواتب",
        "صلاحيات متعددة",
      ],
      overview:
        "نظام إنتاجي يربط دخول المواد إلى المستودع مروراً بالمطبخ والموافقات والتقارير الدورية. مستودع GitHub للعرض المهني فقط؛ الكود التطبيقي خاص.",
      problem:
        "خسائر التشغيل تبدأ عندما تتحرك المواد بلا أثر: استلام بلا سجل، تحويل للمطبخ بلا توثيق، عدّ الشيف بلا اعتماد، ومالية لا تستطيع مطابقة الاستهلاك.",
      solution:
        "سجل حركات واحد يربط رصيد المستودع ومخزون المطبخ وتقرير الشيف واعتماد المدير/المالك—المسودات لا تغيّر المخزون سراً، وكل تعديل قابل للتدقيق.",
      architecture:
        "تطبيق الجوال ولوحة الويب يتصلان بـ API مركزي مع صلاحيات حسب الدور وقاعدة PostgreSQL للسجل. التشغيل على استضافة managed؛ التفاصيل التقنية خاصة والنطاق موثّق على GitHub.",
      myContribution:
        "نفّذت المشروع بالكامل من البداية للنهاية: هندسة المنتج، الـ API والمصادقة، تصميم سجل PostgreSQL، لوحة الإدارة، مسارات مستودع/جوال على أندرويد، تجربة ثنائية اللغة، والنشر الإنتاجي—وفق التقنيات والنطاق المذكورين في مستودع العرض على GitHub.",
      challenges:
        "فصل صارم للأدوار (مالك، مدير، شيف، مستودع) مع سرعة العمل على الأرض، والحفاظ على سلامة السجل مع مسودات الجرد والتقارير.",
    },
  },
  {
    slug: "indoform",
    number: "02",
    image: "/projects/indoform.jpg",
    imageAlt: "IndoForm",
    liveUrl: "https://www.indoform.id/ar",
    githubUrl: "https://github.com/engzaidibrahem/IndoForm",
    stack: ["Django", "Django REST Framework", "PostgreSQL", "Docker"],
    featured: true,
    en: {
      name: "IndoForm",
      category: "Product / SaaS",
      tagline: "Commerce infrastructure for Indonesian merchants.",
      summary:
        "Merchants run digital storefronts, orders, and WhatsApp-based checkout on a real SaaS commerce platform.",
      capabilities: ["SaaS architecture", "Merchant dashboard", "E-commerce", "Payments", "WhatsApp"],
      overview: "SaaS commerce for Indonesian small businesses: storefronts, products, store links, orders, and local payment plus WhatsApp ordering.",
      problem: "Merchants need simple digital sales without heavy onboarding or high marketplace commissions.",
      solution: "Focused merchant product: storefront management, order flows, WhatsApp-native checkout.",
      architecture: "Django REST API, PostgreSQL, Dockerized services, UX tuned for Indonesian merchants.",
      myContribution: "End-to-end: backend, APIs, merchant workflows, production deployment.",
      challenges: "Simple flows for non-technical merchants while staying extensible for payments and messaging.",
    },
    ar: {
      name: "IndoForm",
      category: "منتج / SaaS",
      tagline: "بنية تجارة إلكترونية للتجار في إندونيسيا.",
      summary:
        "منصة SaaS حقيقية: متجر رقمي، طلبات، وإتمام شراء عبر واتساب للتجار الإندونيسيين.",
      capabilities: ["هندسة SaaS", "لوحة التاجر", "تجارة إلكترونية", "مدفوعات", "واتساب"],
      overview:
        "تجارة SaaS للمشاريع الصغيرة: متجر، منتجات، روابط، طلبات، ودفع محلي مع طلب عبر واتساب.",
      problem: "التاجر يحتاج بيعاً رقمياً بسيطاً دون تسجيل معقد أو عمولات مرتفعة.",
      solution: "منتج مركّز: إدارة المتجر، مسار الطلب، وإتمام الطلب عبر واتساب.",
      architecture: "Django REST وPostgreSQL وDocker، واجهة مناسبة للسوق الإندونيسي.",
      myContribution: "تسليم كامل: الخلفية، واجهات الربط، سير عمل التاجر، ونشر إنتاجي.",
      challenges: "البساطة للتاجر غير التقني مع إمكانية التوسع للمدفوعات والرسائل.",
    },
  },
  {
    slug: "valley-order",
    number: "03",
    image: "/projects/delivery.jpg",
    imageAlt: "Valley Order",
    liveUrl: "https://valley-order.com/#home",
    githubUrl: "https://github.com/engzaidibrahem/django-delivery-platform-api",
    stack: ["Django", "DRF", "Redis", "WebSockets", "Docker", "MySQL"],
    featured: false,
    en: {
      name: "Valley Order",
      category: "Backend / logistics",
      tagline: "Multi-vendor delivery and logistics.",
      summary: "Customers, vendors, and delivery ops connected through scalable APIs and real-time features.",
      capabilities: ["Multi-vendor APIs", "Real-time", "Geospatial logic", "Orders"],
      overview: "Logistics backend: auth, orders, delivery calculations, geographic operations.",
      problem: "Multi-sided delivery needs reliable APIs, vendor isolation, and live visibility.",
      solution: "Django platform with REST, Redis, WebSockets, and operational workflow logic.",
      architecture: "Service-oriented Django, Redis/WebSockets, MySQL, Docker deployment.",
      myContribution: "Backend architecture, APIs, auth, order/delivery logic, infrastructure.",
      challenges: "Geospatial logic, vendor workflows, and real-time updates with clear APIs.",
    },
    ar: {
      name: "Valley Order",
      category: "باكند / لوجستيات",
      tagline: "توصيل متعدد البائعين.",
      summary: "ربط العملاء والبائعين والعمليات عبر APIs قابلة للتوسع وميزات فورية.",
      capabilities: ["APIs متعددة البائعين", "فوري", "منطق جغرافي", "طلبات"],
      overview: "باكند لوجستي: مصادقة، طلبات، حسابات توصيل، عمليات جغرافية.",
      problem: "التوصيل متعدد الأطراف يحتاج APIs موثوقة وعزل بائعين ورؤية لحظية.",
      solution: "منصة Django مع REST وRedis وWebSockets ومنطق تشغيل حقيقي.",
      architecture: "Django، Redis/WebSockets، MySQL، نشر Docker.",
      myContribution: "هندسة الخلفية، واجهات الربط، المصادقة، منطق الطلب والتوصيل، والبنية التحتية.",
      challenges: "الحسابات الجغرافية ومسارات البائعين والتحديثات الفورية مع APIs واضحة.",
    },
  },
  {
    slug: "school-management",
    number: "04",
    image: "/projects/school.jpg",
    imageAlt: "School system",
    liveUrl: "https://integrated-school-management-system.vercel.app/login",
    githubUrl: "https://github.com/engzaidibrahem/Integrated-School-Management-System",
    stack: ["Django", "DRF", "PostgreSQL", "React"],
    featured: false,
    en: {
      name: "Integrated School Management System",
      category: "Business system",
      tagline: "One platform for the whole school ecosystem.",
      summary: "Administration, teachers, students, parents, and transport with role-based access.",
      capabilities: ["Multi-role", "RBAC", "Dashboards", "Workflows"],
      overview: "Unified school operations across roles and workflows.",
      problem: "Fragmented tools; schools need one system with clear permissions.",
      solution: "Multi-role platform for academic and operational workflows.",
      architecture: "Django REST, PostgreSQL, React dashboards per role.",
      myContribution: "Backend design, APIs, role modeling, React integration.",
      challenges: "Complex roles while keeping daily tasks fast for staff.",
    },
    ar: {
      name: "نظام إدارة مدرسة متكامل",
      category: "نظام أعمال",
      tagline: "منصة واحدة لمنظومة المدرسة.",
      summary: "إدارة، معلمون، طلاب، أولياء أمور، ونقل—مع صلاحيات واضحة لكل دور.",
      capabilities: ["أدوار متعددة", "صلاحيات", "لوحات", "سير عمل"],
      overview: "عمليات مدرسية موحّدة عبر الأدوار والمسارات.",
      problem: "أدوات متفرقة؛ المدرسة تحتاج نظاماً واحداً وصلاحيات واضحة.",
      solution: "منصة متعددة الأدوار للعمل الأكاديمي والتشغيلي.",
      architecture: "Django REST وPostgreSQL وReact لكل دور.",
      myContribution: "تصميم الخلفية، واجهات الربط، نمذجة الأدوار، وربط واجهة React.",
      challenges: "تعقيد الأدوار مع إبقاء مهام اليوم سريعة للطاقم.",
    },
  },
  {
    slug: "gia-maharani",
    number: "05",
    image: "/projects/gia.jpg",
    imageAlt: "Gia Maharani Group",
    liveUrl: "https://www.giamaharanigroup.com/",
    githubUrl: "https://github.com/engzaidibrahem/giamaharanigroup",
    stack: ["Next.js", "React", "Responsive design"],
    featured: false,
    en: {
      name: "Gia Maharani Group",
      category: "Client delivery · Indonesia",
      tagline: "Digital experience for a Bogor restaurant.",
      summary: "Multilingual site, digital menu, ordering flows, WhatsApp integration.",
      capabilities: ["Client delivery", "Multilingual", "Digital menu", "Production"],
      overview: "Customer-facing brand and ordering for a real Indonesian restaurant.",
      problem: "Modern channel matching brand quality and local ordering habits.",
      solution: "Next.js: menu, promotions, business info, WhatsApp-ready flows.",
      architecture: "Next.js frontend, mobile-first performance.",
      myContribution: "Full delivery: UX, frontend, content structure, deployment.",
      teamContribution: "Client provided brand direction and operational content.",
      challenges: "Multilingual audiences with simple mobile ordering paths.",
    },
    ar: {
      name: "Gia Maharani Group",
      category: "تسليم عميل · إندونيسيا",
      tagline: "تجربة رقمية لمطعم في Bogor.",
      summary: "موقع متعدد اللغات، قائمة رقمية، طلب، وتكامل واتساب.",
      capabilities: ["تسليم عميل", "لغات متعددة", "قائمة رقمية", "نشر إنتاجي"],
      overview: "واجهة زبائن وطلبات لمطعم إندونيسي حقيقي.",
      problem: "قناة حديثة تعكس الهوية وتناسب عادات الطلب المحلية.",
      solution: "Next.js: قائمة، عروض، معلومات، ومسارات واتساب.",
      architecture: "واجهة Next.js أولاً للجوال.",
      myContribution: "تسليم كامل: UX، واجهة، محتوى، ونشر.",
      teamContribution: "العميل زوّد الهوية والمحتوى التشغيلي.",
      challenges: "لغات متعددة مع مسار طلب بسيط على الجوال.",
    },
  },
  {
    slug: "gia-manager",
    number: "06",
    image: "/projects/manager-gia.jpg",
    imageAlt: "Gia manager",
    githubUrl: "https://github.com/engzaidibrahem/manager-gia",
    stack: ["TypeScript", "Node.js", "PostgreSQL", "Docker", "pnpm", "Nginx"],
    featured: false,
    en: {
      name: "Gia Shawarma Manager",
      category: "Client operations",
      tagline: "Back-office for restaurant staff and inventory.",
      summary: "Self-hostable monorepo: API, PostgreSQL dashboard, warehouse mobile.",
      capabilities: ["Operations dashboard", "Multi-role", "API", "Self-hosting"],
      overview: "Internal ops platform alongside the public Gia site.",
      problem: "Operations need controlled back-office tools separate from marketing.",
      solution: "TypeScript API and dashboard monorepo with Docker/Nginx self-host docs.",
      architecture: "pnpm workspace: API, web dashboard, warehouse mobile; PostgreSQL.",
      myContribution: "System design, API, dashboard, deployment docs, role integration.",
      challenges: "Reliable self-hosted monorepo with strict role permissions.",
    },
    ar: {
      name: "Gia Shawarma Manager",
      category: "تشغيل داخلي",
      tagline: "لوحة خلفية للطاقم والمخزون.",
      summary: "Monorepo للاستضافة الذاتية: API، لوحة PostgreSQL، جوال مستودع.",
      capabilities: ["لوحة تشغيل", "أدوار", "API", "استضافة ذاتية"],
      overview: "منصة تشغيل داخلية بجانب موقع Gia العام.",
      problem: "التشغيل يحتاج أدوات خلفية منفصلة عن التسويق.",
      solution: "Monorepo TypeScript مع API ولوحة وتوثيق Docker/Nginx.",
      architecture: "pnpm: API، لوحة، جوال مستودع؛ PostgreSQL.",
      myContribution: "تصميم النظام، API، اللوحة، توثيق النشر، وربط الأدوار.",
      challenges: "Monorepo مستضاف ذاتياً مع صلاحيات صارمة.",
    },
  },
];

export function getCaseStudy(slug: string, locale: Locale): CaseStudy | undefined {
  const record = caseStudyRecords.find((p) => p.slug === slug);
  if (!record) return undefined;
  const copy = record[locale];
  return {
    slug: record.slug,
    number: record.number,
    image: record.image,
    imageAlt: record.imageAlt,
    imagePosition: record.imagePosition,
    liveUrl: record.liveUrl,
    githubUrl: record.githubUrl,
    stack: record.stack,
    featured: record.featured,
    highlight: record.highlight,
    ...copy,
  };
}

export function getAllCaseStudies(locale: Locale): CaseStudy[] {
  return caseStudyRecords.map((r) => getCaseStudy(r.slug, locale)!);
}

export function getCaseStudySlugs(): string[] {
  return caseStudyRecords.map((p) => p.slug);
}

/** @deprecated use getAllCaseStudies(locale) */
export const caseStudies = caseStudyRecords;
