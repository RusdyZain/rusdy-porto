import React from "react";
import { useParallax } from "../hooks/useParallax";

const floatingBlobs = [
  {
    id: "blob-1",
    size: 420,
    top: "5%",
    left: "8%",
    colors: "from-blue-600/30 via-cyan-500/20 to-transparent",
    blur: "blur-3xl",
    speed: -0.05,
  },
  {
    id: "blob-2",
    size: 360,
    top: "65%",
    left: "60%",
    colors: "from-emerald-500/25 via-teal-500/10 to-transparent",
    blur: "blur-2xl",
    speed: 0.08,
  },
  {
    id: "blob-3",
    size: 280,
    top: "30%",
    left: "70%",
    colors: "from-purple-500/20 via-fuchsia-500/10 to-transparent",
    blur: "blur-[120px]",
    speed: -0.02,
  },
];

const orbitRings = [
  { id: "orbit-1", size: 680, border: "border-cyan-500/10", speed: 0.04 },
  { id: "orbit-2", size: 520, border: "border-blue-500/10", speed: -0.03 },
];

function useSparkles(count = 25) {
  return React.useMemo(
    () =>
      Array.from({ length: count }, (_, index) => ({
        id: `sparkle-${index}`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 4 + 2,
        speed: Math.random() * 0.2 + 0.05,
        delay: Math.random() * 2,
      })),
    [count],
  );
}

const ParallaxScene = () => {
  const glowShift = useParallax(-0.03);
  const orbitShift = useParallax(0.05);
  const sparkleShift = useParallax(0.12);
  const sparkles = useSparkles(32);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Floating blobs */}
      {floatingBlobs.map((blob) => (
        <div
          key={blob.id}
          className={`absolute rounded-full bg-gradient-to-br ${blob.colors} ${blob.blur}`}
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            left: blob.left,
            transform: `translate3d(0, ${glowShift * blob.speed * 100}px, 0)`,
          }}
        ></div>
      ))}

      {/* Orbit rings */}
      {orbitRings.map((orbit) => (
        <div
          key={orbit.id}
          className={`absolute rounded-full border ${orbit.border}`}
          style={{
            width: orbit.size,
            height: orbit.size,
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) translate3d(0, ${orbitShift * orbit.speed * 100}px, 0)`,
          }}
        ></div>
      ))}

      {/* Light sweep */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-40"
        style={{
          transform: `translate3d(0, ${glowShift * -40}px, 0) rotate(-5deg)`,
        }}
      ></div>

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute rounded-full bg-gradient-to-br from-cyan-200/70 to-transparent shadow-[0_0_12px_rgba(6,182,212,0.4)]"
          style={{
            width: sparkle.size,
            height: sparkle.size,
            top: sparkle.top,
            left: sparkle.left,
            transform: `translate3d(0, ${sparkleShift * sparkle.speed * 100}px, 0)`,
            animation: `pulseSparkle 3s ease-in-out ${sparkle.delay}s infinite`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default ParallaxScene;
