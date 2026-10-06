/*
Tidal Dashboard data contract: each story is an operational signal with category, region, urgency, action cue, and source traceability.
Does this data choice reinforce or dilute our design philosophy?
*/
export type Category = "Industry" | "Regulation" | "Science" | "Community" | "Ecosystem" | "Farm" | "Jobs" | "Calendar";
export type NewsItem = {
  id: string;
  title: string;
  category: Category;
  region: string;
  summary: string;
  whyItMatters: string;
  urgent?: boolean;
  imageUrl?: string;
  sourceName: string;
  sourceUrl: string;
};
export type CalendarEvent = {
  id: string;
  title: string;
  isoDate: string;
  dateLabel: string;
  location: string;
  note: string;
  url: string;
};
export type JobPost = {
  id: string;
  role: string;
  employer: string;
  location: string;
  compensation: string;
  deadline: string;
  applyUrl?: string;
  applyPhone?: string;
  summary: string;
};

export const oceanfarmrLogo = "https://d2xsxph8kpxj0f.cloudfront.net/101845481/YdoSnj7mHMWmcidNEoA8jc/RGBLogo_Oceanfarmr_Inline_WhiteandGreen_a90a5b7e.webp";

// Edition: October 6, 2026
export const currentEdition = {
  id: "2026-10-06",
  date: "October 6, 2026",
  shortDate: "Oct 6",
  title: "US Oyster — AI Edition",
  headline: "Closures, seed capacity and a Chesapeake oyster rebound",
  dek: "This week: North Carolina sanitation controls tighten, Alaska adds hatchery capacity, Maryland reports sanctuary gains, and October opens a national seafood conversation.",
  heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/101845481/WDjqxWzBX95a3nkagP7cSW/us-oyster-hero-tidal-dashboard-KX8rMSR2KLBGPL35uirLBc.webp",
  fullContent: `# US Oyster — AI Edition | October 6, 2026
**An Oceanfarmr USA Publication**

This week’s operating picture pairs immediate food-safety controls with longer-horizon capacity and restoration signals. North Carolina has imposed temporary shellfish closures across waters in five coastal counties, making live sanitation checks an immediate harvest control. In Alaska, a new floating mariculture laboratory is expected to provide workforce training and capacity for up to three million oyster seed annually. Maryland’s latest five-year oyster-management review points to continued sanctuary gains, while National Seafood Month provides a timely market and public-engagement platform for domestic farmed shellfish. [1] [2] [3] [4]

## TL;DR

| Signal | What changed | Why it matters for growers |
|---|---|---|
| **North Carolina closures** | Temporary shellfish closures took effect on 4 October in named waters across five coastal counties. [1] | Treat the current proclamation and sanitation map as day-of-harvest controls; verify status before loading product. |
| **Alaska seed capacity** | UAS Sitka acquired a floating mariculture lab with stated capacity for up to 3 million oyster seed each year. [2] | The facility adds regional hatchery, research and workforce infrastructure, although teaching use begins in early 2027. |
| **Maryland sanctuary trend** | A five-year state review reports that nearly 40% of Maryland oyster sanctuaries have positive growth or meet scientific benchmarks. [3] | The outcome strengthens the management case for protected reefs alongside harvest areas and planned habitat investment. |
| **National Seafood Month** | NOAA opened October’s national campaign around sustainable wild-caught and farmed seafood. [4] | Farms, dealers and associations have a defined month for origin, traceability and farmed-seafood communication. |

## Industry News

### Regulatory complexity remains a growth constraint for North American aquaculture

Aquaculture North America reports that the 2026 *State of World Fisheries and Aquaculture* identifies North America as producing only 1% of global aquatic-animal aquaculture production, despite being the largest seafood importer. The article links this gap to multi-agency approvals and long permitting pathways, including the wide range of state and federal agencies that a California shellfish operation may need to navigate. [5]

This is a strategic context signal rather than a new shellfish rule. For oyster businesses, the practical response is to maintain clear permitting records, map approvals by site and activity, and separate actual compliance requirements from broader policy debate.

## Regulations & Compliance

### North Carolina imposes temporary shellfish closures in five coastal counties

North Carolina’s Division of Marine Fisheries lists temporary shellfish closures effective 4 October for named waters in Brunswick, New Hanover, Pender, Carteret and Pamlico counties. The notice includes areas such as Tubbs Inlet, Shallotte River and Inlet, Lockwoods Folly River and Inlet, parts of Myrtle Grove and Topsail sounds, Oyster Creek, Nelson Bay, South River, Bay River and Jones Bay. [1]

This is an urgent operational signal. Harvesters and dealers should verify the current proclamation and interactive sanitation map before harvest, preserve location and lot records, and update customer commitments if availability is affected.

### Oregon’s updated shellfish notice keeps commercial product distinction clear

Oregon Department of Agriculture’s shellfish status page was updated on 2 October. It reports a coast-wide recreational razor-clam closure for domoic acid while stating that commercial shellfish products remain safe for consumers. [6]

The notice concerns Oregon’s recreational programme and does not establish an oyster-farm closure. It remains a useful communications reminder: describe the affected species, harvesting channel and geography precisely when discussing shellfish-safety news with customers.

## Science & Innovation

### UAS Sitka expands mariculture training and oyster-seed capacity

The University of Alaska Southeast’s Sitka campus has acquired a floating mariculture laboratory from OceansAlaska. The university states that the facility can produce seeded line for kelp growers and up to three million oyster seed annually, alongside seed for other shellfish species. It will support applied research, in-water skills development and public education, with coursework planned from early 2027. [2]

The value is not only physical capacity. Locating hatchery operations, student training and applied research in one platform creates a more direct pathway from marine-science education to regional production needs.

## Farm Management

### Maine introduces a new aquaculture-application portal through an operator information session

Maine Department of Marine Resources has launched an electronic aquaculture-application portal and will hold a remote information session on 7 October. The session is intended to explain the new system and may be relevant to applicants navigating leases, limited-purpose licences and supporting documentation. [7]

For prospective and expanding farms, this is a near-term administrative-readiness task. Review existing site, cultivation and ownership records before using the portal, then treat the session as an opportunity to resolve application-process questions early.

## Community & Collaboration

### NOAA launches National Seafood Month with farmed seafood in the message

NOAA Fisheries has marked October as National Seafood Month 2026, describing the United States as a global leader in sustainable seafood from both wild-caught and farmed sources. [4]

The campaign does not itself change demand conditions. It does create a useful, credible frame for farms and seafood businesses to communicate local provenance, seasonal availability, handling standards and the role of responsible aquaculture in domestic seafood supply.

## Ecosystem Services

### Maryland sanctuary review reports continued oyster-population gains

The Chesapeake Bay Foundation reports that Maryland’s five-year oyster-management review found nearly 40% of oyster sanctuaries either experiencing positive growth or already meeting scientific benchmarks. The report also identifies 16 sanctuaries in the pipeline for further habitat investment and describes record harvest performance in areas open to the public fishery during recent seasons. [3]

The figures should not be read as a blanket claim for every reef or farm. They do indicate that protected sanctuary habitat, recruitment and sustained restoration investment can coexist with productive adjacent harvest areas when management objectives are kept distinct.

## Industry Calendar

| Date | Event | Location |
|---|---|---|
| **October 7, 2026** | Maine DMR Aquaculture Application Portal Information Session | Online · 5–6 pm EDT |
| **October 17–18, 2026** | 43rd Annual Oyster Fest | Downtown Oyster Bay and Theodore Roosevelt Park, New York |
| **October 26, 2026** | Aquaculture Horizons 2026 — International Conference & Expo on Aquaculture & Seafood | Event details via Aquaculture North America |
| **October 30, 2026** | Application deadline: Assistant Hatchery Manager, Downeast Institute | Beals, Maine |

## Employment Board

| Role | Employer | Location | Application route |
|---|---|---|---|
| **Assistant Hatchery Manager** | Downeast Institute for Applied Marine Research & Education | Beals, Maine | Aquaculture employment board listing; application deadline 30 October [8] |

## Who’s in the News

### University of Alaska Southeast Sitka — Alaska

**New floating mariculture laboratory.** UAS Sitka has added a floating lab designed to combine oyster-seed production, shellfish research and workforce development. [2]

The facility’s stated capacity of up to three million oyster seed a year makes it notable for regional operators, while its planned use in coursework provides a practical bridge between hatchery operations and the next generation of mariculture workers.

## Quote of the Week

> “The floating lab takes something that’s been imagined and diligently worked on for a long time and suddenly makes it real.” — Jeremy Rupp, UAS Sitka campus director [2]

## References

[1]: https://www.deq.nc.gov/about/divisions/marine-fisheries/rules-proclamations-and-size-and-bag-limits/polluted-area-proclamations "Polluted Area Proclamations — North Carolina Department of Environmental Quality"
[2]: https://www.alaska.edu/news/system/2026-uas-sitka-new-mariculture-floating-lab.php "UAS Sitka expands hands-on mariculture opportunities with floating lab — University of Alaska"
[3]: https://www.cbf.org/news/maryland-oyster-sanctuaries-show-widespread-success/ "Maryland Oyster Sanctuaries Show Widespread Success — Chesapeake Bay Foundation"
[4]: https://www.fisheries.noaa.gov/feature-story/celebrate-national-seafood-month "Celebrate National Seafood Month with NOAA Fisheries"
[5]: https://www.aquaculturenorthamerica.com/regulation-and-growth/ "Regulation and Growth — Aquaculture North America"
[6]: https://www.oregon.gov/oda/food-safety/shellfish/pages/shellfish-closures.aspx "Recreational Shellfish Biotoxin Closures — Oregon Department of Agriculture"
[7]: https://www.maine.gov/dmr/meetings/wed-10072026-1200-aquaculture-application-portal-information-session "Aquaculture Application Portal Information Session — Maine Department of Marine Resources"
[8]: https://www.instagram.com/p/DdBhQTwiL2h/ "Assistant Hatchery Manager listing — Youth in Blue Economy"
`,
  briefing: [
    "The immediate operating priority is sanitation control. North Carolina’s temporary closures cover named waters across five counties, so the latest official map and proclamation should be part of every harvest and dispatch decision. Oregon’s biotoxin notice reinforces the need to communicate closure scope accurately by species, place and market channel.",
    "The longer-term picture is more constructive. UAS Sitka’s floating laboratory adds production and workforce capacity, Maryland’s sanctuary review reports positive trends across many protected reefs, and National Seafood Month provides a useful public frame for credible domestic farmed-seafood communication."
  ],
  metrics: [
    { label: "NC temporary closures", value: "5 counties", tone: "red" },
    { label: "UAS seed capacity", value: "Up to 3M/year", tone: "green" },
    { label: "MD sanctuary gains", value: "Nearly 40%", tone: "green" },
    { label: "National Seafood Month", value: "October", tone: "neutral" }
  ],
  topSignals: ["North Carolina temporary closures", "Alaska oyster-seed capacity", "Maryland sanctuary review", "National Seafood Month"],
  quote: {
    text: "The floating lab takes something that’s been imagined and diligently worked on for a long time and suddenly makes it real.",
    speaker: "Jeremy Rupp",
    author: "Jeremy Rupp",
    role: "UAS Sitka Campus Director",
    context: "On the new floating mariculture laboratory’s role in applied training and regional industry development."
  },
  spotlight: {
    name: "University of Alaska Southeast Sitka",
    location: "Sitka, Alaska",
    award: "New floating mariculture laboratory",
    body: "UAS Sitka has acquired a floating laboratory to build practical mariculture skills, advance applied research and support local shellfish and seaweed growers.",
    body2: "The university states that the platform can produce up to three million oyster seed annually and will enter coursework in early 2027."
  }
};

