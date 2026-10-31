export type CaseStudy = {
  slug: string;
  number: string;
  name: string;
  category: string;
  tagline: string;
  summary: string;
  image: string;
  imageAlt: string;
  imagePosition?: "top" | "center";
  liveUrl?: string;
  githubUrl?: string;
  stack: string[];
  featured: boolean;
  highlight?: boolean;
  capabilities: string[];
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  myContribution: string;
  teamContribution?: string;
  challenges: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "restaurant-inventory-dashboard",
    number: "01",
    name: "Restaurant Inventory Dashboard",
    category: "OPERATIONS PLATFORM",
    tagline:
      "Warehouse, kitchen, and daily reporting for real restaurant operations.",
    summary:
      "A bilingual (Arabic / Indonesian) operations platform connecting warehouse ledger, kitchen stock, chef daily reports, and period consumption—with mobile APK and owner admin dashboard.",
    image: "/projects/restaurant-inventory-mobile.png",
    imageAlt: "GIA Warehouse mobile login — restaurant inventory app",
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
    capabilities: [
      "Warehouse Ledger",
      "Kitchen Operations",
      "Daily Chef Reports",
      "Stocktake Workflow",
      "Finance & Payroll",
      "Multi-Role Access",
    ],
    overview:
      "Portfolio showcase for a production restaurant control system used to track materials from warehouse inbound through kitchen consumption, approvals, and period reporting.",
    problem:
      "Restaurants lose margin when stock moves without audit trails: inbound without ledger, kitchen transfers without records, chef counts without approval, and finance unable to reconcile consumption over time.",
    solution:
      "The platform ties warehouse balance, kitchen stock, chef daily reports, and manager/owner approval into one movement ledger—so drafts never silently mutate stock and every adjustment stays auditable.",
    architecture:
      "Mobile APK and admin web clients connect to a centralized API with role-based auth and a PostgreSQL ledger backend. Production deployment uses managed hosting; implementation details remain private in the portfolio repo.",
    myContribution:
      "Product architecture, backend/API design, admin dashboard, mobile warehouse flows, bilingual UX, and deployment for restaurant operations.",
    challenges:
      "Balancing strict role separation (owner, manager, chef, warehouse) with fast floor operations, and keeping ledger integrity while supporting draft stocktake and report workflows.",
  },
  {
    slug: "indoform",
    number: "02",
    name: "IndoForm",
    category: "PRODUCT / SAAS",
    tagline: "Commerce infrastructure for Indonesian small businesses.",
    summary:
      "Real-world commerce platform helping Indonesian merchants run digital storefronts, orders, and WhatsApp-based ordering.",
    image: "/projects/indoform.jpg",
    imageAlt: "IndoForm WhatsApp commerce platform",
    liveUrl: "https://www.indoform.id/ar",
    githubUrl: "https://github.com/engzaidibrahem/IndoForm",
    stack: ["Django", "Django REST Framework", "PostgreSQL", "Docker"],
    featured: true,
    capabilities: [
      "SaaS Architecture",
      "Merchant Dashboard",
      "E-Commerce",
      "Payments",
      "WhatsApp Integration",
    ],
    overview:
      "IndoForm lets merchants create storefronts, manage products, share store links, and connect local payment and WhatsApp ordering workflows.",
    problem:
      "Small merchants need lightweight digital sales without heavy onboarding or commission-heavy marketplaces.",
    solution:
      "A focused merchant product with storefront management, order flows, and WhatsApp-native checkout experiences.",
    architecture:
      "Django REST API with PostgreSQL, containerized services, and a product surface tuned for Indonesian merchants.",
    myContribution:
      "End-to-end product development: backend, APIs, merchant workflows, and production deployment.",
    challenges:
      "Designing SaaS flows that stay simple for non-technical merchants while remaining extensible for payments and messaging integrations.",
  },
  {
    slug: "valley-order",
    number: "03",
    name: "Valley Order",
    category: "BACKEND / LOGISTICS",
    tagline: "Multi-vendor delivery and logistics platform.",
    summary:
      "Delivery platform connecting customers, vendors, and operations through scalable APIs and real-time features.",
    image: "/projects/delivery.jpg",
    imageAlt: "Valley Order delivery platform",
    liveUrl: "https://valley-order.com/#home",
    githubUrl:
      "https://github.com/engzaidibrahem/django-delivery-platform-api",
    stack: [
      "Django",
      "Django REST Framework",
      "Redis",
      "WebSockets",
      "Docker",
      "MySQL",
    ],
    featured: false,
    capabilities: [
      "Multi-Vendor APIs",
      "Real-Time Features",
      "Geospatial Logic",
      "Order Management",
    ],
    overview:
      "Backend-centric logistics product covering authentication, orders, delivery calculations, and geographic operations.",
    problem:
      "Multi-sided delivery needs reliable APIs, vendor isolation, and live operational visibility.",
    solution:
      "A Django-based platform with REST APIs, caching, WebSockets, and workflow logic aligned to real delivery operations.",
    architecture:
      "Service-oriented Django backend with Redis and WebSockets for real-time paths, MySQL persistence, and Dockerized deployment.",
    myContribution:
      "Backend architecture, API design, authentication, order/delivery logic, and infrastructure setup.",
    challenges:
      "Coordinating geospatial calculations, vendor workflows, and real-time updates without compromising API clarity.",
  },
  {
    slug: "school-management",
    number: "04",
    name: "Integrated School Management System",
    category: "BUSINESS SYSTEM",
    tagline: "One platform for an entire school ecosystem.",
    summary:
      "Centralized system for administration, teachers, students, parents, and transport with role-based access.",
    image: "/projects/school.jpg",
    imageAlt: "Integrated School Management System login",
    liveUrl:
      "https://integrated-school-management-system.vercel.app/login",
    githubUrl:
      "https://github.com/engzaidibrahem/Integrated-School-Management-System",
    stack: ["Django", "Django REST Framework", "PostgreSQL", "React"],
    featured: false,
    capabilities: [
      "Multi-Role System",
      "RBAC",
      "Dashboards",
      "Operational Workflows",
    ],
    overview:
      "Unified management environment for school operations across multiple stakeholders and workflows.",
    problem:
      "Schools run on fragmented tools; staff need one system with clear permissions per role.",
    solution:
      "A multi-role platform connecting academic and operational workflows in a single product.",
    architecture:
      "Django REST backend with PostgreSQL and a React frontend for dashboards and role-specific experiences.",
    myContribution:
      "Backend design, APIs, role modeling, and full-stack integration with the React client.",
    challenges:
      "Modeling complex role boundaries while keeping daily tasks fast for teachers and administrators.",
  },
  {
    slug: "gia-maharani",
    number: "05",
    name: "Gia Maharani Group",
    category: "CLIENT DELIVERY / INDONESIA",
    tagline: "Customer-facing digital experience for a Bogor restaurant.",
    summary:
      "Production website with multilingual content, digital menu, ordering flows, and WhatsApp integration.",
    image: "/projects/gia.jpg",
    imageAlt: "Gia Maharani Group restaurant website",
    liveUrl: "https://www.giamaharanigroup.com/",
    githubUrl: "https://github.com/engzaidibrahem/giamaharanigroup",
    stack: ["Next.js", "React", "Responsive Design"],
    featured: false,
    capabilities: [
      "Client Delivery",
      "Multilingual UX",
      "Digital Menu",
      "Production Deployment",
    ],
    overview:
      "Public-facing brand and ordering experience for a real restaurant business in Indonesia.",
    problem:
      "The business needed a modern customer channel that reflects brand quality and supports local ordering habits.",
    solution:
      "A responsive Next.js experience combining menu, promotions, business info, and WhatsApp-ready flows.",
    architecture:
      "Next.js frontend optimized for content, performance, and mobile-first restaurant customers.",
    myContribution:
      "Full client delivery: UX, frontend implementation, content structure, and production deployment.",
    teamContribution:
      "Client stakeholders provided brand direction and operational content.",
    challenges:
      "Serving multilingual audiences while keeping ordering paths simple on mobile networks.",
  },
  {
    slug: "gia-manager",
    number: "06",
    name: "Gia Shawarma Manager",
    category: "CLIENT OPERATIONS",
    tagline: "Back-office system for restaurant staff and inventory workflows.",
    summary:
      "Self-hostable monorepo with API, PostgreSQL, web dashboard, and warehouse mobile paths for Gia operations.",
    image: "/projects/manager-gia.jpg",
    imageAlt: "Gia Maharani Group digital presence",
    githubUrl: "https://github.com/engzaidibrahem/manager-gia",
    stack: ["TypeScript", "Node.js", "PostgreSQL", "Docker", "pnpm", "Nginx"],
    featured: false,
    capabilities: [
      "Operations Dashboard",
      "Multi-Role Access",
      "API Architecture",
      "Self-Hosting",
    ],
    overview:
      "Internal management platform complementing the public Gia site—focused on staff roles, inventory, and deployment on client infrastructure.",
    problem:
      "Restaurant operations need controlled back-office tools separate from the marketing site.",
    solution:
      "A TypeScript API and dashboard monorepo with Docker and Nginx-ready self-hosting documentation.",
    architecture:
      "pnpm workspace with API server, web dashboard, and mobile warehouse packages backed by PostgreSQL.",
    myContribution:
      "System design, API layer, dashboard, deployment docs, and integration with operational roles.",
    challenges:
      "Packaging a monorepo for reliable self-hosted installs while keeping role permissions strict.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((p) => p.slug === slug);
}

export function getCaseStudySlugs(): string[] {
  return caseStudies.map((p) => p.slug);
}
