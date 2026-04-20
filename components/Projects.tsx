"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { content } from "@/content";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-32 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <p className="text-[#F40009] text-sm tracking-[0.3em] uppercase mb-3">Projects</p>
        <h2 className="text-4xl md:text-5xl font-black">
          Campaigns That <span className="gradient-text">Delivered</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {content.projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass rounded-2xl p-6 flex flex-col gap-4 cursor-default group red-glow hover:shadow-[0_0_60px_rgba(244,0,9,0.25)] transition-all duration-300"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F40009]/10 flex items-center justify-center mb-4">
                <span className="text-[#F40009] text-xl">
                  {i === 0 ? "📊" : i === 1 ? "🏆" : "🔍"}
                </span>
              </div>
              <div className="font-bold text-white text-base leading-snug group-hover:text-[#F40009] transition-colors mb-1">
                {proj.title}
              </div>
              <div className="text-white/40 text-xs">{proj.org}</div>
            </div>
            <ul className="space-y-2 mt-auto">
              {proj.bullets.map((b, j) => (
                <li key={j} className="text-white/55 text-xs leading-relaxed flex gap-2">
                  <span className="text-[#F5A623] shrink-0 mt-0.5">▸</span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
