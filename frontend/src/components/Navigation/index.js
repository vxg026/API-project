// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { Link } from 'react-router-dom'
// import campbnb from './logo.png'

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  return (
    <>
    <div className="navigation">
      <Link className="link-to-home" to="/">
    <div className="titleandlogo">

    <img className="logo" alt="logo" src='https://companieslogo.com/img/orig/ABNB-4aaade0f.png?t=1633511992'/>
    <h1 className="logo-name">  campbnb </h1>
    </div>
    </Link>
    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink>
      </li>
      {isLoaded && (
        <li>
          <ProfileButton user={sessionUser} />
        </li>
      )}
    </ul>
    </div>
    </>
  );
}

export default Navigation;
