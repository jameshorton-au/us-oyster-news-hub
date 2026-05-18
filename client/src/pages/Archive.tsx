/**
 * US Oyster News Hub — Archive Page
 * Design: Tidal Dashboard (Coastal Editorial)
 */

import { Link } from "wouter";
import { archivedEditions } from "@/lib/archiveData";
import { ArrowLeft, ArchiveIcon, AlertTriangle } from "lucide-react";

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Sticky header */}
      <header className="sticky top-0 z-10 bg-sidebar/95 backdrop-blur border-b border-border px-4 py-3 flex items-center gap-3">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/101845481/YdoSnj7mHMWmcidNEoA8jc/RGBLogo_Oceanfarmr_Inline_WhiteandGreen_a90a5b7e.webp"
          alt="Oceanfarmr"
          className="h-5 opacity-90"
        />
        <span className="font-display font-semibold text-sm text-foreground">US Oyster · AI Edition</span>
        <span className="text-muted-foreground mx-1">/</span>
        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <ArchiveIcon className="w-3.5 h-3.5" /> Archive
        </span>
        <Link href="/" className="ml-auto flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Current Edition
        </Link>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="font-display font-bold text-2xl text-foreground mb-1">Past Editions</h1>
        <p className="text-sm text-muted-foreground mb-8">All archived editions of the US Oyster AI Newsletter.</p>

        {archivedEditions.length === 0 ? (
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <ArchiveIcon className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">No archived editions yet.</p>
            <p className="text-xs text-muted-foreground mt-1">Past editions will appear here after each weekly update.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {archivedEditions.map((edition) => (
              <div key={edition.id} className="bg-card border border-border rounded-lg p-5 hover:border-teal-700/40 transition-colors">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <p className="text-xs font-mono text-teal-400">{edition.date}</p>
                    <h2 className="font-display font-semibold text-base text-foreground mt-0.5">{edition.headline}</h2>
                  </div>
                  {edition.urgentCount > 0 && (
                    <span className="badge-urgent text-[11px] px-2 py-0.5 rounded-full flex items-center gap-1 flex-shrink-0">
                      <AlertTriangle className="w-3 h-3" />
                      {edition.urgentCount} urgent
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{edition.summary}</p>
                <div className="flex flex-wrap gap-1.5">
                  {edition.tags.map((tag) => (
                    <span key={tag} className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 text-muted-foreground border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <footer className="mt-12 text-center">
          <p className="text-[11px] text-muted-foreground/50">
            <a href="https://oceanfarmr.com" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors">
              An Oceanfarmr USA Publication
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
