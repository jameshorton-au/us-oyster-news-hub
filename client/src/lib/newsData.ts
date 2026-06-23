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

// Edition: June 23, 2026
export const currentEdition = {
  id: "2026-06-23",
  date: "June 23, 2026",
  shortDate: "Jun 23",
  title: "US Oyster — AI Edition",
  headline: "NOAA's $13.5M aquaculture institute, farmed oysters boosting wild populations, and Dermo disease genomics",
  dek: "This week: NOAA launches CIFARM, Maryland commits $31.5M to Chesapeake restoration, Cornell finds farmed oysters replenishing wild Long Island Sound populations, and Florida's Vertical Oyster Gardens hit 1,500 deployed.",
  heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/101845481/WDjqxWzBX95a3nkagP7cSW/us-oyster-hero-tidal-dashboard-KX8rMSR2KLBGPL35uirLBc.webp",
  fullContent: `# US Oyster — AI Edition | June 23, 2026

**An Oceanfarmr USA Publication**

This week's U.S. oyster signal spans federal investment, restoration science, and farm technology. NOAA has established a new $13.5 million Cooperative Institute to advance domestic aquaculture. Maryland's Governor announced $31.5 million for Chesapeake Bay ecological restoration. Cornell University published genetic evidence that farmed eastern oysters are actively replenishing wild populations in Long Island Sound. And new genomic selection research from the USDA offers a path toward breeding Dermo-resistant oyster strains.

## TL;DR

| Signal | What changed this week | Why it matters for growers |
|---|---|---|
| **NOAA CIFARM launch** | NOAA established the $13.5M Cooperative Institute Fostering Aquaculture Research and Markets (CIFARM) at UNH.[1] | Federal investment in domestic aquaculture R&D and market development signals long-term policy support for the sector. |
| **Maryland $31.5M restoration** | Governor Wes Moore announced $31.5M for 25 ecological restoration projects across 188 Chesapeake Bay sites.[2] | Restoration funding directly supports the water quality and habitat conditions that oyster farming depends on. |
| **Farmed oysters boost wild populations** | Cornell University study finds genetic evidence that farmed eastern oysters are breeding with wild populations in western and central Long Island Sound.[3] | Oyster farms may provide an unrecognised ecosystem service — wild stock replenishment — that strengthens the case for aquaculture expansion. |
| **Dermo genomic selection** | USDA-ARS research shows genomic selection yields a 9% accuracy gain over pedigree-based selection for Dermo disease resistance in eastern oysters.[4] | A practical path toward breeding more resistant strains is emerging, which could reduce end-of-growout mortality losses. |
| **Florida Vertical Oyster Gardens** | The Vertical Oyster Gardens Initiative has 1,500 gardens deployed in Volusia and Flagler counties, targeting 2,000 this year.[5] | Community-scale restoration is expanding rapidly, building public awareness and water-quality benefits at the dock level. |

## Industry News

### NOAA launches $13.5M aquaculture institute to expand domestic seafood production

The National Oceanic and Atmospheric Administration has established the Cooperative Institute Fostering Aquaculture Research and Markets (CIFARM), hosted by the University of New Hampshire. Backed by approximately $13.5 million in initial funding over five years, CIFARM aims to advance marine aquaculture research, address the United States' dependence on imported seafood, and support environmentally responsible farming practices.[1]

The institute represents a significant federal commitment to domestic aquaculture at a time when the U.S. imports roughly 70–85% of its seafood. For oyster farmers, CIFARM's market development mandate is as important as its research function — the sector needs both better science and stronger consumer demand infrastructure.

## Regulations & Compliance

### Maryland commits $31.5 million for Chesapeake Bay ecological restoration

Governor Wes Moore announced that the Maryland Department of Natural Resources is awarding $31.5 million in grants from the Chesapeake and Atlantic Coastal Bays Trust Fund. The funding covers 25 ecological restoration projects encompassing 188 sites, targeting improvements to water quality and wildlife habitats.[2]

The investment is directly relevant to Maryland's $600 million seafood industry. Oyster farming in the Chesapeake depends on water quality thresholds that restoration projects help maintain. The funding also supports the broader oyster reef restoration work that underpins both commercial and ecological recovery in the Bay.

## Science & Innovation

### Cornell study: farmed oysters are genetically replenishing wild Long Island Sound populations

A new study from Cornell University provides genetic evidence that farmed eastern oysters are adding to and interbreeding with wild eastern oyster populations in the western and central Long Island Sound.[3] Researchers suggest that oyster farms may provide a previously unrecognised ecosystem service by boosting nearby wild populations that have declined drastically over the last century.

The finding has significant implications for how aquaculture is perceived and regulated. If farms demonstrably support wild stock recovery, the case for permitting and expanding shellfish aquaculture in degraded coastal systems becomes substantially stronger.

### Genomic selection offers a 9% accuracy gain for Dermo disease resistance

Research published in *Frontiers in Genetics* evaluated marker-assisted and genomic selection for improving survival of eastern oysters infected with *Perkinsus marinus* (Dermo disease).[4] The study, led by USDA-ARS researchers at the National Cold Water Marine Aquaculture Center, found that while no single SNP explained more than 4% of genetic variance for survival, genomic selection using a 3,500-SNP subset yielded a 9% relative increase in accuracy over pedigree-based methods.

Dermo disease is consistently ranked by producers as a top concern because it causes mortality toward the end of the growout cycle. This research offers a practical path toward breeding programs that can reduce that risk without requiring full-panel genotyping.

## Farm Management

### Machine learning automates oyster seed counting in hatcheries

A new open-source image-recognition system has been developed to automate oyster seed counting in hatchery and nursery settings.[6] The system improves record-keeping accuracy, supports production tracking, and reduces the manual labour burden on hatchery staff. Automated seed counting is a foundational data quality improvement for any farm using digital management systems.

## Community & Collaboration

### The Nature Conservancy's SOAR program: 5.6 million oysters purchased, 60+ acres of reef restored

The Nature Conservancy's Supporting Oyster Aquaculture and Restoration (SOAR) program has purchased more than 5.6 million farmed oysters since 2020, helping regenerate over 60 acres of native shellfish reefs while sustaining farm jobs.[7] In Virginia, the Friends of the Rappahannock partnered with local farms and the Rappahannock Tribe to pilot growing diploid oysters for restoration purposes, reconnecting the Tribe with their cultural food source.

## Ecosystem Services

### Vertical Oyster Gardens Initiative reaches 1,500 deployed in Florida

The Vertical Oyster Gardens Initiative has approximately 1,500 vertical oyster gardens deployed across Volusia and Flagler counties in Florida, with a target of 2,000 by year-end.[5] The gardens are made from recycled oyster shells sourced from local restaurants, quarantined for six months, and suspended from docks to create juvenile oyster habitat. Each mature oyster filters up to 50 gallons of water per day, making the programme a meaningful water-quality intervention at community scale.

The Coastal Conservation Association of Florida provides shells and supports expansion, while founder Chuck Gleichmann leads community engagement. The initiative is a replicable model for dock-level restoration that engages homeowners directly in coastal stewardship.

## Industry Calendar

| Date | Event | Location |
|---|---|---|
| **June 27–28, 2026** | The Maine Oyster Festival | Freeport, ME |
| **August 10, 2026** | Sanitation Control Procedures for Fish and Fishery Products | LSU AgCenter, Baton Rouge, LA |
| **August 11–13, 2026** | Basic Seafood HACCP | LSU AgCenter, Baton Rouge, LA |

## Employment Board

| Role | Employer | Location | Notes |
|---|---|---|---|
| **Aquaculture Apprenticeship Program** | Maine Aquaculture Apprenticeship (GMRI) | Maine | Paid apprenticeship combining farm work with structured training; applications accepted on a rolling basis. |

## Quote of the Week

> "A single oyster can filter up to 50 gallons of water a day. Over a year or two years, these vertical oyster gardens can start to recruit upwards of 50 to 100-plus oysters." — Logan Kennovin, Coastal Conservation Association Florida.[5]

## References

[1]: https://www.foodbusinessmea.com/noaa-launches-us13-5m-aquaculture-institute-to-expand-domestic-seafood-production/ "NOAA Launches $13.5M Aquaculture Institute — Food Business MEA"
[2]: https://sbybiz.org/governor-wes-moore-announces-31-5-million-for-ecological-restoration-projects-to-improve-water-quality-in-local-waterways-and-the-chesapeake-bay-2/ "Governor Wes Moore Announces $31.5 Million for Ecological Restoration — SBY Biz"
[3]: https://www.eurekalert.org/news-releases/1132620 "Farmed oysters may help replenish dwindling wild populations — EurekAlert / Cornell University"
[4]: https://www.frontiersin.org/journals/genetics/articles/10.3389/fgene.2026.1821653/full "Evaluation of genomic selection to improve survival of eastern oysters infected with Perkinsus marinus — Frontiers in Genetics"
[5]: https://mynews13.com/fl/orlando/news/2026/06/20/vertical-oyster-gardens-expand-across-volusia-and-flagler-counties "Vertical Oyster Gardens expand across Volusia and Flagler counties — Spectrum News 13"
[6]: https://www.sciencedirect.com/science/article/pii/S0144860926000889 "Applying Machine Learning Tools to Advance Quality Control in Oyster Seed Counting — Aquacultural Engineering"
[7]: https://blog.nature.org/2026/06/20/resilience-through-restoration-oyster-growers-find-new-opportunities-in-conservation/ "Resilience Through Restoration — The Nature Conservancy"
[8]: https://92moose.fm/upcoming-maine-festivals-summer-2026/ "Maine Oyster Festival June 27–28, 2026 — 92 Moose"
[9]: https://www.gmri.org/stories/from-apprentice-to-manager-and-mentor-kat-lipps-full-circle-journey-in-maine-aquaculture/ "From Apprentice to Manager and Mentor: Kat Lipp's Full-Circle Journey in Maine Aquaculture — GMRI"
`,
  briefing: [
    "NOAA has launched CIFARM, a $13.5M cooperative institute at UNH focused on domestic aquaculture research and market development.",
    "Cornell University genetic research shows farmed eastern oysters are actively replenishing wild populations in Long Island Sound — a new ecosystem service argument for aquaculture expansion."
  ],
  metrics: [
    { label: "NOAA CIFARM funding", value: "$13.5M", tone: "green" },
    { label: "Maryland restoration grants", value: "$31.5M", tone: "green" },
    { label: "Genomic selection accuracy gain", value: "+9%", tone: "green" },
    { label: "FL vertical oyster gardens", value: "1,500", tone: "green" }
  ],
  topSignals: ["NOAA CIFARM launch", "Maryland $31.5M Chesapeake restoration", "Farmed oysters replenishing wild LI Sound populations", "Dermo genomic selection breakthrough"],
  quote: {
    text: "A single oyster can filter up to 50 gallons of water a day. Over a year or two years, these vertical oyster gardens can start to recruit upwards of 50 to 100-plus oysters.",
    speaker: "Logan Kennovin, Coastal Conservation Association Florida",
    context: "Speaking about the Vertical Oyster Gardens Initiative expanding across Volusia and Flagler counties in Florida."
  }
};

