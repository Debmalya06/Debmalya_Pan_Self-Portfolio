import React, { useEffect, useRef, useState } from "react";

const NUM_TRAILS = 12;

function Cursor() {
  const trails = useRef([]);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const flicker = () => setTick(t => t + 1);
    const interval = setInterval(flicker, 28);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const positions = new Array(NUM_TRAILS).fill({ x: 0, y: 0 });
    const handleMouseMove = (e) => {
      positions.unshift({ x: e.clientX, y: e.clientY });
      positions.pop();
      positions.forEach((pos, i) => {
        const el = trails.current[i];
        if (el) {
          el.style.left = `${pos.x}px`;
          el.style.top = `${pos.y}px`;
        }
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // SVG star path generator (5-pointed star)
  const starPath = "M10 2 L12.35 7.58 L18.22 8.09 L13.91 12.13 L15.54 17.78 L10 14.4 L4.46 17.78 L6.09 12.13 L1.78 8.09 L7.65 7.58 Z";

  return (
    <>
      {Array.from({ length: NUM_TRAILS }).map((_, i) => {
        const progress = i / NUM_TRAILS;
        const scale = 1 + Math.sin((tick + i * 8) * 0.18) * 0.11 + (1 - progress) * 0.18;
        const alpha = 0.6 - progress * 0.48;
        let fill = "url(#watercolorGradientFront)";
        if (progress > 0.62) fill = "url(#watercolorGradientBack)";

        // Each trail uses an SVG star
        return (
          <span
            key={i}
            ref={el => trails.current[i] = el}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: `${21 - progress * 10}px`,
              height: `${21 - progress * 10}px`,
              pointerEvents: "none",
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity: alpha,
              filter: `blur(${0.5 + progress * 4.5}px) brightness(${1.2 - progress * 0.22})`,
              zIndex: 9999,
              display: "inline-block",
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block" }}
            >
              <defs>
                <radialGradient id="watercolorGradientFront" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#bae6fd" />
                  <stop offset="70%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#0ea5e9" />
                </radialGradient>
                <radialGradient id="watercolorGradientBack" cx="50%" cy="50%" r="50%">
                  <stop offset="20%" stopColor="#7dd3fc" />
                  <stop offset="80%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
              <path
                d={starPath}
                fill={fill}
                filter="url(#starBlur)"
                opacity={1}
              />
            </svg>
          </span>
        );
      })}
    </>
  );
}

export default Cursor;
