import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard">
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
      <div className="suggested">Suggested For You</div>
      <div className="recent">Recent Files</div>
      <div className="recent">Shared with me</div>
    </div>
  );
}

export default Dashboard;
