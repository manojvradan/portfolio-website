export const SPOTIFY_URL = "https://open.spotify.com/artist/0C5FdYrSAb5NrVYZu42HJ6";

export type Tag = { label: string; highlight?: boolean };

export type Project = {
  title: string;
  year: string;
  desc: string;
  tags: Tag[];
  // Drop a photo into public/images/work/ and point `image` at it (e.g. "/images/work/align.jpg").
  // Until the file exists the card falls back to the striped placeholder automatically.
  image?: string;
  // Detail shown in the modal when the card is clicked:
  role: string;
  org: string;
  period: string;
  location?: string;
  stack?: string;
  bullets: string[];
  link?: { label: string; href: string };
};

export const PROJECTS: Project[] = [
  {
    title: "Align",
    year: "2026",
    desc: "My thesis (86 WAM) — a full-stack internship recommender with NLP résumé parsing and a hybrid recommender wrapped in an LLM context layer, lifting match accuracy by 65%. React front end on a FastAPI microservice backend.",
    tags: [
      { label: "+65% accuracy ★", highlight: true },
      { label: "React" },
      { label: "FastAPI" },
      { label: "LLM" },
    ],
    image: "/images/work/Align.jpg",
    role: "Thesis Project",
    org: "UNSW · 86 WAM",
    period: "May 2025 — May 2026",
    location: "Sydney",
    stack: "React · FastAPI · NLP · LLM",
    link: { label: "align-ten-beta.vercel.app", href: "https://align-ten-beta.vercel.app/" },
    bullets: [
      "Developed a full-stack platform that recommends internships from candidate profiles using résumé parsing (NLP) and a custom recommender system.",
      "Architected a microservice architecture, splitting a large backend into separate deployable services to ensure scalability.",
      "Engineered a hybrid recommender with an LLM context layer, boosting recommendation accuracy by 65%.",
      "Built an interactive React front end integrated with a FastAPI backend, supporting dynamic data visualisation and personalised recommendations.",
    ],
  },
  {
    title: "Rhombus AI",
    year: "2026",
    desc: "Full-stack engineer on a data + AI platform. Shipped a credit-based pricing model that drove a 25% rise in active subscriptions, and built LLM orchestration services deployed on Kubernetes.",
    tags: [
      { label: "+25% subs ★", highlight: true },
      { label: "Next.js" },
      { label: "Django" },
      { label: "Kubernetes" },
    ],
    image: "/images/work/Rhombus.jpg",
    role: "Full Stack Developer",
    org: "Rhombus AI",
    period: "Dec 2025 — Present",
    location: "Sydney",
    stack: "Next.js (TypeScript) · Django (Python)",
    link: { label: "rhombusai.com", href: "https://rhombusai.com/" },
    bullets: [
      "Spearheaded a platform-wide subscription revamp by engineering a credit-based pricing model, driving a 25% increase in active subscriptions.",
      "Architected and maintained backend APIs and LLM orchestration services in Python/Django, managing scalable, high-availability deployments via Kubernetes.",
      "Featured speaker and core organiser for “Building AI in Australia” at Data+AI Con '26, hosted at the University of Sydney.",
      "Engineered a robust error-handling and logging framework, eliminating critical user-facing popups and improving platform stability.",
      "Optimised frontend data flow by persisting state in local storage, minimising backend API calls and increasing app speed.",
    ],
  },
  {
    title: "Technical Director",
    year: "2025",
    desc: "Data Science Society, UNSW. Led a team of 4 as Scrum Master (incl. Excellr), migrated the DataSoc site Vercel→Cloudflare and Next.js→Astro, and built a JS automation pipeline that cut manual work by 60%.",
    tags: [
      { label: "-60% manual ★", highlight: true },
      { label: "Astro" },
      { label: "Cloudflare" },
      { label: "Scrum" },
    ],
    image: "/images/work/Datasoc.jpg",
    role: "Technical Director",
    org: "Data Science Society, UNSW",
    period: "Nov 2024 — Nov 2025",
    location: "Sydney",
    link: { label: "unswdata.com", href: "https://unswdata.com" },
    bullets: [
      "Led a team of 4 as Scrum Master across projects including Excellr, improving sprint efficiency and ensuring timely delivery of features.",
      "Led migration of the DataSoc website from Vercel to Cloudflare and Next.js to Astro, improving performance, load times and cost efficiency.",
      "Developed and optimised a JavaScript automation pipeline, reducing manual workload by 60%.",
      "Implemented Agile methodologies — sprint planning and Jira-based tracking — improving development-cycle efficiency ~30% and reducing bottlenecks in task allocation.",
    ],
  },
  {
    title: "Marketing Director",
    year: "2025",
    desc: "Artificial Intelligence Society, UNSW. Managed a team of 5 and directed marketing for the first-ever AICon — selling out 200+ tickets — while growing social presence 30% with viral video content.",
    tags: [
      { label: "200+ tickets ★", highlight: true },
      { label: "Team of 5" },
      { label: "+30% social" },
    ],
    image: "/images/work/Aisoc.jpg",
    role: "Marketing Director",
    org: "Artificial Intelligence Society, UNSW",
    period: "Nov 2024 — Nov 2025",
    location: "Sydney",
    bullets: [
      "Managed a team of 5 to market events, workshops and seminars run by the AI Society.",
      "Directed marketing for the first-ever AICon, selling out 200+ tickets.",
      "Wrote viral video content, growing social-media presence by 30%.",
    ],
  },
];

