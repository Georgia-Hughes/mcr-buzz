import React from 'react';
import '../styles/info-bar.scss';

const TopNav = ({ isLoggedIn }) => (
  <div className="infoBar">
    {
      isLoggedIn && (
        <div>All you need to know about Manchester.</div>
      )}
    {
        !isLoggedIn && (
          <div>To add your own content sign up or login.</div>
        )
      }
  </div>

);
export default TopNav;
