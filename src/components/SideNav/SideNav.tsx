import React from 'react';
import NavLinks from './NavLinks';
import Logo from './Logo';
import Controls from './Controls';
import { NavItemDataCollection } from './constants';

function SideNav() {
  return (
    <nav className="sidenav">
      <Logo />
      <NavLinks items={NavItemDataCollection} />
      <Controls />
    </nav>
  );
}

export default SideNav;
