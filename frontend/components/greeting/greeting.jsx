import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
  }

  dropdownClick() {
    return e => {
      this.setState({dropdownOpen: !this.state.dropdownOpen});
    };
  }

  render () {
    const loggedOut = () => {
      return (
        <div className='logged-out'>
          <div className='greeting-left'>
            <div className='logo-container'>
              <Link to='/' className='header-link'>
                MusicMist
              </Link>
            </div>
          </div>
          <div className='greeting-right'>
            <Link className='login' to='/login'>Sign in</Link>
            <Link className='signup' to='/signup'>Create account</Link>
          </div>
        </div>
      );
    };

    const loggedIn = () => {
      return (
        <div className='logged-in'>
          <div className='greeting-left'>
            <div className='logo-container'>
              <Link to='/' className='header-link'>
              </Link>
            </div>
            <Link to='/stream'>Home</Link>
          </div>
          <div className='greeting-right'>
            <Link to='/upload'>Upload</Link>
            <div className='user-dropdown' onClick={this.dropdownClick()}>
              {this.props.currentUser.username}
              <ul className={this.state.dropdownOpen ?
                  'user-dropdown-ul' : 'user-dropdown-ul-hidden'}>
                <li className='dropdown-li'>
                  <Link to='/users/{this.props.currentUser.id}'>Profile</Link>
                </li>
                <li className='dropdown-li'>
                  <button onClick={this.props.logout}>Sign Out</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    };

    return this.props.currentUser ? loggedIn() : loggedOut();
  }

};

export default Greeting;
