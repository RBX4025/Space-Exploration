
// Government vs Commercial Activity Chart (1960–2100)
Plotly.newPlot('activity-chart', [
  {
    x: [1960, 1980, 2000, 2020, 2040, 2060, 2080, 2100],
    y: [1.0, 0.9, 0.75, 0.5, 0.3, 0.15, 0.05, 0.02],
    name: 'Government',
    mode: 'lines+markers',
    line: { color: '#003366', width: 3 },
    type: 'scatter'
  },
  {
    x: [1960, 1980, 2000, 2020, 2040, 2060, 2080, 2100],
    y: [0.0, 0.1, 0.25, 0.5, 0.7, 0.85, 0.95, 0.98],
    name: 'Commercial',
    mode: 'lines+markers',
    line: { color: '#0077cc', width: 3 },
    type: 'scatter'
  }
], {
  title: 'Space Activity Over Time',
  xaxis: { title: 'Year' },
  yaxis: { title: 'Relative Activity Level', range: [0, 1.1] },
  legend: { x: 0, y: 1.2 }
});

// AI Product Evolution Heatmap Style Chart
Plotly.newPlot('ai-timeline', [
  {
    x: ['2025', '2030', '2035', '2040', '2045', '2050'],
    y: ['Mission Ops AI', 'Launch Logistics', 'Surface Ops', 'Resource Prospecting', 'Traffic Control', 'Cognitive Assistants'],
    z: [
      [0.3, 0.7, 0.9, 1.0, 1.0, 1.0],
      [0.5, 0.9, 1.0, 1.0, 1.0, 1.0],
      [0.0, 0.2, 0.6, 0.9, 1.0, 1.0],
      [0.0, 0.1, 0.3, 0.8, 1.0, 1.0],
      [0.2, 0.6, 0.9, 1.0, 1.0, 1.0],
      [0.1, 0.3, 0.5, 0.8, 0.9, 1.0]
    ],
    type: 'heatmap',
    colorscale: 'Blues',
    showscale: true,
    hoverongaps: false
  }
], {
  title: 'AI Product Evolution Impact (2025–2050)',
  xaxis: { title: 'Year' },
  yaxis: { title: 'AI Domains' }
});

// Stacked Strategic Domain Chart
Plotly.newPlot('stacked-chart', [
  {
    x: [2025, 2035, 2045, 2055, 2065, 2075, 2085, 2095],
    y: [0.1, 0.2, 0.4, 0.6, 0.75, 0.85, 0.9, 0.95],
    name: 'In-Space Manufacturing',
    stackgroup: 'one'
  },
  {
    x: [2025, 2035, 2045, 2055, 2065, 2075, 2085, 2095],
    y: [0.05, 0.1, 0.2, 0.3, 0.5, 0.6, 0.7, 0.8],
    name: 'Cislunar Infrastructure',
    stackgroup: 'one'
  },
  {
    x: [2025, 2035, 2045, 2055, 2065, 2075, 2085, 2095],
    y: [0.02, 0.05, 0.1, 0.2, 0.4, 0.55, 0.6, 0.7],
    name: 'Legal/Financial Systems',
    stackgroup: 'one'
  },
  {
    x: [2025, 2035, 2045, 2055, 2065, 2075, 2085, 2095],
    y: [0.0, 0.0, 0.1, 0.2, 0.3, 0.5, 0.7, 0.8],
    name: 'Space-Based Power',
    stackgroup: 'one'
  },
  {
    x: [2025, 2035, 2045, 2055, 2065, 2075, 2085, 2095],
    y: [0.1, 0.2, 0.3, 0.45, 0.6, 0.75, 0.85, 0.9],
    name: 'Climate Monitoring',
    stackgroup: 'one'
  },
  {
    x: [2025, 2035, 2045, 2055, 2065, 2075, 2085, 2095],
    y: [0.0, 0.0, 0.05, 0.2, 0.3, 0.5, 0.7, 0.85],
    name: 'Cognitive Expansion',
    stackgroup: 'one'
  }
], {
  title: 'Strategic Domain Evolution (2025–2100)',
  xaxis: { title: 'Year' },
  yaxis: { title: 'Relative Domain Influence', range: [0, 2.5] }
});