export const newsItems: NewsItem[] = [
  {
    id: "north-american-aquaculture-regulation-growth-2026",
    title: "Regulatory complexity remains a growth constraint for aquaculture",
    category: "Industry",
    region: "National",
    summary: "Aquaculture North America reports that North America produced 1% of global aquatic-animal aquaculture output in 2024, despite being the largest seafood importer, and identifies complex approval pathways as a core structural constraint.",
    whyItMatters: "This is strategic context for oyster operators. Maintain a clear map of approvals, site obligations and renewal dates so administrative complexity does not become an avoidable operational risk.",
    sourceName: "Aquaculture North America",
    sourceUrl: "https://www.aquaculturenorthamerica.com/regulation-and-growth/"
  },
  {
    id: "north-carolina-temporary-shellfish-closures-october-2026",
    title: "North Carolina closes named shellfish waters across five counties",
    category: "Regulation",
    region: "Southeast",
    summary: "North Carolina DEQ lists temporary shellfish closures effective 4 October in named waters across Brunswick, New Hanover, Pender, Carteret and Pamlico counties.",
    whyItMatters: "This is an immediate harvest and traceability control. Verify the latest official proclamation and sanitation map before harvest, loading or dispatch.",
    urgent: true,
    sourceName: "North Carolina Department of Environmental Quality",
    sourceUrl: "https://www.deq.nc.gov/about/divisions/marine-fisheries/rules-proclamations-and-size-and-bag-limits/polluted-area-proclamations"
  },
  {
    id: "uas-sitka-floating-mariculture-lab-oyster-seed-2026",
    title: "UAS Sitka adds floating lab with stated 3 million oyster-seed capacity",
    category: "Science",
    region: "Alaska",
    summary: "UAS Sitka has acquired a floating mariculture laboratory that the university says can cultivate up to 3 million oyster seed annually, alongside seeded line for kelp and other shellfish seed.",
    whyItMatters: "The platform combines hatchery capacity, applied research and workforce skills development, creating a more direct regional link between training and production infrastructure.",
    sourceName: "University of Alaska",
    sourceUrl: "https://www.alaska.edu/news/system/2026-uas-sitka-new-mariculture-floating-lab.php"
  },
  {
    id: "maine-aquaculture-application-portal-information-session-2026",
    title: "Maine opens information session for new aquaculture-application portal",
    category: "Farm",
    region: "Northeast",
    summary: "Maine DMR has launched an electronic aquaculture-application portal and scheduled a remote information session for 7 October to explain the new system.",
    whyItMatters: "Applicants should prepare site, cultivation and supporting records before using the portal, then use the session to resolve process questions before submitting a lease or licence application.",
    sourceName: "Maine Department of Marine Resources",
    sourceUrl: "https://www.maine.gov/dmr/meetings/wed-10072026-1200-aquaculture-application-portal-information-session"
  },
  {
    id: "noaa-national-seafood-month-2026",
    title: "NOAA opens National Seafood Month with farmed seafood in focus",
    category: "Community",
    region: "National",
    summary: "NOAA Fisheries has opened National Seafood Month 2026, positioning sustainable farmed and wild-caught American seafood within the campaign’s October outreach programme.",
    whyItMatters: "The campaign provides an established public-engagement frame for farms, dealers and associations to communicate origin, responsible production and seasonal availability.",
    sourceName: "NOAA Fisheries",
    sourceUrl: "https://www.fisheries.noaa.gov/feature-story/celebrate-national-seafood-month"
  },
  {
    id: "maryland-oyster-sanctuaries-five-year-review-2026",
    title: "Maryland sanctuary review reports widespread oyster-population gains",
    category: "Ecosystem",
    region: "Mid-Atlantic",
    summary: "Chesapeake Bay Foundation reports that Maryland’s latest five-year oyster-management review found nearly 40% of sanctuaries have positive growth or meet scientific benchmarks, with 16 more slated for habitat investment.",
    whyItMatters: "The signal supports management approaches that sustain protected reef habitat alongside separate harvest areas, while recognising that results will vary across individual reefs and locations.",
    sourceName: "Chesapeake Bay Foundation",
    sourceUrl: "https://www.cbf.org/news/maryland-oyster-sanctuaries-show-widespread-success/"
  },
  {
    id: "oregon-shellfish-biotoxin-status-october-2026",
    title: "Oregon separates recreational biotoxin controls from commercial product safety",
    category: "Regulation",
    region: "Pacific Northwest",
    summary: "Oregon’s 2 October status update reports a recreational razor-clam closure for domoic acid while stating commercial shellfish products remain safe for consumers.",
    whyItMatters: "Safety communications should name the precise species, waters and harvest channel involved, rather than generalising a recreational closure to all commercial shellfish.",
    sourceName: "Oregon Department of Agriculture",
    sourceUrl: "https://www.oregon.gov/oda/food-safety/shellfish/pages/shellfish-closures.aspx"
  }
];

