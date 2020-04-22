import React, { useContext } from 'react';
import { RecentContent } from './types';
import { ShareModalContext } from './ShareModalContext';

export default function RecentItem({
  name,
  iconURL,
  lastAccessed,
}: RecentContent) {
  const shareContext = useContext(ShareModalContext);
  const { setIsVisible, setFileName, setIconURL } = shareContext;

  const recentItemOnClick = (filepath: string) => {
    window.location.href = filepath;
  };
  const shareButtonOnClick = (
    evt: React.MouseEvent<HTMLButtonElement>
  ): void => {
    evt.stopPropagation();
    setIsVisible(true);
    // figure out how to do this async
    setFileName(name);
    setIconURL(iconURL);
  };
  const optionsButtonOnClick = (
    evt: React.MouseEvent<HTMLButtonElement>
  ): void => {
    evt.stopPropagation();
  };

  return (
    <div
      className="recent-item"
      onClick={() => {
        recentItemOnClick(`#${name}`);
      }}
    >
      <div className="recent-item__icon">
        <svg>
          <use href={iconURL}></use>
        </svg>
      </div>
      <div className="recent-item__text">
        <div className="recent-item__name">{name}</div>
        <div className="recent-item__date">Last Accessed: {lastAccessed}</div>
      </div>
      <div className="recent-item__controls">
        <button className="share" onClick={shareButtonOnClick}>
          Share
        </button>
        <button className="options" onClick={optionsButtonOnClick}>
          <svg>
            <use
              href={
                process.env.PUBLIC_URL + '/img/sprites.svg#icon-dots-horizontal'
              }
            ></use>
          </svg>
        </button>
      </div>
    </div>
  );
}
