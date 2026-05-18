# US Oyster News Hub — Design Ideas

## Chosen Design: Tidal Dashboard (Coastal Editorial)

**Design Movement:** Coastal editorial — a blend of maritime cartography, broadsheet journalism, and modern data dashboard.

**Core Principles:**
1. Information density with breathing room — editorial column widths, generous leading, clear hierarchy
2. Coastal palette — deep navy, oyster shell off-white, sea-glass teal, warm amber accents
3. Sidebar-anchored layout — persistent left sidebar with edition metadata; main content in a scrollable two-column grid
4. Tactile typography — Space Grotesk for headlines (character, personality), Inter for body (legibility)

**Color Philosophy:**
- Background: deep navy `#0D1B2A` — evokes deep water, professionalism
- Surface cards: `#122236` — slightly lighter navy for card elevation
- Accent teal: `#2EC4B6` — sea glass, used for badges, links, highlights
- Warm amber: `#F4A261` — used for urgent/alert items
- Off-white text: `#E8EDF2` — oyster shell tone, easy on dark backgrounds

**Layout Paradigm:** Left sidebar (fixed, 260px) + main scrollable content area. Sidebar holds edition identity, filter controls, and quick-nav. Main area uses a responsive card grid (2-col desktop, 1-col mobile).

**Signature Elements:**
1. Oyster shell divider — thin horizontal rule with a small shell glyph at center
2. Category badges — pill-shaped, teal/amber/slate depending on category
3. Countdown timers on calendar events — live ticking display

**Interaction Philosophy:** Instant keyword search with live card highlighting; filter bar collapses to icon row on mobile; share menus appear on hover.

**Animation:** Cards fade-in with 30ms stagger on mount (opacity 0→1, translateY 8px→0, 200ms ease-out). Filter transitions are instant. No decorative motion.

**Typography System:**
- Display: Space Grotesk 700 — section headers, edition title
- Body: Inter 400/500 — article text, metadata
- Mono: JetBrains Mono — source URLs, reference numbers