export const newsItems: NewsItem[] = [
  {
    id: "noaa-cifarm-launch",
    title: "NOAA launches $13.5M Cooperative Institute Fostering Aquaculture Research and Markets",
    category: "Industry",
    region: "National",
    summary: "NOAA established CIFARM at the University of New Hampshire, backed by $13.5M over five years to advance marine aquaculture research, reduce seafood import dependence, and support environmentally responsible farming.",
    whyItMatters: "Federal investment in aquaculture R&D and market development signals long-term policy support. The market development mandate is as important as the research function — the sector needs both better science and stronger consumer demand infrastructure.",
    sourceName: "Food Business MEA",
    sourceUrl: "https://www.foodbusinessmea.com/noaa-launches-us13-5m-aquaculture-institute-to-expand-domestic-seafood-production/"
  },
  {
    id: "maryland-chesapeake-restoration",
    title: "Maryland commits $31.5 million for Chesapeake Bay ecological restoration across 188 sites",
    category: "Regulation",
    region: "Mid-Atlantic",
    summary: "Governor Wes Moore announced $31.5M from the Chesapeake and Atlantic Coastal Bays Trust Fund for 25 ecological restoration projects at 188 sites, targeting water quality and wildlife habitat improvements.",
    whyItMatters: "Restoration funding directly supports the water quality conditions that oyster farming depends on. The investment also underpins oyster reef restoration work critical to both commercial and ecological recovery in the Chesapeake.",
    urgent: true,
    sourceName: "SBY Biz",
    sourceUrl: "https://sbybiz.org/governor-wes-moore-announces-31-5-million-for-ecological-restoration-projects-to-improve-water-quality-in-local-waterways-and-the-chesapeake-bay-2/"
  },
  {
    id: "cornell-farmed-oysters-wild-populations",
    title: "Cornell study finds farmed eastern oysters genetically replenishing wild Long Island Sound populations",
    category: "Science",
    region: "Northeast",
    summary: "Cornell University researchers found genetic evidence that farmed eastern oysters are adding to and interbreeding with wild eastern oyster populations in the western and central Long Island Sound, suggesting farms provide a previously unrecognised wild stock replenishment service.",
    whyItMatters: "If farms demonstrably support wild stock recovery, the case for permitting and expanding shellfish aquaculture in degraded coastal systems becomes substantially stronger. This finding could reshape regulatory and public perception of oyster farming.",
    urgent: true,
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/101845481/WDjqxWzBX95a3nkagP7cSW/us-oyster-ecosystem-service-AGxkuMLLmy9yQ54S5aNdWp.webp",
    sourceName: "EurekAlert / Cornell University",
    sourceUrl: "https://www.eurekalert.org/news-releases/1132620"
  },
  {
    id: "dermo-genomic-selection",
    title: "USDA-ARS research: genomic selection yields 9% accuracy gain for Dermo disease resistance in eastern oysters",
    category: "Science",
    region: "National",
    summary: "Research published in Frontiers in Genetics evaluated marker-assisted and genomic selection for improving survival of eastern oysters infected with Perkinsus marinus. Genomic selection using a 3,500-SNP subset yielded a 9% relative accuracy gain over pedigree-based methods.",
    whyItMatters: "Dermo disease causes mortality at the end of the growout cycle and is consistently ranked a top concern by producers. This research offers a practical path toward breeding more resistant strains without requiring full-panel genotyping.",
    sourceName: "Frontiers in Genetics",
    sourceUrl: "https://www.frontiersin.org/journals/genetics/articles/10.3389/fgene.2026.1821653/full"
  },
  {
    id: "ml-oyster-seed-counting",
    title: "Machine learning tool automates oyster seed counting to improve hatchery record-keeping",
    category: "Science",
    region: "National",
    summary: "A new open-source image-recognition system automates oyster seed counting in hatchery and nursery settings, improving record-keeping accuracy, production tracking, and reducing manual labour burden.",
    whyItMatters: "Automated seed counting is a foundational data quality improvement for any farm using digital management systems. Accurate seed counts underpin production planning, stocking decisions, and ESG reporting.",
    sourceName: "Aquacultural Engineering / ScienceDirect",
    sourceUrl: "https://www.sciencedirect.com/science/article/pii/S0144860926000889"
  },
  {
    id: "nature-conservancy-soar",
    title: "The Nature Conservancy's SOAR program: 5.6 million oysters purchased, 60+ acres of reef restored since 2020",
    category: "Industry",
    region: "Mid-Atlantic",
    summary: "TNC's Supporting Oyster Aquaculture and Restoration program has purchased more than 5.6 million farmed oysters since 2020, regenerating over 60 acres of native shellfish reefs. In Virginia, a partnership with the Rappahannock Tribe pilots diploid oysters for cultural and restoration purposes.",
    whyItMatters: "The SOAR model demonstrates that aquaculture and restoration can be commercially and ecologically linked. The Rappahannock Tribe partnership adds a cultural dimension that strengthens community support for oyster farming.",
    sourceName: "The Nature Conservancy",
    sourceUrl: "https://blog.nature.org/2026/06/20/resilience-through-restoration-oyster-growers-find-new-opportunities-in-conservation/"
  },
  {
    id: "vertical-oyster-gardens-florida",
    title: "Vertical Oyster Gardens Initiative reaches 1,500 deployed in Volusia and Flagler counties, Florida",
    category: "Science",
    region: "Southeast",
    summary: "The Vertical Oyster Gardens Initiative has approximately 1,500 gardens deployed across Volusia and Flagler counties, targeting 2,000 by year-end. Gardens are made from recycled restaurant shells suspended from docks to create juvenile oyster habitat and filter excess nutrients.",
    whyItMatters: "Community-scale restoration is expanding rapidly. Each mature oyster filters up to 50 gallons of water per day, making the programme a meaningful water-quality intervention. The model is replicable and engages homeowners directly in coastal stewardship.",
    sourceName: "Spectrum News 13",
    sourceUrl: "https://mynews13.com/fl/orlando/news/2026/06/20/vertical-oyster-gardens-expand-across-volusia-and-flagler-counties"
  },
  {
    id: "maine-oyster-festival-2026",
    title: "Maine Oyster Festival returns to Freeport June 27–28 with free admission",
    category: "Calendar",
    region: "Northeast",
    summary: "The Maine Oyster Festival in Freeport celebrates the state's fast-growing oyster aquaculture industry with tastings from farms across Maine, shucking competitions, live music, and ecosystem education. Admission is free.",
    whyItMatters: "Consumer-facing events build market awareness and direct relationships between farmers and buyers. Maine's oyster industry is one of the fastest-growing in the country and the festival is a key visibility moment.",
    sourceName: "92 Moose / Visit Freeport",
    sourceUrl: "https://92moose.fm/upcoming-maine-festivals-summer-2026/"
  }
];

