// Edition: May 18, 2026 — Seed scale-up, shrimp control and Chesapeake policy risk
// Auto-generated from newsletter_edition_2026-05-18.md

export interface NewsItem {
  id: string;
  category: "Industry" | "Science" | "Regulations" | "Farm Management" | "Community" | "Ecosystem Services" | "Employment";
  headline: string;
  summary: string;
  body: string;
  source: string;
  sourceUrl: string;
  urgent?: boolean;
  imageUrl?: string;
  tags?: string[];
}

export interface CalendarEvent {
  id: string;
  title: string;
  isoDate: string;
  location: string;
  notes: string;
}

export interface Job {
  id: string;
  role: string;
  employer: string;
  location: string;
  compensation: string;
  description: string;
  applyUrl: string;
}

export interface Spotlight {
  name: string;
  title: string;
  company: string;
  location: string;
  body: string;
  body2: string;
}

export interface Edition {
  date: string;
  isoDate: string;
  editionWindow: string;
  headline: string;
  tldr: string;
  spotlight: Spotlight;
  news: NewsItem[];
  calendarEvents: CalendarEvent[];
  jobs: Job[];
  quote: { text: string; attribution: string; context: string };
  references: { id: number; url: string; label: string }[];
}

export const currentEdition: Edition = {
  date: "May 18, 2026",
  isoDate: "2026-05-18",
  editionWindow: "May 11–18, 2026",
  headline: "Seed scale-up, shrimp control and Chesapeake policy risk",
  tldr: "This week's US oyster desk is led by a Kona-based shellfish seed scale-up, a Washington farm-management breakthrough, and a Chesapeake policy fight that could affect restored oyster reefs. Pacific Hybreed closed a $1 million funding round to expand commercial seed output in Hawaiʻi from 25 million to 200 million seeds per year. University of Washington researchers reported a non-chemical burrowing shrimp control method that reduced live shrimp by 72–98% in Willapa Bay trials. In the Chesapeake, the Chesapeake Bay Foundation warned that a House Appropriations Committee bill would remove protections and funding tied to oyster reef restoration.",

  spotlight: {
    name: "Melissa DellaTorre",
    title: "CEO",
    company: "Pacific Hybreed",
    location: "Kailua-Kona, HI",
    body: "Pacific Hybreed, an aquaculture biotechnology startup based in Kailua-Kona, closed a $1 million funding round backed by Hawaii Angels and Blue Startups. The company operates hatcheries in Kona and Washington, with Kona serving as the commercial production site and Washington focused on breeding.",
    body2: "Under CEO Melissa DellaTorre, Pacific Hybreed plans to increase Kona output from 25 million seeds per year to 200 million and to broaden its breeding work beyond Pacific oysters. The company's selectively bred oyster and clam families are selected for faster growth and survival, with customer-facing claims including 30% greater yield and up to 50% reductions in harvesting costs through more uniform growth.",
  },

  news: [
    {
      id: "n1",
      category: "Industry",
      headline: "Pacific Hybreed raises $1M to scale Kona seed output from 25M to 200M per year",
      summary: "Hawaii Angels and Blue Startups backed the raise. CEO Melissa DellaTorre plans to expand commercial seed production and broaden breeding work beyond Pacific oysters.",
      body: "Pacific Hybreed's raise treats hatchery output and selective breeding as productivity infrastructure. The company was co-founded in 2014, expanded to NELHA in 2020, and now sells to more than 20 farmers along the Pacific Coast. Hawaiʻi's warm-water production base may offer an important counterpoint to cold-water hatchery bottlenecks.",
      source: "Hawaiʻi Technology Development Corporation",
      sourceUrl: "https://www.htdc.org/pacific-hybreed-raises-1m-to-expand-kona-oyster-production/",
      tags: ["Seed", "Investment", "Pacific Coast", "Hatchery"],
    },
    {
      id: "n2",
      category: "Industry",
      headline: "OysterNight New Orleans brings 90+ restaurants into a shell-recycling push",
      summary: "Chefs Brigade's May 14 event tied restaurant oyster sales directly to the Coalition to Restore Coastal Louisiana's shell-recycling program, which recycled 8 tons of shells in a single day at the 2025 event.",
      body: "The event is a reminder that the most valuable oyster promotions now do more than move product. They increasingly connect provenance, restaurant storytelling, shell recovery, and restoration metrics into one public-facing narrative.",
      source: "Chefs Brigade",
      sourceUrl: "https://www.chefsbrigade.org/oyster-night",
      tags: ["Restoration", "Shell Recycling", "Gulf Coast", "Community"],
    },
    {
      id: "n3",
      category: "Science",
      headline: "UW vibrocompaction method cuts burrowing shrimp by 72–98% in Willapa Bay trials",
      summary: "A custom floating platform applies vibration and pressure to compact sediment and trap shrimp in burrows — a non-chemical alternative tested at four sites. Scale-up and ecological review are still needed.",
      body: "The research is significant because Washington growers have been without chemical control options since 2018. The current system is manual and time-consuming, but it is one of the clearest examples this year of growers and scientists co-designing a practical response to a site-specific production bottleneck.",
      source: "University of Washington News",
      sourceUrl: "https://www.washington.edu/news/2026/05/14/a-new-method-could-help-washington-shellfish-farmers-control-a-pesky-shrimp/",
      tags: ["Pest Control", "Willapa Bay", "Pacific Northwest", "Research"],
    },
    {
      id: "n4",
      category: "Science",
      headline: "$1.2M NOAA-funded Chesapeake acidification dashboard to support shellfish farm planning",
      summary: "William & Mary's Batten School and VIMS are building a web-based decision tool for shellfish farmers and municipalities facing ocean and coastal acidification risk in the Chesapeake Bay.",
      body: "The project combines marine science and community research. The advisory committee includes scientists, shellfish industry members, and community planners. The team's stated goal is to build science products that farmers recognize as useful, reflecting lived operating conditions rather than only laboratory indicators.",
      source: "Aquaculture North America",
      sourceUrl: "https://www.aquaculturenorthamerica.com/new-project-aims-to-protect-chesapeake-shellfish-industry-from-acidification/",
      tags: ["Acidification", "Chesapeake", "Climate Adaptation", "NOAA"],
    },
    {
      id: "n5",
      category: "Regulations",
      headline: "House Appropriations bill could strip Chesapeake oyster reef protections — CBF urgent alert",
      summary: "The Chesapeake Bay Foundation warns that a NOAA funding bill passed committee 32–28 with provisions that would allow commercial fishing on protected oyster reefs and cut restoration support.",
      body: "The bill now moves to the House floor. Growers, restoration partners, and Bay-state stakeholders should monitor closely because restoration reefs, sanctuary rules, and NOAA-supported oyster programs can influence public confidence, ecosystem-service accounting, and long-term recruitment across the Bay.",
      source: "Chesapeake Bay Foundation",
      sourceUrl: "https://www.cbf.org/news/house-committee-passes-disastrous-bill-for-oyster-reefs-and-chesapeake-bay-restoration/",
      urgent: true,
      tags: ["Policy", "Chesapeake", "Restoration", "Federal Budget"],
    },
    {
      id: "n6",
      category: "Farm Management",
      headline: "North Carolina enters the high-watch window for oyster mortality — mid-May through mid-June",
      summary: "UNCW hatchery director Ami Wilbur and NC Shellfish Growers Association president Chris Matteo flag drought-driven salinity and early Vibrio-season readiness as the key watchpoints for 525 active NC leases.",
      body: "Farms should check salinity trends, review mortality logs by gear type and site, confirm harvest and cold-chain procedures for warmer weather, and keep customer-facing food-safety language clear as Vibrio season begins moving into public attention.",
      source: "Wilmington Star-News via AOL",
      sourceUrl: "https://www.aol.com/news/weather-warms-challenges-ncs-shellfish-090133242.html",
      urgent: true,
      tags: ["Mortality", "North Carolina", "Salinity", "Vibrio", "Farm Management"],
    },
    {
      id: "n7",
      category: "Farm Management",
      headline: "Willapa Bay burrowing shrimp cost one farm 75% of nursery ground and 190,000 bushels of capacity",
      summary: "Ken Wiegardt of Jolly Roger Oysters quantifies the production impact: carrying capacity fell from 265,000 to 75,000 bushels. Sediment stability and benthic pest control are business-continuity issues.",
      body: "The UW shrimp-control story gives numbers to the cost of pest pressure. Wiegardt is a fifth-generation oyster farmer whose family has worked Willapa Bay for generations. The story underscores that mechanical and site-specific pest tools may become more important as pesticide pathways narrow.",
      source: "University of Washington News",
      sourceUrl: "https://www.washington.edu/news/2026/05/14/a-new-method-could-help-washington-shellfish-farmers-control-a-pesky-shrimp/",
      tags: ["Willapa Bay", "Pest Control", "Pacific Northwest", "Farm Economics"],
    },
    {
      id: "n8",
      category: "Community",
      headline: "10th Annual Newport Oyster & Chowder Festival showcases Rhode Island's 75+ oyster farms",
      summary: "Bowen's Wharf hosted the May 16–17 festival with local farms, restaurants, chowders, and live music. Newport Life noted that each RI farm produces a distinct flavor profile shaped by its growing area.",
      body: "For the Ocean State, the festival functions as both tourism and public aquaculture education: consumers taste regional differences while growers and restaurants reinforce the connection between working waterfronts and local identity.",
      source: "Newport Life Magazine",
      sourceUrl: "https://www.newportlifemagazine.com/event/10th-annual-newport-oyster-chowder-festival/2026-05-17/",
      tags: ["Rhode Island", "Festival", "Community", "Northeast"],
    },
    {
      id: "n9",
      category: "Ecosystem Services",
      headline: "Oyster restoration value is now embedded in restaurant campaigns, appropriations fights, and farm climate tools",
      summary: "Three stories this week — OysterNight shell recycling, Chesapeake reef policy risk, and the VIMS acidification dashboard — show ecosystem services moving from restoration plans into operational and political contexts.",
      body: "The practical opportunity for the industry is to document these benefits in ways that buyers, local governments, and funders can understand. Shell returned, reef acres protected, water-quality functions preserved, and farm resilience improved are all measurable claims when backed by transparent methods.",
      source: "Manus AI editorial synthesis",
      sourceUrl: "#",
      tags: ["Ecosystem Services", "ESG", "Restoration", "Policy"],
    },
  ],

  calendarEvents: [
    {
      id: "c1",
      title: "FoodieLand San Francisco",
      isoDate: "2026-05-22",
      location: "Cow Palace, San Francisco, CA",
      notes: "Regional oyster vendors promoting attendance. Confirm vendor details before travel.",
    },
    {
      id: "c2",
      title: "Oysterfest at Chevy Chase Lake",
      isoDate: "2026-05-30",
      location: "Chevy Chase, MD",
      notes: "Second annual Oysterfest with oysters from local restaurants, seafood, drinks, and live music.",
    },
    {
      id: "c3",
      title: "New Bedford Oysterfest 2026",
      isoDate: "2026-06-06",
      location: "Cisco Kitchen & Bar, New Bedford, MA",
      notes: "South Coast aquaculture celebration with local growers and waterfront programming.",
    },
    {
      id: "c4",
      title: "\"Aw, Shucks!\" — History & Outlook for CT Oysters",
      isoDate: "2026-06-07",
      location: "Pardee-Morris House, New Haven, CT",
      notes: "Public-history and outlook event focused on Connecticut oysters.",
    },
  ],

  jobs: [
    {
      id: "j1",
      role: "Farm Crew Worker",
      employer: "Hog Island Oyster",
      location: "Marshall, CA",
      compensation: "$22–$25/hour DOE",
      description: "Full-time farm operations role covering harvesting, sorting, seed planting, husbandry, gear maintenance, machinery support, and environmental cleanup.",
      applyUrl: "https://aghires.com/career/391480/farm-crew-in-california-marshall",
    },
    {
      id: "j2",
      role: "Restaurant Manager",
      employer: "Found Oyster",
      location: "Los Angeles, CA",
      compensation: "$80,000–$90,000",
      description: "Full-time floor leadership role with a path to General Manager and hands-on oyster-service expectations, including possible shucking shifts.",
      applyUrl: "https://culinaryagents.com/jobs/696453-Restaurant-Manager",
    },
  ],

  quote: {
    text: "Burrowing shrimp have decimated our farm. We've lost 75% of our nursery ground and, as a result, the farm's carrying capacity has fallen from 265,000 bushels of market-ready oysters to 75,000 bushels.",
    attribution: "Ken Wiegardt, fifth-generation oyster farmer and head of Jolly Roger Oysters, Willapa Bay",
    context: "Speaking to UW News about the need for effective burrowing shrimp control after years without chemical options.",
  },

  references: [
    { id: 1, url: "https://www.htdc.org/pacific-hybreed-raises-1m-to-expand-kona-oyster-production/", label: "Pacific Hybreed raises $1M — Hawaiʻi TDC" },
    { id: 2, url: "https://www.washington.edu/news/2026/05/14/a-new-method-could-help-washington-shellfish-farmers-control-a-pesky-shrimp/", label: "Non-chemical burrowing shrimp control — UW News" },
    { id: 3, url: "https://www.cbf.org/news/house-committee-passes-disastrous-bill-for-oyster-reefs-and-chesapeake-bay-restoration/", label: "House bill threatens Chesapeake oyster reefs — CBF" },
    { id: 4, url: "https://www.chefsbrigade.org/oyster-night", label: "OysterNight New Orleans — Chefs Brigade" },
    { id: 5, url: "https://www.aquaculturenorthamerica.com/new-project-aims-to-protect-chesapeake-shellfish-industry-from-acidification/", label: "Chesapeake acidification project — Aquaculture North America" },
    { id: 6, url: "https://www.aol.com/news/weather-warms-challenges-ncs-shellfish-090133242.html", label: "NC shellfish mortality watch — Wilmington Star-News" },
    { id: 7, url: "https://www.newportlifemagazine.com/event/10th-annual-newport-oyster-chowder-festival/2026-05-17/", label: "Newport Oyster & Chowder Festival — Newport Life" },
    { id: 8, url: "https://aghires.com/career/391480/farm-crew-in-california-marshall", label: "Farm Crew — Hog Island Oyster — AgHires" },
    { id: 9, url: "https://culinaryagents.com/jobs/696453-Restaurant-Manager", label: "Restaurant Manager — Found Oyster — Culinary Agents" },
  ],
};
