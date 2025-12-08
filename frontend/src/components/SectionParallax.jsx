import React from "react";
import { useParallax } from "../hooks/useParallax";

const VARIANTS = {
  blue: {
    blobs: [
      {
        id: "blue-1",
        size: 420,
        top: "-12%",
        left: "8%",
        gradient: "from-blue-500/35 via-cyan-500/15 to-transparent",
        blur: "blur-3xl",
        speed: 1,
      },
      {
        id: "blue-2",
        size: 320,
        top: "65%",
        left: "65%",
        gradient: "from-sky-500/25 via-teal-400/15 to-transparent",
        blur: "blur-2xl",
        speed: -0.6,
      },
      {
        id: "blue-3",
        size: 260,
        top: "25%",
        left: "75%",
        gradient: "from-indigo-500/30 via-blue-500/15 to-transparent",
        blur: "blur-[120px]",
        speed: 0.4,
      },
    ],
    beamGradient: "from-transparent via-blue-500/10 to-transparent",
    particleColor: "rgba(59,130,246,0.18)",
  },
  teal: {
    blobs: [
      {
        id: "teal-1",
        size: 360,
        top: "-8%",
        left: "60%",
        gradient: "from-emerald-400/35 via-teal-500/10 to-transparent",
        blur: "blur-3xl",
        speed: 0.8,
      },
      {
        id: "teal-2",
        size: 300,
        top: "55%",
        left: "5%",
        gradient: "from-cyan-400/30 via-lime-400/10 to-transparent",
        blur: "blur-2xl",
        speed: -0.5,
      },
      {
        id: "teal-3",
        size: 200,
        top: "30%",
        left: "35%",
        gradient: "from-emerald-500/20 via-cyan-500/10 to-transparent",
        blur: "blur-3xl",
        speed: 0.6,
      },
    ],
    beamGradient: "from-transparent via-emerald-400/10 to-transparent",
    particleColor: "rgba(16,185,129,0.18)",
  },
  purple: {
    blobs: [
      {
        id: "purple-1",
        size: 420,
        top: "-10%",
        left: "15%",
        gradient: "from-purple-500/35 via-fuchsia-500/15 to-transparent",
        blur: "blur-3xl",
        speed: 0.9,
      },
      {
        id: "purple-2",
        size: 320,
        top: "60%",
        left: "70%",
        gradient: "from-pink-500/25 via-violet-500/10 to-transparent",
        blur: "blur-2xl",
        speed: -0.7,
      },
      {
        id: "purple-3",
        size: 260,
        top: "35%",
        left: "50%",
        gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
        blur: "blur-[120px]",
        speed: 0.5,
      },
    ],
    beamGradient: "from-transparent via-fuchsia-500/10 to-transparent",
    particleColor: "rgba(168,85,247,0.18)",
  },
  amber: {
    blobs: [
      {
        id: "amber-1",
        size: 380,
        top: "-8%",
        left: "5%",
        gradient: "from-amber-500/35 via-orange-500/15 to-transparent",
        blur: "blur-3xl",
        speed: 0.7,
      },
      {
        id: "amber-2",
        size: 300,
        top: "65%",
        left: "60%",
        gradient: "from-rose-500/25 via-amber-400/15 to-transparent",
        blur: "blur-2xl",
        speed: -0.6,
      },
      {
        id: "amber-3",
        size: 240,
        top: "30%",
        left: "75%",
        gradient: "from-yellow-400/25 via-amber-500/10 to-transparent",
        blur: "blur-[120px]",
        speed: 0.4,
      },
    ],
    beamGradient: "from-transparent via-amber-500/10 to-transparent",
    particleColor: "rgba(251,191,36,0.2)",
  },
};

const SectionParallax = ({ variant = "blue", className = "" }) => {
  const config = VARIANTS[variant] || VARIANTS.blue;
  const slow = useParallax(0.03);
  const fast = useParallax(-0.04);
  const particles = useParallax(0.06);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {config.blobs.map((blob) => (
        <div
          key={blob.id}
          className={`absolute rounded-full bg-gradient-to-br ${blob.gradient} ${blob.blur}`}
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            left: blob.left,
            transform: `translate3d(0, ${slow * blob.speed * 100}px, 0)`,
          }}
        ></div>
      ))}

      <div
        className={`absolute inset-x-0 top-1/2 h-1/2 bg-gradient-to-b ${config.beamGradient} blur-3xl`}
        style={{
          transform: `translate3d(0, ${fast * 40}px, 0)`,
        }}
      ></div>

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, ${config.particleColor} 0%, transparent 40%),
            radial-gradient(circle at 70% 15%, ${config.particleColor} 0%, transparent 45%),
            radial-gradient(circle at 60% 70%, ${config.particleColor} 0%, transparent 50%)
          `,
          transform: `translate3d(0, ${particles * 30}px, 0)`,
        }}
      ></div>
    </div>
  );
};

export default SectionParallax;
