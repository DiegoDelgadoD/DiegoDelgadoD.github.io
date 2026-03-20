// ── LEAFLET MAP ──
document.addEventListener('DOMContentLoaded', () => {
  const mapEl = document.getElementById('research-map');
  if (!mapEl) return;

  const map = L.map('research-map', {
    center: [-5, -65],
    zoom: 4,
    zoomControl: true,
    scrollWheelZoom: false
  });

  // Dark tile layer — CartoDB Dark Matter
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  // Custom teal circle marker
  const markerStyle = {
    radius: 10,
    fillColor: '#00c2a8',
    color: '#ffffff',
    weight: 2,
    opacity: 1,
    fillOpacity: 0.9
  };

  const projects = [
    {
      lat: 14.0818,
      lng: -87.2068,
      flag: '🇭🇳',
      country: 'Honduras',
      title: 'Poverty Stoplight Tool — Multidimensional Poverty',
      status: 'Active',
      desc: 'Evaluating a household-level self-assessment tool designed to help families identify and address multiple dimensions of poverty simultaneously.',
      link: 'https://poverty-action.org/evaluating-poverty-stoplight-tool-addressing-multidimensional-poverty-honduras'
    },
    {
      lat: 18.7357,
      lng: -70.1627,
      flag: '🇩🇴',
      country: 'Dominican Republic',
      title: 'Behavioral Nudges for Credit Card Repayment',
      status: 'Active',
      desc: 'Testing whether behaviorally-informed reminders and framing effects improve on-time credit card repayment among low-income cardholders.',
      link: 'https://poverty-action.org/behavioral-nudges-improve-credit-card-repayment-dominican-republic'
    },
    {
      lat: -15.7801,
      lng: -47.9292,
      flag: '🇧🇷',
      country: 'Brazil',
      title: 'Pix Digital Payment Adoption — Small Firms',
      status: 'Active',
      desc: "Studying barriers to adoption of Brazil's instant payment platform Pix among small and micro-enterprises, and testing interventions to increase uptake.",
      link: 'https://poverty-action.org/increasing-small-firms-adoption-pix-digital-payment-platform-brazil'
    },
    {
      lat: -16.5000,
      lng: -68.1500,
      flag: '🇧🇴',
      country: 'Bolivia',
      title: 'Climate Insurance & Early Warning Systems',
      status: 'Active',
      desc: "Examining how climate insurance products and early warning systems affect agricultural households' ability to adapt to climate shocks.",
      link: 'https://poverty-action.org/climate-adaptation-through-climate-insurance-and-early-warning-systems-perspectives-bolivia'
    },
    {
      lat: -12.0464,
      lng: -77.0428,
      flag: '🇵🇪',
      country: 'Peru',
      title: 'Transit Infrastructure & Educational Outcomes',
      status: 'Working Paper',
      desc: 'Studying how improvements in public transit access affect school attendance, dropout rates, and long-run educational attainment in Peru.',
      link: '#wip'
    }
  ];

  projects.forEach(p => {
    const statusColor = p.status === 'Active' ? '#00c2a8' : '#f59e0b';
    const statusBg = p.status === 'Active' ? 'rgba(0,194,168,0.15)' : 'rgba(245,158,11,0.15)';

    const linkHtml = p.link === '#wip'
      ? `<span style="font-size:0.82rem;color:#888;">Draft coming soon</span>`
      : `<a href="${p.link}" target="_blank" rel="noopener" class="popup-link">View project →</a>`;

    const popupHtml = `
      <div style="min-width:220px;max-width:280px;">
        <div style="font-size:0.75rem;background:${statusBg};color:${statusColor};display:inline-block;padding:2px 8px;border-radius:4px;margin-bottom:8px;font-weight:500;">${p.status}</div>
        <div class="popup-title">${p.flag} ${p.title}</div>
        <div class="popup-desc">${p.desc}</div>
        ${linkHtml}
      </div>
    `;

    L.circleMarker([p.lat, p.lng], markerStyle)
      .addTo(map)
      .bindPopup(popupHtml, { maxWidth: 300 });
  });
});
