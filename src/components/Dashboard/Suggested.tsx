import React, { useState, useEffect } from 'react';
type SuggestedProps = { content: any[] };
export default function Suggested({ content }: SuggestedProps) {
  const [view, setView] = useState('GRID');
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
              if (view !== 'GRID') {
                setView('GRID');
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
              if (view !== 'LIST') {
                setView('LIST');
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
          view === 'GRID' ? 'suggested-items-grid' : 'suggested-items-list'
        }`}
      >
        <a href="#file1" className="suggested__card--container">
          <div
            className={`suggested__card ${
              view === 'GRID'
                ? 'suggested__card--grid'
                : 'suggested__card--list'
            }`}
          >
            <div className="options">
              <button className="options-btn">
                <svg className="options-icon">
                  <use
                    href={
                      process.env.PUBLIC_URL +
                      '/img/sprites.svg#icon-dots-horizontal'
                    }
                  ></use>
                </svg>
              </button>
            </div>
            <div className="content-icon">
              <svg>
                <use
                  href={process.env.PUBLIC_URL + '/img/sprites.svg#icon-folder'}
                ></use>
              </svg>
            </div>
            <div className="collaborators">
              <div className="collab-icon">
                <img
                  src={process.env.PUBLIC_URL + '/img/people/batman.png'}
                  alt="person icon"
                  className="collab-img"
                />
              </div>
              <div className="collab-icon">
                <img
                  src={process.env.PUBLIC_URL + '/img/people/chris.jpg'}
                  alt="person icon"
                  className="collab-img"
                />
              </div>
              <div className="collab-icon">
                <div className="collab-text">
                  <p>+2</p>
                </div>
              </div>
            </div>
            <div className="content">
              <p className="content__name">Summer 2019</p>
              <p className="content__date">Last Accessed: 2020-03-21</p>
            </div>
          </div>
        </a>
        <a href="file2" className="suggested__card--container">
          <div
            className={`suggested__card ${
              view === 'GRID'
                ? 'suggested__card--grid'
                : 'suggested__card--list'
            }`}
          >
            <div className="options">
              <button className="options-btn">
                <svg className="options-icon">
                  <use
                    href={
                      process.env.PUBLIC_URL +
                      '/img/sprites.svg#icon-dots-horizontal'
                    }
                  ></use>
                </svg>
              </button>
            </div>
            <div className="content-icon">
              <svg>
                <use
                  href={process.env.PUBLIC_URL + '/img/sprites.svg#icon-folder'}
                ></use>
              </svg>
            </div>
            <div className="collaborators">
              <div className="collab-icon">
                <img
                  src={process.env.PUBLIC_URL + '/img/people/batman.png'}
                  alt="person icon"
                  className="collab-img"
                />
              </div>
              <div className="collab-icon">
                <img
                  src={process.env.PUBLIC_URL + '/img/people/chris.jpg'}
                  alt="person icon"
                  className="collab-img"
                />
              </div>
              <div className="collab-icon">
                <div className="collab-text">
                  <p>+2</p>
                </div>
              </div>
            </div>
            <div className="content">
              <p className="content__name">
                Tax Documents 2019 Testing a very long filename needs to be even
                longer
              </p>
              <p className="content__date">Last Accessed: 2020-03-21</p>
            </div>
          </div>
        </a>
        <a href="#file3" className="suggested__card--container">
          <div
            className={`suggested__card ${
              view === 'GRID'
                ? 'suggested__card--grid'
                : 'suggested__card--list'
            }`}
          >
            <div className="options">
              <button className="options-btn">
                <svg className="options-icon">
                  <use
                    href={
                      process.env.PUBLIC_URL +
                      '/img/sprites.svg#icon-dots-horizontal'
                    }
                  ></use>
                </svg>
              </button>
            </div>
            <div className="content-icon">
              <svg>
                <use
                  href={process.env.PUBLIC_URL + '/img/sprites.svg#icon-folder'}
                ></use>
              </svg>
            </div>
            <div className="collaborators">
              <div className="collab-icon">
                <img
                  src={process.env.PUBLIC_URL + '/img/people/batman.png'}
                  alt="person icon"
                  className="collab-img"
                />
              </div>
              <div className="collab-icon">
                <img
                  src={process.env.PUBLIC_URL + '/img/people/chris.jpg'}
                  alt="person icon"
                  className="collab-img"
                />
              </div>
              <div className="collab-icon">
                <div className="collab-text">
                  <p>+2</p>
                </div>
              </div>
            </div>
            <div className="content">
              <p className="content__name">Top Secret</p>
              <p className="content__date">Last Accessed: 2020-03-21</p>
            </div>
          </div>
        </a>
        <a href="#file4" className="suggested__card--container">
          <div
            className={`suggested__card ${
              view === 'GRID'
                ? 'suggested__card--grid'
                : 'suggested__card--list'
            }`}
          >
            <div className="options">
              <button className="options-btn">
                <svg className="options-icon">
                  <use
                    href={
                      process.env.PUBLIC_URL +
                      '/img/sprites.svg#icon-dots-horizontal'
                    }
                  ></use>
                </svg>
              </button>
            </div>
            <div className="content-icon">
              <svg>
                <use
                  href={process.env.PUBLIC_URL + '/img/sprites.svg#icon-folder'}
                ></use>
              </svg>
            </div>
            <div className="collaborators">
              <div className="collab-icon">
                <img
                  src={process.env.PUBLIC_URL + '/img/people/batman.png'}
                  alt="person icon"
                  className="collab-img"
                />
              </div>
              <div className="collab-icon">
                <img
                  src={process.env.PUBLIC_URL + '/img/people/chris.jpg'}
                  alt="person icon"
                  className="collab-img"
                />
              </div>
              <div className="collab-icon">
                <div className="collab-text">
                  <p>+2</p>
                </div>
              </div>
            </div>
            <div className="content">
              <p className="content__name">Movies</p>
              <p className="content__date">Last Accessed: 2020-03-21</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
// TODO: populate with dummy data, have a carousel of 6-10 items
// create type for suggested content
// switch from card to list view
// depending on state use the grid or list class
