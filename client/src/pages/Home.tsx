/*
Tidal Dashboard home page — lightened edition: full-width single-column card grid with news, calendar, and jobs cards all inline.
The right-hand aside has been removed; all content flows in one responsive grid that fills the available width.
Does this component choice reinforce or dilute our design philosophy?
*/
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { AlertTriangle, Archive, BriefcaseBusiness, CalendarClock, CheckCircle2, Clipboard, ExternalLink, Filter, MapPin, Search, Share2, Sparkles, Waves } from "lucide-react";
import { calendarEvents, currentEdition, jobs, newsItems, oceanfarmrLogo, type Category, type NewsItem, type CalendarEvent, type JobPost } from "@/lib/newsData";

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
    <aside className="lg:sticky lg:top-0 lg:h-screen border-b lg:border-b-0 lg:border-r border-white/12 bg-sidebar/90 backdrop-blur-2xl px-5 py-6 lg:w-[280px] flex-shrink-0">
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
          <button key={category} onClick={() => setActiveFilter(category)} className={`w-full rounded-xl border px-3 py-2.5 text-left text-sm transition ${activeFilter === category ? "border-primary/60 bg-primary/15 text-primary" : "border-white/10 bg-white/[0.04] text-muted-foreground hover:border-white/22 hover:text-white"}`}>
            <span className="flex items-center justify-between">
              {category}
              <span className="text-[11px]">{category === "All" ? newsItems.length + jobs.length + calendarEvents.length : category === "Jobs" ? jobs.length : category === "Calendar" ? calendarEvents.length : newsItems.filter((item) => item.category === category).length}</span>
            </span>
          </button>
        ))}
      </nav>
      <div className="mt-9 rounded-2xl border border-amber-300/25 bg-amber-300/12 p-4">
        <p className="label-caps text-amber-100/80">Next deadline</p>
        <h2 className="mt-2 text-lg font-semibold text-amber-50">Maine Oyster Festival</h2>
        <p className="mt-2 text-sm text-amber-50/70">June 27–28, 2026 · Freeport, ME</p>
      </div>
      <div className="mt-5 flex gap-3 text-sm">
        <Link href="/archive" className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-3 py-2 text-muted-foreground transition hover:border-white/25 hover:text-white"><Archive className="h-4 w-4" /> Archive</Link>
        <Link href="/trends" className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-3 py-2 text-muted-foreground transition hover:border-white/25 hover:text-white"><Waves className="h-4 w-4" /> Trends</Link>
      </div>
    </aside>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-black/30 shadow-2xl shadow-black/30">
      <img src={currentEdition.heroImage} alt="Working oyster farm at dawn" className="absolute inset-0 h-full w-full object-cover opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/52 to-black/8" />
      <div className="relative min-h-[400px] p-6 md:p-10 flex flex-col justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <span className="status-pill border-primary/35 bg-primary/15 text-primary"><Sparkles className="h-3.5 w-3.5" /> Weekly briefing</span>
          <span className="status-pill border-white/15 bg-white/10 text-white/80">Edition {currentEdition.shortDate}</span>
        </div>
        <div className="max-w-3xl">
          <p className="label-caps text-white/60">{currentEdition.title}</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.055em] text-white md:text-5xl">{currentEdition.headline}</h2>
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
          <p className={`mt-3 text-3xl font-semibold tracking-[-0.04em] ${metric.tone === "green" ? "text-primary" : metric.tone === "red" ? "text-red-200" : "text-amber-200"}`}>{metric.value}</p>
        </div>
      ))}
    </div>
  );
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className={`tidal-card card-hover overflow-hidden rounded-3xl flex flex-col ${item.urgent ? "border-amber-300/35" : ""}`}>
      {item.imageUrl && <img src={item.imageUrl} alt="" className="h-44 w-full object-cover opacity-90" />}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <ShellBadge category={item.category} urgent={item.urgent} />
          <span className="text-xs text-muted-foreground">{item.region}</span>
        </div>
        <h3 className="mt-4 text-lg font-semibold leading-tight tracking-[-0.025em]">{item.title}</h3>
        <p className="shell-text mt-3 text-sm leading-6 text-muted-foreground">{item.summary}</p>
        <div className="mt-4 rounded-xl border border-white/12 bg-white/[0.06] p-4">
          <p className="label-caps">Why it matters</p>
          <p className="mt-2 text-sm leading-6 text-foreground/80">{item.whyItMatters}</p>
        </div>
        <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80">
          {item.sourceName}<ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

