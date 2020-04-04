import React from "react";
import './navbar.css';
import SocialNetworks from '../social-networks/SocialNetworks';
import NameList from '../name-list/NameList';

const Navbar = () => {
  const list = ["TRAVEL UPDATES", "REVIEWS", "ABOUT", "CONTACT"];
  return (
    <div className="navbar">
      <SocialNetworks />
      <NameList names={list}/>      
    </div>
  )
}

export default Navbar;