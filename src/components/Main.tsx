import React from 'react';
import Dashboard from './Dashboard/Dashboard';
import SideNav from './SideNav/SideNav';
import RightPanel from './RightPanel/RightPanel';
import ShareModal from './Dashboard/ShareModal';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { ShareModalProvider } from './Dashboard/ShareModalContext';

function Main() {
  return (
    <Router>
      <div className="main-container" style={{ position: 'relative' }}>
        <ShareModalProvider>
          <SideNav />
          <Dashboard />
          <RightPanel />
          <Switch>
            <Redirect from="/" to="/home" />
          </Switch>
          <ShareModal />
        </ShareModalProvider>
      </div>
    </Router>
  );
}
export default Main;
