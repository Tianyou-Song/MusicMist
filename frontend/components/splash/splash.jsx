import React from 'react';
import { Redirect } from 'react-router';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='intro'>
        <h2>Welcome to MusicMist</h2>
      </div>
    );
  }
}

export default Splash;
