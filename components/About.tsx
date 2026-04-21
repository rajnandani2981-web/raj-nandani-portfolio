"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { content } from "@/content";

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
                <span style={{ color: "var(--red)" }}>📍</span>
                {content.location}
              </div>
              <div className="flex items-center gap-3 text-sm" style={{ color: "var(--muted)" }}>
                <span style={{ color: "var(--red)" }}>✉</span>
                <a href={`mailto:${content.email}`} className="hover:text-[#C8001A] transition-colors">
                  {content.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm" style={{ color: "var(--muted)" }}>
                <span style={{ color: "var(--red)" }}>📞</span>
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
