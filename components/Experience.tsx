"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { content } from "@/content";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-32 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <p className="text-[#F40009] text-sm tracking-[0.3em] uppercase mb-3">Work Experience</p>
        <h2 className="text-4xl md:text-5xl font-black">
          Where I&apos;ve <span className="gradient-text">Made Impact</span>
        </h2>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#F40009] via-[#F5A623] to-transparent hidden md:block" />

        <div className="space-y-12">
          {content.experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="md:pl-10 relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] rounded-full bg-[#F40009] shadow-[0_0_12px_rgba(244,0,9,0.8)] hidden md:block" />

              <div className="glass rounded-2xl p-6 hover:border-[#F40009]/30 transition-all duration-300 group">
                <div className="flex flex-wrap gap-3 items-start justify-between mb-3">
                  <div>
                    <div className="font-bold text-white text-lg group-hover:text-[#F40009] transition-colors">{exp.role}</div>
                    <div className="text-white/50 text-sm">{exp.company}</div>
                  </div>
                  <span className="text-[#F40009] text-xs border border-[#F40009]/30 px-3 py-1 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-white/60 text-sm flex gap-3">
                      <span className="text-[#F40009] mt-1 shrink-0">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
