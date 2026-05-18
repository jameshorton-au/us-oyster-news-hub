/*
Tidal Dashboard home page: a persistent intelligence rail, dark estuary hero, compact searchable signal cards, and practical action panels.
Does this component choice reinforce or dilute our design philosophy?
*/
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { AlertTriangle, Archive, BriefcaseBusiness, CalendarClock, CheckCircle2, Clipboard, ExternalLink, Filter, Search, Share2, Sparkles, Waves } from "lucide-react";
import { calendarEvents, currentEdition, jobs, newsItems, oceanfarmrLogo, type Category, type NewsItem } from "@/lib/newsData";

const categories: Array<"All" | Category> = ["All", "Industry", "Regulation", "Science", "Jobs", "Calendar"];
const categoryClasses: Record<string, string> = {
  Industry: "border-emerald-300/30 bg-emerald-300/10 text-emerald-100",
  Regulation: "border-amber-300/35 bg-amber-300/12 text-amber-100",
  Science: "border-cyan-300/30 bg-cyan-300/10 text-cyan-100",
  Jobs: "border-violet-300/30 bg-violet-300/10 text-violet-100",
  Calendar: "border-sky-300/30 bg-sky-300/10 text-sky-100",
};

function daysUntil(isoDate: string) {
  const diff = new Date(isoDate).getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function copyEdition() {
  const text = `${currentEdition.title} | ${currentEdition.date}\n${currentEdition.headline}\n\n${window.location.href}`;
  navigator.clipboard?.writeText(text);
}

function ShellBadge({ category, urgent }: { category: string; urgent?: boolean }) {
  return (
    <span className={`status-pill ${categoryClasses[category] ?? "border-white/20 bg-white/10 text-white"}`}>
      {urgent ? <AlertTriangle className="h-3.5 w-3.5" /> : <CheckCircle2 className="h-3.5 w-3.5" />}
      {urgent ? "Urgent · " : ""}{category}
    </span>
  );
}

function Sidebar({ activeFilter, setActiveFilter }: { activeFilter: "All" | Category; setActiveFilter: (value: "All" | Category) => void }) {
  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen border-b lg:border-b-0 lg:border-r border-white/10 bg-sidebar/80 backdrop-blur-2xl px-5 py-6 lg:w-[300px] flex-shrink-0">
      <a href="https://oceanfarmr.com" target="_blank" rel="noopener noreferrer" className="inline-flex opacity-90 transition hover:opacity-100">
        <img src={oceanfarmrLogo} alt="Oceanfarmr" className="h-6 w-auto" />
      </a>
      <div className="mt-8">
        <p className="label-caps">US Oyster</p>
        <h1 className="mt-2 text-3xl font-semibold leading-none tracking-[-0.04em]">AI Edition</h1>
        <p className="mt-3 text-sm text-muted-foreground">Digest · {currentEdition.date}</p>
        <p className="mt-3 text-[11px] text-white/45">
          <a href="https://oceanfarmr.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-white/80">An Oceanfarmr USA Publication</a>
        </p>
      </div>
      <nav className="mt-9 space-y-2">
        {categories.map((category) => (
          <button key={category} onClick={() => setActiveFilter(category)} className={`w-full rounded-xl border px-3 py-2.5 text-left text-sm transition ${activeFilter === category ? "border-primary/60 bg-primary/12 text-primary" : "border-white/8 bg-white/[0.035] text-muted-foreground hover:border-white/20 hover:text-white"}`}>
            <span className="flex items-center justify-between">
              {category}
              <span className="text-[11px]">{category === "All" ? newsItems.length + jobs.length + calendarEvents.length : category === "Jobs" ? jobs.length : category === "Calendar" ? calendarEvents.length : newsItems.filter((item) => item.category === category).length}</span>
            </span>
          </button>
        ))}
      </nav>
      <div className="mt-9 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4">
        <p className="label-caps text-amber-100/80">Next deadline</p>
        <h2 className="mt-2 text-lg font-semibold text-amber-50">FoodieLand San Francisco</h2>
        <p className="mt-2 text-sm text-amber-50/70">May 22–24, 2026 · Cow Palace, SF</p>
      </div>
      <div className="mt-5 flex gap-3 text-sm">
        <Link href="/archive" className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-muted-foreground transition hover:text-white"><Archive className="h-4 w-4" /> Archive</Link>
        <Link href="/trends" className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-muted-foreground transition hover:text-white"><Waves className="h-4 w-4" /> Trends</Link>
      </div>
    </aside>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 shadow-2xl shadow-black/40">
      <img src={currentEdition.heroImage} alt="Working oyster farm at dawn" className="absolute inset-0 h-full w-full object-cover opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/52 to-black/8" />
      <div className="relative min-h-[430px] p-6 md:p-10 flex flex-col justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <span className="status-pill border-primary/35 bg-primary/15 text-primary"><Sparkles className="h-3.5 w-3.5" /> Weekly briefing</span>
          <span className="status-pill border-white/15 bg-white/10 text-white/80">Edition {currentEdition.shortDate}</span>
        </div>
        <div className="max-w-3xl">
          <p className="label-caps text-white/60">{currentEdition.title}</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.055em] text-white md:text-6xl">{currentEdition.headline}</h2>
          <p className="shell-text mt-5 max-w-2xl text-lg leading-8 text-white/82">{currentEdition.dek}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button onClick={copyEdition} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"><Share2 className="h-4 w-4" /> Copy edition link</button>
            <a href="#signals" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"><Filter className="h-4 w-4" /> Review signals</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricRail() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {currentEdition.metrics.map((metric) => (
        <div key={metric.label} className="tidal-card rounded-2xl p-5">
          <p className="label-caps">{metric.label}</p>
          <p className={`mt-3 text-3xl font-semibold tracking-[-0.04em] ${metric.tone === "green" ? "text-primary" : metric.tone === "red" ? "text-red-200" : "text-amber-100"}`}>{metric.value}</p>
        </div>
      ))}
    </div>
  );
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className={`tidal-card card-hover overflow-hidden rounded-3xl ${item.urgent ? "border-amber-300/30" : ""}`}>
      {item.imageUrl && <img src={item.imageUrl} alt="" className="h-44 w-full object-cover opacity-90" />}
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2"><ShellBadge category={item.category} urgent={item.urgent} /><span className="text-xs text-muted-foreground">{item.region}</span></div>
        <h3 className="mt-4 text-xl font-semibold leading-tight tracking-[-0.025em]">{item.title}</h3>
        <p className="shell-text mt-3 text-sm leading-6 text-muted-foreground">{item.summary}</p>
        <div className="mt-5 rounded-2xl border border-white/10 bg-black/15 p-4">
          <p className="label-caps">Why it matters</p>
          <p className="mt-2 text-sm leading-6 text-white/78">{item.whyItMatters}</p>
        </div>
        <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80">{item.sourceName}<ExternalLink className="h-4 w-4" /></a>
      </div>
    </article>
  );
}

