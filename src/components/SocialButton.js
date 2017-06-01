import React from 'react';
import {Link} from 'react-router-dom';

const SocialButton = ({social}) => {
  const cssClass = `social-icon ${social.name} fa fa-${social.name}`;
  return (
    <a className={cssClass} href={social.reference} />
)};

export default SocialButton;
