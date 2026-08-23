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

// Edition: August 23, 2026
export const currentEdition = {
  id: "2026-08-23",
  date: "August 23, 2026",
  shortDate: "Aug 23",
  title: "US Oyster — AI Edition",
  headline: "Freeze relief, Dermo findings, and new aquaculture signals",
  dek: "This week: New York seeks federal freeze relief, URI and VIMS report a Dermo benefit from aquaculture, North Carolina issues closures, and NOAA opens its next aquaculture-area process.",
  heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/101845481/WDjqxWzBX95a3nkagP7cSW/us-oyster-hero-tidal-dashboard-KX8rMSR2KLBGPL35uirLBc.webp",
  fullContent: `# US Oyster — AI Edition | August 23, 2026
**An Oceanfarmr USA Publication**

This week’s operational picture combines near-term recovery and compliance signals with longer-horizon opportunity. New York has requested a USDA disaster designation following winter freeze damage to Long Island shellfish farms. At the same time, a URI–VIMS research finding points to a potentially positive relationship between farmed oysters and Dermo loads in nearby wild populations. North Carolina growers face immediate temporary sanitation closures, while NOAA is seeking input on where future Aquaculture Opportunity Areas should be assessed.

## TL;DR

| Signal | What changed | Why it matters for growers |
|---|---|---|
| **Long Island freeze relief** | New York requested a USDA disaster designation after an estimated $2.3965 million in shellfish-aquaculture damage. [1] | Eligible growers could gain access to a federal emergency-loan pathway if the request is approved. |
| **Dermo research** | URI and VIMS report that growing farmed oysters can reduce Dermo disease loads in wild oysters. [2] | The result strengthens the case for farm–wild monitoring and disease-aware farm siting. |
| **North Carolina closures** | Temporary shellfish closures began on 22 August across waters in four coastal counties. [3] | Harvest, inventory and customer communication plans should align with the latest official sanitation map. |
| **Future aquaculture areas** | NOAA’s RFI on future Aquaculture Opportunity Areas is open through 14 September; a public session follows on 31 August. [4] | Growers, tribes, working-waterfront groups and researchers have a defined window to supply siting evidence. |

## Industry News

### New York requests federal freeze relief for Long Island shellfish farms

Governor Kathy Hochul has requested a USDA Secretarial Disaster Designation for Suffolk County after a February freeze caused an estimated $2.3965 million in damage across Long Island shellfish aquaculture. If approved, operators in Suffolk and contiguous counties could apply for USDA Farm Service Agency emergency loans of up to $500,000. New York’s Department of Environmental Conservation is also collecting fishery-revenue data for a possible NOAA Fishery Disaster Declaration pathway. [1]

For farms, this is a recovery-planning signal rather than an approved programme: preserve repair invoices, loss records, production data and revenue documentation while the designation request is considered.

## Science & Innovation

### URI and VIMS research links farmed oysters to lower wild-oyster Dermo loads

A University of Rhode Island and Virginia Institute of Marine Science research report finds that oyster aquaculture can reduce disease loads in wild oysters affected by Dermo, a naturally occurring parasite that is distinct from human-health bacteria such as *Vibrio*. [2]

The practical implication is not that disease risk disappears. Rather, the result supports closer farm–wild disease monitoring and gives growers a stronger evidence base when explaining potential ecological interactions with regulators and neighbours.

## Regulations & Compliance

### North Carolina posts new temporary shellfish closures

North Carolina’s temporary shellfish closures took effect at 7:35 am on 22 August. The listed waters span New Hanover, Pender, Onslow and Carteret counties, including parts of Middle Sound, Topsail Sound, Stump Sound and the Newport River. [3]

Harvesters should treat the proclamation as an immediate operational control: check the current sanitation map before harvest, maintain lot-level traceability and communicate any supply interruption promptly.

### NOAA seeks input on the next Aquaculture Opportunity Areas

NOAA’s request for information asks stakeholders where future Aquaculture Opportunity Areas should be evaluated nationally. Written comments to docket NOAA-NMFS-2026-2179 are due by 14 September 2026, and NOAA will hold a public listening session on 31 August, from 3–4 pm EDT. [4]

The request specifically invites evidence on candidate regions, species and culture types, siting parameters, protected-species interactions, fisheries overlap, cultural resources and recreation. Shellfish stakeholders can use this window to put local operating knowledge into the national planning record.

## Community & Collaboration

### Basin Oyster Project records evidence of wild recruitment in Maine

In Phippsburg, Maine, the seven-year Basin Oyster Project is working toward a self-sustaining wild oyster reef in the protected Basin inlet of the New Meadows River. The collaboration began with The Nature Conservancy and includes Colby College, the Maine Department of Environmental Protection, Casco Bay Estuary Partnership and the Town of Phippsburg Shellfish Committee. Recent fieldwork documented a wild American oyster that had grown from a free-floating larva and survived winter conditions. [5]

The project remains a careful restoration experiment, but its partnership model offers a useful template for linking research, local government and coastal community stewardship.

## Ecosystem Services

### North Carolina habitat-plan review puts oyster recovery areas in scope

North Carolina’s Marine Fisheries Commission considered releasing a proposed 2026 amendment to the Coastal Habitat Protection Plan for public and advisory review. The amendment would not itself create restrictions, but it could begin a broader pathway to consider protections for submerged vegetation and deep-water oyster recovery areas, with further review before possible final action in November. [6]

For growers and restoration practitioners, the key point is to distinguish the current review from an adopted rule while engaging early with the evidence base on habitat, gear interactions and working-waterfront access.

## Farm Management

### Use the closure and disease signals to tighten operational records

This week’s management priority is disciplined documentation. Confirm harvest eligibility against official closure maps before loading product; retain time, location and lot records; and make sure customer notices can be issued quickly. Pair that discipline with routine health observations and seed-source discussions: the URI–VIMS Dermo result is a reason to improve monitoring, not a substitute for biosecurity or local disease advice. [2] [3]

## Industry Calendar

| Date | Event | Location |
|---|---|---|
| **August 31, 2026** | NOAA public listening session: future Aquaculture Opportunity Areas | Online · 3–4 pm EDT |
| **September 14, 2026** | NOAA comments close: future Aquaculture Opportunity Areas | Online |
| **September 18, 2026** | Application deadline: UF hard-clam research and breeding postdoctoral role | Florida / online |
| **September 26, 2026** | Shuck It Up Oyster Festival | The Rumor Reel, Pasadena, MD |

## Employment Board

| Role | Employer | Location | Deadline |
|---|---|---|---|
| **Postdoctoral Research Associate – Hard Clam Research and Breeding Program Leader** | University of Florida | Florida | September 18, 2026 |

## Who’s in the News

### Cait Cleaver — Phippsburg, Maine

**Project spotlight: Basin Oyster Project field leadership.** Colby College environmental studies assistant professor Cait Cleaver is part of the team testing whether wild oysters can again survive, recruit and eventually form a self-sustaining reef in Maine’s cold, variable coastal conditions. [5]

The project’s value lies in the long horizon: it joins ecological monitoring with local stewardship and makes the constraints of northern oyster restoration visible rather than assuming a model from warmer regions will transfer unchanged.

## Quote of the Week

> “With freezing temperatures that lasted for several weeks, the Long Island coast saw ice conditions like they haven't experienced in years, leading to a halt in operations and damage to equipment that will cost the aquaculture industry millions of dollars.” — Gov. Kathy Hochul [1]

## References

[1]: https://www.nationalfisherman.com/new-york-seeks-disaster-designation-for-oyster-farmers-hit-by-winter-freeze "New York seeks disaster designation for oyster farmers hit by winter freeze — National Fisherman"
[2]: https://www.seafoodnews.com/Story/1126693/URI-and-VIMS-Researchers-Show-Aquaculture-Oysters-Can-Limit-Spread-of-Dermo-in-Wild-Oysters "URI and VIMS Researchers Show Aquaculture Oysters Can Limit Spread of Dermo in Wild Oysters — SeafoodNews"
[3]: https://www.deq.nc.gov/about/divisions/marine-fisheries/rules-proclamations-and-size-and-bag-limits/polluted-area-proclamations "Polluted Area Proclamations — North Carolina DEQ"
[4]: https://www.northeastoceandata.org/request-for-information-and-public-listening-session-future-aquaculture-opportunity-areas/ "Request for Information and Public Listening Session – Future Aquaculture Opportunity Areas"
[5]: https://themainemonitor.org/restoring-wild-oyster-reefs/ "They wanted to restore wild oyster reefs to the Maine coast — The Maine Monitor"
[6]: https://www.nationalfisherman.com/north-carolina-weighs-habitat-protections-fishing-licenses "North Carolina weighs habitat protections, fishing licenses — National Fisherman"
`,
  briefing: [
    "New York’s request for federal freeze relief makes clean documentation of loss, repair and revenue evidence the immediate business priority for Long Island shellfish farms. The request is not approval, but it opens a credible route toward USDA emergency assistance if granted.",
    "For the wider sector, this week’s planning signals are equally material: North Carolina’s temporary closures require disciplined harvest controls, NOAA’s open area-planning process offers a short stakeholder window, and the URI–VIMS Dermo finding supports stronger farm–wild monitoring."
  ],
  metrics: [
    { label: "Long Island damage estimate", value: "$2.4M", tone: "red" },
    { label: "Potential USDA loan ceiling", value: "$500K", tone: "green" },
    { label: "NOAA comments close", value: "Sep 14", tone: "neutral" },
    { label: "NC counties in closure", value: "4", tone: "red" }
  ],
  topSignals: ["Long Island freeze relief", "Dermo farm–wild finding", "North Carolina closures", "NOAA area-planning RFI"],
  quote: {
    text: "With freezing temperatures that lasted for several weeks, the Long Island coast saw ice conditions like they haven't experienced in years, leading to a halt in operations and damage to equipment that will cost the aquaculture industry millions of dollars.",
    speaker: "Gov. Kathy Hochul",
    author: "Kathy Hochul",
    role: "Governor of New York",
    context: "On New York’s request for a USDA disaster designation after the February freeze."
  },
  spotlight: {
    name: "Cait Cleaver",
    location: "Phippsburg, Maine",
    award: "Basin Oyster Project field leadership",
    body: "Colby College assistant professor Cait Cleaver is part of the team investigating whether wild oysters can recruit and survive long enough to establish a self-sustaining reef in Maine.",
    body2: "The project combines field monitoring with local stewardship, illustrating the patience and place-specific evidence required for northern oyster restoration."
  }
};

