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

// Edition: September 4, 2026
export const currentEdition = {
  id: "2026-09-04",
  date: "September 4, 2026",
  shortDate: "Sep 4",
  title: "US Oyster — AI Edition",
  headline: "Oyster season signals, tagging rules and reef investment",
  dek: "This week: Louisiana sets its oyster season, Virginia consults on shellfish tags, North Carolina posts reopenings, and Texas advances conservation reefs.",
  heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/101845481/WDjqxWzBX95a3nkagP7cSW/us-oyster-hero-tidal-dashboard-KX8rMSR2KLBGPL35uirLBc.webp",
  fullContent: `# US Oyster — AI Edition | September 4, 2026
**An Oceanfarmr USA Publication**

This week’s U.S. oyster briefing is led by operational decisions for the autumn season. Louisiana has set public-oyster dates and reporting controls, North Carolina is reopening several waters following temporary closures, and Virginia has opened consultation on a proposed update to shellfish tagging. Elsewhere, Texas is progressing a new conservation-reef model, while Puerto Rico’s restorative-aquaculture work pairs hatchery and depuration infrastructure with a policy review.

## TL;DR

| Signal | What changed | Why it matters for growers |
|---|---|---|
| **Louisiana season dates** | LDWF set 2026–27 public-oyster dates, including 14 September bedding access for parts of Vermilion, Cote Blanche and Atchafalaya bays. [1] | Gulf operators can plan bedding, market harvest, reporting and vessel compliance around published opening dates. |
| **Virginia tagging consultation** | VMRC proposes a revised method of identifying harvested shellfish to align with the NSSP; comments close 17 September. [2] | Virginia harvesters and dealers have a short formal window to examine the proposed compliance change. |
| **North Carolina reopenings** | NC DEQ lists three reopening proclamations effective 2–4 September in named coastal waters. [3] | Harvest plans should be reset only after checking the latest official sanitation status. |
| **Texas restoration pipeline** | CCA Texas approved US$1.951 million for three Conservation Certificate of Location reef projects. [4] | The model separates restoration leases from commercial harvest while creating a pipeline for reef recovery. |

## Industry News

### Louisiana sets public-oyster season dates and harvest controls

The Louisiana Wildlife and Fisheries Commission set the 2026–27 public-oyster season after considering the annual stock assessment and Oyster Task Force input. The release schedules bedding access in Vermilion, East and West Cote Blanche, and Atchafalaya bays from 14 September 2026; it also specifies later market-size sacking openings for several public grounds. [1]

The operational message is detailed: harvest limits, tagging, logbooks and electronic reporting remain integral to legal fishing. LDWF says every vessel harvesting oysters from the named public areas must report harvest information electronically by 9 pm on each fishing day. Operators should use the agency’s original notice for area-specific dates, rather than relying on a simplified regional calendar. [1]

## Regulations & Compliance

### Virginia seeks comment on proposed shellfish-tagging amendments

Virginia Marine Resources Commission proposes to amend Chapter 4 VAC 20-1250, “Pertaining to the Tagging of Shellfish”, by changing the method for identifying harvested shellfish. VMRC states that the purpose is to align tagging requirements with the National Shellfish Sanitation Program while increasing public safety and protecting the shellfish resource. Written comments are due by noon on 17 September 2026, ahead of a 22 September public hearing. [2]

This is a proposed—not final—change. Virginia growers, harvesters and dealers should compare the proposal with current lot-identification and handling procedures, then use the formal comment pathway if a practical issue needs clarification.

### North Carolina posts multiple shellfish reopening proclamations

North Carolina DEQ lists recent proclamations returning named waters to normal closure boundaries: a portion of Topsail Sound, Chadwick Bay, Oyster Creek and South River from 2 September; Middle Sound, Pages Creek and Queens Creek from 3 September; and Bay River and Jones Bay from 4 September. [3]

Reopenings improve access but do not remove the need for day-of-harvest checks. Farm and dealer teams should verify the most current sanitation map and proclamation before taking product, maintain lot-level traceability and communicate any changes in availability to buyers.

### NRCS opens consultation on bivalve-aquaculture practice standards

The Natural Resources Conservation Service has issued a Federal Register notice proposing revisions to 48 National Handbook of Conservation Practices standards. The consultation identifies Aquaculture Pond (Code 397) and Bivalve Aquaculture Gear and Biofouling Control (Code 400) among the relevant standards; comments close 1 October 2026. [5]

The notice does not itself alter farm funding or cost-share eligibility. It is, however, a timely opportunity for growers and service providers to test whether proposed technical standards reflect operating realities for gear, biofouling control and site conditions.

## Science & Innovation

### North Carolina’s oyster plan reiterates habitat and stewardship priorities

North Carolina’s August 2026 Eastern Oyster Fishery Management Plan update records that Amendment 5 remains in effect for the 2025–26 season and sets the next comprehensive review for 2030. Its stated management objectives include minimising habitat damage from oyster-harvesting gear and promoting resource stewardship through public outreach. [6]

For farms operating near public resources, the document reinforces the value of recording gear practices, site conditions and observed interactions. The update is a management reference, not new farm-specific technical guidance, but its direction is relevant to local operating conversations.

## Farm Management

### Mississippi invites harvesters and dealers into next-season planning

The Mississippi Department of Marine Resources will host an open stakeholder meeting on 8 September to discuss the 2026–27 oyster season. MDMR says the agenda includes season updates, harvest management, ongoing shellfish restoration and questions from oyster harvesters and dealers. [7]

The meeting is a practical management signal for Gulf operators: bring concise evidence about harvest conditions, handling constraints, restoration priorities and any regulatory friction that could affect the coming season. Even operators unable to attend can use the agenda as a checklist for internal readiness.

## Community & Collaboration

### Puerto Rico links restorative aquaculture infrastructure with policy reform

The Nature Conservancy reports that its restorative-oyster aquaculture project in Puerto Rico has supported a depuration tank system in Culebra and a proof-of-concept oyster hatchery in La Parguera. It has also completed a review of marine-aquaculture policies and regulations, identifying barriers and recommendations for a clearer regulatory framework, environmental and biosafety considerations, and stronger engagement with coastal communities and fishers. [8]

The programme is an instructive integrated model: production infrastructure, food-safety capability and enabling policy need to advance together if restorative aquaculture is to create both livelihoods and ecological benefits.

## Ecosystem Services

### Texas advances Conservation Certificate of Location oyster reefs

CCA Texas has approved US$1.951 million for three Conservation Certificate of Location projects in East Galveston Bay, Mesquite Bay and East Matagorda Bay as part of a broader US$5 million oyster-restoration commitment. Conservation CoLs allow eligible organisations to lease degraded bay bottoms for reef restoration; during the lease period, those restoration areas are closed to commercial oyster harvest. [4]

The projects are still subject to surveys, engineering and permit steps. Their relevance lies in the dual-track approach: a framework that distinguishes non-harvestable recovery reefs from commercial production while aiming to rebuild habitat and bay productivity.

## Industry Calendar

| Date | Event | Location |
|---|---|---|
| **September 8, 2026** | MDMR stakeholder meeting on the 2026–27 oyster season | Pass Christian, Mississippi |
| **September 14–17, 2026** | 80th Annual Shellfish Conference and Tradeshow | Blaine, Washington |
| **September 17, 2026** | VMRC public-comment deadline: proposed shellfish-tagging amendments | Online |
| **October 1, 2026** | NRCS comment deadline: conservation-practice standard revisions | Online |
| **October 17–18, 2026** | 60th U.S. Oyster Festival | Leonardtown, Maryland |

## Employment Board

| Role | Employer | Location | Application route |
|---|---|---|---|
| **Assistant Hatchery Manager** | Downeast Institute | Beals, Maine | Direct posting [9] |
| **Shellfish Production Technician** | Downeast Institute | Beals, Maine | Direct posting [10] |

## Who’s in the News

### Todd Van Herpe — Humboldt Bay, California

**2026 Agriculturist of the Year.** The Humboldt County Farm Bureau recognised Todd Van Herpe, owner of Humboldt Bay Oyster Company, for long-term leadership and contribution to regional agriculture. The public recognition highlights his more than 30 years in shellfish raising and the company’s production of oysters and seed used by growers across the sector. [11]

The recognition is relevant beyond one farm. It underscores how seed production, stewardship of working bays and experienced operator leadership remain linked in the West Coast shellfish supply chain.

## Quote of the Week

> “MDMR staff will provide updates on the upcoming season, harvest management, ongoing shellfish restoration efforts and take questions and input from oyster harvesters and dealers.” — Mississippi Department of Marine Resources [7]

## References

[1]: https://www.wlf.louisiana.gov/news/the-louisiana-wildlife-and-fisheries-commission-sets-the-20262027-public-oyster-season "The LWFC Sets the 2026–2027 Public Oyster Season — Louisiana Department of Wildlife and Fisheries"
[2]: https://www.mrc.virginia.gov/Notices/2026/FM_PN_09-22-2026.shtm "Public Notice: Proposed Amendments to various Regulations — Virginia Marine Resources Commission"
[3]: https://www.deq.nc.gov/about/divisions/marine-fisheries/rules-proclamations-and-size-and-bag-limits/polluted-area-proclamations "Polluted Area Proclamations — North Carolina DEQ"
[4]: https://ccatexas.org/improving-the-sustainability-of-our-texas-oyster-fishery-certificate-of-location-conservation-reefs/ "Improving the Sustainability of our Texas Oyster Fishery — CCA Texas"
[5]: https://www.federalregister.gov/documents/2026/09/01/2026-17863/proposed-revisions-to-the-national-handbook-of-conservation-practices "Proposed Revisions to the National Handbook of Conservation Practices — Federal Register"
[6]: https://www.deq.nc.gov/marine-fisheries/fisheries-management/oyster/eastern-oyster-fmp-update-2026/open "Eastern Oyster Fishery Management Plan Update — North Carolina DEQ"
[7]: https://dmr.ms.gov/mdmr-to-host-stakeholder-meeting-to-discuss-upcoming-2026-2027-oyster-season/ "MDMR to host stakeholder meeting to discuss upcoming 2026/2027 oyster season"
[8]: https://www.nature.org/en-us/about-us/where-we-work/caribbean/newsletter/oyster-restoration-advances-in-puerto-rico/ "TNC’s Oyster Restoration Project Advances in Puerto Rico"
[9]: https://downeastinstitute.org/wp-content/uploads/2026/08/assistant_hatchery_manager_job_posting_8-25-26.pdf "Assistant Hatchery Manager — Downeast Institute"
[10]: https://downeastinstitute.org/wp-content/uploads/2026/08/shellfish_production_technician_job_posting_8-25-26.pdf "Shellfish Production Technician — Downeast Institute"
[11]: https://kymkemp.com/2026/08/27/humboldt-county-farm-bureau-recognizes-shellfish-farmer-as-the-2026-agriculturist-of-the-year/ "Humboldt County Farm Bureau Recognizes Shellfish Farmer as the 2026 Agriculturist of the Year"
`,
  briefing: [
    "Louisiana’s published 2026–27 public-oyster schedule is the immediate operating signal: area-specific openings, harvest limits, tagging, logbooks and electronic reporting should be incorporated into Gulf crews’ readiness plans.",
    "For the broader sector, the week pairs real compliance windows with practical ecosystem signals. Virginia is consulting on shellfish tags, North Carolina is posting reopenings and management priorities, Texas is funding conservation reefs, and Puerto Rico is demonstrating a combined infrastructure-and-policy path for restorative aquaculture."
  ],
  metrics: [
    { label: "Louisiana bedding opens", value: "Sep 14", tone: "green" },
    { label: "Virginia comments close", value: "Sep 17", tone: "red" },
    { label: "Texas CoL commitments", value: "US$1.951M", tone: "green" },
    { label: "NC reopening notices", value: "3", tone: "neutral" }
  ],
  topSignals: ["Louisiana public-oyster season", "Virginia shellfish tagging", "North Carolina reopenings", "Texas Conservation CoLs"],
  quote: {
    text: "MDMR staff will provide updates on the upcoming season, harvest management, ongoing shellfish restoration efforts and take questions and input from oyster harvesters and dealers.",
    speaker: "Mississippi Department of Marine Resources",
    author: "Mississippi Department of Marine Resources",
    role: "State fisheries agency",
    context: "On the agenda for its 8 September stakeholder meeting on the 2026–27 oyster season."
  },
  spotlight: {
    name: "Todd Van Herpe",
    location: "Humboldt Bay, California",
    award: "2026 Agriculturist of the Year",
    body: "The Humboldt County Farm Bureau recognised Todd Van Herpe, owner of Humboldt Bay Oyster Company, for leadership and long-term contribution to regional agriculture.",
    body2: "The recognition notes more than three decades raising shellfish in Humboldt Bay and the company’s role in producing oysters and seed for growers across the industry."
  }
};

