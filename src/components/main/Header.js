import React from 'react';
import {Link} from 'react-router-dom';
import '../../style/__header.scss';

export const Header = () => (
    <header className="header">
      <Link to="/" className="header-ref">
        <img src="./static/images/logo.png" alt="Codevs" className="header-icon" height="40px" width="40px"/>
        <h1 className="header-title"> <span>/Co</span>Devs/ </h1>
      </Link>
    </header>
);
