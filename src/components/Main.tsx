import React from 'react';
import Dashboard from './Dashboard/Dashboard';
import SideNav from './SideNav/SideNav';
import StorageStats from './StorageStats/StorageStats';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

function Main() {
  return (
    <Router>
      <div className="main-container">
        <SideNav />
        <Dashboard />
        <StorageStats />
        <Switch>
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    </Router>
  );
}
export default Main;
