'use client';
import React, { useEffect, useState } from "react";

// === Praveen's Portfolio Preview (Canvas) ===
function Ph({ title, className = "" }) {
  return (
    <div role="img" aria-label={typeof title === "string" ? title : "placeholder"}
      className={`relative flex items-center justify-center bg-gradient-to-br from-slate-800 to-indigo-950 ${className}`}>
      <span className="px-4 text-center text-white/85 font-semibold select-none">{title}</span>
    </div>
  );
}
function Img({ src, title, className = "", alt }) {
  const [err, setErr] = useState(false);
  if (err || !src) return <Ph title={title || alt || "Image"} className={className} />;
  return <img src={src} alt={alt || title || ""} className={className} onError={() => setErr(true)} />;
}
const ASSET_BASE = (typeof process !== "undefined" && process.env && process.env.NEXT_PUBLIC_ASSET_BASE) || "";
const asset = (p) => `${ASSET_BASE}${p}`;
const RESUME_URL = asset("/assets/PraveenHari_Resume.pdf");

function Orbits({ className = "" }) {
  return (
    <div className={`pointer-events-none ${className}`}>
      <div className="absolute inset-0 rounded-full border border-indigo-400/30" />
      <div className="absolute inset-0 origin-center animate-[spin_12s_linear_infinite]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-2 w-2 rounded-full bg-indigo-300 shadow-[0_0_10px_2px_rgba(99,102,241,0.6)]" />
      </div>
      <div className="absolute inset-3 rounded-full border border-cyan-300/25" />
      <div className="absolute inset-3 origin-center animate-[spin_20s_linear_infinite_reverse]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-cyan-300/90 shadow-[0_0_8px_1px_rgba(34,211,238,0.5)]" />
      </div>
      <div className="absolute inset-8 rounded-full bg-gradient-to-br from-indigo-500/10 to-cyan-400/5 blur-2xl" />
    </div>
  );
}

const PROFILE_SRC = asset("/assets/profile.jpg");

const PROJECTS = [
  { id: "dizzitup", title: "DizzitUp Realtime Business Dashboard", org: "DizzitUp • Internship",
    summary: "Realtime business monitoring (transactions, geoviews, KPIs) with map layers and live charts.",
    file: asset("/assets/projects/dizzitup.jpg"),
    images: [asset("/assets/projects/dizzitup-1.jpg"), asset("/assets/projects/dizzitup-2.jpg")],
    stack: ["Next.js","TypeScript","Node.js","Socket.io","Firebase","Leaflet","Chart.js"],
    highlights: ["Live KPI cards with thresholds & alerts","Map layers (heatmap, region polygons) with smooth zoom","Event fan‑out over websockets; debounced updates","Role‑based access for demo vs. admin"],
    impact: ["↓ 30% faster monitoring","<200ms chart updates"] },
  { id: "robotgames", title: "Robot Games — Waveshare Rover (ROS2)", org: "Capstone / Lab",
    summary: "ROS2 control stack for a Waveshare rover: motion, camera streaming, and waypoint scripts.",
    file: asset("/assets/projects/robotgames.jpg"),
    images: [asset("/assets/projects/robotgames-1.jpg"), asset("/assets/projects/robotgames-2.jpg")],
    stack: ["ROS2 (Humble)","Python","C++","Serial","Web dashboard"],
    highlights: ["Dead‑man stop + ramped velocity profile","Camera node with adjustable FPS","Waypoint runner + coordinate drive API","Logs + replay tools for safe iteration"],
    impact: ["Stable lab demos","Modular nodes for future AprilTag"] },
  { id: "patient-iot", title: "Realtime Patient IoT Dashboard", org: "Course Project",
    summary: "Web dashboard + Firebase for patient vitals, thresholds, and alerting; Raspberry Pi node.",
    file: asset("/assets/projects/patient-iot.jpg"),
    images: [asset("/assets/projects/patient-iot-1.jpg"), asset("/assets/projects/patient-iot-2.jpg")],
    stack: ["React","Firebase Auth/DB","Chart.js","Raspberry Pi"],
    highlights: ["Thresholding + notifications","Audit log for setting changes","Cached reads + batching"],
    impact: ["Smooth 60fps viz","Simple hooks for clinicians"] },
  { id: "cmxi", title: "CMXI Smart Jacket (IoT)", org: "Personal Project",
    summary: "Wearable jacket prototype with heating/cooling (PCM) and sensors connected to a mobile app.",
    file: asset("/assets/projects/cmxi.jpg"),
    images: [asset("/assets/projects/cmxi-1.jpg"), asset("/assets/projects/cmxi-2.jpg")],
    stack: ["Embedded C","Bluetooth","Mobile app"],
    highlights: ["Mode switching (cool/heat/neutral)","Status LEDs & interlocks","BOM + test plan"],
    impact: ["Usable MVP","Path to closed‑loop control"] },
  { id: "campustrade", title: "CampusTrade Marketplace", org: "Personal Project",
    summary: "Campus‑only buy/sell/trade with verified users, quick chat, and simple ratings.",
    file: asset("/assets/projects/campustrade.jpg"),
    images: [asset("/assets/projects/campustrade-1.jpg"), asset("/assets/projects/campustrade-2.jpg")],
    stack: ["Next.js","Postgres","Auth","Websockets"],
    highlights: [".edu verification","Fast photo upload + preview","Unread DM counters"],
    impact: ["Trust‑first UX","Low friction listing flow"] },
  { id: "environment", title: "Environmental Awareness Platform", org: "Community Project",
    summary: "Community site for sustainability content, events, and air‑quality widgets.",
    file: asset("/assets/projects/environment.jpg"),
    images: [asset("/assets/projects/environment-1.jpg"), asset("/assets/projects/environment-2.jpg")],
    stack: ["Next.js","CMS","Maps"],
    highlights: ["Role‑based publishing","AQI widget","Event map with caching"],
    impact: ["Reduced API calls","Editor happiness"] },
];

