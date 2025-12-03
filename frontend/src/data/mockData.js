// Mock data for Rifki Rusdi Satma Putra Portfolio

export const personalInfo = {
  name: "Rifki Rusdi Satma Putra",
  title: "Fullstack Developer & Software Engineer",
  bio: "Software Developer with experience building digital solutions in healthtech, mobility, agriculture, and education.",
  location: "Mataram, Indonesia",
  email: "rifki.rusdi@example.com",
  phone: "+62 812-3456-7890",
  linkedin: "linkedin.com/in/rifki-rusdi",
  github: "github.com/rifkirusdi",
  cvUrl: "https://customer-assets.emergentagent.com/job_dev-glassmorphism/artifacts/bwz28coj_CV%20Software%20Developer%20Rusdy.docx",
  portrait: "https://images.unsplash.com/photo-1725288453683-3d3a6ec420ec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NjQ3Nzk0NzB8MA&ixlib=rb-4.1.0&q=85"
};

export const experiences = [
  {
    id: 1,
    role: "Software Developer",
    company: "Biddokkes POLDA NTB",
    period: "2024 - Present",
    highlights: [
      "Developed clinical health system integrated with BPJS PCare",
      "Implemented patient records and drug inventory management",
      "Built analytics dashboard for healthcare operations"
    ],
    logo: "/placeholder-logo.svg"
  },
  {
    id: 2,
    role: "Fullstack Developer",
    company: "Gridwiz Energy & Mobility",
    period: "2024 - 2025",
    highlights: [
      "Developed e-bike rental platform with Next.js and NestJS",
      "Implemented real-time booking and payment system",
      "Deployed on VPS with Nginx configuration"
    ],
    logo: "/placeholder-logo.svg"
  },
  {
    id: 3,
    role: "Chief Technology Officer",
    company: "AyoTani",
    period: "2024 - 2025",
    highlights: [
      "Led technical team in building agritech platform",
      "Architected full-stack solution for farmers and suppliers",
      "Managed technology roadmap and infrastructure"
    ],
    logo: "/placeholder-logo.svg"
  },
  {
    id: 4,
    role: "Flutter Developer",
    company: "MojadiApp",
    period: "2023 - 2024",
    highlights: [
      "Developed cross-platform mobile application",
      "Integrated Firebase backend services",
      "Implemented responsive UI with Flutter widgets"
    ],
    logo: "/placeholder-logo.svg"
  },
  {
    id: 5,
    role: "Software Engineering Intern",
    company: "Bank Mandiri x Rakamin",
    period: "2023",
    highlights: [
      "Participated in enterprise software development",
      "Learned banking system architecture",
      "Collaborated with cross-functional teams"
    ],
    logo: "/placeholder-logo.svg"
  }
];

export const skills = [
  { name: "Next.js", category: "frontend", icon: "Code2" },
  { name: "React", category: "frontend", icon: "Code" },
  { name: "Flutter", category: "mobile", icon: "Smartphone" },
  { name: "NestJS", category: "backend", icon: "Server" },
  { name: "Express.js", category: "backend", icon: "Database" },
  { name: "PostgreSQL", category: "database", icon: "Database" },
  { name: "MySQL", category: "database", icon: "HardDrive" },
  { name: "Firebase", category: "backend", icon: "Cloud" },
  { name: "Docker", category: "devops", icon: "Container" },
  { name: "Nginx", category: "devops", icon: "Network" },
  { name: "Git", category: "devops", icon: "GitBranch" },
  { name: "CI/CD", category: "devops", icon: "Workflow" },
  { name: "Figma", category: "design", icon: "Figma" },
  { name: "Tailwind", category: "frontend", icon: "Palette" },
  { name: "ShadCN", category: "frontend", icon: "Component" }
];

export const languages = [
  { name: "Indonesian", level: 100, proficiency: "Native" },
  { name: "English", level: 75, proficiency: "Working Proficiency" },
  { name: "Arabic", level: 40, proficiency: "Basic" }
];

export const education = {
  degree: "Bachelor of Informatics Engineering",
  university: "Universitas Mataram",
  gpa: "3.88/4.00",
  period: "2020 - 2024",
  roles: [
    "Teaching Assistant - Algorithms & Data Structures",
    "Teaching Assistant - Digital Systems",
    "Teaching Assistant - Digital Image Processing"
  ],
  awards: [
    "GEMASTIK Finalist - National IT Competition",
    "Best Paper Award - Academic Conference",
    "Multiple National Competition Participations"
  ]
};

export const projects = [
  {
    id: 1,
    title: "AkuSehat",
    subtitle: "Clinical Healthtech Platform",
    description: "Comprehensive digital health system integrated with BPJS PCare, featuring patient records management, drug inventory system, and analytics dashboard for healthcare operations.",
    tech: ["React Vite", "Express.js", "PostgreSQL", "Node.js"],
    image: "https://images.unsplash.com/photo-1638845604906-6c87bd9ddd01?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHAlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzY0Nzc5NDc3fDA&ixlib=rb-4.1.0&q=85",
    category: "healthtech",
    color: "from-orange-500/20 to-amber-500/20"
  },
  {
    id: 2,
    title: "E-Bike Rental Platform",
    subtitle: "Gridwiz Energy & Mobility",
    description: "Next.js frontend with NestJS backend for electric bike rental service. Features real-time booking, payment integration, and VPS deployment with Nginx configuration.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Nginx"],
    image: "https://images.unsplash.com/photo-1570894808314-677b57f25e45?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHx3ZWIlMjBhcHAlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzY0Nzc5NDc3fDA&ixlib=rb-4.1.0&q=85",
    category: "mobility",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 3,
    title: "AyoTani",
    subtitle: "Agritech Platform",
    description: "Full-stack web platform connecting farmers with suppliers. Includes marketplace features, inventory management, and logistics coordination for agricultural products.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHx3ZWIlMjBhcHAlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzY0Nzc5NDc3fDA&ixlib=rb-4.1.0&q=85",
    category: "agritech",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: 4,
    title: "MojadiApp",
    subtitle: "Mobile Application",
    description: "Cross-platform mobile application built with Flutter and Firebase. Features real-time data synchronization, push notifications, and offline-first architecture.",
    tech: ["Flutter", "Firebase", "Dart", "Cloud Functions"],
    image: "https://images.pexels.com/photos/15539377/pexels-photo-15539377.jpeg",
    category: "mobile",
    color: "from-purple-500/20 to-pink-500/20"
  }
];
