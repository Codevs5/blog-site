import { HashRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { PropTypes } from 'react';

//Containers
import HeaderContainer from './HeaderContainer';
import HomeContainer from './HomeContainer';
import FooterContainer from './FooterContainer';
import AboutContainer from './AboutContainer';
import BlogContainer from './BlogContainer';

import NotFound from '../components/NotFound';

const AppRouter = () => (
  <HashRouter>
    <div>
      <div className="main">
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/about" component={AboutContainer} />
        <Route exact path="/blog" component={BlogContainer} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
      <FooterContainer />
    </div>
  </HashRouter>
);

export default AppRouter;
