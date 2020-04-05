import React from 'react';
import Dashboard from './Dashboard/Dashboard';
import SideNav from './SideNav/SideNav';
import StorageStats from './StorageStats/StorageStats';

function Main() {
  return (
    <div className="main-container">
      <SideNav />
      <Dashboard />
      <StorageStats />
    </div>
  );
}
export default Main;
