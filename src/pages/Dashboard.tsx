import React from 'react';
import DashboardNavbar from '../components/DashboardNavbar'; 

function Dashboard() {
  return (
    <div className="dashboard-container">
      <DashboardNavbar />
      <div className="dashboard-header">
        <h1>Welcome to Your Dashboard</h1>
      </div>
      <div className="dashboard-content">
        <p>This is your dashboard. Add your widgets, stats, or other content here.</p>
      </div>
    </div>
  );
}

export default Dashboard;