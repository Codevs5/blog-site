import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

import SocialButton from './SocialButton';

const FooterUI = ({social}) => (
  <footer className="footer">
       <div className="footer-content">
           <div className="footer-social">
           {social.map((item, i) => (<SocialButton key={i} social={item}/>))}
         </div>
           <span>Made it with &nbsp;<i className="icon-reactjs"/>&nbsp; and &nbsp;<i className="icon-fire-alt" />&nbsp;</span>
           <div className="footer-pages">
             <Link to="/terms"> Aviso legal </Link>
             <Link to="/about"> Sobre nosotros </Link>
           </div>
       </div>
   </footer>
);

FooterUI.propTypes = {
  social: PropTypes.array.isRequired
};

export default FooterUI;