export const newsItems: NewsItem[] = [
  {
    id: "new-york-freeze-disaster-request",
    title: "New York seeks USDA disaster designation after Long Island freeze losses",
    category: "Industry",
    region: "Northeast",
    summary: "New York requested a USDA Secretarial Disaster Designation for Suffolk County after a February freeze caused an estimated $2.3965 million in damage across the Long Island shellfish aquaculture industry.",
    whyItMatters: "If approved, the designation would make eligible operators in Suffolk and contiguous counties able to apply for USDA emergency loans. Growers should retain clear loss, repair and revenue records while the request is considered.",
    urgent: true,
    sourceName: "National Fisherman",
    sourceUrl: "https://www.nationalfisherman.com/new-york-seeks-disaster-designation-for-oyster-farmers-hit-by-winter-freeze"
  },
  {
    id: "uri-vims-dermo-finding",
    title: "URI and VIMS report a Dermo benefit from farmed oyster culture",
    category: "Science",
    region: "Mid-Atlantic",
    summary: "A URI–VIMS research report says farmed oysters can reduce Dermo disease loads in wild oysters. Dermo is a naturally occurring oyster parasite and is distinct from human-health bacteria such as Vibrio.",
    whyItMatters: "The finding supports stronger farm–wild disease monitoring and provides evidence for discussions about ecological interactions, but it does not replace farm-level biosecurity or local health controls.",
    sourceName: "SeafoodNews",
    sourceUrl: "https://www.seafoodnews.com/Story/1126693/URI-and-VIMS-Researchers-Show-Aquaculture-Oysters-Can-Limit-Spread-of-Dermo-in-Wild-Oysters"
  },
  {
    id: "north-carolina-temporary-closures",
    title: "North Carolina imposes temporary shellfish closures in four counties",
    category: "Regulation",
    region: "Southeast",
    summary: "Temporary closures effective 22 August cover listed waters in New Hanover, Pender, Onslow and Carteret counties, including portions of Middle Sound, Topsail Sound, Stump Sound and the Newport River.",
    whyItMatters: "The notice is an immediate harvest-control signal. Check the official sanitation map before every harvest, protect lot-level traceability and communicate supply changes early.",
    urgent: true,
    sourceName: "North Carolina DEQ",
    sourceUrl: "https://www.deq.nc.gov/about/divisions/marine-fisheries/rules-proclamations-and-size-and-bag-limits/polluted-area-proclamations"
  },
  {
    id: "noaa-future-aquaculture-areas-rfi",
    title: "NOAA opens public input on future Aquaculture Opportunity Areas",
    category: "Regulation",
    region: "National",
    summary: "NOAA is collecting input on where it should examine future Aquaculture Opportunity Areas. Written comments are due 14 September 2026, with a public listening session on 31 August.",
    whyItMatters: "The process gives shellfish growers, tribes, fisheries, researchers and coastal communities a defined window to enter siting, compatibility and operating knowledge into the national planning record.",
    sourceName: "Northeast Ocean Data Portal",
    sourceUrl: "https://www.northeastoceandata.org/request-for-information-and-public-listening-session-future-aquaculture-opportunity-areas/"
  },
  {
    id: "maine-basin-oyster-project",
    title: "Maine’s Basin Oyster Project records evidence of wild oyster recruitment",
    category: "Science",
    region: "Northeast",
    summary: "The seven-year Basin Oyster Project in Phippsburg is working toward a self-sustaining wild oyster reef and has documented a wild American oyster that grew from a free-floating larva and survived winter conditions.",
    whyItMatters: "The collaboration offers a useful restoration model: pair long-term ecological monitoring with local stewardship and do not assume that warmer-water restoration methods will transfer unchanged to Maine.",
    sourceName: "The Maine Monitor",
    sourceUrl: "https://themainemonitor.org/restoring-wild-oyster-reefs/"
  },
  {
    id: "north-carolina-habitat-plan-review",
    title: "North Carolina habitat review places oyster recovery areas in scope",
    category: "Regulation",
    region: "Southeast",
    summary: "North Carolina fisheries managers considered releasing a proposed 2026 Coastal Habitat Protection Plan amendment for review, including future consideration of deep-water oyster recovery areas and submerged vegetation.",
    whyItMatters: "The proposal is not yet a rule, but early engagement can help ensure that evidence on habitat, gear interactions and working-waterfront access informs any later management process.",
    sourceName: "National Fisherman",
    sourceUrl: "https://www.nationalfisherman.com/north-carolina-weighs-habitat-protections-fishing-licenses"
  }
];