function CalendarCard({ event }: { event: CalendarEvent }) {
  return (
    <article className="tidal-card card-hover overflow-hidden rounded-3xl flex flex-col">
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <ShellBadge category="Calendar" />
          <span className="rounded-full border border-primary/30 bg-primary/12 px-2.5 py-1 text-xs font-semibold text-primary">{daysUntil(event.isoDate)}d away</span>
        </div>
        <h3 className="mt-4 text-lg font-semibold leading-tight tracking-[-0.025em]">{event.title}</h3>
        <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
          <CalendarClock className="h-3.5 w-3.5 flex-shrink-0" />
          <span>{event.dateLabel}</span>
          <span className="mx-1 opacity-40">·</span>
          <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
          <span>{event.location}</span>
        </div>
        <p className="shell-text mt-3 text-sm leading-6 text-muted-foreground flex-1">{event.note}</p>
        <a href={event.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80">
          Event details <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

function JobCard({ job }: { job: JobPost }) {
  return (
    <article className="tidal-card card-hover overflow-hidden rounded-3xl flex flex-col">
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <ShellBadge category="Jobs" />
          <span className="text-xs text-muted-foreground">{job.location}</span>
        </div>
        <h3 className="mt-4 text-lg font-semibold leading-tight tracking-[-0.025em]">{job.role}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{job.employer}</p>
        <p className="shell-text mt-3 text-sm leading-6 text-muted-foreground flex-1">{job.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">{job.compensation}</span>
          <span className="rounded-full border border-white/12 bg-white/[0.06] px-2.5 py-1 text-xs text-muted-foreground">{job.deadline}</span>
          {job.applyPhone && <span className="rounded-full border border-white/12 bg-white/[0.06] px-2.5 py-1 text-xs text-muted-foreground">{job.applyPhone}</span>}
        </div>
        {job.applyUrl && (
          <a href={job.applyUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80">
            <BriefcaseBusiness className="h-4 w-4" /> Apply now
          </a>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"All" | Category>("All");

  // Build the unified card list: news items first, then calendar and jobs appended when filter is All or matching
  const filteredNews = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return newsItems.filter((item) => {
      const filterMatch = activeFilter === "All" || item.category === activeFilter;
      const queryMatch = !q || [item.title, item.summary, item.whyItMatters, item.region, item.category].join(" ").toLowerCase().includes(q);
      return filterMatch && queryMatch;
    });
  }, [activeFilter, searchQuery]);

  const showCalendar = activeFilter === "All" || activeFilter === "Calendar";
  const showJobs = activeFilter === "All" || activeFilter === "Jobs";

  return (
    <div className="min-h-screen lg:flex">
      <Sidebar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <main className="flex-1 min-w-0 p-4 md:p-6 lg:p-8">
        <Hero />
        <div className="mt-5"><MetricRail /></div>

        {/* Executive briefing */}
        <div className="mt-6 tidal-card rounded-3xl p-5 md:p-6">
          <p className="label-caps">Executive briefing</p>
          <div className="mt-4 grid gap-5 md:grid-cols-2">
            {currentEdition.briefing.map((paragraph) => (
              <p key={paragraph} className="shell-text text-base leading-8 text-foreground/85">{paragraph}</p>
            ))}
          </div>
          <blockquote className="mt-6 border-l-2 border-primary/70 pl-5 font-serif text-xl leading-8 text-foreground/90">
            "{currentEdition.quote.text}"
            <footer className="mt-2 font-sans text-sm text-muted-foreground">{currentEdition.quote.speaker} · {currentEdition.quote.context}</footer>
          </blockquote>
        </div>

        {/* Search bar */}
        <div className="mt-6 flex flex-col gap-3 rounded-3xl border border-white/12 bg-white/[0.04] p-3 md:flex-row md:items-center" id="signals">
          <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3">
            <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search story, region, source, or risk signal"
              className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>
          <button
            onClick={() => { setSearchQuery(""); setActiveFilter("All"); }}
            className="rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-muted-foreground transition hover:text-white hover:border-white/25"
          >
            Reset
          </button>
        </div>

        {/* Full-width card grid — news + calendar + jobs */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredNews.map((item) => <NewsCard key={item.id} item={item} />)}
          {showCalendar && calendarEvents.map((event) => <CalendarCard key={event.id} event={event} />)}
          {showJobs && jobs.map((job) => <JobCard key={job.id} job={job} />)}
        </div>

        {/* Farm management signal */}
        {(activeFilter === "All") && (
          <div className="mt-6 tidal-card rounded-3xl p-5">
            <div className="flex items-center gap-3">
              <Clipboard className="h-5 w-5 text-primary flex-shrink-0" />
              <h2 className="text-xl font-semibold tracking-[-0.04em]">Farm management signal</h2>
            </div>
            <p className="shell-text mt-4 leading-7 text-muted-foreground">
              This week's management theme is summer resilience and market positioning. NOAA's CIFARM launch signals long-term federal support — growers should track research calls for proposals. Cornell's finding that farmed oysters replenish wild populations is a strong permitting argument: document your farm's proximity to wild reefs. On the disease front, the new USDA genomic selection research on Dermo resistance is worth sharing with your seed supplier. Review your Vibrio-season protocols and cold-chain documentation before peak summer harvest.
            </p>
          </div>
        )}

        <footer className="py-10 text-center text-[11px] text-muted-foreground/50">
          <a href="https://oceanfarmr.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-muted-foreground">An Oceanfarmr USA Publication</a>
        </footer>
      </main>
    </div>
  );
}
