/*
Tidal Dashboard trends page: compact operational indicators help readers understand relative pressure across markets, regions, and closure risk.
Does this component choice reinforce or dilute our design philosophy?
*/
import { Link } from "wouter";
import { ArrowLeft, BarChart3 } from "lucide-react";
import { marketSignals, regionalSignals } from "@/lib/historicalData";

const bars = [
  { key: "industry", label: "Industry", className: "bg-primary" },
  { key: "regulation", label: "Regulation", className: "bg-amber-300" },
  { key: "science", label: "Science", className: "bg-cyan-300" },
] as const;

export default function Trends() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="label-caps">Data & trends</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-[-0.055em]">Weekly signal board</h1>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-muted-foreground transition hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to hub
          </Link>
        </header>

        <section className="grid gap-5 md:grid-cols-4">
          {marketSignals.map((signal) => (
            <div key={signal.name} className="tidal-card rounded-3xl p-5">
              <p className="label-caps">{signal.tone}</p>
              <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-primary">{signal.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{signal.name} · {signal.unit}</p>
            </div>
          ))}
        </section>

        <section className="tidal-card mt-7 rounded-3xl p-6">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <BarChart3 className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">Regional signal intensity</h2>
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              {bars.map((bar) => (
                <span key={bar.key} className="inline-flex items-center gap-2"><span className={`h-2.5 w-2.5 rounded-full ${bar.className}`} />{bar.label}</span>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            {regionalSignals.map((row) => (
              <div key={row.region} className="rounded-2xl border border-white/10 bg-black/15 p-4">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="font-semibold text-white">{row.region}</p>
                  <p className="text-xs text-muted-foreground">0–100 intensity index</p>
                </div>
                <div className="space-y-3">
                  {bars.map((bar) => (
                    <div key={bar.key} className="grid grid-cols-[86px_minmax(0,1fr)_38px] items-center gap-3 text-xs">
                      <span className="text-muted-foreground">{bar.label}</span>
                      <span className="h-2.5 overflow-hidden rounded-full bg-white/10">
                        <span className={`block h-full rounded-full ${bar.className}`} style={{ width: `${row[bar.key]}%` }} />
                      </span>
                      <span className="text-right text-white/70">{row[bar.key]}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
