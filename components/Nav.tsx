"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { content } from "@/content";

const links = ["About", "Experience", "Projects", "Skills", "Contact"];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const bg = useTransform(scrollYProgress, [0, 0.05], ["rgba(10,10,10,0)", "rgba(10,10,10,0.95)"]);

  return (
    <motion.nav
      style={{ backgroundColor: bg }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-sm"
    >
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-white font-bold text-lg tracking-widest"
      >
        <span className="gradient-text">RN</span>
      </motion.span>
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="hidden md:flex gap-8"
      >
        {links.map((l) => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              className="text-white/60 hover:text-white text-sm tracking-wider transition-colors duration-200 hover:text-[#F40009]"
            >
              {l}
            </a>
          </li>
        ))}
      </motion.ul>
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        href={`mailto:${content.email}`}
        className="text-sm px-4 py-2 border border-[#F40009] text-[#F40009] rounded-full hover:bg-[#F40009] hover:text-white transition-all duration-300"
      >
        Hire Me
      </motion.a>
    </motion.nav>
  );
}
