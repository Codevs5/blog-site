import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchBios } from '../actions/biosActions';

import AboutUI from '../components/AboutUI';

class AboutContainer extends Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    if(this.props.bios.length === 0) this.props.dispatch(fetchBios());
  }

  render(){
    console.log(this.props.loading);
    return (<AboutUI bios={this.props.bios}/>);
  }
}

const mapStateToProps = (state, action) => ({
  loading: state.status.loading,
  bios: state.bios,
});

export default connect(mapStateToProps)(AboutContainer);
