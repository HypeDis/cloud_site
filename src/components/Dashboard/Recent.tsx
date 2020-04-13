import React from 'react';
import { RecentContent } from './types';

type RecentProps = {
  recentContent: RecentContent[];
};

export default function Recent({ recentContent }: RecentProps) {
  return (
    <div className="recent">
      <div className="titlebar">
        <h2 className="titlebar-text">Recent</h2>
      </div>
      <div className="recent-items">
        {recentContent.map(content => {
          const { iconURL, name, lastAccessed } = content;
          return (
            <a href={`#${name}`} className="recent-item">
              <div className="recent-item__icon">
                <svg>
                  <use href={iconURL}></use>
                </svg>
              </div>
              <div className="recent-item__text">
                <div className="recent-item__name">{name}</div>
                <div className="recent-item__date">
                  Last Accessed: {lastAccessed}
                </div>
              </div>
              <div className="recent-item__controls">
                <button className="share">Share</button>
                <button className="options">
                  <svg>
                    <use
                      href={
                        process.env.PUBLIC_URL +
                        '/img/sprites.svg#icon-dots-horizontal'
                      }
                    ></use>
                  </svg>
                </button>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
