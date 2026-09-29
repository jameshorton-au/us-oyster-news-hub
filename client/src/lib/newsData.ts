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

// Edition: September 29, 2026
export const currentEdition = {
  id: "2026-09-29",
  date: "September 29, 2026",
  shortDate: "Sep 29",
  title: "US Oyster — AI Edition",
  headline: "Season opening, storm closure and a bloom-response playbook",
  dek: "This week: Mississippi sets its opening order, Massachusetts posts a precautionary closure, Virginia releases loss-estimation guidance, and New Jersey advances aquaculture law reform.",
  heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/101845481/WDjqxWzBX95a3nkagP7cSW/us-oyster-hero-tidal-dashboard-KX8rMSR2KLBGPL35uirLBc.webp",
  fullContent: `# US Oyster — AI Edition | September 29, 2026
**An Oceanfarmr USA Publication**

This week’s operating picture combines a scheduled Gulf opening with active weather and bloom responses in the Northeast and Mid-Atlantic. Mississippi’s public-oyster season is set to open at legal sunrise on 1 October in four named conditionally approved areas. In Massachusetts, a precautionary state-wide shellfishing closure began before the weekend nor’easter and remains subject to official status updates. Virginia Extension and VIMS have also issued a practical protocol for documenting oyster losses after the harmful algal bloom affecting parts of Chesapeake Bay and Eastern Shore waters. [1] [2] [3]

## TL;DR

| Signal | What changed | Why it matters for growers |
|---|---|---|
| **Mississippi season order** | MDMR set a 1 October public-season opening for four named conditionally approved areas. [1] | Treat the order as an area-specific operating document, including its Sunday and holiday closures. |
| **Massachusetts storm closure** | A precautionary state-wide shellfishing closure began at sunset on 25 September ahead of the nor’easter, until further notice. [2] | Harvest, wet-storage and customer commitments should be checked against the latest official status rather than the prior schedule. |
| **Virginia mortality protocol** | VIMS guidance recommends documenting loss estimates by size class and area, with at least 20 units or 2% sampled per stratum. [3] | A defensible count can support farm decisions and later insurance or assistance discussions, subject to insurer requirements. |
| **New Jersey law reform** | The Assembly passed A4994 to clarify that aquaculture includes land-based facilities alongside marine farms. [4] | The measure is a legislative step toward recognising the full hatchery-to-farm production chain; it is not final enactment. |

## Industry News

### Mississippi posts its 2026–27 public-oyster season order

The Mississippi Department of Marine Resources has ordered the 2026–27 public-oyster season to open at legal sunrise on 1 October in Area I B, Area II B, Area II E and Area V A conditionally approved waters, provided the areas meet the conditions stated in the order. The order also closes Mississippi waters and public or private reef areas on Sundays and during specified Thanksgiving, Christmas and New Year periods. [1]

For crews and dealers, the practical point is to plan against the original area-specific order. A season opening is not a blanket access signal: approval status, handling controls, weather and the scheduled closures remain part of the operating decision.

## Regulations & Compliance

### Massachusetts posts precautionary state-wide shellfishing closure

The Town of Falmouth’s shellfish page reports that, following notice from the Massachusetts Division of Marine Fisheries, a precautionary state-wide shellfishing closure became effective at sunset on Friday 25 September ahead of the weekend nor’easter and remains in place until further notice. The town directs permit holders to its current maps and notices for live area status. [2]

This is an immediate control issue rather than a seasonal outlook. Harvesters, dealers and buyers should check the latest official closure information before harvest, loading or dispatch, maintain lot-level traceability and update customer commitments where product availability is affected.

### New Jersey Assembly advances broader aquaculture definition

New Jersey Assembly sources report passage of A4994, a bill intended to expand the state definition of aquaculture to include land-based facilities alongside marine farms. Legislative communications describe the change as covering the infrastructure needed across the production chain, including facilities such as hatcheries. [4]

The measure should be read as a policy-development signal, not as a final regulatory outcome. Shellfish businesses with hatchery, nursery or other land-based infrastructure should follow the bill’s further progress and consider how existing zoning, permitting and investment plans could be affected if it becomes law.

### Florida continues consultation on Big Bend harvest rules

Florida Fish and Wildlife Conservation Commission workshop feedback has covered potential changes to the season, daily bag limits and licence requirements across the Big Bend region. The agency said it is still gathering stakeholder feedback and expects to develop recommendations based on resource conditions, with an aim of implementing uniform regional changes by 2027. [5]

The near-term action is engagement, not compliance with a new rule. Operators should retain local observations on access, harvest effort and practical effects of the options so that input to the remaining process is specific and evidence-led.

## Science & Innovation

### Alaska Sea Grant releases a revised oyster-growers manual

Alaska Sea Grant has released *The New Alaska Oyster Growers Manual*, a 158-page illustrated update available as a free PDF and, for a limited period, as a free print publication. It covers the farming process from site selection through post-harvest processing and includes business-planning material, fee lists and hazard-planning worksheets. [6]

The release is useful beyond Alaska because it brings production, business and risk-planning material into one operational reference. It is not a substitute for local regulatory requirements, but it is a practical resource for reviewing internal procedures and training plans.

## Farm Management

### Virginia Extension provides a defensible loss-estimation method

Virginia Tech’s Virginia Seafood Agricultural Research and Extension Center says a harmful algal bloom has affected portions of Chesapeake Bay and Eastern Shore waters, with negative impacts for aquaculture. A 28 September update from VIMS researchers advises growers to estimate mortality by size class and farm area, sample at least 20 units or 2% of the total for each stratum, and expand sampling when mortality varies markedly between units. [3]

The guidance is designed to make a farm’s loss estimate more scientifically defensible. Document pre-event inventory, sampling selection, live and freshly dead counts, locations and images, and check with an insurer or adjuster before disposing of affected stock where cover may apply. [3]

## Community & Collaboration

### Baltimore terminal joins Chesapeake Bay oyster gardening

AMPORTS began participating in the Chesapeake Bay Foundation’s Oyster Gardening Program at its Baltimore Atlantic Terminal this month. Members of the terminal safety team will maintain and monitor spat cages monthly through May 2027; CBF will then collect mature oysters for designated restoration sites in the Patapsco River. [7]

The partnership illustrates a practical pathway for waterfront businesses to support restoration: regular husbandry and monitoring are tied to a defined transfer route into a larger restoration programme, rather than presented as a stand-alone symbolic activity.

## Ecosystem Services

### Billion Oyster Project channels its annual event into harbour restoration

Billion Oyster Project’s 24 September event in Brooklyn raised support for its work to restore New York Harbor’s ecosystem and educate future restoration practitioners. The organisation states that every dollar raised supports restoration, community engagement and education activities. [8]

The point for the sector is not the event itself but the funding model. Public-facing oyster activity can be structured around a specific restoration and learning mission, linking outreach with durable reef and workforce outcomes rather than only short-term promotion.

## Industry Calendar

| Date | Event | Location |
|---|---|---|
| **October 1, 2026** | Mississippi 2026–27 public-oyster season opens at legal sunrise in the named areas | Mississippi Sound, Mississippi |
| **October 3, 2026** | 6th Annual Give a Shuck | Boston, Massachusetts |
| **October 17, 2026** | 2026 New Jersey Oyster Festival | Port Norris, New Jersey |
| **October 17–18, 2026** | 60th U.S. Oyster Festival | Leonardtown, Maryland |

## Employment Board

| Role | Employer | Location | Application route |
|---|---|---|---|
| **Environmental/Natural Resources Specialist II — Shellfish Bureau** | Mississippi Department of Marine Resources | Harrison County, Mississippi | Direct State of Mississippi posting [9] |

## Who’s in the News

### Rachel French — Alaska

**Lead author, *The New Alaska Oyster Growers Manual*.** Alaska Sea Grant identifies Rachel French, a State Fellow, as the primary author of the revised manual for prospective and active oyster growers. [6]

French and the contributing team focused on a readable, accessible update with chapters designed to stand alone, allowing growers to use the material most relevant to their immediate operations. The work makes a broad production and planning resource more usable at farm level.

## Quote of the Week

> “We cannot yet speak to what the updated oyster harvest regulations will look like, as we are still gathering feedback from stakeholders in the region and will be developing our recommendations based on the state of the resource using their input.” — Pebbles Causseaux, Florida Fish and Wildlife Conservation Commission Division of Marine Fisheries Management [5]

## References

[1]: https://dmr.ms.gov/order-opening-the-2026-2027-oyster-season/ "Order Opening the 2026–2027 Oyster Season — Mississippi Department of Marine Resources"
[2]: https://www.falmouthma.gov/1098/Open-Shellfishing-Areas "Open Shellfishing Areas — Town of Falmouth, Massachusetts"
[3]: https://www.arec.vaes.vt.edu/arec/virginia-seafood/programs_research/aquaculture/hab-resources.html "Northampton Shellfish Mortality Response — Virginia Tech"
[4]: https://www.njassemblygop.com/m/newsflash/Home/Detail/1067 "Assembly Passes Sauickie Bill Supporting New Jersey Seafood Farmers — New Jersey Assembly"
[5]: https://www.wusf.org/environment/2026-09-26/changes-big-bend-oyster-harvest-could-be-coming "Changes could be coming to the Big Bend oyster harvest — WUSF"
[6]: https://alaskaseagrant.org/2026/09/revised-oyster-manual-hits-the-shelves/ "Revised oyster manual hits the shelves — Alaska Sea Grant"
[7]: https://www.amports.com/2026/09/23/amports-joins-chesapeake-bay-foundation-oyster-restoration-effort-at-baltimore-atlantic-terminal/ "AMPORTS joins Chesapeake Bay Foundation oyster restoration effort — AMPORTS"
[8]: https://www.billionoysterproject.org/upcoming/date/billion-oyster-party-2026-09-24 "Billion Oyster Party 2026 — Billion Oyster Project"
[9]: https://www.governmentjobs.com/careers/mississippi/jobs/newprint/5315622 "Environmental/Natural Resources Specialist II — State of Mississippi"
`,
  briefing: [
    "The immediate signals are split between a scheduled opening and active disruption. Mississippi’s public season opens 1 October in specified conditionally approved areas, while Massachusetts’ precautionary state-wide closure requires day-of-operation status checks. In Virginia, the current bloom response has shifted from general alert to a documented loss-estimation method.",
    "The longer-term signal is operational infrastructure. New Jersey has taken an Assembly step toward recognising land-based aquaculture facilities, Alaska Sea Grant has refreshed its practical manual, and oyster-gardening programmes in Baltimore and New York are directing partner and public participation toward restoration outcomes."
  ],
  metrics: [
    { label: "Mississippi public opening", value: "1 Oct", tone: "green" },
    { label: "Mass. closure", value: "State-wide", tone: "red" },
    { label: "VIMS baseline sample", value: "20 units / 2%", tone: "neutral" },
    { label: "NJ aquaculture bill", value: "A4994 passed", tone: "green" }
  ],
  topSignals: ["Mississippi season order", "Massachusetts precautionary closure", "Virginia loss-estimation guidance", "New Jersey aquaculture definition"],
  quote: {
    text: "We cannot yet speak to what the updated oyster harvest regulations will look like, as we are still gathering feedback from stakeholders in the region and will be developing our recommendations based on the state of the resource using their input.",
    speaker: "Pebbles Causseaux",
    author: "Pebbles Causseaux",
    role: "Communications Coordinator, FWC Division of Marine Fisheries Management",
    context: "On Florida’s continuing Big Bend oyster-harvest rule consultation."
  },
  spotlight: {
    name: "Rachel French",
    location: "Alaska",
    award: "Lead author, The New Alaska Oyster Growers Manual",
    body: "Alaska Sea Grant identifies State Fellow Rachel French as the primary author of its revised oyster-growers manual for prospective and active farmers.",
    body2: "The 158-page update brings site selection, production, post-harvest processing, business planning and hazard-planning resources into an accessible operational reference."
  }
};

