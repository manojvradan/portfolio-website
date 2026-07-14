import type { CSSProperties, ReactNode } from "react";
import { hoverCursor } from "./CustomCursor";
import { RELEASES, SPOTIFY_URL, TOP_TRACKS } from "./data";

export const SANS = "var(--font-space-grotesk), system-ui, sans-serif";
export const MONO = "var(--font-jetbrains-mono), monospace";

export function Equalizer({
  size = "md",
  color = "#eafff1",
}: {
  size?: "sm" | "md" | "lg";
  color?: string;
}) {
  const heights = { sm: 14, md: 22, lg: 36 } as const;
  const widths = { sm: 2.5, md: 3, lg: 4 } as const;
  const delays = [0, 0.2, 0.4, 0.12];
  const bars = size === "sm" ? 3 : 4;
  return (
    <span
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: size === "sm" ? 2 : 2.5,
        height: heights[size],
      }}
    >
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          style={{
            width: widths[size],
            height: heights[size],
            background: color,
            borderRadius: 2,
            transformOrigin: "bottom",
            animation: "eq .7s ease-in-out infinite",
            animationDelay: `${delays[i]}s`,
          }}
        />
      ))}
    </span>
  );
}

export function AvailableDot() {
  return (
    <span
      style={{
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: "#1db954",
        boxShadow: "0 0 0 4px rgba(29,185,84,.16)",
      }}
    />
  );
}

export function NowPlayingMini({ dark }: { dark: boolean }) {
  return (
    <div
      {...hoverCursor}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        border: `1px solid ${dark ? "#2a2c26" : "#e6e6e2"}`,
        background: dark ? "#171814" : "#fff",
        borderRadius: 14,
        padding: "10px 17px 10px 10px",
        cursor: "pointer",
        boxShadow: dark ? undefined : "0 4px 20px -8px rgba(0,0,0,.12)",
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 9,
          background: "linear-gradient(135deg,#1db954,#0a5c2b)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          flex: "none",
        }}
      >
        <Equalizer size="md" />
      </div>
      <div>
        <div style={{ font: `500 9px ${MONO}`, color: "#1db954", letterSpacing: ".12em" }}>
          NOW PLAYING
        </div>
        <div
          style={{
            font: `600 14px ${SANS}`,
            marginTop: 1,
            color: dark ? "#f4f5f1" : undefined,
          }}
        >
          Afterglow
        </div>
        <div style={{ font: `400 11px ${SANS}`, color: dark ? "#8a8c86" : "#9a9a96" }}>
          Vrad.N
        </div>
      </div>
    </div>
  );
}

export function NowPlayingCard({ dark }: { dark: boolean }) {
  return (
    <div
      style={{
        background: dark ? "#151610" : "#101110",
        border: dark ? "1px solid #26271f" : undefined,
        borderRadius: 16,
        padding: 26,
        color: "#eef0ee",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: 260,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ font: `500 10px ${MONO}`, color: "#1db954", letterSpacing: ".14em" }}>
          ● LIVE ON SPOTIFY
        </span>
        <span style={{ font: `400 11px ${MONO}`, color: "#6f7169" }}>@Vrad.N</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 76,
            height: 76,
            borderRadius: 12,
            background: "linear-gradient(135deg,#1db954,#08491f)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            flex: "none",
          }}
        >
          <Equalizer size="lg" />
        </div>
        <div>
          <div style={{ font: `500 9px ${MONO}`, color: "#1db954", letterSpacing: ".14em" }}>
            NOW PLAYING
          </div>
          <div style={{ font: `600 24px/1.1 ${SANS}`, marginTop: 4 }}>Afterglow</div>
          <div style={{ font: `400 13px ${SANS}`, color: "#9a9c98", marginTop: 2 }}>
            Vrad.N · Single
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            height: 4,
            borderRadius: 2,
            background: "#2a2c2a",
            overflow: "hidden",
          }}
        >
          <div style={{ width: "42%", height: "100%", background: "#1db954" }} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            font: `400 10px ${MONO}`,
            color: "#6f7169",
            marginTop: 7,
          }}
        >
          <span>1:24</span>
          <span>3:18</span>
        </div>
      </div>
    </div>
  );
}

