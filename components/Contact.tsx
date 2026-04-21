"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { content } from "@/content";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-24" style={{ background: "#1A1A1A" }}>
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="label" style={{ color: "var(--red)" }}>Get In Touch</span>
          <h2 className="serif mt-3 text-4xl font-bold text-white">
            Let&apos;s Build Something{" "}
            <span style={{ color: "var(--red)" }}>Worth Remembering.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed" style={{ color: "#9A9A9A" }}>
            Open to marketing internships, brand collaborations, and creative projects.
            Let&apos;s connect.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${content.email}`}
              className="px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#A00015]"
              style={{ background: "var(--red)" }}
            >
              Send an Email
            </a>
            <a
              href={content.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 text-sm font-semibold text-white border transition-colors hover:border-[#C8001A] hover:text-[#C8001A]"
              style={{ borderColor: "rgba(255,255,255,0.2)" }}
            >
              Connect on LinkedIn ↗
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 pt-8 border-t flex flex-wrap justify-between items-center gap-4"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs" style={{ color: "#555" }}>© 2026 {content.name}. All rights reserved.</p>
          <p className="text-xs" style={{ color: "#555" }}>{content.location}</p>
        </motion.div>
      </div>
    </section>
  );
}
