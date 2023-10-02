import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.css"

function NavBar() {
    return(
        <nav>
            <ul className="NavigationBar">
                <li><NavLink className={({ isActive }) => isActive ? 'default-menu-link' : 'active-menu-link'}
                             to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'default-menu-link' : 'active-menu-link'}
                             to="new">Nieuwe post</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'default-menu-link' : 'active-menu-link'}
                             to="blogposts">Alle posts</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;