function CalendarPanel() {
  return (
    <section className="tidal-card rounded-3xl p-5">
      <div className="flex items-center gap-3"><CalendarClock className="h-5 w-5 text-primary" /><h2 className="text-2xl font-semibold tracking-[-0.04em]">Calendar watch</h2></div>
      <div className="mt-5 space-y-4">
        {calendarEvents.map((event) => (
          <a key={event.id} href={event.url} target="_blank" rel="noopener noreferrer" className="block rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-primary/40 hover:bg-white/[0.07]">
            <div className="flex items-start justify-between gap-4"><div><p className="text-sm font-semibold text-white">{event.title}</p><p className="mt-1 text-xs text-muted-foreground">{event.dateLabel} · {event.location}</p></div><span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs text-primary">{daysUntil(event.isoDate)}d</span></div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{event.note}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

function JobsPanel() {
  return (
    <section className="tidal-card rounded-3xl p-5">
      <div className="flex items-center gap-3"><BriefcaseBusiness className="h-5 w-5 text-primary" /><h2 className="text-2xl font-semibold tracking-[-0.04em]">Jobs board</h2></div>
      <div className="mt-5 space-y-4">
        {jobs.map((job) => (
          <a key={job.id} href={job.applyUrl} target="_blank" rel="noopener noreferrer" className="block rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-primary/40 hover:bg-white/[0.07]">
            <p className="text-sm font-semibold text-white">{job.role}</p>
            <p className="mt-1 text-xs text-muted-foreground">{job.employer} · {job.location}</p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{job.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs"><span className="rounded-full bg-white/10 px-2.5 py-1">{job.compensation}</span><span className="rounded-full bg-white/10 px-2.5 py-1">{job.deadline}</span>{job.applyPhone && <span className="rounded-full bg-white/10 px-2.5 py-1">{job.applyPhone}</span>}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"All" | Category>("All");

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return newsItems.filter((item) => {
      const filterMatch = activeFilter === "All" || item.category === activeFilter;
      const queryMatch = !q || [item.title, item.summary, item.whyItMatters, item.region, item.category].join(" ").toLowerCase().includes(q);
      return filterMatch && queryMatch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <div className="min-h-screen lg:flex">
      <Sidebar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <main className="flex-1 p-4 md:p-7 lg:p-8">
        <Hero />
        <div className="mt-5"><MetricRail /></div>
        <section className="mt-7 grid gap-6 xl:grid-cols-[minmax(0,1fr)_390px]" id="signals">
          <div className="space-y-6">
            <div className="tidal-card rounded-3xl p-5 md:p-6">
              <p className="label-caps">Executive briefing</p>
              <div className="mt-4 grid gap-5 md:grid-cols-2">
                {currentEdition.briefing.map((paragraph) => <p key={paragraph} className="shell-text text-base leading-8 text-white/82">{paragraph}</p>)}
              </div>
              <blockquote className="mt-6 border-l-2 border-primary/70 pl-5 font-serif text-xl leading-8 text-white/90">“{currentEdition.quote.text}”<footer className="mt-2 font-sans text-sm text-muted-foreground">{currentEdition.quote.speaker} · {currentEdition.quote.context}</footer></blockquote>
            </div>
            <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-black/20 p-3 md:flex-row md:items-center">
              <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3"><Search className="h-4 w-4 text-muted-foreground" /><input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search story, region, source, or risk signal" className="w-full bg-transparent text-sm text-white placeholder:text-muted-foreground focus:outline-none" /></div>
              <button onClick={() => { setSearchQuery(""); setActiveFilter("All"); }} className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-muted-foreground transition hover:text-white">Reset</button>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {filteredItems.map((item) => <NewsCard key={item.id} item={item} />)}
            </div>
          </div>
          <aside className="space-y-6">
            <CalendarPanel />
            <JobsPanel />
            <section className="tidal-card rounded-3xl p-5">
              <div className="flex items-center gap-3"><Clipboard className="h-5 w-5 text-primary" /><h2 className="text-2xl font-semibold tracking-[-0.04em]">Farm management signal</h2></div>
              <p className="shell-text mt-4 leading-7 text-muted-foreground">This week’s management theme is mortality readiness. North Carolina growers are entering the mid-May to mid-June high-watch window. Farms should check salinity trends, review mortality logs by gear type and site, confirm cold-chain procedures for warmer weather, and prepare clear Vibrio-season messaging for buyers and consumers.</p>
            </section>
          </aside>
        </section>
        <footer className="py-10 text-center text-[11px] text-muted-foreground/50"><a href="https://oceanfarmr.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-muted-foreground">An Oceanfarmr USA Publication</a></footer>
      </main>
    </div>
  );
}
