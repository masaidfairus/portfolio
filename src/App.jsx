import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { T, HEADING, BODY } from "./constants/theme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

/* ─────────────────────────────────────────────
   Root App — Router + Persistent Layout
───────────────────────────────────────────── */
export default function App() {
  const [dark, setDark] = useState(true);
  const t = dark ? T.dark : T.light;

  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: "100vh",
          background: t.bg,
          transition: "background 0.3s, color 0.3s",
          paddingTop: "62px",
        }}
      >
        {/* Persistent Navbar */}
        <Navbar dark={dark} onToggle={() => setDark((d) => !d)} t={t} />

        {/* Sticky H1 Work in Progress Banner */}
        <h1
          style={{
            position: "sticky",
            top: "62px",
            zIndex: 45,
            margin: 0,
            background: t.navBg,
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderBottom: `1px solid ${t.border}`,
            textAlign: "center",
            padding: "10px 0",
            fontSize: "14px",
            fontFamily: HEADING,
            fontWeight: 400,
            fontStyle: "italic",
            letterSpacing: "0.02em",
            color: t.text,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            userSelect: "none",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              background: "#eab308",
              borderRadius: "50%",
              display: "inline-block",
            }}
            className="pulse"
          />
          Work in Progress
        </h1>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<HomePage t={t} />} />
          <Route path="/about" element={<AboutPage t={t} />} />
        </Routes>

        {/* Persistent Footer */}
        <Footer t={t} />
      </div>
    </BrowserRouter>
  );
}
