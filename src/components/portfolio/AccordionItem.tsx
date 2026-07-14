import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { hoverCursor } from "./CustomCursor";
import { MONO, SANS } from "./SharedBits";

export default function AccordionItem({
  index,
  open,
  onToggle,
  number,
  title,
  meta,
  dark,
  borderBottom,
  children,
}: {
  index: number;
  open: number | null;
  onToggle: (i: number) => void;
  number: string;
  title: string;
  meta: ReactNode;
  dark?: boolean;
  borderBottom?: boolean;
  children: ReactNode;
}) {
  const isOpen = open === index;
  const lineColor = dark ? "#26271f" : "#e6e6e2";

  return (
    <Reveal
      style={{
        borderTop: `1px solid ${lineColor}`,
        borderBottom: borderBottom ? `1px solid ${lineColor}` : undefined,
      }}
    >
      <div
        {...hoverCursor}
        onClick={() => onToggle(index)}
        onMouseEnter={(e) => {
          hoverCursor.onMouseEnter();
          e.currentTarget.style.paddingLeft = "16px";
        }}
        onMouseLeave={(e) => {
          hoverCursor.onMouseLeave();
          e.currentTarget.style.paddingLeft = "6px";
        }}
        style={{
          cursor: "pointer",
          padding: "28px 6px",
          display: "flex",
          alignItems: "center",
          gap: 22,
          transition: "padding-left .25s ease",
        }}
      >
        <span style={{ font: `400 13px ${MONO}`, color: dark ? "#6f7169" : "#9a9a96", width: 26 }}>
          {number}
        </span>
        <span
          style={{
            font: `600 clamp(32px,5.4vw,56px)/1 ${SANS}`,
            letterSpacing: "-.03em",
            color: dark ? "#f4f5f1" : undefined,
          }}
        >
          {title}
        </span>
        <span
          style={{
            marginLeft: "auto",
            font: `400 13px ${MONO}`,
            color: dark ? "#6f7169" : "#9a9a96",
            display: "flex",
            alignItems: "center",
            gap: 9,
          }}
        >
          {meta}
        </span>
        <span
          style={{
            font: `300 32px ${SANS}`,
            width: 28,
            textAlign: "center",
            color: dark ? "#f4f5f1" : "#141414",
          }}
        >
          {isOpen ? "–" : "+"}
        </span>
      </div>
      <div
        style={{
          maxHeight: isOpen ? 2800 : 0,
          opacity: isOpen ? 1 : 0,
          overflow: "hidden",
          transition: "max-height .7s cubic-bezier(.4,0,.1,1), opacity .5s ease",
        }}
      >
        <div style={{ padding: "6px 6px 40px" }}>{children}</div>
      </div>
    </Reveal>
  );
}
