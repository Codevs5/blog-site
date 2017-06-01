import { HashRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { PropTypes } from 'react';

//Containers
import HeaderContainer from './HeaderContainer';
import HomeContainer from './HomeContainer';
import FooterContainer from './FooterContainer';
import NotFound from '../components/NotFound';

const AppRouter = () => (
  <HashRouter>
    <div>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="*" component={NotFound} />
      </Switch>
      <FooterContainer />
    </div>
  </HashRouter>
);

export default AppRouter;
