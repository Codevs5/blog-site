import React from 'react';
import {Link} from 'react-router-dom';
import '../../style/header.scss';

export const Header = () => (
    <header className="header">
        <h1>Codevs Blog
        </h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
);
