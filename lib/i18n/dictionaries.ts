export type Locale = "en" | "ar";

export type Dictionary = {
  nav: {
    work: string;
    capabilities: string;
    about: string;
    letsTalk: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    availability: string;
    title: string;
    headlineBefore: string;
    headlineAccent: string;
    headlineAfter: string;
    supporting: string;
    ctaWork: string;
    ctaBuild: string;
    stackLine: string;
  };
  architecture: {
    label: string;
    title: string;
    live: string;
    stages: string[];
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    keyCapabilities: string;
    stack: string;
    live: string;
    github: string;
    placeholder: string;
    items: {
      indoform: ProjectCopy;
      valley: ProjectCopy;
      school: ProjectCopy;
      gia: ProjectCopy;
    };
  };
  capabilities: {
    eyebrow: string;
    title: string;
    items: {
      backend: CapabilityCopy;
      saas: CapabilityCopy;
      fullstack: CapabilityCopy;
      infra: CapabilityCopy;
    };
  };
  about: {
    eyebrow: string;
    titleLine1: string;
    titleLine2Before: string;
    titleAccent: string;
    titleLine2After: string;
    p1: string;
    p2: string;
    p3: string;
    stats: { value: string; label: string }[];
  };
  contact: {
    eyebrow: string;
    titleBefore: string;
    titleAccent: string;
    titleAfter: string;
    supporting: string;
    github: string;
  };
  footer: {
    title: string;
    copyright: string;
  };
  language: {
    switchTo: string;
    code: string;
  };
};

type ProjectCopy = {
  category: string;
  name: string;
  subtitle: string;
  description: string;
  capabilities: string[];
};

