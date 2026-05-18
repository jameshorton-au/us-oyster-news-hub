/*
Tidal Dashboard data contract: each story is an operational signal with category, region, urgency, action cue, and source traceability.
Does this data choice reinforce or dilute our design philosophy?
*/
export type Category = "Industry" | "Regulation" | "Science" | "Jobs" | "Calendar";

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

export const currentEdition = {
  id: "2026-05-18",
  date: "May 18, 2026",
  shortDate: "May 18",
  title: "US Oyster — AI Edition",
  headline: "Seed scale-up, shrimp control, and Chesapeake policy risk",
  dek: "This week's oyster briefing covers Pacific Hybreed's $1M Kona seed expansion, a UW burrowing shrimp breakthrough, a Chesapeake appropriations fight, North Carolina mortality watch, and two farm jobs.",
  heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/101845481/WDjqxWzBX95a3nkagP7cSW/us-oyster-hero-tidal-dashboard-KX8rMSR2KLBGPL35uirLBc.webp",
  fullContent: `# US Oyster — AI Edition | May 18, 2026

**Edition window:** May 11–18, 2026
**Prepared for:** Oceanfarmr USA

---

## TL;DR

This week's US oyster desk is led by a **Kona-based shellfish seed scale-up**, a **Washington farm-management breakthrough**, and a **Chesapeake policy fight** that could affect restored oyster reefs. Pacific Hybreed closed a **$1 million funding round** to expand commercial seed output in Hawaiʻi from **25 million to 200 million seeds per year**, with CEO Melissa DellaTorre positioning uniform seed performance as a labor-saving tool for farmers. University of Washington researchers reported a non-chemical burrowing shrimp control method that reduced live shrimp by **72% to 98%** in Willapa Bay trials. In the Chesapeake, the Chesapeake Bay Foundation warned that a House Appropriations Committee bill would remove protections and funding tied to oyster reef restoration.

---

## Who's in the News

### Melissa DellaTorre and Pacific Hybreed turn shellfish genetics into expansion capital

Pacific Hybreed, an aquaculture biotechnology startup based in Kailua-Kona, closed a **$1 million funding round** backed by Hawaii Angels and Blue Startups. Under CEO **Melissa DellaTorre**, Pacific Hybreed plans to increase Kona output from **25 million seeds per year to 200 million** and broaden its breeding work beyond Pacific oysters.

> "What we're trying to do is really reduce farm labor by having uniform, consistent growth and more predictable harvesting schedules." — Melissa DellaTorre, CEO of Pacific Hybreed.

---

## Industry News

### New Orleans turns oyster demand into restoration supply

Chefs Brigade's **OysterNight New Orleans** returned on May 14 with more than **90 participating restaurants** across greater New Orleans featuring Louisiana and Gulf Coast oysters. The event is tied to the Coalition to Restore Coastal Louisiana's Oyster Shell Recycling Program, which previously recycled **8 tons of oyster shells in a single day**.

---

## Science & Innovation

### Washington researchers test a non-chemical tool for burrowing shrimp

University of Washington researchers led by Jennifer Ruesink tested a vibrocompaction platform that compacts sediment and traps shrimp in burrows. Field trials at four Willapa Bay sites reduced live shrimp by **72% to 98%**, comparable to pesticide control.

### Chesapeake acidification dashboard project brings farmers into adaptation planning

William & Mary and VIMS are leading a **$1.2 million NOAA-funded** project to help the Chesapeake Bay shellfish industry prepare for ocean and coastal acidification, including a web-based dashboard for farm-level decision-making.

---

## Farm Management

### North Carolina enters the high-watch window for oyster mortality

UNCW Shellfish Research Hatchery director Ami Wilbur noted that mortality pressure often peaks from **mid-May through mid-June**. Drought-driven salinity is also a concern. North Carolina has **525 active shellfish leases** covering just over **2,500 acres**.

---

## Regulations

### Chesapeake reef protections enter a federal appropriations fight

The Chesapeake Bay Foundation warned on May 14 that the House Appropriations Committee passed a NOAA funding bill **32–28** that would allow commercial fishing on protected oyster reefs and cut restoration support before moving to the House floor.

---

## Industry Calendar

| Date | Event | Location |
|---|---|---|
| **May 22–24, 2026** | FoodieLand San Francisco | Cow Palace, San Francisco, CA |
| **May 30, 2026** | Oysterfest at Chevy Chase Lake | Chevy Chase, MD |
| **June 6, 2026** | New Bedford Oysterfest 2026 | New Bedford, MA |
| **June 7, 2026** | "Aw, Shucks! The Extraordinary History & Outlook for CT Oysters" | New Haven, CT |

---

## Employment Board

| Role | Employer | Location | Compensation |
|---|---|---|---|
| **Farm Crew Worker** | Hog Island Oyster | Marshall, CA | **$22–$25/hour DOE** |
| **Restaurant Manager** | Found Oyster | Los Angeles, CA | **$80,000–$90,000** |

---

## Quote of the Week

> "Burrowing shrimp have decimated our farm. We've lost 75% of our nursery ground and, as a result, the farm's carrying capacity has fallen from 265,000 bushels of market-ready oysters to 75,000 bushels." — Ken Wiegardt, Jolly Roger Oysters.

---

## References

1. https://www.htdc.org/pacific-hybreed-raises-1m-to-expand-kona-oyster-production/
2. https://www.washington.edu/news/2026/05/14/a-new-method-could-help-washington-shellfish-farmers-control-a-pesky-shrimp/
3. https://www.cbf.org/news/house-committee-passes-disastrous-bill-for-oyster-reefs-and-chesapeake-bay-restoration/
4. https://www.chefsbrigade.org/oyster-night
5. https://www.aquaculturenorthamerica.com/new-project-aims-to-protect-chesapeake-shellfish-industry-from-acidification/
6. https://www.aol.com/news/weather-warms-challenges-ncs-shellfish-090133242.html
7. https://www.newportlifemagazine.com/event/10th-annual-newport-oyster-chowder-festival/2026-05-17/
8. https://aghires.com/career/391480/farm-crew-in-california-marshall
9. https://culinaryagents.com/jobs/696453-Restaurant-Manager
`,
  briefing: [
    "This week's US oyster desk is led by a Kona-based shellfish seed scale-up, a Washington farm-management breakthrough, and a Chesapeake policy fight that could affect restored oyster reefs. Pacific Hybreed closed a $1 million funding round to expand commercial seed output in Hawaiʻi from 25 million to 200 million seeds per year.",
    "For operators, the most urgent watch items are the Chesapeake appropriations bill — which passed committee 32–28 and could strip oyster reef protections — and the North Carolina mortality window running from mid-May through mid-June. Farms should review salinity trends, mortality logs, and Vibrio-season readiness this week."
  ],
  metrics: [
    { label: "Pacific Hybreed funding round", value: "$1M", tone: "green" },
    { label: "Shrimp reduction in UW trials", value: "72–98%", tone: "green" },
    { label: "Chesapeake bill vote margin", value: "32–28", tone: "amber" },
    { label: "NC active shellfish leases", value: "525", tone: "amber" }
  ],
  topSignals: ["Pacific Hybreed seed scale-up", "UW shrimp control breakthrough", "Chesapeake appropriations fight", "NC mortality watch window"],
  quote: {
    text: "Burrowing shrimp have decimated our farm. We've lost 75% of our nursery ground and, as a result, the farm's carrying capacity has fallen from 265,000 bushels of market-ready oysters to 75,000 bushels.",
    speaker: "Ken Wiegardt, Jolly Roger Oysters",
    context: "Speaking to UW News about the need for effective burrowing shrimp control in Willapa Bay."
  }
};

