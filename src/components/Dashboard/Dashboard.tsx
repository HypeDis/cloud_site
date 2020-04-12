import React from 'react';
import Search from './Search';
import Suggested from './Suggested';

function Dashboard() {
  return (
    <div className="dashboard">
      <Search />
      <Suggested content={[]} />

      <div className="recent">Recent Files</div>
      <div className="recent">Shared with me</div>
    </div>
  );
}

export default Dashboard;
