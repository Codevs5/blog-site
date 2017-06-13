import React, { PropTypes } from 'react';

import BlogHeader from './BlogHeader';

import '../style/__blog.scss';

const BlogUI = ({entries}) => (
  <div className="blog">
    <BlogHeader title='Blog' />
    <EntriesPreviewList entries={entries} />
  </div>
);

BlogUI.propTypes={
  entries: PropTypes.array.isRequired
};

export default BlogUI;

const EntriesPreviewList = ({entries}) => (
  <div className="entries-list">
    {entries.map((entry, i) => <EntryPreview entry={entry} key={i} />)}
  </div>
);

EntriesPreviewList.propTypes = {
  entries: PropTypes.array.isRequired
};

const EntryPreview = ({entry}) => (
  <div className="entry-preview">
    <div className="entry-preview-title">
      <h4>{entry.title}</h4>
      <p>{entry.author.name}</p>
    </div>
    <div className="entry-preview-content">
      <p> {defaultPreview} </p>
    </div>
  </div>
);

EntryPreview.propTypes = {
  entry: PropTypes.object.isRequired
}

const defaultPreview = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