export const newsItems: NewsItem[] = [
  {
    id: "pacific-hybreed-raise",
    title: "Pacific Hybreed raises $1M to scale Kona oyster seed production to 200M per year",
    category: "Industry",
    region: "Pacific / Hawaiʻi",
    summary: "Pacific Hybreed closed a $1 million funding round backed by Hawaii Angels and Blue Startups. CEO Melissa DellaTorre plans to expand Kona output from 25 million to 200 million seeds per year and broaden breeding beyond Pacific oysters.",
    whyItMatters: "Selective breeding and hatchery scale are being treated as productivity infrastructure. Uniform seed reduces grading pressure, smooths harvest scheduling, and lowers labor intensity — a direct farm-economics argument for premium seed.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/101845481/WDjqxWzBX95a3nkagP7cSW/us-oyster-market-dashboard-StAj55tMD9GGbsv5WFHdtt.webp",
    sourceName: "Hawaiʻi Technology Development Corporation",
    sourceUrl: "https://www.htdc.org/pacific-hybreed-raises-1m-to-expand-kona-oyster-production/"
  },
  {
    id: "oysternight-new-orleans",
    title: "OysterNight New Orleans returns with 90+ restaurants and a shell-recycling target",
    category: "Industry",
    region: "Gulf",
    summary: "Chefs Brigade's OysterNight returned on May 14 with more than 90 participating restaurants featuring Louisiana and Gulf Coast oysters. The event is tied to the Coalition to Restore Coastal Louisiana's Oyster Shell Recycling Program, which previously recycled 8 tons of shells in a single day.",
    whyItMatters: "The most valuable oyster promotions now connect provenance, restaurant storytelling, shell recovery, and restoration metrics into one public-facing narrative. This is the model for circular oyster marketing.",
    sourceName: "Chefs Brigade",
    sourceUrl: "https://www.chefsbrigade.org/oyster-night"
  },
  {
    id: "uw-burrowing-shrimp",
    title: "UW researchers achieve 72–98% burrowing shrimp reduction without pesticides in Willapa Bay",
    category: "Science",
    region: "Pacific Northwest",
    summary: "University of Washington researchers led by Jennifer Ruesink tested a vibrocompaction platform that compacts sediment and traps shrimp in burrows. Field trials at four Willapa Bay sites reduced live shrimp by 72% to 98%, comparable to pesticide control.",
    whyItMatters: "Washington growers have been without chemical control options since 2018. This proof-of-principle method gives the industry a non-chemical pathway to sediment stability and nursery ground recovery — even if scale-up and ecological review remain ahead.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/101845481/WDjqxWzBX95a3nkagP7cSW/us-oyster-ecosystem-service-AGxkuMLLmy9yQ54S5aNdWp.webp",
    sourceName: "University of Washington News",
    sourceUrl: "https://www.washington.edu/news/2026/05/14/a-new-method-could-help-washington-shellfish-farmers-control-a-pesky-shrimp/"
  },
  {
    id: "chesapeake-acidification-dashboard",
    title: "VIMS and William & Mary launch $1.2M NOAA-funded acidification dashboard for Chesapeake shellfish farms",
    category: "Science",
    region: "Mid-Atlantic",
    summary: "A $1.2 million NOAA-funded project led by William & Mary's Batten School and VIMS will build a web-based dashboard to help Chesapeake Bay shellfish farmers plan around ocean and coastal acidification, with an advisory committee that includes industry members.",
    whyItMatters: "Acidification is being framed as a farm-planning problem, not only a chemistry problem. Tools that reflect lived operating conditions give growers actionable signals rather than only laboratory indicators.",
    sourceName: "Aquaculture North America",
    sourceUrl: "https://www.aquaculturenorthamerica.com/new-project-aims-to-protect-chesapeake-shellfish-industry-from-acidification/"
  },
  {
    id: "chesapeake-appropriations-fight",
    title: "House Appropriations bill could strip Chesapeake oyster reef protections and restoration funding",
    category: "Regulation",
    region: "Mid-Atlantic",
    summary: "The Chesapeake Bay Foundation warned on May 14 that the House Appropriations Committee passed a NOAA funding bill 32–28 that would allow commercial fishing on protected oyster reefs and cut restoration support before moving to the House floor.",
    whyItMatters: "Restoration reefs, sanctuary rules, and NOAA-supported oyster programs influence public confidence, ecosystem-service accounting, and long-term recruitment across the Bay. This is the edition's urgent policy watch.",
    urgent: true,
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/101845481/WDjqxWzBX95a3nkagP7cSW/us-oyster-regulation-closure-m5gJt9yfksN9bmEJUnHwyL.webp",
    sourceName: "Chesapeake Bay Foundation",
    sourceUrl: "https://www.cbf.org/news/house-committee-passes-disastrous-bill-for-oyster-reefs-and-chesapeake-bay-restoration/"
  },
  {
    id: "nc-mortality-watch",
    title: "North Carolina enters mid-May to mid-June oyster mortality watch window",
    category: "Regulation",
    region: "Southeast",
    summary: "UNCW Shellfish Research Hatchery director Ami Wilbur noted that mortality pressure often peaks from mid-May through mid-June. NC Shellfish Growers Association president Chris Matteo flagged drought-driven salinity as a concern across the state's 525 active leases.",
    whyItMatters: "Now is the week for salinity checks, mortality log reviews by gear type and site, cold-chain readiness for warmer weather, and clear Vibrio-season messaging to buyers and consumers.",
    urgent: true,
    sourceName: "Wilmington Star-News via AOL",
    sourceUrl: "https://www.aol.com/news/weather-warms-challenges-ncs-shellfish-090133242.html"
  },
  {
    id: "newport-oyster-festival",
    title: "10th Annual Newport Oyster & Chowder Festival showcases Rhode Island's 75+ oyster farms",
    category: "Industry",
    region: "Northeast",
    summary: "The 10th Annual Newport Oyster & Chowder Festival ran at Bowen's Wharf on May 16–17, showcasing Rhode Island oyster farms, local restaurants, chowders, and live music. Rhode Island now has more than 75 oyster farms.",
    whyItMatters: "Consumer events that connect working waterfronts to local identity build the public case for aquaculture. Regional flavor diversity is a competitive asset that festivals help communicate at scale.",
    sourceName: "Newport Life Magazine",
    sourceUrl: "https://www.newportlifemagazine.com/event/10th-annual-newport-oyster-chowder-festival/2026-05-17/"
  },
  {
    id: "willapa-bay-carrying-capacity",
    title: "Willapa Bay farm loses 75% of nursery ground to burrowing shrimp, capacity falls from 265K to 75K bushels",
    category: "Science",
    region: "Pacific Northwest",
    summary: "Ken Wiegardt of Jolly Roger Oysters said burrowing shrimp caused the loss of 75% of his nursery ground and reduced farm carrying capacity from 265,000 bushels of market-ready oysters to 75,000 bushels.",
    whyItMatters: "Sediment stability, nursery ground, and benthic pest control are business-continuity issues. The UW shrimp-control research is directly responding to this kind of production loss.",
    sourceName: "University of Washington News",
    sourceUrl: "https://www.washington.edu/news/2026/05/14/a-new-method-could-help-washington-shellfish-farmers-control-a-pesky-shrimp/"
  }
];

