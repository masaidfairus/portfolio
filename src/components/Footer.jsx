import { BODY } from "../constants/theme";

/* ─────────────────────────────────────────────
   Footer Component
   Props: t (theme object)
───────────────────────────────────────────── */
export default function Footer({ t }) {
  return (
    <footer
      style={{
        background: t.bg,
        borderTop: `1px solid ${t.border}`,
        padding: "28px 28px",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        <p
          style={{
            fontFamily: BODY,
            color: t.textFaint,
            fontSize: "12px",
            letterSpacing: "0.02em",
            margin: 0,
          }}
        >
          ©2026 — Masaid Fairus Trimarsongko
        </p>

        <div style={{ display: "flex", gap: "28px" }}>
          {[
            { label: "LinkedIn", href: "https://linkedin.com/masaidfairus" },
            { label: "Instagram", href: "https://instagram.com/msaidfairuss" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: BODY,
                color: t.textFaint,
                fontSize: "12px",
                textDecoration: "none",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                transition: "color .2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = t.text)}
              onMouseLeave={(e) => (e.currentTarget.style.color = t.textFaint)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
