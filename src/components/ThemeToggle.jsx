/* ─────────────────────────────────────────────
   ThemeToggle Component
   Props: dark (bool), onToggle (fn), t (theme object)
───────────────────────────────────────────── */
export default function ThemeToggle({ dark, onToggle, t }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle theme"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "7px",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
      }}
    >
      {/* Sun */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke={dark ? t.textFaint : t.text}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>

      {/* Track */}
      <div
        style={{
          position: "relative",
          width: "40px",
          height: "21px",
          borderRadius: "999px",
          background: t.toggleTrack,
          transition: "background 0.3s",
          border: `1px solid ${t.border}`,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "2px",
            left: dark ? "2px" : "19px",
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            background: t.toggleKnob,
            transition: "left 0.26s cubic-bezier(.4,0,.2,1)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
          }}
        />
      </div>

      {/* Moon */}
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke={dark ? t.text : t.textFaint}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}
