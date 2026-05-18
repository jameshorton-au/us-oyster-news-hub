/**
Tidal Dashboard archive page: previous editions are structured as searchable briefing records, not decorative blog posts.
Does this component choice reinforce or dilute our design philosophy?
*/
import { Link } from "wouter";
import { ArrowLeft, Archive as ArchiveIcon, ExternalLink, FileText } from "lucide-react";
import { archivedEditions } from "@/lib/archiveData";
import { currentEdition, oceanfarmrLogo } from "@/lib/newsData";

export default function Archive() {
  const restoredMarkdownCount = archivedEditions.filter((edition) => edition.fullContent.includes("US Oyster Digest")).length;

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <header className="sticky top-4 z-10 mb-8 rounded-3xl border border-white/10 bg-sidebar/85 px-5 py-4 backdrop-blur-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <a href="https://oceanfarmr.com" target="_blank" rel="noopener noreferrer"><img src={oceanfarmrLogo} alt="Oceanfarmr" className="h-5" /></a>
              <div><p className="label-caps">Archive</p><h1 className="text-xl font-semibold tracking-[-0.03em]">US Oyster AI editions</h1></div>
            </div>
            <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-muted-foreground transition hover:text-white"><ArrowLeft className="h-4 w-4" /> Current edition</Link>
          </div>
        </header>
        <section className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 md:p-10">
          <p className="label-caps">Current live issue</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.055em]">{currentEdition.headline}</h2>
          <p className="shell-text mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">{currentEdition.dek}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-muted-foreground">
            <span className="status-pill border-emerald-300/30 bg-emerald-300/10 text-emerald-100"><ArchiveIcon className="h-3.5 w-3.5" /> {archivedEditions.length} archived editions restored</span>
            <span className="status-pill border-sky-300/30 bg-sky-300/10 text-sky-100"><FileText className="h-3.5 w-3.5" /> {restoredMarkdownCount} from Markdown source files</span>
          </div>
        </section>
        <section className="mt-8 grid gap-5">
          {archivedEditions.map((edition) => (
            <article key={edition.id} className="tidal-card card-hover rounded-3xl p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="max-w-3xl">
                  <p className="label-caps">{edition.date}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em]">{edition.headline}</h3>
                </div>
                <span className="status-pill border-amber-300/30 bg-amber-300/10 text-amber-100"><ArchiveIcon className="h-3.5 w-3.5" /> {edition.urgentCount} urgent</span>
              </div>
              <p className="shell-text mt-4 leading-7 text-muted-foreground">{edition.summary}</p>
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {edition.topStories.map((story) => <div key={story} className="rounded-2xl border border-white/10 bg-black/20 p-3 text-sm leading-6 text-muted-foreground">{story}</div>)}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {edition.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted-foreground">{tag}</span>)}
                {edition.regions.map((region) => <span key={region} className="rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1 text-xs text-sky-100">{region}</span>)}
              </div>
              <details className="mt-5 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <summary className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-primary"><ExternalLink className="h-4 w-4" /> View archived source digest</summary>
                <pre className="mt-4 max-h-96 overflow-auto whitespace-pre-wrap rounded-xl bg-black/30 p-4 text-xs leading-6 text-muted-foreground">{edition.fullContent}</pre>
              </details>
            </article>
          ))}
        </section>
        <footer className="py-10 text-center text-[11px] text-muted-foreground/50"><a href="https://oceanfarmr.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-muted-foreground">An Oceanfarmr USA Publication</a></footer>
      </div>
    </main>
  );
}
