"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// Logo'daki IconGem ile aynı beş köşeli mücevher silüeti, marka tutarlılığı için.
const GEM_CLIP = "polygon(33% 17%, 67% 17%, 87.5% 42%, 50% 87.5%, 12.5% 42%)";

const FACETS = [
  { rotate: -60, z: -60, opacity: 0.14, scale: 0.92 },
  { rotate: -40, z: -35, opacity: 0.24, scale: 0.96 },
  { rotate: -20, z: -15, opacity: 0.4, scale: 0.99 },
  { rotate: 0, z: 0, opacity: 0.95, scale: 1 },
  { rotate: 20, z: -15, opacity: 0.4, scale: 0.99 },
  { rotate: 40, z: -35, opacity: 0.24, scale: 0.96 },
  { rotate: 60, z: -60, opacity: 0.14, scale: 0.92 },
];

export default function HeroVisual() {
  const stageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start end", "end start"],
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [-50, 310]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [6, -4, 6]);

  return (
    <div
      ref={stageRef}
      className="relative mx-auto"
      style={{
        width: "min(62vw, 300px)",
        aspectRatio: "3 / 4",
        perspective: "1400px",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-[-30%] rounded-full blur-[70px] opacity-40"
        style={{ background: "radial-gradient(closest-side, var(--gold-3), transparent 70%)" }}
      />

      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d", rotateY, rotateX }}
      >
        {FACETS.map((facet, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              clipPath: GEM_CLIP,
              transform: `rotateY(${facet.rotate}deg) translateZ(${facet.z}px) scale(${facet.scale})`,
              background: "var(--gold-gradient)",
              opacity: facet.opacity,
              mixBlendMode: "screen",
              border: "1px solid rgba(232, 200, 116, 0.35)",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
