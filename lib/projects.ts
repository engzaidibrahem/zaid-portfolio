export type ProjectMeta = {
  id: string;
  number: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  stack: string[];
  featured?: boolean;
  copyKey:
    | "indoform"
    | "valley"
    | "school"
    | "gia"
    | "managerGia";
};

export const projectMeta: ProjectMeta[] = [
  {
    id: "indoform",
    number: "01",
    image: "/projects/indoform.jpg",
    liveUrl: "https://www.indoform.id/ar",
    githubUrl: "https://github.com/engzaidibrahem/IndoForm",
    stack: ["Django", "Django REST Framework", "PostgreSQL", "Docker"],
    featured: true,
    copyKey: "indoform",
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
    copyKey: "valley",
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
    copyKey: "school",
  },
  {
    id: "gia",
    number: "04",
    image: "/projects/gia.jpg",
    liveUrl: "https://www.giamaharanigroup.com/",
    githubUrl: "https://github.com/engzaidibrahem/giamaharanigroup",
    stack: ["Next.js", "React", "Responsive Design"],
    featured: false,
    copyKey: "gia",
  },
  {
    id: "manager-gia",
    number: "05",
    image: "/projects/manager-gia.jpg",
    githubUrl: "https://github.com/engzaidibrahem/manager-gia",
    stack: [
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "pnpm",
      "Nginx",
    ],
    featured: false,
    copyKey: "managerGia",
  },
];

export const capabilityIds = [
  "backend",
  "saas",
  "fullstack",
  "infra",
] as const;
