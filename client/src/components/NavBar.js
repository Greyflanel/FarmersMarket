import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
        <>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/cart">MY CART</NavLink>
            <NavLink to="/productlist">PRODUCTS</NavLink>
            <h1>WELCOME TO THE FARMERS MARKET</h1>
        </>
    );
};

export default NavBar;