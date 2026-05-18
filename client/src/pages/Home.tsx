/**
 * US Oyster News Hub — Home Page
 * Design: Tidal Dashboard (Coastal Editorial)
 * Palette: Deep Navy (#0D1B2A) + Sea-Glass Teal + Oyster Off-White + Amber
 * Layout: Fixed left sidebar (260px) + scrollable main content grid
 * Typography: Space Grotesk (headings) + Inter (body) + JetBrains Mono (refs)
 */

import { useState, useMemo, useCallback } from "react";
import { Link } from "wouter";
import { currentEdition, type NewsItem } from "@/lib/newsData";
import {
  Search,
  AlertTriangle,
  ExternalLink,
  Calendar,
  Briefcase,
  ChevronRight,
  BookOpen,
  Layers,
  Users,
  Leaf,
  FlaskConical,
  FileText,
  Wrench,
  Archive,
  Share2,
  Copy,
  Check,
} from "lucide-react";

// ─── Category config ────────────────────────────────────────────────────────

const CATEGORIES = [
  { key: "all", label: "All", icon: Layers },
  { key: "Industry", label: "Industry", icon: Briefcase },
  { key: "Science", label: "Science", icon: FlaskConical },
  { key: "Regulations", label: "Regulations", icon: FileText },
  { key: "Farm Management", label: "Farm Mgmt", icon: Wrench },
  { key: "Community", label: "Community", icon: Users },
  { key: "Ecosystem Services", label: "Ecosystem", icon: Leaf },
];

function categoryBadgeClass(category: string): string {
  const map: Record<string, string> = {
    Industry: "badge-industry",
    Science: "badge-science",
    Regulations: "badge-regulations",
    "Farm Management": "badge-farm",
    Community: "badge-community",
    "Ecosystem Services": "badge-ecosystem",
    Employment: "badge-employment",
  };
  return map[category] ?? "badge-employment";
}

// ─── Highlight helper ────────────────────────────────────────────────────────

