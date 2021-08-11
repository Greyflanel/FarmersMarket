import React, { useState } from 'react';


const NavBar = () => {
const [isActive, setIsActive] = useState("false");
const menuToggle = () => setIsActive(!isActive);
  
    return (
      <>
      <header>
        <h2>Logo</h2>
      </header>
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
              <a href="/cart">Cart</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
          </ul>
        </div>
        <button
          className={isActive ? "toggle" : "active"}
          onClick={menuToggle}
        ></button>
      </nav>
      </>
    );
};

export default NavBar;