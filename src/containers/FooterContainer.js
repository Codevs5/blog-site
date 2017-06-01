import React, { Component } from 'react';

import FooterUI from '../components/FooterUI';

import '../style/__footer.scss';

class FooterContainer extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (<FooterUI social={social} />);
  }
}

export default FooterContainer;

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