function highlight(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-teal-500/30 text-teal-200 rounded-sm px-0.5">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

// ─── Countdown hook ──────────────────────────────────────────────────────────

function useCountdown(isoDate: string): string {
  const target = new Date(isoDate + "T00:00:00");
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) return "Today";
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 1) return "Tomorrow";
  return `${days} days`;
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function NewsCard({ item, searchQuery, delay }: { item: NewsItem; searchQuery: string; delay: number }) {
  const [copied, setCopied] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(item.sourceUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [item.sourceUrl]);

  return (
    <article
      className="card-animate bg-card border border-border rounded-lg p-5 flex flex-col gap-3 hover:border-teal-700/50 transition-colors duration-200 relative group"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap gap-1.5 items-center">
          <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${categoryBadgeClass(item.category)}`}>
            {item.category}
          </span>
          {item.urgent && (
            <span className="badge-urgent text-[11px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" />
              Urgent
            </span>
          )}
        </div>
        {/* Share button */}
        <div className="relative">
          <button
            onClick={() => setShareOpen((o) => !o)}
            className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-md hover:bg-white/5 text-muted-foreground hover:text-foreground"
            aria-label="Share"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>
          {shareOpen && (
            <div className="absolute right-0 top-8 z-20 bg-popover border border-border rounded-lg shadow-xl p-2 flex flex-col gap-1 min-w-[160px]">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-md hover:bg-accent text-foreground"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-teal-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied!" : "Copy source URL"}
              </button>
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-md hover:bg-accent text-foreground"
                onClick={() => setShareOpen(false)}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Open source
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Headline */}
      <h3 className="font-display font-semibold text-base leading-snug text-foreground">
        {highlight(item.headline, searchQuery)}
      </h3>

      {/* Summary */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {highlight(item.summary, searchQuery)}
      </p>

      {/* Tags */}
      {item.tags && item.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-auto pt-1">
          {item.tags.map((tag) => (
            <span key={tag} className="text-[11px] px-1.5 py-0.5 rounded bg-white/5 text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Source link */}
      <a
        href={item.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 transition-colors mt-1 font-mono"
      >
        <ExternalLink className="w-3 h-3 flex-shrink-0" />
        <span className="truncate">{item.source}</span>
      </a>
    </article>
  );
}

function CalendarCard({ event }: { event: { id: string; title: string; isoDate: string; location: string; notes: string } }) {
  const countdown = useCountdown(event.isoDate);
  const date = new Date(event.isoDate + "T00:00:00");
  const formatted = date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  return (
    <div className="flex gap-3 py-3 border-b border-border last:border-0">
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-teal-900/30 border border-teal-700/30 flex flex-col items-center justify-center">
        <span className="text-[10px] font-mono text-teal-400 uppercase">
          {date.toLocaleDateString("en-US", { month: "short" })}
        </span>
        <span className="text-lg font-display font-bold text-teal-300 leading-none">
          {date.getDate()}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground leading-snug">{event.title}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{event.location}</p>
        <p className="text-xs text-teal-400 mt-0.5 font-mono">{countdown} · {formatted}</p>
      </div>
    </div>
  );
}

function JobCard({ job }: { job: { id: string; role: string; employer: string; location: string; compensation: string; description: string; applyUrl: string } }) {
  return (
    <div className="flex flex-col gap-2 py-3 border-b border-border last:border-0">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-foreground">{job.role}</p>
          <p className="text-xs text-muted-foreground">{job.employer} · {job.location}</p>
        </div>
        <span className="text-xs font-mono text-amber-400 whitespace-nowrap">{job.compensation}</span>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">{job.description}</p>
      <a
        href={job.applyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-xs text-teal-400 hover:text-teal-300 transition-colors"
      >
        Apply <ChevronRight className="w-3 h-3" />
      </a>
    </div>
  );
}

// ─── Main page ───────────────────────────────────────────────────────────────

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredNews = useMemo(() => {
    let items = currentEdition.news;
    if (activeFilter !== "all") {
      items = items.filter((item) => item.category === activeFilter);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.headline.toLowerCase().includes(q) ||
          item.summary.toLowerCase().includes(q) ||
          item.body.toLowerCase().includes(q) ||
          (item.tags ?? []).some((t) => t.toLowerCase().includes(q))
      );
    }
    return items;
  }, [searchQuery, activeFilter]);

  const urgentCount = currentEdition.news.filter((n) => n.urgent).length;

  return (
    <div className="min-h-screen bg-background flex">
      {/* ── Sidebar ── */}
      <aside className="hidden lg:flex flex-col w-64 flex-shrink-0 border-r border-border bg-sidebar sticky top-0 h-screen overflow-y-auto">
        <div className="p-5 border-b border-border">
          {/* Oceanfarmr logo */}
          <a href="https://oceanfarmr.com" target="_blank" rel="noopener noreferrer" className="block mb-3">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/101845481/YdoSnj7mHMWmcidNEoA8jc/RGBLogo_Oceanfarmr_Inline_WhiteandGreen_a90a5b7e.webp"
              alt="Oceanfarmr"
              className="h-5 opacity-90 hover:opacity-100 transition-opacity"
            />
          </a>
          <h1 className="font-display font-bold text-sm text-foreground leading-tight">
            US Oyster
          </h1>
          <p className="text-xs text-teal-400 font-medium mt-0.5">AI Edition</p>
          <p className="text-xs text-muted-foreground mt-1">{currentEdition.date}</p>
          <p className="text-[11px] text-muted-foreground/50 mt-2">
            <a href="https://oceanfarmr.com" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors">
              An Oceanfarmr USA Publication
            </a>
          </p>
        </div>

        {/* Edition summary */}
        <div className="p-5 border-b border-border">
          <p className="text-[11px] text-muted-foreground uppercase tracking-widest mb-2 font-medium">This Edition</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{currentEdition.editionWindow}</p>
          <div className="mt-3 flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Stories</span>
              <span className="font-mono text-foreground">{currentEdition.news.length}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Urgent</span>
              <span className={`font-mono ${urgentCount > 0 ? "text-amber-400" : "text-foreground"}`}>{urgentCount}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Events</span>
              <span className="font-mono text-foreground">{currentEdition.calendarEvents.length}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Jobs</span>
              <span className="font-mono text-foreground">{currentEdition.jobs.length}</span>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="p-4 flex flex-col gap-1">
          <a href="#tldr" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground px-2 py-1.5 rounded-md hover:bg-accent transition-colors">
            <BookOpen className="w-3.5 h-3.5" /> TL;DR
          </a>
          <a href="#spotlight" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground px-2 py-1.5 rounded-md hover:bg-accent transition-colors">
            <Users className="w-3.5 h-3.5" /> Who's in the News
          </a>
          <a href="#news" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground px-2 py-1.5 rounded-md hover:bg-accent transition-colors">
            <Layers className="w-3.5 h-3.5" /> All Stories
          </a>
          <a href="#calendar" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground px-2 py-1.5 rounded-md hover:bg-accent transition-colors">
            <Calendar className="w-3.5 h-3.5" /> Calendar
          </a>
          <a href="#jobs" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground px-2 py-1.5 rounded-md hover:bg-accent transition-colors">
            <Briefcase className="w-3.5 h-3.5" /> Jobs
          </a>
          <Link href="/archive" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground px-2 py-1.5 rounded-md hover:bg-accent transition-colors mt-2 border-t border-border pt-3">
            <Archive className="w-3.5 h-3.5" /> Archive
          </Link>
        </nav>
      </aside>

      {/* ── Main content ── */}
      <main className="flex-1 min-w-0 overflow-y-auto">
        {/* Hero banner */}
        <header className="relative bg-gradient-to-br from-navy-900 to-background border-b border-border overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1400&q=80")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative px-6 py-8 lg:py-10">
            {/* Mobile logo */}
            <div className="flex items-center gap-3 mb-4 lg:hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/101845481/YdoSnj7mHMWmcidNEoA8jc/RGBLogo_Oceanfarmr_Inline_WhiteandGreen_a90a5b7e.webp"
                alt="Oceanfarmr"
                className="h-5 opacity-90"
              />
            </div>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-teal-400 uppercase tracking-widest">US Oyster · AI Edition</span>
                  {urgentCount > 0 && (
                    <span className="badge-urgent text-[11px] px-2 py-0.5 rounded-full flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      {urgentCount} urgent
                    </span>
                  )}
                </div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground leading-tight">
                  {currentEdition.headline}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">{currentEdition.date} · {currentEdition.editionWindow}</p>
              </div>
            </div>
          </div>
        </header>

        <div className="px-4 md:px-6 py-6 max-w-4xl mx-auto space-y-10">

          {/* TL;DR */}
          <section id="tldr">
            <div className="shell-divider mb-4">TL;DR</div>
            <div className="bg-card border border-border rounded-lg p-5">
              <p className="text-sm text-muted-foreground leading-relaxed">{currentEdition.tldr}</p>
            </div>
          </section>

          {/* Spotlight */}
          <section id="spotlight">
            <div className="shell-divider mb-4">Who's in the News</div>
            <div className="bg-card border border-teal-700/30 rounded-lg p-5 flex flex-col md:flex-row gap-5">
              <div className="flex-shrink-0 md:w-2/5">
                <p className="text-[11px] text-teal-400 font-mono uppercase tracking-widest mb-1">Spotlight</p>
                <h3 className="font-display font-bold text-lg text-foreground">{currentEdition.spotlight.name}</h3>
                <p className="text-sm text-muted-foreground">{currentEdition.spotlight.title}, {currentEdition.spotlight.company}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{currentEdition.spotlight.location}</p>
              </div>
              <div className="flex-1 space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">{currentEdition.spotlight.body}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{currentEdition.spotlight.body2}</p>
              </div>
            </div>
          </section>

          {/* News section */}
          <section id="news">
            <div className="shell-divider mb-4">Stories</div>

            {/* Search + filter */}
            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search stories…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-sm bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
            </div>

            {/* Filter bar */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {CATEGORIES.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveFilter(key)}
                  className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-colors duration-150 ${
                    activeFilter === key
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent text-muted-foreground border-border hover:border-teal-700/50 hover:text-foreground"
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  {label}
                </button>
              ))}
            </div>

            {/* Cards grid */}
            {filteredNews.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground text-sm">
                No stories match your search or filter.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredNews.map((item, i) => (
                  <NewsCard key={item.id} item={item} searchQuery={searchQuery} delay={i * 40} />
                ))}
              </div>
            )}
          </section>

          {/* Quote of the week */}
          <section>
            <div className="shell-divider mb-4">Quote of the Week</div>
            <blockquote className="bg-card border-l-4 border-teal-500 rounded-r-lg p-5">
              <p className="text-base text-foreground leading-relaxed italic">
                "{currentEdition.quote.text}"
              </p>
              <footer className="mt-3">
                <p className="text-sm font-semibold text-teal-400">{currentEdition.quote.attribution}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{currentEdition.quote.context}</p>
              </footer>
            </blockquote>
          </section>

          {/* Calendar */}
          <section id="calendar">
            <div className="shell-divider mb-4">Industry Calendar</div>
            <div className="bg-card border border-border rounded-lg px-5 divide-y divide-border">
              {currentEdition.calendarEvents.map((event) => (
                <CalendarCard key={event.id} event={event} />
              ))}
            </div>
          </section>

          {/* Jobs */}
          <section id="jobs">
            <div className="shell-divider mb-4">Employment Board</div>
            <div className="bg-card border border-border rounded-lg px-5 divide-y divide-border">
              {currentEdition.jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </section>

          {/* References */}
          <section>
            <div className="shell-divider mb-4">References</div>
            <div className="bg-card border border-border rounded-lg p-5">
              <ol className="space-y-2">
                {currentEdition.references.map((ref) => (
                  <li key={ref.id} className="flex gap-2 text-xs">
                    <span className="font-mono text-muted-foreground flex-shrink-0">[{ref.id}]</span>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:text-teal-300 transition-colors break-all"
                    >
                      {ref.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-border pt-6 pb-10 text-center">
            <p className="text-xs text-muted-foreground">
              US Oyster — AI Edition · {currentEdition.date}
            </p>
            <p className="text-[11px] text-muted-foreground/50 mt-2">
              <a href="https://oceanfarmr.com" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors">
                An Oceanfarmr USA Publication
              </a>
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
