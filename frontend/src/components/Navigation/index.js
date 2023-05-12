// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  return (
    <>
    <div className="navigation">
    <div className="titleandlogo">

    <img className="logo" alt="logo" src="https://i.imgur.com/Q8y7IUU.png"/>
    <h1 className="logo-name">  campbnb </h1>
    </div>
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
