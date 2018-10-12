import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import {AuthRoute, ProtectedRoute} from '../utils/route_util';

import RedirectToContainer from './redirect_to/redirect_to_container';
import SplashContainer from './splash/splash_container';
import GreetingContainer from './greeting/greeting_container';
import LogInContainer from './session/signin_container';
import SignupContainer from './session/signup_container';
import HomeContainer from './home/home_container';

const App  = () => {
  return (
    <div>
      <header>
        <GreetingContainer />
      </header>
      <main>
        <Switch>
          <ProtectedRoute path='/stream' component={HomeContainer} />
          <AuthRoute path='/login' component={LogInContainer} />
          <AuthRoute path='/signup' component={SignupContainer} />
          <AuthRoute exact path='/' component={SplashContainer} />
          <Route path='/' component={RedirectToContainer} />
        </Switch>
      </main>
      <footer>
        player
      </footer>
    </div>
  );
};

export default App;