// Photos/videos shown in the award modal on click. Drop files into public/images/awards/<slug>/
// and list them here. Use { type: "video", src: "..." } for clips (mp4/webm). Missing files fall
// back to the striped placeholder automatically.
export type Media = { type: "image" | "video"; src: string };

export const AWARDS: {
  kind: string;
  year: string;
  title: string;
  desc: string;
  accent?: boolean;
  link?: { label: string; href: string };
  media?: Media[];
}[] = [
  {
    kind: "PEOPLE'S CHOICE",
    year: "2026",
    title: "People's Choice — HealthHack 2026",
    desc: "Crowd Favourite (Pitching Track) at HealthHack 2026, Stone & Chalk — for Historia, an app that streamlines pharmacy queues and gets you to pharmacist care before you reach the counter. Built in two days with Dina Vahabi; my first hackathon, and first win. Hosted by MLAI, sponsored by OpenAI × Base44.",
    accent: true,
    media: [{ type: "image", src: "/images/awards/healthhack.jpg" }],
  },
  {
    kind: "BEST PROJECT",
    year: "2025",
    title: "Optiver Award — Best SENG3011 Project",
    desc: "For Foresight, a currency exchange-rate warning system — judged the best Software Engineering (SENG3011) project of the cohort and presented at Optiver's office. Built with Aryaman Sakthivel, Rahul Markasserithodi and Ayusha Priyadarshani.",
    accent: true,
    media: [
      { type: "image", src: "/images/awards/optiver/1.jpg" },
      { type: "image", src: "/images/awards/optiver/2.jpg" },
    ],
  },
  {
    kind: "2ND PLACE",
    year: "2026",
    title: "CSESoc × Atlassian Hackathon",
    desc: "Runner-up for Tenure — a platform that rates the durability of electronics from real user reviews, validated with a statistical method used in clinical trials. Built with Rahul Markasserithodi.",
    link: { label: "Try Tenure", href: "https://lemon-lilac.vercel.app/" },
    media: [{ type: "image", src: "/images/awards/tenure/1.jpg" }],
  },
];

export const EXPERIENCE: {
  period: string;
  role: string;
  org: string;
  place: string;
}[] = [
  {
    period: "2023 — 2026",
    role: "Software Engineering",
    org: "University of New South Wales · Thesis WAM 86%",
    place: "Sydney",
  },
  {
    period: "2021 — 2023",
    role: "Computer Engineering",
    org: "VIT Vellore · Minor in Business Systems · Transferred to UNSW (final grade 82%)",
    place: "Vellore",
  },
];

export const TOP_TRACKS: { n: number; title: string; time: string }[] = [
  { n: 1, title: "Afterglow", time: "3:18" },
  { n: 2, title: "Track Title", time: "2:54" },
  { n: 3, title: "Another One", time: "3:41" },
];

// The artists / tracks that inspire Vrad.N — swap these placeholders for the real ones.
export const INSPIRATION: { n: number; artist: string; note: string }[] = [
  { n: 1, artist: "Artist Name", note: "genre / why they inspire you" },
  { n: 2, artist: "Artist Name", note: "genre / why they inspire you" },
  { n: 3, artist: "Artist Name", note: "genre / why they inspire you" },
  { n: 4, artist: "Artist Name", note: "genre / why they inspire you" },
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
