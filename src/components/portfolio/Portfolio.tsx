"use client";

import { useState, type CSSProperties } from "react";
import CustomCursor, { hoverCursor } from "./CustomCursor";
import Reveal from "./Reveal";
import AccordionItem from "./AccordionItem";
import PhotoSlot from "./PhotoSlot";
import {
  AvailableDot,
  Equalizer,
  MONO,
  NowPlayingCard,
  NowPlayingMini,
  ReleasesList,
  SANS,
  TopTracksCard,
} from "./SharedBits";
import { AWARDS, CITIES, EXPERIENCE, PROJECTS, SPOTIFY_URL, UPCOMING, type CityKey } from "./data";
import { FLIGHT_PATHS, MAP_VIEWBOX, WORLD_LAND_PATH } from "./worldMap";

type Persona = "dev" | "music";

function TopBar({ persona, onSwitch }: { persona: Persona; onSwitch: () => void }) {
  const music = persona === "music";
  const labelStyle = (active: boolean): CSSProperties => ({
    padding: "6px 13px",
    borderRadius: 15,
    font: `600 11px ${MONO}`,
    letterSpacing: ".06em",
    transition: "all .3s ease",
    ...(active
      ? { background: "#1db954", color: "#06210f" }
      : { color: music ? "#8a8c86" : "#9a9a96" }),
  });

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(12px)",
        transition: "background .5s ease, border-color .5s ease",
        background: music ? "rgba(15,16,14,.82)" : "rgba(251,251,250,.82)",
        borderBottom: `1px solid ${music ? "#26271f" : "#e6e6e2"}`,
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "12px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
          font: `500 11px ${MONO}`,
          letterSpacing: ".06em",
        }}
      >
        <span
          style={{
            color: music ? "#f4f5f1" : "#141414",
            fontWeight: 700,
            transition: "color .5s ease",
          }}
        >
          MANOJVRADAN
        </span>
        <span style={{ color: music ? "#8a8c86" : "#6e6e69", transition: "color .5s ease" }}>
          SYDNEY, AU · 2026
        </span>
        <div
          {...hoverCursor}
          onClick={onSwitch}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            border: "1px solid rgba(128,128,128,.32)",
            borderRadius: 19,
            padding: 3,
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          <span style={labelStyle(!music)}>Dev</span>
          <span style={labelStyle(music)}>Vrad.N</span>
        </div>
      </div>
    </div>
  );
}

function DevHero() {
  return (
    <section style={{ maxWidth: 1080, margin: "0 auto", padding: "104px 32px 76px" }}>
      <Reveal duration={0.8}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 9,
            font: `500 11px ${MONO}`,
            letterSpacing: ".16em",
            color: "#1db954",
            marginBottom: 26,
          }}
        >
          <AvailableDot />
          TWO TAB VRIDDY
        </div>
        <h1 style={{ font: `600 clamp(52px,9.5vw,118px)/0.9 ${SANS}`, letterSpacing: "-.045em", margin: 0 }}>
          Code,
          <br />
          carefully.
          <br />
          <span style={{ color: "#c4c4be" }}>Music, too.</span>
        </h1>
      </Reveal>
      <Reveal
        delay={0.12}
        duration={0.8}
        style={{
          marginTop: 46,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 34,
          flexWrap: "wrap",
        }}
      >
        <p style={{ maxWidth: 440, font: `400 16px/1.62 ${SANS}`, color: "#4a4a45", margin: 0 }}>
          I&apos;m Manojvradan — a software engineer who ships clean, considered products, and an
          artist who writes &amp; produces music as <b style={{ color: "#141414" }}>Vrad.N</b>.
          Two crafts, one obsession with the details.
        </p>
        <NowPlayingMini dark={false} />
      </Reveal>
    </section>
  );
}