type CapabilityCopy = {
  title: string;
  description: string;
  stack: string;
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      work: "Work",
      capabilities: "Capabilities",
      about: "About",
      letsTalk: "Let's Talk",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      availability: "Available for remote opportunities",
      title: "Full-Stack Engineer & Product Builder",
      headlineBefore: "I build systems that ",
      headlineAccent: "businesses",
      headlineAfter: " use.",
      supporting:
        "Full-Stack Engineer & Product Builder specializing in scalable backend systems, SaaS platforms, APIs, and real-world digital products.",
      ctaWork: "View Selected Work",
      ctaBuild: "Let's Build Something",
      stackLine: "Backend · Django · FastAPI · React · Next.js · Docker",
    },
    architecture: {
      label: "System flow",
      title: "Delivery pipeline",
      live: "Live",
      stages: ["IDEA", "ARCHITECTURE", "BACKEND", "PRODUCT", "DEPLOYMENT"],
    },
    projects: {
      eyebrow: "Selected work",
      title: "Systems shipped into the real world.",
      subtitle:
        "Four production projects spanning SaaS commerce, logistics backends, multi-role business systems, and client delivery.",
      keyCapabilities: "Key capabilities",
      stack: "Stack",
      live: "Live project",
      github: "GitHub",
      placeholder: "Screenshot placeholder · add",
      items: {
        indoform: {
          category: "PRODUCT / SAAS",
          name: "IndoForm",
          subtitle: "Commerce infrastructure for Indonesian small businesses.",
          description:
            "IndoForm is a real-world commerce platform designed to help Indonesian merchants create and manage their own digital storefronts. Merchants can organize products, customize their store identity, share unique store links, manage orders, and connect their business workflows with local payment and WhatsApp-based ordering experiences.",
          capabilities: [
            "Product Development",
            "SaaS Architecture",
            "E-Commerce",
            "Merchant Dashboard",
            "Business Workflows",
            "Payments",
            "WhatsApp Integration",
          ],
        },
        valley: {
          category: "BACKEND / LOGISTICS",
          name: "Valley Order",
          subtitle: "A multi-vendor delivery and logistics platform.",
          description:
            "Valley Order is a complete delivery platform designed around real-world logistics workflows. The system connects customers, vendors, and delivery operations through scalable backend architecture, APIs, authentication, order management, delivery calculations, geographic operations, and real-time features.",
          capabilities: [
            "Multi-Vendor Architecture",
            "REST APIs",
            "Real-Time Features",
            "Geospatial Logic",
            "Authentication",
            "Delivery Workflows",
          ],
        },
        school: {
          category: "BUSINESS SYSTEM",
          name: "Integrated School Management System",
          subtitle: "One platform connecting an entire school ecosystem.",
          description:
            "A centralized management system designed around multiple user roles and operational workflows. The platform connects administration, teachers, students, parents, and transportation services through a unified digital environment.",
          capabilities: [
            "Multi-Role System",
            "Role-Based Access",
            "Dashboards",
            "Business Workflows",
            "Data Management",
            "Centralized Operations",
          ],
        },
        gia: {
          category: "CLIENT PROJECT / INDONESIA",
          name: "Gia Maharani Group",
          subtitle: "A digital experience built for a real business in Bogor.",
          description:
            "A production website created for a real restaurant business in Indonesia. The experience combines multilingual content, a digital menu, ordering flows, promotions, business information, and WhatsApp integration into a modern customer-facing platform.",
          capabilities: [
            "Client Delivery",
            "Multilingual Experience",
            "Digital Menu",
            "Ordering Flow",
            "WhatsApp Integration",
            "Production Deployment",
          ],
        },
      },
    },
    capabilities: {
      eyebrow: "Capabilities",
      title: "Built for product teams who need systems that scale.",
      items: {
        backend: {
          title: "Backend Systems",
          description:
            "Scalable APIs, authentication, business logic, databases, integrations, and backend architecture.",
          stack: "Django · Django REST Framework · FastAPI · PostgreSQL · Redis",
        },
        saas: {
          title: "SaaS & Platforms",
          description:
            "Multi-user products, dashboards, merchant systems, business workflows, and complete digital platforms.",
          stack: "Product Architecture · APIs · Dashboards · Multi-role Systems",
        },
        fullstack: {
          title: "Full-Stack Development",
          description:
            "From backend architecture to modern user interfaces and complete product experiences.",
          stack: "React · Next.js · TypeScript · REST APIs",
        },
        infra: {
          title: "Deployment & Infrastructure",
          description:
            "Taking applications from local development to production-ready environments.",
          stack: "Docker · Linux VPS · Nginx · Git · CI/CD",
        },
      },
    },
    about: {
      eyebrow: "About",
      titleLine1: "More than writing code.",
      titleLine2Before: "Building the whole ",
      titleAccent: "system",
      titleLine2After: ".",
      p1: "I'm Zaid Ibrahem, a Full-Stack Software Engineer focused on backend architecture, APIs, scalable systems, and product development.",
      p2: "My work ranges from SaaS platforms and e-commerce infrastructure to multi-vendor delivery systems and complex management applications. I enjoy turning ideas into products that people and businesses can actually use.",
      p3: "I'm currently based in Indonesia and available for remote, contract, freelance, and full-time opportunities with teams building ambitious products.",
      stats: [
        { value: "4", label: "Selected Real-World Projects" },
        { value: "END-TO-END", label: "From Architecture to Deployment" },
        { value: "REMOTE", label: "Available Worldwide" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      titleBefore: "Have a product,\nplatform, or system\nto ",
      titleAccent: "build",
      titleAfter: "?",
      supporting:
        "I'm open to remote opportunities, contract work, freelance projects, and long-term collaborations.",
      github: "GitHub",
    },
    footer: {
      title: "Full-Stack Engineer & Product Builder",
      copyright: "© 2026 Zaid Ibrahem. Built from idea to production.",
    },
    language: {
      switchTo: "العربية",
      code: "AR",
    },
  },
  ar: {
    nav: {
      work: "الأعمال",
      capabilities: "القدرات",
      about: "نبذة",
      letsTalk: "لنتحدث",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
    },
    hero: {
      availability: "متاح لفرص العمل عن بُعد",
      title: "مهندس Full-Stack وباني منتجات",
      headlineBefore: "أبني أنظمة تستخدمها ",
      headlineAccent: "الشركات",
      headlineAfter: ".",
      supporting:
        "مهندس Full-Stack وباني منتجات متخصص في أنظمة الباكند القابلة للتوسع، ومنصات SaaS، وواجهات API، والمنتجات الرقمية الواقعية.",
      ctaWork: "عرض الأعمال المختارة",
      ctaBuild: "لنبنِ شيئاً معاً",
      stackLine: "Backend · Django · FastAPI · React · Next.js · Docker",
    },
    architecture: {
      label: "تدفق النظام",
      title: "مسار التسليم",
      live: "مباشر",
      stages: ["فكرة", "هندسة", "باكند", "منتج", "نشر"],
    },
    projects: {
      eyebrow: "أعمال مختارة",
      title: "أنظمة وصلت إلى العالم الحقيقي.",
      subtitle:
        "أربعة مشاريع إنتاجية تشمل تجارة SaaS، وباكند اللوجستيات، وأنظمة أعمال متعددة الأدوار، وتسليم مشاريع للعملاء.",
      keyCapabilities: "القدرات الرئيسية",
      stack: "التقنيات",
      live: "المشروع المباشر",
      github: "GitHub",
      placeholder: "صورة مؤقتة · أضف",
      items: {
        indoform: {
          category: "منتج / SaaS",
          name: "IndoForm",
          subtitle: "بنية تجارة إلكترونية لأصحاب المشاريع الصغيرة في إندونيسيا.",
          description:
            "IndoForm منصة تجارة حقيقية تساعد التجار الإندونيسيين على إنشاء وإدارة متاجرهم الرقمية. يمكن للتجار تنظيم المنتجات، وتخصيص هوية المتجر، ومشاركة روابط فريدة، وإدارة الطلبات، وربط سير العمل التجاري مع الدفع المحلي وتجارب الطلب عبر واتساب.",
          capabilities: [
            "تطوير المنتجات",
            "هندسة SaaS",
            "التجارة الإلكترونية",
            "لوحة التاجر",
            "سير العمل التجاري",
            "المدفوعات",
            "تكامل واتساب",
          ],
        },
        valley: {
          category: "باكند / لوجستيات",
          name: "Valley Order",
          subtitle: "منصة توصيل ولوجستيات متعددة البائعين.",
          description:
            "Valley Order منصة توصيل كاملة مصممة حول سير عمل لوجستي واقعي. يربط النظام العملاء والبائعين وعمليات التوصيل عبر بنية باكند قابلة للتوسع، وواجهات API، والمصادقة، وإدارة الطلبات، وحسابات التوصيل، والعمليات الجغرافية، والميزات الفورية.",
          capabilities: [
            "هندسة متعددة البائعين",
            "REST APIs",
            "ميزات فورية",
            "منطق جغرافي",
            "المصادقة",
            "سير عمل التوصيل",
          ],
        },
        school: {
          category: "نظام أعمال",
          name: "نظام إدارة المدرسة المتكامل",
          subtitle: "منصة واحدة تربط منظومة المدرسة بالكامل.",
          description:
            "نظام إدارة مركزي مصمم حول أدوار مستخدمين متعددة وسير عمل تشغيلي. تربط المنصة الإدارة والمعلمين والطلاب وأولياء الأمور وخدمات النقل ضمن بيئة رقمية موحّدة.",
          capabilities: [
            "نظام متعدد الأدوار",
            "صلاحيات حسب الدور",
            "لوحات تحكم",
            "سير العمل التجاري",
            "إدارة البيانات",
            "عمليات مركزية",
          ],
        },
        gia: {
          category: "مشروع عميل / إندونيسيا",
          name: "Gia Maharani Group",
          subtitle: "تجربة رقمية لمنشأة حقيقية في بوجور.",
          description:
            "موقع إنتاجي لمطعم حقيقي في إندونيسيا. تجمع التجربة محتوى متعدد اللغات، وقائمة رقمية، وتدفقات طلب، وعروضاً ترويجية، ومعلومات العمل، وتكامل واتساب في منصة حديثة موجهة للعملاء.",
          capabilities: [
            "تسليم للعميل",
            "تجربة متعددة اللغات",
            "قائمة رقمية",
            "تدفق الطلب",
            "تكامل واتساب",
            "نشر إنتاجي",
          ],
        },
      },
    },
    capabilities: {
      eyebrow: "القدرات",
      title: "مصمم لفرق المنتجات التي تحتاج أنظمة قابلة للتوسع.",
      items: {
        backend: {
          title: "أنظمة الباكند",
          description:
            "واجهات API قابلة للتوسع، والمصادقة، ومنطق الأعمال، وقواعد البيانات، والتكاملات، وهندسة الباكند.",
          stack: "Django · Django REST Framework · FastAPI · PostgreSQL · Redis",
        },
        saas: {
          title: "SaaS والمنصات",
          description:
            "منتجات متعددة المستخدمين، ولوحات التحكم، وأنظمة التجار، وسير العمل التجاري، ومنصات رقمية متكاملة.",
          stack: "هندسة المنتج · APIs · لوحات التحكم · أنظمة متعددة الأدوار",
        },
        fullstack: {
          title: "تطوير Full-Stack",
          description:
            "من هندسة الباكند إلى واجهات المستخدم الحديثة وتجارب المنتجات الكاملة.",
          stack: "React · Next.js · TypeScript · REST APIs",
        },
        infra: {
          title: "النشر والبنية التحتية",
          description:
            "نقل التطبيقات من التطوير المحلي إلى بيئات جاهزة للإنتاج.",
          stack: "Docker · Linux VPS · Nginx · Git · CI/CD",
        },
      },
    },
    about: {
      eyebrow: "نبذة",
      titleLine1: "أكثر من كتابة كود.",
      titleLine2Before: "بناء ",
      titleAccent: "النظام",
      titleLine2After: " بالكامل.",
      p1: "أنا زيد إبراهيم، مهندس برمجيات Full-Stack أركز على هندسة الباكند، وواجهات API، والأنظمة القابلة للتوسع، وتطوير المنتجات.",
      p2: "يمتد عملي من منصات SaaS وبنية التجارة الإلكترونية إلى أنظمة التوصيل متعددة البائعين وتطبيقات الإدارة المعقدة. أستمتع بتحويل الأفكار إلى منتجات يستخدمها الناس والشركات فعلاً.",
      p3: "أقيم حالياً في إندونيسيا ومتاح لفرص العمل عن بُعد، والعقود، والعمل الحر، والدوام الكامل مع فرق تبني منتجات طموحة.",
      stats: [
        { value: "4", label: "مشاريع واقعية مختارة" },
        { value: "من البداية للنهاية", label: "من الهندسة إلى النشر" },
        { value: "عن بُعد", label: "متاح حول العالم" },
      ],
    },
    contact: {
      eyebrow: "تواصل",
      titleBefore: "هل لديك منتج،\nأو منصة، أو نظام\nتريد ",
      titleAccent: "بناءه",
      titleAfter: "؟",
      supporting:
        "أنا منفتح على الفرص عن بُعد، والعمل بالعقود، والمشاريع الحرة، والتعاون طويل الأمد.",
      github: "GitHub",
    },
    footer: {
      title: "مهندس Full-Stack وباني منتجات",
      copyright: "© 2026 زيد إبراهيم. بُني من الفكرة إلى الإنتاج.",
    },
    language: {
      switchTo: "English",
      code: "EN",
    },
  },
};
