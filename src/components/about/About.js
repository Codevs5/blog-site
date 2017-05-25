import React, { Component } from 'react';
import * as firebase from 'firebase';


export default class About extends Component {
  constructor(props){
      super(props);
      this.state = {
        bio : []
      }
  }

  componentDidMount(){
    const bioRef = firebase.database().ref().child('bio');
    bioRef.on('value', snap => {
      let userBios = [];
      let data = snap.val();
      for (let i in data) {
        userBios.push(data[i]);
      }
      this.setState({
        bio : userBios
      })
    });
  }

  render(){
    return (
      <div>
        {this.state.bio}
      </div>
    )
  }
}
