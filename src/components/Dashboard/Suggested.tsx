import React, { useState, useEffect } from 'react';
import { SuggestedView, SuggestedContent } from './types';
import SuggestedCard from './SuggestedCard';
type SuggestedProps = { suggestedContents: SuggestedContent[] };

export default function Suggested({ suggestedContents }: SuggestedProps) {
  const [view, setView] = useState(SuggestedView.GRID);
  useEffect(() => {}, [view]);
  console.log('view changed', view);
  return (
    <div className="suggested">
      <div className="suggested__titlebar">
        <div className="suggested__title">
          <h2 className="suggested__title-text">Suggested For You</h2>
        </div>
        <div className="suggested__view-control">
          <button
            className="btn grid-btn"
            onClick={() => {
              if (view !== SuggestedView.GRID) {
                setView(SuggestedView.GRID);
              }
            }}
          >
            <svg className="btn-icon">
              <use
                href={process.env.PUBLIC_URL + '/img/sprites.svg#icon-grid1'}
              ></use>
            </svg>
          </button>
          <button
            className="btn list-btn"
            onClick={() => {
              if (view !== SuggestedView.LIST) {
                setView(SuggestedView.LIST);
              }
            }}
          >
            <svg className="btn-icon">
              <use
                href={process.env.PUBLIC_URL + '/img/sprites.svg#icon-menu'}
              ></use>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`suggested-items ${
          view === SuggestedView.GRID
            ? 'suggested-items-grid'
            : 'suggested-items-list'
        }`}
      >
        {suggestedContents.map(content => (
          <SuggestedCard view={view} content={content} />
        ))}
      </div>
    </div>
  );
}
// TODO: populate with dummy data, have a carousel of 6-10 items
// create type for suggested content
// switch from card to list view
// depending on state use the grid or list class
