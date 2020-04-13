import React from 'react';
import Search from './Search';
import Suggested from './Suggested';
import Recent from './Recent';
import { suggestedContentsFromDB, recentContentFromDB } from './seedData';

function Dashboard() {
  return (
    <div className="dashboard">
      <Search />
      <Suggested suggestedContents={suggestedContentsFromDB} />
      <Recent recentContent={recentContentFromDB} />
      <div className="recent">Shared with me</div>
    </div>
  );
}

export default Dashboard;
