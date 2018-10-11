import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import IntroContainer from './intro/intro_container';
import GreetingContainer from './greeting/greeting_container';
import LogInContainer from './session/signin_container';
import SignupContainer from './session/signup_container';
import HomeContainer from './home/home_container';

const App  = () => {
  return (
    <div>
      <header>
        <Link to='/' className='header-link'>
          <h1>MusicMist</h1>
        </Link>
        <GreetingContainer />
      </header>
      <main>
        <Switch>
          <Route path='/stream' component={HomeContainer} />
          <Route path='/login' component={LogInContainer} />
          <Route path='/signup' component={SignupContainer} />
          <Route exect path='/' component={IntroContainer} />
        </Switch>
      </main>
      <footer>
        player
      </footer>
    </div>
  );
};

export default App;