export const calendarEvents: CalendarEvent[] = [
  {
    id: "foodieland-sf",
    title: "FoodieLand San Francisco",
    isoDate: "2026-05-22T10:00:00-07:00",
    dateLabel: "May 22–24, 2026",
    location: "Cow Palace, San Francisco, CA",
    note: "Regional oyster vendors including NOLA-style oyster offerings are promoting attendance. Confirm vendor details before travel.",
    url: "https://foodielandnightmarket.com/"
  },
  {
    id: "oysterfest-chevy-chase",
    title: "Oysterfest at Chevy Chase Lake",
    isoDate: "2026-05-30T12:00:00-04:00",
    dateLabel: "May 30, 2026",
    location: "Chevy Chase, MD",
    note: "Second annual Oysterfest with oysters from local restaurants, seafood, drinks, and live music.",
    url: "https://www.chevychaselake.com/"
  },
  {
    id: "new-bedford-oysterfest",
    title: "New Bedford Oysterfest 2026",
    isoDate: "2026-06-06T12:00:00-04:00",
    dateLabel: "June 6, 2026",
    location: "Cisco Kitchen & Bar, New Bedford, MA",
    note: "South Coast aquaculture celebration with local growers and waterfront programming.",
    url: "https://www.ciscokitchenandbar.com/"
  },
  {
    id: "ct-oyster-history",
    title: "\"Aw, Shucks! The Extraordinary History & Outlook for CT Oysters\"",
    isoDate: "2026-06-07T14:00:00-04:00",
    dateLabel: "June 7, 2026",
    location: "Pardee-Morris House, New Haven, CT",
    note: "Public-history and outlook event focused on Connecticut oysters.",
    url: "https://www.nhm.org/"
  }
];

export const jobs: JobPost[] = [
  {
    id: "hog-island-farm-crew",
    role: "Farm Crew Worker",
    employer: "Hog Island Oyster",
    location: "Marshall, CA",
    compensation: "$22–$25/hour DOE",
    deadline: "Open until filled",
    applyUrl: "https://aghires.com/career/391480/farm-crew-in-california-marshall",
    summary: "Full-time farm operations role covering harvesting, sorting, seed planting, husbandry, gear maintenance, machinery support, and environmental cleanup on Tomales Bay."
  },
  {
    id: "found-oyster-manager",
    role: "Restaurant Manager",
    employer: "Found Oyster",
    location: "Los Angeles, CA",
    compensation: "$80,000–$90,000",
    deadline: "Posting expires June 15, 2026",
    applyUrl: "https://culinaryagents.com/jobs/696453-Restaurant-Manager",
    summary: "Full-time floor leadership role with a path to General Manager and hands-on oyster-service expectations, including possible shucking shifts at one of LA's leading oyster bars."
  }
];
