import React from 'react';

function MapStatsChart ({ visited, vacations, studies, work }) {
  const breakdown = [
    { label: 'Vacations countries', value: vacations, color: '#517FA3' },
    { label: 'Studies countries', value: studies, color: '#669E8F' },
    { label: 'Work countries', value: work, color: '#E0848C' },
  ];

  return (
    <div className="map-stats-chart" aria-label="Country counts by category">
      <div
        className="map-stats-block map-stats-block--wide"
        style={{ borderTopColor: '#084677' }}
      >
        <span className="map-stats-block-value">{visited}</span>
        <span className="map-stats-block-label">Visited countries</span>
      </div>
      <div className="map-stats-grid map-stats-grid--three">
        {breakdown.map((item) => (
          <div
            key={item.label}
            className="map-stats-block"
            style={{ borderTopColor: item.color }}
          >
            <span className="map-stats-block-value">{item.value}</span>
            <span className="map-stats-block-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MapStatsChart;
