"use client";

import { useEffect, useRef } from "react";

export const hoverCursor = {
  onMouseEnter: () => {
    document.getElementById("cursor-ring")?.classList.add("cursor-ring--active");
  },
  onMouseLeave: () => {
    document.getElementById("cursor-ring")?.classList.remove("cursor-ring--active");
  },
};

export default function CustomCursor({ variant }: { variant: "dev" | "music" }) {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;

    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0,
      seen = false,
      raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      seen = true;
    };
    window.addEventListener("mousemove", onMove);

    const loop = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      ring.style.left = `${cx}px`;
      ring.style.top = `${cy}px`;
      ring.style.opacity = seen ? "1" : "0";
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      id="cursor-ring"
      ref={ringRef}
      className="cursor-ring"
      style={{ borderColor: variant === "music" ? "#f2f3f0" : "#141414" }}
    />
  );
}