export const newsItems: NewsItem[] = [
  {
    id: "louisiana-2026-27-public-oyster-season",
    title: "Louisiana sets public-oyster season dates and reporting controls",
    category: "Industry",
    region: "Gulf",
    summary: "LDWF has set the 2026–27 public-oyster season, including 14 September bedding access in named Vermilion, Cote Blanche and Atchafalaya Bay grounds, with later market-size openings in several public areas.",
    whyItMatters: "The detailed schedule is an operating control, not just a calendar item. Review the original notice for area-specific dates, vessel limits, tagging, logbooks and the 9 pm electronic reporting requirement.",
    urgent: true,
    sourceName: "Louisiana Department of Wildlife and Fisheries",
    sourceUrl: "https://www.wlf.louisiana.gov/news/the-louisiana-wildlife-and-fisheries-commission-sets-the-20262027-public-oyster-season"
  },
  {
    id: "virginia-proposed-shellfish-tagging",
    title: "Virginia consults on proposed shellfish-tagging amendments",
    category: "Regulation",
    region: "Mid-Atlantic",
    summary: "VMRC proposes changing the method for identifying harvested shellfish under Chapter 4 VAC 20-1250 to align with National Shellfish Sanitation Program tagging requirements.",
    whyItMatters: "Comments close at noon on 17 September, before a 22 September public hearing. This is a proposed change; operators should review its practical effect on existing tags and harvest-handling controls.",
    urgent: true,
    sourceName: "Virginia Marine Resources Commission",
    sourceUrl: "https://www.mrc.virginia.gov/Notices/2026/FM_PN_09-22-2026.shtm"
  },
  {
    id: "north-carolina-september-reopenings",
    title: "North Carolina reopens named waters through three proclamations",
    category: "Regulation",
    region: "Southeast",
    summary: "NC DEQ lists reopening proclamations effective 2–4 September for named waters in the Topsail, Middle Sound, Pamlico and adjacent coastal areas, returning them to normal closure boundaries.",
    whyItMatters: "Reopenings are an immediate harvest-access signal, but crews should still verify the latest sanitation map and proclamation before loading product and preserve full lot traceability.",
    urgent: true,
    sourceName: "North Carolina Department of Environmental Quality",
    sourceUrl: "https://www.deq.nc.gov/about/divisions/marine-fisheries/rules-proclamations-and-size-and-bag-limits/polluted-area-proclamations"
  },
  {
    id: "north-carolina-eastern-oyster-fmp-update",
    title: "North Carolina’s oyster plan reiterates habitat and stewardship priorities",
    category: "Farm",
    region: "Southeast",
    summary: "North Carolina’s August 2026 Eastern Oyster Fishery Management Plan update retains Amendment 5 for the 2025–26 season and identifies gear-related habitat protection and resource stewardship as management objectives.",
    whyItMatters: "The update provides a timely reference for recording gear practice, site conditions and farm–public-resource interactions while the next comprehensive review approaches in 2030.",
    sourceName: "North Carolina Department of Environmental Quality",
    sourceUrl: "https://www.deq.nc.gov/marine-fisheries/fisheries-management/oyster/eastern-oyster-fmp-update-2026/open"
  },
  {
    id: "mississippi-2026-27-oyster-season-meeting",
    title: "Mississippi opens next-season planning to harvesters and dealers",
    category: "Community",
    region: "Gulf",
    summary: "MDMR will host an open 8 September stakeholder meeting on the 2026–27 oyster season, harvest management and shellfish restoration, with questions and input invited from harvesters and dealers.",
    whyItMatters: "The forum is a near-term route for operators to place practical evidence on harvest conditions, restoration priorities and compliance constraints into seasonal planning.",
    sourceName: "Mississippi Department of Marine Resources",
    sourceUrl: "https://dmr.ms.gov/mdmr-to-host-stakeholder-meeting-to-discuss-upcoming-2026-2027-oyster-season/"
  },
  {
    id: "puerto-rico-restorative-oyster-aquaculture",
    title: "Puerto Rico pairs oyster infrastructure with a policy review",
    category: "Science",
    region: "Caribbean",
    summary: "The Nature Conservancy reports a proof-of-concept oyster hatchery in La Parguera, a depuration tank system in Culebra and a completed review of Puerto Rico’s marine-aquaculture policy and regulatory barriers.",
    whyItMatters: "The work demonstrates that restoring oysters as a livelihood and ecological tool requires production capacity, food-safety infrastructure, regulatory clarity and community engagement to advance together.",
    sourceName: "The Nature Conservancy",
    sourceUrl: "https://www.nature.org/en-us/about-us/where-we-work/caribbean/newsletter/oyster-restoration-advances-in-puerto-rico/"
  },
  {
    id: "texas-conservation-certificate-location-reefs",
    title: "Texas progresses three Conservation Certificate of Location reefs",
    category: "Ecosystem",
    region: "Gulf",
    summary: "CCA Texas has approved US$1.951 million for Conservation Certificate of Location projects in East Galveston Bay, Mesquite Bay and East Matagorda Bay under its US$5 million oyster-restoration commitment.",
    whyItMatters: "The conservation-lease model separates recovery reefs from commercial harvest while supporting reef habitat and future bay productivity; surveys, engineering and permits remain ahead.",
    sourceName: "CCA Texas",
    sourceUrl: "https://ccatexas.org/improving-the-sustainability-of-our-texas-oyster-fishery-certificate-of-location-conservation-reefs/"
  },
  {
    id: "nrcs-bivalve-aquaculture-standards-consultation",
    title: "NRCS opens comment period on bivalve-aquaculture practice standards",
    category: "Regulation",
    region: "National",
    summary: "NRCS is consulting on proposed revisions to 48 conservation-practice standards, including standards relevant to aquaculture ponds and bivalve aquaculture gear and biofouling control.",
    whyItMatters: "The consultation closes 1 October. It does not change funding or eligibility today, but it is a direct opportunity to test whether proposed technical standards match farm operating conditions.",
    urgent: true,
    sourceName: "Federal Register / Natural Resources Conservation Service",
    sourceUrl: "https://www.federalregister.gov/documents/2026/09/01/2026-17863/proposed-revisions-to-the-national-handbook-of-conservation-practices"
  }
];