export const newsItems: NewsItem[] = [
  {
    id: "mississippi-public-oyster-season-order-2026",
    title: "Mississippi sets 1 October public-oyster season opening",
    category: "Industry",
    region: "Gulf",
    summary: "Mississippi Department of Marine Resources has ordered the 2026–27 public-oyster season to open at legal sunrise on 1 October in Area I B, Area II B, Area II E and Area V A conditionally approved waters, subject to the order’s conditions.",
    whyItMatters: "The opening is an area-specific operating signal, not blanket access. Harvest plans should incorporate approval status, handling controls and the order’s Sunday and holiday closures.",
    sourceName: "Mississippi Department of Marine Resources",
    sourceUrl: "https://dmr.ms.gov/order-opening-the-2026-2027-oyster-season/"
  },
  {
    id: "massachusetts-precautionary-statewide-shellfishing-closure",
    title: "Massachusetts posts precautionary state-wide shellfishing closure",
    category: "Regulation",
    region: "Northeast",
    summary: "Following notice from Massachusetts Division of Marine Fisheries, a precautionary state-wide shellfishing closure began at sunset on 25 September ahead of the weekend nor’easter and remains in effect until further notice.",
    whyItMatters: "This is a current harvest, wet-storage and supply-commitment control. Check the latest official status before harvest, loading or dispatch, and retain lot-level traceability.",
    urgent: true,
    sourceName: "Town of Falmouth / Massachusetts Division of Marine Fisheries notice",
    sourceUrl: "https://www.falmouthma.gov/1098/Open-Shellfishing-Areas"
  },
  {
    id: "virginia-hab-shellfish-mortality-estimation-guidance",
    title: "Virginia issues defensible mortality-estimation guidance",
    category: "Farm",
    region: "Mid-Atlantic",
    summary: "Virginia Tech and VIMS advise shellfish growers responding to the current bloom impacts to estimate losses by size class and farm area, beginning with at least 20 units or 2% per size class and area, then increasing samples where variability is high.",
    whyItMatters: "Well-documented, randomised counts can turn a sudden loss event into a defensible estimate for farm decision-making and potential insurance or assistance discussions; check insurer requirements first.",
    urgent: true,
    sourceName: "Virginia Tech / Virginia Cooperative Extension",
    sourceUrl: "https://www.arec.vaes.vt.edu/arec/virginia-seafood/programs_research/aquaculture/hab-resources.html"
  },
  {
    id: "new-jersey-a4994-aquaculture-definition-assembly",
    title: "New Jersey Assembly advances land-based aquaculture definition",
    category: "Regulation",
    region: "Mid-Atlantic",
    summary: "New Jersey Assembly sources report passage of A4994, a bill intended to clarify that the state definition of aquaculture includes land-based facilities alongside marine farms, including the infrastructure that supports shellfish production.",
    whyItMatters: "The measure is a policy-development signal for hatcheries, nurseries and integrated operations, not a final change in law. Businesses should track its next legislative steps before altering permits or investment plans.",
    sourceName: "New Jersey Legislative Assembly",
    sourceUrl: "https://www.njassemblygop.com/m/newsflash/Home/Detail/1067"
  },
  {
    id: "florida-big-bend-oyster-harvest-consultation-2026",
    title: "Florida continues consultation on Big Bend harvest rules",
    category: "Regulation",
    region: "Southeast",
    summary: "Feedback at Florida’s third oyster-regulation workshop covered possible changes to seasons, daily bag limits and licence requirements. The agency says it is still gathering input before developing recommendations, with uniform regional changes targeted for 2027.",
    whyItMatters: "No new rule has been adopted. Farmers and harvesters have an opportunity to convert local experience on access, effort and resource conditions into specific, evidence-led consultation input.",
    sourceName: "WUSF Public Media",
    sourceUrl: "https://www.wusf.org/environment/2026-09-26/changes-big-bend-oyster-harvest-could-be-coming"
  },
  {
    id: "alaska-sea-grant-revised-oyster-growers-manual",
    title: "Alaska Sea Grant publishes revised oyster-growers manual",
    category: "Science",
    region: "Alaska",
    summary: "The 158-page illustrated New Alaska Oyster Growers Manual is now available as a free PDF and, for a limited time, in print. It spans site selection, production, post-harvest processing, business planning and hazard-planning resources.",
    whyItMatters: "The manual provides a consolidated training and systems-review resource for prospective and active growers. Local rules still prevail, but the workflow guidance is useful when reviewing procedures and onboarding teams.",
    sourceName: "Alaska Sea Grant",
    sourceUrl: "https://alaskaseagrant.org/2026/09/revised-oyster-manual-hits-the-shelves/"
  },
  {
    id: "amports-cbf-baltimore-oyster-gardening-2026",
    title: "Baltimore terminal joins Chesapeake Bay oyster gardening",
    category: "Community",
    region: "Mid-Atlantic",
    summary: "AMPORTS has started participating in Chesapeake Bay Foundation’s Oyster Gardening Program at its Baltimore Atlantic Terminal. Terminal staff will maintain and monitor spat cages monthly through May 2027 before mature oysters are moved to Patapsco River restoration sites.",
    whyItMatters: "The partnership connects regular husbandry by a waterfront employer with a defined pathway into restoration, offering a practical model for place-based corporate and community participation.",
    sourceName: "AMPORTS",
    sourceUrl: "https://www.amports.com/2026/09/23/amports-joins-chesapeake-bay-foundation-oyster-restoration-effort-at-baltimore-atlantic-terminal/"
  },
  {
    id: "billion-oyster-project-party-restoration-support-2026",
    title: "Billion Oyster Project directs event support to harbour restoration",
    category: "Ecosystem",
    region: "Northeast",
    summary: "Billion Oyster Project says proceeds from its 24 September Brooklyn event support restoration, community engagement and education in its work to restore New York Harbor’s ecosystem.",
    whyItMatters: "The model links public-facing oyster activity to a specified restoration and learning mission, helping move engagement beyond promotion toward durable reef and workforce outcomes.",
    sourceName: "Billion Oyster Project",
    sourceUrl: "https://www.billionoysterproject.org/upcoming/date/billion-oyster-party-2026-09-24"
  }
];