const SKILL_GROUPS = [
  { name: "Frontend", items: ["React","Next.js","TypeScript","Tailwind","Chart.js","Leaflet","Zustand"] },
  { name: "Backend & Cloud", items: ["Node.js","Express","Firebase","PostgreSQL","MongoDB","Auth","REST"] },
  { name: "Realtime & Data", items: ["WebSockets","Socket.io","Streams","Redis","ROS2"] },
  { name: "DevOps & Tools", items: ["Git","Docker","Linux","CI/CD","Vercel","Nginx"] },
  { name: "Languages", items: ["TypeScript","JavaScript","Python","C/C++","SQL"] },
];
const SKILL_EMOJIS = {
  "React": "⚛️", "Next.js": "⏭️", "TypeScript": "🟦", "Tailwind": "💨", "Chart.js": "📊", "Leaflet": "🗺️", "Zustand": "🦦",
  "Node.js": "🟢", "Express": "🚂", "Firebase": "🔥", "PostgreSQL": "🐘", "MongoDB": "🍃", "Auth": "🔐", "REST": "🔗",
  "WebSockets": "🔌", "Socket.io": "🔄", "Streams": "🌊", "Redis": "🧰", "ROS2": "🤖",
  "Git": "🔧", "Docker": "🐳", "Linux": "🐧", "CI/CD": "🔁", "Vercel": "▲", "Nginx": "🌀",
  "JavaScript": "🟨", "Python": "🐍", "C/C++": "💻", "SQL": "🗄️"
};
function useHoverTilt() {
  const [el, setEl] = React.useState(null);
  useEffect(() => {
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      el.style.setProperty('--rx', `${(y - 0.5) * 4}deg`);
      el.style.setProperty('--ry', `${(x - 0.5) * -6}deg`);
    };
    const onLeave = () => { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); };
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => { el.removeEventListener('pointermove', onMove); el.removeEventListener('pointerleave', onLeave); };
  }, [el]);
  return setEl;
}
function SkillPill({ name }) {
  const setRef = useHoverTilt();
  const emoji = SKILL_EMOJIS[name] || '💡';
  return (
    <span ref={setRef} title={name}
      className="group inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80 transition will-change-transform hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(99,102,241,0.35)]"
      style={{ transform: 'perspective(600px) rotateX(var(--rx,0)) rotateY(var(--ry,0))' }}>
      <span className="text-base">{emoji}</span><span>{name}</span>
      <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 ring-2 ring-indigo-400/40 transition group-hover:opacity-100" />
    </span>
  );
}

