"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { content } from "@/content";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="label">Skills & Credentials</span>
          <h2 className="serif mt-3 text-4xl font-bold" style={{ color: "var(--text)" }}>
            Capabilities & Certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Skills pills */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ color: "var(--muted)" }}
            >
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {content.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="text-xs font-medium px-3 py-2 border cursor-default transition-all duration-200 hover:text-white hover:border-[#C8001A]"
                  style={{
                    background: "var(--bg-alt)",
                    borderColor: "var(--border)",
                    color: "var(--text)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--red)";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--bg-alt)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text)";
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ color: "var(--muted)" }}
            >
              Certifications
            </h3>
            <div className="space-y-3">
              {content.certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 border transition-colors hover:border-[#C8001A]"
                  style={{ background: "white", borderColor: "var(--border)" }}
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: "var(--red)" }}
                  />
                  <span className="text-sm" style={{ color: "var(--text)" }}>{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
