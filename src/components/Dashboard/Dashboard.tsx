import React from 'react';
import Search from './Search';
import Suggested from './Suggested';
import { suggestedContentsFromDB } from './seedData';

function Dashboard() {
  return (
    <div className="dashboard">
      <Search />
      <Suggested suggestedContents={suggestedContentsFromDB} />

      <div className="recent">Recent Files</div>
      <div className="recent">Shared with me</div>
    </div>
  );
}

export default Dashboard;
