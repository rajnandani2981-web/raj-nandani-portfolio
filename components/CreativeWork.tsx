"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { creativeWork } from "@/content";

export default function CreativeWork() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" ref={ref} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="label">Creative Work</span>
          <h2 className="serif mt-3 text-4xl font-bold" style={{ color: "var(--text)" }}>
            Design & Campaign Portfolio
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm mb-12 max-w-lg"
          style={{ color: "var(--muted)" }}
        >
          Marketing posters and campaign visuals crafted for food, fashion, and lifestyle brands.
          <br />
          <span className="text-xs italic">
            Tip: hover each poster for details.
          </span>
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {creativeWork.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden cursor-pointer"
            >
              {/* Poster image with gradient fallback */}
              <div
                className="aspect-[3/4] relative overflow-hidden"
                style={{
                  background: `linear-gradient(145deg, ${item.colors[0]}, ${item.colors[1]})`,
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "#FF6B6B" }}
                  >
                    {item.category}
                  </span>
                  <h3 className="text-white font-semibold text-sm mt-1">{item.title}</h3>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-3 pb-1">
                <p className="text-xs font-medium" style={{ color: "var(--red)" }}>{item.category}</p>
                <h3 className="text-sm font-semibold mt-0.5" style={{ color: "var(--text)" }}>{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
