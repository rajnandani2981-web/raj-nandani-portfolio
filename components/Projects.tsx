"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { content } from "@/content";

const icons = ["◈", "◉", "◎"];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="label">Academic Projects</span>
          <h2 className="serif mt-3 text-4xl font-bold" style={{ color: "var(--text)" }}>
            Strategic Marketing Work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {content.projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border p-6 group transition-all duration-300 hover:border-[#C8001A] hover:shadow-lg"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="text-xl mb-4 font-bold"
                style={{ color: "var(--red)" }}
              >
                {icons[i]}
              </div>
              <h3
                className="text-sm font-semibold leading-snug group-hover:text-[#C8001A] transition-colors"
                style={{ color: "var(--text)" }}
              >
                {proj.title}
              </h3>
              <p className="text-xs font-medium mt-2" style={{ color: "var(--red)" }}>{proj.org}</p>
              <ul className="mt-4 space-y-2">
                {proj.bullets.map((b, j) => (
                  <li key={j} className="text-xs flex gap-2" style={{ color: "var(--muted)" }}>
                    <span className="flex-shrink-0" style={{ color: "var(--red)" }}>·</span>
                    {b}
                  </li>
                ))}
              </ul>
              {proj.link && (
                <a
                  href={proj.link}
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
