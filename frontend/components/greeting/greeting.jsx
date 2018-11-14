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
        <header className={this.props.isSplash ? 'greeting-transparent' : '' }>
          <div className='logged-out'>
            <div className={this.props.isSplash ? 'greeting-left' : 'greeting-left-border' }>
              <div className='logo-container'>
                <Link to='/' className='header-link'>
                  MusicMist
                </Link>
              </div>
            </div>
            <div className='greeting-right'>
              <button onClick={() => this.props.openModal('signin')}
                className='login'>Sign in</button>
              <button onClick={() => this.props.openModal('signup')}
                className='signup'>Create account</button>
            </div>
          </div>
        </header>
      );
    };

    const loggedIn = () => {
      return (
        <header>
          <div className='logged-in'>
            <div className={this.props.isSplash ? 'greeting-left' : 'greeting-left-border' }>
              <div className='logo-container'>
                <Link to='/' className='header-link'>
                </Link>
              </div>
              <Link to='/stream'>Home</Link>
            </div>
            <div className='greeting-right'>
              <Link className='greeting-upload' to='/upload'>Upload</Link>
              <div className={this.state.dropdownOpen ?
                  'user-dropdown user-dropdown-show' :
                  'user-dropdown user-dropdown-hidden'}
                  onClick={this.dropdownClick()}>
                {this.props.currentUser.username}
                <ul>
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
        </header>
      );
    };

    return this.props.currentUser ? loggedIn() : loggedOut();
  }

};

export default Greeting;
