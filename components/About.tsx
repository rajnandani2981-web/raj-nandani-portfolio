"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { content } from "@/content";

const MapPin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const Mail = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const Phone = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="label">About Me</span>
          <h2 className="serif mt-3 text-4xl font-bold" style={{ color: "var(--text)" }}>
            The Story Behind the Strategy
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Left — Bio & contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              {content.summary}
            </p>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm" style={{ color: "var(--muted)" }}>
                <span style={{ color: "var(--red)" }}><MapPin /></span>
                {content.location}
              </div>
              <div className="flex items-center gap-3 text-sm" style={{ color: "var(--muted)" }}>
                <span style={{ color: "var(--red)" }}><Mail /></span>
                <a href={`mailto:${content.email}`} className="hover:text-[#C8001A] transition-colors">
                  {content.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm" style={{ color: "var(--muted)" }}>
                <span style={{ color: "var(--red)" }}><Phone /></span>
                {content.phone}
              </div>
            </div>
          </motion.div>

          {/* Right — Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ color: "var(--muted)" }}
            >
              Education
            </h3>
            {content.education.map((ed, i) => (
              <div
                key={i}
                className="border-l-2 pl-5 py-1"
                style={{ borderColor: "var(--red)" }}
              >
                <div className="text-xs font-medium" style={{ color: "var(--red)" }}>{ed.period}</div>
                <div className="text-sm font-semibold mt-1" style={{ color: "var(--text)" }}>{ed.degree}</div>
                <div className="text-sm" style={{ color: "var(--muted)" }}>{ed.school}</div>
                {ed.note && (
                  <div className="text-xs italic mt-1" style={{ color: "var(--muted)" }}>{ed.note}</div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
