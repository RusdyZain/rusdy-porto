// Mock data for Rifki Rusdi Satma Putra Portfolio

export const personalInfo = {
  name: "Rifki Rusdi Satma Putra",
  title: "Fullstack Developer",
  bio: "Fullstack Developer with experience building digital solutions in healthtech, mobility, agriculture, and education.",
  location: "Mataram, Indonesia",
  email: "rifkirusdisatmaputra@gmail.com",
  phone: "+62 877-1294-6545",
  linkedin: "linkedin.com/in/rifkirusdi30",
  github: "github.com/rifkirusdi",
  cvUrl:
    "https://docs.google.com/document/d/1--JL87xANrbNkV1Tzlzq3BOPUeFQI-G-/edit?usp=sharing&ouid=108859602331194458341&rtpof=true&sd=true",
  portrait: "/rusdy.png",
};

export const experiences = [
  {
    id: 1,
    role: "Fullstack Developer",
    company: "Biddokkes POLDA NTB",
    period: "2024 - Present",
    highlights: [
      "Developed clinical health system integrated with BPJS PCare",
      "Implemented patient records and drug inventory management",
      "Built analytics dashboard for healthcare operations",
    ],
    logo: "/placeholder-logo.svg",
  },
  {
    id: 2,
    role: "Fullstack Developer",
    company: "Gridwiz Energy & Mobility",
    period: "2024 - 2025",
    highlights: [
      "Developed e-bike rental platform with Next.js and NestJS",
      "Implemented real-time booking and payment system",
      "Deployed on VPS with Nginx configuration",
    ],
    logo: "/placeholder-logo.svg",
  },
  {
    id: 3,
    role: "Chief Technology Officer",
    company: "AyoTani",
    period: "2024 - 2025",
    highlights: [
      "Led technical team in building agritech platform",
      "Architected full-stack solution for farmers and suppliers",
      "Managed technology roadmap and infrastructure",
    ],
    logo: "/placeholder-logo.svg",
  },
  {
    id: 4,
    role: "Flutter Developer",
    company: "MojadiApp",
    period: "2023 - 2024",
    highlights: [
      "Developed cross-platform mobile application",
      "Integrated Firebase backend services",
      "Implemented responsive UI with Flutter widgets",
    ],
    logo: "/placeholder-logo.svg",
  },
  {
    id: 5,
    role: "Fullstack Engineering Intern",
    company: "Bank Mandiri x Rakamin",
    period: "2023",
    highlights: [
      "Participated in enterprise software development",
      "Learned banking system architecture",
      "Collaborated with cross-functional teams",
    ],
    logo: "/placeholder-logo.svg",
  },
];

export const skills = [
  { name: "Next.js (TypeScript)", category: "frontend", icon: "Code2" },
  { name: "React.js", category: "frontend", icon: "Code" },
  { name: "Vite + React", category: "frontend", icon: "Zap" },
  { name: "HTML/CSS/JavaScript", category: "frontend", icon: "Globe" },
  { name: "Tailwind CSS", category: "frontend", icon: "Palette" },
  { name: "Bootstrap", category: "frontend", icon: "Layout" },
  { name: "ShadCN", category: "frontend", icon: "Component" },
  {
    name: "Responsive Layout Techniques",
    category: "design",
    icon: "LayoutDashboard",
  },
  { name: "Figma & Dribbble-Style UI", category: "design", icon: "PenTool" },
  { name: "Flutter", category: "mobile", icon: "Smartphone" },
  { name: "Node.js", category: "backend", icon: "Cpu" },
  { name: "Express.js", category: "backend", icon: "Database" },
  { name: "NestJS", category: "backend", icon: "Server" },
  { name: "Native PHP", category: "backend", icon: "FileCode2" },
  { name: "Firebase", category: "backend", icon: "Cloud" },
  { name: "PostgreSQL", category: "database", icon: "Database" },
  { name: "MySQL", category: "database", icon: "HardDrive" },
  { name: "MongoDB", category: "database", icon: "Leaf" },
  { name: "Docker", category: "devops", icon: "Container" },
  { name: "VPS + Nginx Deployment", category: "devops", icon: "ServerCog" },
  { name: "Vercel Hosting", category: "devops", icon: "Triangle" },
  { name: "cPanel Hosting", category: "devops", icon: "PanelLeft" },
  { name: "Nginx", category: "devops", icon: "Network" },
  { name: "Git", category: "devops", icon: "GitBranch" },
  { name: "CI/CD", category: "devops", icon: "Workflow" },
  { name: "BPJS PCare API", category: "integration", icon: "ShieldCheck" },
  { name: "GPT API (OpenAI)", category: "integration", icon: "Brain" },
  { name: "Google Voice-to-Speech", category: "integration", icon: "Mic2" },
  { name: "Telegram Bot API", category: "integration", icon: "Send" },
  { name: "Google Maps Platform", category: "integration", icon: "MapPin" },
  { name: "Coordinate Region Mapping", category: "integration", icon: "Route" },
  { name: "YouTube API", category: "integration", icon: "Youtube" },
];

