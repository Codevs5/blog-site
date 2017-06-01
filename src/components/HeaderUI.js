import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

import '../style/__header.scss';

import {capitalize} from '../utils/strings';

const HeaderUI = ({pages, handleNavigate, currentPage}) => (
  <header className="header">
    {pages.map((page, i) => (<MenuItem page={page} currentPage={page.path === currentPage} handleNavigate={handleNavigate}/>))}
  </header>
);

HeaderUI.propTypes = {
  pages: PropTypes.array.isRequired,
  currentPage: PropTypes.string.isRequired,
  handleNavigate: PropTypes.func.isRequired
};

export default HeaderUI;

const MenuItem = ({page, handleNavigate, currentPage}) => {
  const classItem = (currentPage)?'menu-item active':'menu-item';
  return (
  <div className={classItem}>
    <Link to={page.path} onClick={() => handleNavigate(page.path)}>{capitalize(page.name)}</Link>
  </div>
);};

MenuItem.propTypes = {
  page: PropTypes.object.isRequired
};
