import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/topnav.scss';
import mcrlogo from '../images/MCR-Buzz.png';

const TopNav = ({ user, isLoggedIn, onLogout }) => (
  <div className="topNav">
    <Link to='/' className="logo">
    <img className="logo" src={mcrlogo} />
    </Link>
    {
      isLoggedIn && (
      <div className="logout">
        <span>{user.firstName} {user.lastName}</span>
        <button className="logout-button" onClick={onLogout}>Logout</button>
      </div>
      )}
    {
        !isLoggedIn && (
          <Link to="/login" className="login-button">Login</Link>
        )
      }
  </div>

);
export default TopNav;
