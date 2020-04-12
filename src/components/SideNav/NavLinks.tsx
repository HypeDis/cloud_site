import React from 'react';
import NavItem from './NavItem';
import { NavItemData } from './types';

type NavLinkProps = {
  items: NavItemData[];
};
export default function NavLinks({ items }: NavLinkProps) {
  return (
    <div className="nav-links-container">
      {items.map(data => (
        <NavItem key={data.iconURL} {...data} />
      ))}
    </div>
  );
}
