import React from 'react';
import RecentItem from './RecentItem';
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
            <RecentItem
              key={name}
              iconURL={iconURL}
              name={name}
              lastAccessed={lastAccessed}
            />
          );
        })}
      </div>
    </div>
  );
}
