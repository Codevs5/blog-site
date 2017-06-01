import React, { Component } from 'react';
import { connect } from 'react-redux';

import {navigate} from '../actions/statusActions';

import HeaderUI from '../components/HeaderUI';

class HeaderContainer extends Component {
  constructor(props){
    super(props);

    this.handleNavigate = this.handleNavigate.bind(this);
  }

  handleNavigate(page){
    this.props.dispatch(navigate(page));
  }

  render(){
    return (<HeaderUI
      pages={pages}
      currentPage={this.props.currentPage}
      handleNavigate={this.handleNavigate}
      />);
  }
}
const mapStateToProps = (state, action) => ({
  currentPage: state.status.currentPage
});

export default connect(mapStateToProps)(HeaderContainer);


//Paginas
const pages = [
  {
    name: 'home',
    path: ''
  },
  {
    name: 'about',
    path: 'about'
  },
  {
    name: 'contact',
    path: 'contact'
  }
];
