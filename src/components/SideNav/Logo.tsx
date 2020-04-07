import React from 'react';
import { Link } from 'react-router-dom';
export default function Logo() {
  return (
    <div className="logo-box">
      <Link to="/home">
        <img
          src={process.env.PUBLIC_URL + '/img/logo-yellow.png'}
          alt="cloudbae logo"
          className="logo"
        />
      </Link>
    </div>
  );
}
