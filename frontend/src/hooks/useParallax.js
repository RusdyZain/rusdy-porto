import { useEffect, useState } from "react";

/**
 * Returns a scroll-based offset that can be used to create parallax transforms.
 * The returned value is memoized via React state updates throttled through rAF
 * to avoid causing layout thrash during scroll.
 *
 * @param {number} speed - Multiplier applied to the window scroll position.
 */
export function useParallax(speed = 0.2) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrame;

    const updateOffset = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      animationFrame = window.requestAnimationFrame(() => {
        setOffset(scrollY * speed);
      });
    };

    window.addEventListener("scroll", updateOffset, { passive: true });
    updateOffset();

    return () => {
      window.removeEventListener("scroll", updateOffset);
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [speed]);

  return offset;
}