const COURSEWORK = {
  Core: ["Data Structures & Algorithms","Discrete Structures","Software Engineering","Database Systems"],
  Systems: ["Operating Systems","Computer Networks","Computer Organization","Embedded Systems"],
  Math_AI: ["Probability & Statistics","Linear Algebra","Machine Learning","Data Mining"],
  Hardware: ["Digital Logic","Signals & Systems"],
};

export default function PortfolioPreview() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openProject, setOpenProject] = useState(null);
  useEffect(() => { document.documentElement.style.scrollBehavior = "smooth"; }, []);
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(99,102,241,0.25),transparent)]" />
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main className="pt-24">
        <Hero onSeeProjects={() => scrollToId("projects")} />
        <Projects onOpen={setOpenProject} />
        <Skills />
        <Coursework />
        <About />
        <Contact />
      </main>
      <Footer />
      {openProject && (<ProjectModal project={openProject} onClose={() => setOpenProject(null)} />)}
    </div>
  );
}

function Header({ mobileOpen, setMobileOpen }) {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#top" className="font-semibold tracking-wide">PRAVEEN HARI</a>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#projects" className="text-white/80 hover:text-white">Projects</a>
          <a href="#skills" className="text-white/80 hover:text-white">Skills</a>
          <a href="#coursework" className="text-white/80 hover:text-white">Coursework</a>
          <a href="#about" className="text-white/80 hover:text-white">About</a>
          <a href="#contact" className="text-white/80 hover:text-white">Contact</a>
          <a className="rounded-full bg-white/10 px-4 py-2 text-sm hover:bg-white/20" href="https://www.linkedin.com/in/praveenhari17/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="rounded-full bg-white px-4 py-2 text-sm text-black hover:bg-white/90" href={RESUME_URL} target="_blank" rel="noreferrer" download>Resume</a>
        </nav>
        <button aria-label="Open menu" className="md:hidden rounded-lg bg-white/10 px-3 py-2 hover:bg-white/20" onClick={() => setMobileOpen(!mobileOpen)}>☰</button>
      </div>
      {mobileOpen && (
        <div className="border-t border-white/10 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 pb-4 pt-2">
            {[["Projects","#projects"],["Skills","#skills"],["Coursework","#coursework"],["About","#about"],["Contact","#contact"]]
              .map(([label, href]) => (
                <a key={href} href={href} className="rounded-lg px-3 py-2 text-white/90 hover:bg-white/10" onClick={() => setMobileOpen(false)}>{label}</a>
              ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ onSeeProjects }) {
  return (
    <section id="top" className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid items-center gap-10 md:grid-cols-[1.25fr,1fr]">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 text-xs text-indigo-200">
            <span className="h-2 w-2 rounded-full bg-indigo-300" /> Carleton University — 4th‑year Computer Systems Engineering (CSE)
          </div>
          <h1 className="mb-4 text-5xl font-semibold leading-tight md:text-7xl">I build realtime dashboards & systems that make data feel alive.</h1>
          <p className="mb-6 max-w-2xl text-white/70">Apple‑style UI, fast data pipelines, and clean UX across maps, sockets, and rich charts.</p>
          <div className="flex flex-wrap gap-3">
            <button onClick={onSeeProjects} className="rounded-full bg-white px-5 py-2 text-black hover:bg-white/90">See Projects</button>
            <a href="#contact" className="rounded-full border border-white/20 px-5 py-2 hover:bg-white/10">Contact</a>
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-5 py-2 hover:bg-white/10" download>Resume</a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-56 w-56">
            <Orbits className="absolute inset-0" />
            <Img src={PROFILE_SRC} title="Praveen Hari" alt="Praveen Hari profile" className="relative z-10 h-48 w-48 rounded-full border border-white/20 object-cover shadow-2xl" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-5xl px-1">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[{label:"Faster monitoring",value:"30%"},{label:"Live charts",value:"10+"},{label:"Map layers",value:"5+"},{label:"Platforms",value:"Web + Mobile"}].map((m) => (
            <div key={m.label} className="rounded-3xl border border-white/10 bg-white/5 px-5 py-6 text-center text-white/80 backdrop-blur">
              <div className="text-3xl font-semibold text-white">{m.value}</div>
              <div className="text-xs uppercase tracking-wide text-white/60">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects({ onOpen }) {
  return (
    <section id="projects" className="scroll-mt-24 mx-auto max-w-7xl px-4 py-16">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-semibold md:text-3xl">Featured Projects</h2>
        <p className="text-sm text-white/60">Curated work with product‑page storytelling</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((p) => (
          <article key={p.id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-3 shadow-2xl backdrop-blur transition hover:scale-[1.01]">
            <div className="relative mb-3 h-44 w-full overflow-hidden rounded-xl border border-white/10">
              <Img src={p.file} title={p.title} alt={`${p.title} cover`} className="h-full w-full object-cover" />
            </div>
            <div className="mb-2 text-xs text-white/60">{p.org}</div>
            <h3 className="mb-2 text-xl font-semibold">{p.title}</h3>
            <p className="mb-4 text-white/70">{p.summary}</p>
            <div className="flex gap-2">
              <button onClick={() => onOpen({ ...p, mode: "quick" })} className="rounded-full border border-white/20 px-4 py-1.5 text-sm hover:bg-white/10">Quick Look</button>
              <button onClick={() => onOpen({ ...p, mode: "case" })} className="rounded-full bg-white px-4 py-1.5 text-sm text-black hover:bg-white/90">Case Study</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 mx-auto max-w-7xl px-4 pb-12">
      <h2 className="mb-6 text-2xl font-semibold md:text-3xl">Skills</h2>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {SKILL_GROUPS.map((g) => (
          <div key={g.name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="mb-3 text-sm font-medium text-white/80">{g.name}</div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (<SkillPill key={s} name={s} />))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Coursework() {
  return (
    <section id="coursework" className="scroll-mt-24 mx-auto max-w-7xl px-4 pb-12">
      <h2 className="mb-6 text-2xl font-semibold md:text-3xl">Coursework</h2>
      <p className="mb-4 text-white/70">Selected courses I’ve completed or studied closely (based on Carleton CSE typical curriculum).</p>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {Object.entries(COURSEWORK).map(([k, list]) => (
          <div key={k} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="mb-3 text-sm font-medium text-white/80">{k.replace('_', ' / ')}</div>
            <ul className="list-disc space-y-1 pl-5 text-white/80">
              {list.map((c) => (<li key={c}>{c}</li>))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  const BIO = `I’m Praveen, a 4th‑year Computer Systems Engineering student at Carleton. I enjoy
building clean, Apple‑style UIs backed by fast, reliable data pipelines.
Recently I’ve worked on realtime dashboards, ROS2 robotics, and IoT.`;
  const TIMELINE = [
    { date: "2024–2025", title: "Intern — DizzitUp", detail: "Realtime dashboard (Leaflet, Socket.io, Firebase)." },
    { date: "2024", title: "Capstone — Robot Games", detail: "ROS2 (Humble) on Waveshare rover — motion & telemetry." },
    { date: "2021–2026", title: "B.Eng — Computer Systems (Carleton)", detail: "Projects across IoT, full‑stack, and data viz." },
  ];
  return (
    <section id="about" className="scroll-mt-24 mx-auto max-w-7xl px-4 py-16">
      <h2 className="mb-8 text-2xl font-semibold md:text-3xl">About</h2>
      <div className="grid gap-8 md:grid-cols-[200px,1fr]">
        <div className="flex items-start justify-center">
          <Img src={PROFILE_SRC} title="Praveen Hari" alt="Praveen Hari portrait" className="h-52 w-52 rounded-2xl border border-white/15 object-cover shadow-2xl" />
        </div>
        <div>
          <p className="mb-6 whitespace-pre-line text-white/80">{BIO}</p>
          <div className="relative pl-6">
            <div className="absolute left-2 top-0 h-full w-px bg-white/10" />
            <ul className="space-y-6">
              {TIMELINE.map((t) => (
                <li key={t.date} className="relative">
                  <span className="absolute -left-2 top-1.5 h-3 w-3 rounded-full bg-white" />
                  <div className="text-sm text-white/60">{t.date}</div>
                  <div className="text-lg font-medium">{t.title}</div>
                  <div className="text-white/70">{t.detail}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 mx-auto max-w-7xl px-4 pb-24">
      <h2 className="mb-6 text-2xl font-semibold md:text-3xl">Contact</h2>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="grid gap-2 md:grid-cols-2">
          <div className="text-white/80">📧 Email: <a href="mailto:Praveen22h@gmail.com" className="underline decoration-white/30 hover:decoration-white">Praveen22h@gmail.com</a></div>
          <div className="text-white/80">📞 Phone: <a href="tel:+13435581903" className="underline decoration-white/30 hover:decoration-white">+1 (343) 558‑1903</a></div>
        </div>
      </div>
    </section>
  );
}

function Footer() { return (<footer className="border-t border-white/10 py-6 text-center text-white/60">© {new Date().getFullYear()} Praveen Hari — Portfolio</footer>); }

function Pill({ children }) { return <span className="mr-2 mb-2 inline-flex rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-xs text-white/80">{children}</span>; }
function ProjectModal({ project, onClose }) {
  useEffect(() => { const onKey = (e) => e.key === "Escape" && onClose(); window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey); }, [onClose]);
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 p-4" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/10 bg-neutral-950 p-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button aria-label="Close" onClick={onClose} className="group absolute right-2 top-2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-black shadow-lg ring-1 ring-black/10 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-neutral-950">✕</button>
        <div className="relative z-0 mb-4 h-56 w-full overflow-hidden rounded-xl border border-white/10">
          <Img src={project.file} title={project.title} alt={`${project.title} hero`} className="h-full w-full object-cover" />
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="mb-1 text-xs text-white/60">{project.org}</div>
          <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
          <p className="mb-4 text-white/80">{project.summary}</p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h4 className="mb-2 text-sm font-semibold text-white/80">Highlights</h4>
              <ul className="mb-4 list-disc space-y-1 pl-5 text-white/80">{(project.highlights || []).map((h) => (<li key={h}>{h}</li>))}</ul>
              <h4 className="mb-2 text-sm font-semibold text-white/80">Tech Stack</h4>
              <div className="mb-4">{(project.stack || []).map((s) => (<Pill key={s}>{s}</Pill>))}</div>
              <h4 className="mb-2 text-sm font-semibold text-white/80">Impact</h4>
              <div className="mb-4">{(project.impact || []).map((m) => (<Pill key={m}>{m}</Pill>))}</div>
            </div>
            <div className="md:col-span-1">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/70">
                <p className="mb-2 font-semibold text-white/80">Quick Facts</p>
                <ul className="list-disc space-y-1 pl-5"><li>Role: Developer</li><li>Duration: 4–8 weeks (sample)</li><li>Status: Ongoing</li></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function scrollToId(id) { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); }
if (typeof window !== "undefined") {
  window.requestAnimationFrame(() => {
    const hasProjects = document.getElementById("projects") !== null;
    if (!hasProjects) console.warn("[Self-check] Missing #projects section in DOM");
    const openTags = (document.body.outerHTML.match(/<section/gi) || []).length;
    const closeTags = (document.body.outerHTML.match(/<\/section>/gi) || []).length;
    if (openTags !== closeTags) console.warn(`[Self-check] Unbalanced <section> tags: open=${openTags}, close=${closeTags}`);
    const cardNodes = document.querySelectorAll("article .relative > *");
    if (cardNodes.length < PROJECTS.length) console.warn("[Self-check] Some project cover images/placeholder not rendered");
    const caseBtns = Array.from(document.querySelectorAll('button')).filter(b => (b.textContent || '').trim() === 'Case Study');
    if (caseBtns.length < PROJECTS.length) console.warn("[Self-check] Not all project cards render a 'Case Study' button");
    const modalClose = document.querySelector('[aria-label="Close"]');
    if (document.body.innerHTML.includes('Case Study') && !modalClose) { console.warn('[Self-check] Modal close control not found'); }
  });
}
