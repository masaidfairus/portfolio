import { HEADING, BODY, SKILLS } from "../constants/theme";
import profileImg from "../assets/profile.jpeg";

/* ─────────────────────────────────────────────
   AboutPage — Route: "/about"
   Menampilkan Biography dan Skills lengkap
   Props: t (theme object)
───────────────────────────────────────────── */

const SKILL_CATEGORIES = ["Frontend", "Backend", "Database", "Tools"];

const TIMELINE = [
  {
    year: "2024 – Present",
    title: "Backend Developer",
    place: "Freelance",
    desc: "Building modern web applications for various clients using React, Node.js, and Laravel.",
  },
  {
    year: "2022 – 2024",
    title: "Web Developer Intern",
    place: "Tech Startup, Indonesia",
    desc: "Developed and maintained frontend interfaces and REST APIs. Collaborated with a cross-functional team.",
  },
  {
    year: "2021 – 2025",
    title: "Bachelor of Informatics",
    place: "University",
    desc: "Focused on software engineering, web development, and database systems.",
  },
];

export default function AboutPage({ t }) {
  return (
    <div
      style={{
        background: t.bg,
        minHeight: "100vh",
        fontFamily: BODY,
      }}
    >
      {/* ── Hero Banner ── */}
      <section
        style={{
          background: t.bgAlt,
          borderBottom: `1px solid ${t.border}`,
          padding: "80px 28px 72px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "10px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: t.textMuted,
              marginBottom: "20px",
            }}
          >
            About Me
          </p>
          <h1
            style={{
              fontFamily: HEADING,
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "clamp(36px,5vw,64px)",
              color: t.text,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              margin: "0 0 24px",
            }}
          >
            Developer, creator,
            <br />
            problem solver.
          </h1>
          <p
            style={{
              fontFamily: BODY,
              color: t.textMuted,
              fontSize: "15px",
              lineHeight: 1.75,
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            I'm Masaid Fairus Trimarsongko — a Backend Developer from Indonesia passionate about crafting clean, performant, and meaningful digital experiences.
          </p>
        </div>
      </section>

      {/* ── Biography ── */}
      <section
        style={{
          padding: "88px 28px",
          borderBottom: `1px solid ${t.border}`,
        }}
      >
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "72px",
          }}
        >
          {/* Avatar + quick info */}
          <div
            style={{
              flex: "0 0 260px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {/* Avatar placeholder */}
            <img
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "2px",
                background: t.bgCard,
                border: `1px solid ${t.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              src={profileImg}
              alt="a picture of Masaid Fairus"
            ></img>

            {/* Quick facts */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {[
                ["Location", "Indonesia 🇮🇩"],
                ["Status", "Available for work"],
                ["Email", "masaidfairus@gmail.com"],
                ["Languages", "Indonesian, English"],
              ].map(([k, v]) => (
                <div key={k}>
                  <p
                    style={{
                      fontFamily: BODY,
                      fontSize: "10px",
                      letterSpacing: "0.10em",
                      textTransform: "uppercase",
                      color: t.textFaint,
                      marginBottom: "3px",
                    }}
                  >
                    {k}
                  </p>
                  <p
                    style={{
                      fontFamily: BODY,
                      fontSize: "13px",
                      color: t.text,
                    }}
                  >
                    {v}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bio text */}
          <div style={{ flex: "1 1 320px" }}>
            <p
              style={{
                fontFamily: BODY,
                fontSize: "10px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: t.textMuted,
                marginBottom: "16px",
              }}
            >
              Biography
            </p>
            <h2
              style={{
                fontFamily: HEADING,
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "clamp(24px,3vw,38px)",
                color: t.text,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: "28px",
              }}
            >
              Building the web,
              <br />
              one line at a time.
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <p
                style={{
                  fontFamily: BODY,
                  color: t.textMuted,
                  lineHeight: 1.8,
                  fontSize: "14px",
                }}
              >
                I started my journey in web development during my university years, quickly falling in love with the craft of building things on the internet. What began as curiosity about how websites worked turned into a full-blown
                passion for creating clean, efficient, and user-friendly digital experiences.
              </p>
              <p
                style={{
                  fontFamily: BODY,
                  color: t.textMuted,
                  lineHeight: 1.8,
                  fontSize: "14px",
                }}
              >
                Over the years, I've worked across the full stack — from crafting pixel-perfect interfaces with React, to building robust server-side systems with Node.js and Laravel. I believe great software is born at the intersection of
                technical excellence and genuine empathy for the user.
              </p>
              <p
                style={{
                  fontFamily: BODY,
                  color: t.textMuted,
                  lineHeight: 1.8,
                  fontSize: "14px",
                }}
              >
                When I'm not coding, I enjoy exploring design systems, contributing to open-source projects, and continuously expanding my knowledge of modern web technologies.
              </p>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "12px",
                marginTop: "36px",
              }}
            >
              {[
                ["1+", "Years Exp."],
                ["5+", "Projects"],
                ["2+", "Clients"],
              ].map(([n, l]) => (
                <div
                  key={l}
                  style={{
                    background: t.bgCard,
                    border: `1px solid ${t.border}`,
                    borderRadius: "2px",
                    padding: "18px 12px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: HEADING,
                      fontStyle: "italic",
                      fontSize: "28px",
                      fontWeight: 400,
                      color: t.text,
                      margin: 0,
                    }}
                  >
                    {n}
                  </p>
                  <p
                    style={{
                      fontFamily: BODY,
                      fontSize: "10px",
                      color: t.textFaint,
                      marginTop: "5px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section
        style={{
          background: t.bgAlt,
          padding: "88px 28px",
          borderBottom: `1px solid ${t.border}`,
        }}
      >
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "10px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: t.textMuted,
              marginBottom: "16px",
            }}
          >
            Experience & Education
          </p>
          <h2
            style={{
              fontFamily: HEADING,
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "clamp(24px,3vw,38px)",
              color: t.text,
              letterSpacing: "-0.02em",
              marginBottom: "52px",
            }}
          >
            My Journey
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
              maxWidth: "680px",
            }}
          >
            {TIMELINE.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "28px",
                  paddingBottom: i < TIMELINE.length - 1 ? "40px" : 0,
                  position: "relative",
                }}
              >
                {/* Line */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: t.text,
                      flexShrink: 0,
                      marginTop: "5px",
                    }}
                  />
                  {i < TIMELINE.length - 1 && (
                    <div
                      style={{
                        width: "1px",
                        flex: 1,
                        background: t.border,
                        marginTop: "8px",
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div style={{ paddingBottom: "4px" }}>
                  <p
                    style={{
                      fontFamily: BODY,
                      fontSize: "10px",
                      letterSpacing: "0.10em",
                      textTransform: "uppercase",
                      color: t.textFaint,
                      marginBottom: "6px",
                    }}
                  >
                    {item.year}
                  </p>
                  <p
                    style={{
                      fontFamily: HEADING,
                      fontStyle: "italic",
                      fontSize: "18px",
                      color: t.text,
                      marginBottom: "4px",
                      fontWeight: 400,
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontFamily: BODY,
                      fontSize: "12px",
                      color: t.textMuted,
                      marginBottom: "10px",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.place}
                  </p>
                  <p
                    style={{
                      fontFamily: BODY,
                      fontSize: "13px",
                      color: t.textMuted,
                      lineHeight: 1.7,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section style={{ padding: "88px 28px" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "10px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: t.textMuted,
              marginBottom: "16px",
            }}
          >
            Expertise
          </p>
          <h2
            style={{
              fontFamily: HEADING,
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "clamp(24px,3vw,38px)",
              color: t.text,
              letterSpacing: "-0.02em",
              marginBottom: "52px",
            }}
          >
            Tech Stack & Skills
          </h2>

          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat} style={{ marginBottom: "40px" }}>
              <p
                style={{
                  fontFamily: BODY,
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: t.textFaint,
                  marginBottom: "14px",
                }}
              >
                {cat}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {SKILLS.filter((s) => s.category === cat).map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      background: t.bgCard,
                      border: `1px solid ${t.border}`,
                      borderRadius: "2px",
                      padding: "10px 16px",
                      cursor: "default",
                      transition: "border-color .2s, transform .2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = t.borderHover;
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = t.border;
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: t.accentDot,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: BODY,
                        color: t.text,
                        fontSize: "13px",
                      }}
                    >
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
