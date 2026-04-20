"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { content } from "@/content";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-32 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <p className="text-[#F40009] text-sm tracking-[0.3em] uppercase mb-3">About Me</p>
        <h2 className="text-4xl md:text-5xl font-black mb-12">
          The Story <span className="gradient-text">Behind the Brand</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-white/70 text-lg leading-relaxed mb-6">{content.summary}</p>
          <div className="flex flex-col gap-3">
            {[
              { label: "Location", value: content.location },
              { label: "Email", value: content.email },
              { label: "Phone", value: content.phone },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 items-center">
                <span className="text-[#F40009] text-xs tracking-widest uppercase w-20">{item.label}</span>
                <span className="text-white/60 text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="space-y-4"
        >
          <p className="text-white/50 text-xs tracking-widest uppercase mb-6">Education</p>
          {content.education.map((ed, i) => (
            <div key={i} className="glass rounded-2xl p-5 red-glow">
              <div className="text-[#F40009] text-xs mb-1">{ed.period}</div>
              <div className="font-bold text-white mb-1">{ed.degree}</div>
              <div className="text-white/50 text-sm mb-2">{ed.school}</div>
              <div className="text-white/40 text-xs italic">{ed.note}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
