import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react';

//Components
import About from './components/about/About';
import {Home} from './components/home/Home';
import {Contact} from './components/contact/Contact';
import {Error404} from './components/main/Error404';
import {Header} from './components/main/Header';
import {Footer} from './components/main/Footer';

export const AppRouter = () => (
    <Router>
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact component={Error404}/>
            </Switch>
            <Footer/>
        </div>
    </Router>

);
