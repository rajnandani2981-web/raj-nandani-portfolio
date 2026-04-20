"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { content } from "@/content";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-32 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <p className="text-[#F40009] text-sm tracking-[0.3em] uppercase mb-3">Toolkit</p>
        <h2 className="text-4xl md:text-5xl font-black">
          Skills & <span className="gradient-text">Expertise</span>
        </h2>
      </motion.div>

      <div className="flex flex-wrap gap-3 mb-20">
        {content.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ scale: 1.1, backgroundColor: "#F40009", color: "#fff" }}
            className="px-4 py-2 glass rounded-full text-sm text-white/70 cursor-default transition-all duration-300 border border-transparent hover:border-[#F40009]"
          >
            {skill}
          </motion.span>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <p className="text-white/50 text-xs tracking-widest uppercase mb-6">Certifications</p>
        <div className="grid md:grid-cols-2 gap-4">
          {content.certifications.map((cert, i) => (
            <div key={i} className="glass rounded-xl px-5 py-4 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#F40009] shrink-0" />
              <span className="text-white/70 text-sm">{cert}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
