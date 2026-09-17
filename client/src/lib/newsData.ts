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

// Edition: September 17, 2026
export const currentEdition = {
  id: "2026-09-17",
  date: "September 17, 2026",
  shortDate: "Sep 17",
  title: "US Oyster — AI Edition",
  headline: "Mississippi oyster rebound, winter cover, and larval science",
  dek: "This week: Mississippi’s surveyed reefs improve, Rhode Island posts rain closures, Massachusetts gains an insurance option, and new research clarifies how oyster larvae feed.",
  heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/101845481/WDjqxWzBX95a3nkagP7cSW/us-oyster-hero-tidal-dashboard-KX8rMSR2KLBGPL35uirLBc.webp",
  fullContent: `# US Oyster — AI Edition | September 17, 2026
**An Oceanfarmr USA Publication**

This week’s U.S. oyster briefing connects a Gulf recovery indicator with immediate sanitation controls, a practical insurance change for Massachusetts growers, and two research signals from the Northeast. Mississippi’s surveyed Mississippi Sound reefs are estimated at just under 400,000 sacks ahead of the 1 October season opening. Rhode Island has emergency rain closures in named growing areas, while USDA’s new Winter Removal Option gives eligible Massachusetts container growers a lower-cost coverage choice when product is moved into winter storage. [1] [2] [3]

## TL;DR

| Signal | What changed | Why it matters for growers |
|---|---|---|
| **Mississippi survey estimate** | MDMR reported just under 400,000 sacks across surveyed Mississippi Sound reefs, compared with about 275,000 a year earlier. [1] | The 1 October season opening is a stronger production signal, but the figure is a survey estimate rather than a guarantee of individual harvest outcomes. |
| **Rhode Island rain closures** | Emergency closures began 14 September in Upper Bay Area B and Growing Areas 3 and 9 after heavy rain. [2] | Harvest teams must treat current area status and reopening schedules as operating controls, not as background information. |
| **Massachusetts winter option** | USDA has approved a Winter Removal Option in Barnstable and Plymouth counties for the 2027 crop year. [3] | Eligible container growers who move oysters into storage for severe cold can lower their Shellfish crop-insurance cost. |
| **Larval feeding mechanism** | WHOI researchers show that shell density enables gravity-driven feeding currents in eastern oyster larvae. [4] | The work sharpens the link between shell formation, acidification risk and early-life survival. |

## Industry News

### Mississippi reefs show a stronger pre-season survey signal

At Mississippi’s 8 September oyster-season stakeholder meeting, the Department of Marine Resources estimated that surveyed reefs in the Mississippi Sound held just under 400,000 sacks of oysters, up from about 275,000 sacks the previous year. The state’s 2026–27 season is scheduled to open on 1 October, nearly two weeks earlier than the prior 13 October opening. [1]

The update is a useful Gulf production indicator, but it should be read carefully. A survey total signals broader reef condition and management readiness; it is not a substitute for area-specific access, quota, weather and market checks before a crew commits harvest effort.

## Regulations & Compliance

### Rhode Island issues emergency shellfish closures after heavy rain

Rhode Island DEM updated its shellfishing alert on 14 September after 3–6 inches of rain across central and eastern parts of the state. Emergency closures began at noon in Upper Bay Area B, Growing Area 3 (East Middle Bay) and Growing Area 9 (West Middle Bay). The agency lists sunrise reopenings of 24 September for Upper Bay Area B and 21 September for Growing Areas 3 and 9, subject to the current official status. [2]

For harvesters and buyers, the immediate task is traceability discipline. Check the current closure status before harvest and loading, retain lot records, and use the state’s designated shellfish-status channel rather than relying on prior-day information.

## Farm Management

### USDA adds a winter-storage insurance option in two Massachusetts counties

USDA’s Risk Management Agency has approved a Winter Removal Option through the Shellfish crop-insurance programme for container-grown, fresh half-shell oyster production in Barnstable and Plymouth counties. Beginning with the 2027 crop year, eligible producers may reduce their insurance cost if they remove oysters from the water and place them in storage to protect against severe cold. [3]

This is a site-specific risk-management tool rather than a universal product. Massachusetts operators considering cover should compare their actual winter handling plan, storage capacity and loss exposure with the policy conditions, then contact a crop-insurance agent before the 30 November sales-closing date. [3]

## Science & Innovation

### WHOI study links oyster-larval feeding to shell density and gravity

A study led by Woods Hole Oceanographic Institution senior scientist Houshuo Jiang used high-speed microscale imaging and micro-particle image velocimetry to examine free-swimming eastern oyster larvae. The study finds that dense calcium-carbonate shells make the larvae heavier than seawater, allowing gravity to drive the feeding currents that bring food to the mouth. [4]

The result provides a mechanistic lens for hatchery and climate-risk discussions. WHOI notes that ocean acidification can make shell formation more difficult; if shell density is altered enough, the gravity-driven current on which larvae depend could weaken at a vulnerable stage. [4]

### Ximing Guo receives 2026 Edison Patent Award for oyster crossbreeding

Rutgers Distinguished Professor Ximing Guo has received the 2026 Edison Patent Award in Aquaculture from the Research & Development Council of New Jersey for *Molluscan Shellfish Produced by Controlled Crossbreeding* (U.S. Patent No. 11,266,131). Rutgers reports that the work has produced oyster varieties for Mid-Atlantic and Northeast aquaculture with improved disease resistance, growth and genetic diversity. [5]

For growers, the award is a reminder that genetic improvement is most useful when it is evaluated against local performance records. Seed choice, husbandry conditions, biosecurity and market specifications all determine whether laboratory advances translate into operational value.

## Community & Collaboration

### Marblehead upweller network moves young oysters toward Ipswich reef restoration

Sustainable Marblehead, Salem Sound Coastwatch and the Massachusetts Oyster Project are operating an upweller outside Marblehead’s Harbormaster’s Office with about 25,000 baby oysters. Volunteers undertake daily cleaning, pump checks and water-quality observations; organisers expect many of the oysters to move to an Ipswich restoration reef later this month. [6]

The programme is explicitly restoration-focused, not a harvest project. Its practical value lies in the visible link between local stewardship, nursery care and a larger network of upwellers that gives young oysters a protected start before reef placement.

## Ecosystem Services

### NOAA habitat awards include Gulf marsh projects relevant to oysters

NOAA Fisheries has selected 16 habitat-restoration projects totalling US$103 million. The University of Georgia will receive US$8 million for salt-marsh restoration that supports shrimp, oysters and redfish, while Ducks Unlimited will receive US$9.9 million for marsh restoration in the Galveston Bay watershed targeting habitat used by those species. [7]

These are habitat investments, not direct payments to farms. Even so, the awards are relevant to oyster-dependent coastal systems because nursery habitat, marsh connectivity and water quality are part of the wider ecological infrastructure that sustains fisheries and restoration outcomes.

## Industry Calendar

| Date | Event | Location |
|---|---|---|
| **September 22, 2026** | VMRC public hearing: proposed shellfish-tagging amendments | Fort Monroe, Virginia |
| **October 1, 2026** | NRCS public-comment deadline: National Handbook of Conservation Practices revisions | Online |
| **October 3, 2026** | 6th Annual Give a Shuck | Boston, Massachusetts |
| **October 17–18, 2026** | 60th U.S. Oyster Festival | Leonardtown, Maryland |

## Employment Board

| Role | Employer | Location | Application route |
|---|---|---|---|
| **Assistant Hatchery Manager** | Downeast Institute | Beals, Maine | Direct job posting [8] |
| **Shellfish Production Technician** | Downeast Institute | Beals, Maine | Direct job posting [9] |

## Who’s in the News

### Ximing Guo — New Jersey

**2026 Edison Patent Award, Aquaculture.** Rutgers recognised Ximing Guo, Distinguished Professor in the Department of Marine and Coastal Sciences, for his controlled-crossbreeding patent and contribution to aquaculture oyster varieties. [5]

The recognition matters because it connects long-term breeding research with the practical traits growers routinely weigh: disease resilience, growth, uniformity and genetic diversity. The award does not replace local trials, but it makes the breeding pathway and its commercial relevance more visible.

## Quote of the Week

> “This tells us that the shell is doing more than just protecting the animal. It is actually helping the larva feed. That means anything that changes the shell could also change how the larva gets its food.” — Houshuo Jiang, Woods Hole Oceanographic Institution [4]

## References

[1]: https://www.wlox.com/2026/09/15/mississippi-oyster-industry-rebuilds-reefs-show-signs-growth/ "Mississippi oyster industry rebuilds as reefs show signs of growth — WLOX"
[2]: https://dem.ri.gov/environmental-protection-bureau/water-resources/research-monitoring/shellfish-area-monitoring "Shellfishing — Rhode Island Department of Environmental Management"
[3]: https://www.rma.usda.gov/news-events/news/2026/raleigh-north-carolina/usda-adds-risk-management-flexibility-oyster-producers "USDA Adds Risk Management Flexibility for Oyster Producers in Two Massachusetts Counties — USDA Risk Management Agency"
[4]: https://www.whoi.edu/press-room/news-release/oyster-gravity/ "Tiny oyster larvae rely on gravity to feed — Woods Hole Oceanographic Institution"
[5]: https://sebsnjaesnews.rutgers.edu/2026/09/shellfish-geneticist-ximing-guo-among-two-rutgers-research-teams-to-receive-2026-edison-patent-awards/ "Shellfish Geneticist Ximing Guo Among Two Rutgers Research Teams to Receive 2026 Edison Patent Awards — Rutgers"
[6]: https://marbleheadcurrent.org/2026/09/14/from-tiny-oysters-big-hopes-for-healthier-waters/ "From tiny oysters, big hopes for healthier waters — Marblehead Current"
[7]: https://www.nationalfisherman.com/more-than-100-million-in-habitat-funding-targets-key-us-fisheries "More than US$100 million in habitat funding targets key US fisheries — National Fisherman"
[8]: https://downeastinstitute.org/wp-content/uploads/2026/08/assistant_hatchery_manager_job_posting_8-25-26.pdf "Assistant Hatchery Manager — Downeast Institute"
[9]: https://downeastinstitute.org/wp-content/uploads/2026/08/shellfish_production_technician_job_posting_8-25-26.pdf "Shellfish Production Technician — Downeast Institute"
`,
  briefing: [
    "The immediate operating signals are split between recovery and restriction. Mississippi’s surveyed reef estimate is higher than last year ahead of a 1 October opening, while Rhode Island has emergency rain closures in named areas. Use the first as a cautious production indicator and the second as a current harvest-control issue.",
    "The longer-term message is resilience through operations and evidence. Eligible Massachusetts growers have a new winter-storage insurance option, WHOI has clarified a larval feeding mechanism that may be sensitive to shell-formation stress, and NOAA’s latest habitat awards direct resources to Gulf marsh systems relevant to oysters."
  ],
  metrics: [
    { label: "Mississippi surveyed reefs", value: "<400k sacks", tone: "green" },
    { label: "RI emergency closures", value: "3 areas", tone: "red" },
    { label: "Mass. enrolment closes", value: "Nov 30", tone: "neutral" },
    { label: "NOAA habitat awards", value: "US$103M", tone: "green" }
  ],
  topSignals: ["Mississippi reef survey", "Rhode Island rain closures", "Massachusetts winter insurance", "Oyster-larval feeding science"],
  quote: {
    text: "This tells us that the shell is doing more than just protecting the animal. It is actually helping the larva feed. That means anything that changes the shell could also change how the larva gets its food.",
    speaker: "Houshuo Jiang",
    author: "Houshuo Jiang",
    role: "Senior Scientist, Woods Hole Oceanographic Institution",
    context: "On research showing that oyster larvae use gravity-driven feeding currents enabled by their dense shells."
  },
  spotlight: {
    name: "Ximing Guo",
    location: "New Jersey",
    award: "2026 Edison Patent Award — Aquaculture",
    body: "Rutgers Distinguished Professor Ximing Guo received the 2026 Edison Patent Award in Aquaculture for his controlled-crossbreeding work in molluscan shellfish.",
    body2: "Rutgers reports that the work has generated oyster varieties for Mid-Atlantic and Northeast growers with improved disease resistance, growth and genetic diversity."
  }
};

