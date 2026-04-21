"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { content } from "@/content";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(249,248,246,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="serif font-bold text-xl" style={{ color: "var(--text)" }}>
          Raj <span style={{ color: "var(--red)" }}>Nandani</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium transition-colors duration-200 hover:text-[#C8001A]"
              style={{ color: "var(--muted)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${content.email}`}
            className="text-sm font-semibold px-5 py-2.5 text-white transition-colors duration-200 hover:bg-[#A00015]"
            style={{ background: "var(--red)" }}
          >
            Hire Me
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className="block w-5 h-px" style={{ background: "var(--text)" }} />
          <span className="block w-5 h-px" style={{ background: "var(--text)" }} />
          <span className="block w-5 h-px" style={{ background: "var(--text)" }} />
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden bg-white border-t px-6 py-5 flex flex-col gap-5"
          style={{ borderColor: "var(--border)" }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium"
              style={{ color: "var(--text)" }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
