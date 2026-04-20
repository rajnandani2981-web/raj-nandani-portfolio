"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { content } from "@/content";
import Image from "next/image";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene3D />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] z-10" />

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        {/* Photo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="mx-auto mb-8 relative"
          style={{ width: 140, height: 140 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F40009] to-[#F5A623] p-[3px]">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#111]">
              <Image
                src={content.photo}
                alt={content.name}
                width={140}
                height={140}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Placeholder initials shown when no photo */}
              <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white/40 rounded-full">
                RN
              </div>
            </div>
          </div>
          {/* Pulsing ring */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute inset-[-8px] rounded-full border-2 border-[#F40009]"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-[#F40009] text-sm tracking-[0.3em] uppercase mb-3"
        >
          Marketing Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-7xl font-black mb-4 leading-none"
        >
          <span className="gradient-text">{content.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-white/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {content.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#experience"
            className="px-8 py-3 bg-[#F40009] text-white font-semibold rounded-full hover:bg-[#cc0007] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(244,0,9,0.5)]"
          >
            View My Work
          </a>
          <a
            href={content.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-white/20 text-white rounded-full hover:border-white/60 transition-all duration-300 hover:scale-105"
          >
            LinkedIn
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {[
            { num: "30%+", label: "Attendance Growth" },
            { num: "40%", label: "Campaign Reach ↑" },
            { num: "50+", label: "Assets Created" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-black gradient-text">{s.num}</div>
              <div className="text-white/40 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#F40009] to-transparent" />
      </motion.div>
    </section>
  );
}
