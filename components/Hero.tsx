"use client";
import { motion } from "framer-motion";
import { content } from "@/content";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Diagonal alt panel */}
      <div
        className="absolute top-0 right-0 h-full w-1/2 hidden md:block"
        style={{
          background: "var(--bg-alt)",
          clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />
      <div
        className="absolute top-20 right-20 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(200,0,26,0.07), transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 grid md:grid-cols-2 gap-16 items-center w-full">

        {/* Left */}
        <div>
          <motion.span
            className="label"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Marketing Portfolio
          </motion.span>

          <motion.h1
            className="serif mt-4 font-bold leading-tight"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", color: "var(--text)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {content.name.split(" ")[0]}
            <br />
            <span style={{ color: "var(--red)" }}>{content.name.split(" ")[1]}</span>
          </motion.h1>

          <motion.p
            className="mt-5 text-base leading-relaxed max-w-md"
            style={{ color: "var(--muted)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {content.tagline}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <a
              href="#work"
              className="px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#A00015]"
              style={{ background: "var(--red)" }}
            >
              View My Work
            </a>
            <a
              href={content.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-sm font-semibold bg-white border transition-colors hover:border-[#C8001A] hover:text-[#C8001A]"
              style={{ color: "var(--text)", borderColor: "var(--border)" }}
            >
              LinkedIn ↗
            </a>
          </motion.div>
        </div>

        {/* Right — Photo */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div
              className="w-96 h-[28rem] md:w-[28rem] md:h-[36rem] overflow-hidden"
              style={{ background: "var(--bg-alt)" }}
            >
              <img
                src={content.photo}
                alt={content.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.style.display = "none";
                  if (el.parentElement) {
                    el.parentElement.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:3.5rem;font-weight:700;color:#C8001A;">RN</div>`;
                  }
                }}
              />
            </div>
            {/* Offset red border */}
            <div
              className="absolute -bottom-3 -right-3 w-full h-full -z-10 border-2"
              style={{ borderColor: "var(--red)" }}
            />
            {/* Location tag — no emoji */}
            <div
              className="absolute -bottom-5 left-0 bg-white border px-3 py-1.5 shadow-sm flex items-center gap-2"
              style={{ borderColor: "var(--border)" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C8001A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span className="text-xs" style={{ color: "var(--muted)" }}>{content.location}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div
          className="w-px h-12 mx-auto"
          style={{ background: "linear-gradient(to bottom, var(--red), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