export const calendarEvents: CalendarEvent[] = [
  {
    id: "maine-oyster-festival-2026",
    title: "The Maine Oyster Festival",
    isoDate: "2026-06-27T10:00:00-04:00",
    dateLabel: "June 27–28, 2026",
    location: "Freeport, ME",
    note: "Free admission. Oyster tastings from farms across Maine, shucking competitions, live music, and ecosystem education.",
    url: "https://92moose.fm/upcoming-maine-festivals-summer-2026/"
  },
  {
    id: "lsu-sanitation-control-2026",
    title: "Sanitation Control Procedures for Fish and Fishery Products",
    isoDate: "2026-08-10T08:00:00-05:00",
    dateLabel: "August 10, 2026",
    location: "LSU AgCenter, Baton Rouge, LA",
    note: "Regulatory compliance training for seafood processors and handlers.",
    url: "https://louisianadirectseafood.com/news-events/"
  },
  {
    id: "lsu-basic-haccp-2026",
    title: "Basic Seafood HACCP",
    isoDate: "2026-08-11T08:00:00-05:00",
    dateLabel: "August 11–13, 2026",
    location: "LSU AgCenter, Baton Rouge, LA",
    note: "Three-day HACCP certification course for seafood industry professionals.",
    url: "https://louisianadirectseafood.com/news-events/"
  }
];

export const jobs: JobPost[] = [
  {
    id: "gmri-aquaculture-apprenticeship",
    role: "Maine Aquaculture Apprenticeship Program",
    employer: "Gulf of Maine Research Institute (GMRI)",
    location: "Maine (various host farms)",
    compensation: "Paid apprenticeship — see GMRI for current rates",
    deadline: "Rolling applications",
    applyUrl: "https://www.gmri.org/stories/from-apprentice-to-manager-and-mentor-kat-lipps-full-circle-journey-in-maine-aquaculture/",
    summary: "Structured apprenticeship combining paid work on a host farm with training. Kat Lipp, now General Manager at Mere Point Oyster Company, completed the first cohort and now mentors incoming apprentices."
  }
];
