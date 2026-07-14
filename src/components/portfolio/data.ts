export const SPOTIFY_URL = "https://open.spotify.com/artist/0C5FdYrSAb5NrVYZu42HJ6";

export type Tag = { label: string; highlight?: boolean };

export const PROJECTS: {
  title: string;
  year: string;
  desc: string;
  tags: Tag[];
}[] = [
  {
    title: "Project One",
    year: "2026",
    desc: "One line on what it does and why it mattered. Swap in your real project.",
    tags: [{ label: "React" }, { label: "TypeScript" }],
  },
  {
    title: "SENG3011 Platform",
    year: "2025",
    desc: "The award-winning capstone. Add a real description and screenshots.",
    tags: [{ label: "Best Project ★", highlight: true }, { label: "Python" }],
  },
  {
    title: "Hackathon Build",
    year: "2026",
    desc: "The CSE Hackathon runner-up. What you built in 24-48 hours.",
    tags: [{ label: "Next.js" }, { label: "Node" }],
  },
  {
    title: "Side Project",
    year: "2025",
    desc: "An experiment worth showing. Music-tech, tooling, anything you love.",
    tags: [{ label: "Web Audio" }],
  },
];

export const AWARDS: {
  kind: string;
  year: string;
  title: string;
  desc: string;
  accent?: boolean;
}[] = [
  {
    kind: "FIRST PLACE",
    year: "2025",
    title: "Best Project Award",
    desc: "SENG 3011 — Software Engineering Workshop. Recognised as the standout project of the cohort.",
    accent: true,
  },
  {
    kind: "RUNNER-UP",
    year: "2026",
    title: "2nd Place — CSE Hackathon",
    desc: "Placed second among the field at the 2026 CSE Hackathon. Built and shipped under the clock.",
  },
];

export const EXPERIENCE: {
  period: string;
  role: string;
  org: string;
  place: string;
}[] = [
  {
    period: "2025 — Now",
    role: "Role / Title",
    org: "Company · what you owned and shipped. Replace with real experience.",
    place: "Sydney",
  },
  {
    period: "2024 — 2025",
    role: "Previous Role",
    org: "Internship or project team · a line of impact.",
    place: "Remote",
  },
  {
    period: "— 2027",
    role: "B.E. Software Engineering",
    org: "University · edit degree, uni & highlights.",
    place: "UNSW",
  },
];

export const TOP_TRACKS: { n: number; title: string; time: string }[] = [
  { n: 1, title: "Afterglow", time: "3:18" },
  { n: 2, title: "Track Title", time: "2:54" },
  { n: 3, title: "Another One", time: "3:41" },
];

export const RELEASES: {
  title: string;
  meta: string;
  time: string;
  playing?: boolean;
}[] = [
  { title: "Afterglow", meta: "Single · 2026", time: "3:18", playing: true },
  { title: "Song Title", meta: "Single · 2025 · swap in real track", time: "2:54" },
  { title: "Another One", meta: "Single · 2025", time: "3:41" },
  { title: "Demo / Cover", meta: "Single · 2024", time: "2:37" },
];

export const UPCOMING: {
  status: string;
  color: string;
  pct: number;
  title: string;
  desc: string;
}[] = [
  {
    status: "WRITING",
    color: "#f0b429",
    pct: 35,
    title: "Untitled #1",
    desc: "Lyrics in progress — a slower, vocal-led track.",
  },
  {
    status: "PRODUCING",
    color: "#7aa2ff",
    pct: 20,
    title: "EP · Night Shift",
    desc: "Learning the boards — a 4-track EP. First beats down.",
  },
  {
    status: "MIXING",
    color: "#1db954",
    pct: 70,
    title: "Collab Single",
    desc: "Near the finish line — final mix and master left.",
  },
];

export type CityKey = "Chennai" | "Tokyo" | "Singapore" | "India" | "Sydney";

// left/top are percentages within the map container, matching the real
// geographic positions projected into the map's 1600×900 (16:9) viewBox
// (Chennai/Vellore are nudged apart slightly — they're ~140km apart in
// reality and would otherwise overlap at this map scale).
export const CITIES: {
  key: CityKey;
  pinLabel: string;
  age: string;
  left: number;
  top: number;
  labelPos: "above" | "below";
  ageRange: string;
  panelTitle: string;
}[] = [
  { key: "Chennai", pinLabel: "Chennai", age: "0", left: 31.56, top: 35.11, labelPos: "below", ageRange: "AGE 0 → 6 · BORN HERE", panelTitle: "Chennai, India" },
  { key: "Tokyo", pinLabel: "Tokyo", age: "6", left: 68.53, top: 9.25, labelPos: "below", ageRange: "AGE 6 → 12", panelTitle: "Tokyo, Japan" },
  { key: "Singapore", pinLabel: "Singapore", age: "12", left: 46.14, top: 47.39, labelPos: "below", ageRange: "AGE 12 → 18", panelTitle: "Singapore" },
  { key: "India", pinLabel: "Vellore", age: "18", left: 29.25, top: 32.89, labelPos: "above", ageRange: "AGE 18 → 20 · UNIVERSITY", panelTitle: "Vellore, India" },
  { key: "Sydney", pinLabel: "Sydney", age: "20", left: 75.76, top: 86.52, labelPos: "below", ageRange: "AGE 20 → NOW · TRANSFERRED", panelTitle: "Sydney, Australia" },
];
