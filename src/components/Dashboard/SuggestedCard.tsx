import React from 'react';
import CollaboratorsGroup from './CollaboratorsGroup';
import { SuggestedContent, SuggestedView } from './types';

type SuggestedCardProps = {
  view: SuggestedView;
  content: SuggestedContent;
};

export default function SuggestedCard({ view, content }: SuggestedCardProps) {
  const { iconURL, name, lastAccessed, collaborators } = content;
  return (
    <a href={'#' + content.name} className="suggested__card--container">
      <div
        className={`suggested__card ${
          view === SuggestedView.GRID
            ? 'suggested__card--grid'
            : 'suggested__card--list'
        }`}
      >
        <div className="options">
          <button className="options-btn">
            <svg className="options-icon">
              <use
                href={
                  process.env.PUBLIC_URL + '/img/sprites.svg#icon-dots-vertical'
                }
              ></use>
            </svg>
          </button>
        </div>
        <div className="content-icon">
          <svg>
            <use href={iconURL}></use>
          </svg>
        </div>
        <CollaboratorsGroup collaborators={collaborators} maxSize={3} />
        <div className="content">
          <p className="content__name">{name}</p>
          <p className="content__date">{lastAccessed}</p>
        </div>
      </div>
    </a>
  );
}
