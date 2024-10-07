import React from 'react';
import logo from '../Assests/logo.png'; 
import './Header.css'; 

const Header = () => {
  return (
    
    <div className="header-container">
      <img src={logo} alt="logo" className="logo" />
      <div className="header-right">
        <h3 className="profile">Profile</h3>
        <h3 className="logout">Logout</h3>
      </div>
    
    </div>
  );
};

export default Header;
