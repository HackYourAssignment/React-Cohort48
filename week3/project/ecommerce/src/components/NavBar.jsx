import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Products</Link>
                </li>
                <li>
                    <Link to="/favourites">Favourites</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;