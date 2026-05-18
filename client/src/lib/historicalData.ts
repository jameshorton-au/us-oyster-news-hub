/*
Tidal Dashboard trends data: compact historical signals support briefing context without pretending to be a complete statistical database.
Does this trend choice reinforce or dilute our design philosophy?
*/
export const marketSignals = [
  { name: "NY support", value: 4.2, unit: "$M", tone: "Resilience" },
  { name: "MD harvest gap", value: 44, unit: "% below 5yr", tone: "Market" },
  { name: "MD price gap", value: 66, unit: "% below 5yr", tone: "Market" },
  { name: "Humboldt closure days", value: 155, unit: "days", tone: "Risk" }
];

export const regionalSignals = [
  { region: "Northeast", industry: 92, regulation: 48, science: 34 },
  { region: "Mid-Atlantic", industry: 76, regulation: 52, science: 96 },
  { region: "Gulf", industry: 44, regulation: 84, science: 40 },
  { region: "West Coast", industry: 58, regulation: 95, science: 66 }
];
