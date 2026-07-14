"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  distance = 20,
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);

    const fallback = setTimeout(() => setVisible(true), 1600);
    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : `translateY(${distance}px)`,
        transition: `opacity ${duration}s cubic-bezier(.2,.7,.2,1) ${delay}s, transform ${duration}s cubic-bezier(.2,.7,.2,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
