// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import OpenModalMenuItem from './OpenModalMenuItem';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

function ProfileButton({ user }) {
  const dispatch = useDispatch();

  const spotsObj = useSelector(state=> state.spots.allSpots)
console.log("spots Array", spotsObj)
const spotsArray = Object.values(spotsObj)

const spotFound = spotsArray.find(spot=>spot?.ownerId===user?.id)

  const history=useHistory()
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    closeMenu();
    history.push('/')
  };
console.log("userrrrr=>", user)
  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <>
      <button className="profile-button" onClick={openMenu}>
      <i class="fas fa-bars"/>
        <i className="fas fa-user-circle" />
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            {/* <li>{user.username}</li> */}
            <li>Hello, {user.firstName} {user.lastName}</li>
            <li>{user.email}</li>
            <div className="manage-spots">
              {spotFound? <li><Link className="manage-link" to={`/spots/current`}>Manage Spots</Link></li>:<Link className="manage-link" to={`/spots/new`}>Create a new spot!</Link>}

            </div>
            <li className="profile-container-3">
              <button className="logout-button" onClick={logout}><h6 className="profile-h6">Log Out</h6></button>
            </li>
          </>
        ) : (
          <>
            <OpenModalMenuItem

              itemText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />
            <OpenModalMenuItem
              itemText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
          </>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
