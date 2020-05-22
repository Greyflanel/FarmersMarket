import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
        <React.Fragment>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cart">My Cart</NavLink>
            <NavLink to="/productlist">PRODUCTS</NavLink>
        </React.Fragment>
    );
};

export default NavBar;