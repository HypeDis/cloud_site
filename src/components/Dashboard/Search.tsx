import React from 'react';

export default function Search() {
  return (
    <div className="search">
      <div className="search__container">
        <svg className="search__icon">
          <use
            href={process.env.PUBLIC_URL + '/img/sprites.svg#icon-search'}
          ></use>
        </svg>
        <input type="text" className="search__input" placeholder="Search" />
      </div>
    </div>
  );
}
