import React from 'react';
import { Redirect } from 'react-router';

class Intro extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.currentUser ? (
        <Redirect to='/stream' />
      ) : (
        <div className='intro'>
          <h2>Welcome to MusicMist</h2>
        </div>
      )
    );
  }
}

export default Intro;
