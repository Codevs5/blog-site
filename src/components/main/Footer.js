import React from 'react';
import {Link} from 'react-router-dom';

import './../../style/__footer.scss';

import {Social} from './Social';

//Static social media
const social = [
    {
        name: 'twitter',
        reference: 'https://www.twitter.com/codevs5'
    }, {
        name: 'github',
        reference: 'https://www.github.com/codevs5'
    }, {
        name: 'youtube',
        reference: 'https://www.youtube.com/channel/UCVn_kH53sGmpH4-TEM3gqXA'
    }, {
        name: 'google',
        reference: 'https://plus.google.com/u/0/108817490202763399265'
    }, {
        name: 'linkedin',
        reference: 'https://www.linkedin.com/groups/8599859'
    }
];

export const Footer = () => (
    <footer className="footer">
        <div className="footer-content">
            <div className="footer-social">
            {social.map((item, i) => <Social key={i} social={item}/>)}
          </div>
            <span>Made it with &nbsp;<i className="icon-reactjs"/>&nbsp; and &nbsp;<i className="icon-fire-alt" />&nbsp;</span>
            <div className="footer-pages">
              <Link to="/terms"> Aviso legal </Link>
              <Link to="/about"> Sobre nosotros </Link>
            </div>
        </div>
    </footer>
);
