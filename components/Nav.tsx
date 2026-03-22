"use client";

import { useTheme } from "./ThemeProvider";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 border-b" : "py-5"
      }`}
      style={{
        backgroundColor: scrolled ? "var(--bg)" : "transparent",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#"
          className="font-display text-sm italic tracking-tight"
          style={{ color: "var(--ink)" }}
        >
          y u<span style={{ color: "var(--accent2)" }}>.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-widest uppercase link-underline transition-opacity hover:opacity-100 opacity-60"
              style={{ color: "var(--ink)" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggle}
            className="font-mono text-xs tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity"
            style={{ color: "var(--ink)" }}
            aria-label="Toggle theme"
          >
            {theme === "light" ? "◐ Dark" : "◑ Light"}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden opacity-60 hover:opacity-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{ color: "var(--ink)" }}
          >
            <span className="font-mono text-xs">{menuOpen ? "✕" : "≡"}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pt-4 pb-6 border-t mt-3"
          style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block font-mono text-xs tracking-widest uppercase py-3 border-b opacity-60 hover:opacity-100 transition-opacity"
              style={{ color: "var(--ink)", borderColor: "var(--border)" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