export const newsItems: NewsItem[] = [
  {
    id: "mississippi-oyster-reef-survey-season-2026",
    title: "Mississippi reef survey rises ahead of 1 October season opening",
    category: "Industry",
    region: "Gulf",
    summary: "Mississippi Department of Marine Resources estimated just under 400,000 sacks of oysters across surveyed Mississippi Sound reefs, compared with about 275,000 sacks last year; the 2026–27 season is scheduled to open 1 October.",
    whyItMatters: "The higher survey estimate is a positive operating signal, but crews still need area-specific access, quota, weather and market checks before scheduling harvest effort.",
    sourceName: "WLOX / Roy Howard Community Journalism Center",
    sourceUrl: "https://www.wlox.com/2026/09/15/mississippi-oyster-industry-rebuilds-reefs-show-signs-growth/"
  },
  {
    id: "rhode-island-september-2026-rain-closures",
    title: "Rhode Island posts emergency shellfish closures after heavy rain",
    category: "Regulation",
    region: "Northeast",
    summary: "Rhode Island DEM lists emergency closures from noon on 14 September for Upper Bay Area B, East Middle Bay and West Middle Bay after heavy rain, with scheduled reopening dates subject to current official status.",
    whyItMatters: "Treat the current area status as an immediate harvest and traceability control. Check the official closure channel before harvest or loading rather than using prior-day information.",
    urgent: true,
    sourceName: "Rhode Island Department of Environmental Management",
    sourceUrl: "https://dem.ri.gov/environmental-protection-bureau/water-resources/research-monitoring/shellfish-area-monitoring"
  },
  {
    id: "usda-winter-removal-option-massachusetts",
    title: "USDA adds winter-storage insurance flexibility in Massachusetts",
    category: "Farm",
    region: "Northeast",
    summary: "For the 2027 crop year, container-grown oyster producers in Barnstable and Plymouth counties can add USDA’s Winter Removal Option to Shellfish crop insurance when oysters are moved into storage for severe cold.",
    whyItMatters: "The option may reduce insurance cost for eligible growers, but it is specific to two counties and should be evaluated against actual winter handling, storage capacity and cover conditions before the 30 November enrolment deadline.",
    sourceName: "USDA Risk Management Agency",
    sourceUrl: "https://www.rma.usda.gov/news-events/news/2026/raleigh-north-carolina/usda-adds-risk-management-flexibility-oyster-producers"
  },
  {
    id: "whoi-oyster-larvae-gravity-feeding",
    title: "WHOI reveals gravity-driven feeding in oyster larvae",
    category: "Science",
    region: "Northeast",
    summary: "WHOI research finds that eastern oyster larvae rely on dense calcium-carbonate shells to create gravity-driven feeding currents, observed using high-speed microscale imaging and particle-tracking methods.",
    whyItMatters: "The result creates a clearer pathway from shell-formation stress to feeding performance, helping hatchery and climate-risk discussions focus on the larval stage as well as adult stock.",
    sourceName: "Woods Hole Oceanographic Institution",
    sourceUrl: "https://www.whoi.edu/press-room/news-release/oyster-gravity/"
  },
  {
    id: "ximing-guo-edison-patent-award-2026",
    title: "Rutgers shellfish geneticist Ximing Guo wins Edison Patent Award",
    category: "Science",
    region: "Mid-Atlantic",
    summary: "Rutgers reports that Ximing Guo has received the 2026 Edison Patent Award in Aquaculture for controlled-crossbreeding work that has produced oyster varieties with improved disease resistance, growth and genetic diversity.",
    whyItMatters: "Breeding gains are most useful when paired with local performance records. The award is a strong signal of research translation, not a substitute for site-specific seed trials and biosecurity practice.",
    sourceName: "Rutgers School of Environmental and Biological Sciences",
    sourceUrl: "https://sebsnjaesnews.rutgers.edu/2026/09/shellfish-geneticist-ximing-guo-among-two-rutgers-research-teams-to-receive-2026-edison-patent-awards/"
  },
  {
    id: "marblehead-upweller-ipswich-reef-restoration",
    title: "Marblehead upweller supports the next stage of Ipswich reef restoration",
    category: "Community",
    region: "Northeast",
    summary: "A Marblehead upweller managed by Sustainable Marblehead, Salem Sound Coastwatch and the Massachusetts Oyster Project is holding about 25,000 baby oysters before many are moved to an Ipswich restoration reef.",
    whyItMatters: "The programme demonstrates the value of local volunteer operations—daily cleaning, equipment checks and water-quality observation—in connecting nursery care to a broader reef-restoration network.",
    sourceName: "Marblehead Current",
    sourceUrl: "https://marbleheadcurrent.org/2026/09/14/from-tiny-oysters-big-hopes-for-healthier-waters/"
  },
  {
    id: "noaa-habitat-funding-gulf-marsh-oysters",
    title: "NOAA habitat awards target Gulf marshes relevant to oysters",
    category: "Ecosystem",
    region: "Gulf",
    summary: "NOAA Fisheries selected 16 habitat-restoration projects totalling US$103 million, including US$8 million for University of Georgia salt-marsh restoration and US$9.9 million for Ducks Unlimited marsh work in the Galveston Bay watershed.",
    whyItMatters: "These are ecosystem investments rather than direct farm payments, but marsh condition and connectivity are important parts of the wider ecological infrastructure that supports oyster-dependent coastal systems.",
    sourceName: "National Fisherman",
    sourceUrl: "https://www.nationalfisherman.com/more-than-100-million-in-habitat-funding-targets-key-us-fisheries"
  }
];

