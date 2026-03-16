import { Icons } from "@/components/icons";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Python } from "@/components/ui/svgs/python";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { title } from "node:process";

export const DATA = {
  name: "Carlos Sosa",
  initials: "CS",
  url: "https://carlos.sosaperera.com",
  location: "Oaxaca, Mexico",
  locationLink: "https://www.google.com/maps/place/oaxaca",
  description:
    "Full Stack Software Engineer. I love building production systems and helping teams ship faster. Hackathon winner focused on scalable software and AI-powered automation.",
  summary:
    "Full-Stack Developer with 3+ years building production systems and SaaS platforms. Specialized in Laravel, TypeScript, and React ecosystems with experience in API integrations, real-time systems, and cloud deployment. [Hackathon winner](/#hackathons) focused on scalable software and AI-powered automation systems. Currently pursuing a [Bachelor of Computer Systems](/#education) at Instituto Tecnológico de Oaxaca.",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Java", icon: Java },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "dicarlos.sosa@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/carlosupreme",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/carlosupreme",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/carlosuprem",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:dicarlos.sosa@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Donde y Como",
      href: "#",
      badges: ["SaaS", "AI"],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "",
      start: "Oct 2024",
      end: "Feb 2026",
      description:
        "Led the development of a SaaS messaging automation platform integrating messaging APIs with AI models to automate customer interactions. Designed and implemented the full-stack architecture using Node.js, React, and PostgreSQL. Built CI/CD pipelines, cloud infrastructure, and automated backups to improve deployment reliability. Integrated AI-powered automation for customer interaction workflows.",
    },
    {
      company: "JBG Cargo",
      href: "#",
      badges: ["Logistics", "USA"],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "",
      start: "Mar 2025",
      end: "Aug 2025",
      description:
        "Developed a logistics management platform using TypeScript, Express, and React, implementing REST APIs and DDD architecture for shipment and package operations. Built real-time shipment tracking with WebSockets and GPS integrations, powering live operational dashboards and logistics monitoring. Integrated Google Maps APIs for fleet tracking and route visualization, enabling dispatch teams and customers to monitor shipments in real time.",
    },
    {
      company: "Tintoreria Tacuba",
      href: "#",
      badges: ["Operations"],
      location: "Oaxaca, Mexico",
      title: "Full Stack Developer",
      logoUrl: "",
      start: "Jan 2024",
      end: "Sep 2024",
      description:
        "Developed a machine monitoring dashboard and operational analytics system. Built backend APIs and database structures to track production KPIs. Delivered reporting tools supporting operational decision-making.",
    },
  ],
  education: [
    {
      school: "Instituto Tecnológico de Oaxaca",
      href: "https://www.oaxaca.tecnm.mx/",
      degree: "Bachelor of Computer Systems — Major in Computer Systems (Grade: 85/100, Expected Dec 2026)",
      logoUrl: "",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Messaging Automation Platform",
      href: "#",
      dates: "Oct 2024 - Feb 2026",
      active: true,
      description:
        "SaaS platform for Donde y Como that integrates messaging APIs (WhatsApp, etc.) with AI models to fully automate customer interactions at scale. Features full-stack architecture with Node.js, React, PostgreSQL, and CI/CD pipelines on cloud infrastructure.",
      technologies: [
        "Node.js",
        "React",
        "PostgreSQL",
        "TypeScript",
        "Docker",
        "CI/CD",
        "AI Integrations",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Logistics Platform – JBG Cargo",
      href: "#",
      dates: "Mar 2025 - Aug 2025",
      active: true,
      description:
        "Real-time logistics management platform for a USA-based cargo company. Implements DDD architecture, REST APIs, WebSocket-based shipment tracking, GPS integrations, and Google Maps for fleet visualization.",
      technologies: [
        "TypeScript",
        "Express",
        "React",
        "WebSockets",
        "Google Maps API",
        "PostgreSQL",
        "DDD",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "La Salle Oaxaca Hackathon",
      dates: "2022 - 2024",
      location: "Oaxaca, Mexico",
      description:
        "3x winner at La Salle Oaxaca hackathons, building impactful solutions across multiple editions.",
      image: "",
      win: "3x Winner",
      links: [{ href: "#", icon: "", title: "View Project" }],
    },
    {
      title: "NASA Space Apps Challenge MTY",
      dates: "2023",
      location: "Monterrey, Mexico",
      description:
        "Competed in NASA's global hackathon developing space-tech and Earth science solutions.",
      image: "",
      links: [{ href: "#", icon: "", title: "View Project" }],
    },
    {
      title: "ICP Blockchain Hackathon",
      dates: "2023",
      location: "Mexico",
      description:
        "Built a decentralized application on the Internet Computer Protocol blockchain.",
      image: "",
      links: [{ href: "#", icon: "", title: "View Project" }],
    },
    {
      title: "Jalisco Talent Land",
      dates: "2023",
      location: "Guadalajara, Mexico",
      description:
        "Participated in one of Mexico's largest tech events and hackathon competitions.",
      image: "",
      links: [{ href: "#", icon: "", title: "View Project" }],
    },
    {
      title: "IPN Hackathon",
      dates: "2023",
      location: "Mexico",
      description:
        "Competed at Instituto Politécnico Nacional's national hackathon.",
      image: "",
      links: [{ href: "#", icon: "", title: "View Project" }],
    },
    {
      title: "TecNM Regional & Local Hackathons",
      dates: "2022 - 2024",
      location: "Oaxaca, Mexico",
      description:
        "Multiple placements in regional and local hackathons organized by the Tecnológico Nacional de México network.",
      image: "",
      links: [{ href: "#", icon: "", title: "View Project" }],
    },
    {
      title: "Coding Cup",
      dates: "2022 - 2024",
      location: "Mexico",
      description:
        "Competitive programming contest focused on algorithmic problem-solving.",
      image: "",
      links: [{ href: "#", icon: "", title: "View Project" }],
    },
    {
      title: "OmegaUp International Contest",
      dates: "2022 - 2023",
      location: "International (Online)",
      description:
        "Competed in OmegaUp's international competitive programming contest.",
      image: "",
      links: [{ href: "#", icon: "", title: "View Project" }],
    },
  ],
} as const;
