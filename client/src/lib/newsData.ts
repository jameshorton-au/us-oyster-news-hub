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

// Edition: August 10, 2026
export const currentEdition = {
  id: "2026-08-10",
  date: "August 10, 2026",
  shortDate: "Aug 10",
  title: "US Oyster — AI Edition",
  headline: "Apalachicola Bay reopens, $7.1M for Alabama reefs, and biotoxin closures",
  dek: "This week: Florida sets the second commercial season for Apalachicola Bay, Alabama lands $7.1M for oyster restoration, FDA warns of Pacific Northwest biotoxins, and Maryland opens disaster relief loans.",
  heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/101845481/WDjqxWzBX95a3nkagP7cSW/us-oyster-hero-tidal-dashboard-KX8rMSR2KLBGPL35uirLBc.webp",
  fullContent: `# US Oyster — AI Edition | August 10, 2026
**An Oceanfarmr USA Publication**

This week's U.S. oyster signal is dominated by regulatory shifts and restoration funding. In the Gulf, Florida regulators are preparing for the second commercial oyster season in Apalachicola Bay since its 2020 closure, while Alabama has secured $7.1 million in NRDA funds for oyster reef resilience. On the Pacific Coast, the FDA has issued warnings regarding paralytic shellfish poisoning (PSP) in Oregon and Washington, leading to closures in Willapa Bay and Hood Canal. Meanwhile, Maryland has opened a new disaster relief loan program for shellfish aquaculture producers affected by recent market and environmental disruptions.

## TL;DR

| Signal | What changed this week | Why it matters for growers |
|---|---|---|
| **Apalachicola Bay Season 2** | Florida FWC approved a second commercial harvest season for Apalachicola Bay (Oct 2026–Feb 2027) with a reduced limit of 2,433 bags.[1] | Controlled reopening demonstrates that state-led restoration efforts are yielding harvestable results, though capacity remains fragile. |
| **Alabama $7.1M Restoration** | ADCNR was awarded $7.1M to improve oyster resilience by linking brood reefs and sink reefs via larval transport.[2] | Large-scale restoration funding supports the broader ecosystem health required for both wild and farmed oyster populations in the Gulf. |
| **Pacific Northwest Biotoxin Closures** | FDA issued warnings for oysters from parts of OR and WA due to high PSP levels, closing Willapa Bay and Hood Canal.[3] | Biotoxin closures highlight the ongoing environmental risks to Pacific Coast growers and the critical need for rapid testing and traceability. |
| **Maryland Disaster Relief Loans** | MARBIDCO opened a zero-interest $10,000 disaster relief loan program for Maryland shellfish aquaculture producers.[4] | Financial relief provides a buffer for growers hit by recent market gluts and environmental challenges, helping maintain farm viability. |
| **Federal Reef Legislation** | A House Appropriations Committee bill passed 32-28, proposing to prohibit NOAA funding for oyster sanctuaries unless opened to commercial harvest.[5] | If enacted, this could fundamentally shift federal funding priorities from ecological restoration to commercial fishery support. |

## Industry News

### Florida prepares for smaller second season in Apalachicola Bay

Following the first commercial oyster season in Florida's Apalachicola Bay since its 2020 closure, the Florida Fish and Wildlife Conservation Commission (FWC) is preparing for a second season. The initial season, which ran early this year, resulted in a harvest of 4,233 bags, just shy of the 4,726 bag limit. The upcoming season will run from October 1, 2026, through February 28, 2027, but with a reduced commercial harvest limit of 2,433 bags split among 126 participants. The reduction is due to some reefs not meeting the minimum requirements for harvest.[1]

The controlled reopening is a positive sign for the region's recovery, but the reduced limits indicate that the bay's oyster population remains fragile and requires ongoing, careful management.

## Regulations & Compliance

### FDA issues Pacific Northwest oyster warning amid biotoxin closures

The U.S. Food and Drug Administration (FDA) has issued a warning regarding oysters farmed in specific growing areas of Washington and Oregon due to potential contamination with toxins causing paralytic shellfish poisoning (PSP). The alert affects oysters harvested from Netarts Bay and Tillamook Bay in Oregon, and Willapa Bay in Washington. Consequently, all commercial shellfish harvesting in Willapa Bay and Hood Canal has been shut down.[3]

These closures underscore the severe impact of marine biotoxins on the shellfish economy and the importance of rigorous state and federal monitoring programs to ensure food safety.

### Maryland opens Shellfish Aquaculture Disaster Relief Loan Program

The Maryland Agricultural and Resource-Based Industry Development Corporation (MARBIDCO) has launched a new disaster relief loan program for eligible shellfish aquaculture producers. The program offers zero-interest loans of $10,000 to help cover personal and business expenses associated with oyster farming operations. Applications opened on August 3 and will be accepted through August 31, 2026. A portion of the loan may be forgiven for good repayment performance.[4]

This financial assistance is crucial for Maryland oyster farmers who have faced a difficult year marked by declining markets, adverse weather, and environmental disruptions.

### New federal push to open oyster reefs to watermen

An amendment attached to a federal spending bill, which passed the House Appropriations Committee 32-28, would prohibit NOAA from funding oyster restoration and recovery in the Chesapeake Bay unless those areas are opened for commercial harvesting within three years. Proponents argue it creates a "win-win" by allowing the bottom to be worked, while conservationists warn it severely limits restoration efforts and the accruing ecological benefits.[5]

## Ecosystem Services

### Alabama lands $7.1 million to boost oyster restoration

The Alabama Department of Conservation and Natural Resources (ADCNR) was awarded $7.1 million in Natural Resource Damage Assessment (NRDA) funds for a project aimed at improving oyster resilience. The project will create a network of high-vertical-relief brood reefs that link to existing sink reefs through larval transport. This effort, expected to take about two years, is part of a broader strategy to increase oyster abundance and reef resilience across various habitats and salinities in the Alabama Gulf Coast.[2]

## Science & Innovation

### Louisiana health officials warn of Vibrio vulnificus outbreak

The Louisiana Department of Health has reported nine cases of *Vibrio vulnificus* infection so far in 2026, resulting in five deaths. All cases were associated with wounds exposed to seawater, and all patients had underlying health conditions. Health officials are urging residents to avoid exposing open wounds to coastal waters and advising those at higher risk to avoid eating raw or undercooked shellfish.[6]

While the infections in this outbreak are linked to wound exposure rather than consumption, the news highlights the ongoing need for vigilance regarding *Vibrio* risks during the warm summer months.

## Industry Calendar

| Date | Event | Location |
|---|---|---|
| **August 10, 2026** | Sanitation Control Procedures for Fish and Fishery Products | LSU AgCenter, Baton Rouge, LA |
| **August 11–13, 2026** | Basic Seafood HACCP | LSU AgCenter, Baton Rouge, LA |
| **September 29, 2026** | 2nd Annual Chesapeake Oyster Science Symposium | The Tides Inn, VA & Online |

## Employment Board

| Role | Employer | Location | Notes |
|---|---|---|---|
| **Oyster Farmhand / Boat Crew** | Sweet Amalia Oyster Farm | New Jersey | Seasonal/part-time roles (Sept-Dec). Starting at $18-$20/hr. Hands-on work on the water. |

## References

[1]: https://www.seafoodsource.com/news/following-first-apalachicola-bay-oyster-season-in-years-florida-prepares-for-smaller-second-season "Following first Apalachicola Bay oyster season in years, Florida prepares for smaller second season — SeafoodSource"
[2]: https://outdooralabama.com/articles/alabamas-oyster-restoration-efforts-continue-additional-help "Alabama's Oyster Restoration Efforts Continue with Additional Help — Outdoor Alabama"
[3]: https://www.seafoodsource.com/news/food-safety-health/us-fda-issues-pacific-northwest-oyster-warning-expands-korean-oyster-recall "US FDA issues Pacific Northwest oyster warning, expands Korean oyster recall — SeafoodSource"
[4]: https://marbidco.org/maryland-shellfish-aquaculture-disaster-relief-loan-program/ "Maryland Shellfish Aquaculture Disaster Relief Loan Program — MARBIDCO"
[5]: https://www.wboc.com/news/new-federal-push-to-open-up-more-oyster-reefs-to-watermen-but-prohibit-funding-to/article_2e4b6abd-649d-45bf-836a-705f32774561.html "New Federal Push To Open Up More Oyster Reefs To Watermen But Prohibit Funding to Sanctuaries — WBOC"
[6]: https://kfoxtv.com/news/nation-world/5-dead-4-hospitalized-in-louisiana-from-flesh-eating-bacteria-outbreak-health-officials-vibrio-vulnificus-infections-baton-rouge-food-raw-undercooked-shellfish-oysters-saltwater-warm-coastal-waters "5 dead, 4 hospitalized in Louisiana from flesh-eating bacteria outbreak: health officials — KFOX"
`,
  briefing: [
    "Florida regulators have approved a second, smaller commercial oyster harvest season for Apalachicola Bay starting in October, following the successful completion of the first season since 2020.",
    "The FDA issued warnings for oysters from Oregon and Washington due to high levels of paralytic shellfish poisoning (PSP) toxins, leading to commercial closures in Willapa Bay and Hood Canal."
  ],
  metrics: [
    { label: "Alabama restoration grant", value: "$7.1M", tone: "green" },
    { label: "Apalachicola harvest limit", value: "2,433 bags", tone: "neutral" },
    { label: "Maryland relief loans", value: "$10K", tone: "green" },
    { label: "Louisiana Vibrio cases", value: "9", tone: "red" }
  ],
  topSignals: ["Apalachicola Bay Season 2", "Alabama $7.1M Restoration", "Pacific Northwest Biotoxin Closures", "Maryland Disaster Relief Loans"],
  quote: {
    text: "When you condition funding on harvest, you're severely limiting the amount of restoration that can be done, and therefore the amount of those benefits that is accruing to all Marylanders.",
    speaker: "Julie Luecke, Maryland Coastal Resource Scientist at the Chesapeake Bay Foundation",
    context: "Speaking about a proposed federal bill amendment that would prohibit NOAA funding for oyster sanctuaries unless opened to commercial harvest."
  }
};

