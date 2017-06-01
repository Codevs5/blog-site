import React, {Component} from 'react';

import HomeUI from '../components/HomeUI';

class HomeContainer extends Component {
  constructor(){
    super();
  }
  render() {
    return (<HomeUI members={members} collaborators={collaborators}/>);
  }
}

export default HomeContainer;

const members = [
  {
    name: "Joseba Carral",
    pic: "joseba",
    social: [
      {
        name: 'twitter',
        reference: 'https://www.twitter.com/jcarral21'
      }, {
        name: 'github',
        reference: 'https://www.github.com/jcarral'
      }
    ]
  }, {
    name: "Borja Diez",
    pic: "borja",
    social: [
      {
        name: 'twitter',
        reference: 'https://www.twitter.com/BorjaDiezGonzal '
      }, {
        name: 'github',
        reference: 'https://www.github.com/DevBorja'
      }
    ]
  }
];

const collaborators = [
  'Beatriz Peñas',
  'Ioritz Cabero',
  'Alain Barrero',
  'Olatz Romero'
];