export const calendarEvents: CalendarEvent[] = [
  {
    id: "mississippi-public-oyster-opening-2026",
    title: "Mississippi public-oyster season opening",
    isoDate: "2026-10-01T06:30:00-05:00",
    dateLabel: "October 1, 2026 · legal sunrise",
    location: "Mississippi Sound, Mississippi",
    note: "MDMR’s 2026–27 public-oyster season opens in the named conditionally approved areas, subject to the order’s requirements and closures.",
    url: "https://dmr.ms.gov/order-opening-the-2026-2027-oyster-season/"
  },
  {
    id: "mass-oyster-project-give-a-shuck-2026",
    title: "6th Annual Give a Shuck",
    isoDate: "2026-10-03T14:00:00-04:00",
    dateLabel: "October 3, 2026 · 2–5 pm EDT",
    location: "Boston, Massachusetts",
    note: "Massachusetts Oyster Project fundraiser with local oyster farmers, chefs and live music, supporting coastal-strengthening work.",
    url: "https://www.massoyster.org/get-involved/events"
  },
  {
    id: "new-jersey-oyster-festival-2026",
    title: "2026 New Jersey Oyster Festival",
    isoDate: "2026-10-17T12:00:00-04:00",
    dateLabel: "October 17, 2026 · noon–5 pm EDT",
    location: "Port Norris, New Jersey",
    note: "Bayshore Center at Bivalve’s annual event celebrates New Jersey’s oyster heritage on the Delaware Bay waterfront.",
    url: "https://www.bayshorecenter.org/upcoming-event/2026-new-jersey-oyster-festival/"
  },
  {
    id: "us-oyster-festival-2026",
    title: "60th U.S. Oyster Festival",
    isoDate: "2026-10-17T10:00:00-04:00",
    dateLabel: "October 17–18, 2026",
    location: "Leonardtown, Maryland",
    note: "Hosted by the Rotary Club of Lexington Park, the festival includes the U.S. National Oyster Shucking Championship.",
    url: "https://www.usoysterfestival.org/"
  }
];

export const jobs: JobPost[] = [
  {
    id: "mississippi-shellfish-bureau-specialist-2026",
    role: "Environmental/Natural Resources Specialist II — Shellfish Bureau",
    employer: "Mississippi Department of Marine Resources",
    location: "Harrison County, Mississippi",
    compensation: "US$40,286.40–44,315.04/year",
    deadline: "Closes Sep 30 · 11:59 pm CT",
    applyUrl: "https://www.governmentjobs.com/careers/mississippi/jobs/newprint/5315622",
    summary: "Full-time, time-limited scientific role covering on- and off-bottom oyster-aquaculture techniques, shellfish harvest and handling procedures, and Shellfish Resource Management and Oyster Aquaculture programs."
  }
];