function MusicHero() {
  return (
    <section style={{ maxWidth: 1080, margin: "0 auto", padding: "104px 32px 76px" }}>
      <Reveal duration={0.8}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 9,
            font: `500 11px ${MONO}`,
            letterSpacing: ".16em",
            color: "#1db954",
            marginBottom: 26,
          }}
        >
          <AvailableDot />
          VRAD.N — SINGER &amp; PRODUCER
        </div>
        <h1
          style={{
            font: `600 clamp(52px,9.5vw,118px)/0.9 ${SANS}`,
            letterSpacing: "-.045em",
            margin: 0,
            color: "#f4f5f1",
          }}
        >
          Made after
          <br />
          midnight.
          <br />
          <span style={{ color: "#4d4f4a" }}>On repeat.</span>
        </h1>
      </Reveal>
      <Reveal
        delay={0.12}
        duration={0.8}
        style={{
          marginTop: 46,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 34,
          flexWrap: "wrap",
        }}
      >
        <p style={{ maxWidth: 440, font: `400 16px/1.62 ${SANS}`, color: "#a9aba4", margin: 0 }}>
          The other half of me. I write and sing my own songs as{" "}
          <b style={{ color: "#f4f5f1" }}>Vrad.N</b>, and I&apos;m learning to produce — building
          a catalogue one late night at a time.
        </p>
        <NowPlayingMini dark />
      </Reveal>
    </section>
  );
}

function TagPill({ label, highlight }: { label: string; highlight?: boolean }) {
  return (
    <span
      style={{
        font: `500 10.5px ${MONO}`,
        color: highlight ? "#1db954" : "#4a4a45",
        border: `1px solid ${highlight ? "rgba(29,185,84,.4)" : "#e0e0db"}`,
        borderRadius: 16,
        padding: "3px 9px",
      }}
    >
      {label}
    </span>
  );
}

