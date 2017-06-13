import React, { Component } from 'react';
import { connect } from 'react-redux';

import BlogUI from '../components/BlogUI';
import LoadingPage from '../components/LoadingPage';

import { fetchEntries } from '../actions/entriesActions';

class BlogContainer extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.dispatch(fetchEntries());
  }
  render(){
    if(this.props.loading) return (<LoadingPage />);
    return(
      <BlogUI entries={this.props.entries} />
    );
  }
}

const mapStateToProps = (state, action) => ({
  loading: state.status.loading,
  entries: state.entries
});
export default connect(mapStateToProps)(BlogContainer);
