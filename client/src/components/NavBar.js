import React, { useState } from 'react';


const NavBar = () => {
const [isActive, setIsActive] = useState("false");
const menuToggle = () => setIsActive(!isActive);
  
    return (
      <nav className={isActive ? "" : "nav.active"}>
        <div className={isActive ? "menu" : "menu.active"}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Shop</a>
            </li>
            <li>
              <a href="#_blank">Destination</a>
            </li>
            <li>
              <a href="#_blank">Blog</a>
            </li>
            <li>
              <a href="#_blank">Contact</a>
            </li>
          </ul>
        </div>
        <button
          className={isActive ? "toggle" : "active"}
          onClick={menuToggle}
        ></button>
      </nav>
    );
};

export default NavBar;