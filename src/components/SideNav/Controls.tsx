import React, { useRef, RefObject } from 'react';
import ControlsMenu from './ControlMenu';
import { CreateMenuCollection, OptionsMenuCollection } from './constants';

export default function Controls() {
  const optionsRef = useRef<HTMLDivElement>(null);
  const createRef = useRef<HTMLDivElement>(null);
  const refs: { [key: string]: RefObject<HTMLDivElement> } = {
    options: optionsRef,
    create: createRef,
  };
  const onClickHandler = (btnName: string) => {
    console.log('button clicked');
    for (const name in refs) {
      const curRef = refs[name];
      if (curRef.current && name === btnName) {
        curRef.current.classList.remove('hidden');
      } else if (curRef.current) {
        curRef.current.classList.add('hidden');
      }
    }
  };
  return (
    <div className="sidenav__controls">
      <ControlsMenu
        menuRef={optionsRef}
        tipPosition="left"
        name="options"
        menuItems={OptionsMenuCollection}
      />
      <ControlsMenu
        menuRef={createRef}
        tipPosition="right"
        hidden={true}
        name="create"
        menuItems={CreateMenuCollection}
      />
      <div className="btn-group">
        <button
          className="options-btn"
          onClick={() => onClickHandler('options')}
        >
          <div className="btn-text">Options</div>
        </button>
        <button className="create-btn" onClick={() => onClickHandler('create')}>
          <svg className="nav-item__icon">
            <use
              href={process.env.PUBLIC_URL + '/img/sprites.svg#icon-plus'}
            ></use>
          </svg>
        </button>
      </div>
    </div>
  );
}
