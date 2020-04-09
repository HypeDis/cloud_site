import React from 'react';
import Search from './Search';

function Dashboard() {
  return (
    <div className="dashboard">
      <Search />
      <div className="suggested">Suggested For You</div>
      <div className="recent">Recent Files</div>
      <div className="recent">Shared with me</div>
    </div>
  );
}

export default Dashboard;
