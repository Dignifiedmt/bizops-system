import React from 'react';

const SalesChart = ({ title, value, period, change, type, labels }) => {
  return (
    <div className="sales-chart">
      <p className="chart-title">{title}</p>
      <p className="chart-value">{value}</p>
      <div className="chart-meta">
        <p className="chart-period">{period}</p>
        <p className="chart-change" style={{ color: '#006400' }}>
          {change}
        </p>
      </div>
      {type === 'trend' ? (
        <div className="chart-container">
          <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" preserveAspectRatio="none">
            <path
              d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25Z"
              fill="url(#paint0_linear)"
            />
            <path
              d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
              stroke="#49749c"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="paint0_linear" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
                <stop stopColor="#e7edf4" />
                <stop offset="1" stopColor="#e7edf4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="chart-labels">
            {labels.map((label) => (
              <p key={label} className="chart-label">{label}</p>
            ))}
          </div>
        </div>
      ) : (
        <div className="chart-container bar-chart">
          <div className="bar-grid">
            <div className="bar" style={{ height: '20%' }}></div>
            <p className="bar-label">Product A</p>
            <div className="bar" style={{ height: '80%' }}></div>
            <p className="bar-label">Product B</p>
            <div className="bar" style={{ height: '20%' }}></div>
            <p className="bar-label">Product C</p>
            <div className="bar" style={{ height: '90%' }}></div>
            <p className="bar-label">Product D</p>
            <div className="bar" style={{ height: '90%' }}></div>
            <p className="bar-label">Product E</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesChart;