import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <>
            <NavLink exact activeClassName="active_class" to="/" > About </NavLink>
            <NavLink exact activeClassName="active_class" to="/contact" > Contact </NavLink>
            <NavLink exact activeClassName="active_class" to="/contact/location" > Location </NavLink>
            <NavLink exact activeClassName="active_class" to="/user/vinay/pathrikar" > User </NavLink>
            <NavLink exact activeClassName="active_class" to="/search">Search</NavLink>
        </>
    );
};

export default Navbar;