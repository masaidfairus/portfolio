import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

/* ─────────────────────────────────────────────
   HomePage — Route: "/"
   Menampilkan Hero, Projects, dan Contact
   Props: t (theme object)
───────────────────────────────────────────── */
export default function HomePage({ t }) {
  return (
    <>
      <HeroSection t={t} />
      <ProjectsSection t={t} />
      <ContactSection t={t} />
    </>
  );
}
