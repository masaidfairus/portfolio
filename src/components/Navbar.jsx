import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { HEADING, BODY, NAV_LINKS } from "../constants/theme";

/* ─────────────────────────────────────────────
   Navbar Component
   Props: dark (bool), onToggle (fn), t (theme object)
───────────────────────────────────────────── */
export default function Navbar({ dark, onToggle, t }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLink = {
    fontSize: "13px",
    color: t.textMuted,
    textDecoration: "none",
    fontFamily: BODY,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    transition: "color .2s",
  };

  const isActive = (to) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: t.navBg,
        backdropFilter: "blur(16px)",
        borderBottom: `1px solid ${t.border}`,
        fontFamily: BODY,
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 28px",
          height: "62px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{ textDecoration: "none" }}
        >
          <span
            style={{
              fontFamily: HEADING,
              fontWeight: 400,
              fontSize: "20px",
              color: t.text,
              letterSpacing: "-0.01em",
              fontStyle: "italic",
            }}
          >
            Masaid Fairus
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          style={{ display: "flex", alignItems: "center", gap: "36px" }}
          className="hide-mobile"
        >
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              style={{
                ...navLink,
                color: isActive(to) ? t.text : t.textMuted,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = t.text)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = isActive(to) ? t.text : t.textMuted)
              }
            >
              {label}
            </Link>
          ))}
          <div style={{ width: "1px", height: "18px", background: t.border }} />
          <ThemeToggle dark={dark} onToggle={onToggle} t={t} />
        </nav>

        {/* Mobile controls */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "14px" }}
          className="show-mobile"
        >
          <ThemeToggle dark={dark} onToggle={onToggle} t={t} />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: t.textMuted,
              padding: 0,
            }}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div
          style={{
            background: t.bg,
            borderTop: `1px solid ${t.border}`,
            padding: "20px 28px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={() => setOpen(false)}
              style={{
                ...navLink,
                fontSize: "14px",
                color: isActive(to) ? t.text : t.textMuted,
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