export function TopTracksCard({ dark }: { dark: boolean }) {
  return (
    <div
      style={{
        border: `1px solid ${dark ? "#26271f" : "#e6e6e2"}`,
        borderRadius: 16,
        padding: "24px 26px",
        background: dark ? "#151610" : "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          font: `500 11px ${MONO}`,
          color: dark ? "#6f7169" : "#9a9a96",
          letterSpacing: ".12em",
          marginBottom: 14,
        }}
      >
        TOP TRACKS — VRAD.N
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2, flex: 1 }}>
        {TOP_TRACKS.map((t) => (
          <div
            key={t.n}
            {...hoverCursor}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "9px 0",
              borderBottom: `1px solid ${dark ? "#1c1d19" : "#f0efeb"}`,
              cursor: "pointer",
            }}
          >
            <span
              style={{
                font: `400 12px ${MONO}`,
                color: dark ? "#4d4f4a" : "#c4c4be",
                width: 16,
              }}
            >
              {t.n}
            </span>
            <span
              style={{
                font: `600 15px ${SANS}`,
                flex: 1,
                color: dark ? "#f4f5f1" : undefined,
              }}
            >
              {t.title}
            </span>
            <span style={{ font: `400 12px ${MONO}`, color: dark ? "#6f7169" : "#9a9a96" }}>
              {t.time}
            </span>
          </div>
        ))}
      </div>
      <a
        href={SPOTIFY_URL}
        target="_blank"
        rel="noopener noreferrer"
        {...hoverCursor}
        style={{
          marginTop: 16,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 9,
          background: "#1db954",
          color: dark ? "#06210f" : "#fff",
          borderRadius: 24,
          padding: 11,
          font: `600 13px ${SANS}`,
        }}
      >
        Listen on Spotify →
      </a>
    </div>
  );
}

export function ReleasesList() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {RELEASES.map((r, i) => (
        <div
          key={r.title}
          {...hoverCursor}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            padding: "12px 0",
            borderBottom: i < RELEASES.length - 1 ? "1px solid #1c1d19" : undefined,
            cursor: "pointer",
          }}
        >
          {r.playing ? (
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 9,
                background: "linear-gradient(135deg,#1db954,#0a5c2b)",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                flex: "none",
              }}
            >
              <Equalizer size="md" />
            </div>
          ) : (
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 9,
                background:
                  "repeating-linear-gradient(45deg,#1a1b17,#1a1b17 8px,#202117 8px,#202117 16px)",
                flex: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "11px solid #6f7169",
                  borderTop: "7px solid transparent",
                  borderBottom: "7px solid transparent",
                  marginLeft: 3,
                }}
              />
            </div>
          )}
          <div style={{ flex: 1 }}>
            <div style={{ font: `600 17px ${SANS}`, color: "#f4f5f1" }}>{r.title}</div>
            <div style={{ font: `400 12px ${MONO}`, color: "#6f7169", marginTop: 2 }}>
              {r.meta}
            </div>
          </div>
          {r.playing && (
            <span style={{ font: `500 10px ${MONO}`, color: "#1db954", letterSpacing: ".1em" }}>
              PLAYING
            </span>
          )}
          <span style={{ font: `400 13px ${MONO}`, color: "#8a8c86" }}>{r.time}</span>
        </div>
      ))}
    </div>
  );
}

export function SectionLabel({
  children,
  dark,
  style,
}: {
  children: ReactNode;
  dark?: boolean;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        font: `500 10px ${MONO}`,
        letterSpacing: ".12em",
        color: dark ? "#6f7169" : "#9a9a96",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