export const languages = [
  { name: "Indonesian", level: 100, proficiency: "Native" },
  { name: "English", level: 75, proficiency: "Working Proficiency" },
  { name: "Arabic", level: 40, proficiency: "Basic" },
];

export const education = {
  degree: "Bachelor of Informatics Engineering",
  university: "Universitas Mataram",
  gpa: "3.88/4.00",
  period: "2020 - 2024",
  roles: [
    "Teaching Assistant - Algorithms & Data Structures",
    "Teaching Assistant - Digital Systems",
    "Teaching Assistant - Digital Image Processing",
  ],
  awards: [
    "GEMASTIK Finalist - National IT Competition",
    "Best Paper Award - Academic Conference",
    "Multiple National Competition Participations",
  ],
};

export const projects = [
  {
    id: 1,
    title: "AkuSehat",
    subtitle: "Clinical Healthtech Platform",
    description:
      "Comprehensive digital health system integrated with BPJS PCare, featuring patient records management, drug inventory system, and analytics dashboard for healthcare operations.",
    tech: ["React Vite", "Express.js", "PostgreSQL", "Node.js"],
    image: "/akusehat.png",
    category: "healthtech",
    color: "from-blue-600/20 to-cyan-500/20",
    liveUrl: "https://akusehat-poldantb-unram.icu",
    repoUrl: "https://github.com/ISENA-FKTP",
  },
  {
    id: 2,
    title: "E-Bike Rental Platform",
    subtitle: " Gridwiz Dashboard Service - Energy and Mobility Indonesia",
    description:
      "Next.js frontend with NestJS backend for electric bike rental service. Features real-time booking, payment integration, and VPS deployment with Nginx configuration.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Nginx"],
    image: "/gridwiz.png",
    category: "mobility",
    color: "from-blue-500/20 to-cyan-500/20",
    liveUrl: "https://gridwizenm.com",
    repoUrl: "https://github.com/GridWiz-Apps",
  },
  {
    id: 3,
    title: "AyoTani",
    subtitle: "Agritech Platform",
    description:
      "Full-stack web platform connecting farmers with suppliers. Includes marketplace features, inventory management, and logistics coordination for agricultural products.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: "/ayotani.png",
    category: "agritech",
    color: "from-green-500/20 to-emerald-500/20",
    liveUrl: "#",
    repoUrl: "https://github.com/Ayotani-Unram",
  },
  {
    id: 4,
    title: "KarirTerbuka",
    subtitle: "Job Vacancy Platform",
    description:
      "Inclusive job vacancy website that connects disability-friendly employers with general applicants. Built with modern web stack to ensure accessibility, responsive UX, and real-time listing updates.",
    tech: [
      "TypeScript",
      "Tailwind CSS",
      "React.js",
      "Next.js",
      "MySQL",
      "Vercel",
    ],
    image: "/karirterbuka.png",
    category: "jobportal",
    color: "from-purple-500/20 to-pink-500/20",
    liveUrl: "https://karir-terbuka.vercel.app",
    repoUrl: "https://github.com/RusdyZain/KarirTerbuka",
  },
];
