import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  const loggedOut = () => {
    return (
      <div className='logged-out'>
        <Link to='/login'>Sign in</Link>
        <Link to='/signup'>Create account</Link>
      </div>
    );
  };
  const loggedIn = () => {
    return (
      <div className='logged-in'>
        <p>{currentUser.username}</p>
        <Link to='/upload'>Upload</Link>
        <button onClick={logout}>Sign Out</button>
      </div>
    );
  };
  console.log(currentUser);
  return currentUser ? loggedIn() : loggedOut();
};

export default Greeting;
