/* ─────────────────────────────────────────────
   THEME TOKENS — strictly black & white only
───────────────────────────────────────────── */
export const T = {
  dark: {
    bg: "#111111",
    bgAlt: "#0a0a0a",
    bgCard: "#161616",
    text: "#f0f0f0",
    textMuted: "#888888",
    textFaint: "#444444",
    border: "rgba(255,255,255,0.08)",
    borderHover: "rgba(255,255,255,0.30)",
    inputBg: "rgba(255,255,255,0.04)",
    navBg: "rgba(17,17,17,0.85)",
    toggleTrack: "#2a2a2a",
    toggleKnob: "#f0f0f0",
    avatarBg: "#1c1c1c",
    avatarText: "#2a2a2a",
    badgeBg: "rgba(255,255,255,0.05)",
    badgeBorder: "rgba(255,255,255,0.12)",
    badgeText: "#aaaaaa",
    scrollClr: "#3a3a3a",
    tagBg: "rgba(255,255,255,0.05)",
    btnPrimBg: "#f0f0f0",
    btnPrimText: "#111111",
    btnPrimHover: "#ffffff",
    btnSecBorder: "rgba(255,255,255,0.18)",
    btnSecText: "#888888",
    btnSecHover: "#f0f0f0",
    accentDot: "#f0f0f0",
    divider: "rgba(255,255,255,0.06)",
    projBanner: "#1e1e1e",
  },
  light: {
    bg: "#ffffff",
    bgAlt: "#f5f5f5",
    bgCard: "#fafafa",
    text: "#111111",
    textMuted: "#666666",
    textFaint: "#aaaaaa",
    border: "rgba(0,0,0,0.08)",
    borderHover: "rgba(0,0,0,0.35)",
    inputBg: "rgba(0,0,0,0.03)",
    navBg: "rgba(255,255,255,0.88)",
    toggleTrack: "#d4d4d4",
    toggleKnob: "#111111",
    avatarBg: "#ebebeb",
    avatarText: "#d5d5d5",
    badgeBg: "rgba(0,0,0,0.04)",
    badgeBorder: "rgba(0,0,0,0.10)",
    badgeText: "#555555",
    scrollClr: "#bbbbbb",
    tagBg: "rgba(0,0,0,0.05)",
    btnPrimBg: "#111111",
    btnPrimText: "#ffffff",
    btnPrimHover: "#000000",
    btnSecBorder: "rgba(0,0,0,0.18)",
    btnSecText: "#666666",
    btnSecHover: "#111111",
    accentDot: "#111111",
    divider: "rgba(0,0,0,0.06)",
    projBanner: "#e8e8e8",
  },
};

/* ─────────────────────────────────────────────
   TYPOGRAPHY
───────────────────────────────────────────── */
export const HEADING = "'Editorial New', serif";
export const BODY = "Helvetica, 'Helvetica Neue', Arial, sans-serif";

/* ─────────────────────────────────────────────
   NAVIGATION
───────────────────────────────────────────── */
export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  // { label: "Contact", to: "/#contact" },
];

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
export const SKILLS = [
  { name: "JavaScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "Laravel", category: "Backend" },
  { name: "MySQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Git", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "Figma", category: "Tools" },
  { name: "Vite", category: "Tools" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    desc: "A fullstack shopping experience with cart, authentication, and seamless payments.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    desc: "Analytics dashboard with real-time charts and granular role-based access control.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Social Media App",
    desc: "A full-featured social platform with feeds, likes, comments, and notifications.",
    tags: ["React", "Firebase", "Tailwind"],
  },
];