export const calendarEvents: CalendarEvent[] = [
  {
    id: "vmrc-shellfish-tagging-hearing-2026",
    title: "VMRC public hearing: proposed shellfish-tagging amendments",
    isoDate: "2026-09-22T09:00:00-04:00",
    dateLabel: "September 22, 2026",
    location: "Fort Monroe, Virginia",
    note: "Public hearing on the proposed change to the identification of harvested shellfish, intended to align with National Shellfish Sanitation Program tagging requirements.",
    url: "https://www.mrc.virginia.gov/Notices/2026/FM_PN_09-22-2026.shtm"
  },
  {
    id: "nrcs-conservation-practices-comments-2026",
    title: "NRCS comment deadline: conservation-practice standards",
    isoDate: "2026-10-01T23:59:00-04:00",
    dateLabel: "October 1, 2026",
    location: "Online",
    note: "Comments close on National Handbook of Conservation Practices revisions that identify Bivalve Aquaculture Gear and Biofouling Control (Code 400) among relevant practices.",
    url: "https://www.federalregister.gov/documents/2026/09/01/2026-17863/proposed-revisions-to-the-national-handbook-of-conservation-practices"
  },
  {
    id: "mass-oyster-project-give-a-shuck-2026",
    title: "6th Annual Give a Shuck",
    isoDate: "2026-10-03T14:00:00-04:00",
    dateLabel: "October 3, 2026 · 2–5 pm EDT",
    location: "Boston, Massachusetts",
    note: "Massachusetts Oyster Project’s annual oyster-focused fundraiser connecting local growers, chefs and coastal-resilience supporters.",
    url: "https://www.massoyster.org/get-involved/events"
  },
  {
    id: "us-oyster-festival-2026",
    title: "60th U.S. Oyster Festival",
    isoDate: "2026-10-17T10:00:00-04:00",
    dateLabel: "October 17–18, 2026",
    location: "Leonardtown, Maryland",
    note: "The 60th annual festival includes the U.S. National Oyster Shucking Championship and community fundraising for local causes.",
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
    summary: "Full-time, year-round hatchery leadership role spanning commercial and research-scale shellfish production, operations, staff supervision and production-record maintenance."
  },
  {
    id: "downeast-shellfish-production-technician-2026",
    role: "Shellfish Production Technician",
    employer: "Downeast Institute",
    location: "Beals, Maine",
    compensation: "US$20/hour",
    deadline: "See posting",
    applyUrl: "https://downeastinstitute.org/wp-content/uploads/2026/08/shellfish_production_technician_job_posting_8-25-26.pdf",
    summary: "Hands-on position spanning broodstock conditioning, spawning, larval rearing, nursery production, grow-out, commercial seed delivery, field operations and production records."
  }
];