export const newsItems: NewsItem[] = [
  {
    id: "apalachicola-bay-season-2",
    title: "Florida prepares for smaller second commercial oyster season in Apalachicola Bay",
    category: "Industry",
    region: "Gulf",
    summary: "Following the first commercial season since 2020, the FWC approved a second season for Apalachicola Bay (Oct 2026–Feb 2027) with a reduced harvest limit of 2,433 bags split among 126 participants.",
    whyItMatters: "The controlled reopening demonstrates that state-led restoration efforts are yielding harvestable results, though the reduced limits indicate the bay's capacity remains fragile and requires careful management.",
    sourceName: "SeafoodSource",
    sourceUrl: "https://www.seafoodsource.com/news/following-first-apalachicola-bay-oyster-season-in-years-florida-prepares-for-smaller-second-season"
  },
  {
    id: "alabama-oyster-restoration-nrda",
    title: "Alabama lands $7.1 million in NRDA funds to boost oyster reef restoration",
    category: "Industry",
    region: "Gulf",
    summary: "The Alabama Department of Conservation and Natural Resources was awarded $7.1 million to improve oyster resilience by creating a network of high-vertical-relief brood reefs linked to sink reefs via larval transport.",
    whyItMatters: "Large-scale restoration funding supports the broader ecosystem health required for both wild and farmed oyster populations in the Gulf, providing critical habitat and water quality improvements.",
    sourceName: "Outdoor Alabama",
    sourceUrl: "https://outdooralabama.com/articles/alabamas-oyster-restoration-efforts-continue-additional-help"
  },
  {
    id: "pacific-northwest-biotoxin-closures",
    title: "FDA issues Pacific Northwest oyster warning amid severe biotoxin closures",
    category: "Regulation",
    region: "Pacific Northwest",
    summary: "The FDA warned against consuming oysters from specific areas in Oregon and Washington due to high levels of paralytic shellfish poisoning (PSP) toxins, leading to commercial harvest closures in Willapa Bay and Hood Canal.",
    whyItMatters: "Biotoxin closures highlight the ongoing environmental risks to Pacific Coast growers and the critical need for rapid testing, traceability, and transparent communication to maintain consumer confidence.",
    urgent: true,
    sourceName: "SeafoodSource",
    sourceUrl: "https://www.seafoodsource.com/news/food-safety-health/us-fda-issues-pacific-northwest-oyster-warning-expands-korean-oyster-recall"
  },
  {
    id: "maryland-disaster-relief-loans",
    title: "Maryland opens $10,000 zero-interest disaster relief loans for shellfish aquaculture",
    category: "Industry",
    region: "Mid-Atlantic",
    summary: "MARBIDCO launched a disaster relief loan program offering $10,000 zero-interest loans to eligible Maryland shellfish aquaculture producers to cover expenses following a difficult year of market and environmental disruptions.",
    whyItMatters: "Financial relief provides a critical buffer for growers hit by recent market gluts and weather events, helping maintain farm viability and operational continuity in the Chesapeake region.",
    sourceName: "MARBIDCO",
    sourceUrl: "https://marbidco.org/maryland-shellfish-aquaculture-disaster-relief-loan-program/"
  },
  {
    id: "federal-reef-legislation-harvest",
    title: "House committee advances bill prohibiting NOAA funds for non-harvested oyster reefs",
    category: "Regulation",
    region: "National",
    summary: "A House Appropriations Committee bill passed 32-28 proposing to prohibit NOAA funding for oyster restoration in the Chesapeake Bay unless those areas are opened for commercial harvesting within three years.",
    whyItMatters: "If enacted, this legislation could fundamentally shift federal funding priorities from ecological restoration to commercial fishery support, sparking debate over the balance of sanctuary benefits versus harvest access.",
    sourceName: "WBOC",
    sourceUrl: "https://www.wboc.com/news/new-federal-push-to-open-up-more-oyster-reefs-to-watermen-but-prohibit-funding-to/article_2e4b6abd-649d-45bf-836a-705f32774561.html"
  },
  {
    id: "louisiana-vibrio-outbreak",
    title: "Louisiana health officials report 5 deaths from Vibrio vulnificus infections in 2026",
    category: "Science",
    region: "Gulf",
    summary: "The Louisiana Department of Health reported nine cases of Vibrio vulnificus infection, resulting in five deaths. All cases were associated with wound exposure to seawater in individuals with underlying health conditions.",
    whyItMatters: "While these specific cases were linked to wound exposure rather than consumption, the outbreak highlights the ongoing need for vigilance and public education regarding Vibrio risks during the warm summer months.",
    urgent: true,
    sourceName: "KFOX",
    sourceUrl: "https://kfoxtv.com/news/nation-world/5-dead-4-hospitalized-in-louisiana-from-flesh-eating-bacteria-outbreak-health-officials-vibrio-vulnificus-infections-baton-rouge-food-raw-undercooked-shellfish-oysters-saltwater-warm-coastal-waters"
  }
];

export const calendarEvents: CalendarEvent[] = [
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
  },
  {
    id: "chesapeake-oyster-science-symposium-2026",
    title: "2nd Annual Chesapeake Oyster Science Symposium",
    isoDate: "2026-09-29T10:30:00-04:00",
    dateLabel: "September 29, 2026",
    location: "The Tides Inn, VA & Online",
    note: "Brings oyster practitioners together for a day of science and management conversations.",
    url: "https://www.cbf.org/coss"
  }
];

export const jobs: JobPost[] = [
  {
    id: "sweet-amalia-farmhand",
    role: "Seasonal Oyster Grader and Farmhand/Boat Crew",
    employer: "Sweet Amalia Oyster Farm",
    location: "New Jersey",
    compensation: "$18 - $20 / hour",
    deadline: "Rolling",
    applyUrl: "mailto:info@oysterpartybk.com",
    summary: "Part-time and full-time seasonal roles from September through December. Hands-on work on the water grading and harvesting oysters."
  }
];