export const calendarEvents: CalendarEvent[] = [
  {
    id: "mdmr-oyster-season-stakeholder-meeting-2026",
    title: "MDMR stakeholder meeting: 2026–27 oyster season",
    isoDate: "2026-09-08T17:30:00-05:00",
    dateLabel: "September 8, 2026 · 5:30 pm CDT",
    location: "Pass Christian, Mississippi",
    note: "Open meeting on season updates, harvest management, shellfish restoration and input from oyster harvesters and dealers.",
    url: "https://dmr.ms.gov/mdmr-to-host-stakeholder-meeting-to-discuss-upcoming-2026-2027-oyster-season/"
  },
  {
    id: "pcsga-80th-shellfish-conference-2026",
    title: "80th Annual Shellfish Conference and Tradeshow",
    isoDate: "2026-09-14T09:00:00-07:00",
    dateLabel: "September 14–17, 2026",
    location: "Blaine, Washington",
    note: "PCSGA’s annual gathering for shellfish growers and allied organisations; online registration has closed, with in-person registration still indicated.",
    url: "https://members.pcsga.org/calendar/details/80th-annual-shellfish-conference-and-tradeshow-1461880"
  },
  {
    id: "vmrc-shellfish-tagging-comments-2026",
    title: "VMRC comment deadline: proposed shellfish tagging",
    isoDate: "2026-09-17T12:00:00-04:00",
    dateLabel: "September 17, 2026 · noon EDT",
    location: "Online",
    note: "Written comments close on VMRC’s proposed amendments to shellfish identification and tagging requirements.",
    url: "https://www.mrc.virginia.gov/Notices/2026/FM_PN_09-22-2026.shtm"
  },
  {
    id: "nrcs-conservation-standards-comments-2026",
    title: "NRCS comment deadline: conservation-practice standards",
    isoDate: "2026-10-01T23:59:00-04:00",
    dateLabel: "October 1, 2026",
    location: "Online",
    note: "Comments close on proposed revisions to national conservation-practice standards, including standards relevant to bivalve aquaculture.",
    url: "https://www.federalregister.gov/documents/2026/09/01/2026-17863/proposed-revisions-to-the-national-handbook-of-conservation-practices"
  },
  {
    id: "us-oyster-festival-2026",
    title: "60th U.S. Oyster Festival",
    isoDate: "2026-10-17T10:00:00-04:00",
    dateLabel: "October 17–18, 2026",
    location: "Leonardtown, Maryland",
    note: "The 60th festival includes oyster-industry programming and the World Oyster Opening Championship.",
    url: "https://thebaynet.com/60-years-of-shucking-for-a-cause-u-s-oyster-festival-gives-back-across-st-marys/"
  }
];

export const jobs: JobPost[] = [
  {
    id: "downeast-assistant-hatchery-manager-2026",
    role: "Assistant Hatchery Manager",
    employer: "Downeast Institute",
    location: "Beals, Maine",
    compensation: "US$25/hour starting rate",
    deadline: "See posting",
    applyUrl: "https://downeastinstitute.org/wp-content/uploads/2026/08/assistant_hatchery_manager_job_posting_8-25-26.pdf",
    summary: "Full-time, year-round leadership role spanning commercial and research-scale shellfish production, hatchery operations, staff supervision and production-record maintenance."
  },
  {
    id: "downeast-shellfish-production-technician-2026",
    role: "Shellfish Production Technician",
    employer: "Downeast Institute",
    location: "Beals, Maine",
    compensation: "Not listed",
    deadline: "See posting",
    applyUrl: "https://downeastinstitute.org/wp-content/uploads/2026/08/shellfish_production_technician_job_posting_8-25-26.pdf",
    summary: "Hands-on role across broodstock conditioning, spawning, larval rearing, nursery production, field grow-out and commercial seed delivery."
  }
];
