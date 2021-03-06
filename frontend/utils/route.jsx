import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn, exact}) => {
  return (
    <Route path={path} exact={exact} render={(props) => {
        return (
          loggedIn ? (
            <Redirect to='/stream' />
          ) : (
            <Component {...props} />
          )
        );
      }} />
  );
};

const Protected = ({component: Component, path, loggedIn, exact}) => {
  return (
    <Route path={path} exact={exact} render={(props) => {
        return (
          loggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect to='/login' />
          )
        );
      }} />
  );
};

const mapStateToProps = state => {
  return (
    {loggedIn: Boolean(state.session.currentUser)}
  );
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
