import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
        <>
            <div className="navbar">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/cart">CART</NavLink>
            <NavLink to="/products">PRODUCTS</NavLink>
            <NavLink to="/authorize">LOG</NavLink>
            <NavLink to="/admin">ADMIN</NavLink>
            <h1>WELCOME TO THE FARMERS MARKET</h1>
            </div>
        </>
    );
};

export default NavBar;