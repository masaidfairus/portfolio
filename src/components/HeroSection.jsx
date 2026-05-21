import { Link } from "react-router-dom";
import { HEADING, BODY } from "../constants/theme";

/* ─────────────────────────────────────────────
   HeroSection Component
   Props: t (theme object)
───────────────────────────────────────────── */
const SOCIAL = [
  {
    href: "mailto:masaidfairustrimarsongko@gmail.com",
    label: "Email",
    d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    d: "M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57A1.46 1.46 0 0 1 14.38 12.11A1.46 1.46 0 0 1 15.84 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z",
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    d: "M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z",
  },
];

export default function HeroSection({ t }) {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background: t.bg,
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "80px 28px",
          gap: "56px",
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: t.badgeBg,
              border: `1px solid ${t.badgeBorder}`,
              borderRadius: "3px",
              padding: "6px 14px",
              width: "fit-content",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                background: t.text,
                borderRadius: "50%",
                display: "block",
              }}
              className="pulse"
            />
            <span
              style={{
                color: t.badgeText,
                fontSize: "11px",
                fontFamily: BODY,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Available for work
            </span>
          </div>

          {/* Name */}
          <div>
            <h1
              style={{
                fontFamily: HEADING,
                fontWeight: 200,
                textAlign: "left",
                fontSize: "clamp(44px,6.5vw,80px)",
                color: t.text,
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                margin: 0,
              }}
            >
              Masaid Fairus
              <br />
              Trimarsongko
            </h1>
          </div>

          <p
            style={{
              color: t.textMuted,
              fontSize: "15px",
              lineHeight: 1.75,
              maxWidth: "400px",
              margin: 0,
              fontFamily: BODY,
              textAlign: "left",
            }}
          >
            Backend Developer crafting modern, scalable web experiences.
            Passionate about clean code, great UX, and building products that
            matter.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <a
              href="#contact"
              style={{
                padding: "11px 26px",
                background: t.btnPrimBg,
                color: t.btnPrimText,
                fontSize: "12px",
                fontFamily: BODY,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                borderRadius: "2px",
                textDecoration: "none",
                transition: "background .2s",
                border: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = t.btnPrimHover)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = t.btnPrimBg)
              }
            >
              Get in Touch
            </a>
            <Link
              to="/about"
              style={{
                padding: "11px 26px",
                border: `1px solid ${t.btnSecBorder}`,
                color: t.btnSecText,
                fontSize: "12px",
                fontFamily: BODY,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                borderRadius: "2px",
                textDecoration: "none",
                transition: "all .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = t.text;
                e.currentTarget.style.color = t.btnSecHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = t.btnSecBorder;
                e.currentTarget.style.color = t.btnSecText;
              }}
            >
              View Work
            </Link>
          </div>

          {/* Socials */}
          <div style={{ display: "flex", gap: "18px", paddingTop: "4px" }}>
            {SOCIAL.map(({ href, label, d }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                style={{ color: t.textFaint, transition: "color .2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = t.text)}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = t.textFaint)
                }
              >
                <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
                  <path d={d} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: "28px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          color: t.scrollClr,
        }}
        className="bounce"
      >
        <span
          style={{
            fontSize: "10px",
            fontFamily: BODY,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
