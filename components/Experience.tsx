"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { content } from "@/content";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="label">Experience</span>
          <h2 className="serif mt-3 text-4xl font-bold" style={{ color: "var(--text)" }}>
            Where I&apos;ve Made an Impact
          </h2>
        </motion.div>

        <div className="space-y-5">
          {content.experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border p-8 group transition-all duration-300 hover:border-[#C8001A]"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <h3
                    className="text-base font-semibold group-hover:text-[#C8001A] transition-colors"
                    style={{ color: "var(--text)" }}
                  >
                    {exp.role}
                  </h3>
                  <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>{exp.company}</p>
                </div>
                <span
                  className="text-xs font-medium px-3 py-1 whitespace-nowrap border"
                  style={{ color: "var(--red)", background: "#FFF5F5", borderColor: "#FFD0D0" }}
                >
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-sm flex gap-3" style={{ color: "var(--muted)" }}>
                    <span className="flex-shrink-0 mt-0.5" style={{ color: "var(--red)" }}>—</span>
                    {b}
                  </li>
                ))}
              </ul>
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 text-xs font-semibold border px-3 py-1.5 transition-colors duration-200 hover:bg-[#C8001A] hover:text-white hover:border-[#C8001A]"
                  style={{ color: "var(--red)", borderColor: "var(--red)" }}
                >
                  View Case Study ↗
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
