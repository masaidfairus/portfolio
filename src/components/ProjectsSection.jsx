import { HEADING, BODY, PROJECTS } from "../constants/theme";

/* ─────────────────────────────────────────────
   ProjectsSection Component
   Props: t (theme object)
───────────────────────────────────────────── */
export default function ProjectsSection({ t }) {
  return (
    <section
      style={{
        background: t.bg,
        padding: "100px 0",
        borderTop: `1px solid ${t.border}`,
      }}
    >
      <div
        style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 28px" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "52px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: BODY,
                fontSize: "10px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: t.textMuted,
                marginBottom: "12px",
              }}
            >
              Work
            </p>
            <h2
              style={{
                fontFamily: HEADING,
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "clamp(28px,3.8vw,46px)",
                color: t.text,
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Featured Projects
            </h2>
          </div>
          <a
            href="#"
            style={{
              fontFamily: BODY,
              fontSize: "12px",
              color: t.textMuted,
              textDecoration: "none",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              transition: "color .2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = t.text)}
            onMouseLeave={(e) => (e.currentTarget.style.color = t.textMuted)}
          >
            See all
            <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
            gap: "16px",
          }}
        >
          {PROJECTS.map((p, i) => (
            <div
              key={p.id}
              style={{
                background: t.bgCard,
                border: `1px solid ${t.border}`,
                borderRadius: "2px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform .25s, border-color .25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.borderColor = t.borderHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = t.border;
              }}
            >
              {/* Banner — number label only */}
              <div
                style={{
                  height: "120px",
                  background: t.projBanner,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: `1px solid ${t.border}`,
                }}
              >
                <span
                  style={{
                    fontFamily: HEADING,
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "56px",
                    color: t.border,
                    letterSpacing: "-0.04em",
                    userSelect: "none",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div style={{ padding: "22px" }}>
                <h3
                  style={{
                    fontFamily: HEADING,
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: t.text,
                    fontSize: "20px",
                    margin: "0 0 10px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: BODY,
                    color: t.textMuted,
                    fontSize: "13px",
                    lineHeight: 1.65,
                    margin: "0 0 16px",
                  }}
                >
                  {p.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: BODY,
                        fontSize: "10px",
                        background: t.tagBg,
                        border: `1px solid ${t.border}`,
                        color: t.textMuted,
                        padding: "3px 9px",
                        borderRadius: "2px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
