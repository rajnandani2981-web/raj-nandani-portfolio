"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { content } from "@/content";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#F40009] text-sm tracking-[0.3em] uppercase mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Let&apos;s Create Something <span className="gradient-text">Iconic</span>
          </h2>
          <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto">
            Open to internship opportunities, collaborations, and conversations about marketing, brand strategy, and consumer insights.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={`mailto:${content.email}`}
            className="px-10 py-4 bg-[#F40009] text-white font-bold rounded-full hover:bg-[#cc0007] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(244,0,9,0.5)] text-lg"
          >
            Send an Email
          </a>
          <a
            href={content.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 border border-white/20 text-white rounded-full hover:border-white/60 transition-all duration-300 hover:scale-105 text-lg"
          >
            Connect on LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-24 pt-10 border-t border-white/10 text-white/20 text-sm"
        >
          © 2026 {content.name} · Built with passion for brands that matter
        </motion.div>
      </div>
    </section>
  );
}