function WorkSection() {
  return (
    <div className="pf-grid-2">
      {PROJECTS.map((p) => (
        <div key={p.title} {...hoverCursor} style={{ cursor: "pointer" }}>
          <div style={{ aspectRatio: "16/10", borderRadius: 11, overflow: "hidden" }}>
            <PhotoSlot label="project shot" />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 14 }}>
            <span style={{ font: `600 18px ${SANS}` }}>{p.title}</span>
            <span style={{ font: `400 12px ${MONO}`, color: "#9a9a96" }}>{p.year}</span>
          </div>
          <p style={{ font: `400 13.5px/1.55 ${SANS}`, color: "#6e6e69", margin: "6px 0 10px" }}>
            {p.desc}
          </p>
          <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
            {p.tags.map((t) => (
              <TagPill key={t.label} label={t.label} highlight={t.highlight} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function AwardsSection() {
  return (
    <div className="pf-grid-2">
      {AWARDS.map((a) => (
        <div
          key={a.title}
          style={{ border: "1px solid #e6e6e2", borderRadius: 14, padding: 28, background: "#fff" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span
              style={{
                font: `400 12px ${MONO}`,
                color: a.accent ? "#1db954" : "#6e6e69",
                letterSpacing: ".1em",
              }}
            >
              {a.kind}
            </span>
            <span style={{ font: `400 12px ${MONO}`, color: "#9a9a96" }}>{a.year}</span>
          </div>
          <h3 style={{ font: `600 27px/1.15 ${SANS}`, letterSpacing: "-.02em", margin: "18px 0 8px" }}>
            {a.title}
          </h3>
          <p style={{ font: `400 14px/1.55 ${SANS}`, color: "#6e6e69", margin: 0 }}>{a.desc}</p>
        </div>
      ))}
    </div>
  );
}

function ExperienceSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {EXPERIENCE.map((e, i) => (
        <div
          key={e.role}
          className="pf-exp-row"
          style={{
            padding: "22px 0",
            borderBottom: i < EXPERIENCE.length - 1 ? "1px solid #eeece7" : undefined,
          }}
        >
          <span style={{ font: `400 12px ${MONO}`, color: "#9a9a96" }}>{e.period}</span>
          <div>
            <div style={{ font: `600 19px ${SANS}` }}>{e.role}</div>
            <div style={{ font: `400 13.5px/1.5 ${SANS}`, color: "#6e6e69", marginTop: 4 }}>
              {e.org}
            </div>
          </div>
          <span style={{ font: `400 12px ${MONO}`, color: "#9a9a96" }}>{e.place}</span>
        </div>
      ))}
    </div>
  );
}

function DevMusicSection() {
  return (
    <div className="pf-grid-2">
      <NowPlayingCard dark={false} />
      <TopTracksCard dark={false} />
    </div>
  );
}

function AboutSection({
  city,
  onSelectCity,
}: {
  city: CityKey;
  onSelectCity: (c: CityKey) => void;
}) {
  const cityImages: Record<CityKey, string[]> = {
    Chennai: [
      "/images/chennai/P3260062.JPG",
      "/images/chennai/P3300073.JPG",
      "/images/chennai/P4110821.JPG",
    ],
    Tokyo: [
      "/images/tokyo/13151714694_83bccb6159_o.jpg",
      "/images/tokyo/13902750636_4fea58df85_o.jpg",
      "/images/tokyo/IMG_9300.JPG",
    ],
    Singapore: [
      "/images/singapore/IMG_0453.jpg",
      "/images/singapore/IMG_4946.jpg",
      "/images/singapore/IMG_8322.jpg",
    ],
    India: [
      "/images/vellore/7e222065-5e12-48dd-ae8e-3a29ef6f0ccf.jpg",
      "/images/vellore/IMG_5223.png",
      "/images/vellore/IMG_7675.png",
    ],
    Sydney: [
      "/images/sydney/IMG_2905.JPG",
      "/images/sydney/IMG_3626.png",
      "/images/sydney/IMG_3839.png",
    ],
  };

  const dotStyle = (active: boolean): CSSProperties => ({
    width: active ? 17 : 12,
    height: active ? 17 : 12,
    borderRadius: "50%",
    background: active ? "#1db954" : "#141414",
    boxShadow: active ? "0 0 0 6px rgba(29,185,84,.2)" : "0 0 0 4px rgba(20,20,20,.07)",
    transition: "all .3s ease",
  });

  const active = CITIES.find((c) => c.key === city)!;

  return (
    <>
      <div className="pf-about-grid">
        <p
          style={{
            font: `400 clamp(18px,2.2vw,26px)/1.5 ${SANS}`,
            color: "#2a2a26",
            margin: 0,
            letterSpacing: "-.01em",
          }}
        >
          I split my time between writing software and writing songs. As an engineer I care about
          clean systems and thoughtful interfaces; as <b>Vrad.N</b> I sing, and I&apos;m learning
          to produce — chasing the same feeling in both, the moment something finally clicks.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { k: "CURRENTLY", v: "Learning music production & releasing as Vrad.N" },
            { k: "MAKES", v: "My own music — vocals & production" },
            { k: "BASED IN", v: "Sydney, Australia" },
          ].map((row) => (
            <div key={row.k} style={{ borderTop: "1px solid #e6e6e2", paddingTop: 12 }}>
              <div style={{ font: `500 10px ${MONO}`, color: "#9a9a96", letterSpacing: ".12em" }}>
                {row.k}
              </div>
              <div style={{ font: `400 15px/1.5 ${SANS}`, color: "#2a2a26", marginTop: 5 }}>
                {row.v}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 2, paddingTop: 30, borderTop: "1px solid #e6e6e2" }}>
        <div style={{ font: `500 10px ${MONO}`, letterSpacing: ".14em", color: "#9a9a96", marginBottom: 8 }}>
          THE JOURNEY
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 22,
          }}
        >
          <div>
            <h3 style={{ font: `600 clamp(24px,3.2vw,34px)/1.05 ${SANS}`, letterSpacing: "-.025em", margin: 0 }}>
              Five cities, one long way round.
            </h3>
            <p style={{ font: `400 14px ${SANS}`, color: "#6e6e69", margin: "8px 0 0" }}>
              Chennai → Tokyo → Singapore → India → Sydney. Select a city to see photos.
            </p>
          </div>
          <div style={{ font: `400 11px ${MONO}`, color: "#c4c4be" }}> age 0 → today</div>
        </div>

        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/9",
            border: "1px solid #e6e6e2",
            borderRadius: 16,
            background: "#f6f5f2",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "radial-gradient(#d7d6cf 1.1px,transparent 1.1px)",
              backgroundSize: "19px 19px",
              opacity: 0.7,
            }}
          />
          <svg
            viewBox={MAP_VIEWBOX}
            preserveAspectRatio="none"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
          >
            <path
              d={WORLD_LAND_PATH}
              fill="#dad9cf"
              stroke="#c9c8bf"
              strokeWidth={0.6}
              vectorEffect="non-scaling-stroke"
            />
            {FLIGHT_PATHS.map((d, i) => (
              <path
                key={`base-${i}`}
                d={d}
                fill="none"
                stroke="#c3c2b8"
                strokeWidth={1.2}
                vectorEffect="non-scaling-stroke"
              />
            ))}
            {FLIGHT_PATHS.map((d, i) => (
              <path
                key={`flow-${i}`}
                d={d}
                fill="none"
                stroke="#1db954"
                strokeWidth={1.6}
                strokeDasharray="2 5"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                style={{ animation: "flow 1.6s linear infinite" }}
              />
            ))}
          </svg>

          {CITIES.map((c) => (
            <div
              key={c.key}
              {...hoverCursor}
              onClick={() => onSelectCity(c.key)}
              style={{
                position: "absolute",
                left: `${c.left}%`,
                top: `${c.top}%`,
                transform: "translate(-50%,-50%)",
                display: "flex",
                flexDirection: c.labelPos === "above" ? "column-reverse" : "column",
                alignItems: "center",
                gap: 7,
                cursor: "pointer",
                zIndex: city === c.key ? 4 : 3,
              }}
            >
              <div style={dotStyle(city === c.key)} />
              <div
                style={{
                  font: `600 11.5px ${SANS}`,
                  color: "#141414",
                  whiteSpace: "nowrap",
                  background: "rgba(246,245,242,.92)",
                  padding: "2px 7px",
                  borderRadius: 6,
                }}
              >
                {c.pinLabel} <span style={{ color: "#9a9a96", fontWeight: 400 }}>· {c.age}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 20 }} key={city}>
          <div style={{ animation: "personaIn .4s ease both" }}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 8,
                marginBottom: 12,
              }}
            >
              <span style={{ font: `600 17px ${SANS}` }}>{active.panelTitle}</span>
              <span style={{ font: `400 12px ${MONO}`, color: "#9a9a96" }}>{active.ageRange}</span>
            </div>
            <div className="pf-photo-grid">
              {cityImages[city].length > 0
                ? cityImages[city].map((src, i) => (
                    <div
                      key={src}
                      style={{ aspectRatio: "4/5", borderRadius: 12, overflow: "hidden", border: "1px solid #e6e6e2" }}
                    >
                      <img
                        src={src}
                        alt={`${city} · photo ${i + 1}`}
                        loading="lazy"
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                    </div>
                  ))
                : Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      style={{ aspectRatio: "4/5", borderRadius: 12, overflow: "hidden", border: "1px solid #e6e6e2" }}
                    >
                      <PhotoSlot label={`${city} · photo ${i + 1}`} />
                    </div>
                  ))}
            </div>
          </div>
          <p style={{ font: `400 11.5px ${MONO}`, color: "#c4c4be", margin: "14px 0 0" }}>
            Drag your photos onto the frames — they&apos;ll stick.
          </p>
        </div>
      </div>
    </>
  );
}

