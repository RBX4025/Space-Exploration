
// Plotly sample charts for activity and stacked domains
Plotly.newPlot('activity-chart', [{
  x: [1960, 1980, 2000, 2020, 2040, 2060, 2080, 2100],
  y: [1.0, 0.9, 0.75, 0.5, 0.3, 0.15, 0.05, 0.02],
  name: 'Government',
  type: 'scatter'
}, {
  x: [1960, 1980, 2000, 2020, 2040, 2060, 2080, 2100],
  y: [0.0, 0.1, 0.25, 0.5, 0.7, 0.85, 0.95, 0.98],
  name: 'Commercial',
  type: 'scatter'
}], { title: 'Space Activity Over Time' });

Plotly.newPlot('ai-timeline', [{
  x: [2025, 2030, 2035, 2040, 2045, 2050],
  y: [0.3, 0.7, 0.9, 1.0, 1.0, 1.0],
  name: 'Mission Ops AI',
  type: 'bar'
}], { title: 'AI Impact Timeline' });

Plotly.newPlot('stacked-chart', [{
  x: [2025, 2035, 2045, 2055, 2065, 2075, 2085, 2095],
  y: [0.1, 0.2, 0.4, 0.6, 0.75, 0.85, 0.9, 0.95],
  stackgroup: 'one',
  name: 'In-Space Manufacturing'
}, {
  x: [2025, 2035, 2045, 2055, 2065, 2075, 2085, 2095],
  y: [0.05, 0.1, 0.2, 0.3, 0.5, 0.6, 0.7, 0.8],
  stackgroup: 'one',
  name: 'Cislunar Infrastructure'
}], { title: 'Strategic Domains by Time' });