export const calendarEvents: CalendarEvent[] = [
  {
    id: "maine-aquaculture-application-portal-session-2026",
    title: "Maine DMR Aquaculture Application Portal Information Session",
    isoDate: "2026-10-07T17:00:00-04:00",
    dateLabel: "October 7, 2026 · 5–6 pm EDT",
    location: "Online",
    note: "A remote session explaining Maine DMR’s new electronic aquaculture application portal for prospective and current applicants.",
    url: "https://www.maine.gov/dmr/meetings/wed-10072026-1200-aquaculture-application-portal-information-session"
  },
  {
    id: "oyster-bay-oyster-fest-2026",
    title: "43rd Annual Oyster Fest",
    isoDate: "2026-10-17T10:00:00-04:00",
    dateLabel: "October 17–18, 2026",
    location: "Oyster Bay, New York",
    note: "The annual Oyster Bay community event returns to downtown Oyster Bay and Theodore Roosevelt Park, with local oysters, shell recycling and oyster heritage in the programme.",
    url: "https://libn.com/2026/10/02/oyster-fest-returns-to-oyster-bay-oct-17-and-18/"
  },
  {
    id: "aquaculture-horizons-2026",
    title: "Aquaculture Horizons 2026",
    isoDate: "2026-10-26T09:00:00-04:00",
    dateLabel: "October 26, 2026",
    location: "See event organiser details",
    note: "International conference and expo on aquaculture and seafood, listed in Aquaculture North America’s upcoming-events calendar.",
    url: "https://www.aquaculturenorthamerica.com/regulation-and-growth/"
  },
  {
    id: "downeast-institute-hatchery-manager-deadline-2026",
    title: "Assistant Hatchery Manager application deadline",
    isoDate: "2026-10-30T23:59:00-04:00",
    dateLabel: "October 30, 2026",
    location: "Beals, Maine",
    note: "Deadline for the Downeast Institute Assistant Hatchery Manager opportunity in shellfish aquaculture, hatchery production and applied marine research.",
    url: "https://www.instagram.com/p/DdBhQTwiL2h/"
  }
];

export const jobs: JobPost[] = [
  {
    id: "downeast-institute-assistant-hatchery-manager-october-2026",
    role: "Assistant Hatchery Manager",
    employer: "Downeast Institute for Applied Marine Research & Education",
    location: "Beals, Maine",
    compensation: "Not stated in the public listing",
    deadline: "October 30, 2026",
    applyUrl: "https://jobs.rwfm.tamu.edu/",
    summary: "Shellfish aquaculture and hatchery-management role combining hatchery production, applied marine research and team leadership. The public listing directs candidates to the aquaculture employment board for the application route."
  }
];
