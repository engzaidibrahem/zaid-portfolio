export const projectMeta = [
  {
    id: "indoform",
    number: "01",
    image: "/projects/indoform.jpg",
    liveUrl: "https://www.indoform.id/ar",
    githubUrl: "https://github.com/engzaidibrahem/IndoForm",
    stack: ["Django", "Django REST Framework", "PostgreSQL", "Docker"],
    featured: true,
    copyKey: "indoform" as const,
  },
  {
    id: "valley-order",
    number: "02",
    image: "/projects/delivery.jpg",
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
    copyKey: "valley" as const,
  },
  {
    id: "school",
    number: "03",
    image: "/projects/school.jpg",
    liveUrl:
      "https://integrated-school-management-system.vercel.app/login",
    githubUrl:
      "https://github.com/engzaidibrahem/Integrated-School-Management-System",
    stack: ["Django", "Django REST Framework", "PostgreSQL", "React"],
    featured: false,
    copyKey: "school" as const,
  },
  {
    id: "gia",
    number: "04",
    image: "/projects/gia.jpg",
    liveUrl: "https://www.giamaharanigroup.com/",
    githubUrl: "https://github.com/engzaidibrahem/giamaharanigroup",
    stack: ["Next.js", "React", "Responsive Design"],
    featured: false,
    copyKey: "gia" as const,
  },
] as const;

export const capabilityIds = [
  "backend",
  "saas",
  "fullstack",
  "infra",
] as const;
