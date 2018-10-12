import React from 'react';
import { Redirect } from 'react-router-dom';

class RedirectTo extends React.Component {
  render() {
    if (this.props.currentUser) {
      return <Redirect to='/stream' />;
    } else {
      return <Redirect to='/' />;
    }
  }
}

export default RedirectTo;
