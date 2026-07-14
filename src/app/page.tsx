const highlights = [
  { value: "3+", label: "years of building digital experiences" },
  { value: "10+", label: "projects shaped with care and purpose" },
  { value: "100%", label: "focus on clarity, craft, and impact" },
];

const achievements = [
  {
    title: "Turning ideas into polished products",
    description:
      "I enjoy turning scattered ideas into thoughtful interfaces that feel simple, useful, and memorable.",
  },
  {
    title: "Building with intention",
    description:
      "My work is guided by calm problem-solving, strong communication, and a love for clean execution.",
  },
  {
    title: "Creating experiences that last",
    description:
      "I care about the long view: durable systems, refined details, and experiences that genuinely help people.",
  },
];

const skills = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "UI/UX thinking",
  "Problem-solving",
  "Product-minded development",
];

const values = ["Curiosity", "Clarity", "Consistency", "Purpose"];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.2),_transparent_25%),linear-gradient(135deg,_#fef3c7_0%,_#f8fafc_50%,_#fefce8_100%)] text-slate-900">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-8 lg:px-12">
        <a href="#top" className="text-lg font-semibold tracking-[0.2em] text-slate-800 uppercase">
          Manoj
        </a>
        <nav className="flex gap-4 text-sm font-medium text-slate-700">
          <a href="#about" className="transition hover:text-slate-950">
            About
          </a>
          <a href="#achievements" className="transition hover:text-slate-950">
            Achievements
          </a>
          <a href="#contact" className="transition hover:text-slate-950">
            Contact
          </a>
        </nav>
      </header>

      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-16 sm:px-8 lg:px-12">
        <section className="grid items-center gap-10 rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur md:grid-cols-[1.15fr_0.85fr] md:p-10 lg:p-12">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
              Builder • Creator • Lifelong learner
            </p>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                I create thoughtful digital experiences that feel personal and purposeful.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-700">
                I’m a developer who blends creativity, structure, and empathy to build websites that are as meaningful as they are polished.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#achievements"
                className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Explore my journey
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
              >
                Let’s connect
              </a>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">At a glance</p>
            <div className="mt-6 grid gap-4">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <p className="text-2xl font-semibold">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">About me</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              I believe good design should feel calm, clear, and human.
            </h2>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
            <p className="text-lg leading-8 text-slate-700">
              My personality is rooted in curiosity, patience, and a drive to make things better. I enjoy creating experiences that balance function with feeling, and I’m happiest when a project turns an idea into something people remember.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {values.map((value) => (
                <span key={value} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                  {value}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Achievements</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              A portfolio that highlights growth, craft, and momentum.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {achievements.map((item) => (
              <article key={item.title} className="rounded-[1.25rem] border border-slate-200 bg-white/80 p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-700">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-xl lg:grid-cols-[1fr_0.9fr] lg:p-10">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">Skills</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              I build with the tools that help ideas scale beautifully.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 content-start">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 text-center shadow-sm backdrop-blur sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Let’s work together</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            If you’re looking for someone thoughtful, curious, and committed to quality, I’d love to connect.
          </h2>
          <a
            href="mailto:hello@yourname.com"
            className="mt-6 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            hello@yourname.com
          </a>
        </section>
      </main>

      <footer className="border-t border-slate-200/80 px-6 py-6 text-center text-sm text-slate-600">
        Designed with care for stories, growth, and meaningful digital work.
      </footer>
    </div>
  );
}
