import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <ul className="menu-block">
            <li className="menu-item">
                <Link to={'/'}>
                    <div className="menu-item-icon"></div>
                    <div className="menu-item-label">Dashboard</div>
                </Link>
            </li>
            <li className="menu-item">
                <Link to={'/'}>
                    <div className="menu-item-icon"></div>
                    <div className="menu-item-label">Quotes</div>
                </Link>
            </li>
        </ul>
    );
}

export default Nav;