import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SignupContainer from './session/signup_container';

const App  = () => {
  return (
    <div>
      <Route path='/signup' component={SignupContainer} />
    </div>
  );
};

export default App;