function UpcomingSection() {
  return (
    <div className="pf-grid-2">
      {UPCOMING.map((u) => (
        <div
          key={u.title}
          style={{ border: "1px solid #26271f", borderRadius: 14, padding: 24, background: "#151610" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ font: `500 10px ${MONO}`, color: u.color, letterSpacing: ".1em" }}>
              {u.status}
            </span>
            <span style={{ font: `400 12px ${MONO}`, color: "#6f7169" }}>{u.pct}%</span>
          </div>
          <h3 style={{ font: `600 22px ${SANS}`, color: "#f4f5f1", margin: "16px 0 8px" }}>{u.title}</h3>
          <p style={{ font: `400 13px/1.5 ${SANS}`, color: "#8a8c86", margin: "0 0 16px" }}>{u.desc}</p>
          <div style={{ height: 4, borderRadius: 2, background: "#26271f", overflow: "hidden" }}>
            <div style={{ width: `${u.pct}%`, height: "100%", background: u.color }} />
          </div>
        </div>
      ))}
      <div
        style={{
          border: "1px dashed #33352c",
          borderRadius: 14,
          padding: 24,
          background: "transparent",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{ font: `300 34px ${SANS}`, color: "#4d4f4a" }}>+</div>
        <p style={{ font: `400 12px/1.5 ${MONO}`, color: "#6f7169", margin: "8px 0 0" }}>
          add your next
          <br />
          song project
        </p>
      </div>
    </div>
  );
}

function ListenSection() {
  return (
    <div className="pf-grid-2">
      <NowPlayingCard dark />
      <TopTracksCard dark />
    </div>
  );
}

function StorySection() {
  return (
    <div className="pf-about-grid">
      <p
        style={{
          font: `400 clamp(18px,2.2vw,26px)/1.5 ${SANS}`,
          color: "#d6d8d1",
          margin: 0,
          letterSpacing: "-.01em",
        }}
      >
        Music started as the place I went when code wasn&apos;t enough. I sing, I write, and
        I&apos;m teaching myself production — chasing that feeling of a track finally clicking
        into place. <b style={{ color: "#f4f5f1" }}>Vrad.N</b> is where all of that lives.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {[
          { k: "DOES", v: "Vocals, songwriting & production" },
          { k: "LEARNING", v: "Mixing, mastering & sound design" },
          { k: "FIND ME", v: "Spotify · @Vrad.N" },
        ].map((row) => (
          <div key={row.k} style={{ borderTop: "1px solid #26271f", paddingTop: 12 }}>
            <div style={{ font: `500 10px ${MONO}`, color: "#6f7169", letterSpacing: ".12em" }}>
              {row.k}
            </div>
            <div style={{ font: `400 15px/1.5 ${SANS}`, color: "#e6e8e1", marginTop: 5 }}>
              {row.v}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#101110", color: "#e9e8e3" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "80px 32px 48px" }}>
        <Reveal
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 30,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ font: `500 11px ${MONO}`, color: "#1db954", letterSpacing: ".14em", marginBottom: 16 }}>
              LET&apos;S TALK
            </div>
            <h2 style={{ font: `600 clamp(34px,6vw,66px)/0.95 ${SANS}`, letterSpacing: "-.03em", margin: 0 }}>
              Build something
              <br />
              with me.
            </h2>
          </div>
          <a
            href="mailto:hello@manojvradan.com"
            {...hoverCursor}
            style={{
              font: `500 15px ${SANS}`,
              color: "#e9e8e3",
              border: "1px solid #3a3b39",
              borderRadius: 26,
              padding: "13px 24px",
            }}
          >
            hello@manojvradan.com →
          </a>
        </Reveal>
        <div
          style={{
            marginTop: 64,
            paddingTop: 22,
            borderTop: "1px solid #26271f",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 18,
            font: `500 12px ${MONO}`,
            color: "#6f7169",
          }}
        >
          <span>© 2026 MANOJVRADAN</span>
          <div style={{ display: "flex", gap: 24 }}>
            {[
              { label: "GitHub", href: "#" },
              { label: "Spotify", href: SPOTIFY_URL },
              { label: "LinkedIn", href: "#" },
              { label: "Email", href: "mailto:hello@manojvradan.com" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                {...hoverCursor}
                style={{ color: "#a3a29a" }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  const [persona, setPersona] = useState<Persona>("dev");
  const [open, setOpen] = useState<number | null>(0);
  const [city, setCity] = useState<CityKey>("Chennai");

  const toggle = (i: number) => setOpen((o) => (o === i ? null : i));
  const switchPersona = () => {
    setPersona((p) => (p === "dev" ? "music" : "dev"));
    setOpen(0);
  };

  const music = persona === "music";

  return (
    <div style={{ minHeight: "100vh", background: music ? "#0f100e" : "#fbfbfa", color: music ? "#eef0ec" : "#141414" }}>
      <CustomCursor variant={persona} />
      <TopBar persona={persona} onSwitch={switchPersona} />

      {!music && (
        <div style={{ animation: "personaIn .5s ease both" }}>
          <DevHero />
          <section style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px 130px" }}>
            <Reveal
              duration={0.6}
              distance={20}
              style={{
                display: "flex",
                justifyContent: "space-between",
                font: `500 11px ${MONO}`,
                letterSpacing: ".16em",
                color: "#9a9a96",
                marginBottom: 6,
              }}
            >
              <span>INDEX</span>
              <span>SELECT TO EXPAND</span>
            </Reveal>

            <AccordionItem index={0} open={open} onToggle={toggle} number="01" title="About" meta="the person">
              <AboutSection city={city} onSelectCity={setCity} />
            </AccordionItem>
            <AccordionItem index={1} open={open} onToggle={toggle} number="02" title="Work" meta="4 selected">
              <WorkSection />
            </AccordionItem>
            <AccordionItem index={2} open={open} onToggle={toggle} number="03" title="Awards" meta="2 honours">
              <AwardsSection />
            </AccordionItem>
            <AccordionItem index={3} open={open} onToggle={toggle} number="04" title="Experience" meta="résumé">
              <ExperienceSection />
            </AccordionItem>
            <AccordionItem
              index={4}
              open={open}
              onToggle={toggle}
              number="05"
              title="Music"
              meta={
                <>
                  <Equalizer size="sm" color="#1db954" />
                  Vrad.N
                </>
              }
              borderBottom
            >
              <DevMusicSection />
            </AccordionItem>
          </section>
        </div>
      )}

      {music && (
        <div style={{ background: "#0f100e", color: "#eef0ec", animation: "personaIn .5s ease both" }}>
          <MusicHero />
          <section style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px 130px" }}>
            <Reveal
              duration={0.6}
              distance={20}
              style={{
                display: "flex",
                justifyContent: "space-between",
                font: `500 11px ${MONO}`,
                letterSpacing: ".16em",
                color: "#6f7169",
                marginBottom: 6,
              }}
            >
              <span>DISCOGRAPHY</span>
              <span>SELECT TO EXPAND</span>
            </Reveal>

            <AccordionItem index={0} open={open} onToggle={toggle} number="01" title="Releases" meta="4 songs" dark>
              <ReleasesList />
            </AccordionItem>
            <AccordionItem
              index={1}
              open={open}
              onToggle={toggle}
              number="02"
              title="Upcoming"
              meta="in the works"
              dark
            >
              <UpcomingSection />
            </AccordionItem>
            <AccordionItem
              index={2}
              open={open}
              onToggle={toggle}
              number="03"
              title="Listen"
              dark
              meta={
                <>
                  <Equalizer size="sm" color="#1db954" />
                  Spotify
                </>
              }
            >
              <ListenSection />
            </AccordionItem>
            <AccordionItem
              index={3}
              open={open}
              onToggle={toggle}
              number="04"
              title="The Story"
              meta="behind Vrad.N"
              dark
              borderBottom
            >
              <StorySection />
            </AccordionItem>
          </section>
        </div>
      )}

      <Footer />
    </div>
  );
}
