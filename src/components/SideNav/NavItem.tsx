import React from 'react';
import { NavLink } from 'react-router-dom';

type NavItemProps = {
  iconURL: string;
  to: string;
  label: string;
};
function NavItem({ iconURL, to, label }: NavItemProps) {
  return (
    <div className="nav-item">
      <NavLink
        className="nav-item__link"
        activeClassName="nav-item__link--current"
        to={to}
      >
        <svg className="nav-item__icon">
          <use href={process.env.PUBLIC_URL + iconURL}></use>
        </svg>
        <div className="nav-item__label">{label}</div>
      </NavLink>
    </div>
  );
}

export default NavItem;
