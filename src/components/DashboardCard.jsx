import React from 'react';

const DashboardCard = ({ title, value, change, changeColor }) => {
  return (
    <div className="dashboard-card">
      <p className="card-title">{title}</p>
      <p className="card-value">{value}</p>
      {change && (
        <p className="card-change" style={{ color: changeColor }}>
          {change}
        </p>
      )}
    </div>
  );
};

export default DashboardCard;