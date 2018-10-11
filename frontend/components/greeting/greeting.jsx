import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  render () {
    const loggedOut = () => {
      return (
        <div className='logged-out'>
          <div className='greeting-left'>
            <Link to='/' className='header-link'>
              <h1>MusicMist</h1>
            </Link>
          </div>
          <div className='greeting-right'>
            <Link to='/login'>Sign in</Link>
            <Link to='/signup'>Create account</Link>
          </div>
        </div>
      );
    };

    const loggedIn = () => {
      return (
        <div className='logged-in'>
          <div className='greeting-left'>
            <Link to='/' className='header-link'>
              <h1>MusicMist</h1>
            </Link>
            <Link to='/stream'>Home</Link>
          </div>
          <div className='greeting-right'>
            <Link to='/upload'>Upload</Link>
            <label className='user-dropdown'>
              {this.props.currentUser.username}
              <Link to='/users/{this.props.currentUser.id}'>Profile</Link>
              <button onClick={this.props.logout}>Sign Out</button>
            </label>
          </div>
        </div>
      );
    };

    return this.props.currentUser ? loggedIn() : loggedOut();
  }

};

export default Greeting;