export const calendarEvents: CalendarEvent[] = [
  {
    id: "noaa-aoa-listening-session-2026",
    title: "NOAA public listening session: future Aquaculture Opportunity Areas",
    isoDate: "2026-08-31T15:00:00-04:00",
    dateLabel: "August 31, 2026 · 3–4 pm EDT",
    location: "Online",
    note: "Public listening session for NOAA’s request for information on where future Aquaculture Opportunity Areas should be assessed.",
    url: "https://www.northeastoceandata.org/request-for-information-and-public-listening-session-future-aquaculture-opportunity-areas/"
  },
  {
    id: "noaa-aoa-comment-deadline-2026",
    title: "NOAA future Aquaculture Opportunity Areas comments close",
    isoDate: "2026-09-14T23:59:00-04:00",
    dateLabel: "September 14, 2026",
    location: "Online",
    note: "Submit evidence and comments to federal docket NOAA-NMFS-2026-2179 before the public-input deadline.",
    url: "https://www.northeastoceandata.org/request-for-information-and-public-listening-session-future-aquaculture-opportunity-areas/"
  },
  {
    id: "shuck-it-up-oyster-festival-2026",
    title: "Shuck It Up Oyster Festival",
    isoDate: "2026-09-26T11:00:00-04:00",
    dateLabel: "September 26, 2026 · 11 am–4 pm",
    location: "The Rumor Reel, Pasadena, MD",
    note: "Inaugural oyster festival with fresh oysters, food, music and participating vendors.",
    url: "https://www.tickettailor.com/events/therumorreel/2135280"
  }
];

export const jobs: JobPost[] = [
  {
    id: "uf-hard-clam-breeding-postdoc-2026",
    role: "Postdoctoral Research Associate – Hard Clam Research and Breeding Program Leader",
    employer: "University of Florida",
    location: "Florida",
    compensation: "Not listed",
    deadline: "September 18, 2026",
    applyUrl: "https://explore.jobs.ufl.edu/en-us/job/540992/postdoctoral-research-associate-hard-clam-research-and-breeding-program-leader",
    summary: "Posted 21 August 2026. The role works with the hard-clam aquaculture industry, manages a breeding programme and evaluates environmental stressors affecting shellfish culture around Cedar Key."
  }
];
