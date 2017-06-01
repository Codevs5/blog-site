import React, {Component} from 'react';
import './style/app.scss';
import AppRouter from './containers/AppRouter';

class App extends Component {
    render() {
        return (<AppRouter/>);
    }
}

export default App;
