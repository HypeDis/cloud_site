import React, { RefObject } from 'react';
import { ControlMenuAction } from './types';

type ControlMenuProps = {
  menuRef: RefObject<HTMLDivElement>;
  tipPosition: string;
  name: string;
  hidden?: boolean;
  menuItems: ControlMenuAction[];
};

export default function ControlMenu({
  menuRef,
  tipPosition,
  name,
  hidden,
  menuItems,
}: ControlMenuProps) {
  const positionCss =
    tipPosition === 'left'
      ? 'sidenav__controls__menu--left'
      : 'sidenav__controls__menu--right';
  const visibilityCss = hidden ? 'hidden' : '';
  return (
    <div
      ref={menuRef}
      className={`sidenav__controls__menu ${positionCss} ${visibilityCss}`}
    >
      {/* create a MenuItem Component */}
      <div className="sidenav__controls__menu-items">
        {menuItems.map(item => (
          <div key={item.label} className="menu-item">
            <button>
              <svg>
                <use href={process.env.PUBLIC_URL + item.iconURL}></use>
              </svg>
              <div className="label">{item.label}</div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
