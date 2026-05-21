import { HEADING, BODY } from "../constants/theme";

/* ─────────────────────────────────────────────
   ContactSection Component
   Props: t (theme object)
───────────────────────────────────────────── */
export default function ContactSection({ t }) {
  const inp = {
    width: "100%",
    background: t.inputBg,
    border: `1px solid ${t.border}`,
    borderRadius: "2px",
    padding: "12px 14px",
    color: t.text,
    fontSize: "14px",
    fontFamily: BODY,
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color .2s",
  };

  return (
    <section
      id="contact"
      style={{
        background: t.bgAlt,
        padding: "100px 0",
        borderTop: `1px solid ${t.border}`,
      }}
    >
      <div
        style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 28px" }}
      >
        <div
          style={{
            maxWidth: "560px",
            margin: "0 auto",
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          <p
            style={{
              fontFamily: BODY,
              fontSize: "10px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: t.textMuted,
              marginBottom: "14px",
            }}
          >
            Contact
          </p>
          <h2
            style={{
              fontFamily: HEADING,
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "clamp(28px,3.8vw,46px)",
              color: t.text,
              marginBottom: "18px",
              letterSpacing: "-0.02em",
            }}
          >
            Get in Touch
          </h2>
          <p
            style={{
              fontFamily: BODY,
              color: t.textMuted,
              fontSize: "14px",
              lineHeight: 1.75,
            }}
          >
            I'd love to collaborate. As a backend developer, I build modern,
            scalable web experiences. Let's create something amazing together.
          </p>
        </div>

        <div
          style={{
            maxWidth: "520px",
            margin: "0 auto",
            background: t.bgCard,
            border: `1px solid ${t.border}`,
            borderRadius: "2px",
            padding: "36px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {[
              ["Name", "text", "Your name"],
              ["Email", "email", "your@email.com"],
            ].map(([label, type, ph]) => (
              <div key={label}>
                <label
                  style={{
                    fontFamily: BODY,
                    fontSize: "10px",
                    color: t.textFaint,
                    textTransform: "uppercase",
                    letterSpacing: "0.10em",
                    display: "block",
                    marginBottom: "7px",
                  }}
                >
                  {label}
                </label>
                <input
                  type={type}
                  placeholder={ph}
                  style={inp}
                  onFocus={(e) => (e.target.style.borderColor = t.text)}
                  onBlur={(e) => (e.target.style.borderColor = t.border)}
                />
              </div>
            ))}

            <div>
              <label
                style={{
                  fontFamily: BODY,
                  fontSize: "10px",
                  color: t.textFaint,
                  textTransform: "uppercase",
                  letterSpacing: "0.10em",
                  display: "block",
                  marginBottom: "7px",
                }}
              >
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell me about your project..."
                style={{ ...inp, resize: "none" }}
                onFocus={(e) => (e.target.style.borderColor = t.text)}
                onBlur={(e) => (e.target.style.borderColor = t.border)}
              />
            </div>

            <button
              style={{
                width: "100%",
                padding: "13px",
                background: t.btnPrimBg,
                color: t.btnPrimText,
                fontSize: "11px",
                fontFamily: BODY,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                borderRadius: "2px",
                border: "none",
                cursor: "pointer",
                transition: "background .2s",
                marginTop: "4px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = t.btnPrimHover)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = t.btnPrimBg)
              }
            >
              Send Message
            </button>
          </div>

          <p
            style={{
              textAlign: "center",
              fontFamily: BODY,
              color: t.textFaint,
              fontSize: "12px",
              marginTop: "22px",
            }}
          >
            or reach me at{" "}
            <a
              href="mailto:masaidfairustrimarsongko@gmail.com"
              style={{
                color: t.textMuted,
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              masaidfairustrimarsongko@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
