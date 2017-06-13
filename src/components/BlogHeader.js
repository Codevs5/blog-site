import React, { PropTypes } from 'react';

const BlogHeader = ({ title, icon }) => (
  <div className="blog-header">
    {icon && <div><i className={icon} /></div>}
    <h2>{title}</h2>
  </div>
);

BlogHeader.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default BlogHeader;
