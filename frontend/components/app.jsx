import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import {AuthRoute, ProtectedRoute} from '../utils/route';

import RedirectToContainer from './redirect_to/redirect_to_container';
import SplashContainer from './splash/splash_container';
import GreetingContainer from './greeting/greeting_container';
import LogInContainer from './session/signin_container';
import SignupContainer from './session/signup_container';
import HomeContainer from './home/home_container';
import ModalContainer from './session/modal_container';
import SongUploadContainer from './song/upload_container';
import SongShowContainer from './song/show_container';
import SongEditContainer from './song/edit_container';
// import PlayerContainer from './player/player_container';

const App  = () => {
  return (
    <div className='app'>
      <GreetingContainer />
      <main>
        <Switch>
          <ProtectedRoute path='/stream' component={HomeContainer} />
          <AuthRoute path='/login' component={LogInContainer} />
          <AuthRoute path='/signin' component={LogInContainer} />
          <AuthRoute path='/signup' component={SignupContainer} />
          <AuthRoute path='/register' component={SignupContainer} />
          <ProtectedRoute path='/upload' component={SongUploadContainer} />
          <Route exact path='/tracks/:id' component={SongShowContainer} />
          <ProtectedRoute path='/tracks/:id/edit' component={SongEditContainer} />
          <AuthRoute exact path='/' component={SplashContainer} />
          <Route path='/' component={RedirectToContainer} />
        </Switch>
      </main>
      <ModalContainer />
    </div>
  );
};

export default App;
